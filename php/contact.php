<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "darrelprawira26@gmail.com";
  $subject = "New Contact Form Submission";
  $headers = "From: $email";
  $message = "Name: $name\n\nMessage:\n$message";

  if (mail($to, $subject, $message, $headers)) {
    echo "Pesan anda berhasil dikirim!";
  } else {
    echo "Pesan anda gagal dikirim, coba lagi nanti.";
  }
}
?>