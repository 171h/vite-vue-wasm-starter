import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import { ViteRsw } from 'vite-plugin-rsw'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  base: 'vite-vue-wasm-starter',
  plugins: [
    vue(),
    vueDevTools(),
    ViteRsw(),
    UnoCSS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
