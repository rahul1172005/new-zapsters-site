import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { LazyImage } from '../components/LazyImage';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Palette, Brain, Rocket, Box } from 'lucide-react';

const ServiceDetail = ({
    title,
    description,
    price,
    features,
    image,
    isReversed = false
}: {
    title: string;
    description: string;
    price: string | number;
    features: string[];
    image: string;
    isReversed?: boolean;
}) => {
    return (
        <div
            className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 py-24 border-b border-gray-100 last:border-0`}
        >
            {/* Visual Side */}
            <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-50 flex items-center justify-center">
                    <LazyImage
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover grayscale"
                    />
                </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-8">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">{title}</h2>
                    <p className="text-lg text-gray-500 leading-relaxed font-light">{description}</p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-black uppercase tracking-wider">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-600">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                    <div>
                        <span className="block text-sm text-gray-400 mb-1">Starting from</span>
                        {typeof price === 'number' ? (
                            <span className="text-3xl font-bold text-black">₹{price.toLocaleString()}</span>
                        ) : (
                            <span className="text-2xl font-bold text-black">{price}</span>
                        )}
                    </div>

                    <button className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-all hover:scale-105 shadow-lg shadow-black/20">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

const Services = () => {

    const services = [
        {
            title: "Web & App Development",
            description: "We build digital experiences that are fast, secure, and purely functional. Whether it's a high-performance website or a feature-rich mobile application, our process focuses on clean code, responsive layouts, and scalable architecture to ensure your brand stands out on every device.",
            price: 4999,
            image: "/servicecard1.jpg",
            features: [
                "Custom Responsive Websites",
                "iOS & Android Apps",
                "Cross-Platform Development",
                "SEO & ASO Optimization",
                "Progressive Web App (PWA)",
                "Hosting, Cloud & SSL"
            ]
        },
        {
            title: "Cyber Security",
            description: "In an era of rising digital threats, security is non-negotiable. We provide comprehensive audits and penetration testing to identify vulnerabilities before they can be exploited, ensuring your data and your users remain safe.",
            price: 5999,
            image: "/servicecard2.jpg",
            features: [
                "Vulnerability Assessment",
                "Penetration Testing",
                "Secure Code Review",
                "Compliance Audits",
                "Real-time Monitoring",
                "Incident Response Plan"
            ]
        },
        {
            title: "UI/UX Design",
            description: "Great design is invisible. We craft intuitive interfaces that guide users effortlessly through your product. By combining aesthetic principles with user behavior research, we create designs that are both beautiful and highly effective.",
            price: 4499,
            image: "/servicecard3.jpg",
            features: [
                "User Research & Personas",
                "Wireframing & Prototyping",
                "Mobile & Web App Design",
                "Design Systems",
                "Interactive Mockups",
                "Usability Testing"
            ]
        },
        {
            title: "AI & ML Solutions",
            description: "Unlock the potential of your data with our custom AI solutions. Whether it's automating customer support with intelligent chatbots or predicting market trends, we help you leverage cutting-edge machine learning models.",
            price: 7499,
            image: "/servicecard4.jpg",
            features: [
                "Custom LLM Integration",
                "Chatbot Development",
                "Predictive Analytics",
                "Computer Vision Models",
                "Model Fine-tuning",
                "Automation Workflows"
            ]
        },
        {
            title: "MVP Development",
            description: "Speed to market is critical for startups. We specialize in rapid MVP development, helping you turn your idea into a functional, market-ready product in weeks, not months. Validate your concept with real users, fast.",
            price: 9999,
            image: "/servicecard5.jpg",
            features: [
                "Rapid Prototyping",
                "Scalable Architecture",
                "Core Feature Focus",
                "Market-Ready Launch",
                "Post-launch Roadmap",
                "Agile Development"
            ]
        },
        {
            title: "Custom Solution",
            description: "Every business is unique, and sometimes off-the-shelf solutions don't cut it. We partner with you to understand your specific challenges and engineer a bespoke software solution tailored exactly to your operational needs.",
            price: "Let's Talk!",
            image: "/servicecard6.jpg",
            features: [
                "End-to-End Development",
                "Enterprise Architecture",
                "Dedicated Project Manager",
                "24/7 Priority Support",
                "Custom SLAs",
                "Scalability Planning"
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen text-black font-sans w-full selection:bg-red-500/30 selection:text-black">
            <Navbar />

            {/* Header */}
            <header className="pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6 max-w-7xl">
                <div
                    className="max-w-4xl"
                >
                    <h1 className="text-6xl md:text-[7rem] font-bold text-black tracking-tighter leading-[0.9] mb-8">
                        Our Craft.<span className="text-gray-200"></span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl border-l-2 border-black pl-6">
                        We don't just clear tickets. We architect solutions. Explore our specialized services designed to elevate your digital presence.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-6 max-w-7xl pb-32">
                {services.map((service, index) => (
                    <ServiceDetail
                        key={index}
                        {...service}
                        isReversed={index % 2 !== 0}
                    />
                ))}

                {/* CTA Section */}
                <section className="py-24 md:py-32 mt-12 bg-gray-50 rounded-[48px] text-center px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 tracking-tight">
                        Ready to start?
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                        Let's discuss how we can bring your vision to life with our expert team.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-500/20"
                    >
                        Book a Consultation
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Services;
