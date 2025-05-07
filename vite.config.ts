import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { ViteRsw } from 'vite-plugin-rsw'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ViteRsw(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages/', import.meta.url)),
      '#': fileURLToPath(new URL('./crates/', import.meta.url)),
    },
  },
})
