import { Navbar } from '../components/layout/Navbar';
import logo from '../assets/zapsters-logo.png';

const Join = () => {
    return (
        <div className="bg-white min-h-screen text-black selection:bg-red-500/30 selection:text-white flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay" />
            {/* Ambient Red Glow Removed */}

            <Navbar />

            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 mt-20">
                <img
                    src={logo}
                    alt="Zapsters Logo"
                    className="w-full max-w-[200px] h-auto object-contain mb-8 animate-fade-in"
                />

                <h1 className="text-6xl md:text-9xl font-bold text-black tracking-tighter uppercase">
                    Coming Soon
                </h1>

                <p className="text-gray-500 mt-6 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
                    We are crafting an exclusive experience for our members.
                    <br />Stay tuned.
                </p>

                <div className="mt-12">

                </div>
            </div>
        </div>
    );
};

export default Join;
