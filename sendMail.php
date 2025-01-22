<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

require 'vendor/autoload.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$firstname = $data['firstname'];
$lastname = $data['lastname'];
$email = $data['email'];
$phone = $data['phone'];
$message = $data['message'];

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['SMTP_USERNAME'];
    $mail->Password = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $_ENV['SMTP_PORT'];

    //Recipients
    $mail->setFrom('hello@freelancepixels.uk', 'Mailer');
    $mail->addAddress('griffithsimg@gmail.com', 'Recipient Name');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "Name: $firstname $lastname<br>Email: $email<br>Phone: $phone<br>Message: $message";

    $mail->send();
    echo json_encode(['message' => 'Email sent successfully']);
} catch (Exception $e) {
    echo json_encode(['message' => 'Failed to send email', 'error' => $mail->ErrorInfo]);
}
?>