
import React, { useState, useEffect } from 'react';

const PreloadAssets = ({ children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate asset loading
    setTimeout(() => {
      setLoaded(true);
    }, 500);
  }, []);

  if (!loaded) {
    return (
      <div className="preloader">
        <div className="loader">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreloadAssets;
