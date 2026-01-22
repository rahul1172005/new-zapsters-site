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
    threshold = 0.1,
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
                rootMargin: '2500px' // Start loading ~3 screens ahead
            }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Placeholder/Blur */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black animate-pulse" />
            )}

            {/* Actual Image */}
            <img
                ref={imgRef}
                src={isVisible ? (src.includes('unsplash.com') && !src.includes('fm=') ? `${src}&fm=webp&q=80` : src) : placeholderSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg"%3E%3C/svg%3E'}
                alt={alt}
                className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
                    } ${className}`}
                onLoad={() => setIsLoaded(true)}
                loading="lazy"
                decoding="async" // Huly Optimization
                {...props}
            />
        </div>
    );
};
