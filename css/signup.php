<?php
$conn = mysqli_connect("localhost", "root", "", "cravecorner");

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// form data
$name = $_POST['name'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$address = $_POST['address'];
$password = $_POST['password'];

// password hash
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// insert query
$sql = "INSERT INTO users (name, dob, email, address, password) 
VALUES ('$name', '$dob', '$email', '$address', '$hashed_password')";

if (mysqli_query($conn, $sql)) {
  echo "<script>
    alert('Signup Successful!');
    window.location.href='login.html';
  </script>";
} else {
  echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>