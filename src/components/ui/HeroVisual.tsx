
import pic5 from '../../assets/pic5.png';
import { Layers, Smartphone, Bot, Palette, Rocket, GraduationCap } from 'lucide-react';


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
                    <button
                        onClick={() => window.location.href = 'tel:+919342408432'}
                        className="bg-red-600 text-white px-8 py-3 rounded-full text-base font-bold hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        BOOK A FREE DEMO
                    </button>
                    <a
                        href="/services"
                        className="bg-gradient-to-br from-[#080808] to-[#020202] text-white border-[2px] border-[#0a0a0a] px-8 py-3 rounded-full text-base font-bold hover:bg-[#0a0a0a] hover:border-white/20 transition-all shadow-2xl ring-1 ring-[#1a1a1a]/60 inline-flex items-center justify-center"
                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                    >
                        OUR SERVICES
                    </a>
                </div>
            </div>

            {/* Your Vision, Our Execution Card */}
            <div className="relative z-10 container mx-auto px-6 mt-32">
                <div className="max-w-6xl mx-auto">
                    <div className="group relative h-auto md:h-[650px] min-h-[380px] rounded-[40px] overflow-hidden shadow-2xl bg-gradient-to-b from-black to-red-900/20 border-[2px] border-red-900/30 ring-1 ring-red-500/10"
                        style={{ boxShadow: '0 0 0 1px rgba(220, 38, 38, 0.3), 0 0 0 2px rgba(0,0,0,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 2px 4px rgba(255,255,255,0.05)' }}>


                        {/* Full Width Grid Container for Services */}
                        <div className="relative z-10 w-full h-full p-6 md:p-10 flex items-center justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">
                                {[
                                    {
                                        title: "Full-Stack Dev",
                                        icon: Layers,
                                        price: "₹4,999 - ₹19,999",
                                        desc: "Web apps acting like native software.",
                                        points: ["Custom React/Next.js Architecture", "Secure Database Integration", "High-Performance API Design", "SEO Optimized Structure"]
                                    },
                                    {
                                        title: "Mobile Engineering",
                                        icon: Smartphone,
                                        price: "₹14,999 - ₹29,999",
                                        desc: "Cross-platform apps with 60fps feel.",
                                        points: ["iOS & Android Deployment", "Native Performance Optimization", "Offline-First Capabilities", "Advanced Gestures & Animations"]
                                    },
                                    {
                                        title: "AI Integration",
                                        icon: Bot,
                                        price: "₹4,999 - ₹49,999",
                                        desc: "Smart chatbots & predictive models.",
                                        points: ["Custom LLM Training", "Automated Customer Support", "Predictive Analytics Models", "Seamless API Integration"]
                                    },
                                    {
                                        title: "Product Designing",
                                        icon: Palette,
                                        price: "₹4,999 - ₹24,999",
                                        desc: "UI/UX wireframes and prototypes.",
                                        points: ["User Research & Personas", "Wireframing & Prototyping", "Design System Creation", "Interaction Design (Framer)"]
                                    },
                                    {
                                        title: "Startup MVP",
                                        icon: Rocket,
                                        price: "₹24,999 - ₹99,999",
                                        desc: "Rapid prototype to market-ready product.",
                                        points: ["Rapid Prototyping", "Scalable Cloud Infrastructure", "Go-to-Market Strategy", "Investor-Ready Documentation"]
                                    },
                                    {
                                        title: "Final Year Projects",
                                        icon: GraduationCap,
                                        price: "₹7,999 - ₹39,999",
                                        desc: "End-to-end academic project support.",
                                        points: ["Complete Source Code", "Detailed Documentation (PPT/Report)", "Viva/Presentation Support", "1-on-1 Code Explanation"]
                                    },
                                ].map((service, i) => (
                                    <div key={i}
                                        className="group/card relative h-full rounded-[24px] bg-[#020202]/90 backdrop-blur-md border-[2px] border-[#0a0a0a] overflow-hidden p-6 flex flex-col shadow-xl ring-1 ring-[#1a1a1a]/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:border-red-900/30 transition-all duration-500"
                                        style={{ boxShadow: '0 0 0 1px rgba(40,40,40,0.6), 0 0 0 2px rgba(20,20,20,0.4), 0 20px 50px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.05), inset 0 2px 4px rgba(255,255,255,0.02)' }}
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                                        <div className="relative z-10 mb-4">
                                            <div className="flex items-center gap-3 mb-2">
                                                <service.icon className="w-6 h-6 text-red-500" />
                                                <h4 className="text-white font-bold text-xl md:text-2xl group-hover/card:text-red-500 transition-colors drop-shadow-md">{service.title}</h4>
                                            </div>
                                            <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>
                                        </div>

                                        <div className="relative z-10 border-t border-white/10 pt-3 pb-4">
                                            <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold block mb-1">Starts @</span>
                                            <span className="text-red-500 font-bold font-mono text-xl drop-shadow-[0_0_10px_rgba(220,38,38,0.4)]">{service.price}</span>
                                        </div>

                                        <div className="relative z-10 mt-auto">
                                            <ul className="space-y-2">
                                                {service.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                                                        <span className="text-red-500 mt-1 text-[10px]">◇</span>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
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
