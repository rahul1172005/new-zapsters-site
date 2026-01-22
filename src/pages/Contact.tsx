import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';


const Contact = () => {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-red-500/30 selection:text-white overflow-x-hidden flex flex-col font-sans w-full">
            <Navbar />

            <main className="flex-grow pt-32 md:pt-40 relative w-full">
                <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-50 mix-blend-overlay" />

                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* --- LEFT SIDE: THE PITCH --- */}
                        <div className="lg:sticky lg:top-40 h-fit mb-12 lg:mb-0">
                            <h1 className="text-5xl md:text-[8rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-[0.9] mb-8 md:mb-12">
                                Start the <br />
                                Project.
                            </h1>
                            <p className="text-lg md:text-2xl text-gray-400 font-light max-w-xl mb-12 md:mb-20 border-l border-white/20 pl-6 md:pl-8">
                                You have a vision. We have the firepower. Fill out the application form to begin the partnership process.
                            </p>

                            <div className="space-y-8 md:space-y-12">
                                <div>
                                    <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest mb-2 md:mb-4">Contact</h4>
                                    <a href="mailto:zapsters23@gmail.com" className="text-2xl md:text-3xl font-bold text-white hover:text-red-500 transition-colors cursor-pointer break-all block mb-2">zapsters23@gmail.com</a>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+919342408432" className="text-xl md:text-2xl font-bold text-gray-400 hover:text-white transition-colors">+91 93424 08432</a>
                                        <a href="https://wa.me/919342408432" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-500 hover:text-white transition-colors tracking-wide">Via WhatsApp ↗</a>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest mb-2 md:mb-4">Headquarters</h4>
                                        <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                            29, Silambu St, Senthil Nagar,<br />
                                            Loganathan Nagar, Padmanabha Nagar,<br />
                                            Choolaimedu, Chennai,<br />
                                            Tamil Nadu 600094
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest mb-2 md:mb-4">Connect</h4>
                                        <div className="flex flex-col gap-2">
                                            <a href="https://www.instagram.com/zapsters" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">Instagram ↗</a>
                                            <a href="http://linkedin.com/company/zapsters-inc" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">LinkedIn ↗</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- RIGHT SIDE: THE FORM --- */}
                        <div
                            className="bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] rounded-[40px] p-6 md:p-20 mb-20 relative overflow-hidden shadow-2xl ring-1 ring-[#1a1a1a]/60"
                            style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50" />
                            <div className="relative z-10">
                                <form className="space-y-12 md:space-y-16">
                                    <div className="space-y-6 md:space-y-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">01. Your Details</h3>
                                        <div className="relative group">
                                            <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors" />
                                        </div>
                                        <div className="relative group">
                                            <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors" />
                                        </div>
                                        <div className="relative group">
                                            <input type="text" placeholder="Company / Organization" className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors" />
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">02. Project Scope</h3>
                                        <div className="flex flex-wrap gap-3 md:gap-4">
                                            {['Web Development', 'Mobile App', 'UI/UX Design', 'Branding', 'Strategy', 'AI Integration'].map((tag) => (
                                                <label key={tag} className="cursor-pointer">
                                                    <input type="checkbox" className="hidden peer" />
                                                    <span className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 text-sm md:text-base text-gray-400 peer-checked:bg-white peer-checked:text-black peer-checked:font-bold transition-all hover:border-white backdrop-blur-sm bg-white/5">
                                                        {tag}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">03. Budget</h3>
                                        <div className="flex flex-wrap gap-3 md:gap-4">
                                            {['< ₹10 Lakh', '₹10L - ₹50L', '₹50L - ₹2 Cr', '₹2 Cr +'].map((tag) => (
                                                <label key={tag} className="cursor-pointer">
                                                    <input type="radio" name="budget" className="hidden peer" />
                                                    <span className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20 text-sm md:text-base text-gray-400 peer-checked:bg-red-500 peer-checked:text-white peer-checked:border-red-500 peer-checked:font-bold transition-all hover:border-white backdrop-blur-sm bg-white/5">
                                                        {tag}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6 md:space-y-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">04. The Vision</h3>
                                        <textarea placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-white/20 py-4 md:py-6 text-lg md:text-xl text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 transition-colors h-32 md:h-40 resize-none"></textarea>
                                    </div>

                                    <button type="button" className="w-full bg-red-600 text-white font-bold text-xl md:text-2xl py-6 md:py-8 rounded-full hover:bg-red-700 transition-colors uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                                        Send Proposal
                                    </button>
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
