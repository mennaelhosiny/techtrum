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
      buttonText: "عربي",
      "subtitle1": "Techtrum Consult",
      "title1": "Techtrum delivers sustainable solutions",
      "description1": "Techtrum delivers sustainable solutions in Saudi Arabia through expert consulting and emerging smart technologies.",
      "join1": "Join Now",
      "readmore1": "Read More",

      "subtitle2": "Our Vision",
      "title2": "Becoming the premier choice for enterprises",
      "description2": "Becoming the premier choice for enterprises to fully leverage technology solutions by harnessing cutting-edge emerging technologies to achieve their objectives.",
      "join2": "Join Now",
      "readmore2": "Read More",

      "subtitle3": "Mission",
      "title3": "To pioneer groundbreaking ideas and solutions",
      "description3": "To pioneer groundbreaking ideas and solutions that significantly enhance business efficiency and drive productivity, ultimately achieving sustainability in environmental, social, and governance aspects.",
      "join3": "Join Now",
      "readmore3": "Read More",
      "aboutTechtrum_subtitle": "About Techtrum",
      "aboutTechtrum_title": "Techtrum Consult ",
      "aboutTechtrum_desc1": "is a specialized consulting firm Offering advisory services in modern technologies and telecommunications within the business sector.",
      "aboutTechtrum_desc2": "It focuses on analyzing and developing optimal solutions that enhance sustainability through the expertise of its technical and strategic consultants.",
      "aboutTechtrum_btn": "Learn More",
      "counter_yearsHelping": "Years Helping Business",
      "counter_workingEmployees": "Working Employees",
      "counter_completeProjects": "Complete Projects",
      "counter_happyCustomers": "Happy Customers",
      title12: "Partnerships",
      desc12: "We build bridges with various local and international companies to bring the latest smart solutions to the market at a professional level.",
      title13: "Design & Studies",
      desc13: "Professional designs and studies along with supervision of implementation.",
      title14: "Simulation",
      desc14: "We use the latest tools that follow best practices to validate the proposed technologies' efficiency.",
      title15: "Innovation",
      desc15: "Integrating smart technologies across sectors to support sustainability goals.",
      title16: "Sustainability",
      desc16: "Tectrom Consult ensures long service life and sustainability through reliable solutions and products.",
      subtitle: "Experience makes the difference",
      title: "An Integrated Value Chain",
      viewAll: "View All Services",
      readMore: "Read More",
      subTitle5: "OUR TEAM",
      title5: "Generating Ideas is Teamwork",


      subTitleser: "Our Expertise Gallery",
      titleser: "Spectrum Engineering & Smart Solutions",
      descriptionser: "Innovative wireless, fiber optics, and smart city solutions compliant with ITU, MCIT, and CST regulations",
      allser: "All",
      wirelessser: "Wireless & Fiber",
      smartCitiesser: "Smart Cities",
      networkser: "Network Performance",


      titleser1: "Spectrum Analysis",
      descriptionser1: "Advanced frequency spectrum analysis and optimization compliant with ITU and MCIT regulations",


      titleser2: "Fiber Optics Networks",
      descriptionser2: "SDN-controlled fiber optics networks with QKD for secure communications infrastructure",


      titleser3: "Smart City Blueprints",
      descriptionser3: "Digital twin solutions integrating IoT, satellites, and sustainable urban development",


      titleser4: "5G Network Solutions",
      descriptionser4: "End-to-end 5G network planning including RAN optimization and network slicing",


      titleser5: "Antenna Design & Placement",
      descriptionser5: "Optimal antenna placement and RF design for maximum coverage and minimal interference",


      titleser6: "Network Performance",
      descriptionser6: "Capacity planning, load balancing, and RF interference mitigation strategies",


      titleser7: "IoT Infrastructure",
      descriptionser7: "Comprehensive IoT solutions for smart utilities, transportation, and public services",


      titleser8: "Digital Twin Solutions",
      descriptionser8: "Virtual replicas of physical assets for simulation, analysis, and control",


      titleser9: "RF Optimization",
      descriptionser9: "Advanced techniques for minimizing interference and maximizing spectral efficiency",


      titleser10: "Capacity Planning",
      descriptionser10: "Data traffic studies and network expansion strategies for future growth",



      viewAll: "View All Services",
      readMore: "Read More",
      subTitle5: "OUR TEAM",
      title5: "Generating Ideas is Teamwork"

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
      buttonText: "English",

      "subtitle1": "تكتروم للاستشارات",
      "title1": "تكتروم تقدم حلولًا مستدامة",
      "description1": "تكتروم تقدم حلولًا مستدامة في السعودية من خلال الاستشارات المتخصصة والتقنيات الذكية الناشئة.",
      "join1": "انضم الآن",
      "readmore1": "اقرأ المزيد",

      "subtitle2": "رؤيتنا",
      "description2": "أن نكون الخيار الأول للمؤسسات في الاستفادة الكاملة من الحلول التقنية من خلال تبني أحدث التقنيات الناشئة لتحقيق أهدافهم.",
      "join2": "انضم الآن",
      "readmore2": "اقرأ المزيد",

      "subtitle3": "مهمتنا",
      "title3": "الريادة في الأفكار والحلول المبتكرة",
      "description3": "ابتكار  الأفكار والحلول المبتكرة لتحسين كفاءة الأعمال وتزيد الإنتاجية لتحقيق الاستدامة على المستويات البيئية والاجتماعية والحوكمة.",
      "join3": "انضم الآن",
      "readmore3": "اقرأ المزيد",
      "aboutTechtrum_subtitle": "عن تكتروم",
      "aboutTechtrum_title": "  تيكتروم كونسلت " ,
      "aboutTechtrum_desc1": "هي شركة استشارية متخصصة تقدم خدمات استشارية في التقنيات الحديثة وخدمات الاتصالات في المجال التجاري.",
      "aboutTechtrum_desc2": "تركز على دراسة وإيجاد الحلول المثلى التي تعزز من الاستدامة، من خلال خبرات مستشاريها التقنيين والإستراتيجيين.",
      "aboutTechtrum_btn": "تعرف أكثر",
      "counter_yearsHelping": "سنوات في خدمة الأعمال",
      "counter_workingEmployees": "الموظفين العاملين",
      "counter_completeProjects": "المشاريع المكتملة",
      "counter_happyCustomers": "العملاء السعداء",
      title12: "الشراكات",
      desc12: "نقوم ببناء جسور مع العديد من الشركات المحلية والدولية لضمان تقديم أحدث الحلول الذكية المتنوعة إلى السوق .",

      title13: "التصاميم والدراسات",
      desc13: "تصميمات ودراسات احترافية بالإضافة إلى الإشراف على التنفيذ.",
      title14: "المحاكاة",
      desc14: "نستخدم أحدث التقنيات التي تتبع أفضل الممارسات لإثبات كفاءة التقنيات المقترحة.",
      title15: "الابتكار",
      desc15: "دمج وتكامل التقنيات الذكية لقطاعات مختلفة لخدمة أهداف الاستدامة.",
      title16: "الاستدامة",
      desc16: "بضمان الخدمة والمنتجات المقدمة، تمنح تيكتروم كونسلت الأنظمة عمرًا طويلاً واستدامة.",
      subtitle: "الخبرة تصنع الفارق",
      title: "سلسلة قيمة متكاملة",
      viewAll: "عرض جميع الخدمات",
      readMore: "اقرأ المزيد",
      subTitle5: "شركاء نجاحنا ",
      title5: "ابتكار الأفكار هو عمل جماعي",

      subTitleser: "معرض خبراتنا",
      titleser: "هندسة الطيف والحلول الذكية",
      descriptionser: "حلول مبتكرة في الاتصالات اللاسلكية والألياف الضوئية والمدن الذكية الممتثلة لأنظمة الاتحاد الدولي للاتصالات ووزارة الاتصالات وهيئة الاتصالات",
      allser: "الكل",
      wirelessser: "اللاسلكي والألياف",
      smartCitiesser: "المدن الذكية",
      networkser: "أداء الشبكة",

      titleser1: "تحليل الطيف الترددي",
      descriptionser1: "تحليل وتحسين متقدم للطيف الترددي وفقاً لأنظمة الاتحاد الدولي للاتصالات ووزارة الاتصالات",

      titleser2: "شبكات الألياف الضوئية",
      descriptionser2: "شبكات ألياف ضوئية متحكم بها برمجياً مع توزيع المفاتيح الكمية للبنية التحتية الآمنة",

      titleser3: "خطط المدن الذكية",
      descriptionser3: "حلول التوأم الرقمي التي تدمج إنترنت الأشياء والأقمار الصناعية مع التطور الحضري المستدام",


      titleser4: "حلول شبكات الجيل الخامس",
      descriptionser4: "تخطيط شامل لشبكات الجيل الخامس يشمل تحسين الشبكة اللاسلكية وتقطيع الشبكة",

      titleser5: "تصميم وتركيب الهوائيات",
      descriptionser5: "المواقع المثالية للهوائيات وتصميم الترددات الراديوية لأقصى تغطية وأقل تداخل",


      titleser6: "أداء الشبكة",
      descriptionser6: "تخطيط السعات، موازنة الحمل، واستراتيجيات تخفيف تداخل الترددات الراديوية",


      titleser7: "بنية إنترنت الأشياء",
      descriptionser7: "حلول شاملة لإنترنت الأشياء في المرافق الذكية والنقل والخدمات العامة",


      titleser8: "حلول التوأم الرقمي",
      descriptionser8: "نماذج افتراضية للبنى التحتية المادية لأغراض المحاكاة والتحليل والتحكم",


      titleser9: "تحسين الترددات الراديوية",
      descriptionser9: "تقنيات متقدمة لتقليل التداخل وزيادة كفاءة الطيف الترددي",


      titleser10: "تخطيط السعات",
      descriptionser10: "دراسات حركة البيانات واستراتيجيات توسعة الشبكة للنمو المستقبلي"

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
