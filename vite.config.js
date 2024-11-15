import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
// export default defineConfig({
//   base: '/test-ba-vue-auth/',
//   plugins: [vue()],
// })

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/test-ba-vue-auth/" : "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
