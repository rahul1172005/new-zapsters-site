

import { motion } from 'framer-motion';

export const HeroCards = () => {
    // State removed as it was unused

    return (
        <section className="py-0 relative z-10 bg-white">
            <div className="container mx-auto px-6">


                <div className="mb-12 mt-32 text-center">
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-black tracking-tight leading-none text-center justify-center flex">
                        Why we lead ?
                    </h2>
                </div>

                {/* Manifesto Card - Empty */}
                <div className="max-w-6xl mx-auto mb-6">
                    <div
                        className="group relative h-auto md:h-[420px] min-h-[420px] rounded-[40px] overflow-hidden bg-[#000000] p-8 md:p-12"
                    >
                        <motion.video
                            src="/card1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
                            style={{ scale: 1., x: 0, y: 0 }}
                        />
                        {/* Manifesto Text - Premium Center Alignment */}
                        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-8 text-center">
                            <h3
                                className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05]"
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 uppercase">
                                    We are the difference <br className="hidden md:block" />
                                    in this world of <br className="hidden md:block" />
                                    digital noise
                                </span>
                            </h3>

                        </div>

                        {/* Grain Effect Overlay */}
                        <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        {/* Shadow Gradient for text legibility */}
                        <div className="absolute inset-0 bg-black/30 z-25 pointer-events-none" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">


                    {/* Scaling Card (Growth Points Replica - Empty) */}
                    <div
                        className="group relative h-auto md:h-[420px] min-h-[420px] rounded-[40px] overflow-hidden bg-black font-sans text-left"
                    >
                        {/* Background GIF Layer */}
                        <div className="absolute inset-0 z-10">
                            <img
                                src="/gif111.gif"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                        </div>

                        {/* Text Content - Premium Enterprise Style */}
                        <div className="relative z-20 mt-auto p-8 md:p-12 text-left h-full flex flex-col justify-end">
                            <h3 className="text-[2.5rem] font-bold leading-[1.1] mb-2 tracking-tight flex flex-col">
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 uppercase">
                                    STRATEGY<br />
                                    LEADERSHIP<br />
                                    EFFICIENCY
                                </span>
                            </h3>
                        </div>

                        {/* Grain Effect Overlay */}
                        <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    </div>


                    <div
                        className="group relative h-auto md:h-[420px] min-h-[420px] rounded-[48px] bg-[#000000] overflow-hidden font-sans text-left"
                    >
                        {/* Background GIF Layer */}
                        <div className="absolute inset-0 z-10">
                            <img
                                src="/card2pic1.jpg"
                                alt="Brainstorming"
                                className="absolute inset-0 w-full h-full object-cover opacity-80 grayscale"
                            />
                        </div>

                        {/* Text Content - Premium Enterprise Style */}
                        <div className="relative z-20 mt-auto p-8 md:p-12 text-left h-full flex flex-col justify-end">
                            <h3 className="text-[2.5rem] font-bold leading-[1.1] mb-2 tracking-tight flex flex-col">
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 uppercase">BRAINSTORMING</span>
                            </h3>
                            <p className="text-lg text-white/50 font-medium tracking-wide">
                                Engineering <span className="text-white brightness-125 border-b border-white/20 pb-0.5">creative solutions</span> through collaboration.
                            </p>
                        </div>

                        {/* Grain Effect Overlay */}
                        <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        {/* Ambient Glows Removed */}
                    </div>

                </div>
            </div>
        </section>
    );
};
