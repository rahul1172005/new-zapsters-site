

import pic4 from '../../assets/pic4.png';
import pic5 from '../../assets/pic5.png';


const HeroVisual = () => {
    return (
        <section className="relative bg-black z-0 overflow-visible" style={{ minHeight: '140vh' }}>

            {/* Video Background - Optimized for Performance */}
            <video
                className="absolute inset-0 w-full object-cover pointer-events-none will-change-transform"
                style={{ height: '140vh' }}
                src="/assets/video41.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
            />

            {/* Gradient Overlay for Blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black pointer-events-none" style={{ height: '140vh' }} />


            {/* Extended Black Background to cover remaining area */}
            <div className="absolute -bottom-[100vh] left-0 w-full h-[100vh] bg-black -z-10" />

            {/* HERO CONTENT */}
            <div className="relative z-10 pt-48 text-center px-4 w-full">
                <h1 className="text-5xl sm:text-6xl md:text-[7rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-[1.1] md:leading-none max-w-[95vw] mx-auto break-words">
                    EVERYTHING SITE FOR<br />
                    YOUR FUTURE
                </h1>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="bg-red-600 text-white px-8 py-3 rounded-full text-base font-bold hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        BOOK A DEMO
                    </button>
                    <button
                        className="bg-gradient-to-br from-[#080808] to-[#020202] text-white border-[2px] border-[#0a0a0a] px-8 py-3 rounded-full text-base font-bold hover:bg-[#0a0a0a] hover:border-white/20 transition-all shadow-2xl ring-1 ring-[#1a1a1a]/60"
                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                    >
                        OUR SERVICES
                    </button>
                </div>
            </div>

            {/* Your Vision, Our Execution Card */}
            <div className="relative z-10 container mx-auto px-6 mt-32">
                <div className="max-w-6xl mx-auto">
                    <div className="group relative h-auto md:h-[650px] min-h-[380px] rounded-[40px] overflow-hidden shadow-2xl bg-black border-[2px] border-[#0a0a0a] ring-1 ring-[#1a1a1a]/60"
                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)' }}>
                        {/* Background Image - pic4 (Fit Entire Image) */}
                        <div className="absolute inset-0">
                            <img
                                src={pic4}
                                alt="Background"
                                className="w-full h-full object-contain"
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>

                        {/* Left-Aligned Content Card Container */}
                        <div className="relative z-10 w-full h-full p-8 md:p-12 flex items-center justify-start">
                            {/* Content Card - Left Side (Matching Site Style) */}
                            <div className="relative rounded-[32px] bg-[#020202] border-[2px] border-[#0a0a0a] p-8 md:p-12 max-w-xl shadow-2xl ring-1 ring-[#1a1a1a]/60 overflow-hidden"
                                style={{
                                    boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 2px 4px rgba(255,255,255,0.03), inset 0 -1px 0 rgba(255,255,255,0.02)'
                                }}>
                                {/* pic5 Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={pic5}
                                        alt=""
                                        className="w-full h-full object-cover opacity-40"
                                        loading="eager"
                                        fetchPriority="high"
                                    />
                                </div>

                                {/* Content */}
                                <div className="relative text-left">
                                    <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6 tracking-tight">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-300 drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]">
                                            Your Vision,<br />
                                            Our Execution
                                        </span>
                                    </h3>
                                    <p className="text-lg md:text-xl text-white/90 font-medium tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                                        Transforming ideas into reality with cutting-edge technology and innovative solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AMBIENT RED LIGHT EFFECTS - Extended Beyond Section for Seamless Blend */}
            {/* AMBIENT RED LIGHT EFFECTS - Optimized */}
            <div className="absolute top-0 left-0 w-full pointer-events-none" style={{ height: 'calc(50% + 1vh)' }}>
                {/* Single Combined Glow (Replacing multiple heavy blurs) */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-full bg-[radial-gradient(ellipse_at_bottom,rgba(220,20,60,0.15)_0%,transparent_60%)] blur-[60px]" />

                {/* Central Core Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-red-600/10 blur-[50px]" />
            </div>


        </section>
    );
};

export default HeroVisual;
