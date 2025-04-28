import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroBanner from './HeroBanner';
import PartnerSlider from './PartnerSlider';
import AboutSection from './AboutSection';
// Import other section components as needed

const MainSection = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <main className="main-area fix">
      <HeroBanner />
      <PartnerSlider />
      <AboutSection />
      {/* Add other sections here */}
    </main>
  );
};

export default MainSection;