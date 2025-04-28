@echo off
echo ===================================================
echo BitTrader WordPress to React Asset Copier
echo ===================================================
echo.

echo Creating required directories...
mkdir src\assets\images 2>nul
mkdir src\assets\images\icons 2>nul
mkdir src\assets\images\uploads\2023\10 2>nul
mkdir src\assets\images\uploads\2024\06 2>nul
mkdir src\assets\css 2>nul
mkdir src\assets\css\elementor 2>nul
mkdir src\assets\js 2>nul
mkdir src\assets\fonts 2>nul
echo Directory structure created.
echo.

REM Copy specific WordPress directories from PROJECT BITRADER paths
echo Copying images from wp-content...
if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads\2023\10" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads\2023\10\*.*" "src\assets\images\uploads\2023\10"
) else (
  echo No uploads 2023/10 directory found.
)

if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads\2024\06" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads\2024\06\*.*" "src\assets\images\uploads\2024\06"
) else (
  echo No uploads 2024/06 directory found.
)

if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\img" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\img\*.*" "src\assets\images"
) else (
  echo No theme images directory found.
)

echo Copying CSS files from wp-content...
if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\css" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\css\*.*" "src\assets\css"
) else (
  echo No theme CSS directory found.
)

if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\plugins\elementor\assets\css" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\plugins\elementor\assets\css\*.*" "src\assets\css\elementor"
) else (
  echo No Elementor CSS directory found.
)

echo Copying JavaScript files from wp-content...
if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\js" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\js\*.*" "src\assets\js"
) else (
  echo No theme JS directory found.
)

echo Copying from wp-includes...
if exist "PROJECT BITRADER\bitrader.thetork.com\wp-includes\css" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-includes\css\*.*" "src\assets\css\wp-includes"
) else (
  echo No wp-includes CSS directory found.
)

if exist "PROJECT BITRADER\bitrader.thetork.com\wp-includes\js" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-includes\js\*.*" "src\assets\js\wp-includes"
) else (
  echo No wp-includes JS directory found.
)

REM Also copy to public directory for direct access
echo Copying image assets to public directory...
mkdir public\assets\img\uploads\2023\10 2>nul
mkdir public\assets\img\uploads\2024\06 2>nul

if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads\2023\10" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads\2023\10\*.*" "public\assets\img\uploads\2023\10"
) else (
  echo No uploads 2023/10 directory found for public copy.
)

if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads\2024\06" (
  xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads\2024\06\*.*" "public\assets\img\uploads\2024\06"
) else (
  echo No uploads 2024/06 directory found for public copy.
)

echo.
echo ===================================================
echo Asset copying complete!
echo ===================================================
echo.
echo If you see any "0 File(s) copied" messages, it means:
echo 1. The source directories do not exist, or
echo 2. The source directories are empty
echo.
echo All needed assets from PROJECT BITRADER should now be in your src and public folders.
echo.
pause