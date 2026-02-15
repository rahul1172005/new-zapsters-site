import { motion } from 'framer-motion';
import { LazyImage } from '../LazyImage';
import cardTexture from '../../assets/card-texture.png';
import adobeIcon from '../../assets/pic8 (1).png';
import speedometer from '../../assets/speedometer.png';
import globeDots from '../../assets/globe-dots.png';


export const BetterDatabaseSection = () => {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div
                    className="mb-16 text-center"
                >
                    <h2 className="text-5xl md:text-[5rem] font-semibold text-black tracking-tight leading-none mb-4">
                        Better database. <br />
                        For modern workflows.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bento Grid: Cinematic "10x" Masterpiece */}
                    <div className="md:col-span-2 h-auto md:h-[450px] w-full grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 1: Web & App Development (Dark Red Premium) */}
                        <div className="group relative rounded-[40px] bg-[#020202] flex flex-col overflow-hidden shadow-2xl h-auto md:h-[450px] min-h-[450px]" >
                            <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0 pointer-events-none z-[1]" />
                            {/* Grain Effect Overlay */}
                            <div className="absolute inset-0 opacity-[0.6] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                            {/* Custom Texture Layer */}
                            <>
                                <div className="absolute inset-0 
    opacity-50 
    mix-blend-overlay 
    pointer-events-none"
                                    style={{ backgroundImage: `url(${cardTexture})` }}
                                />
                                <div className="absolute inset-0 
    opacity-5 
    mix-blend-hard-light 
    pointer-events-none"
                                    style={{ backgroundImage: `url(${cardTexture})` }}
                                />
                            </>

                            {/* Red Glow Removed */}

                            {/* 2. Bottom Ambient Haze (Red Foundation) */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#3f0000] via-[#1a0505] to-transparent opacity-90 pointer-events-none" />

                            {/* 3. Top Reflection / Light Source */}
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff0000]/40 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.5)]" />

                            {/* Middle Content: 3 Tech Icons (Static, Premium, Glass) */}
                            <div className="relative z-10 flex justify-center gap-6 mt-20 px-8 w-full">
                                {/* Icon Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] border border-white/5 flex items-center justify-center">
                                    <img
                                        src="https://cdn.simpleicons.org/flutter/42A5F5"
                                        alt="Flutter"
                                        className="w-10 h-10"
                                        loading="lazy"
                                    />
                                </div>

                                {/* React Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] metal-stroke flex items-center justify-center">
                                    <img
                                        src="https://cdn.simpleicons.org/react/61DAFB"
                                        alt="React"
                                        className="w-10 h-10 animate-[spin_10s_linear_infinite]"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Next.js Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] metal-stroke flex items-center justify-center">
                                    <img
                                        src="https://cdn.simpleicons.org/nextdotjs/white"
                                        alt="Next.js"
                                        className="w-10 h-10"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Bottom Text Content */}
                            <div className="relative z-20 mt-auto p-6 md:p-10 text-left">
                                <h3 className="text-[2.5rem] font-bold leading-[1.1] mb-3 tracking-tight flex flex-col">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">DEVELOPMENT</span>
                                </h3>
                                <p className="text-lg text-white/50 font-medium tracking-wide">
                                    The best <span className="text-white brightness-125 border-b border-white/20 pb-0.5">in the market</span>, not the one which starts with V.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: UI/UX Design (Dark Red Premium Match) */}
                        <div className="group relative rounded-[40px] bg-[#020202] flex flex-col overflow-hidden shadow-2xl h-auto md:h-[450px] min-h-[450px]" >
                            <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0 pointer-events-none z-[1]" />
                            {/* Grain Effect Overlay */}
                            <div className="absolute inset-0 opacity-[0.6] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                            {/* Custom Texture Layer */}
                            <>
                                <div className="absolute inset-0 
    opacity-50 
    mix-blend-overlay 
    pointer-events-none"
                                    style={{ backgroundImage: `url(${cardTexture})` }}
                                />
                                <div className="absolute inset-0 
    opacity-5 
    mix-blend-hard-light 
    pointer-events-none"
                                    style={{ backgroundImage: `url(${cardTexture})` }}
                                />
                            </>



                            {/* 2. Bottom Ambient Haze */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#3f0000] via-[#1a0505] to-transparent opacity-90 pointer-events-none" />

                            {/* 3. Top Reflection */}
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff0000]/40 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.5)]" />

                            {/* Middle Content: 3 Design Icons */}
                            <div className="relative z-10 flex justify-center gap-6 mt-20 px-8 w-full">
                                {/* Figma Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] metal-stroke flex items-center justify-center">
                                    <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="w-10 h-10" loading="lazy" />
                                </div>
                                {/* Adobe (Fixed Icon) Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] metal-stroke flex items-center justify-center">
                                    <LazyImage src={adobeIcon} alt="Adobe" className="w-20 h-20 object-contain" />
                                </div>
                                {/* Framer Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] border border-white/5 ring-1 ring-white/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center">
                                    <img src="https://cdn.simpleicons.org/framer/0055FF" alt="Framer" className="w-10 h-10" loading="lazy" />
                                </div>
                            </div>

                            {/* Bottom Text Content (Fixed Alignment) */}
                            <div className="relative md:absolute bottom-auto md:bottom-10 left-0 w-full px-6 md:px-10 text-left z-20 mt-auto">
                                <h3 className="text-[2.5rem] font-bold leading-[1.1] mb-3 tracking-tight flex flex-col justify-end">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">UI / UX</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">DESIGN</span>
                                </h3>
                                <p className="text-lg text-white/50 font-medium tracking-wide">
                                    Crafting <span className="text-white brightness-125 border-b border-white/20 pb-0.5">digital experiences</span> that users love.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Cybersecurity (Dark Red Premium Match) */}
                        <div className="group relative rounded-[40px] bg-[#020202] flex flex-col overflow-hidden shadow-2xl h-auto md:h-[450px] min-h-[450px]" >
                            <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0 pointer-events-none z-[1]" />
                            {/* Grain Effect Overlay */}
                            <div className="absolute inset-0 opacity-[0.6] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                            {/* Custom Texture Layer */}
                            <>
                                <div className="absolute inset-0 
    opacity-50 
    mix-blend-overlay 
    pointer-events-none"
                                    style={{ backgroundImage: `url(${cardTexture})` }}
                                />
                                <div className="absolute inset-0 
    opacity-5 
    mix-blend-hard-light 
    pointer-events-none"
                                    style={{ backgroundImage: `url(${cardTexture})` }}
                                />
                            </>


                            {/* Red Glow Removed */}

                            {/* 2. Bottom Ambient Haze */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#3f0000] via-[#1a0505] to-transparent opacity-90 pointer-events-none" />

                            {/* 3. Top Reflection */}
                            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff0000]/40 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.5)]" />

                            {/* Middle Content: 3 Security Icons */}
                            <div className="relative z-10 flex justify-center gap-6 mt-20 px-8 w-full">
                                {/* Kali Linux Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] metal-stroke flex items-center justify-center">
                                    <img src="https://cdn.simpleicons.org/kalilinux/557C94" alt="Kali" className="w-10 h-10" loading="lazy" />
                                </div>
                                {/* Wireshark Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] border border-white/5 ring-1 ring-white/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center">
                                    <img src="https://cdn.simpleicons.org/wireshark/1679A7" alt="Wireshark" className="w-10 h-10" loading="lazy" />
                                </div>
                                {/* Metasploit Box */}
                                <div className="relative w-20 h-20 rounded-[24px] bg-[#0f0f0f] border border-white/5 ring-1 ring-white/5 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] flex items-center justify-center">
                                    <img src="https://cdn.simpleicons.org/metasploit/black" alt="Metasploit" className="w-10 h-10 invert" loading="lazy" />
                                </div>
                            </div>

                            {/* Bottom Text Content (Fixed Alignment) */}
                            <div className="relative md:absolute bottom-auto md:bottom-10 left-0 w-full px-6 md:px-10 text-left z-20 mt-auto">
                                <h3 className="text-[2.5rem] font-bold leading-[1.1] mb-3 tracking-tight flex flex-col justify-end">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">CYBER</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">SECURITY</span>
                                </h3>
                                <p className="text-lg text-white/50 font-medium tracking-wide">
                                    Protecting <span className="text-white brightness-125 border-b border-white/20 pb-0.5">digital assets</span> with advanced protocols.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Card 4: High-Velocity Team Execution (Red Speedometer) */}
                    <div className="relative h-auto md:h-[420px] min-h-[420px] rounded-[32px] bg-[#050000] overflow-hidden flex flex-col justify-end p-10 group" >
                        <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0 pointer-events-none z-[1]" />
                        {/* Grain Effect Overlay */}
                        <div className="absolute inset-0 opacity-[0.6] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        {/* Background: Deep Red Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000] via-[#0a0000] to-black" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />

                        {/* Custom Texture Layer */}
                        <div className="absolute inset-0 opacity-100 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${cardTexture})` }} />

                        {/* Volumetric Red Glow for perfect blending */}
                        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-10 pointer-events-none overflow-visible">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.35)_0%,transparent_70%)] blur-[40px] animate-pulse" />
                            <div className="absolute inset-x-10 inset-y-10 bg-[radial-gradient(circle_at_center,rgba(185,28,28,0.4)_0%,transparent_60%)] blur-[20px]" />
                        </div>

                        {/* Speedometer Image Container */}
                        <div className="relative md:absolute top-auto md:top-[45%] left-auto md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[380px] h-[380px] flex items-center justify-center mx-auto my-10 z-20">
                            <img
                                src={speedometer}
                                alt="Speedometer"
                                className="w-full h-full object-contain relative z-0"
                                style={{ transform: 'scale(1.1) translate(1.9px, 1.1px)' }}
                            />

                            {/* Interactive Needle Layer */}
                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                {/* The Needle - Neon Metal Texture */}
                                <div
                                    className="w-[6px] h-[90px] origin-bottom transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] -rotate-[110deg] group-hover:rotate-[45deg] absolute bottom-[50%] z-10 drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]"
                                    style={{
                                        left: 'calc(50% - 10px)', // User-defined position
                                        transformOrigin: '5% 79%' // User-defined pivot
                                    }}
                                >
                                    {/* Metallic Cylinder Base (Left-to-Right Gradient for 3D Roundness) */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-[#2a0a0a] via-[#ef4444] to-[#2a0a0a]"
                                        style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
                                    />

                                    {/* Neon Glow Overlay (Top-to-Bottom for Tip Intensity) */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-b from-white via-red-500/50 to-transparent mix-blend-overlay"
                                        style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
                                    />

                                    {/* Central Spine Highlight (Sharp Reflection) */}
                                    <div
                                        className="absolute left-[40%] right-[40%] top-0 bottom-0 bg-white/40"
                                        style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}
                                    />
                                </div>

                                {/* Center Pivot Cap - 3D Glassy/Metallic Look */}
                                <div
                                    className="absolute w-[28px] h-[28px] rounded-full bg-[radial-gradient(circle_at_30%_30%,#7f1d1d,#000000)] border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.15)] z-20"
                                    style={{
                                        left: 'calc(50% - 18.8px)', // User-defined position
                                        bottom: 'calc(50% + 8.5px)' // User-defined position
                                    }}
                                >
                                    {/* Gloss Reflection */}
                                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-gradient-to-b from-white/20 to-transparent rounded-full opacity-60" />
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="relative md:absolute bottom-auto md:bottom-10 left-6 md:left-10 z-20 mt-auto p-6 md:p-0">
                            <h3 className="text-4xl font-bold mb-4 leading-tight tracking-tight flex flex-col">
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">High-Velocity</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">Team Execution</span>
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed max-w-[340px] font-medium">
                                We build, iterate, and deliver at startup speed without compromising quality.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: Powerful Industry Connections (Globe Orbit) */}
                    <div className="relative h-auto md:h-[420px] min-h-[420px] rounded-[32px] bg-[#050000] overflow-hidden flex flex-col justify-end p-10 group" >
                        <div className="absolute inset-0 grayscale transition-all duration-700 group-hover:grayscale-0 pointer-events-none z-[1]" />
                        {/* Grain Effect Overlay */}
                        <div className="absolute inset-0 opacity-[0.6] pointer-events-none z-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        {/* Background: Deep Red Vignette */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0000] via-[#0a0000] to-black" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />

                        {/* Custom Texture Layer */}
                        <div className="absolute inset-0 opacity-100 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${cardTexture})` }} />

                        {/* Red Glow Removed */}

                        {/* Red Glow Behind Globe */}
                        <div className="absolute top-[90%] right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(220,20,60,0.2)_0%,transparent_70%)] pointer-events-none mix-blend-screen" />

                        {/* Globe & Orbit Visual */}
                        <div className="relative md:absolute top-auto md:top-[40%] right-auto md:right-[5%] md:-translate-y-1/2 w-[350px] h-[350px] flex items-center justify-center mx-auto my-10">

                            {/* Globe Dots Image */}
                            <img
                                src={globeDots}
                                alt="Global Connections"
                                className="w-[550px] h-auto object-contain opacity-100"
                                style={{ transform: 'scale(1) translate(0px, 0px)' }}
                            />
                        </div>

                        {/* Text Content */}
                        <div className="relative md:absolute bottom-auto md:bottom-10 left-6 md:left-10 z-20 mt-auto p-6 md:p-0">
                            <h3 className="text-4xl font-bold mb-4 leading-tight tracking-tight flex flex-col">
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">Powerful Industry</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-400">Connections</span>
                            </h3>
                            <p className="text-white/70 text-lg leading-relaxed max-w-[340px] font-medium">
                                Connected with tools, platforms, and partners that scale real-world solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
