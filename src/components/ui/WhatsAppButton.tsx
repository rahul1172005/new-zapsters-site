import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919342408432"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:bg-[#20bd5a] transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
            >
                <FaWhatsapp className="text-white text-3xl" />
            </motion.div>
        </a>
    );
};
