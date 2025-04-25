<?php
require_once 'config.php';

// Function to check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

// Function to redirect if not logged in
function requireLogin() {
    if (!isLoggedIn()) {
        header('Location: index.php');
        exit();
    }
}

// Function to redirect if already logged in
function redirectIfLoggedIn() {
    if (isLoggedIn()) {
        header('Location: ../../coinex/dashboard/index.php');
        exit();
    }
}
?>