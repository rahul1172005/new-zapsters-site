import { motion } from 'framer-motion';
import robot from '../../assets/ai-robot-v3.png';

export const AISection = () => {
    return (
        <section className="py-20 md:py-32 bg-black relative overflow-hidden flex flex-col items-center justify-center text-center">

            {/* 1. Deep Atmosphere & Texture */}
            {/* 1. Deep Atmosphere & Texture */}

            {/* Top Fade Gradient for seamless blending */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-[1]" />

            {/* Bottom Fade Gradient for seamless blending */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-[1]" />
            <div className="absolute inset-0 bg-black/50" /> {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            {/* 2. Ambient Red Glows (Enhanced - Deep Sync) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-red-900/10 blur-[80px] md:blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[140%] h-[600px] bg-[radial-gradient(ellipse_at_center,#220000_0%,transparent_60%)] opacity-100 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none mb-6">
                        Unleashing Cutting-Edge <br />
                        AI Applications.
                    </h2>
                </motion.div>

                {/* Main Content Area */}
                <div className="relative w-full max-w-7xl mx-auto mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center min-h-[600px] gap-10 md:gap-0">

                    {/* Left Side: Cyber Text */}
                    <div className="relative md:absolute left-0 md:left-0 top-auto md:top-1/2 md:-translate-y-1/2 text-left z-20 flex flex-col gap-6 order-1 md:order-none w-full md:w-auto items-center md:items-start">
                        {/* Decorative Line */}


                        <div className="relative text-center md:text-left">
                            <h3 className="text-5xl md:text-[5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none mb-6">
                                THE FUTURE<br />
                                LINKS HERE.
                            </h3>
                            {/* Background "Ghost" Text for depth */}

                        </div>

                        <p className="text-gray-400 max-w-xs text-base md:text-lg font-medium leading-relaxed border-l-0 md:border-l-2 border-white/10 pl-0 md:pl-4 text-center md:text-left">
                            Powered solutions designed to <span className="text-white">accelerate</span> your digital journey.
                        </p>
                    </div>

                    {/* Middle: Robot */}
                    <div className="relative z-10 w-full max-w-[600px] flex items-center justify-center order-2 md:order-none">
                        {/* Stronger Backlight for Robot Pop */}
                        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-600/20 blur-[100px] rounded-full pointer-events-none" />

                        <img
                            src={robot}
                            alt="AI Applications"
                            className="relative z-10 w-full h-auto object-contain max-h-[650px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    {/* Right Side: HUD Stats */}
                    <div className="relative md:absolute right-0 md:right-0 top-auto md:top-1/2 md:-translate-y-1/2 z-20 flex flex-col gap-4 order-3 md:order-none w-full md:w-auto items-center md:items-end">
                        {/* Stat Card 1 */}
                        <div className="w-full md:w-[280px] p-6 rounded-[24px] bg-[#020202] border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-start gap-1 backdrop-blur-sm"
                            style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)' }}>
                            <div className="flex items-center justify-between w-full mb-2">
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Efficiency Rate</p>

                            </div>
                            <h4 className="text-6xl font-semibold text-white tracking-tighter">
                                98<span className="text-3xl text-gray-500">%</span>
                            </h4>
                            <p className="text-white/30 text-xs mt-1">Optimization accuracy achieved</p>
                        </div>

                        {/* Stat Card 2 */}
                        <div className="w-full md:w-[280px] p-6 rounded-[24px] bg-[#020202] border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-start gap-1 backdrop-blur-sm"
                            style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)' }}>
                            <div className="flex items-center justify-between w-full mb-2">
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Global Clients</p>

                            </div>
                            <h4 className="text-6xl font-semibold text-white tracking-tighter">
                                2<span className="text-3xl text-gray-500"></span>
                            </h4>
                            <p className="text-white/30 text-xs mt-1">Enterprise partners worldwide</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


