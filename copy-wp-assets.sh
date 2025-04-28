
#!/bin/bash
echo "==================================================="
echo "BitTrader WordPress to React Asset Copier"
echo "==================================================="
echo

echo "Creating required directories..."
mkdir -p src/assets/images/icons
mkdir -p src/assets/images/uploads/2023/10
mkdir -p src/assets/images/uploads/2024/06
mkdir -p src/assets/css/elementor
mkdir -p src/assets/js
mkdir -p src/assets/fonts
echo "Directory structure created."
echo

# Copy specific WordPress directories
echo "Copying images from wp-content..."
if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads/2023/10" ]; then
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads/2023/10/"* "src/assets/images/uploads/2023/10/"
else
  echo "No uploads 2023/10 directory found."
fi

if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads/2024/06" ]; then
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads/2024/06/"* "src/assets/images/uploads/2024/06/"
else
  echo "No uploads 2024/06 directory found."
fi

if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-content/themes/bitrader/assets/img" ]; then
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-content/themes/bitrader/assets/img/"* "src/assets/images/"
else
  echo "No theme images directory found."
fi

echo "Copying CSS files from wp-content..."
if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-content/themes/bitrader/assets/css" ]; then
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-content/themes/bitrader/assets/css/"* "src/assets/css/"
else
  echo "No theme CSS directory found."
fi

if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-content/plugins/elementor/assets/css" ]; then
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-content/plugins/elementor/assets/css/"* "src/assets/css/elementor/"
else
  echo "No Elementor CSS directory found."
fi

echo "Copying JavaScript files from wp-content..."
if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-content/themes/bitrader/assets/js" ]; then
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-content/themes/bitrader/assets/js/"* "src/assets/js/"
else
  echo "No theme JS directory found."
fi

echo "Copying from wp-includes..."
if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-includes/css" ]; then
  mkdir -p "src/assets/css/wp-includes"
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-includes/css/"* "src/assets/css/wp-includes/"
else
  echo "No wp-includes CSS directory found."
fi

if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-includes/js" ]; then
  mkdir -p "src/assets/js/wp-includes"
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-includes/js/"* "src/assets/js/wp-includes/"
else
  echo "No wp-includes JS directory found."
fi

# Also copy to public directory for direct access
echo "Copying image assets to public directory..."
mkdir -p public/assets/img/uploads/2023/10
mkdir -p public/assets/img/uploads/2024/06

if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads/2023/10" ]; then
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads/2023/10/"* "public/assets/img/uploads/2023/10/"
else
  echo "No uploads 2023/10 directory found for public copy."
fi

if [ -d "PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads/2024/06" ]; then
  cp -r "PROJECT BITRADER/bitrader.thetork.com/wp-content/uploads/2024/06/"* "public/assets/img/uploads/2024/06/"
else
  echo "No uploads 2024/06 directory found for public copy."
fi

echo
echo "==================================================="
echo "Asset copying complete!"
echo "==================================================="
echo
echo "If you see any error messages, it means:"
echo "1. The source directories do not exist, or"
echo "2. The source directories are empty"
echo
echo "All needed assets from PROJECT BITRADER should now be in your src and public folders."
echo
