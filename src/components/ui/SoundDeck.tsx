import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export const SoundDeck = () => {
    const [micActive, setMicActive] = useState(false);
    const [fxActive, setFxActive] = useState(false);
    const [knobRotation, setKnobRotation] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 64, y: 147 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <div
                ref={containerRef}
                className="relative overflow-hidden"
                onMouseMove={handleMouseMove}
                style={{
                    width: '128px',
                    height: '295px',
                    borderRadius: '20px'
                }}
            >
                {/* Behind Part */}
                <div
                    className="absolute"
                    style={{
                        width: '126px',
                        height: '280px',
                        left: 'calc(50% - 63px)',
                        top: 'calc(51.86% - 140px)',
                        backgroundColor: 'rgb(24, 27, 36)',
                        borderRadius: '20px',
                        boxShadow: 'inset 0px 2px 2px 4px rgba(39, 42, 51, 0.86)'
                    }}
                />

                {/* Upper Part */}
                <div
                    className="absolute left-0 right-0 top-0 overflow-hidden"
                    style={{
                        height: '286px',
                        background: 'linear-gradient(180deg, rgb(31, 33, 38) 0%, rgb(41, 44, 51) 100%)',
                        borderRadius: '20px',
                        boxShadow: 'inset 0px 1px 1px 0px rgba(184, 184, 184, 0.1), inset 0px -1px 1px 0px rgb(61, 64, 71)'
                    }}
                >
                    {/* Inside Container */}
                    <div
                        className="absolute"
                        style={{
                            width: '108px',
                            height: '267px',
                            left: 'calc(50% - 54px)',
                            top: 'calc(50% - 133.5px)',
                            backgroundColor: 'rgb(13, 13, 13)',
                            borderRadius: '11px',
                            boxShadow: '0px 0px 4px 0px rgba(199, 199, 199, 0.12)',
                            zIndex: 2
                        }}
                    >
                        {/* Mic Button */}
                        <motion.div
                            className="absolute cursor-pointer"
                            style={{
                                width: '100px',
                                height: '73px',
                                left: 'calc(50% - 50px)',
                                bottom: '2px',
                                borderRadius: '10px',
                                backgroundColor: micActive ? 'rgb(255, 50, 50)' : 'rgb(20, 20, 20)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                                pointerEvents: 'auto'
                            }}
                            onClick={() => setMicActive(!micActive)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className={`text-xs font-mono ${micActive ? 'text-white' : 'text-gray-400'}`}>
                                MIC {micActive && '●'}
                            </div>
                            {/* Highlight */}
                            <div
                                className="absolute"
                                style={{
                                    width: '82px',
                                    height: '57px',
                                    left: 'calc(50% - 41px)',
                                    top: 'calc(49.3% - 28.5px)',
                                    background: micActive
                                        ? 'radial-gradient(50% 50% at 50% 50%, rgb(255, 100, 100) 0%, rgba(255, 255, 255, 0) 100%)'
                                        : 'radial-gradient(50% 50% at 50% 50%, rgb(134, 143, 191) 0%, rgba(255, 255, 255, 0) 100%)',
                                    borderRadius: '10px',
                                    filter: 'blur(11px)',
                                    opacity: micActive ? 0.3 : 0.1,
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }}
                            />
                        </motion.div>

                        {/* FX Button */}
                        <motion.div
                            className="absolute cursor-pointer"
                            style={{
                                width: '100px',
                                height: '69px',
                                left: 'calc(50% - 50px)',
                                bottom: '80px',
                                borderRadius: '10px',
                                backgroundColor: fxActive ? 'rgb(50, 150, 255)' : 'rgb(20, 20, 20)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s ease',
                                pointerEvents: 'auto'
                            }}
                            onClick={() => setFxActive(!fxActive)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className={`text-xs font-mono ${fxActive ? 'text-white' : 'text-gray-400'}`}>
                                FX {fxActive && '●'}
                            </div>
                            {/* Highlight */}
                            <div
                                className="absolute"
                                style={{
                                    width: '82px',
                                    height: '57px',
                                    left: 'calc(50% - 41px)',
                                    top: 'calc(49.3% - 28.5px)',
                                    background: fxActive
                                        ? 'radial-gradient(50% 50% at 50% 50%, rgb(100, 180, 255) 0%, rgba(255, 255, 255, 0) 100%)'
                                        : 'radial-gradient(50% 50% at 50% 50%, rgb(134, 143, 191) 0%, rgba(255, 255, 255, 0) 100%)',
                                    borderRadius: '10px',
                                    filter: 'blur(11px)',
                                    opacity: fxActive ? 0.3 : 0.1,
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }}
                            />
                        </motion.div>

                        {/* EQ Section */}
                        <div
                            className="absolute"
                            style={{
                                width: '100px',
                                height: '109px',
                                left: 'calc(50% - 50px)',
                                top: '4px',
                                backgroundColor: 'rgb(17, 18, 23)',
                                borderRadius: '10px',
                                boxShadow: 'inset 0px 1px 0px 0px rgb(31, 31, 48), inset 0px -1px 0px 0px rgb(31, 31, 48), inset 0px 0px 19px 0px rgba(51, 51, 51, 0.2)'
                            }}
                        >
                            {/* Inside EQ */}
                            <div
                                className="absolute"
                                style={{
                                    width: '82px',
                                    height: '103px',
                                    left: 'calc(50% - 41px)',
                                    top: 'calc(48.6% - 51.5px)',
                                    zIndex: 6
                                }}
                            >
                                {/* EQ Label */}
                                <div
                                    className="absolute font-mono"
                                    style={{
                                        fontSize: '20px',
                                        color: 'rgb(75, 77, 87)',
                                        left: '50%',
                                        bottom: '0px',
                                        transform: 'translateX(-50%)',
                                        whiteSpace: 'pre'
                                    }}
                                >
                                    EQ
                                </div>

                                {/* Inner Black Housing */}
                                <div
                                    className="absolute"
                                    style={{
                                        width: '65px',
                                        height: '66px',
                                        left: 'calc(50% - 32.5px)',
                                        top: '8px',
                                        backgroundColor: 'rgb(4, 5, 7)',
                                        borderRadius: '50%',
                                        boxShadow: 'inset 0px -1px 1px 0px rgb(34, 35, 38), inset 0px 1px 1px 0px rgb(34, 35, 38)'
                                    }}
                                />

                                {/* EQ Marks */}
                                <div
                                    className="absolute"
                                    style={{
                                        width: '1px',
                                        height: '4px',
                                        left: 'calc(50% - 0.5px)',
                                        top: '2px',
                                        backgroundColor: 'rgb(58, 61, 79)'
                                    }}
                                />
                                <div
                                    className="absolute"
                                    style={{
                                        width: '1px',
                                        height: '4px',
                                        left: '77px',
                                        top: '39px',
                                        backgroundColor: 'rgb(58, 61, 79)',
                                        transform: 'rotate(-90deg)'
                                    }}
                                />
                                <div
                                    className="absolute"
                                    style={{
                                        width: '1px',
                                        height: '4px',
                                        left: '4px',
                                        top: '39px',
                                        backgroundColor: 'rgb(58, 61, 79)',
                                        transform: 'rotate(-90deg)'
                                    }}
                                />
                            </div>

                            {/* Volume Knob */}
                            <motion.div
                                className="absolute cursor-pointer"
                                style={{
                                    width: '51px',
                                    height: '52px',
                                    left: 'calc(50% - 25.5px)',
                                    top: '16px',
                                    background: 'linear-gradient(180deg, rgb(30, 29, 35) 0%, rgb(30, 30, 38) 100%)',
                                    borderRadius: '50%',
                                    boxShadow: 'inset 0px -1px 1px 0px rgb(34, 35, 38), inset 0px 1px 1px 0px rgb(34, 35, 38), inset 0px 4px 8px 0px rgba(0, 0, 0, 0.47)',
                                    zIndex: 6,
                                    pointerEvents: 'auto'
                                }}
                                animate={{ rotate: knobRotation }}
                                onClick={() => setKnobRotation(prev => (prev + 45) % 360)}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.92 }}
                            >
                                {/* Knob Line Container */}
                                <div className="absolute inset-0">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            borderRadius: '50%',
                                            zIndex: -1
                                        }}
                                    />
                                    {/* Orange Line Indicator */}
                                    <div
                                        className="absolute"
                                        style={{
                                            width: '2px',
                                            height: '8px',
                                            left: 'calc(51% - 1px)',
                                            top: '6px',
                                            backgroundColor: 'rgb(255, 111, 0)',
                                            borderRadius: '20px',
                                            boxShadow: 'inset 0px 1px 0px 2px rgb(240, 126, 46), 0px 1px 4px 0px rgba(240, 151, 67, 0.73)'
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Glassmorphism Overlay - Creates the glass/gel base */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%)',
                            borderRadius: '20px',
                            zIndex: 5,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Glass Border Highlight */}
                    <div
                        className="absolute inset-0"
                        style={{
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                            borderRadius: '20px',
                            zIndex: 6,
                            pointerEvents: 'none'
                        }}
                    />

                    {/* Multi-Layered Cursor-Following Gel Effect */}

                    {/* Layer 1: Large Soft Glow */}
                    <motion.div
                        className="absolute"
                        animate={{
                            x: mousePosition.x - 150,
                            y: mousePosition.y - 150
                        }}
                        transition={{
                            type: 'spring',
                            damping: 25,
                            stiffness: 150,
                            mass: 0.8
                        }}
                        style={{
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(180, 190, 240, 0.2) 0%, rgba(150, 160, 220, 0.1) 25%, transparent 50%)',
                            filter: 'blur(35px)',
                            pointerEvents: 'none',
                            zIndex: 8,
                            mixBlendMode: 'screen',
                            opacity: 0.8
                        }}
                    />

                    {/* Layer 2: Medium Sharp Highlight */}
                    <motion.div
                        className="absolute"
                        animate={{
                            x: mousePosition.x - 100,
                            y: mousePosition.y - 100
                        }}
                        transition={{
                            type: 'spring',
                            damping: 35,
                            stiffness: 250,
                            mass: 0.4
                        }}
                        style={{
                            width: '200px',
                            height: '200px',
                            background: 'radial-gradient(circle, rgba(200, 210, 255, 0.35) 0%, rgba(160, 180, 230, 0.18) 35%, transparent 55%)',
                            filter: 'blur(20px)',
                            pointerEvents: 'none',
                            zIndex: 9,
                            mixBlendMode: 'screen',
                            opacity: 0.9
                        }}
                    />

                    {/* Layer 3: Small Intense Core */}
                    <motion.div
                        className="absolute"
                        animate={{
                            x: mousePosition.x - 60,
                            y: mousePosition.y - 60
                        }}
                        transition={{
                            type: 'spring',
                            damping: 40,
                            stiffness: 300,
                            mass: 0.2
                        }}
                        style={{
                            width: '120px',
                            height: '120px',
                            background: 'radial-gradient(circle, rgba(230, 240, 255, 0.45) 0%, rgba(190, 210, 245, 0.25) 40%, transparent 65%)',
                            filter: 'blur(14px)',
                            pointerEvents: 'none',
                            zIndex: 10,
                            mixBlendMode: 'plus-lighter',
                            opacity: 0.95
                        }}
                    />

                    {/* Layer 4: Subtle Edge Shimmer */}
                    <motion.div
                        className="absolute"
                        animate={{
                            x: mousePosition.x - 80,
                            y: mousePosition.y - 80
                        }}
                        transition={{
                            type: 'spring',
                            damping: 20,
                            stiffness: 180,
                            mass: 0.6
                        }}
                        style={{
                            width: '160px',
                            height: '160px',
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(200, 210, 240, 0.06) 30%, transparent 50%)',
                            filter: 'blur(28px)',
                            pointerEvents: 'none',
                            zIndex: 7,
                            mixBlendMode: 'overlay',
                            opacity: 0.7
                        }}
                    />

                    {/* Gel Refraction Effect - Adds depth */}
                    <motion.div
                        className="absolute"
                        animate={{
                            x: mousePosition.x - 40,
                            y: mousePosition.y - 40,
                        }}
                        transition={{
                            type: 'spring',
                            damping: 50,
                            stiffness: 400,
                            mass: 0.15
                        }}
                        style={{
                            width: '80px',
                            height: '80px',
                            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(230, 240, 255, 0.12) 25%, transparent 45%)',
                            filter: 'blur(8px)',
                            pointerEvents: 'none',
                            zIndex: 11,
                            mixBlendMode: 'soft-light',
                            opacity: 0.6
                        }}
                    />


                    {/* Static Highlight Overlay */}
                    <div
                        className="absolute"
                        style={{
                            width: '70px',
                            height: '58px',
                            right: '-30px',
                            top: '44px',
                            backgroundColor: 'rgba(48, 49, 51, 0.61)',
                            filter: 'blur(9px)',
                            opacity: 0.98,
                            zIndex: 0,
                            pointerEvents: 'none'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
