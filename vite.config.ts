
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import compression from 'vite-plugin-compression';

export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
            png: { quality: 80 },
            jpeg: { quality: 80 },
            jpg: { quality: 80 },
            webp: { lossless: false, quality: 80 },
            avif: { lossless: false, quality: 70 },
        }),
        compression({
            algorithm: 'gzip',
            ext: '.gz',
        }),
        compression({
            algorithm: 'brotliCompress',
            ext: '.br',
        })
    ],
    esbuild: {
        sourcemap: false,
        drop: ['console', 'debugger'],
    },
    build: {
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    'animation-vendor': ['framer-motion', 'lenis'],
                    'ui-vendor': ['lucide-react', 'react-icons'],
                    'three-vendor': ['three'],
                },
                assetFileNames: (assetInfo) => {
                    const name = assetInfo.name || '';
                    const parts = name.split('.');
                    let extType = parts[parts.length - 1] || 'unknown';
                    if (/png|jpe?g|svg|gif|tiff|webp|avif|bmp|ico/i.test(extType)) {
                        extType = 'img';
                    } else if (/woff|woff2/.test(extType)) {
                        extType = 'fonts';
                    } else if (/mp4|webm|ogg/.test(extType)) {
                        extType = 'media';
                    }
                    return `assets/${extType}/[name]-[hash][extname]`;
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
            },
        },
        chunkSizeWarningLimit: 1000,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        assetsInlineLimit: 10240,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
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
