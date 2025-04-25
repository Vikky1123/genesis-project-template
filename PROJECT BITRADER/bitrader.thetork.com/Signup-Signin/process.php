<?php
require_once 'config.php';

// Function to sanitize input data
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Handle sign up form submission
if (isset($_POST['signup'])) {
    $username = sanitize_input($_POST['username']);
    $fullname = sanitize_input($_POST['fullname']);
    $email = sanitize_input($_POST['email']);
    $phone = sanitize_input($_POST['phone']);
    $country = sanitize_input($_POST['country']);
    $password = sanitize_input($_POST['password']);
    $confirm_password = sanitize_input($_POST['confirm_password']);
    
    // Validate input
    $errors = [];
    
    if (empty($username)) {
        $errors[] = "Username is required";
    }
    
    if (empty($fullname)) {
        $errors[] = "Full name is required";
    }
    
    if (empty($email)) {
        $errors[] = "Email is required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }
    
    if (empty($password)) {
        $errors[] = "Password is required";
    } elseif (strlen($password) < 8) {
        $errors[] = "Password must be at least 8 characters long";
    }
    
    if ($password !== $confirm_password) {
        $errors[] = "Passwords do not match";
    }
    
    // Check if username or email already exists
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if ($user['username'] === $username) {
            $errors[] = "Username already exists";
        }
        if ($user['email'] === $email) {
            $errors[] = "Email already exists";
        }
    }
    
    // If no errors, insert user into database
    if (empty($errors)) {
        // Hash password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        // Insert user
        $stmt = $conn->prepare("INSERT INTO users (username, fullname, email, phone, country, password) VALUES (?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssss", $username, $fullname, $email, $phone, $country, $hashed_password);
        
        if ($stmt->execute()) {
            // Set session variables
            $_SESSION['user_id'] = $stmt->insert_id;
            $_SESSION['username'] = $username;
            $_SESSION['fullname'] = $fullname;
            
            // Redirect to dashboard
            header("Location: ../../coinex/dashboard/index.php");
            exit();
        } else {
            error_log("Registration failed: " . $stmt->error);
            $errors[] = "Registration failed: " . $stmt->error;
        }
    }
    
    // If there are errors, store them in session and redirect back to signup form
    if (!empty($errors)) {
        error_log("Errors: " . implode(", ", $errors));
        $_SESSION['signup_errors'] = $errors;
        $_SESSION['signup_data'] = [
            'username' => $username,
            'fullname' => $fullname,
            'email' => $email,
            'phone' => $phone,
            'country' => $country
        ];
        header("Location: index.php#signup-tab");
        exit();
    }
}

// Handle sign in form submission
if (isset($_POST['signin'])) {
    $username_email = sanitize_input($_POST['username_email']);
    $password = sanitize_input($_POST['password']);
    $remember = isset($_POST['remember']) ? true : false;
    
    // Validate input
    $errors = [];
    
    if (empty($username_email)) {
        $errors[] = "Username or email is required";
    }
    
    if (empty($password)) {
        $errors[] = "Password is required";
    }
    
    // If no validation errors, check credentials
    if (empty($errors)) {
        // Check if input is email or username
        $field = filter_var($username_email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        
        // Prepare statement
        $stmt = $conn->prepare("SELECT * FROM users WHERE $field = ?");
        $stmt->bind_param("s", $username_email);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows === 1) {
            $user = $result->fetch_assoc();
            
            // Verify password
            if (password_verify($password, $user['password'])) {
                // Set session variables
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['username'] = $user['username'];
                $_SESSION['fullname'] = $user['fullname'];
                
                // If remember me is checked, set cookies
                if ($remember) {
                    $token = bin2hex(random_bytes(32));
                    setcookie('remember_token', $token, time() + (86400 * 30), "/"); // 30 days
                    
                    // Store token in database (you would need to add a remember_token column to users table)
                    // This is a simplified example
                    // $stmt = $conn->prepare("UPDATE users SET remember_token = ? WHERE id = ?");
                    // $stmt->bind_param("si", $token, $user['id']);
                    // $stmt->execute();
                }
                
                // Redirect to dashboard
                header("Location: ../../coinex/dashboard/index.php");
                exit();
            } else {
                $errors[] = "Invalid password";
            }
        } else {
            $errors[] = "User not found";
        }
    }
    
    // If there are errors, store them in session and redirect back to signin form
    if (!empty($errors)) {
        $_SESSION['signin_errors'] = $errors;
        $_SESSION['signin_data'] = [
            'username_email' => $username_email
        ];
        header("Location: index.php");
        exit();
    }
}

// Handle logout
if (isset($_GET['logout'])) {
    // Unset all session variables
    $_SESSION = [];
    
    // Delete the session cookie
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"
        ]);
    }
    
    // Destroy the session
    session_destroy();
    
    // Clear remember me cookie
    setcookie('remember_token', '', time() - 3600, "/");
    
    // Redirect to login page
    header("Location: index.php");
    exit();
}
?>