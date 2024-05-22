import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  esbuild: {
    // Enable compatibility mode for CommonJS imports
    // This allows Vite to handle require() calls
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    // Add any other esbuild options as needed
  },
})
