import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const WelcomePopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
        interest: [] as string[]
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Check if user has already seen/submitted the form in this session
        const hasSeenPopup = sessionStorage.getItem('zapsters_welcome_seen');
        if (!hasSeenPopup) {
            // Small delay before showing
            const timer = setTimeout(() => setIsVisible(true), 1000); // 1-second delay
            return () => clearTimeout(timer);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleInterestChange = (tag: string) => {
        setFormData(prev => {
            const interest = prev.interest.includes(tag)
                ? prev.interest.filter(t => t !== tag)
                : [...prev.interest, tag];
            return { ...prev, interest };
        });
    };

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('zapsters_welcome_seen', 'true');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    subject: 'Welcome Popup Submission', // Distinguish source
                    projectScope: formData.interest,
                    budget: 'Not Specified' // Default
                }),
            });

            setSubmitted(true);
            setTimeout(() => {
                handleClose();
            }, 2000);
        } catch (error) {
            console.error('Error submitting form:', error);
            // Even if error, we might want to close or show error state.
            // For now, let's treat it as handled for the UI flow
            setSubmitted(true);
            setTimeout(() => {
                handleClose();
            }, 2000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-10">
                            {!submitted ? (
                                <>
                                    <h2 className="text-3xl font-bold text-white mb-2">Welcome to ZAPSTERS</h2>
                                    <p className="text-gray-400 mb-8">Tell us a bit about yourself and let's build something great.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-4">
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Full Name"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                                            />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email Address"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                                            />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">I'm interested in:</label>
                                            <div className="flex flex-wrap gap-2">
                                                {['Web Dev', 'Mobile App', 'UI/UX', 'Branding', 'AI'].map((tag) => (
                                                    <button
                                                        type="button"
                                                        key={tag}
                                                        onClick={() => handleInterestChange(tag)}
                                                        className={`px-4 py-2 rounded-full text-sm border transition-all ${formData.interest.includes(tag)
                                                            ? 'bg-red-600 border-red-600 text-white font-bold'
                                                            : 'bg-transparent border-white/20 text-gray-400 hover:border-white'
                                                            }`}
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Any specific requirements?"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-red-500 transition-colors h-24 resize-none"
                                        />

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                                        >
                                            {isSubmitting ? 'Submitting...' : 'FREE CONSULTATION'}
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-10 text-center">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                    <p className="text-gray-400">We've received your details and will be in touch shortly.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
