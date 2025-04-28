import React from 'react';
import HeroBanner from './HeroBanner';
import PartnerSlider from './PartnerSlider';
import AboutSection from './AboutSection';
// Import other section components as needed

const MainSection = () => {
  return (
    <>
      <HeroBanner />
      <PartnerSlider />
      <AboutSection />
      {/* Add other sections here */}
    </>
  );
};

export default MainSection;