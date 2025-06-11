<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email   = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = "mennaelhosiny3@gmail.com";
    $body = "From: $email\n\nMessage:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "تم إرسال الرسالة بنجاح.";
    } else {
        echo "حدث خطأ أثناء الإرسال.";
    }
} else {
    echo "طلب غير صحيح.";
}
?>
