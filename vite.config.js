import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Import other plugins as needed
export default defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@Components': fileURLToPath(
                new URL('./src/components', import.meta.url),
            ),
            '@UI': fileURLToPath(
                new URL('./src/components/ui', import.meta.url),
            ),
            '@Navigation': fileURLToPath(
                new URL('./src/components/navigation', import.meta.url),
            ),
            '@Assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            '@Lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        },
    },
})
