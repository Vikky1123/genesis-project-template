
// This file serves as an entry point for Replit
// It will start the Vite development server
const { spawn } = require('child_process');

console.log("Starting Vite development server...");

// Run the vite development server
const viteProcess = spawn('npx', ['vite'], { stdio: 'inherit' });

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite server:', err);
  console.log('Make sure you have Node.js and npm installed.');
  console.log('Try running: npm install');
});

// Handle process termination
process.on('SIGINT', () => {
  viteProcess.kill();
  process.exit(0);
});
