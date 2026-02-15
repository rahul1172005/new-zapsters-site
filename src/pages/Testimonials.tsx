import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { GraduationCap } from 'lucide-react';
import DepthDeckCarousel from '../components/ui/DepthDeckCarousel';

import { testimonials, internshipTestimonials } from '../data/testimonials';


const Testimonials = () => {

    return (
        <div className="bg-white min-h-screen text-black selection:bg-red-500/30 selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-white pt-32 pb-20 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-[6rem] font-semibold text-black tracking-tight leading-none mb-6 uppercase">
                            Client Success
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 font-medium max-w-2xl mx-auto">
                            Hear from the visionaries who trusted ZAPSTERS to transform their digital future
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Premium 3D Client Carousel - Matched to Home Page Style */}
            <section className="py-18 bg-white relative overflow-visible">
                <div className="container mx-auto px-6 mb-12 relative z-20 text-center">

                </div>

                <div className="container mx-auto px-6">
                    <DepthDeckCarousel
                        items={testimonials}
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
                        renderItem={(testimonial, index, isCenter, isHovered) => (
                            <div className="relative w-full h-full bg-[#050505] overflow-hidden group rounded-[32px] border border-white/5">
                                {/* Project Image */}
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.company}
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
            </section>

            {/* Internship Experiences - Infinite Loop Marquee */}
            <section className="py-24 bg-zinc-50 border-t border-black/5 overflow-hidden">
                <div className="container mx-auto px-6 mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
                        Internship <span className="text-red-600">Journey</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Empowering the next generation of engineers through hands-on technical excellence.
                    </p>
                </div>

                <div className="relative w-full overflow-hidden">
                    {/* Gradient Overlay for seamless fading */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-6 w-fit pl-6"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    >
                        {/* Duplicate the array 4 times to ensure smooth infinite scrolling */}
                        {[...internshipTestimonials, ...internshipTestimonials, ...internshipTestimonials, ...internshipTestimonials].map((intern, i) => (
                            <div
                                key={`${intern.id}-${i}`}
                                className="w-[350px] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                                        <GraduationCap className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-black">{intern.name}</h3>
                                        <p className="text-xs text-red-600 uppercase tracking-wider font-medium">Intern</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed italic">
                                    "{intern.wordings}"
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Testimonials;
