<?php
require_once 'config.php';

// Function to check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

// Function to redirect if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        header("Location: ../Signup-Signin/index.php");
        exit();
    }
}

// Function to get current user data
function getCurrentUser() {
    if (!isLoggedIn()) {
        return null;
    }
    
    global $conn;
    $user_id = $_SESSION['user_id'];
    
    $stmt = $conn->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 1) {
        return $result->fetch_assoc();
    }
    
    return null;
}

// Function to check if user has remember me token
function checkRememberMe() {
    if (isLoggedIn()) {
        return;
    }
    
    if (isset($_COOKIE['remember_token'])) {
        $token = $_COOKIE['remember_token'];
        
        global $conn;
        // This is a simplified example. In a real application, you would store the token in the database
        // and check it against the stored token.
        // $stmt = $conn->prepare("SELECT * FROM users WHERE remember_token = ?");
        // $stmt->bind_param("s", $token);
        // $stmt->execute();
        // $result = $stmt->get_result();
        
        // if ($result->num_rows === 1) {
        //     $user = $result->fetch_assoc();
        //     $_SESSION['user_id'] = $user['id'];
        //     $_SESSION['username'] = $user['username'];
        //     $_SESSION['fullname'] = $user['fullname'];
        // }
    }
}

// Check remember me on every page load
checkRememberMe();
?>