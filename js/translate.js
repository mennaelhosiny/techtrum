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
      ourexperiense:"our previous projects",
      buttonText: "عربي",
      "subtitle1": "Techtrum Consult",
      "title1": "connect to grow",
      "description1": "Techtrum Consult delivers sustainable solutions in Saudi Arabia through expert consulting and emerging smart technologies.",
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
      subtitle: "our value",
      title: " We carries lots of expertise and accumulative experience in different sectors that become as value chain",
      viewAll: "View All Services",
      readMore: "Read More",
      subTitle5: "OUR TEAM",
      title5: "Generating Ideas is Teamwork",

     send:"send",
      subTitleser: "Our Expertise Gallery",
      titleser: "Spectrum Engineering & Smart Solutions",
      descriptionser: "Innovative wireless, fiber optics, and smart city solutions compliant with ITU, MCIT, and CST regulations",
      allser: "All",
      wirelessser: "Wireless & Fiber",
      smartCitiesser: "Smart Cities",
      networkser: "Network Performance",


      titleser1: "Telecommunications & Smart Cities",
      descriptionser1: "Advanced frequency spectrum analysis and optimization compliant with ITU and MCIT regulations",


      titleser2: "Digital transformation ",
      descriptionser2: "SDN-controlled fiber optics networks with QKD for secure communications infrastructure",


      titleser3: "Emerging Technologies & Innovation ",
      descriptionser3: "Digital twin solutions integrating IoT, satellites, and sustainable urban development",


      titleser4: "5G Network Solutions",
      descriptionser4: "End-to-end 5G network planning including RAN optimization and network slicing",


      titleser5: "Antenna Design & Placement",
      descriptionser5: "Optimal antenna placement and RF design for maximum coverage and minimal interference",

      techtrum:"techtrum Services",
      titleser6: "Network Performance",
      descriptionser6: "Capacity planning, load balancing, and RF interference mitigation strategies",


      titleser7: "IoT Infrastructure",
      descriptionser7: "Comprehensive IoT solutions for smart utilities, transportation, and public services",
       QuickLinks:"Quick Links",

      titleser8: "Digital Twin Solutions",
      descriptionser8: "Virtual replicas of physical assets for simulation, analysis, and control",


      titleser9: "RF Optimization",
      descriptionser9: "Advanced techniques for minimizing interference and maximizing spectral efficiency",


      titleser10: "Capacity Planning",
      descriptionser10: "Data traffic studies and network expansion strategies for future growth",
      ourprojects:"our projects",
      viewAll: "View All Services",
      readMore: "Read More",
      subTitle5: "OUR TEAM",
      title5: "Generating Ideas is Teamwork",
      contactser1:"Wireless and Fiber Connectivity Advisory",
      contactser1desc:"we are specialized in consultancy of wide range of spectrum analysis, coverage mapping, optimal antenna placement, Network CAPEX/OPEX for wireless deployments, IBS Design, Radio Frequency design and Optimization, critical mission, feasibility Studies & Route Planning, OSP Engineering, 5G Backhaul Solutions, SDN-Controlled Fiber Networks, Quantum Key Distribution (QKD), all of these services and consultancy within ensuring adherence to ITU, MCIT and CST regulations.",
      contactser2:"Smart City Strategies & Planning ",
      contactser2desc:"with Techtrum Consult you can Define long-term smart city goals aligned with sustainability, efficiency, and citizen well-being, Assess current infrastructure and identify areas for smart transformation, Digital Twins, Satellite, IoT and best practice Connectivity.",
      contactser3:"Network Performance",
      contactser3desc:"Our capabilities in Benchmarking and Performance Optimization Strategies for Network Capacity Planning, Scalability, RF Interference Mitigation, Band Steering, Load Balancing and 5G Network Slicing Optimization can scale up your growth on very tied time and take your level into next jump. ",
      contactser11:"Digital Transformation Consultation.",
      contactser11desc:"We are experienced for advisory services such as Digital Strategy, Roadmap creation & Development. Therefore with Techtrum Consult can take your level up through Automation & Process Optimization and then customer experience (CX) with Digital Engagement while ensuring the quality of our consultancy through training & change management programs. ",
      contactser22:"Digital Transformation solution and software ",
      contactser22desc:"Techtrum Consult explored and landscaping of Digital Transformation solutions on wide range locally and globally, so we built a partnership for the best solutions can be provided with Zero code, such as Origami solution and Simplycast solution.",
      contactser33:"Data Management Consultations",
      contactser33desc:"Techtrum Consult having a great team specialized in data management, we providing Data management Strategy & Governance, edge Data Management solutions and consultation.",
      contactser44:"IT Governance Consulting Services",
      contactser44desc:"Techtrum Consult possesses the expertise to deliver comprehensive IT governance services, providing technical governance consulting, risk management, compliance advisory, and implementation of best practices in digital infrastructure. We specialize in applying international standards such as ISO 31000, ISO27001, ISO38500, COBIT and ITIL",
      contactser111:"Artificial intelligence & Machine Learning Innovation",
      contactser111desc:"Techtrum Consult providing the consultation in Automation Strategy, AI/ML studies and development.",
      contactser222:"Metaverse & Extended Reality (XR)",
      contactser222desc:"Extending to our capabilities and experience in emerging technologies, we providing AR/VR Strategy, -VR, AR Applications, digital twins simulations and development of Metaverse Platforms Development",
      contactser333:"Sustainable & Green Tech Studies",
      contactser333desc:"We believe in our positive impact in ESG reporting, public polices, impact assessment and on solution side we providing the emission tracking solutions and Green AI & IoT Ecosystems solutions.",
      contactser444:"Innovation Consultation",
      contactser444desc:"Our Specialized consultation in innovation focusing on Research & Development, Disruptive Tech Adoption, Prototyping & MVP Development, Climate Tech Advisory, Innovation Strategy Blueprint and Proof of Concept (PoC) Development",
      contactus:"contact us",
      sendmessage:"send message",
      "yourEmail": "Your Email",
      "subject": "Subject",
      "message": "Message",
      mnhgya:"Enabling success through international standards and local expertise",
      mnhgyadesc:"Our approach starts with a current status assessment (CSA) through effective client engagement. We tailor solutions to address identified gaps and ensure knowledge transfer. At Techtrum Consult, we prioritize solution sustainability, enabling and empowering our clients.",
      achivegoals:"Empowering organizations to reach their full potential",
      achivegoalsdesc:"At Techtrum Consult, we believe every employee deserves to feel their contributions matter—that they are seen, heard, and valued. We know an inclusive and productive workplace hinges on the relationships between individuals and their managers. Our consultation and training services help leaders enhance self-awareness and develop the skills needed to inspire and unlock the potential of their entire team.",
      ourimpact1:"Our impact",
      ourimpactspam:"Cultivating innovation, advancement, and success.",
      impactdesc:"We are a trusted partner, aiming to create a sustainable impact in what we do at both organizational and personal levels. Our impact comes from our deep understanding of the market needs and the experience we bring to enable our client capture the optimum solutions and values through",
      impact1:"We offer a wide array of consultation and training services designed to cater to organizations' unique requirements.",
      impact2:"Our solutions address your unique challenges and opportunities, providing the tools and techniques to thrive in today's dynamic market.",
      impact3:"We uplift and support current and emerging leaders, laying a solid foundation for our clients' success in their respective industries",
      impact4:"Committed to enriching both governmental and private sectors in alignment with Vision 2030.",
      featuretechtrum:"Techtrum Consult is different",
      feature1:"Local expertise and global partnerships ",
      feature1desc:"Our deep understanding of the local market, combined with carefully selected international partnerships, allows us to localize global solutions for maximum client value.",
      feature2:"Techtrum Consult Network ",
      feature2desc:"We leverage a highly selected network of expert consultants and subject matter specialists on an international scale to maximize impact and optimize capacity.",
      feature3:"Proven Track Record ",
      feature3desc:"Our consultants have a history of designing and delivering successful solutions for both government and private sectors, achieving outstanding results.",
      feature4:"Commitment to Excellence ",
      feature4desc:"We recognize the challenges organizations face in fulfilling their duties and achieving their 2030 vision goals. We believe in jumpstarting leadership and organizations to deliver on promises and achieve the highest level of excellence.",


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
      sendmessage:"ارسال الرسالة",
      testimonial: "آراء العملاء",
      gallery: " مشاريعنا",
      not_found: "صفحة غير موجودة",
      contact: "اتصل بنا",
      greeting: "مرحبا",
      welcome: "أهلاً بك في موقعنا",
      buttonText: "English",
      contactus:"تواصل معنا",
      "subtitle1": "تكتروم للاستشارات",
      "title1": "   ...تواصل ... لتنمو",
      "description1": "تكتروم كونسلت تقدم حلولًا مستدامة في السعودية من خلال الاستشارات المتخصصة والتقنيات الذكية الناشئة.",
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
      "aboutTechtrum_subtitle": " عن تكتروم كونسلت",
      "aboutTechtrum_title": "  تيكتروم كونسلت " ,
      "aboutTechtrum_desc1": "هي شركة استشارية متخصصة تقدم خدمات استشارية في التقنيات الحديثة وخدمات الاتصالات في المجال التجاري.تركز على دراسة وإيجاد الحلول المثلى التي تعزز من الاستدامة، من خلال خبرات مستشاريها التقنيين والإستراتيجيين.",
      "aboutTechtrum_desc2": "",
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
      subtitle: " قيمنا ",
      title: " لدينا خبرات كبيرة و متراكمة في مختلف القطاعات التي تشكل سلسلة قيمة متكاملة.",
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

      titleser1: "  الاتصالات والمدن الذكية",
      descriptionser1: "تحليل وتحسين متقدم للطيف الترددي وفقاً لأنظمة الاتحاد الدولي للاتصالات ووزارة الاتصالات",

      titleser2: "التحول الرقمي",
      descriptionser2: "شبكات ألياف ضوئية متحكم بها برمجياً مع توزيع المفاتيح الكمية للبنية التحتية الآمنة",

      titleser3: "التقنيات الناشئة والابتكار",
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
      send:"ارسال",
      titleser10: "تخطيط السعات",
      descriptionser10: "دراسات حركة البيانات واستراتيجيات توسعة الشبكة للنمو المستقبلي",
      contactser1:"الاستشارات في الاتصالات اللاسلكية والألياف الضوئية",
      contactser1desc:"نختص في استشارات تحليل الطيف الترددي، رسم خرائط التغطية،  تحديد المواقع المثالية للهوائيات، تحليل التكاليف الرأسمالية والتشغيلية للتغطية اللاسلكية، تصميم أنظمة المباني الذكية IBS))، تصميم وتحسين الترددات الراديوية، دراسات الجدوى وتخطيط حركة البيانات والاتصالات، هندسة الشبكات الخارجية OSP))، حلول النقل الشبكي للجيل الخامس، شبكات الألياف الضوئية المتحكم بها برمجيًا SDN))، توزيع المفاتيح الكمية QKD))، كل ذلك مع الالتزام بأنظمة الاتحاد الدولي للاتصالاتITU))  ووزارة الاتصالات وتقنية المعلوماتMCIT))  وهيئة الاتصالات والفضاء والتقنيةCST).)",
      contactser2:"الاستشارات في المدن الذكية",
      contactser2desc:"مع تيكتروم كونسلت يمكنك تحديد أهداف المدن الذكية طويلة المدى المواكبة للاستدامة والكفاءة ورفع جودة الحياة، وتقييم البنية التحتية الحالية وتحديد مجالات التحول الذكي، بما في ذلك التوئم الرقمي، الأقمار الصناعية، إنترنت الأشياء وأفضل الحلول التقنية الحديثة.",
      contactser3:"أداء الشبكة",
      contactser3desc:"قدراتنا في تقييم الأداء وتحسين استراتيجيات أداء الشبكات اللاسلكية وشبكات الألياف الضوئية، تخطيط السعات، التوسع، تخفيف تداخل الترددات الراديوية، توجيه النطاقات، موازنة الحمل وتحسين تقطيع شبكات الجيل الخامس يمكن أن تعزز نموك في وقت قياسي وتأخذ منظمتك إلى قفزات نوعية.",
      contactser11:"استشارات التحول الرقمي",
      contactser11desc:"لدينا خبرة كبيرة في خدمات الاستشارات مثل الاستراتيجية الرقمية، إنشاء وتطوير خطط العمل. يمكننا تقديم استشاراتنا للإرتقاء بمستوى المنظمات من خلال أتمتة وتحسين العمليات ثم تجربة العملاءCX)) مع الموائمة الرقمية وضمان جودة استشاراتنا من خلال برامج التدريب وإدارة التغيير",
      contactser22:"حلول وبرمجيات التحول الرقمي",
      contactser22desc:"توسعت تيكتروم كونسلت في رسم خريطة شاملة لحلول التحول الرقمي على نطاق واسع محليًا وعالميًا، لذلك قمنا ببناء شراكات لأفضل الحلول التي يمكن تقديمها بدون أي جهود لكتابة الأكواد البرمجية، مثل برنامج أوريغامي و سيمبلي كاست.",
      contactser33:"الاستشارات في إدارة البيانات",
      contactser33desc:"لدينا في تيكتروم كونسلت فريق رائع متخصص في إدارة البيانات، نقدم الدراسات اللإستشارية في استراتيجيات إدارة البيانات والحوكمة، ونقدم أيضاً حلول إدارة البيانات الطرفية.",
      contactser44:"الاستشارات في حوكمة تقنية المعلومات",
      contactser44desc:"لدى تكتروم كونسلت الخبرة الكافية للقيام بأعمال الحوكمة في تقنية المعلومات وتقديم الاستشارات في الحوكمة التقنية وإدارة المخاطر والالتزام وتبني افضل الممارسات في البنية التحتية الرقمية وتطبيق المعايير الدولية مثل ISO31000, ISO27001, ISO38500, COBIT, ITIL، والقيام بتحديد مؤشرات الآداء KPIs",
      contactser111:"الذكاء الاصطناعي وتعلم الآله",
      contactser111desc:"نقدم في تيكتروم كونسلت الاستشارات في حلول واستراتيجيات الأتمتة، دراسات وتطوير الذكاء الاصطناعي والتعلم الآلي.",
      contactser222:"استشارات الميتافيرس والواقع المعززXR))",
      contactser222desc:"امتدادًا لقدراتنا وخبراتنا في التقنيات الناشئة، نقدم الاستشارات المتخصصة في الواقع الافتراضي والمعزز، و تطبيقات الواقع الافتراضي والمعزز، ومحاكاة التوائم الرقمية وتطوير منصات الميتافيرس.",
      contactser333:"الدراسات الاستشارية في التقنيات والإستدامة",
      contactser333desc:"نؤمن بتأثيرنا الإيجابي في تقديمنا لتقارير متخصصة في الحوكمة البيئية الاجتماعية ESG، السياسات العامة، تقييم الأثر ، وعلى جانب الحلول نقدم حلول تتبع الانبعاثات الكربونية وحلول النظم البيئية للذكاء الاصطناعي وإنترنت الأشياء (Ecosystem).",
      contactser444:"الخدمات الاستشارية في أعمال الابتكار",
      contactser444desc:" نركز في استشاراتنا المتخصصة في الابتكار على البحث والتطوير، تبني التقنيات المبتكرة، تطوير النماذج الأولية والحد الأدنى من المنتجات القابلة للتطبيق MVP))، الاستشارات في تقنيات المناخ، مخططات استراتيجية الابتكار وتطوير نماذج اثبات المفاهيم PoC).)",
      "yourEmail": "البريد الإلكتروني",
      "subject": "الموضوع",
      "message": "الرسالة",
      ourexperiense:"خبراتنا السابقة",
      ourprojects:"مشاريعنا",
      QuickLinks:"روابط سريعة",
      techtrum:"خدمات تكتروم",
      mnhgya:"نحقق النجاح من خلال المعايير الدولية والخبرات المحلية ",
      mnhgyadesc:"تبدأ منهجيتنا بإجراء تقييم للوضع الراهن (CSA) من خلال تفاعل فعّال مع العملاء. نحن نُصمم حلولاً مخصصة لمعالجة الفجوات المحددة وضمان نقل المعرفة. في تيكتروم كونسلت ، نُعطي الأولوية لاستدامة الحلول، مما يمكن ويُقوي عملاءنا لتحقيق النجاح الدائم.  ",
      achivegoals:"تمكين المنظمات لتحقيق أقصى إمكاناتها",
      achivegoalsdesc:"في تيكتروم كونسلت، نؤمن بأن كل موظف يستحق أن يشعر بأن مساهماته مهمة – وأنه مرئي، مسموع، ومقدر. نحن نعلم أن مكان العمل المشترك والمنتج النهائي يعتمد على العلاقات بين الأفراد ومديريهم. تساعد خدماتنا الاستشارية والتدريبية القادة على تعزيز الوعي الذاتي وتطوير المهارات اللازمة لإلهام وإطلاق إمكانات فريقهم بالكامل.  ",
      ourimpact1:"أثرنا",
      ourimpactspam:"تعزيز الابتكار، التقدم، والنجاح",
      impactdesc:"نحن شريك موثوق به، نهدف إلى خلق تأثير مستدام في ما نقوم به على المستويين التنظيمي والتقني. ينبع تأثيرنا من فهمنا العميق لاحتياجات السوق والخبرة التي نقدمها لتمكين عملائنا من تحقيق الحلول والقيمة المثلى.  ",
      impact1:"نقدم مجموعة واسعة من الخدمات الاستشارية التقنية المصممة خصيصاً لتلبية الاحتياجات الفريدة للمنظمات ",
      impact2:"حلولنا تتناول التحديات والفرص الفريدة التي تواجهها، وتوفر الأدوات والتقنيات اللازمة للازدهار في السوق المتغير اليوم.  ",
      impact3:"نحن نرفع وندعم القادة الحاليين والناشئين، ونضع أساساً متيناً لنجاح عملائنا في صناعاتهم المختلفة.  ",
      impact4:"ملتزمون بإثراء القطاعين الحكومي والخاص بما يتماشى مع رؤية 2030.  ",
      featuretechtrum:"ما يميز تيكتروم للاستشارات",
      feature1:"الخبرة المحلية والشراكات العالمية",
      feature1desc:"فهمنا العميق للسوق المحلية، إلى جانب شراكاتنا الدولية المدروسة، يمكننا من توطين الحلول العالمية لتعظيم القيمة المقدمة للعميل.  ",
      feature2:"شبكة تيكتروم للاستشارات",
      feature2desc:"نستفيد من شبكة مختارة بعناية من الخبراء الاستشاريين والمتخصصين على المستوى الدولي لتعظيم الأثر وتحسين القدرات.  ",
      feature3:"سجل حافل بالإنجازات",
      feature3desc:"يتمتع مستشارونا بسجل حافل في تصميم وتنفيذ حلول ناجحة لكل من القطاعين الحكومي والخاص، محققين نتائج استثنائية.  ",
      feature4:"الالتزام بالتميز",
      feature4desc:"نحن ندرك التحديات التي تواجهها المنظمات في تنفيذ مهامها وتحقيق أهداف رؤية 2030. نؤمن بتمكين القيادات والمنظمات للوفاء بوعودها وتحقيق أعلى مستويات التميز.  ",
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
 const inputs = document.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    input.style.direction = isRTL ? 'rtl' : 'ltr';
    input.style.textAlign = isRTL ? 'right' : 'left';
  });
