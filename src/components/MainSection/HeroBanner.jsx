
import React, { useEffect } from 'react';
import AOS from 'aos';
import './HeroBanner.css';

const HeroBanner = ({
  heading = "Driving <span>Exponential Growth</span> Through Smart Investments",
  description = "Our proven track record of success and commitment to excellence has established us as the leading platform for investors seeking consistent returns and financial growth.",
  signupLink = "Signup-Signin/index.html",
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
  useEffect(() => {
    AOS.init();
  }, []);

  const renderSocialIcon = (icon, svgType) => {
    if (icon === "svg") {
      switch (svgType) {
        case "twitter":
          return (
            <svg aria-hidden="true" className="e-font-icon-svg e-fab-twitter" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
            </svg>
          );
        case "instagram":
          return (
            <svg aria-hidden="true" className="e-font-icon-svg e-fab-instagram" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          );
        case "linkedin-in":
          return (
            <svg aria-hidden="true" className="e-font-icon-svg e-fab-linkedin-in" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          );
        case "youtube":
          return (
            <svg aria-hidden="true" className="e-font-icon-svg e-fab-youtube" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
          );
        default:
          return <i className={`fab fa-${svgType}`}></i>;
      }
    } else {
      return <i className={icon}></i>;
    }
  };

  return (
    <section className="banner banner--style1 tg-section">
      <div className="banner__bg">
        <div className="banner__bg-element">
          <img 
            decoding="async" 
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
            <div className="col-lg-6 col-md-7">
              <div 
                className="banner__content tg-content" 
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="banner__content-coin">
                  <img 
                    decoding="async" 
                    src={coinIcon}
                    alt="Coin icon" 
                  />
                </div>

                <h1 
                  className="banner__content-heading title"
                  dangerouslySetInnerHTML={{ __html: heading }}
                />

                <p className="banner__content-moto">
                  {description}
                </p>

                <div className="banner__btn-group btn-group">
                  <a 
                    href={signupLink} 
                    target="_self" 
                    rel="nofollow" 
                    className="trk-btn trk-btn--primary trk-btn--arrow"
                  >
                    {signupButtonText} <span><i className="fas fa-arrow-right"></i></span>
                  </a>

                  <a 
                    href={videoLink}
                    className="trk-btn trk-btn--outline22 btngsc" 
                    data-fslightbox
                  >
                    <span className="style1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                        fill="none">
                        <g clipPath="url(#clip0_1397_814)">
                          <path
                            d="M10.5547 7.03647C9.89015 6.59343 9 7.06982 9 7.86852V16.1315C9 16.9302 9.89015 17.4066 10.5547 16.9635L16.7519 12.8321C17.3457 12.4362 17.3457 11.5638 16.7519 11.1679L10.5547 7.03647Z"
                            stroke="#0A4FD5" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                        </g>
                        <rect x="-0.75" y="0.75" width="22.5" height="22.5" rx="11.25"
                          transform="matrix(-1 0 0 1 22.5 0)" stroke="#0A4FD5" strokeWidth="1.5" />
                        <defs>
                          <clipPath id="clip0_1397_814">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span> {watchButtonText}
                  </a>
                </div>

                <div className="banner__content-stats">
                  {stats.map((stat, index) => (
                    <div key={index} className="stat-box">
                      <h2 className="stat-value">{stat.value}</h2>
                      <p className="stat-label">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="banner__content-social">
                  <p>Follow Us</p>
                  <ul className="social">
                    {socialLinks.map((link, index) => (
                      <li key={index} className="social__item">
                        <a href={link.url} className="social__link social__link--style1">
                          {renderSocialIcon(link.icon, link.svgType)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-5">
              <div 
                className="banner__thumb" 
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img 
                  decoding="async" 
                  src={bannerImage}
                  alt="Banner illustration" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner__shape">
        <span className="banner__shape-item banner__shape-item--1">
          <img 
            decoding="async"
            src={shapeIcon} 
            width="43"
            alt="shape icon" 
          />
        </span>
      </div>
    </section>
  );
};

export default HeroBanner;