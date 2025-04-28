import React, { useEffect } from 'react';
import AOS from 'aos';
import HeroBanner from './HeroBanner';
import AboutSection from './AboutSection';
import PartnerSlider from './PartnerSlider';
import ElementorSection from './ElementorSection';
import FeatureTabs from './FeatureTabs';

// Import CSS files specific to these components
import '../../assets/css/bitrader-cored1c0.css';
import '../../assets/css/bitrader-customd1c0.css';
import '../../assets/css/aosd1c0.css';
import '../../assets/css/elementor/frontend.min87cc.css';

const MainSection = () => {
  useEffect(() => {
    // Initialize AOS when component mounts
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <main className="main-area fix">
      <HeroBanner />
      <AboutSection />
      <ElementorSection />
      <PartnerSlider />
      <FeatureTabs />
      {/* Add other sections as needed */}
    </main>
  );
};

export default MainSection;