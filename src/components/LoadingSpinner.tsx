export const LoadingSpinner = () => {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="relative">
                {/* Outer spinning ring */}
                <div className="w-16 h-16 border-4 border-white/10 border-t-red-600 rounded-full animate-spin"></div>

                {/* Inner pulsing dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>

                {/* Glow effect */}
                <div className="absolute inset-0 blur-xl bg-red-600/20 rounded-full animate-pulse"></div>
            </div>

            {/* Loading text */}
            <div className="absolute mt-32 text-white/50 text-sm font-mono tracking-wider animate-pulse">
                Loading...
            </div>
        </div>
    );
};
