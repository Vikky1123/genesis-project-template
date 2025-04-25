import React from 'react';
import HeroBanner from './HeroBanner';
import BrandSlider from './BrandSlider';
import AboutSection from './AboutSection';
import FeatureTabs from './FeatureTabs';
import ServicesGrid from './ServicesGrid';
import TransactionFeed from './TransactionFeed';
import FAQ from './FAQ';
import Newsletter from './Newsletter';

const MainSection = () => {
  return (
    <main className="main-area fix">
      <HeroBanner />
      <BrandSlider />
      <AboutSection />
      <FeatureTabs />
      <ServicesGrid />
      <TransactionFeed />
      <FAQ />
      <Newsletter />
    </main>
  );
};

export default MainSection;
