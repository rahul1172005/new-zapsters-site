import { motion } from 'framer-motion';


export const FeatureGrid = () => {

    return (
        <section className="py-24 bg-white relative z-10">
            <div className="container mx-auto px-6">

                {/* Trust Section */}
                {/* Services Marquee Section */}
                <div className="mt-32 relative w-full overflow-hidden">
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-black tracking-tight leading-none text-center mb-16">
                        Services we offer
                    </h2>

                    <div className="relative flex w-full mask-linear-gradient py-8">


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
                                            className="group/item relative flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-br from-[#080808] to-[#020202] shadow-2xl transition-all duration-300 cursor-default overflow-hidden"
                                        >
                                            <div className="absolute inset-0 grayscale transition-all duration-700 group-hover/item:grayscale-0 pointer-events-none" />
                                            {/* Grain Effect Overlay */}
                                            <div className="absolute inset-0 opacity-[0.4] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

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
