import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';


import { useState } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        budget: '',
        projectScope: [] as string[]
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleScopeChange = (tag: string) => {
        setFormData(prev => {
            const scope = prev.projectScope.includes(tag)
                ? prev.projectScope.filter(t => t !== tag)
                : [...prev.projectScope, tag];
            return { ...prev, projectScope: scope };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('idle');

        try {
            await addDoc(collection(db, 'contacts'), {
                ...formData,
                status: 'new',
                createdAt: serverTimestamp(),
                projectScope: JSON.stringify(formData.projectScope)
            });

            setStatus('success');
            setFormData({ fullName: '', email: '', phone: '', subject: '', message: '', budget: '', projectScope: [] });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="bg-white min-h-screen text-black selection:bg-red-500/30 selection:text-white overflow-x-hidden flex flex-col font-sans w-full">
            <Navbar />

            <main className="flex-grow pt-32 md:pt-40 relative w-full">
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-50 mix-blend-overlay" />

                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* --- LEFT SIDE: THE PITCH --- */}
                        <div className="lg:sticky lg:top-40 h-fit mb-12 lg:mb-0">
                            <h1 className="text-5xl md:text-[8rem] font-semibold text-black tracking-tight leading-[0.9] mb-8 md:mb-12">
                                Start the <br />
                                Project.
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-500 font-light max-w-xl mb-12 md:mb-20 border-l border-black/10 pl-6 md:pl-8">
                                You have a vision. We have the firepower. Fill out the application form to begin the partnership process.
                            </p>

                            <div className="space-y-8 md:space-y-12">
                                <div>
                                    <h4 className="text-xs md:text-sm font-bold text-black uppercase tracking-widest mb-2 md:mb-4">Contact</h4>
                                    <a href="mailto:zapsters23@gmail.com" className="text-2xl md:text-3xl font-bold text-black hover:text-red-500 transition-colors cursor-pointer break-all block mb-2">zapsters23@gmail.com</a>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+919342408432" className="text-xl md:text-2xl font-bold text-gray-500 hover:text-black transition-colors">+91 93424 08432</a>
                                        <a href="https://wa.me/919342408432" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-black transition-colors tracking-wide">Via WhatsApp ↗</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xs md:text-sm font-bold text-black uppercase tracking-widest mb-2 md:mb-4">Headquarters</h4>
                                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                            29, Silambu St, Senthil Nagar,<br />
                                            Loganathan Nagar, Padmanabha Nagar,<br />
                                            Choolaimedu, Chennai,<br />
                                            Tamil Nadu 600094
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs md:text-sm font-bold text-black uppercase tracking-widest mb-2 md:mb-4">Connect</h4>
                                        <div className="flex flex-col gap-2">
                                            <a href="https://www.instagram.com/zapster_25/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">Instagram ↗</a>
                                            <a href="http://linkedin.com/company/zapsters-inc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">LinkedIn ↗</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- RIGHT SIDE: THE FORM --- */}
                        <div
                            className="bg-gradient-to-br from-[#080808] to-[#020202] metal-stroke rounded-[40px] p-6 md:p-20 mb-20 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />
                            <div className="relative z-10">
                                <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
                                    <div className="space-y-6 md:space-y-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-shadow-none">01. Your Details</h3>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Full Name"
                                                required
                                                className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                required
                                                className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                required
                                                className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Subject"
                                                required
                                                className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-shadow-none">02. Project Scope</h3>
                                        <div className="flex flex-wrap gap-3 md:gap-4">
                                            {['Web Development', 'Mobile App', 'UI/UX Design', 'Branding', 'Strategy', 'AI Integration'].map((tag) => (
                                                <label key={tag} className="cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        className="hidden peer"
                                                        checked={formData.projectScope.includes(tag)}
                                                        onChange={() => handleScopeChange(tag)}
                                                    />
                                                    <span className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 text-sm md:text-base text-gray-400 peer-checked:bg-white peer-checked:text-black peer-checked:font-bold transition-all hover:border-white bg-white/5">
                                                        {tag}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-shadow-none">03. Budget</h3>
                                        <div className="flex flex-wrap gap-3 md:gap-4">
                                            {['₹2,000 - ₹10,000', '₹10,000 - ₹30,000', '₹30,000 - ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000+'].map((tag) => (
                                                <label key={tag} className="cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="budget"
                                                        value={tag}
                                                        checked={formData.budget === tag}
                                                        onChange={handleChange}
                                                        className="hidden peer"
                                                    />
                                                    <span className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 text-sm md:text-base text-gray-400 peer-checked:bg-red-500 peer-checked:text-white peer-checked:border-red-500 peer-checked:font-bold transition-all hover:border-white bg-white/5">
                                                        {tag}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-shadow-none">04. The Vision</h3>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project..."
                                            required
                                            className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors h-32 md:h-40 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-red-600 text-white font-bold text-xl md:text-2xl py-6 md:py-8 rounded-full hover:bg-red-700 transition-colors uppercase tracking-[0.2em] border border-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Proposal'}
                                    </button>
                                    {status === 'success' && <p className="text-white text-center text-lg mt-4 font-bold tracking-wide">Message sent successfully!</p>}
                                    {status === 'error' && <p className="text-red-500 text-center text-lg mt-4 font-bold tracking-wide">Failed to send message. Please try again.</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};


export default Contact;
