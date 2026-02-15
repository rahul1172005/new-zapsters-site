
import { LazyImage } from '../LazyImage';
import DepthDeckCarousel from './DepthDeckCarousel';

import { projects } from '../../data/projects';


export const ProjectShowcase = () => {
    return (
        <section className="relative bg-white py-40 overflow-hidden z-30 border-t-0 border-white/5 font-sans">
            {/* Header */}
            <div className="container mx-auto px-6 mb-24 relative z-20">
                <div className="text-center w-full">

                    <h2 className="text-5xl md:text-[5rem] font-semibold text-black tracking-tight drop-shadow-sm leading-none mb-4 uppercase">
                        Featured Projects
                    </h2>
                    <p className="text-black/50 text-xl max-w-2xl mx-auto mt-6">
                        Explore how we've helped visionary brands transform their digital landscape through innovative engineering.
                    </p>
                </div>
            </div>

            {/* DepthDeck Carousel Integration */}
            <div className="relative w-full overflow-hidden px-4 md:px-0">
                <DepthDeckCarousel
                    items={projects}
                    aspectRatio="3:4"
                    primaryColor="#ffffffff"
                    borderRadius={32}
                    shadowStrength={0}
                    autoPlay={false}
                    showNavigation={true}
                    showPagination={true}
                    navButtonBackground="rgba(0, 0, 0, 0.05)"
                    navButtonBackgroundHover="#ffffffff"
                    navButtonIconColor="#000"
                    navButtonIconColorHover="#FFF"
                    navButtonBorderColor="rgba(255, 255, 255, 1)"
                    renderItem={(project, index, isCenter, isHovered) => (
                        <div className="relative w-full h-full bg-[#050505] overflow-hidden group rounded-[32px] border border-white/5">
                            {/* Project Image */}
                            <div className="absolute inset-0 z-0">
                                <LazyImage
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-cover transition-all duration-700 ease-out
                                        ${isHovered ? 'scale-110' : 'scale-100'} grayscale-[0.2] contrast-125`}
                                />
                            </div>

                            {/* --- VINTAGE TEXTURE LAYERS --- */}

                            {/* 1. Warm Sepia Overlay (Old Photo Feel) */}
                            <div className="absolute inset-0 z-10 bg-[#7a5c38] mix-blend-color opacity-30 pointer-events-none" />

                            {/* 2. Film Grain / Noise Overlay */}
                            <div
                                className="absolute inset-0 z-10 opacity-40 mix-blend-overlay pointer-events-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat',
                                }}
                            />

                            {/* 3. Subtle Color Grade (Blue shadows for cinematic look) */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-900/20 via-transparent to-orange-500/20 mix-blend-soft-light pointer-events-none" />

                            {/* 4. Vignette (Dark Edges) */}
                            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

                            {/* 5. Scratches / Imperfections Effect (Subtle) */}
                            <div className="absolute inset-0 z-10 opacity-10 mix-blend-screen pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/scratched-surface.png')] bg-cover" />

                        </div>
                    )}
                />
            </div>

            {/* Ambient Background Hint */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        </section>
    );
};
