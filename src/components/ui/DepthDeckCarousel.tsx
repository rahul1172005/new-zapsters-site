import React, { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * DepthDeckCarousel - A high-performance, responsive 3D carousel component.
 * Supports arbitrary content via renderItem prop.
 */

export interface DepthDeckCarouselProps<T> {
    items: T[];
    renderItem: (item: T, index: number, isCenter: boolean, isHovered: boolean) => React.ReactNode;
    aspectRatio?: "9:16" | "2:3" | "3:4" | "1:1" | "4:3" | "3:2" | "16:9";
    autoPlay?: boolean;
    autoPlayIntervalSeconds?: number;
    showNavigation?: boolean;
    showPagination?: boolean;
    primaryColor?: string;
    borderWidth?: number;
    borderColor?: string;
    borderRadius?: number;
    navButtonBackground?: string;
    navButtonBackgroundHover?: string;
    navButtonBorderColor?: string;
    navButtonIconColor?: string;
    navButtonIconColorHover?: string;
    shadowStrength?: number;
    style?: React.CSSProperties;
}

const SPRING_CONFIG = {
    stiffness: 260,
    damping: 20,
    mass: 0.8,
};

const ASPECT_RATIOS = {
    "9:16": 0.5625,
    "2:3": 0.6667,
    "3:4": 0.75,
    "1:1": 1,
    "4:3": 1.3333,
    "3:2": 1.5,
    "16:9": 1.7778,
};

function useContainerSize(ref: React.RefObject<HTMLElement>) {
    const [size, setSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (!ref.current) return;
        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (entry) {
                setSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);

    return size;
}

const getResponsiveConfig = (containerWidth: number) => {
    const isMobile = containerWidth < 480;
    const isTablet = containerWidth >= 480 && containerWidth < 1024;

    const cardWidth = isMobile
        ? Math.min(containerWidth * 0.7, 280)
        : isTablet
            ? Math.min(containerWidth * 0.45, 380)
            : Math.min(containerWidth * 0.28, 460);

    const cardSpacing = isMobile ? 60 : isTablet ? 140 : 250;
    const verticalOffset = isMobile ? 8 : isTablet ? 15 : 25;
    const scaleStep = isMobile ? 0.15 : isTablet ? 0.12 : 0.08;
    const rotationOffset = isMobile ? -8 : isTablet ? -12 : -18;
    const perspective = 2000;
    const brightnessStep = 0;
    const minHeight = isMobile ? 400 : isTablet ? 500 : 700;

    return {
        cardWidth,
        cardSpacing,
        verticalOffset,
        scaleStep,
        rotationOffset,
        perspective,
        brightnessStep,
        minHeight,
        isMobile,
        isTablet,
    };
};

const getPositionData = (index: number, activeIndex: number, totalCards: number, config: any) => {
    const relativePos = ((index - activeIndex + totalCards) % totalCards) - Math.floor(totalCards / 2);
    const adjustedPos =
        relativePos > totalCards / 2
            ? relativePos - totalCards
            : relativePos < -totalCards / 2
                ? relativePos + totalCards
                : relativePos;

    const absPos = Math.abs(adjustedPos);
    const baseZIndex = 1000; // High base z-index

    return {
        x: adjustedPos * config.cardSpacing,
        y: absPos * config.verticalOffset,
        scale: 1 - absPos * config.scaleStep,
        rotateY: adjustedPos * config.rotationOffset,
        opacity: 1,
        brightness: 1,
        zIndex: baseZIndex - absPos, // Simple z-index order
        isCenter: adjustedPos === 0,
        relativePosition: adjustedPos,
    };
};

export default function DepthDeckCarousel<T>(props: DepthDeckCarouselProps<T>) {
    const {
        items,
        renderItem,
        aspectRatio = "2:3",
        autoPlay = true,
        autoPlayIntervalSeconds = 4,
        showNavigation = true,
        showPagination = true,
        primaryColor = "#000000",
        borderWidth = 0,
        borderColor = "#FFFFFF",
        borderRadius = 41.4,
        navButtonBackground = "rgba(255, 255, 255, 0.12)",
        navButtonBackgroundHover = "#000000",
        navButtonBorderColor = "rgba(0, 0, 0, 0.12)",
        navButtonIconColor = "rgba(17, 17, 17, 0.92)",
        navButtonIconColorHover = "#FFFFFF",
        shadowStrength = 1,
        style,
    } = props;

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Default to off
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const containerSize = useContainerSize(containerRef);

    const config = useMemo(
        () => getResponsiveConfig(containerSize.width || 1200),
        [containerSize.width]
    );

    const cardHeight = config.cardWidth / ASPECT_RATIOS[aspectRatio as keyof typeof ASPECT_RATIOS];

    const shadows = useMemo(() => {
        const s = Math.max(0, shadowStrength);
        return {
            center: `0 ${config.isMobile ? 12 : 24}px ${config.isMobile ? 30 : 60}px rgba(0,0,0,${0.25 * s
                }), 0 ${config.isMobile ? 4 : 8}px ${config.isMobile ? 12 : 24}px rgba(0,0,0,${0.15 * s})`,
            side: `0 ${config.isMobile ? 6 : 12}px ${config.isMobile ? 18 : 32}px rgba(0,0,0,${0.15 * s
                }), 0 ${config.isMobile ? 2 : 4}px ${config.isMobile ? 6 : 12}px rgba(0,0,0,${0.1 * s})`,
        };
    }, [shadowStrength, config.isMobile]);

    const positions = useMemo(
        () => items.map((_, index) => getPositionData(index, activeIndex, items.length, config)),
        [activeIndex, items.length, config]
    );

    useEffect(() => {
        if (activeIndex >= items.length && items.length > 0) {
            setActiveIndex(items.length - 1);
        }
    }, [items.length, activeIndex]);

    useEffect(() => {
        // Only start autoplay if the prop is true and we aren't already playing
        if (!autoPlay || isAutoPlaying || items.length === 0) return;

        autoPlayRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, autoPlayIntervalSeconds * 1000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [autoPlay, items.length, autoPlayIntervalSeconds]);

    const stopAutoPlay = useCallback(() => {
        setIsAutoPlaying(false);
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
            autoPlayRef.current = null;
        }
    }, []);

    const goToNext = useCallback(() => {
        stopAutoPlay();
        setActiveIndex((prev) => (prev + 1) % items.length);
    }, [items.length, stopAutoPlay]);

    const goToPrev = useCallback(() => {
        stopAutoPlay();
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }, [items.length, stopAutoPlay]);

    const goToSlide = useCallback(
        (index: number) => {
            stopAutoPlay();
            setActiveIndex(index);
        },
        [stopAutoPlay]
    );

    const handleCardClick = useCallback(
        (clickedIndex: number, relativePosition: number) => {
            if (relativePosition === 0) return;
            stopAutoPlay();
            const target = (activeIndex + relativePosition + items.length) % items.length;
            setActiveIndex(target);
        },
        [activeIndex, items.length, stopAutoPlay]
    );

    const handleHoverStart = useCallback(
        (index: number) => {
            if (!config.isMobile) setHoveredIndex(index);
        },
        [config.isMobile]
    );

    const handleHoverEnd = useCallback(() => {
        setHoveredIndex(null);
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                ...style,
                position: "relative",
                width: "100%",
                minHeight: `${config.minHeight + 150}px`, // Expand container for buttons
                overflow: "visible",
                backgroundColor: "transparent",
                userSelect: "none",
                paddingBottom: "120px", // Internal padding for buttons
            }}
        >
            {/* Cards Display */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    minHeight: `${config.minHeight}px`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    perspective: `${config.perspective}px`,
                    transformStyle: "preserve-3d",
                    overflow: "visible",
                    isolation: "isolate",
                }}
            >
                {items.map((item, index) => {
                    const position = positions[index];
                    const isHovered = hoveredIndex === index;

                    return (
                        <motion.div
                            key={index}
                            onClick={() => handleCardClick(index, position.relativePosition)}
                            onHoverStart={() => handleHoverStart(index)}
                            onHoverEnd={handleHoverEnd}
                            initial={false}
                            animate={{
                                x: position.x,
                                y: isHovered ? position.y - 30 : position.y,
                                scale: isHovered ? position.scale * 1.05 : position.scale,
                                rotateY: position.rotateY,
                                opacity: position.opacity,
                                filter: `brightness(1)`,
                                zIndex: position.zIndex,
                                transition: { type: "spring", ...SPRING_CONFIG }
                            }}
                            transition={{ type: "spring", ...SPRING_CONFIG }}
                            style={{
                                position: "absolute",
                                left: "50%", // Center the base position
                                width: `${config.cardWidth}px`,
                                height: `${cardHeight}px`,
                                borderRadius: `${borderRadius}px`,
                                cursor: "pointer",
                                backfaceVisibility: "hidden",
                                transformOrigin: "center center",
                                boxShadow: position.isCenter ? shadows.center : shadows.side,
                                overflow: "hidden",
                                backgroundColor: "transparent",
                                border: borderWidth > 0 ? `${borderWidth}px solid ${borderColor}` : "none",
                                marginLeft: `-${config.cardWidth / 2}px`, // Shift back by half width
                                willChange: "transform",
                            }}
                        >
                            {renderItem(item, index, position.isCenter, isHovered)}
                        </motion.div>
                    );
                })}
            </div>

            {/* Controls - Positioned below cards but inside the user's view bounds */}
            {(showNavigation || showPagination) && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "20px", // Safe distance from bottom of total container
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        alignItems: "center",
                        gap: config.isMobile ? "16px" : "24px",
                        zIndex: 9999,
                        pointerEvents: "auto",
                    }}
                >
                    {showNavigation && (
                        <button
                            onClick={goToPrev}
                            style={{
                                padding: config.isMobile ? "10px" : "14px",
                                borderRadius: "9999px",
                                background: "#000", // Solid background
                                border: `1px solid ${navButtonBorderColor}`,
                                color: "#FFF", // Solid color
                                cursor: "pointer",
                                transition: "all 200ms",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#333";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#000";
                            }}
                        >
                            <ChevronLeft size={config.isMobile ? 24 : 28} />
                        </button>
                    )}

                    {showPagination && (
                        <div style={{ display: "flex", gap: "8px" }}>
                            {items.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    style={{
                                        width: index === activeIndex ? (config.isMobile ? "16px" : "24px") : (config.isMobile ? "6px" : "8px"),
                                        height: config.isMobile ? "6px" : "8px",
                                        borderRadius: "9999px",
                                        border: "none",
                                        background: index === activeIndex ? primaryColor : "rgba(0,0, 0, 0.1)",
                                        cursor: "pointer",
                                        transition: "all 300ms",
                                        padding: 0,
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {showNavigation && (
                        <button
                            onClick={goToNext}
                            style={{
                                padding: config.isMobile ? "10px" : "14px",
                                borderRadius: "9999px",
                                background: "#000", // Solid background
                                border: `1px solid ${navButtonBorderColor}`,
                                color: "#FFF", // Solid color
                                cursor: "pointer",
                                transition: "all 200ms",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "#333";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "#000";
                            }}
                        >
                            <ChevronRight size={config.isMobile ? 24 : 28} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
