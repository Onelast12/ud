<?php
session_start();

// Data login disimpan di file PHP
$valid_username = "admin";
$valid_password = "admin123";

// Ambil data dari form
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Validasi username dan password
if ($username === $valid_username && $password === $valid_password) {
    $_SESSION['username'] = $username; // Set sesi pengguna
    header("Location: welcome.php");   // Redirect ke halaman selamat datang
    exit;
} else {
    // Jika login gagal
    echo "<script>
            alert('Login gagal! Username atau password salah.');
            window.location.href = 'index.html';
          </script>";
}
?>
