
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      // Use the Replit domain as the WebSocket host
      host: window.location.hostname,
      protocol: 'wss',
      clientPort: 443,
      timeout: 120000
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    },
    allowedHosts: ['5f11bc14-214e-40e4-a022-8f0c43137859-00-kuwidr4yx4hc.riker.replit.dev', 'localhost', '.replit.dev']
  }
})
