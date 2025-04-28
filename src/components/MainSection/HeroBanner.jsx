
import React, { useEffect } from 'react';
import AOS from 'aos';
import './HeroBanner.css';

const HeroBanner = ({ 
  heading = "Driving <span>Exponential Growth</span> Through Smart Investments",
  description = "Our proven track record of success and commitment to excellence has established us as the leading platform for investors seeking consistent returns and financial growth.",
  signupLink = "/Signup-Signin/index.html",
  signupButtonText = "Join Now",
  videoLink = "https://www.youtube.com/watch?v=6mkoGSqTqFI",
  watchButtonText = "Watch Success Story",
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
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-instagram", url: "#" },
    { icon: "fab fa-linkedin-in", url: "#" },
    { icon: "fab fa-youtube", url: "#" }
  ]
}) => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section className="banner banner--style1 tg-section">
      <div className="banner__bg">
        <div className="banner__bg-element">
          <img
            src={bannerImage.replace('banner_img-2.png', 'banner_bg.png')}
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
                  <a href={signupLink} className="trk-btn trk-btn--primary trk-btn--arrow">
                    {signupButtonText} <span><i className="fas fa-arrow-right"></i></span>
                  </a>
                  
                  <a href={videoLink} className="trk-btn trk-btn--outline22 btngsc">
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
                        <a href={link.url} className="social_link social_link--style1">
                          <i className={link.icon}></i>
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
                  src={bannerImage}
                  alt="Banner illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner__shape">
        <span className="banner_shape-item banner_shape-item--1">
          <img
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
