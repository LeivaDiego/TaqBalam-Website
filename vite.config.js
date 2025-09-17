import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Import other plugins as needed
export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: '/TaqBalam-Website/', // Set your base path here
	resolve: {
		alias: {
			// Root Alias
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			// Component Aliases
			'@Components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@UI': fileURLToPath(new URL('./src/components/ui', import.meta.url)),
			'@Navigation': fileURLToPath(new URL('./src/components/navigation', import.meta.url)),
			'@Text': fileURLToPath(new URL('./src/components/text', import.meta.url)),
			'@Widgets': fileURLToPath(new URL('./src/components/widgets', import.meta.url)),
			'@Sections': fileURLToPath(new URL('./src/components/sections', import.meta.url)),
			'@Buttons': fileURLToPath(new URL('./src/components/buttons', import.meta.url)),
			// Page Aliases
			'@Pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
			// Asset Aliases
			'@Assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
			'@Images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
			'@Videos': fileURLToPath(new URL('./src/assets/videos', import.meta.url)),
			// Utility Aliases
			'@Lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
		},
	},
})
