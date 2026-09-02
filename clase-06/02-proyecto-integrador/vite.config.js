import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// https://vite.dev/config/shared-options#css-devsourcemap
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    devSourcemap: true
  }
})


