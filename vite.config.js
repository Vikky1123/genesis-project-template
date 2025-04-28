
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: {
      host: '0.0.0.0',
      protocol: 'ws'
    },
    allowedHosts: [
      'ce099ecb-fbba-4e62-9e61-877a6e0746ca-00-13e3p44nzja05.spock.replit.dev'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
})
