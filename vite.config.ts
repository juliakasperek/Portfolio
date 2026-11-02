import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' keeps asset paths relative, so the build works both at a
// sub-path (juliakasperek.github.io/Portfolio/) and at a domain root.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
