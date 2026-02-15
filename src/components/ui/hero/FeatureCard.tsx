
import { motion } from 'framer-motion';

// Mock function for cn if not available, usually it's in lib/utils or similar.
// If your project uses a different path, please adjust.
// Assuming we might need to create it if it doesn't exist, but I'll assume standard shadcn/tailwind setup.
// Wait, I should check if 'utils/cn' exists. Based on file list, it might not.
// I'll define a local utility for now or check in a moment.
// Actually, earlier file listing showed 'src/components' and 'src/pages'. 
// I'll stick to 'tailwind-merge' and 'clsx' directly if I'm not sure.

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface FeatureCardProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export const FeatureCard = ({ className, children, delay = 0 }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "relative overflow-hidden rounded-3xl p-6 metal-stroke",
                "bg-gradient-to-br from-[#1E1128]/90 via-[#0D0512]/90 to-[#050505]/95", // Much stronger dark purple/black base
                "shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset]", // Inner light border
                className
            )}
        >
            {/* Top Highlight Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />

            {children}
        </motion.div>
    );
};
