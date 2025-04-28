
import React from 'react';
import HeroBanner from './HeroBanner';
import AboutSection from './AboutSection';
import FeatureTabs from './FeatureTabs';
import PartnerSlider from './PartnerSlider';

const MainSection = () => {
  return (
    <div className="main-content">
      <HeroBanner />
      <AboutSection />
      <FeatureTabs />
      <PartnerSlider />
    </div>
  );
};

export default MainSection;
