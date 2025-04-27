
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 8080,
    hmr: {
      clientPort: 443
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    watch: {
      usePolling: true
    },
    strictPort: true,
    allowedHosts: [
      '5f11bc14-214e-40e4-a022-8f0c43137859-00-kuwidr4yx4hc.riker.replit.dev',
      '.replit.dev'
    ]
  }
})
