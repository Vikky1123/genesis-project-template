
import React from 'react';
import HeroBanner from './HeroBanner';
import AboutSection from './AboutSection';
import PartnerSlider from './PartnerSlider';
import FeatureTabs from './FeatureTabs';

const MainSection = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <PartnerSlider />
      <FeatureTabs />
      {/* Add other sections as needed */}
    </>
  );
};

export default MainSection;
