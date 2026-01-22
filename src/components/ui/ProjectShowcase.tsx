import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { LazyImage } from '../LazyImage';

const projects = [
    {
        id: "01",
        title: "Keyshop",
        category: "E-Commerce",
        gradient: "group-hover:from-red-900/90",
        image: "https://images.unsplash.com/photo-1642132652075-2d4343701830?q=80&w=3000&auto=format&fit=crop",
        description: "Instant delivery marketplace. High-volume transaction handling with crypto payment rails and automated key dispatch systems."
    },
    {
        id: "02",
        title: "Nivora",
        category: "Hospitality",
        gradient: "group-hover:from-orange-900/90",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop",
        description: "Immersive culinary platform. Features 4K visual storytelling, real-time table reservation engine, and dynamic seasonal menus."
    },
    {
        id: "03",
        title: "ShelterLink",
        category: "Non-Profit",
        gradient: "group-hover:from-pink-900/90",
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2969&auto=format&fit=crop",
        description: "AI-powered adoption network. Matching families with pets using behavioral analysis and seamless application workflows."
    },
    {
        id: "04",
        title: "Construct",
        category: "Corporate",
        gradient: "group-hover:from-yellow-900/90",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop",
        description: "Infrastructure visualization. Interactive 3D renderings of massive engineering projects with safety compliance dashboards."
    },
    {
        id: "05",
        title: "Cortex",
        category: "AI Systems",
        gradient: "group-hover:from-blue-900/90",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
        description: "Predictive ML models. Computer vision for security systems and NLP bots for automated customer support."
    },
    {
        id: "06",
        title: "Flux UI",
        category: "Design System",
        gradient: "group-hover:from-purple-900/90",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop",
        description: "Pixel-perfect interface kit. Prioritizing accessibility, motion physics, and consistency across efficient web platforms."
    },
    {
        id: "07",
        title: "TestFlow",
        category: "QA",
        gradient: "group-hover:from-emerald-900/90",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2728&auto=format&fit=crop",
        description: "Automated testing pipelines. End-to-end and unit testing frameworks ensuring zero-tolerance for mission-critical bugs."
    }
];

// Constants
const CARD_WIDTH_DESKTOP = 460;
const CARD_WIDTH_MOBILE = 300;
const GAP = 40;
const SET_LENGTH = projects.length;

export const ProjectShowcase = () => {
    // 4 Sets for robust buffer: Set 0, Set 1, Set 2, Set 3
    // Start at Set 1 (Index 7)
    const [currentIndex, setCurrentIndex] = useState(SET_LENGTH);
    const [isAnimating, setIsAnimating] = useState(false);
    const [cardWidth, setCardWidth] = useState(CARD_WIDTH_DESKTOP);

    // Motion Value for smoothness
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initial Resize Handler
    useEffect(() => {
        const updateWidth = () => {
            const newWidth = window.innerWidth < 768 ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;
            setCardWidth(newWidth);
            // Instantly correct position on resize
            x.set(-currentIndex * (newWidth + GAP));
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [currentIndex, x]); // Add dependencies to ensure x is updated correctly


    const moveCarousel = useCallback((direction: 'left' | 'right') => {
        if (isAnimating) return;
        setIsAnimating(true);

        const step = cardWidth + GAP;
        const newIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;

        setCurrentIndex(newIndex);

        animate(x, -newIndex * step, {
            type: "spring",
            stiffness: 280,   // Engineered for "premium" feel (not too bouncy)
            damping: 30,      // Critical damping to prevent overshoot
            mass: 1,
            onComplete: () => {
                setIsAnimating(false);

                // === INFINITE LOOP LOGIC ===
                // If we are at the end of Set 2 (Index ~20), snap back to Set 1
                // This ensures we always stay in the "center" sets

                // Right Boundary: Reaching start of Set 3 (index 21) -> Snap match in Set 2 (14) ? 
                // Using 4 sets: 0..6 | 7..13 | 14..20 | 21..27
                // Safe Zone is Set 1 & Set 2.

                if (newIndex >= 3 * SET_LENGTH) { // Way too far right
                    const resetIndex = newIndex - SET_LENGTH; // seamless shift back
                    setCurrentIndex(resetIndex);
                    x.set(-resetIndex * step);
                }
                else if (newIndex >= 2 * SET_LENGTH) { // Just finished Set 2
                    // We can optionally snap back to Set 1 here for maximum safety
                    const resetIndex = newIndex - SET_LENGTH;
                    setCurrentIndex(resetIndex);
                    x.set(-resetIndex * step);
                }
                else if (newIndex < SET_LENGTH) { // Entered Set 0 (Too far left)
                    const resetIndex = newIndex + SET_LENGTH; // Snap forward to Set 1
                    setCurrentIndex(resetIndex);
                    x.set(-resetIndex * step);
                }
            }
        });
    }, [currentIndex, cardWidth, isAnimating, x]);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') moveCarousel('right');
            if (e.key === 'ArrowLeft') moveCarousel('left');
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [moveCarousel]);

    return (
        <section ref={containerRef} className="relative bg-black py-40 overflow-hidden z-30 border-t-0 border-white/5 font-sans">

            {/* Header */}
            <div className="container mx-auto px-6 mb-24 relative z-20 flex flex-col md:block items-center justify-center">
                <div className="text-center w-full">
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none mb-4 uppercase">
                        Featured Projects
                    </h2>
                </div>

                {/* Visual Arrow Controls - Flow on Mobile, Absolute Right on Desktop */}
                <div className="flex gap-4 mt-8 md:mt-0 relative md:absolute md:bottom-2 md:right-6">
                    <button
                        onClick={() => moveCarousel('left')}
                        disabled={isAnimating}
                        className={`w-12 h-12 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center text-white/50 transition-colors group ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10 hover:text-white'}`}
                    >
                        <span className="group-active:scale-90 transition-transform text-xl md:text-2xl">←</span>
                    </button>
                    <button
                        onClick={() => moveCarousel('right')}
                        disabled={isAnimating}
                        className={`w-12 h-12 md:w-16 md:h-16 border border-white/10 rounded-full flex items-center justify-center text-white/50 transition-colors group ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10 hover:text-white'}`}
                    >
                        <span className="group-active:scale-90 transition-transform text-xl md:text-2xl">→</span>
                    </button>
                </div>
            </div>

            {/* Carousel Track */}
            <div className="relative w-full overflow-visible">
                <motion.div
                    className="flex gap-10 w-fit pl-6 md:pl-20 will-change-transform"
                    style={{ x }}
                >
                    {/* Render 3 Sets for buffer safety (Optimized from 4) */}
                    {[...projects, ...projects, ...projects].map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </motion.div>
            </div>

            {/* Soft Vignette Edges */}
            <div className="absolute top-0 left-0 w-[5%] h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[5%] h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        </section>
    );
};

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <motion.div
            className="relative w-[300px] md:w-[460px] aspect-[3/4] bg-[#050505] rounded-[32px] overflow-hidden group flex-shrink-0 border border-white/10 hover:border-red-600/50 transition-colors duration-500 cursor-pointer"
            whileHover="hover"
            initial="idle"
        // Removed 'layout' prop to prevent layout thrashing during infinite snap
        >
            {/* === Project Image === */}
            <div className="absolute inset-0">
                <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />
            </div>

            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b from-zinc-950/90 to-black transition-colors duration-700 ${project.gradient}`} />

            {/* Optimized: Removed heavy mix-blend-mode noise texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" />

            {/* Giant Background Number */}
            <div className="absolute top-8 right-8 text-8xl font-mono font-bold text-white/10 tracking-tighter group-hover:text-white/20 transition-colors duration-500 select-none z-10">
                {project.id}
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                <motion.div
                    className="flex flex-col items-start"
                    variants={{
                        idle: { y: 0 },
                        hover: { y: -20 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {/* Category Tag */}
                    <div className="inline-block px-3 py-1 mb-5 text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest border border-red-900/30 rounded-full bg-red-900/10">
                        {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-red-500 transition-colors duration-300">
                        {project.title}
                    </h3>

                    {/* Description - Expandable */}
                    <motion.div
                        variants={{
                            idle: { height: 0, opacity: 0, marginTop: 0 },
                            hover: { height: "auto", opacity: 1, marginTop: 16 }
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 text-base leading-relaxed mb-8 border-l-2 border-white/10 pl-4">
                            {project.description}
                        </p>

                        <button className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.2em] group/btn">
                            View Case Study
                            <span className="w-8 h-[1px] bg-red-600 group-hover/btn:w-16 transition-all duration-300" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Shine Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
        </motion.div>
    )
}
