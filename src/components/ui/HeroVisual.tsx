
import { LazyVideo } from '../LazyVideo';
import { Layers, Smartphone, Bot, Palette, Rocket, GraduationCap } from 'lucide-react';
import { PriceCards } from './PriceCards';


const HeroVisual = () => {
    return (
        <section className="relative bg-white z-0 overflow-visible" style={{ minHeight: '140vh' }}>

            {/* Gradient Overlay for Blending - Adjusted for White BG */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/10 to-white pointer-events-none" style={{ height: '140vh' }} />


            {/* Extended White Background to cover remaining area */}
            <div className="absolute -bottom-[100vh] left-0 w-full h-[100vh] bg-white -z-10" />

            {/* HERO CONTENT */}
            <div className="relative z-10 pt-48 text-center px-4 w-full">
                <h1 className="text-5xl sm:text-6xl md:text-[7rem] font-semibold text-black tracking-tight leading-[1.1] md:leading-none max-w-[95vw] mx-auto break-words">
                    EVERYTHING SITE FOR<br />
                    YOUR FUTURE
                </h1>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => window.location.href = 'tel:+919342408432'}
                        className="bg-red-600 text-white px-8 py-3 rounded-full text-base font-bold hover:bg-red-700 transition-all border border-red-500/20">
                        BOOK A FREE DEMO
                    </button>
                    <a
                        href="/services"
                        className="bg-gradient-to-br from-[#080808] to-[#020202] text-white metal-stroke px-8 py-3 rounded-full text-base font-bold hover:bg-[#0a0a0a] hover:border-white/20 transition-all inline-flex items-center justify-center"
                    >
                        OUR SERVICES
                    </a>
                </div>

                <div className="mt-20">
                    <PriceCards />
                </div>
            </div>



            {/* AMBIENT RED LIGHT EFFECTS REMOVED */}

        </section >
    );
};

export default HeroVisual;
