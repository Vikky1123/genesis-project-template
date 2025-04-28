
import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="preloader">
      <img src="/assets/img/logo/preloader.png" alt="Preloader" />
    </div>
  ) : null;
};

export default Preloader;
