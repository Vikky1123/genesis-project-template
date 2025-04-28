
// This file serves as an entry point for Replit
// It will start the Vite development server
const { spawn } = require('child_process');

console.log("Starting Vite development server...");

// Run the vite development server
const viteProcess = spawn('npx', ['vite'], { stdio: 'inherit' });

viteProcess.on('error', (err) => {
  console.error('Failed to start Vite server:', err);
  console.log('Attempting to use direct Node.js module resolution...');
  
  // Fallback to direct path if npx fails
  const directViteProcess = spawn('node', ['./node_modules/vite/bin/vite.js'], { stdio: 'inherit' });
  
  directViteProcess.on('error', (err) => {
    console.error('All attempts to start Vite server failed:', err);
  });
});

// Handle process termination
process.on('SIGINT', () => {
  viteProcess.kill();
  process.exit(0);
});
