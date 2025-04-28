
import React from 'react';
import HeroBanner from './HeroBanner';
import AboutSection from './AboutSection';
import FeatureTabs from './FeatureTabs';
import PartnerSlider from './PartnerSlider';

const MainSection = () => {
  // You can pass custom props to HeroBanner here
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <FeatureTabs />
      <PartnerSlider />
    </>
  );
};

export default MainSection;
