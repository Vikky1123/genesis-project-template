<?php
require_once 'config.php';
?>
<!doctype html>
<html lang="en-US" data-bs-theme="light">

<head>
    <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="../gmpg.org/xfn/11.html">
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
	<style>img:is([sizes="auto" i], [sizes^="auto," i]) { contain-intrinsic-size: 3000px 1500px }</style>
	
    <title>Sign In / Sign Up - Bitrader</title>
	<link rel="canonical" href="index.html" />
	<meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Sign In / Sign Up - Bitrader" />
    <meta property="og:url" content="./index.html" />
	<meta property="og:site_name" content="Bitrader" />

			<link rel="icon" href="../wp-content/uploads/2023/10/favicon-2-150x150.png" sizes="32x32" />
<link rel="icon" href="../wp-content/uploads/2023/10/favicon-2.png" sizes="192x192" />
<link rel="apple-touch-icon" href="../wp-content/uploads/2023/10/favicon-2.png" />
<meta name="msapplication-TileImage" content="../wp-content/uploads/2023/10/favicon-2.png" />

    <!-- Stylesheets -->
    <link rel='stylesheet' id='hfe-widgets-style-css' href='../wp-content/plugins/header-footer-elementor/inc/widgets-css/frontend950a.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bootstrap-css' href='../wp-content/themes/bitrader/assets/css/bootstrap.mind1c0.css' type='text/css' media='all' />
    <link rel='stylesheet' id='font-awesome-css' href='../wp-content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min1849.css' type='text/css' media='all' />
    <link rel='stylesheet' id='swiper-css' href='../wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min94a4.css' type='text/css' media='all' />
    <link rel='stylesheet' id='aos-css' href='../wp-content/themes/bitrader/assets/css/aosd1c0.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bitrader-core-css' href='../wp-content/themes/bitrader/assets/css/bitrader-cored1c0.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bitrader-style-css' href='../wp-content/themes/bitrader/styled1c0.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bitrader-custom-css' href='../wp-content/themes/bitrader/assets/css/bitrader-customd1c0.css' type='text/css' media='all' />
    <link rel='stylesheet' id='bitrader-fonts-css' href='../wp-content/themes/bitrader/assets/css/bitrader-fontsd1c0.css' type='text/css' media='all' />
    
    <!-- Scripts -->
    <script type="text/javascript" src="../wp-includes/js/jquery/jquery.minf43b.js"></script>
    <script type="text/javascript" src="../wp-includes/js/jquery/jquery-migrate.min5589.js"></script>
    <script src="../wp-content/themes/bitrader/assets/js/theme-mode.js" id="bitrader-theme-mode-js"></script>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        // Handle tab switching
        const signupTab = document.getElementById('signup-tab');
        const signinTab = document.getElementById('signin-tab');
        const signupPane = document.getElementById('signup-tab-pane');
        const signinPane = document.getElementById('signin-tab-pane');

        // Function to switch tabs
        function switchToTab(tab) {
            if (tab === 'signup') {
                signupTab.classList.add('active');
                signinTab.classList.remove('active');
                signupPane.classList.add('show', 'active');
                signinPane.classList.remove('show', 'active');
            } else {
                signinTab.classList.add('active');
                signupTab.classList.remove('active');
                signinPane.classList.add('show', 'active');
                signupPane.classList.remove('show', 'active');
            }
        }

        // Handle initial hash
        if (window.location.hash === '#signup-tab') {
            switchToTab('signup');
        }

        // Add click event listeners
        signupTab.addEventListener('click', function(e) {
            e.preventDefault();
            switchToTab('signup');
        });

        signinTab.addEventListener('click', function(e) {
            e.preventDefault();
            switchToTab('signin');
        });


        // Password visibility toggle
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
    });
    </script>
</head>

<body class="signup-signin page-template page-template-elementor_header_footer page ehf-footer ehf-template-bitrader ehf-stylesheet-bitrader elementor-default elementor-kit-7">

            <!-- preloader -->
        <div class="preloader">
            <img src="../wp-content/themes/bitrader/assets/img/logo/preloader.png" alt="Preloader">
        </div>
        <!-- preloader-end -->
    
    <!-- Light/Dark Mode Switch -->
        <div class="lightdark-switch">
        <span class="switch-btn dark-btn" id="btnSwitch" style="background-color: rgb(0, 208, 148);">
            <img src="../wp-content/themes/bitrader/assets/img/icons/moon.svg" alt="light-dark-switchbtn" class="swtich-icon">
        </span>
    </div>
    
    <!-- Scroll to Top -->
            <a href="javascript:void(0)" class="scrollToTop scrollToTop--style1 scroll__top scroll-to-target scrollToTop--home1" data-target="html">
            <i class="fas fa-angle-up"></i>
        </a>
    
    <!-- Header Section -->
    <header id="sticky-header" class="header-section header-section--style2">
    <div class="header-bottom">
        <div class="container">
            <div class="header-wrapper">
                <div class="logo">
                        <a href="../index.html">
                            <img id="main-logo" src="../wp-content/uploads/2024/06/logo-3.png" alt="Bitrader Logo">
         </a>
                         </div>
                    <div class="menu-area">
                        <ul class="menu menu--style1">
                            <li><a href="../index.html" class="nav-links">Home</a></li>
                            <li><a href="../about-us/index.html" class="nav-links">About Us</a></li>
                            <li><a href="../contact-us/index.html" class="nav-links">Contact Us</a></li>
                        </ul>
                            </div>
            </div>
        </div>
    </div>
</header>
    <!-- Header Section End -->
    
    <!-- Main Content Here -->
    <section class="auth-section padding-top padding-bottom bg-color">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="auth-wrapper" data-aos="fade-up" data-aos-duration="800">
                        <div class="section-header text-center mb-4">
                            <h2 class="section-title"><span style="color: var(--secondary-color)">Welcome</span> to Bitrader</h2>
                            <p class="mb-0">Join our platform to trade with confidence and security</p>
                        </div>
                        
                        <div class="auth-tabs-container">
                            <ul class="nav nav-tabs auth-tabs justify-content-center mb-4" id="authTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="signin-tab" data-bs-toggle="tab" data-bs-target="#signin-tab-pane" type="button" role="tab" aria-controls="signin-tab-pane" aria-selected="true" data-aos="fade-right" data-aos-duration="600">Sign In</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup-tab-pane" type="button" role="tab" aria-controls="signup-tab-pane" aria-selected="false" data-aos="fade-left" data-aos-duration="600">Sign Up</button>
                                </li>
                            </ul>
                            
                            <div class="tab-content auth-tab-content" id="authTabContent">
                                <!-- Sign In Form -->
                                <div class="tab-pane fade show active" id="signin-tab-pane" role="tabpanel" aria-labelledby="signin-tab" tabindex="0">
                                    <div class="auth-form-container" data-aos="zoom-in" data-aos-duration="800">
                                        <form class="auth-form" action="process.php" method="post">
                                            <?php if(isset($_SESSION['signin_errors'])): ?>
                                                <div class="alert alert-danger">
                                                    <?php foreach($_SESSION['signin_errors'] as $error): ?>
                                                        <p><?php echo $error; ?></p>
                                                    <?php endforeach; ?>
                                                    <?php unset($_SESSION['signin_errors']); ?>
                                                </div>
                                            <?php endif; ?>
                                            <div class="row g-4">
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="signin-username" class="form-label">Username or Email</label>
                                                        <input type="text" class="form-control" id="signin-username" name="username_email" placeholder="Enter your username or email" value="<?php echo isset($_SESSION['signin_data']['username_email']) ? htmlspecialchars($_SESSION['signin_data']['username_email']) : ''; ?>" required>
                                            </div>
                </div>

                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="signin-password" class="form-label">Password</label>
                                                        <div class="position-relative">
                                                            <input type="password" class="form-control" id="signin-password" name="password" placeholder="Enter your password" required>
                                                            <span class="password-toggle" onclick="togglePasswordVisibility('signin-password')">
                                                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                                            </span>
                            </div>
        </div>
    </div>

                                                <div class="col-12 d-flex justify-content-between align-items-center">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="remember-me" name="remember">
                                                        <label class="form-check-label" for="remember-me">Remember Me</label>
            </div>
                                                    <a href="#" class="forgot-password">Forgot Password?</a>
				</div>
                                                
                                                <div class="col-12">
                                                    <button type="submit" name="signin" class="trk-btn trk-btn--primary w-100">Sign In</button>
				</div>
                                                
                                                <div class="col-12 text-center">
                                                    <div class="auth-separator">
                                                        <span>Or Sign In With</span>
                                        </div>
                                                    <div class="social-auth-buttons">
                                                        <button type="button" class="social-auth-btn google-btn">
                                                            <i class="fa fa-google"></i> Google
                                                        </button>
                                                        <button type="button" class="social-auth-btn facebook-btn">
                                                            <i class="fa fa-facebook"></i> Facebook
                                                        </button>
                                                                            </div>
                                </div>
                            </div>
                                        </form>
                        </div>
                                        </div>
                                
                                <!-- Sign Up Form -->
                                <div class="tab-pane fade" id="signup-tab-pane" role="tabpanel" aria-labelledby="signup-tab" tabindex="0">
                                    <div class="auth-form-container" data-aos="zoom-in" data-aos-duration="800">
                                        <form class="auth-form" action="process.php" method="post">
                                            <?php if(isset($_SESSION['signup_errors'])): ?>
                                                <div class="alert alert-danger">
                                                    <?php foreach($_SESSION['signup_errors'] as $error): ?>
                                                        <p><?php echo $error; ?></p>
                                                    <?php endforeach; ?>
                                                    <?php unset($_SESSION['signup_errors']); ?>
                                                </div>
                                            <?php endif; ?>
                                            <div class="row g-4">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="signup-username" class="form-label">Username</label>
                                                        <input type="text" class="form-control" id="signup-username" name="username" placeholder="Choose a username" value="<?php echo isset($_SESSION['signup_data']['username']) ? htmlspecialchars($_SESSION['signup_data']['username']) : ''; ?>" required>
                                            </div>
                                            </div>
                                        
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="signup-fullname" class="form-label">Full Name</label>
                                                        <input type="text" class="form-control" id="signup-fullname" name="fullname" placeholder="Enter your full name" value="<?php echo isset($_SESSION['signup_data']['fullname']) ? htmlspecialchars($_SESSION['signup_data']['fullname']) : ''; ?>" required>
                    </div>
                </div>
            
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="signup-email" class="form-label">Email Address</label>
                                                        <input type="email" class="form-control" id="signup-email" name="email" placeholder="Enter your email" value="<?php echo isset($_SESSION['signup_data']['email']) ? htmlspecialchars($_SESSION['signup_data']['email']) : ''; ?>" required>
				</div>
				</div>
                                                
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="phone" class="form-label">Phone Number</label>
                                                        <div class="input-group phone-input-group">
                                                            <div class="input-group-prepend">
                                                                <div class="dropdown country-select-dropdown">
                                                                    <button class="btn dropdown-toggle country-select-btn" type="button" id="countryCodeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        <span class="country-flag">🇺🇸</span>
                                                                        <span class="country-code">+1</span>
                                                                    </button>
                                                                    <ul class="dropdown-menu country-select-menu" aria-labelledby="countryCodeDropdown" id="countryList">
                                                                        <!-- Countries will be loaded dynamically via JavaScript -->
                                                                    </ul>
                </div>
				</div>
                                                            <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter your phone number" value="<?php echo isset($_SESSION['signup_data']['phone']) ? htmlspecialchars($_SESSION['signup_data']['phone']) : ''; ?>" required>
				</div>
				</div>
					</div>
                                                
                                                <div class="col-12">
                                                    <div class="form-group">
                                                        <label for="country" class="form-label">Country of Residence</label>
                                                        <select class="form-select" id="country" name="country" required>
                                                            <option value="" selected disabled>Select your country</option>
                                                            <!-- Countries will be loaded dynamically via JavaScript -->
                                                        </select>
			</div>
			</div>
			
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="signup-password" class="form-label">Password</label>
                                                        <div class="position-relative">
                                                            <input type="password" class="form-control" id="signup-password" name="password" placeholder="Create a password" required>
                                                            <span class="password-toggle" onclick="togglePasswordVisibility('signup-password')">
                                                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                                            </span>
		</div>
                                                        <div class="password-strength" id="password-strength"></div>
						</div>
				</div>
                                                
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="confirm-password" class="form-label">Confirm Password</label>
                                                        <div class="position-relative">
                                                            <input type="password" class="form-control" id="confirm-password" name="confirm_password" placeholder="Confirm your password" required>
                                                            <span class="password-toggle" onclick="togglePasswordVisibility('confirm-password')">
                                                                <i class="fa fa-eye-slash" aria-hidden="true"></i>
                                                            </span>
			</div>
                                                    </div>
			</div>
			
                                                <div class="col-12">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" id="terms-agree" required>
                                                        <label class="form-check-label" for="terms-agree">
                                                            I agree to the <a href="../Terms and conditions/index.html" target="_blank">Terms and Conditions</a> and <a href="#" target="_blank">Privacy Policy</a>
                                                        </label>
		</div>
						</div>

                                                <div class="col-12">
                                                    <button type="submit" name="signup" class="trk-btn trk-btn--primary w-100">Create Account</button>
			</div>
			
                                                <div class="col-12 text-center">
                                                    <div class="auth-separator">
                                                        <span>Or Sign Up With</span>
			</div>
                                                    <div class="social-auth-buttons">
                                                        <button type="button" class="social-auth-btn google-btn">
                                                            <i class="fa fa-google"></i> Google
                                                        </button>
                                                        <button type="button" class="social-auth-btn facebook-btn">
                                                            <i class="fa fa-facebook"></i> Facebook
                                                        </button>
		</div>
						</div>
				</div>
                                        </form>
			</div>
			</div>
		</div>
						</div>
				</div>
                </div>
				</div>
				</div>
    </section>

    <!-- Custom Styles for Auth Section -->
    <style>
        .auth-section {
            min-height: 75vh;
            background-color: var(--section-bg);
            position: relative;
            overflow: hidden;
        }
        
        .auth-section::before {
            content: '';
            position: absolute;
            top: -10%;
            right: -10%;
            width: 50%;
            height: 50%;
            background: radial-gradient(circle, rgba(10, 79, 213, 0.15) 0%, rgba(10, 79, 213, 0) 70%);
            border-radius: 50%;
            z-index: 0;
        }
        
        .auth-section::after {
            content: '';
            position: absolute;
            bottom: -10%;
            left: -10%;
            width: 50%;
            height: 50%;
            background: radial-gradient(circle, rgba(0, 208, 148, 0.15) 0%, rgba(0, 208, 148, 0) 70%);
            border-radius: 50%;
            z-index: 0;
        }
        
        .auth-wrapper {
            position: relative;
            z-index: 1;
            padding: 3rem;
            border-radius: 1.5rem;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .auth-tabs .nav-link {
            padding: 0.75rem 2rem;
            border-radius: 50px;
            font-weight: 600;
            color: var(--text-color);
            transition: all 0.3s ease;
        }
        
        .auth-tabs .nav-link.active {
            background-color: var(--primary-color);
            color: #fff;
        }
        
        .auth-form-container {
            padding: 2rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(5px);
        }
        
        .form-group {
            margin-bottom: 1rem;
        }
        
        .form-label {
            font-weight: 500;
            margin-bottom: 0.5rem;
            color: var(--text-color);
        }
        
        .form-control, .form-select {
            padding: 0.75rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(var(--border-rgb), 0.2);
            background-color: rgba(var(--card-rgb), 0.5);
            color: var(--text-color);
            transition: all 0.3s ease;
        }
        
        .form-control:focus, .form-select:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 0.25rem rgba(var(--primary-rgb), 0.25);
        }
        
        .password-toggle {
            position: absolute;
            right: 1rem;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: var(--text-muted);
        }
        
        .forgot-password {
            color: var(--primary-color);
            font-size: 0.875rem;
            text-decoration: none;
            transition: all 0.3s ease;
        }
        
        .forgot-password:hover {
            color: var(--secondary-color);
            text-decoration: underline;
        }
        
        .auth-separator {
            position: relative;
            text-align: center;
            margin: 1.5rem 0;
        }
        
        .auth-separator::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            height: 1px;
            background-color: rgba(var(--border-rgb), 0.2);
        }
        
        .auth-separator span {
            position: relative;
            padding: 0 1rem;
            background-color: var(--card-bg);
            color: var(--text-muted);
            font-size: 0.875rem;
        }
        
        .social-auth-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
        }
        
        .social-auth-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            border: none;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s ease;
            color: #fff;
        }
        
        .google-btn {
            background-color: #DB4437;
        }
        
        .facebook-btn {
            background-color: #4267B2;
        }
        
        .social-auth-btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }
        
        .password-strength {
            height: 5px;
            margin-top: 0.5rem;
            border-radius: 5px;
            background-color: #e9ecef;
            overflow: hidden;
        }
        
        .password-strength div {
            height: 100%;
            border-radius: 5px;
            transition: width 0.3s ease;
        }
        
        .phone-input-group {
            display: flex;
        }
        
        .country-select-btn {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background-color: rgba(var(--card-rgb), 0.5);
            border: 1px solid rgba(var(--border-rgb), 0.2);
            border-right: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            padding: 0.75rem 1rem;
            color: var(--text-color);
        }
        
        .country-select-menu {
            max-height: 200px;
            overflow-y: auto;
        }
        
        .country-select-menu .dropdown-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .alert-danger {
            background-color: rgba(220, 53, 69, 0.1);
            color: #dc3545;
            border: 1px solid rgba(220, 53, 69, 0.2);
            border-radius: 0.5rem;
            padding: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .alert-danger p {
            margin-bottom: 0.5rem;
        }
        
        .alert-danger p:last-child {
            margin-bottom: 0;
        }
        
        @media (max-width: 767.98px) {
            .auth-wrapper {
                padding: 2rem 1rem;
            }
            
            .auth-form-container {
                padding: 1.5rem 1rem;
            }
            
            .social-auth-buttons {
                flex-direction: column;
            }
        }
    </style>

    <!-- Custom Scripts -->
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            try {
                // Password visibility toggle
                window.togglePasswordVisibility = function(inputId) {
                    const passwordInput = document.getElementById(inputId);
                    const icon = passwordInput.nextElementSibling.querySelector('i');
                    
                    if (passwordInput.type === 'password') {
                        passwordInput.type = 'text';
                        icon.classList.remove('fa-eye-slash');
                        icon.classList.add('fa-eye');
                    } else {
                        passwordInput.type = 'password';
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    }
                };
                
                // Password strength meter
                const passwordInput = document.getElementById('signup-password');
                const strengthMeter = document.getElementById('password-strength');
                
                if (passwordInput && strengthMeter) {
                    passwordInput.addEventListener('input', function() {
                        const password = this.value;
                        let strength = 0;
                        let color = '';
                        
                        if (password.length >= 8) strength += 1;
                        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 1;
                        if (password.match(/\d/)) strength += 1;
                        if (password.match(/[^a-zA-Z\d]/)) strength += 1;
                        
                        switch (strength) {
                            case 0:
                                color = '';
                                strengthMeter.innerHTML = '';
                                break;
                            case 1:
                                color = '#dc3545'; // Red
                                strengthMeter.innerHTML = '<div style="width: 25%; background-color: ' + color + '"></div>';
                                break;
                            case 2:
                                color = '#ffc107'; // Yellow
                                strengthMeter.innerHTML = '<div style="width: 50%; background-color: ' + color + '"></div>';
                                break;
                            case 3:
                                color = '#0dcaf0'; // Blue
                                strengthMeter.innerHTML = '<div style="width: 75%; background-color: ' + color + '"></div>';
                                break;
                            case 4:
                                color = '#00D094'; // Green
                                strengthMeter.innerHTML = '<div style="width: 100%; background-color: ' + color + '"></div>';
                                break;
                        }
                    });
                }
                
                // Load countries for dropdown
                const countryList = document.getElementById('countryList');
                const countrySelect = document.getElementById('country');
                
                if (countryList && countrySelect) {
                    // List of countries with flags and codes
                    const countries = [
                        { code: 'US', name: 'United States', flag: '🇺🇸', phoneCode: '+1' },
                        { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', phoneCode: '+44' },
                        { code: 'CA', name: 'Canada', flag: '🇨🇦', phoneCode: '+1' },
                        { code: 'AU', name: 'Australia', flag: '🇦🇺', phoneCode: '+61' },
                        { code: 'DE', name: 'Germany', flag: '🇩🇪', phoneCode: '+49' },
                        { code: 'FR', name: 'France', flag: '🇫🇷', phoneCode: '+33' },
                        { code: 'IN', name: 'India', flag: '🇮🇳', phoneCode: '+91' },
                        { code: 'CN', name: 'China', flag: '🇨🇳', phoneCode: '+86' },
                        { code: 'JP', name: 'Japan', flag: '🇯🇵', phoneCode: '+81' },
                        { code: 'BR', name: 'Brazil', flag: '🇧🇷', phoneCode: '+55' },
                        // Add more countries as needed
                    ];
                    
                    // Populate country dropdown for phone
                    countries.forEach(country => {
                        const item = document.createElement('li');
                        const link = document.createElement('a');
                        link.classList.add('dropdown-item');
                        link.innerHTML = `${country.flag} ${country.name} (${country.phoneCode})`;
                        link.href = '#';
                        link.addEventListener('click', function(e) {
                            e.preventDefault();
                            document.querySelector('.country-flag').textContent = country.flag;
                            document.querySelector('.country-code').textContent = country.phoneCode;
                        });
                        item.appendChild(link);
                        countryList.appendChild(item);
                    });
                    
                    // Populate country select dropdown
                    countries.forEach(country => {
                        const option = document.createElement('option');
                        option.value = country.name;
                        option.textContent = `${country.flag} ${country.name}`;
                        countrySelect.appendChild(option);
                    });
                }
            } catch (error) {
                console.error('Error initializing form:', error);
            }
        });
    </script>

    <!-- Footer Section -->
    <footer class="footer-section">
        <div class="container">
            <div class="copyright-area">
                <div class="copyright-area-content">
                    <p>© 2024 <a href="../index.html">Bitrader</a>. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="../wp-content/themes/bitrader/assets/js/bootstrap.bundle.min.js"></script>
    <script src="../wp-content/themes/bitrader/assets/js/jquery.magnific-popup.min.js"></script>
    <script src="../wp-content/themes/bitrader/assets/js/aos.js"></script>
    <script src="../wp-content/themes/bitrader/assets/js/main.js"></script>
</body>
</html>

