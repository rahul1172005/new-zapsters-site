export interface Testimonial {
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

export const testimonials: Testimonial[] = [
    {
        id: "01",
        name: "Santhosh",
        role: "Owner",
        company: "Vishal Key Shop",
        category: "Locksmith Services",
        content: "ZAPSTERS transformed our local business. The 'one call' digital solution streamlined our dispatch for house keys and complex car programming.",
        rating: 5,
        image: "/assets/projects/keyshop.png",
        gradient: "from-yellow-900/90"
    },
    {
        id: "02",
        name: "Sabari & Team",
        role: "Management",
        company: "TOT",
        category: "Hospitality",
        content: "Taste of Trio's needed a platform that matched the quality of our food. ZAPSTERS delivered a stunning showcase for our dishes.",
        rating: 5,
        image: "/assets/projects/tot.png",
        gradient: "from-orange-900/90"
    },
    {
        id: "03",
        name: "Vignesh",
        role: "Founder",
        company: "Primal Training",
        category: "Fitness",
        content: "Train hard, live better. ZAPSTERS captured our philosophy perfectly in digital form. Our members love the professional look.",
        rating: 5,
        image: "/assets/projects/dreamgym.png",
        gradient: "from-lime-900/90"
    },
    {
        id: "04",
        name: "Hemanth",
        role: "Owner",
        company: "PAWShome",
        category: "Pet Lifestyle",
        content: "ZAPSTERS created a beautiful, easy-to-use platform that connects families with their new best friends effectively.",
        rating: 5,
        image: "/assets/projects/pawshop.png",
        gradient: "from-orange-900/90"
    },
    {
        id: "05",
        name: "Praveen",
        role: "Operations Head",
        company: "SVBM",
        category: "Construction",
        content: "In infrastructure, reliability is everything. ZAPSTERS built a robust platform that showcases our premium materials.",
        rating: 5,
        image: "/assets/projects/svbm.png",
        gradient: "from-blue-900/90"
    }
];

export const internshipTestimonials = [
    { id: "i01", name: "Sathiyamoorthi K", wordings: "It was a nice experience working on Unreal Engine. The real-time rendering techniques I learned were invaluable." },
    { id: "i02", name: "Arjith A", wordings: "My cybersecurity internship was a great learning experience. I learned about cyber attacks and security tools." },
    { id: "i03", name: "Swetha R", wordings: "Great experience during my 4-week web development internship. They taught everything in an easy manner." },
    { id: "i04", name: "Sanjay kumar soy", wordings: "Thank you for this learning opportunity. This internship helped me to upskill myself at my own pace." },
    { id: "i05", name: "Ubanisha U.S", wordings: "Zapsters is a great platform for internships. The training was well structured and mentors were supportive." }
];
