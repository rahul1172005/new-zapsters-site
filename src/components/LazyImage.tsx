import { useEffect, useRef, useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    threshold?: number;
    placeholderSrc?: string;
}

export const LazyImage = ({
    src,
    alt,
    threshold = 0,
    placeholderSrc,
    className = '',
    ...props
}: LazyImageProps) => {
    const imgRef = useRef<HTMLImageElement>(null);
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
                rootMargin: '200px' // Tighter margin for performance
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Optimized URL for Unsplash if applicable
    const optimizedSrc = isVisible
        ? (src.includes('unsplash.com') && !src.includes('fm=')
            ? `${src}&fm=webp&q=80&w=1200`
            : src)
        : (placeholderSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"%3E%3C/svg%3E');

    return (
        <div className={`relative w-full h-full overflow-hidden ${className}`}>
            {/* Huly-style blur-up placeholder */}
            {!isLoaded && (
                <div
                    className="absolute inset-0 bg-red-950/20 animate-pulse z-[1]"
                    style={{ background: 'radial-gradient(circle at center, #1a0505 0%, #000 100%)' }}
                />
            )}

            <img
                ref={imgRef}
                src={optimizedSrc}
                alt={alt}
                className={`w-full h-full object-cover transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
                decoding="async"
                {...props}
            />
        </div>
    );
};
