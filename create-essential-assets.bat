@echo off
echo ===================================================
echo BitTrader Essential Assets Creator
echo ===================================================
echo.

echo Creating required directories...
mkdir src\assets\images 2>nul
mkdir src\assets\images\icons 2>nul
mkdir src\assets\css 2>nul
mkdir src\assets\js 2>nul
echo Directory structure created.
echo.

echo Creating essential files...

echo Creating moon.svg icon...
echo ^<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"^> > src\assets\images\icons\moon.svg
echo   ^<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2256 21.8913C11.9016 21.9638 11.5689 22 11.2306 22C6.41249 22 2.5 18.0875 2.5 13.2694C2.5 8.45126 6.41249 4.53876 11.2306 4.53876C11.5689 4.53876 11.9016 4.575 12.2256 4.6475C9.97062 6.69 8.5 9.74876 8.5 13.2694C8.5 16.7913 9.97062 19.85 12.2256 21.8913ZM17.1694 2C20.0944 4.51876 22 8.38626 22 12.5C22 12.5862 22.0006 12.6731 22 12.7606C21.9875 12.7606 17.1694 12.7606 17.1694 12.7606C16.3462 12.7606 15.6788 12.0931 15.6788 11.27C15.6788 10.4469 16.3462 9.77938 17.1694 9.77938C17.1694 9.77938 22 9.77938 22 9.77938C21.4594 5.95126 19.28 2.90626 17.1694 2Z" fill="white"/^> >> src\assets\images\icons\moon.svg
echo ^</svg^> >> src\assets\images\icons\moon.svg
echo Created moon.svg

echo Creating basic CSS file...
echo /* Base CSS for BitTrader */ > src\assets\css\bitrader-core.css
echo :root { >> src\assets\css\bitrader-core.css
echo   --brand-color: #00D094; >> src\assets\css\bitrader-core.css
echo   --secondary-color: #0A4FD5; >> src\assets\css\bitrader-core.css
echo } >> src\assets\css\bitrader-core.css
echo. >> src\assets\css\bitrader-core.css
echo /* Header styles */ >> src\assets\css\bitrader-core.css
echo .header-section { >> src\assets\css\bitrader-core.css
echo   position: relative; >> src\assets\css\bitrader-core.css
echo   z-index: 999; >> src\assets\css\bitrader-core.css
echo   background-color: #fff; >> src\assets\css\bitrader-core.css
echo } >> src\assets\css\bitrader-core.css
echo. >> src\assets\css\bitrader-core.css
echo .dark-mode .header-section { >> src\assets\css\bitrader-core.css
echo   background-color: #121212; >> src\assets\css\bitrader-core.css
echo   color: #fff; >> src\assets\css\bitrader-core.css
echo } >> src\assets\css\bitrader-core.css
echo Created basic CSS file

echo Creating theme-mode.js...
echo // Theme mode toggling functionality > src\assets\js\theme-mode.js
echo document.addEventListener('DOMContentLoaded', function() { >> src\assets\js\theme-mode.js
echo   // Check for saved theme preference or respect OS preference >> src\assets\js\theme-mode.js
echo   const savedTheme = localStorage.getItem('theme-mode'); >> src\assets\js\theme-mode.js
echo   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; >> src\assets\js\theme-mode.js
echo. >> src\assets\js\theme-mode.js
echo   // Set initial theme >> src\assets\js\theme-mode.js
echo   if (savedTheme === 'dark' ^|^| (!savedTheme ^&^& prefersDark)) { >> src\assets\js\theme-mode.js
echo     document.body.classList.add('dark-mode'); >> src\assets\js\theme-mode.js
echo   } >> src\assets\js\theme-mode.js
echo }); >> src\assets\js\theme-mode.js
echo Created theme-mode.js

echo Creating logo-dark.png placeholder...
echo Creating basic placeholder logos - you'll need to replace these with actual logos.

echo Creating placeholder for logo-light.png...
mkdir src\assets\images\placeholder 2>nul

echo ===================================================
echo Essential asset creation complete!
echo ===================================================
echo.
echo Basic essential assets have been created. 
echo You should replace the placeholder logos with actual images.
echo.
echo For logos, create:
echo - src\assets\images\logo-dark.png  (for light mode)
echo - src\assets\images\logo-light.png (for dark mode)
echo.
pause 