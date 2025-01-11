<?php
session_start();
if (!isset($_SESSION['username'])) {
    header("Location: index.html"); // Redirect ke halaman login jika belum login
    exit;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selamat Datang</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Selamat Datang, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
    </header>
    <main>
        <p>Anda berhasil login ke sistem Program Info.</p>
        <a href="logout.php">Logout</a>
    </main>
</body>
</html>
