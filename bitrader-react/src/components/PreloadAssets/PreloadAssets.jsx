import React, { useEffect, useState } from 'react';
import { preloadThemeAssets } from '../../utils/preloadAssets';

const PreloadAssets = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        await preloadThemeAssets();
      } catch (error) {
        console.error('Failed to preload assets:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAssets();
  }, []);

  if (isLoading) {
    return (
      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--header-bg-color)',
          zIndex: 9999,
        }}
      >
        <div role="status" aria-label="Loading site">
          <svg 
            width="50" 
            height="50" 
            viewBox="0 0 50 50"
            style={{ animation: 'spin 1s linear infinite' }}
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="var(--brand-color)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="94.248"
              strokeDashoffset="47.124"
            />
          </svg>
        </div>
      </div>
    );
  }

  return children;
};

export default PreloadAssets;