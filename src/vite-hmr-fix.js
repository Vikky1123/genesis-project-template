
// This script ensures the WebSocket connection uses the correct hostname
// It will be imported in main.jsx
if (import.meta.hot) {
  // Force the HMR websocket to use the current hostname rather than localhost
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  const url = `${protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/`;
  
  import.meta.hot.on('vite:beforeUpdate', () => {
    console.log('[vite-hmr-fix] HMR update detected');
  });
}
