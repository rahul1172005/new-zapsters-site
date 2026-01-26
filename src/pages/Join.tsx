import { Navbar } from '../components/layout/Navbar';
import logo from '../assets/zapsters-logo.png';

const Join = () => {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-red-500/30 selection:text-white flex flex-col items-center justify-center relative overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

            <Navbar />

            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 mt-20">
                <img
                    src={logo}
                    alt="Zapsters Logo"
                    className="w-full max-w-[200px] h-auto object-contain mb-8 animate-fade-in drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                />

                <h1 className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-tighter uppercase drop-shadow-2xl">
                    Coming Soon
                </h1>

                <p className="text-gray-400 mt-6 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
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
