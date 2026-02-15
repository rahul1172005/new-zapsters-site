
import { motion } from 'framer-motion';
import { Cloud, Database, Github, Globe, Server } from 'lucide-react';

const OrbitWrapper = ({ radius, duration, reverse, initialAngle, children }: any) => {
    return (
        <motion.div
            className="absolute top-1/2 left-1/2"
            style={{
                width: radius * 2,
                height: radius * 2,
                x: -radius,
                y: -radius,
            }}
            initial={{ rotate: initialAngle }}
            animate={{ rotate: reverse ? initialAngle - 360 : initialAngle + 360 }}
            transition={{ duration, ease: "linear", repeat: Infinity }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-mufi-card border border-white/20"
                    animate={{ rotate: reverse ? 360 : -360 }}
                    transition={{ duration, ease: "linear", repeat: Infinity }}
                >
                    {children}
                </motion.div>
            </div>
        </motion.div>
    )
}

export const OrbitSystem = () => {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-mufi-accent-purple/20 to-transparent opacity-50" />

            {/* Center Glowing Logo - Adjusted to match image (Pink/Red Gradient Block) */}
            <div className="relative z-10 w-20 h-20 rounded-2xl border border-white/20 flex items-center justify-center transform rotate-0 hover:scale-105 transition-transform duration-500">
                {/* The actual logo block */}
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#FF8080] via-[#FF4D4D] to-[#A020F0] flex items-center justify-center relative overflow-hidden border-t border-white/40">
                    {/* Inner gloss */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60" />
                    {/* Logo Icon */}
                    <div className="relative z-10">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H10V10H4V4Z" fill="white" />
                            <path d="M14 4H20V10H14V4Z" fill="white" fillOpacity="0.5" />
                            <path d="M4 14H10V20H4V14Z" fill="white" fillOpacity="0.5" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Orbit Rings Visuals */}
            <div className="absolute rounded-full border border-white/5 w-[200px] h-[200px]" />
            <div className="absolute rounded-full border border-white/5 w-[320px] h-[320px]" />

            {/* Orbiting Icons */}
            <OrbitWrapper radius={100} duration={25} initialAngle={0}>
                <Cloud size={18} className="text-gray-400" />
            </OrbitWrapper>
            <OrbitWrapper radius={100} duration={25} initialAngle={120}>
                <Database size={18} className="text-blue-400" />
            </OrbitWrapper>
            <OrbitWrapper radius={100} duration={25} initialAngle={240}>
                <Server size={18} className="text-purple-400" />
            </OrbitWrapper>

            <OrbitWrapper radius={160} duration={35} reverse initialAngle={45}>
                <Github size={18} className="text-white" />
            </OrbitWrapper>
            <OrbitWrapper radius={160} duration={35} reverse initialAngle={225}>
                <Globe size={18} className="text-cyan-400" />
            </OrbitWrapper>
        </div>
    );
};

export default OrbitSystem;
