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
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50,
      delay: 0
    });
    window.addEventListener('load', () => {
      AOS.refresh();
    });
    return () => {
      window.removeEventListener('load', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <FeatureStats />
      <ServicesGrid />
      <TransactionFeed />
      <PartnerSlider />
      <FAQ />
    </main>
  );
};

export default MainSection;