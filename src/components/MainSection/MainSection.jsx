import React, { useEffect } from 'react';
import HeroBanner from './HeroBanner';
import PartnerSlider from './PartnerSlider';
import AboutSection from './AboutSection';
import FeatureStats from './FeatureStats';
import ServicesGrid from './ServicesGrid';
import TransactionFeed from './TransactionFeed';
import FAQ from './FAQ';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MainSection = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <>
      <HeroBanner />
      <PartnerSlider />
      <AboutSection />
      <FeatureStats />
      <ServicesGrid />
      <TransactionFeed />
      <FAQ />
    </>
  );
};

export default MainSection;