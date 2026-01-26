
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import radarV2 from '../../assets/radar-v2.png';
import pic113 from '../../assets/pic113.png';
import pic115 from '../../assets/pic115.png';
import pic112 from '../../assets/pic112.png';

const TimeDisplay = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-[28px] font-semibold text-white tracking-tight font-sans h-10 flex items-center drop-shadow-sm">
            {time}
        </div>
    );
};

export const FeatureGrid = () => {

    return (
        <section className="py-24 bg-black relative z-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

                    {/* Main Card 1: 20+ Clients (Dynamic Client Visual) */}
                    <motion.div
                        className="group relative h-auto md:h-[420px] min-h-[420px] rounded-[40px] bg-[#030303] border-[2px] border-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center p-0 shadow-2xl ring-1 ring-[#1a1a1a]/60 transition-all duration-500"
                        onMouseEnter={(e) => {
                            if (window.innerWidth >= 768) {
                                const video = e.currentTarget.querySelector('video');
                                if (video) video.play();
                            }
                        }}
                        onMouseLeave={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) video.pause();
                        }}
                    >
                        {/* Video Background */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/assets/video1.mp4"
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />

                        {/* Top Content: Metrics */}
                        <div className="relative z-20 flex flex-col items-center justify-center mt-0 md:-mt-32 pt-16 md:pt-0">
                            <h2 className="text-6xl md:text-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 leading-none tracking-tighter drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                                20+
                            </h2>
                            <span className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-500 tracking-wide mt-2 drop-shadow-md decoration-slice uppercase">
                                CLIENTS
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Card 2: 24/7 Availability (Dynamic with Timer) */}
                    <motion.div
                        className="group relative h-auto md:h-[420px] min-h-[420px] rounded-[40px] bg-[#030303] border-[2px] border-[#0a0a0a] overflow-hidden flex flex-col items-center justify-start pt-16 shadow-2xl ring-1 ring-[#1a1a1a]/60 transition-all duration-500"
                        onMouseEnter={(e) => {
                            if (window.innerWidth >= 768) {
                                const video = e.currentTarget.querySelector('video');
                                if (video) video.play();
                            }
                        }}
                        onMouseLeave={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) video.pause();
                        }}
                    >
                        {/* Video Background */}
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            src="/assets/video2.mp4"
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />

                        {/* Header Content */}
                        <div className="relative z-20 flex flex-col items-center justify-center mb-10">
                            {/* Metallic Text Effect */}
                            <h2 className="text-6xl md:text-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 leading-none tracking-tighter drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                                24/7
                            </h2>
                            <span className="text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-500 tracking-wide mt-2 drop-shadow-md decoration-slice uppercase">
                                AVAILABILITY
                            </span>
                        </div>

                        {/* Bottom UI Widgets Container */}
                        <div className="relative md:absolute bottom-auto md:bottom-8 w-full px-4 md:px-8 flex flex-wrap md:flex-nowrap items-end justify-center md:justify-start gap-4 md:gap-6 z-20 mt-auto pb-8 md:pb-0">

                            {/* Widget 1: Contact (Black Style) */}
                            <div
                                onClick={() => window.location.href = '/contact'}
                                className="relative z-10 w-[140px] h-[140px] bg-[#050505] border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60 rounded-[32px] p-4 flex flex-col justify-between shadow-xl cursor-pointer hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-white text-[15px] font-semibold tracking-normal font-sans">Contact</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                                {/* Avatars Row */}
                                <div className="flex -space-x-3 items-end pl-2 pb-2">
                                    <div className="w-10 h-10 rounded-full border-[2px] border-[#2c2c2e] bg-gray-500 overflow-hidden relative shadow-md">
                                        <img src={pic113} alt="Sabari Raja" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-[2px] border-[#2c2c2e] bg-gray-500 overflow-hidden relative shadow-md">
                                        <img src={pic115} alt="Rahul" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-[2px] border-[#2c2c2e] bg-gray-500 overflow-hidden relative shadow-md">
                                        <img src={pic112} alt="Praveen S" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>

                            {/* Widget 2: Next Call (Black Style) */}
                            <div
                                className="relative z-10 w-[160px] h-[140px] bg-[#050505] border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60 rounded-[32px] p-5 flex flex-col justify-between shadow-xl"
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-white text-[15px] font-semibold tracking-normal font-sans">Current Time</span>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                </div>
                                <TimeDisplay />
                            </div>

                            {/* Widget 3: Radar/Sonar (Enhanced Visuals) */}{/* Centered Radar remains visually same */}
                            {/* Widget 3: Radar/Sonar (Centered Beam) */}
                            <div className="absolute z-0 right-[-40px] bottom-[-40px] w-[220px] h-[220px] pointer-events-none flex items-center justify-center">
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src={radarV2}
                                        alt="Radar Visual"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-contain opacity-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-spin-slow"
                                    />
                                    {/* Scanning Beam - Centered Overlay */}
                                    <div className="absolute inset-[35px] bg-[conic-gradient(transparent_0deg,rgba(255,255,255,0.1)_20deg,rgba(255,255,255,0.4)_40deg,transparent_60deg)] animate-[spin_2s_linear_infinite] rounded-full origin-center opacity-70" />
                                    {/* Center Glow */}
                                    <div className="absolute w-[60px] h-[60px] bg-white/10 blur-xl rounded-full animate-pulse" />
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>

                {/* Trust Section */}
                {/* Services Marquee Section */}
                <div className="mt-32 relative w-full overflow-hidden">
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none text-center mb-16">
                        Services we offer
                    </h2>

                    <div className="relative flex w-full mask-linear-gradient py-8">
                        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-20" />
                        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-20" />

                        <motion.div
                            className="flex items-center gap-8 whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex items-center gap-8">
                                    {[
                                        {
                                            label: "Website Development",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            )
                                        },
                                        {
                                            label: "App Development",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            label: "Cybersecurity Services",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            )
                                        },
                                        {
                                            label: "UI/UX Design Service",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                                </svg>
                                            )
                                        },
                                        {
                                            label: "3D Motion and Design",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                            )
                                        },
                                        {
                                            label: "CRM",
                                            icon: (
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            )
                                        }
                                    ].map((service, idx) => (
                                        <div
                                            key={idx}
                                            className="group/item relative flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-br from-[#080808] to-[#020202] border-[2px] border-[#0a0a0a] shadow-2xl ring-1 ring-[#1a1a1a]/60 hover:bg-[#0a0a0a] hover:border-white/20 transition-all duration-300 cursor-default overflow-hidden"
                                            style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                                        >
                                            {/* Content Wrapper */}
                                            <div className="relative z-10 flex items-center gap-4">
                                                {/* Icon */}
                                                <div className="relative w-10 h-10 rounded-full flex items-center justify-center border border-white/5 group-hover/item:scale-110 transition-transform duration-300 overflow-hidden bg-white/5">
                                                    {/* SVG Icon */}
                                                    <div className="relative z-10">
                                                        {service.icon}
                                                    </div>
                                                </div>
                                                {/* Text */}
                                                <span className="text-white/90 text-lg font-medium font-sans tracking-wide group-hover/item:text-white transition-colors">
                                                    {service.label}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};
