import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig(async ({ mode }) => {
  const isPortable = mode === 'portable'
  const plugins = [react()]

  if (isPortable) {
    const { viteSingleFile } = await import('vite-plugin-singlefile')
    plugins.push(viteSingleFile())
  } else {
    plugins.push(VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon-192.svg', 'icon-512.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'],
      manifest: {
        name: "Aalian's IELTS Trainer",
        short_name: 'IELTS',
        description: 'Practice IELTS Listening, Reading, Writing & Speaking with Band 7+ content',
        theme_color: '#991b1b',
        background_color: '#1a1a2e',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml', purpose: 'any' },
          { src: '/icon-512.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'any' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,json}'],
        runtimeCaching: [{
          urlPattern: /^https?:\/\/.*/,
          handler: 'NetworkFirst',
          options: { cacheName: 'ielts-cache', expiration: { maxEntries: 200, maxAgeSeconds: 30 * 24 * 60 * 60 } },
        }],
      },
    }))
  }

  return {
    base: './',
    plugins,
  }
})
