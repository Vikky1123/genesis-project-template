import React, { useEffect } from 'react';
import AOS from 'aos';
import './HeroBanner.css';

const HeroBanner = ({
  heading = "Driving <span>Exponential Growth</span> Through Smart Investments",
  description = "Our proven track record of success and commitment to excellence has established us as the leading platform for investors seeking consistent returns and financial growth.",
  signupLink = "#",
  signupButtonText = "Join Now",
  videoLink = "https://www.youtube.com/watch?v=6mkoGSqTqFI",
  watchButtonText = "Watch Success Story",
  bannerBgImage = "/assets/img/uploads/2023/10/banner_bg.png",
  bannerImage = "/assets/img/uploads/2023/10/banner_img-2.png",
  coinIcon = "/assets/img/uploads/2023/10/banner_coin.png",
  shapeIcon = "/assets/img/uploads/2023/10/4.png",
  stats = [
    { value: "12+", label: "Years Experience" },
    { value: "45K+", label: "Active Members" },
    { value: "$840M+", label: "Total Invested" },
    { value: "$1.2B+", label: "Paid Out" }
  ],
  socialLinks = [
    { icon: "fab fa-facebook-f", url: "#" },
    { icon: "svg", svgType: "twitter", url: "#" },
    { icon: "svg", svgType: "instagram", url: "#" },
    { icon: "svg", svgType: "linkedin-in", url: "#" },
    { icon: "svg", svgType: "youtube", url: "#" }
  ]
}) => {

  // Helper function for SVG icons
  const renderSocialIcon = (link) => {
    if (link.icon === "svg") {
      switch (link.svgType) {
        case "twitter": 
          return (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
          );
        case "instagram":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          );
        case "linkedin-in":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
            </svg>
          );
        case "youtube":
          return (
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
            </svg>
          );
        default:
          return <i className={`fab fa-${link.svgType}`}></i>;
      }
    } else {
      return <i className={link.icon}></i>;
    }
  };

  return (
    <section className="banner banner--style1 tg-section">
      <div className="banner__bg">
        <div className="banner__bg-element">
          <img 
            src={bannerBgImage} 
            alt="section-bg-element" 
            className="dark d-none d-lg-block" 
          />
          <span className="bg-color d-lg-none"></span>
        </div>
      </div>

      <div className="container">
        <div className="banner__wrapper">
          <div className="row gy-5 gx-4">
            <div className="col-lg-7 col-md-10">
              <div className="banner__content" data-aos="fade-right" data-aos-duration="var(--animation-duration)">
                <h1 className="banner__title" dangerouslySetInnerHTML={{ __html: heading }}></h1>
                <p className="banner__text">{description}</p>

                <div className="banner__btn-group">
                  <a href={signupLink} className="tg-btn">
                    <span className="text">{signupButtonText}</span>
                    <span className="shape"></span>
                  </a>

                  <a href={videoLink} className="video-btn" aria-label="Watch Video">
                    <i className="fas fa-play"></i>
                    <span>{watchButtonText}</span>
                  </a>
                </div>

                <div className="banner__client">
                  <div className="banner__client-info">
                    {stats.map((stat, index) => (
                      <div key={index} className="banner__client-item">
                        <h4 className="banner__client-number">{stat.value}</h4>
                        <p>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="banner__images">
                <div className="banner__images-inner">
                  <div className="banner__image" data-aos="fade-left" data-aos-duration="var(--animation-duration)">
                    <img src={bannerImage} alt="banner" />
                  </div>

                  <div className="banner__shape">
                    <img src={coinIcon} alt="coin" className="banner__shape-coin" />
                    <img src={shapeIcon} alt="shape" className="banner__shape-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="social-links">
          <div className="social-links__list">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                className="social-links__item"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.svgType || link.icon.replace("fab fa-", "")}
              >
                {renderSocialIcon(link)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;