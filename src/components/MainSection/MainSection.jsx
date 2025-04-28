import React from 'react';
import HeroBanner from './HeroBanner';
import AboutSection from './AboutSection';
import PartnerSlider from './PartnerSlider';
import ElementorSection from './ElementorSection';
import FeatureTabs from './FeatureTabs';

const MainSection = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ElementorSection />
      <PartnerSlider />
      <FeatureTabs />
      {/* Add other sections as needed */}
    </>
  );
};

export default MainSection;