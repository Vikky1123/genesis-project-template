
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    https: false, // Changed to false as it may cause issues in Replit
    hmr: {
      host: '0.0.0.0',
      clientPort: 443, // Force client to use 443 for WSS
      protocol: 'ws' // Using ws since we're not using https
    },
    allowedHosts: [
      'ce099ecb-fbba-4e62-9e61-877a6e0746ca-00-13e3p44nzja05.spock.replit.dev',
      'ce099ecb-fbba-4e62-9e61-877a6e07464a-00-13e3p44nzja05.spock.replit.dev'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
