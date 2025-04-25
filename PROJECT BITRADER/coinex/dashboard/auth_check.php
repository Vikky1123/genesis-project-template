<?php
// Include the authentication file from the signup-signin directory
require_once '../../bitrader.thetork.com/Signup-Signin/auth.php';

// Check if user is logged in, redirect to login page if not
if (!isLoggedIn()) {
    header("Location: ../../bitrader.thetork.com/Signup-Signin/index.php");
    exit();
}

// Get current user data
$current_user = getCurrentUser();

// If user data couldn't be retrieved, log out and redirect
if (!$current_user) {
    // Unset all session variables
    $_SESSION = [];
    
    // Delete the session cookie
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    
    // Destroy the session
    session_destroy();
    
    header("Location: ../../bitrader.thetork.com/Signup-Signin/index.php");
    exit();
}
?>