
import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading and hide preloader after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!loading) {
    return null;
  }
  
  return (
    <div className="preloader">
      <img src="/assets/img/logo/preloader.png" alt="Preloader" />
    </div>
  );
};

export default Preloader;
