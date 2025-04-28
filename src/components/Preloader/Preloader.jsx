
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion after a short delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <img 
        src="/wp-content/themes/bitrader/assets/img/logo/preloader.png" 
        alt="Preloader"
      />
    </div>
  );
};

export default Preloader;
