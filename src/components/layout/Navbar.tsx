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
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
                    <Link to="/about" className="hover:text-red-500 transition-colors">About</Link>
                    <Link to="/services" className="hover:text-red-500 transition-colors">Services</Link>
                    <Link to="/testimonials" className="hover:text-red-500 transition-colors">Testimonials</Link>
                    <Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center space-x-6">
                    <button className="text-sm font-medium hover:text-white transition-colors text-gray-400">Log In</button>
                    <button className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors">
                        Sign Up
                    </button>
                </div>

                <button
                    className="md:hidden text-white z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl pt-32 px-6 md:hidden flex flex-col"
                    >
                        <div className="flex flex-col space-y-8">
                            {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase()}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 hover:to-red-500 transition-all border-b border-white/5 pb-4"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto mb-12 space-y-6">
                            <button className="w-full text-lg text-gray-400 font-medium hover:text-white transition-colors py-4">
                                Log In
                            </button>
                            <button className="w-full bg-red-600 text-white py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                                Sign Up
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
