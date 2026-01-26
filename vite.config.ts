import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import obfuscator from 'rollup-plugin-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // @ts-ignore
        {
            ...obfuscator({
                global: true,
                options: {
                    compact: false,
                    controlFlowFlattening: false,
                    controlFlowFlatteningThreshold: 0.75,
                    deadCodeInjection: false,
                    deadCodeInjectionThreshold: 0.4,
                    debugProtection: false,
                    debugProtectionInterval: 0,
                    disableConsoleOutput: true,
                    identifierNamesGenerator: 'hexadecimal',
                    log: false,
                    numbersToExpressions: true,
                    renameGlobals: false,
                    selfDefending: true,
                    simplify: true,
                    // splitStrings: false, // Disabled to prevent OOM with large inline assets
                    stringArray: true,
                    stringArrayCallsTransform: true,
                    stringArrayCallsTransformThreshold: 0.75,
                    stringArrayEncoding: ['base64'],
                    stringArrayIndexShift: true,
                    stringArrayRotate: true,
                    stringArrayShuffle: true,
                    stringArrayWrappersCount: 2,
                    stringArrayWrappersChainedCalls: true,
                    stringArrayWrappersParametersMaxCount: 4,
                    stringArrayThreshold: 0.75,
                    transformObjectKeys: true,
                    unicodeEscapeSequence: false
                }
            }),
            apply: 'build',
        }
    ],
    esbuild: {
        sourcemap: false,
        drop: ['console', 'debugger'], // Remove console logs in production
    },
    css: {
        devSourcemap: false,
    },
    build: {
        sourcemap: false,
        // Chunk splitting for better caching
        rollupOptions: {
            output: {
                manualChunks: {
                    // Vendor chunks
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'animation-vendor': ['framer-motion'],
                    'ui-vendor': ['lucide-react'],
                },
                // Asset naming for better caching
                assetFileNames: 'assets/[name]-[hash][extname]',
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
        // Enable minification
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log', 'console.info', 'console.debug'],
            },
        },
        // Asset inlining threshold (4kb)
        assetsInlineLimit: 4096,
    },
    // Performance optimizations
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    // Server configuration for better dev experience
    server: {
        host: true,
        cors: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3001',
                changeOrigin: true,
                secure: false,
            }
        }
    },
})
