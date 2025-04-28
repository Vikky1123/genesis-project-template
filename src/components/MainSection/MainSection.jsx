
import React from 'react';
import HeroBanner from './HeroBanner';
import AboutSection from './AboutSection';
import FeatureTabs from './FeatureTabs';
import PartnerSlider from './PartnerSlider';

const MainSection = () => {
  // Define custom props for HeroBanner
  const heroBannerProps = {
    heading: "Driving <span>Exponential Growth</span> Through Smart Investments",
    description: "Our proven track record of success and commitment to excellence has established us as the leading platform for investors seeking consistent returns and financial growth.",
    signupLink: "/Signup-Signin/index.html",
    signupButtonText: "Join Now",
    videoLink: "https://www.youtube.com/watch?v=6mkoGSqTqFI",
    watchButtonText: "Watch Success Story",
    bannerImage: "/assets/img/uploads/2023/10/banner_img-2.png",
    coinIcon: "/assets/img/uploads/2023/10/banner_coin.png",
    shapeIcon: "/assets/img/uploads/2023/10/4.png"
  };

  return (
    <>
      <HeroBanner {...heroBannerProps} />
      <AboutSection />
      <FeatureTabs />
      <PartnerSlider />
    </>
  );
};

export default MainSection;
