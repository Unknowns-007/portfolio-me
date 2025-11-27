import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // Bind to all network interfaces so other devices on your LAN can access the dev server
    host: true,
    // Optional: ensure default port (change if needed)
    port: 5173,
  },
})
