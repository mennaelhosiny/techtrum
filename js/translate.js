document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('#languageToggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  const translations = {
    en: {
      home: "Home",
      about: "About",
      events: "Events",
      blogs: "Services",
      pages: "Pages",
      our_classes: "Our classes",
      training: "Dance Training",
      team: "Our Team",
      testimonial: "Testimonial",
      gallery: "Projects ",
      not_found: "404 Page",
      contact: "Contact Us",
      greeting: "Hello",
      welcome: "Welcome to our website",
      buttonText: "عربي"
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      events: "الفعاليات",
      blogs: "الخدمات",
      pages: "الصفحات",
      our_classes: "فصولنا",
      training: "تدريب الرقص",
      team: "فريقنا",
      testimonial: "آراء العملاء",
      gallery: " مشاريعنا",
      not_found: "صفحة غير موجودة",
      contact: "اتصل بنا",
      greeting: "مرحبا",
      welcome: "أهلاً بك في موقعنا",
      buttonText: "English"
    }
  };

  const setLanguage = (language) => {
    localStorage.setItem('language', language);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-i18n');
      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
    dropdownToggle.textContent = translations[language].buttonText;
  };

  // Toggle between Arabic and English on button click
  dropdownToggle.addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
  });

  // Set default language
  const savedLang = localStorage.getItem('language') || 'en';
  setLanguage(savedLang);
});
