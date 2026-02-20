
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Trash2, CheckCircle, MessageSquare, Activity, Users, Clock, AlertCircle } from 'lucide-react';
import { db, auth } from '../lib/firebase';
import { collection, getDocs, updateDoc, doc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
const AdminDashboard = () => {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [activeTab, setActiveTab] = useState<'all' | 'proposals' | 'consultations'>('all');
    const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        const fetchSubmissions = async () => {
            try {
                const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(document => {
                    const docData = document.data();
                    return {
                        id: document.id,
                        ...docData,
                        createdAt: docData.createdAt?.toDate ? docData.createdAt.toDate().toISOString() : new Date().toISOString()
                    };
                });
                setSubmissions(data);
                setLoading(false);
            } catch (err) {
                console.error(err);
                if ((err as Error).message.includes('permission-denied')) {
                    localStorage.removeItem('adminToken');
                    navigate('/admin/login');
                }
                setLoading(false);
            }
        };

        fetchSubmissions();
    }, [navigate]);

    const handleLogout = async () => {
        try { await signOut(auth); } catch (error) { }
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const submissionRef = doc(db, 'contacts', id);
            await updateDoc(submissionRef, { status: newStatus });
            setSubmissions(prev => prev.map(sub => sub.id === id ? { ...sub, status: newStatus } : sub));
            if (selectedSubmission && selectedSubmission.id === id) {
                setSelectedSubmission({ ...selectedSubmission, status: newStatus });
            }
        } catch (error) {
            console.error("Error updating status: ", error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Permanent delete? This action cannot be undone.')) {
            try {
                await deleteDoc(doc(db, 'contacts', id));
                setSubmissions(prev => prev.filter(sub => sub.id !== id));
                if (selectedSubmission?.id === id) setSelectedSubmission(null);
            } catch (error) {
                console.error("Error deleting document: ", error);
            }
        }
    };

    const filteredSubmissions = submissions.filter(sub => {
        const matchesSearch =
            (sub.fullName || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (sub.email || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
            (sub.subject || '').toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'all' || sub.status === filterStatus;

        // Tab Filtering Logic
        const isConsultation = sub.subject === 'Welcome Popup Submission';
        const matchesTab =
            activeTab === 'all' ? true :
                activeTab === 'consultations' ? isConsultation :
                    !isConsultation; // 'proposals' tab

        return matchesSearch && matchesStatus && matchesTab;
    });

    const stats = {
        total: submissions.length,
        new: submissions.filter(s => s.status === 'new').length,
        responded: submissions.filter(s => s.status === 'replied').length
    };

    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-red-500/30 selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 px-6 container mx-auto max-w-[1600px]">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-black/5 pb-8">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-700 mb-2">
                            Command Center
                        </h1>
                        <p className="text-gray-500 text-lg">Manage inquiries and client relationships.</p>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-[#050505] metal-stroke rounded-[24px] p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Total Inquiries</p>
                                <h3 className="text-5xl font-bold text-white">{stats.total}</h3>
                            </div>
                            <Activity className="text-red-500 opacity-50" size={32} />
                        </div>
                    </div>

                    <div className="bg-[#050505] metal-stroke rounded-[24px] p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Pending Actions</p>
                                <h3 className="text-5xl font-bold text-white">{stats.new}</h3>
                            </div>
                            <AlertCircle className="text-red-500" size={32} />
                        </div>
                    </div>

                    <div className="bg-[#050505] metal-stroke rounded-[24px] p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Replied</p>
                                <h3 className="text-5xl font-bold text-white">{stats.responded}</h3>
                            </div>
                            <CheckCircle className="text-red-500" size={32} />
                        </div>
                    </div>
                </div>

                {/* Tabs to Separate Sections */}
                <div className="flex gap-4 mb-8">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'all'
                            ? 'bg-black text-white'
                            : 'bg-black/5 text-gray-500 border border-black/5 hover:text-black'
                            }`}
                    >
                        All Inquiries
                    </button>
                    <button
                        onClick={() => setActiveTab('proposals')}
                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'proposals'
                            ? 'bg-black text-white'
                            : 'bg-black/5 text-gray-500 border border-black/5 hover:text-black'
                            }`}
                    >
                        Project Proposals
                    </button>
                    <button
                        onClick={() => setActiveTab('consultations')}
                        className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${activeTab === 'consultations'
                            ? 'bg-red-600 text-white shadow-lg shadow-red-500/20'
                            : 'bg-black/5 text-gray-500 border border-black/5 hover:text-black'
                            }`}
                    >
                        Free Consultations
                    </button>
                </div>

                {/* Controls */}
                <div className="bg-[#050505] border border-[#1a1a1a] rounded-t-[24px] border-b-0 p-4 flex flex-col md:flex-row gap-4 items-center justify-between z-20 relative">
                    <div className="relative w-full md:w-96 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-red-500 transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search database..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-red-500 transition-all placeholder:text-gray-600"
                        />
                    </div>

                    <div className="flex gap-4 w-full md:w-auto">
                        <div className="relative flex-1 md:flex-none md:w-48">
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="w-full appearance-none bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl pl-4 pr-10 py-3 text-white focus:outline-none focus:border-red-500 transition-all cursor-pointer"
                            >
                                <option value="all">All Statuses</option>
                                <option value="new">New</option>
                                <option value="read">Read</option>
                                <option value="replied">Replied</option>
                            </select>
                            <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                        </div>

                        <button
                            onClick={handleLogout}
                            className="px-6 py-3 bg-red-600/10 text-red-500 border border-red-900/30 rounded-xl hover:bg-red-600 hover:text-white transition-all font-bold text-sm tracking-wide uppercase"
                        >
                            Logout System
                        </button>
                    </div>
                </div>

                {/* Main Data Grid */}
                <div className="bg-[#050505] border border-[#1a1a1a] rounded-b-[24px] border-t-0 overflow-hidden relative min-h-[500px]">
                    {/* Background Grid */}
                    {/* Background Grid - REMOVED */}

                    <div className="overflow-x-auto relative z-10">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-[#0a0a0a]">
                                    <th className="p-6 font-medium text-gray-500 text-xs uppercase tracking-wider w-20">ID</th>
                                    <th className="p-6 font-medium text-gray-500 text-xs uppercase tracking-wider">Client Details</th>
                                    <th className="p-6 font-medium text-gray-500 text-xs uppercase tracking-wider">Subject</th>
                                    <th className="p-6 font-medium text-gray-500 text-xs uppercase tracking-wider">Status</th>
                                    <th className="p-6 font-medium text-gray-500 text-xs uppercase tracking-wider">Received</th>
                                    <th className="p-6 font-medium text-gray-500 text-xs uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {loading ? (
                                    <tr>
                                        <td colSpan={6} className="p-20 text-center text-gray-500">
                                            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mb-4"></div>
                                            <p>Syncing Database...</p>
                                        </td>
                                    </tr>
                                ) : filteredSubmissions.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="p-20 text-center text-gray-500">No records found matching your criteria.</td>
                                    </tr>
                                ) : (
                                    filteredSubmissions.map((sub) => (
                                        <tr
                                            key={sub.id}
                                            onClick={() => setSelectedSubmission(sub)}
                                            className="group hover:bg-white/[0.02] transition-colors cursor-pointer"
                                        >
                                            <td className="p-6 text-gray-600 font-mono text-xs">#{sub.id}</td>
                                            <td className="p-6">
                                                <div className="font-bold text-white text-lg mb-1">{sub.fullName}</div>
                                                <div className="text-sm text-gray-500 flex flex-col gap-0.5">
                                                    <span>{sub.email}</span>
                                                    <span>{sub.phone}</span>
                                                </div>
                                            </td>
                                            <td className="p-6">
                                                <span className="text-gray-300 font-medium">{sub.subject}</span>
                                            </td>
                                            <td className="p-6">
                                                <div className={`
                                                    inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border
                                                    ${sub.status === 'new' ? 'bg-red-500/10 text-red-500 border-red-500/20' :
                                                        sub.status === 'read' ? 'bg-white/5 text-gray-400 border-white/10' :
                                                            'bg-white/10 text-white border-white/20'}
                                                `}>
                                                    <span className={`w-1.5 h-1.5 rounded-full mr-2 ${sub.status === 'new' ? 'bg-red-500' :
                                                        sub.status === 'read' ? 'bg-gray-500' : 'bg-white'
                                                        }`} />
                                                    {sub.status.toUpperCase()}
                                                </div>
                                            </td>
                                            <td className="p-6 text-gray-500 text-sm">
                                                {new Date(sub.createdAt).toLocaleDateString()}
                                                <span className="block text-xs text-gray-600 mt-1">{new Date(sub.createdAt).toLocaleTimeString()}</span>
                                            </td>
                                            <td className="p-6 text-right">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setSelectedSubmission(sub); }}
                                                    className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/5"
                                                >
                                                    View Details
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Detail View Slide-over / Modal */}
            <AnimatePresence>
                {selectedSubmission && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center md:justify-end md:items-stretch">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80"
                            onClick={() => setSelectedSubmission(null)}
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full md:w-[600px] h-full bg-[#050505] border-l border-white/10 shadow-2xl flex flex-col"
                        >
                            <div className="p-8 border-b border-white/10 flex justify-between items-start bg-[#0a0a0a]">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Inquiry Details</h2>
                                    <span className="text-gray-500 font-mono text-sm">ID: #{selectedSubmission.id}</span>
                                </div>
                                <button
                                    onClick={() => setSelectedSubmission(null)}
                                    className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 md:space-y-8 min-h-0 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 overscroll-contain">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center text-2xl font-bold text-gray-400">
                                            {selectedSubmission.fullName.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{selectedSubmission.fullName}</h3>
                                            <p className="text-red-500">{selectedSubmission.email}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <label className="text-xs text-gray-500 uppercase tracking-wider font-bold">Contact</label>
                                            <p className="text-white mt-1 font-mono">{selectedSubmission.phone}</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <label className="text-xs text-gray-500 uppercase tracking-wider font-bold">Submitted</label>
                                            <p className="text-white mt-1">{new Date(selectedSubmission.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                                        <label className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-2 block">Subject</label>
                                        <p className="text-white text-lg font-medium">{selectedSubmission.subject}</p>
                                    </div>

                                    <div>
                                        <label className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-3 block">Message Content</label>
                                        <div className="p-6 bg-[#0a0a0a] rounded-xl border border-white/10 text-gray-300 leading-relaxed whitespace-pre-wrap">
                                            {selectedSubmission.message}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <label className="text-xs text-gray-500 uppercase tracking-wider font-bold">Planned Budget</label>
                                            <p className="text-white mt-1 font-bold text-lg">{selectedSubmission.budget || 'N/A'}</p>
                                        </div>
                                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                                            <label className="text-xs text-gray-500 uppercase tracking-wider font-bold">Project Scope</label>
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {selectedSubmission.projectScope ? JSON.parse(selectedSubmission.projectScope).map((tag: string) => (
                                                    <span key={tag} className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300">{tag}</span>
                                                )) : <span className="text-gray-500 text-sm">Not specified</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 border-t border-white/10 bg-[#0a0a0a] space-y-4">
                                <div className="grid grid-cols-3 gap-3">
                                    <button
                                        onClick={() => updateStatus(selectedSubmission.id, 'new')}
                                        className={`py-3 rounded-lg font-bold text-sm transition-colors ${selectedSubmission.status === 'new' ? 'bg-red-600 text-white shadow-lg shadow-red-900/40' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                                    >
                                        New
                                    </button>
                                    <button
                                        onClick={() => updateStatus(selectedSubmission.id, 'read')}
                                        className={`py-3 rounded-lg font-bold text-sm transition-colors ${selectedSubmission.status === 'read' ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                                    >
                                        Read
                                    </button>
                                    <button
                                        onClick={() => updateStatus(selectedSubmission.id, 'replied')}
                                        className={`py-3 rounded-lg font-bold text-sm transition-colors ${selectedSubmission.status === 'replied' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
                                    >
                                        Replied
                                    </button>
                                </div>
                                <button
                                    onClick={() => handleDelete(selectedSubmission.id)}
                                    className="w-full py-4 flex items-center justify-center gap-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors font-medium"
                                >
                                    <Trash2 size={18} /> Delete Record Properly
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AdminDashboard;
