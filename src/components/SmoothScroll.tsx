import { useEffect } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.0, // Standard "Premium" smoothness (soft stop)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential out for soft settling
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.5, // FAST scrolling (more pixels per tick)
            touchMultiplier: 2.5, // Responsive touch
            syncTouch: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};
