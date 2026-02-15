import { LazyImage } from '../LazyImage';

export const TrustedSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-black tracking-tight leading-none mb-4">
                        Trusted Allies
                    </h2>
                </div>

                <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
                    <LazyImage
                        src="/cybercom-card-v2.png"
                        alt="Cybercom"
                        className="w-full max-w-[250px] h-auto object-contain"
                    />
                    <div className="text-center mt-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight mb-2">
                            Balakumaran
                        </h3>
                        <p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-4">Founder & CEO / Cybercom</p>
                        <a
                            href="https://www.linkedin.com/in/balakumaran2005/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold tracking-wide uppercase group border-b border-transparent hover:border-white/50 pb-0.5"
                        >
                            LinkedIn
                            <span className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">↗</span>
                        </a>
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <h2 className="text-5xl font-bold text-black mb-12">
                        Features of tomorrow. <br />
                        Available today.
                    </h2>
                    <a
                        href="/services"
                        className="bg-gradient-to-br from-[#080808] to-[#020202] text-white metal-stroke px-8 py-3 rounded-full text-base font-bold hover:bg-[#0a0a0a] hover:border-white/20 transition-all inline-flex items-center justify-center"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    );
};


