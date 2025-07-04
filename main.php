<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);
    $name = htmlspecialchars($_POST['subject']);

    $to = "mennaelhosiny3@gmail.com";
    $subject = "رسالة جديدة من تكتروم";
    $body = "From: $email\n\nMessage:\n$message";
    $body = "الموضوع: $name\n";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $success = mail($to, $subject, $body, $headers);
    
    if ($success) {
        $response = "تم إرسال الرسالة بنجاح.";
    } else {
        $response = "حدث خطأ أثناء الإرسال.";
    }
    
    header('Content-Type: application/json');
    echo json_encode(['message' => $response]);
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Techtrum Consult</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Yantramanav:wght@400;500;700&display=swap"
        rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
    
    <!-- SweetAlert2 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.css">
    
    <style>
        /* إضافة بعض الأنماط للنافذة المنبثقة */
        .swal2-popup {
            font-family: 'Cairo', sans-serif;
        }
    </style>
</head>

<body>

    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->

    <!-- Navbar & Hero Start -->
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5  py-lg-0">
            <a href="index.html" class="navbar-brand p-0 py-3">
                <img src="img/Capture.PNG" alt="Logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href="index.html" class="nav-item nav-link active" data-i18n="home">Home</a>
                    <a href="about.html" class="nav-item nav-link" data-i18n="about">About</a>
                    <!-- <a href="event.html" class="nav-item nav-link" data-i18n="events">Events</a> -->
                    <div class="nav-item dropdown position-static">
                        <a class="nav-link dropdown-toggle" href="gallery.html" data-bs-toggle="dropdown" data-i18n="blogs">Services</a>
                        <div class="dropdown-menu w-100 mt-0 rounded-0 border-top-0 shadow service-dropdown p-0">
                            <div class="row g-0">
                                <!-- القائمة الجانبية -->
                                <div class="col-md-3 bg-light p-3 border-end">
                                    <ul class="nav flex-column service-tabs">
                                        <li class="nav-item mb-2">
                                            <a class="nav-link " href="gallery.html" data-i18n="blogs">
                                                Artificial Intelligence & ML 
                                            </a>
                                        </li>
                                        <li class="nav-item mb-2">
                                            <a class="nav-link " href="ser1.html" data-target="#service1" data-i18n="titleser1">
                                                Artificial Intelligence & ML 
                                            </a>
                                        </li>
                                        <li class="nav-item mb-2">
                                            <a class="nav-link" href="ser2.html" data-target="#service2" data-i18n="titleser2">
                                                Generative AI & GPT  
                                            </a>
                                        </li>
                                        <li class="nav-item mb-2">
                                            <a class="nav-link" href="ser3.html" data-target="#service3" data-i18n="titleser3">
                                                Big Data & Cloud 
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <!-- المحتوى -->
                                <div class="col-md-9 p-4">
                                    <div class="tab-content">
                                        <!-- Service 1 -->
                                        <div class="tab-pane fade show " id="service1">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul class="list-unstyled fs-6 fw-medium">
                                                        <li>
                                                            <a href="ser1.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-brain text-primary"></i>
                                                                <span data-i18n="contactser1">AI Consulting</span>
                                                            </a>
                                                        </li>
                                                        <li class="mt-2">
                                                            <a href="ser1.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-robot text-primary"></i>
                                                                <span data-i18n="contactser2">AI Product Development</span>
                                                            </a>
                                                        </li>
                                                        <li class="mt-2">
                                                            <a href="ser1.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-robot text-primary"></i>
                                                                <span data-i18n="contactser3">AI Product Development</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <img src="img/portfolio-1.jpg" class="img-fluid rounded shadow" alt="Service Preview">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Service 2 -->
                                        <div class="tab-pane fade" id="service2">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul class="list-unstyled fs-6 fw-medium">
                                                        <li>
                                                            <a href="ser2.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-comments text-primary"></i>
                                                                <span data-i18n="contactser11">Chatbot Integration</span>
                                                            </a>
                                                        </li>
                                                        <li class="mt-2">
                                                            <a href="ser2.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-magic text-primary"></i>
                                                                <span data-i18n="contactser22">GPT Model Tuning</span>
                                                            </a>
                                                        </li>
                                                        <li class="mt-2">
                                                            <a href="ser2.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-magic text-primary"></i>
                                                                <span data-i18n="contactser33">GPT Model Tuning</span>
                                                            </a>
                                                        </li>
                                                        <li class="mt-2">
                                                            <a href="ser2.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-magic text-primary"></i>
                                                                <span data-i18n="contactser44">GPT Model Tuning</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <img src="img/portfolio-2.jpg" class="img-fluid rounded shadow" alt="Service Preview">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Service 3 -->
                                        <div class="tab-pane fade" id="service3">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <ul class="list-unstyled fs-6 fw-medium">
                                                        <li>
                                                            <a href="ser3.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-database text-primary"></i>
                                                                <span data-i18n="contactser111">Data Lakes</span>
                                                            </a>
                                                        </li>
                                                        <li class="mt-2">
                                                            <a href="ser3.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-cloud-upload-alt text-primary"></i>
                                                                <span data-i18n="contactser333">Cloud Migration</span>
                                                            </a>
                                                        </li>
                                                        <li class="mt-2">
                                                            <a href="ser3.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-cloud-upload-alt text-primary"></i>
                                                                <span data-i18n="contactser222">Cloud Migration</span>
                                                            </a>
                                                        </li>
                                                        <li class="mt-2">
                                                            <a href="ser3.html" class="d-flex align-items-center gap-2">
                                                                <i class="fa fa-cloud-upload-alt text-primary"></i>
                                                                <span data-i18n="contactser444">Cloud Migration</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col-md-6">
                                                    <img src="img/portfolio-3.jpg" class="img-fluid rounded shadow" alt="Service Preview">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="contact.html" class="nav-item nav-link" data-i18n="contact">Contact Us</a>
                </div>

                <div class="dropdown" style="position: relative; display: inline-block;">
                    <button id="languageToggle" class="btn btn-primary"
                        style="padding: 8px 16px; border: none; background-color: #0b769d; color: white; border-radius: 30px;">
                        عربي
                    </button>

                    <div class="dropdown-menu"
                        style="display: none; position: absolute; top: 100%; left: 0; background-color: white; border: 1px solid #ccc; min-width: 100px; z-index: 1000;">
                        <a class="dropdown-item" href="#" data-lang="en"
                            style="display: block; padding: 8px 12px; text-decoration: none; color: black;">English</a>
                        <a class="dropdown-item" href="#" data-lang="ar"
                            style="display: block; padding: 8px 12px; text-decoration: none; color: black;">العربية</a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const tabLinks = document.querySelectorAll(".service-tabs .nav-link");
            const tabPanes = document.querySelectorAll(".tab-pane");

            tabLinks.forEach(link => {
                link.addEventListener("mouseenter", function (e) {
                    const targetId = link.getAttribute("data-target");

                    // إزالة active من جميع العناصر
                    tabLinks.forEach(l => l.classList.remove("active"));
                    tabPanes.forEach(pane => {
                        pane.classList.remove("show", "active");
                    });

                    // تفعيل العنصر المستهدف
                    link.classList.add("active");
                    const targetPane = document.querySelector(targetId);
                    if (targetPane) {
                        targetPane.classList.add("show", "active");
                    }
                });
            });
        });
    </script>
    <!-- Navbar & Hero End -->

    <!-- Header Start -->
    <div class="container-fluid bg-breadcrumb">
        <div class="container text-center py-5">
            <h3 class="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s" data-i18n="contactus">Contact Us </h3>
        </div>
    </div>
    <!-- Header End -->

    <!-- Contact Start -->
    <div class="container-fluid contact py-5">
        <div class="container py-5">
            <div class="bg-light rounded p-4 pb-0">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <h2 class="display-5 mb-4" data-i18n="contactus">Form</h2>

                        <!-- نموذج الاتصال -->
                        <form id="contactForm" method="post">
                            <div class="row g-3">
                                <!-- البريد الإلكتروني -->
                                <div class="col-lg-12">
                                    <div class="form-floating">
                                        <input type="email" name="email" class="form-control" id="email" placeholder="" required
                                            data-i18n-placeholder="yourEmail" />
                                        <label for="email" data-i18n="yourEmail">Your Email</label>
                                    </div>
                                </div>

                                <!-- العنوان -->
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" name="subject" class="form-control" id="subject" placeholder="" required
                                            data-i18n-placeholder="subject" />
                                        <label for="subject" data-i18n="subject">Subject</label>
                                    </div>
                                </div>

                                <!-- الرسالة -->
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea name="message" class="form-control" id="message" placeholder=""
                                            style="height: 160px" required data-i18n-placeholder="message"></textarea>
                                        <label for="message" data-i18n="message">Message</label>
                                    </div>
                                </div>

                                <!-- زر الإرسال -->
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary rounded-pill text-white py-3 px-5" data-i18n="send">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <!-- الصورة -->
                    <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                        <img src="img/4-4.jpg" alt="" style="border-radius: 20px; width: 500px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->

    <!-- Footer Start -->
    <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <div class="footer-item">
                            <h4 class="text-white mb-4" data-i18n="title1">JustDanc</h4>
                            <p class="text-white mb-3" data-i18n="description1">Dolor amet sit justo amet elitr clita
                                ipsum elitr est.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                            <div class="d-flex">
                                <a class="btn btn-lg-square btn-primary rounded-circle mx-2"
                                    href="https://x.com/techtrum_ksa?s=21&t=eztNfcyajtI5kYT9l97_rQ"><i
                                        class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-primary rounded-circle mx-2"
                                    href="https://www.linkedin.com/in/techtrum?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i
                                        class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-white mb-4" data-i18n="contact">contact</h4>
                        <div class="d-flex align-items-center mb-3">
                            <a class="btn btn-lg-square btn-primary rounded-circle mx-2" href="tel:+966554442151"><i
                                    class="fa fa-phone-alt"></i></a>
                            <div class="text-white ms-2" dir="ltr">
                                <p class="mb-0">+966 55 444 2151</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-white mb-4" data-i18n="QuickLinks">Quick Links</h4>
                        <a href="about.html" class="footer-link" data-i18n="about"> About Us</a>
                        <a href="index.html" class="footer-link" data-i18n="home">Home</a>
                        <a href="team.html" class="footer-link" data-i18n="team">Our Team</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <div class="footer-item">
                            <h4 class="text-white mb-4" data-i18n="aboutTechtrum_subtitle">Newsletter</h4>
                            <p class="text-white mb-3" data-i18n="aboutTechtrum_title">Dolor amet sit justo amet elitr
                                clita ipsum elitr est.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <a href="#" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>

    <!-- JavaScript Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>
    
    <!-- SweetAlert2 JS -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <!-- Template Javascript -->
    <script src="js/translate.js"></script>
    <script src="js/main.js"></script>
    
    <script>
        $(document).ready(function() {
            $('#contactForm').on('submit', function(e) {
                e.preventDefault();
                
                var formData = $(this).serialize();
                
                $.ajax({
                    type: 'POST',
                    url: 'main.php',
                    data: formData,
                    dataType: 'json',
                    success: function(response) {
                        // عرض الرسالة كنافذة منبثقة
                        Swal.fire({
                            title: response.message,
                            icon: response.message.includes('نجاح') ? 'success' : 'error',
                            confirmButtonText: 'حسناً',
                            confirmButtonColor: '#0b769d'
                        });
                        
                        // إعادة تعيين النموذج إذا كانت الرسالة ناجحة
                        if (response.message.includes('نجاح')) {
                            $('#contactForm')[0].reset();
                        }
                    },
                    error: function() {
                        Swal.fire({
                            title: 'حدث خطأ أثناء الإرسال',
                            icon: 'error',
                            confirmButtonText: 'حسناً',
                            confirmButtonColor: '#0b769d'
                        });
                    }
                });
            });
        });
    </script>
</body>
</html>