
import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Force hide the preloader after 3 seconds maximum
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Hide preloader when page is loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener('load', handleLoad);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Render nothing when not loading
  if (!isLoading) return null;

  return (
    <div className="preloader" style={{ display: isLoading ? 'flex' : 'none' }}>
      <img src="/wp-content/themes/bitrader/assets/img/logo/preloader.png" alt="Preloader" />
    </div>
  );
};

export default Preloader;
