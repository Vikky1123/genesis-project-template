@echo off
echo ===================================================
echo BitTrader WordPress to React Asset Copier
echo ===================================================
echo.

echo Creating required directories...
mkdir src\assets\images 2>nul
mkdir src\assets\images\icons 2>nul
mkdir src\assets\css 2>nul
mkdir src\assets\js 2>nul
mkdir src\assets\fonts 2>nul
echo Directory structure created.
echo.

REM Check if WordPress directories exist
if not exist "public\wp-content" (
  echo WARNING: public\wp-content directory not found!
  echo Please make sure the WordPress files are in the public directory.
  echo Checking for alternate locations...
  
  if exist "PROJECT BITRADER\bitrader.thetork.com" (
    echo Found WordPress files in PROJECT BITRADER\bitrader.thetork.com
    
    echo Copying images...
    if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads" (
      xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\uploads" "src\assets\images\uploads"
    ) else (
      echo No uploads directory found.
    )
    
    if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\img" (
      xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\img" "src\assets\images"
    ) else (
      echo No theme images directory found.
    )
    
    echo Copying CSS files...
    if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\css" (
      xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\css\*.css" "src\assets\css"
    ) else (
      echo No theme CSS directory found.
    )
    
    echo Copying JavaScript files...
    if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\js" (
      xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\js\*.js" "src\assets\js"
    ) else (
      echo No theme JS directory found.
    )
    
    echo Copying font files...
    if exist "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\fonts" (
      xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-content\themes\bitrader\assets\fonts\*.*" "src\assets\fonts"
    ) else (
      echo No theme fonts directory found.
    )
    
    REM Copy any additional files from wp-includes if it exists
    if exist "PROJECT BITRADER\bitrader.thetork.com\wp-includes" (
      echo Copying files from wp-includes...
      if exist "PROJECT BITRADER\bitrader.thetork.com\wp-includes\images" (
        xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-includes\images\*.*" "src\assets\images\wp-includes"
      )
      if exist "PROJECT BITRADER\bitrader.thetork.com\wp-includes\css" (
        xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-includes\css\*.css" "src\assets\css\wp-includes"
      )
      if exist "PROJECT BITRADER\bitrader.thetork.com\wp-includes\js" (
        xcopy /E /I /Y "PROJECT BITRADER\bitrader.thetork.com\wp-includes\js\*.js" "src\assets\js\wp-includes"
      )
    )
  ) else (
    echo No WordPress files found in alternate locations.
    echo Please specify the correct path to WordPress files.
  )
) else (
  echo Copying images from wp-content...
  if exist "public\wp-content\uploads" (
    xcopy /E /I /Y "public\wp-content\uploads" "src\assets\images\uploads"
  ) else (
    echo No uploads directory found.
  )
  
  if exist "public\wp-content\themes\bitrader\assets\img" (
    xcopy /E /I /Y "public\wp-content\themes\bitrader\assets\img" "src\assets\images"
  ) else (
    echo No theme images directory found.
  )
  
  echo Copying CSS files from wp-content...
  if exist "public\wp-content\themes\bitrader\assets\css" (
    xcopy /E /I /Y "public\wp-content\themes\bitrader\assets\css\*.css" "src\assets\css"
  ) else (
    echo No theme CSS directory found.
  )
  
  if exist "public\wp-content\plugins\elementor\assets\css" (
    xcopy /E /I /Y "public\wp-content\plugins\elementor\assets\css\*.css" "src\assets\css\elementor"
  ) else (
    echo No Elementor CSS directory found.
  )
  
  echo Copying JavaScript files from wp-content...
  if exist "public\wp-content\themes\bitrader\assets\js" (
    xcopy /E /I /Y "public\wp-content\themes\bitrader\assets\js\*.js" "src\assets\js"
  ) else (
    echo No theme JS directory found.
  )
  
  if exist "public\wp-content\plugins\elementor\assets\js" (
    xcopy /E /I /Y "public\wp-content\plugins\elementor\assets\js\*.js" "src\assets\js\elementor"
  ) else (
    echo No Elementor JS directory found.
  )
  
  echo Copying font files from wp-content...
  if exist "public\wp-content\themes\bitrader\assets\fonts" (
    xcopy /E /I /Y "public\wp-content\themes\bitrader\assets\fonts\*.*" "src\assets\fonts"
  ) else (
    echo No theme fonts directory found.
  )
  
  echo Copying from wp-includes...
  if exist "public\wp-includes\images" (
    xcopy /E /I /Y "public\wp-includes\images\*.*" "src\assets\images\wp-includes"
  ) else (
    echo No wp-includes images directory found.
  )
  
  if exist "public\wp-includes\css" (
    xcopy /E /I /Y "public\wp-includes\css\*.css" "src\assets\css\wp-includes"
  ) else (
    echo No wp-includes CSS directory found.
  )
  
  if exist "public\wp-includes\js" (
    xcopy /E /I /Y "public\wp-includes\js\*.js" "src\assets\js\wp-includes"
  ) else (
    echo No wp-includes JS directory found.
  )
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
echo Please check that your WordPress files are in the correct location.
echo If needed, manually copy files from your WordPress project.
echo.
pause 