
import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-inner">
        <div className="preloader-icon">
          <img src="/assets/img/logo/preloader.png" alt="Preloader" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
