/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#040404',        // Deepest black for main background
                surface: '#0C0C0C',           // Slightly lighter for cards
                primary: '#00E599',           // Neon Mint Green
                'primary-hover': '#00CC88',   // Slightly darker mint
                secondary: '#F0F0F5',         // White/Grey for text
                muted: '#9CA3AF',            // Muted gray for subtext
                border: '#1F1F1F',           // Subtle borders
                'neon-blue': '#00C2FF',       // For gradients/accents
                'neon-purple': '#7000FF',     // For gradients/accents
                'neon-cyan': '#00F0FF',       // Cyan for Branching card
                // Mufi Theme Colors
                'mufi-bg': '#020005', // Slightly purple black
                'mufi-card': 'rgba(20, 10, 30, 0.6)', // More purple tint
                'mufi-border': 'rgba(255, 100, 200, 0.2)', // Pinkish border
                'mufi-accent-pink': '#FF2E63', // Stronger pink
                'mufi-accent-purple': '#7F00FF', // Stronger purple
                'mufi-beam-from': '#FFCAC8', // Almost white-pink
                'mufi-beam-to': '#FF2E63', // Strong pink

            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #00E599 0deg, #00C2FF 180deg, #7000FF 360deg)',
                'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
                'orbit': 'orbit 20s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-beam': 'pulseBeam 4s ease-in-out infinite',
                'spin-slow': 'spin 4s linear infinite',
                'spin-slower': 'spin 8s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.2' },
                    '50%': { opacity: '1' },
                },
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                },

                orbit: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                pulseBeam: {
                    '0%, 100%': { opacity: '0.8', transform: 'scaleX(1)' },
                    '50%': { opacity: '1', transform: 'scaleX(1.1)' },
                }
            }
        },
    },
    plugins: [],
}
