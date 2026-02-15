import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingOption = ({
    title,
    description,
    price,
    features,
    isCustom = false,
    isPopular = false,
    duration = ''
}: {
    title: string;
    description: string;
    price: string | number;
    features: string[];
    isCustom?: boolean;
    isPopular?: boolean;
    duration?: string;
}) => {
    return (
        <div
            className={`
                relative flex flex-col p-8 rounded-[32px] transition-all duration-300
                bg-white border-2 border-red-500 shadow-xl shadow-red-500/10
                ${isPopular ? 'scale-[1.05] z-10 shadow-2xl shadow-red-500/20' : 'hover:scale-[1.02]'}
            `}
        >
            <div className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-red-600 text-white">
                    {title}
                </span>
                <p className="text-gray-500 text-sm leading-relaxed min-h-[60px]">
                    {description}
                </p>
            </div>

            <div className="mb-8">
                {typeof price === 'number' ? (
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900">₹{price.toLocaleString()}</span>
                        <span className="text-gray-400 font-medium text-sm">{duration}</span>
                    </div>
                ) : (
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900">{price}</span>
                    </div>
                )}
            </div>

            <div className="flex-grow space-y-4 mb-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-red-600" strokeWidth={3} />
                        </div>
                        <span className="text-gray-600 text-sm font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <button className={`
                w-full py-4 rounded-2xl font-semibold transition-all duration-200 bg-black text-white hover:bg-gray-900 hover:scale-[1.02]
            `}>
                {isCustom ? 'Book a Call' : 'Get Started'}
            </button>
        </div>
    );
};

export const PriceCards = () => {

    // Card configurations
    const cards = [
        {
            title: "Web & App Development",
            description: "High-performance websites and mobile apps tailored to your brand, ensuring speed, SEO, and engagement.",
            price: 4999,
            duration: "starting",
            features: [
                "Responsive Websites",
                "iOS & Android Apps",
                "Cross-Platform Dev",
                "SEO & ASO Optimization",
                "Fast Loading Speed",
                "Hosting & Deployment"
            ]
        },
        {
            title: "Cyber Security",
            description: "Protect your digital assets with our comprehensive security audits and penetration testing.",
            price: 5999,
            duration: "starting",
            features: [
                "Vulnerability Assessment",
                "Penetration Testing",
                "Secure Code Review",
                "Compliance Audits",
                "Real-time Monitoring setup",
                "Security Report"
            ]
        },
        {
            title: "UI/UX Design",
            description: "Crafting intuitive and visually stunning interfaces for web and mobile applications.",
            price: 4499,
            duration: "starting",
            features: [
                "User Research & Personas",
                "Wireframing & Prototyping",
                "Mobile & Web App Design",
                "Design Systems",
                "Interactive Mockups",
                "Unlimited Revisions"
            ]
        },
        {
            title: "AI & ML Solutions",
            isPopular: true,
            description: "Leverage the power of Artificial Intelligence to automate and optimize your business processes.",
            price: 7499,
            duration: "starting",
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
            description: "Turn your startup idea into a market-ready product with our rapid development cycle.",
            price: 9999,
            duration: "starting",
            features: [
                "Rapid Prototyping",
                "Scalable Architecture",
                "Core Feature Implementation",
                "Market-Ready Launch",
                "Post-launch Roadmap",
                "Dedicated Team"
            ]
        },
        {
            title: "Custom Solution",
            isCustom: true,
            description: "Have a unique requirement? Let's build a tailored solution that fits your exact needs.",
            price: "Let's Talk!",
            features: [
                "End-to-End Development",
                "Enterprise Architecture",
                "Dedicated Project Manager",
                "Priority 24/7 Support",
                "Custom SLAs",
                "Consultancy"
            ]
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />

            {/* Soft background glow - Red/Orange Tint */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-100/30 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
                    >
                        Our Services & Pricing
                    </h2>
                    <p
                        className="text-gray-500 text-lg md:text-xl"
                    >
                        Transparent pricing for world-class digital solutions. Choose the package that suits your goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {cards.map((card, index) => (
                        <PricingOption
                            key={index}
                            title={card.title}
                            description={card.description}
                            price={card.price}
                            features={card.features}
                            isPopular={card.isPopular}
                            isCustom={card.isCustom}
                            duration={card.duration}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
