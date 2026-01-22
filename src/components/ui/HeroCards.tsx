import { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyVideo } from '../LazyVideo';

export const HeroCards = () => {
    const [activePoint, setActivePoint] = useState('Leadership');

    return (
        <section className="py-0 relative z-10 bg-black">
            <div className="container mx-auto px-6">


                <div className="mb-12 mt-32 text-center">
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none text-center justify-center flex">
                        Why we lead ?
                    </h2>
                </div>

                {/* Manifesto Card */}
                <div className="max-w-6xl mx-auto mb-6">
                    <div
                        className="group relative rounded-[40px] overflow-hidden bg-[#050505] border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60 shadow-2xl p-8 md:p-12"
                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9)' }}
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

                        {/* Abstract Shape Overlay */}
                        {/* Abstract Shape Overlay - Like Growth Points */}
                        <div className="absolute right-[-50px] top-[-50px] w-[700px] h-[700px] pointer-events-none mix-blend-screen opacity-50 hidden md:block rotate-12">
                            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                                <defs>
                                    <linearGradient id="manifesto-grad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#7f1d1d" /> {/* Red-900 */}
                                        <stop offset="100%" stopColor="#000000" />
                                    </linearGradient>
                                </defs>
                                <path d="M40,80 C20,40 60,10 100,30 C150,50 160,90 140,130 C120,170 80,180 50,150 C20,120 10,100 40,80" fill="url(#manifesto-grad)" />
                            </svg>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center">
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                                    In an age of digital noise, <br />
                                    <span className="text-gray-500">we design the signal.</span>
                                </h3>
                            </div>
                            <div className="flex-1">
                                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                                    <strong className="text-white font-bold">Zapsters</strong> was born from a singular obsession: perfection. We realized that most digital agencies were stuck in the past building websites when they should be building ecosystems, designing pages when they should be crafting experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">


                    {/* Scaling Card (Growth Points Replica - Interactive & Optic) */}
                    <div
                        className="group relative h-auto md:h-[420px] min-h-[420px] rounded-[40px] overflow-hidden font-sans shadow-2xl text-left border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60"
                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)' }}
                    >
                        {/* Premium Steel Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#080808] to-[#020202]" />

                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-[0.15] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

                        <div className="relative z-10 w-full h-full p-8 flex flex-col">
                            {/* Header */}
                            <div className="flex justify-between items-start mb-2 relative z-20">
                                <div>
                                    <h3 className="text-3xl md:text-[2.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none">Growth points</h3>
                                </div>
                            </div>

                            {/* Content Layout */}
                            <div className="flex-1 relative mt-4">

                                {/* Left: Silhouette Visual */}
                                <div className="absolute left-[-40px] bottom-[-40px] w-[280px] h-[380px] pointer-events-none mix-blend-multiply opacity-90 hidden md:block">
                                    <svg viewBox="0 0 200 300" className="w-full h-full drop-shadow-2xl" id="silhouette">
                                        <defs>
                                            <linearGradient id="silhouette-grad-perfect" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="#450a0a" />
                                                <stop offset="100%" stopColor="#000000" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M40,60 C70,50 90,80 95,110 C100,125 115,130 130,140 C145,150 140,180 130,200 C120,220 95,250 95,320 L-40,320 L-40,110 C0,90 20,70 40,60" fill="url(#silhouette-grad-perfect)" />
                                    </svg>
                                </div>

                                {/* Right: Sliders UI (Interactive Container) */}
                                <div className="relative md:absolute right-0 md:top-[10%] md:bottom-0 w-full md:w-[240px] flex flex-col space-y-4 md:space-y-8 mt-6 md:mt-0 px-6 md:px-0">

                                    {/* Helper function to render a slider item */}
                                    {['Strategy', 'Leadership', 'Efficiency'].map((item) => {
                                        const isActive = activePoint === item;

                                        return (
                                            <div
                                                key={item}
                                                className={`relative h-14 flex items-center justify-end cursor-pointer transition-all duration-300 ${isActive ? '-translate-x-4' : ''}`}
                                                onClick={() => setActivePoint(item)}
                                            >
                                                {/* Optic Cable Line - Adjusted to touch button (180px offset) */}
                                                <div className="absolute right-[180px] top-1/2 -translate-y-1/2 h-[1px] bg-white/20 transition-all duration-500 hidden md:block" style={{ width: isActive ? '140px' : '120px' }}>
                                                    {/* The moving light packet */}
                                                    {isActive && (
                                                        <motion.div
                                                            className="absolute top-0 right-0 h-full bg-white shadow-[0_0_10px_white]"
                                                            initial={{ width: 0, left: 0, opacity: 0 }}
                                                            animate={{
                                                                width: ['0%', '30%', '0%'],
                                                                left: ['0%', '50%', '100%'],
                                                                opacity: [0, 1, 0]
                                                            }}
                                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        />
                                                    )}
                                                    {/* Connection Dot at Face End */}
                                                    <div className={`absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${isActive ? 'w-2 h-2 bg-white shadow-[0_0_10px_white]' : 'w-1.5 h-1.5 bg-white/40'}`} />
                                                </div>

                                                {/* Slider Pill */}
                                                <div className={`
                                                    relative w-[180px] h-full rounded-full border transition-all duration-300 overflow-hidden flex items-center px-1.5 shadow-lg
                                                    ${isActive
                                                        ? 'bg-black/40 border-white/40 ring-1 ring-white/20 shadow-[0_5px_20px_rgba(0,0,0,0.2)]'
                                                        : 'bg-black/20 border-white/10 hover:bg-black/30 hover:scale-[1.02]'
                                                    }
                                                `}>
                                                    {/* Text Label */}
                                                    <span className={`flex-1 text-center text-md font-medium tracking-wide transition-colors ${isActive ? 'text-white font-bold' : 'text-white/80'}`}>
                                                        {item}
                                                    </span>

                                                    {/* Toggle Button/Circle */}
                                                    <div className={`
                                                        h-11 w-11 rounded-full flex items-center justify-center transition-all duration-500
                                                        ${isActive ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] rotate-180' : 'bg-white/10 border border-white/10'}
                                                    `}>
                                                        {/* Dot removed as per request */}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Branching Card (AI Co-pilot - Pro iOS Theme) */}
                    <div
                        className="group relative h-auto md:h-[420px] min-h-[420px] rounded-[48px] bg-[#050505] overflow-hidden font-sans shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[2px] border-[#0a0a0a] text-left ring-1 ring-[#1a1a1a]/60"
                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)' }}
                    >
                        {/* Environment Lighting (Subtle Red Ambient) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-[#2a0a0a] opacity-60 pointer-events-none" />
                        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#ff3b30] blur-[150px] opacity-10 pointer-events-none" />

                        {/* Title - Top Left (Apple Style Header) */}
                        <div className="relative md:absolute top-auto md:top-10 left-6 md:left-10 z-30 pointer-events-none mt-10 md:mt-0">
                            <h3 className="text-3xl md:text-[2.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">Satisfaction</h3>
                        </div>

                        {/* Metric & Switch - Middle Left */}
                        <div className="relative md:absolute top-auto md:top-[8rem] left-6 md:left-10 z-30 flex items-center space-x-5 mt-4 md:mt-0 px-6 md:px-0">
                            <span className="text-7xl md:text-[96px] font-medium text-white tracking-tighter leading-none drop-shadow-xl" style={{ fontVariantNumeric: 'tabular-nums' }}>99%</span>
                        </div>

                        {/* Bottom Glass Panel - Bottom Left (Frosty Glass) */}
                        <div className="relative md:absolute bottom-auto md:bottom-10 left-6 md:left-10 z-30 mt-8 md:mt-0 px-6 md:px-0 mb-8 md:mb-0">
                            <div
                                className="w-[220px] h-[120px] rounded-[32px] bg-[#050505] border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60 overflow-hidden relative group/panel flex flex-col justify-between p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)' }}
                            >
                                {/* Edge Highlight */}
                                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50" />

                                {/* Status Header */}
                                <div className="flex items-center space-x-2 z-10">

                                    <span className="text-white/60 text-xs font-medium tracking-wide">System Optimized</span>
                                </div>

                                {/* Tech Visual: Active Waveform */}
                                <div className="flex items-end justify-between h-8 z-10 space-x-1">
                                    {[40, 70, 45, 90, 60, 80, 50, 75, 45, 65, 40, 80, 50, 70, 45].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 bg-white/80 rounded-full"
                                            animate={{ height: [`${h}%`, `${h * 0.6}%`, `${h}%`] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Robot/3D Sphere (Right Side - High Gloss) */}
                        <div className="relative md:absolute top-auto md:top-1/2 right-auto md:right-[-20px] md:-translate-y-1/2 w-[340px] h-[340px] pointer-events-none scale-100 md:scale-105 mx-auto my-10 order-2 md:order-none">
                            {/* Sphere Container */}
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#e5e5ea] to-[#8e8e93] shadow-[inset_-40px_-40px_80px_rgba(0,0,0,0.5),_0_20px_50px_rgba(0,0,0,0.4)] flex items-center justify-center relative overflow-hidden ring-1 ring-white/20">

                                {/* Metallic Sheen */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/10 opacity-50 rounded-full" />

                                {/* Visor - Glossy Black Rounded Rect */}
                                <div className="absolute w-[180px] h-[110px] bg-black rounded-[36px] border-[3px] border-[#d1d1d6] shadow-[inset_0_10px_20px_rgba(255,255,255,0.1),_0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden z-10 box-border">
                                    {/* Video Background - Optimized */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <LazyVideo
                                            className="w-full h-full object-cover"
                                            src="/assets/video5.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            poster="/assets/video5-poster.jpg"
                                        />
                                    </div>

                                    {/* Red Interior Ambiance Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] to-[#3f0000] opacity-30" />

                                    {/* Visor Reflection (Glass) */}
                                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[32px]" />
                                </div>

                                {/* Sphere Specular Highlight */}
                                <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-b from-white to-transparent opacity-30 rounded-full blur-2xl transform rotate-[-45deg]" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
