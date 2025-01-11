<?php
session_start();
session_destroy(); // Hapus semua sesi
header("Location: index.html"); // Redirect ke halaman login
exit;
?>
