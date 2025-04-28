/**
 * Bitrader Theme Mode JS
 * Handles persistent light/dark mode across pages
 */

document.addEventListener("DOMContentLoaded", function() {
    const toggleVersionButton = document.getElementById('btnSwitch');
    const htmlElement = document.documentElement;
    const icon = document.querySelector('#btnSwitch img');
    
    // Check if there's a main logo element
    const mainLogo = document.getElementById('main-logo');
    
    // Get default and dark logo URLs (handle relative paths)
    let defaultLogoUrl = '';
    let darkLogoUrl = '';
    
    if (mainLogo) {
        defaultLogoUrl = mainLogo.src;
        
        // Extract the base URL from the current logo src
        const baseUrl = defaultLogoUrl.split('/wp-content/')[0];
        darkLogoUrl = baseUrl + '/wp-content/uploads/2024/06/logo-dark-1.png';
    }
    
    // Function to apply theme
    function applyTheme(isDark) {
        // Update HTML attribute
        htmlElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
        
        // Update icon
        if (icon) {
            if (isDark) {
                const iconPath = icon.src.split('/').slice(0, -1).join('/') + '/sun.svg';
                icon.src = iconPath;
                toggleVersionButton.style.backgroundColor = 'white';
            } else {
                const iconPath = icon.src.split('/').slice(0, -1).join('/') + '/moon.svg';
                icon.src = iconPath;
                toggleVersionButton.style.backgroundColor = '#00D094';
            }
        }
        
        // Update logo if available
        if (mainLogo && defaultLogoUrl && darkLogoUrl) {
            mainLogo.src = isDark ? darkLogoUrl : defaultLogoUrl;
        }
    }
    
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('bitrader-theme-mode');
    const isDarkMode = savedTheme === 'dark';
    
    // Apply saved theme preference
    if (savedTheme) {
        applyTheme(isDarkMode);
    }
    
    // Add click event to toggle button
    if (toggleVersionButton) {
        toggleVersionButton.addEventListener('click', function() {
            // Get current theme
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            const isDark = currentTheme !== 'dark';
            
            // Save to localStorage
            localStorage.setItem('bitrader-theme-mode', isDark ? 'dark' : 'light');
            
            // Apply theme
            applyTheme(isDark);
        });
    }
});
