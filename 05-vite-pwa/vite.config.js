import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Mi Aplicacion de Vite y PWA',
        short_name: 'Vite y PWA',
        theme_color: '#333333',
        background_color: '#160312',
        description: 'Una aplicación simple hecha con Vite.js y React',
        lang: 'es',
        icons: [
          {
            src: 'assets/logo192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      }
    })]
})
