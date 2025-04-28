
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 5000,
    hmr: {
      host: '0.0.0.0',
      clientPort: 443,
      protocol: 'wss',
      timeout: 120000
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    watch: {
      usePolling: true
    },
    strictPort: false,
    allowedHosts: ['ce099ecb-fbba-4e62-9e61-877a6e07464a-00-13e3p44nzja05.spock.replit.dev', '.replit.dev', 'all']
  }
})
