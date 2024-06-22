import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteExternalsPlugin } from 'vite-plugin-externals'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5181
  },
  plugins: [
    vue(),
    viteExternalsPlugin({
      vue: 'vue',
      pinia: 'pinia',
      'vue-router': 'vue-router'
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-slave.[hash].js',
        entryFileNames: () => {
          return 'assets/[name]-slave.[hash].js'
        },
      }
    }
  }
})
