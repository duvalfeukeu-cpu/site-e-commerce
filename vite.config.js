import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 Vérifie que cette ligne est bien là

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 Et celle-ci aussi
  ],
})
