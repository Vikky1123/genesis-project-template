const Preloader = ({
  preloaderImgSrc = "wp-content/themes/bitrader/assets/img/logo/preloader.png"
}) => {
  return (
    <div className="preloader">
      <img src={preloaderImgSrc} alt="Preloader" />
    </div>
  );
};

export default Preloader;