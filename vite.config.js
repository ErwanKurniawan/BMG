import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the build works on GitHub Pages both at
  // <user>.github.io/<repo>/ and at a custom domain root.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})