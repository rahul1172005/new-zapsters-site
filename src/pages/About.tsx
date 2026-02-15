import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { LazyImage } from '../components/LazyImage';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

import pic11 from '../assets/pic11.jpg';
import pic12 from '../assets/pic12.jpg';
import pic13 from '../assets/pic13.jpg';
import pic14 from '../assets/pic14.jpg';
import pic112 from '../assets/pic112.png';
import pic113 from '../assets/pic113.png';
import pic115 from '../assets/pic115.png';
import pic118 from '../assets/pic118.jpg';
import pic222 from '../assets/pic222.jpg';
import pic223 from '../assets/pic223.jpg';

// Team Data
// Team Data
const teamMembers = [
    { id: 1, name: "Raghunandhan", role: "Vice President", image: pic222 },
    { id: 6, name: "Dhaya", role: "Developer", image: pic223 },
    { id: 2, name: "Praveen N", role: "3D Animator & Designer", image: pic222 },
    { id: 8, name: "Dakshini", role: "Developer", image: pic223 },
    { id: 3, name: "Rithik Balaji", role: "UI/UX Designer", image: pic222 },
    { id: 4, name: "Vishal R", role: "3D Animator & Designer", image: pic222 },
    { id: 5, name: "Sanjay Akash", role: "Developer", image: pic222 },

    { id: 7, name: "Sadhanan", role: "Data Analyst", image: pic223 },

];

const TEAM_CARD_WIDTH_DESKTOP = 260;
const TEAM_CARD_WIDTH_MOBILE = 220;
const TEAM_GAP = 32;
const TEAM_SET_LENGTH = teamMembers.length;

const About = () => {
    // --- CAROUSEL LOGIC ---
    const [currentIndex, setCurrentIndex] = useState(TEAM_SET_LENGTH);
    const [isAnimating, setIsAnimating] = useState(false);
    const [cardWidth, setCardWidth] = useState(TEAM_CARD_WIDTH_DESKTOP);
    const x = useMotionValue(0);

    useEffect(() => {
        const updateWidth = () => {
            const newWidth = window.innerWidth < 768 ? TEAM_CARD_WIDTH_MOBILE : TEAM_CARD_WIDTH_DESKTOP;
            setCardWidth(newWidth);
            // Instant reset
            x.set(-currentIndex * (newWidth + TEAM_GAP));
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [currentIndex, x]);

    const moveCarousel = useCallback((direction: 'left' | 'right') => {
        if (isAnimating) return;
        setIsAnimating(true);

        const step = cardWidth + TEAM_GAP;
        const newIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;

        setCurrentIndex(newIndex);

        animate(x, -newIndex * step, {
            type: "spring", stiffness: 280, damping: 30, mass: 1,
            onComplete: () => {
                setIsAnimating(false);
                if (newIndex >= 3 * TEAM_SET_LENGTH) {
                    const resetIndex = newIndex - TEAM_SET_LENGTH;
                    setCurrentIndex(resetIndex);
                    x.set(-resetIndex * step);
                } else if (newIndex >= 2 * TEAM_SET_LENGTH) { // Just finished Set 2
                    const resetIndex = newIndex - TEAM_SET_LENGTH;
                    setCurrentIndex(resetIndex);
                    x.set(-resetIndex * step);
                } else if (newIndex < TEAM_SET_LENGTH) {
                    const resetIndex = newIndex + TEAM_SET_LENGTH;
                    setCurrentIndex(resetIndex);
                    x.set(-resetIndex * step);
                }
            }
        });
    }, [currentIndex, cardWidth, isAnimating, x]);


    return (
        <div className="bg-white min-h-screen text-black selection:bg-red-500/30 selection:text-white overflow-x-hidden flex flex-col font-sans w-full">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full">
                {/* Ambient effects removed */}

                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div
                        className="max-w-5xl"
                    >
                        <h4 className="text-red-500 font-bold tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8 text-xs uppercase border-l-2 border-red-500 pl-4">The Zapsters Manifesto</h4>
                        <h1 className="text-6xl md:text-[7rem] font-semibold text-black tracking-tight leading-none mb-8 md:mb-12 break-words">
                            We Don't Predict <br />
                            The Future. <br />
                            We Build It.
                        </h1>
                    </div>
                </div>
            </header>

            {/* --- SCROLLING MANIFESTO --- */}
            {/* --- SCROLLING MANIFESTO --- */}
            <section className="py-6 md:py-10 border-y border-black/5 bg-black/[0.02] overflow-hidden whitespace-nowrap w-full relative">

                <motion.div
                    className="flex items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {[...Array(4)].map((__, j) => (
                                <span key={j} className="text-4xl md:text-8xl font-bold text-black mx-6 md:mx-12 tracking-tighter uppercase whitespace-nowrap">
                                    Vision • Disruption • Execution •
                                </span>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </section>

            <main className="flex-grow relative w-full">
                {/* --- NARRATIVE SECTION --- */}
                <section className="py-20 md:py-40 container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                        <div className="flex flex-col h-full">
                            <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4 md:mb-6 flex-shrink-0">
                                Where technology <br />
                                <span className="text-gray-500">meets ambition.</span>
                            </h2>

                            <div className="group relative rounded-[32px] overflow-hidden border border-gray-200 flex-1 w-full min-h-[300px] lg:min-h-0 gpu-accel">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <LazyImage
                                    src={pic118}
                                    alt="Digital Signal"
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                {/* Abstract Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                            </div>
                        </div>
                        <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                            <p>
                                <strong className="text-black font-bold">Zapsters</strong> was founded with a clear belief: digital presence should be engineered, not assembled. While others focus on surface-level design, we go deeper building powerful technology stacks, future-ready platforms, and experiences designed for scale.
                            </p>
                            <p>
                                Our work blends precision engineering, cinematic UI/UX, and next-generation technologies to create digital products that don’t just look exceptional they perform exceptionally.
                            </p>
                            <p>
                                For us, every project is a system. Every system is built to lead
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- STATS GRID (BENTO STYLE) --- */}
                <section className="py-12 md:py-20 container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className="col-span-1 md:col-span-2 group relative h-auto rounded-[40px] bg-black border border-white/10 shadow-xl p-8 md:p-12"
                        >
                            <div className="relative z-10">
                                <span className="text-6xl md:text-9xl font-bold text-white tracking-tighter block mb-4 origin-left">1+</span>
                                <span className="text-sm md:text-xl text-gray-400 uppercase tracking-widest transition-colors">Years of Innovation</span>
                                <p className="mt-6 md:mt-8 text-sm md:text-base text-gray-500 max-w-md transition-colors">Combined experience pushing the boundaries of what's possible on the Tech.</p>
                            </div>
                        </div>

                        <div
                            className="group relative h-auto rounded-[40px] bg-black border border-white/10 shadow-xl overflow-hidden p-8 md:p-12 flex flex-col justify-between"
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter block mb-2 origin-left">₹15Lakh+</span>
                                    <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest transition-colors">Client Value Created</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="group relative h-auto rounded-[40px] bg-black border border-white/10 shadow-xl overflow-hidden p-8 md:p-12 flex flex-col justify-between"
                        >
                            <div className="relative z-10 flex flex-col justify-between h-full">
                                <div>
                                    <span className="text-4xl md:text-6xl font-bold text-white tracking-tighter block mb-2 origin-left">20+</span>
                                    <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest transition-colors">Clients</span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-span-1 md:col-span-2 group relative h-auto rounded-[40px] bg-black border border-white/10 shadow-xl p-8 md:p-12"
                        >
                            <div className="relative z-10">
                                <span className="text-6xl md:text-9xl font-bold text-white tracking-tighter block mb-4 origin-left">100%</span>
                                <span className="text-sm md:text-xl text-gray-400 uppercase tracking-widest transition-colors">Client Retention</span>
                                <p className="mt-6 md:mt-8 text-sm md:text-base text-gray-500 max-w-md transition-colors">We don't just build projects, we build lifelong partnerships with our clients.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- LEADERSHIP DEEP DIVE --- */}
                <section className="py-20 md:py-32 border-t border-gray-200">
                    <div className="container mx-auto px-6 max-w-[1400px]">
                        <div className="mb-16 md:mb-24 text-center">
                            <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">The Visionaries</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">Meet the Architects.</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                            {/* Founder 1: Sabari Raja */}
                            <div className="group relative">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <div className="absolute inset-0 bg-transparent opacity-0 z-10" />
                                        <img
                                            src={pic113}
                                            alt="Sabari Raja"
                                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-2xl font-bold text-black tracking-tight mb-1">Sabari Raja</h3>
                                            <p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-4">Founder & CEO</p>
                                            <p className="text-gray-700 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white/90 p-3 rounded-lg backdrop-blur-md">
                                                Bridging the gap between scalable engineering and minimalist art to set a new standard for digital ecosystems.
                                            </p>
                                            <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                <a href="https://www.linkedin.com/in/sabari-raja-5a4464330/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-red-500 transition-colors uppercase tracking-wider">
                                                    LinkedIn <span className="text-[10px]">↗</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Founder 2: Rahul */}
                            <div className="group relative">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <div className="absolute inset-0 bg-transparent opacity-0 z-10" />
                                        <img
                                            src={pic115}
                                            alt="Rahul"
                                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-2xl font-bold text-black tracking-tight mb-1">Rahul</h3>
                                            <p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-4">Co-Founder & CTO</p>
                                            <p className="text-gray-700 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white/90 p-3 rounded-lg backdrop-blur-md">
                                                Architects of the invisible. Forging the systems behind the signal. Powered by technology. Designed for scale. Built to lead.
                                            </p>
                                            <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                <a href="https://www.linkedin.com/in/rahul-r-31b107381/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-red-500 transition-colors uppercase tracking-wider">
                                                    LinkedIn <span className="text-[10px]">↗</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Founder 3: Praveen S */}
                            <div className="group relative">
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 hover:shadow-2xl">
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <div className="absolute inset-0 bg-transparent opacity-0 z-10" />
                                        <LazyImage
                                            src={pic112}
                                            alt="Praveen S"
                                            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <h3 className="text-2xl font-bold text-black tracking-tight mb-1">Praveen S</h3>
                                            <p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-4">CFO, Marketing Manager</p>
                                            <p className="text-gray-700 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 bg-white/90 p-3 rounded-lg backdrop-blur-md">
                                                The strategist of value. Aligning financial vision with market presence to build systems that sustain long-term success.
                                            </p>
                                            <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                <a href="https://www.linkedin.com/in/praveen-s-321019368/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-black hover:text-red-500 transition-colors uppercase tracking-wider">
                                                    LinkedIn <span className="text-[10px]">↗</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ZAPSTERS TEAM SECTION (Manual Carousel) --- */}
                <section className="py-20 md:py-32 border-t border-black/5 bg-white">
                    <div className="container mx-auto px-6 max-w-[1400px]">
                        {/* Header + Controls - Flex Column on Mobile */}
                        <div className="flex flex-col md:flex-row items-center md:items-end justify-center relative mb-20 z-20">
                            <div className="text-center">
                                <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our People</span>
                                <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter">ZAPSTERS TEAM</h2>
                            </div>

                            {/* Arrow Controls (Adapted from Projects) */}
                            <div className="flex gap-4 mt-8 md:mt-0 relative md:absolute md:bottom-2 md:right-0">
                                <button
                                    onClick={() => moveCarousel('left')}
                                    disabled={isAnimating}
                                    className={`w-12 h-12 md:w-16 md:h-16 border border-black/10 rounded-full flex items-center justify-center text-black/50 transition-colors group ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/10 hover:text-black'}`}
                                >
                                    <span className="group-active:scale-90 transition-transform text-xl md:text-2xl">←</span>
                                </button>
                                <button
                                    onClick={() => moveCarousel('right')}
                                    disabled={isAnimating}
                                    className={`w-12 h-12 md:w-16 md:h-16 border border-black/10 rounded-full flex items-center justify-center text-black/50 transition-colors group ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/10 hover:text-black'}`}
                                >
                                    <span className="group-active:scale-90 transition-transform text-xl md:text-2xl">→</span>
                                </button>
                            </div>
                        </div>

                        {/* Carousel Touch Track */}
                        <div className="relative w-full overflow-visible">
                            {/* Removed gradient vignette as requested */}
                            {/* <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" /> */}
                            {/* <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20 pointer-events-none" /> */}

                            <motion.div
                                className="flex gap-8 w-fit pl-6 md:pl-0 mx-auto"
                                style={{ x }}
                            >
                                {/* 4 Sets for Infinite Loop */}
                                {[...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers].map((member, i) => (
                                    <div
                                        key={i}
                                        style={{ width: cardWidth, minWidth: cardWidth }}
                                        className="group relative flex-shrink-0"
                                    >
                                        <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white/5 relative z-10">
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity" />
                                            <LazyImage
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                                            />
                                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                                <p className="text-red-500 text-xs tracking-widest uppercase">{member.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* --- IMAGE COLLAGE (Life at Zapsters) --- */}
                <section className="py-20 overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 max-w-[1600px] mx-auto">
                        <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden mt-10 md:mt-20"><LazyImage src={pic11} className="w-full h-full object-cover" alt="Office" /></div>
                        <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden"><LazyImage src={pic12} className="w-full h-full object-cover" alt="Meeting" /></div>
                        <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden mt-16 md:mt-32"><LazyImage src={pic13} className="w-full h-full object-cover" alt="Team" /></div>
                        <div className="aspect-square bg-white/5 rounded-2xl overflow-hidden mt-6 md:mt-10"><LazyImage src={pic14} className="w-full h-full object-cover" alt="Work" /></div>
                    </div>
                </section>

                {/* --- CTA --- */}
                <section className="py-24 md:py-40 container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-8xl font-bold text-black tracking-tighter mb-8 md:mb-12">
                        Ready to define the future?
                    </h2>
                    <a href="/contact" className="inline-block bg-red-600 text-white px-10 md:px-16 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-red-700 transition-all tracking-wide border border-red-500/20">
                        Join the Movement
                    </a>
                </section>
            </main>

            <Footer />
        </div >
    );
};


export default About;
