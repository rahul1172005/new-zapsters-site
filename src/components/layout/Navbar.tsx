import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/pic3.png?inline';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between relative">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center group relative">
                        <img
                            src={logo}
                            alt="Zapsters Logo"
                            className="w-80 h-80 object-contain relative translate-x-0 translate-y-3"
                        />
                    </Link>
                </div>

                {/* Centered Nav Links */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8 text-sm font-semibold text-black">
                    <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
                    <Link to="/services" className="hover:text-red-500 transition-colors">Services</Link>
                    <Link to="/testimonials" className="hover:text-red-500 transition-colors">Testimonials</Link>
                    <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a href="tel:+919342408432">
                        <button className="border border-black/20 text-black px-6 py-2.5 rounded-full text-sm font-bold hover:bg-black hover:text-white transition-colors uppercase tracking-widest">
                            Call Us
                        </button>
                    </a>
                    <Link to="/join">
                        <button className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors uppercase tracking-widest">
                            Join ZAPSTERS
                        </button>
                    </Link>
                </div>

                <button
                    className="md:hidden text-black z-50 p-2 hover:bg-black/5 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden flex flex-col"
                    >
                        <div className="flex flex-col space-y-8">
                            {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase()}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-black to-gray-700 hover:to-red-500 transition-all border-b border-black/5 pb-4"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto mb-12 space-y-6">
                            <a href="tel:+919342408432" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full border border-black/20 text-black py-4 rounded-full text-lg font-bold hover:bg-black hover:text-white transition-colors uppercase tracking-widest">
                                    Call Us
                                </button>
                            </a>
                            <Link to="/join" onClick={() => setIsMobileMenuOpen(false)}>
                                <button className="w-full bg-red-600 text-white py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-colors border border-red-500/20 uppercase tracking-widest">
                                    Join ZAPSTERS
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
