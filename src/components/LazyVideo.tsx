import { useEffect, useRef, useState } from 'react';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
    poster?: string;
    threshold?: number;
}

export const LazyVideo = ({ src, poster, threshold = 0.1, ...props }: LazyVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0,
                rootMargin: '500px' // Start loading 500px BEFORE element is visible
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    useEffect(() => {
        if (isVisible && videoRef.current) {
            // Start loading the video
            videoRef.current.load();

            // Play when loaded
            const handleCanPlay = () => {
                setIsLoaded(true);
                videoRef.current?.play().catch(() => {
                    // Autoplay failed, user interaction required
                });
            };

            videoRef.current.addEventListener('canplay', handleCanPlay);

            return () => {
                videoRef.current?.removeEventListener('canplay', handleCanPlay);
            };
        }
    }, [isVisible]);

    return (
        <div className="relative w-full h-full">
            {/* Poster/Placeholder */}
            {!isLoaded && poster && (
                <img
                    src={poster}
                    alt="Video placeholder"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            )}

            {/* Loading indicator */}
            {isVisible && !isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="w-12 h-12 border-4 border-white/10 border-t-red-600 rounded-full animate-spin"></div>
                </div>
            )}

            {/* Video element */}
            <video
                ref={videoRef}
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                preload="none"
                {...props}
            >
                {isVisible && <source src={src} type="video/mp4" />}
            </video>
        </div>
    );
};
