
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      clientPort: 443,
      protocol: 'wss',
      host: process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + '.repl.co',
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
    // Add allowedHosts configuration to fix the blocked request error
    fs: {
      strict: false
    },
    cors: true,
    // Allow all hosts, including your Replit domain
    allowedHosts: 'all'
  }
})
