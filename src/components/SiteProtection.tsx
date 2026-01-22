import { useEffect } from 'react';

export const SiteProtection = () => {
    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Disable keyboard shortcuts for DevTools and source view
        const handleKeyDown = (e: KeyboardEvent) => {
            // F12
            if (e.key === 'F12') {
                e.preventDefault();
            }
            // Ctrl+Shift+I (DevTools)
            if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                e.preventDefault();
            }
            // Ctrl+Shift+J (Console)
            if (e.ctrlKey && e.shiftKey && e.key === 'J') {
                e.preventDefault();
            }
            // Ctrl+Shift+C (Inspect Element)
            if (e.ctrlKey && e.shiftKey && e.key === 'C') {
                e.preventDefault();
            }
            // Ctrl+U (View Source)
            if (e.ctrlKey && e.key === 'u') {
                e.preventDefault();
            }
        };

        // Disable text selection
        const handleSelectStart = (e: Event) => {
            e.preventDefault();
        };

        // Disable drag and drop for images
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        // --- Aggressive Anti-Debugging Measures ---

        // 1. Disable Console
        const disableConsole = () => {
            // @ts-ignore
            if (!window.console) window.console = {};
            const methods = ['log', 'debug', 'info', 'warn', 'error', 'assert', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'trace', 'profile', 'profileEnd'];
            methods.forEach(method => {
                // @ts-ignore
                window.console[method] = function () { };
            });
        };
        disableConsole();

        // 2. Anti-Debugging Loop (The "Debugger Bomb")
        // This will freeze the browser if DevTools is open because it hits a breakpoint repeatedly.
        const antiDebug = () => {
            const check = () => {
                function doCheck(a: number) {
                    if (('' + a / a).length !== 1 || a % 20 === 0) {
                        (function () { }
                            .constructor('debugger')
                            ());
                    } else {
                        (function () { }
                            .constructor('debugger')
                            ());
                    }
                    doCheck(++a);
                }
                try {
                    doCheck(0);
                } catch (err) { }
            };
            setInterval(check, 1000);
        };
        // Run anti-debug check
        antiDebug();

        // 3. DevTools Detection & DOM Clearing
        // Check roughly if window size implies docked devtools or if execution is being paused
        const detectDevTools = () => {
            const threshold = 160;
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;

            if (widthThreshold || heightThreshold) {
                // Potential DevTools detected - Logic removed to allow user to continue using site
                // but other safety features (debugger bomb, console disable) remain active.
            }
        };
        const devToolsCheckInterval = setInterval(detectDevTools, 500);

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('selectstart', handleSelectStart);
        document.addEventListener('dragstart', handleDragStart);

        // Add user-select: none to body
        document.body.style.userSelect = 'none';
        document.body.style.webkitUserSelect = 'none';
        // @ts-ignore
        document.body.style.msUserSelect = 'none';
        // @ts-ignore
        document.body.style.MozUserSelect = 'none';

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('selectstart', handleSelectStart);
            document.removeEventListener('dragstart', handleDragStart);

            clearInterval(devToolsCheckInterval);

            document.body.style.userSelect = 'auto';
            document.body.style.webkitUserSelect = 'auto';
            // @ts-ignore
            document.body.style.msUserSelect = 'auto';
            // @ts-ignore
            document.body.style.MozUserSelect = 'auto';
        };
    }, []);

    return null;
};
