export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadThemeAssets = async () => {
  const assets = [
    '/assets/img/icons/sun.svg',
    '/assets/img/icons/moon.svg',
    '/wp-content/uploads/2024/06/logo-dark.png',
    '/wp-content/uploads/2024/06/logo-3.png'
  ];

  return Promise.all(assets.map(preloadImage));
};