
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'zapsters_internal_secret_key_change_in_prod_998877'; // In a real app, use env var

// Middleware
const rateLimit = require('express-rate-limit');
app.use(cors());
app.use(express.json());

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per windowMs
    message: { error: 'Too many login attempts, please try again after 15 minutes' }
});

// Database Setup
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    // Contacts Table
    db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullName TEXT,
        email TEXT,
        phone TEXT,
        subject TEXT,
        message TEXT,
        status TEXT DEFAULT 'new',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        projectScope TEXT,
        budget TEXT
    )`);

    // Migration for existing tables
    db.run("ALTER TABLE contacts ADD COLUMN projectScope TEXT", (err) => { /* ignore error if exists */ });
    db.run("ALTER TABLE contacts ADD COLUMN budget TEXT", (err) => { /* ignore error if exists */ });

    // Admins Table
    db.run(`CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT
    )`);

    // Force Reset Admin User on Startup (Ensures password matches environment)
    const adminUser = 'Adminzap';
    const adminPass = '11691169';

    db.run("DELETE FROM admins WHERE username = ?", [adminUser], (err) => {
        if (err) console.error("Error clearing admin user:", err);

        const saltRounds = 10;
        bcrypt.hash(adminPass, saltRounds, (err, hash) => {
            if (err) {
                console.error("Error hashing password:", err);
                return;
            }
            db.run("INSERT INTO admins (username, password) VALUES (?, ?)", [adminUser, hash], (err) => {
                if (err) console.error("Error creating admin user:", err);
                else console.log(`[SECURE] Admin user '${adminUser}' reset successfully.`);
            });
        });
    });
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// API Routes

// 1. Submit Contact Form
app.post('/api/contact', (req, res) => {
    const { fullName, email, phone, subject, message, projectScope, budget } = req.body;

    // Server-side validation
    if (!fullName || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const stmt = db.prepare("INSERT INTO contacts (fullName, email, phone, subject, message, projectScope, budget) VALUES (?, ?, ?, ?, ?, ?, ?)");
    stmt.run(fullName, email, phone, subject, message, JSON.stringify(projectScope || []), budget || '', function (err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Submission received', id: this.lastID });
    });
    stmt.finalize();
});

// 2. Admin Login
app.post('/api/login', loginLimiter, (req, res) => {
    const { username, password } = req.body;

    db.get("SELECT * FROM admins WHERE username = ?", [username], (err, row) => {
        if (err) {
            console.error('Login DB Error:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        if (!row) {
            console.warn(`Login Failed: User '${username}' not found.`);
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        bcrypt.compare(password, row.password, (err, result) => {
            if (err) console.error('Bcrypt Error:', err);

            if (result) {
                console.log(`Login Success: User '${username}'`);
                const token = jwt.sign({ username: row.username, id: row.id }, JWT_SECRET, { expiresIn: '24h' });
                res.json({ token });
            } else {
                console.warn(`Login Failed: Password mismatch for '${username}'`);
                res.status(401).json({ error: 'Invalid credentials' });
            }
        });
    });
});

// 3. Get Submissions (Protected)
app.get('/api/admin/submissions', authenticateToken, (req, res) => {
    db.all("SELECT * FROM contacts ORDER BY createdAt DESC", [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json(rows);
    });
});

// 4. Update Submission Status (Protected)
app.put('/api/admin/submissions/:id/status', authenticateToken, (req, res) => {
    const { status } = req.body;
    const { id } = req.params;

    if (!['new', 'read', 'replied'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
    }

    db.run("UPDATE contacts SET status = ? WHERE id = ?", [status, id], function (err) {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ message: 'Status updated' });
    });
});

// 5. Delete Submission (Protected) - Optional
app.delete('/api/admin/submissions/:id', authenticateToken, (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM contacts WHERE id = ?", [id], function (err) {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.json({ message: 'Deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
