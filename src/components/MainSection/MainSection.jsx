
import React from 'react';
import HeroBanner from './HeroBanner';
import AboutSection from './AboutSection';
// Import other section components as needed

const MainSection = () => {
  return (
    <main>
      <HeroBanner />
      <div className="partner-logos">
        <img src="/assets/img/uploads/2023/10/barnd01-2.png" alt="Dropbox" />
        <img src="/assets/img/uploads/2023/10/barnd02-2.png" alt="Webflow" />
        <img src="/assets/img/uploads/2023/10/barnd03-2.png" alt="Zoom" />
        <img src="/assets/img/uploads/2023/10/barnd04-2.png" alt="Coinbase" />
        <img src="/assets/img/uploads/2023/10/barnd05-2.png" alt="Spotify" />
        <img src="/assets/img/uploads/2023/10/barnd06-2.png" alt="Slack" />
      </div>
      <AboutSection />
      {/* Add other sections here */}
    </main>
  );
};

export default MainSection;
