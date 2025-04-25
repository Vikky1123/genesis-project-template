(function ($) {
    'use strict';

    // Initialize AOS after window load to ensure all resources are loaded
    $(window).on('load', function() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                mirror: false
            });
        }
    });

    // Preloader
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });

    // Password Toggle Visibility
    window.togglePasswordVisibility = function(inputId) {
        const input = document.getElementById(inputId);
        const icon = input.nextElementSibling.querySelector('i');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    };

    // Password Strength Indicator
    $('#signup-password').on('input', function() {
        const password = $(this).val();
        const strength = checkPasswordStrength(password);
        const strengthIndicator = $('#password-strength');
        
        strengthIndicator.removeClass('weak medium strong');
        if (password.length > 0) {
            strengthIndicator.addClass(strength.className);
            strengthIndicator.text(strength.message);
        } else {
            strengthIndicator.text('');
        }
    });

    function checkPasswordStrength(password) {
        const length = password.length;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        
        const conditions = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChars];
        const metConditions = conditions.filter(Boolean).length;
        
        if (length < 8) {
            return { className: 'weak', message: 'Weak - Too Short' };
        } else if (metConditions <= 2) {
            return { className: 'weak', message: 'Weak' };
        } else if (metConditions === 3) {
            return { className: 'medium', message: 'Medium' };
        } else {
            return { className: 'strong', message: 'Strong' };
        }
    }

    // Country Code Selection
    const countries = [
        { code: 'US', dialCode: '+1', flag: '🇺🇸' },
        { code: 'GB', dialCode: '+44', flag: '🇬🇧' },
        { code: 'IN', dialCode: '+91', flag: '🇮🇳' },
        // Add more countries as needed
    ];

    const countryList = $('#countryList');
    countries.forEach(country => {
        countryList.append(`
            <li class="dropdown-item" data-dial-code="${country.dialCode}" data-country="${country.code}">
                <span class="country-flag">${country.flag}</span>
                <span class="country-code">${country.dialCode}</span>
                <span class="country-name">${country.code}</span>
            </li>
        `);
    });

    // Handle country selection
    $('.country-select-menu .dropdown-item').on('click', function() {
        const flag = $(this).find('.country-flag').text();
        const code = $(this).find('.country-code').text();
        
        $('.country-select-btn .country-flag').text(flag);
        $('.country-select-btn .country-code').text(code);
    });

    // Populate country dropdown for registration
    const countrySelect = $('#country');
    countries.forEach(country => {
        countrySelect.append(`<option value="${country.code}">${country.code}</option>`);
    });

    // Sticky Header
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#sticky-header').addClass('sticky');
        } else {
            $('#sticky-header').removeClass('sticky');
        }
    });

    // Scroll to Top
    $('.scroll-to-target').on('click', function () {
        const target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
        return false;
    });

    // Theme Mode Switch
    const btnSwitch = document.querySelector('#btnSwitch');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark') {
            btnSwitch.style.backgroundColor = '#ffd700';
        } else {
            btnSwitch.style.backgroundColor = '#00d094';
        }
    }

    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
    setTheme(savedTheme);

    btnSwitch.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    // Handle form submission
    $('.auth-form').on('submit', function(e) {
        const form = $(this);
        const submitBtn = form.find('button[type="submit"]');
        
        // Disable submit button to prevent double submission
        submitBtn.prop('disabled', true);
        
        // Re-enable submit button after 2 seconds
        setTimeout(() => {
            submitBtn.prop('disabled', false);
        }, 2000);
    });

})(jQuery);