
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: 5000,
    hmr: {
      host: 'ce099ecb-fbba-4e62-9e61-877a6e07464a-00-13e3p44nzja05.spock.replit.dev',
      protocol: 'wss',
      clientPort: 443
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
})
