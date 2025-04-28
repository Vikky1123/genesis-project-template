
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import './vite-hmr-fix.js'; // Import the WebSocket fix

const container = document.getElementById('root');

if (container) {
  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render application:", error);
  }
} else {
  console.error('Root element not found in the document');
}
