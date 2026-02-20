import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            navigate('/admin/dashboard');
        }
    }, [navigate]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem('adminToken', token);
            navigate('/admin/dashboard');
        } catch (err: any) {
            setError('Invalid credentials or login failed');
        }
    };

    return (
        <div className="min-h-screen bg-white text-black flex items-center justify-center p-6">
            <div
                className="max-w-md w-full bg-[#050505] metal-stroke rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700">Admin Access</h2>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-white/10 focus:outline-none focus:border-red-500 transition-colors"
                                placeholder="Admin Email"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-transparent border-b border-white/20 py-3 text-lg text-white placeholder:text-white/10 focus:outline-none focus:border-red-500 transition-colors"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white font-bold text-lg py-4 rounded-full hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)] mt-8"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
