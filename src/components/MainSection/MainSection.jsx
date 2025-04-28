import React from 'react';
import HeroBanner from './HeroBanner';
import PartnerSlider from './PartnerSlider';
import AboutSection from './AboutSection';
// Import other section components as needed

const MainSection = () => {
  return (
    <main>
      <HeroBanner />
      <PartnerSlider />
      <AboutSection />
      {/* Add other sections here */}
    </main>
  );
};

export default MainSection;