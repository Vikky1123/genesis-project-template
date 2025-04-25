<?php
require_once '../../bitrader.thetork.com/Signup-Signin/auth_check.php';

// Require login for this page
requireLogin();

// Get user data from session
$user_id = $_SESSION['user_id'];
$username = $_SESSION['username'];
$fullname = $_SESSION['fullname'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Bitrader</title>
    <!-- Add your dashboard CSS and JS files here -->
</head>
<body>
    <div class="dashboard-container">
        <header class="dashboard-header">
            <h1>Welcome, <?php echo htmlspecialchars($fullname); ?>!</h1>
            <nav class="dashboard-nav">
                <a href="#">Home</a>
                <a href="#">Profile</a>
                <a href="#">Trading</a>
                <a href="../../bitrader.thetork.com/Signup-Signin/process.php?logout=1">Logout</a>
            </nav>
        </header>

        <main class="dashboard-main">
            <section class="dashboard-overview">
                <h2>Dashboard Overview</h2>
                <div class="overview-cards">
                    <div class="card">
                        <h3>Account Balance</h3>
                        <p>$0.00</p>
                    </div>
                    <div class="card">
                        <h3>Active Trades</h3>
                        <p>0</p>
                    </div>
                    <div class="card">
                        <h3>Total Profit</h3>
                        <p>$0.00</p>
                    </div>
                </div>
            </section>

            <section class="trading-section">
                <h2>Quick Trade</h2>
                <p>Start trading by selecting a trading pair and entering your trade details.</p>
                <!-- Add trading interface here -->
            </section>
        </main>

        <footer class="dashboard-footer">
            <p>&copy; 2024 Bitrader. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>