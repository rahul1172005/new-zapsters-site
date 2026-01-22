import { motion, useMotionValue, animate } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Star, GraduationCap } from 'lucide-react';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    category: string;
    content: string;
    rating: number;
    image: string;
    gradient: string;
}

const testimonials: Testimonial[] = [
    {
        id: "01",
        name: "Marcus Chen",
        role: "Founder & CEO",
        company: "Keyshop",
        category: "E-Commerce",
        content: "ZAPSTERS built our instant delivery marketplace from the ground up. The high-volume transaction handling with crypto payment rails and automated key dispatch systems they implemented is absolutely flawless. Our platform processes thousands of transactions daily without a hitch.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1642132652075-2d4343701830?q=80&w=3000&auto=format&fit=crop",
        gradient: "group-hover:from-red-900/90"
    },
    {
        id: "02",
        name: "Isabella Rossi",
        role: "Creative Director",
        company: "Nivora",
        category: "Hospitality",
        content: "The immersive culinary platform ZAPSTERS created for us is a masterpiece. The 4K visual storytelling, real-time table reservation engine, and dynamic seasonal menus have transformed how our guests experience fine dining. It's not just a website—it's an experience.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop",
        gradient: "group-hover:from-orange-900/90"
    },
    {
        id: "03",
        name: "Dr. Sarah Mitchell",
        role: "Executive Director",
        company: "ShelterLink",
        category: "Non-Profit",
        content: "ZAPSTERS' AI-powered adoption network has revolutionized our mission. The behavioral analysis matching system and seamless application workflows have increased our successful adoptions by 250%. They truly understood our vision and brought it to life.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2969&auto=format&fit=crop",
        gradient: "group-hover:from-pink-900/90"
    },
    {
        id: "04",
        name: "James Thornton",
        role: "Chief Engineer",
        company: "Construct",
        category: "Corporate",
        content: "The infrastructure visualization platform with interactive 3D renderings that ZAPSTERS delivered exceeded all expectations. Our massive engineering projects now have real-time safety compliance dashboards that have improved our operational efficiency dramatically.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop",
        gradient: "group-hover:from-yellow-900/90"
    },
    {
        id: "05",
        name: "Dr. Aisha Patel",
        role: "Head of AI Research",
        company: "Cortex",
        category: "AI Systems",
        content: "ZAPSTERS built our predictive ML models with exceptional precision. The computer vision for security systems and NLP bots for automated customer support are industry-leading. Their technical expertise in AI systems is unmatched.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
        gradient: "group-hover:from-blue-900/90"
    },
    {
        id: "06",
        name: "Oliver Bennett",
        role: "Lead Designer",
        company: "Flux UI",
        category: "Design System",
        content: "Working with ZAPSTERS on our pixel-perfect interface kit was incredible. They prioritized accessibility, motion physics, and consistency across all platforms. The design system they created is now the foundation of our entire product suite.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop",
        gradient: "group-hover:from-purple-900/90"
    },
    {
        id: "07",
        name: "Rachel Kim",
        role: "VP of Quality Assurance",
        company: "TestFlow",
        category: "QA",
        content: "The automated testing pipelines ZAPSTERS developed for us are a game-changer. Their end-to-end and unit testing frameworks ensure zero-tolerance for mission-critical bugs. Our deployment confidence has never been higher.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2728&auto=format&fit=crop",
        gradient: "group-hover:from-emerald-900/90"
    },
];



const internshipTestimonials = [
    { id: "i01", name: "Sathiyamoorthi K", wordings: "It was a nice experience working on Unreal Engine. The real-time rendering techniques I learned were invaluable for my career in game dev." },
    { id: "i02", name: "Arjith A", wordings: "My cybersecurity internship was a great learning experience. I learned about cyber attacks, security tools, and how to protect systems from threats. The training sessions were clear and helpful." },
    { id: "i03", name: "Swetha R", wordings: "Great experience during my 4-week web development internship. They taught everything in an easy manner, and now I am confidently building complex frontend interfaces." },
    { id: "i04", name: "Sanjay kumar soy", wordings: "Thank you for this learning opportunity. This internship helped me to upskill myself at my own pace and gave me clarity on my career path." },
    { id: "i05", name: "Ubanisha U.S", wordings: "Zapsters is a great platform for internships. The training was well structured. Mentors were supportive and guided us throughout the program." },
    { id: "i06", name: "JOTHISIVA V S", wordings: "The hands-on exposure to live server management was exactly what I needed. I went from knowing theory to deploying actual applications." },
    { id: "i07", name: "SNEHA M", wordings: "I am grateful for this internship opportunity. It bridged the gap between my academic knowledge and what the industry actually demands." },
    { id: "i08", name: "Nethesh A", wordings: "I had a great learning experience in the Cybersecurity domain. Gained strong foundational knowledge in concepts, tools, and real-world security practices." },
    { id: "i09", name: "Aaradhana S", wordings: "The guidance and support from the mentors were excellent. The practical approach to ethical hacking modules made the learning process smooth and engaging." },
    { id: "i10", name: "Mohanapriya JK", wordings: "This experience has boosted my confidence in the field. Working on vulnerability assessment tools gave me a real taste of what a security analyst does." },
    { id: "i11", name: "JOSHINI M", wordings: "Had a good chance to build up skills. The daily standups and sprint planning sessions gave me a real corporate feel." },
    { id: "i12", name: "AJITH KUMARAN A", wordings: "From building practical solutions to improving my technical and problem-solving skills, this internship was a great learning experience." },
    { id: "i13", name: "gaali yaswanth", wordings: "Excited for what's next and eager to take on new challenges. The team spirit here is infectious and improved my soft skills too." },
    { id: "i14", name: "SANJAY S", wordings: "A very productive month. I learned how to optimize algorithms and write cleaner, more maintainable code." },
    { id: "i15", name: "Dhanush. S", wordings: "The internship was well structured and beginner friendly. The tasks helped me understand web development concepts practically." },
    { id: "i16", name: "Vijayalakshmi S", wordings: "I learned new skills, improved my understanding of the subject, and received good guidance from the team. Overall, a useful and well-structured internship." },
    { id: "i17", name: "Yeshwanti", wordings: "The sessions were well structured and easy to understand. I learned practical skills like HTML, CSS, and JavaScript, and worked on real-time projects." },
    { id: "i18", name: "Vishnu Dharani V", wordings: "Had a great experience and was able to network with people and learn more. The collaborative environment was the best part." },
    { id: "i19", name: "HEMAVARSHINI M A", wordings: "Thanks for this wonderful opportunity. I got a good experience during this 1 month internship. It really helped me understand the basics to advanced concepts." }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
    return (
        <motion.div
            className="relative w-full aspect-[3/4] bg-[#050505] rounded-[32px] overflow-hidden group flex-shrink-0 border border-white/10 hover:border-red-600/50 transition-colors duration-500 cursor-pointer"
            whileHover="hover"
            initial="idle"
        >
            {/* === Background Image === */}
            <div className="absolute inset-0">
                <img
                    src={testimonial.image.includes('unsplash.com') ? `${testimonial.image}&fm=webp&q=80` : testimonial.image}
                    alt={testimonial.company}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                />
            </div>

            {/* Background Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b from-zinc-950/90 to-black transition-colors duration-700 ${testimonial.gradient}`} />

            {/* Noise & Grid Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" />

            {/* Giant Background Number */}
            <div className="absolute top-8 right-8 text-8xl font-mono font-bold text-white/10 tracking-tighter group-hover:text-white/20 transition-colors duration-500 select-none z-10">
                {testimonial.id}
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
                        {testimonial.category}
                    </div>

                    {/* Company Name */}
                    <h3 className="text-4xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-red-500 transition-colors duration-300">
                        {testimonial.company}
                    </h3>

                    {/* Author Info */}
                    <div className="mb-4">
                        <p className="text-white/90 font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 fill-red-600 text-red-600"
                                strokeWidth={0}
                            />
                        ))}
                    </div>

                    {/* Testimonial - Expandable */}
                    <motion.div
                        variants={{
                            idle: { height: 0, opacity: 0, marginTop: 0 },
                            hover: { height: "auto", opacity: 1, marginTop: 16 }
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="flex items-start gap-3">
                            {testimonial.category === 'Internship' ? (
                                <GraduationCap className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                            ) : (
                                <span className="text-red-500/40 text-2xl font-serif flex-shrink-0">"</span>
                            )}
                            <p className="text-gray-400 text-base leading-relaxed mb-6 flex-1">
                                {testimonial.content}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Shine Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
        </motion.div>
    );
};



const Testimonials = () => {
    // --- Configuration ---
    const CLIENT_SET_LENGTH = testimonials.length;
    const INTERN_SET_LENGTH = internshipTestimonials.length;
    const CLIENT_GAP = 32;
    const INTERN_GAP = 24;

    // --- State: Client Carousel ---
    const [clientIndex, setClientIndex] = useState(CLIENT_SET_LENGTH);
    const [clientAnimating, setClientAnimating] = useState(false);
    const [clientCardWidth, setClientCardWidth] = useState(400);
    const clientX = useMotionValue(0);

    // --- State: Internship Carousel ---
    const [internIndex, setInternIndex] = useState(INTERN_SET_LENGTH);
    const [internAnimating, setInternAnimating] = useState(false);
    const [internCardWidth, setInternCardWidth] = useState(350);
    const internX = useMotionValue(0);

    // --- Resize Handler & Initialization ---
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768;

            // Determine widths
            const newClientWidth = isMobile ? 300 : 400;
            const newInternWidth = isMobile ? 280 : 350;

            setClientCardWidth(newClientWidth);
            setInternCardWidth(newInternWidth);

            // Immediate position reset to maintain alignment
            clientX.set(-clientIndex * (newClientWidth + CLIENT_GAP));
            internX.set(-internIndex * (newInternWidth + INTERN_GAP));
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [clientIndex, internIndex, clientX, internX]);

    // --- Client Carousel Move Logic ---
    const moveClientCarousel = useCallback((direction: 'left' | 'right') => {
        if (clientAnimating) return;
        setClientAnimating(true);

        const step = clientCardWidth + CLIENT_GAP;
        const newIndex = direction === 'right' ? clientIndex + 1 : clientIndex - 1;

        setClientIndex(newIndex);

        animate(clientX, -newIndex * step, {
            type: "spring", stiffness: 300, damping: 30,
            onComplete: () => {
                setClientAnimating(false);
                // Infinite Loop Reset Logic
                if (newIndex >= 2 * CLIENT_SET_LENGTH) {
                    const resetIndex = newIndex - CLIENT_SET_LENGTH;
                    setClientIndex(resetIndex);
                    clientX.set(-resetIndex * step);
                } else if (newIndex < CLIENT_SET_LENGTH) {
                    const resetIndex = newIndex + CLIENT_SET_LENGTH;
                    setClientIndex(resetIndex);
                    clientX.set(-resetIndex * step);
                }
            }
        });
    }, [clientIndex, clientAnimating, clientCardWidth, clientX, CLIENT_SET_LENGTH]);

    // --- Intern Carousel Move Logic ---
    const moveInternCarousel = useCallback((direction: 'left' | 'right') => {
        if (internAnimating) return;
        setInternAnimating(true);

        const step = internCardWidth + INTERN_GAP;
        const newIndex = direction === 'right' ? internIndex + 1 : internIndex - 1;

        setInternIndex(newIndex);

        animate(internX, -newIndex * step, {
            type: "spring", stiffness: 300, damping: 30,
            onComplete: () => {
                setInternAnimating(false);
                // Infinite Loop Reset Logic
                if (newIndex >= 2 * INTERN_SET_LENGTH) {
                    const resetIndex = newIndex - INTERN_SET_LENGTH;
                    setInternIndex(resetIndex);
                    internX.set(-resetIndex * step);
                } else if (newIndex < INTERN_SET_LENGTH) {
                    const resetIndex = newIndex + INTERN_SET_LENGTH;
                    setInternIndex(resetIndex);
                    internX.set(-resetIndex * step);
                }
            }
        });
    }, [internIndex, internAnimating, internCardWidth, internX, INTERN_SET_LENGTH]);

    return (
        <div className="bg-background min-h-screen text-white selection:bg-primary/30 selection:text-white overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-black pt-32 pb-20 overflow-hidden">
                {/* Ambient Red Light Removed */}

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-[6rem] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400 tracking-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] leading-none mb-6 uppercase">
                            Client Success Stories
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto">
                            Hear from the visionaries who trusted ZAPSTERS to transform their digital future
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid -> Carousel */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="container mx-auto px-6 mb-10 flex justify-end">
                    {/* Controls */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => moveClientCarousel('left')}
                            disabled={clientAnimating}
                            className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-colors ${clientAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
                        >←</button>
                        <button
                            onClick={() => moveClientCarousel('right')}
                            disabled={clientAnimating}
                            className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-colors ${clientAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
                        >→</button>
                    </div>
                </div>

                <div className="container mx-auto px-6 overflow-hidden">
                    <motion.div
                        className="flex gap-8 w-fit"
                        style={{ x: clientX }}
                    >
                        {/* Render 4 Sets for Loop */}
                        {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={`${testimonial.id}-${index}`}
                                className="flex-shrink-0"
                                style={{ width: clientCardWidth, minWidth: clientCardWidth }}
                            >
                                <TestimonialCard
                                    testimonial={testimonial}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Background Ambient Effects */}
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(220,20,60,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(220,20,60,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
            </section>

            {/* Internship Testimonials Section -> Carousel */}
            <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                                Internship Experience
                            </h2>
                            <p className="text-gray-400 max-w-2xl">
                                The next generation of engineering talent sharing their journey at ZAPSTERS.
                            </p>
                        </div>
                        {/* Controls */}
                        <div className="flex gap-4 mt-8 md:mt-0">
                            <button
                                onClick={() => moveInternCarousel('left')}
                                disabled={internAnimating}
                                className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors ${internAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
                            >←</button>
                            <button
                                onClick={() => moveInternCarousel('right')}
                                disabled={internAnimating}
                                className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors ${internAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
                            >→</button>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6 w-fit"
                            style={{ x: internX }}
                        >
                            {/* Render 4 Sets for Loop */}
                            {[...internshipTestimonials, ...internshipTestimonials, ...internshipTestimonials, ...internshipTestimonials].map((intern, index) => (
                                <motion.div
                                    key={`${intern.id}-${index}`}
                                    style={{ width: internCardWidth, minWidth: internCardWidth }}
                                    className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 hover:border-red-500/30 transition-colors duration-300 flex-shrink-0"
                                >
                                    <div className="mb-4">
                                        <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center mb-4">
                                            <GraduationCap className="w-4 h-4 text-red-500" />
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed mb-4 min-h-[80px]">
                                            "{intern.wordings}"
                                        </p>
                                    </div>
                                    <div className="border-t border-white/5 pt-4">
                                        <p className="text-white font-semibold text-sm">{intern.name}</p>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Intern</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-5xl font-bold text-white mb-8">
                            Ready to be our next success story?
                        </h2>
                        <button className="bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                            Get Started Today
                        </button>
                    </motion.div>
                </div>

                {/* Ambient Red Light */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-red-900/20 via-red-900/10 to-transparent blur-[100px] pointer-events-none" />
            </section>

            <Footer />
        </div>
    );
};


export default Testimonials;
