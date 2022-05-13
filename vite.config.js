import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

	css: {
		preprocessorOptions: {
			postcss: {
				plugins: [autoprefixer()]
			}
		}
	},

	server: {
		port: 3000,
		proxy: {
			'/api': {
				target: 'http://localhost:3003',
				changeOrigin: true
			},
		}
	}
})
