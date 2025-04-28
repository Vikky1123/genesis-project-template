
// This file serves as an entry point for Replit
// It will start the Vite development server
const { spawn } = require('child_process');

console.log("Starting Vite development server...");

// Run the vite development server
const viteProcess = spawn('npm', ['run', 'dev'], { stdio: 'inherit' });

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite server:', err);
});

// Handle process termination
process.on('SIGINT', () => {
  viteProcess.kill();
  process.exit(0);
});
