<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'williamharries92@gmail.com';
  $subject = 'New form submission';
  $body = "Name: $name\n\nEmail: $email\n\nMessage: $message";

  if (mail($to, $subject, $body)) {
    echo 'Thank you for your submission.';
  } else {
    echo 'There was a problem sending your message. Please try again.';
  }
}
?>