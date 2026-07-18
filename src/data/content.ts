import {
  Code,              // React
  FileCode,          // TypeScript
  Palette,           // Tailwind CSS
  FileText,          // PHP
  Server,            // Laravel
  Database,          // MySQL
  Monitor,           // HTML
  BookOpen,          // CSS
  Package,           // Bootstrap
  Brush,             // Sass
  Terminal,          // JavaScript
  Network,           // API
  Award,             // Awards
  Users,             // Users
  Star,              // Rating
  Compass,           // Direction
  Lightbulb,         // Idea
  HeartHandshake,    // Partnership
  ShieldCheck,       // Security
  Rocket,            // Startup
  MessageCircle,     // Chat
  Code2,             // Coding
  BookOpenCheck,     // Learning done
  GraduationCap,     // Education
  Bot,               // Chatbot
  Layout             // Layout
} from 'lucide-react';

// Personal Info
export const personalInfo = {
  name: {
    en: "Asilbek Abdunabiyev",
    uz: "Asilbek Abdunabiyev",
    ru: "Икболшох Илхомжонов",
    tj: "Иқболшоҳ Илҳомҷонов"
  },
  location: {
    en: "Samarkand, Uzbekistan",
    uz: "Samarqand, O‘zbekiston",
    ru: "Самарканд, Узбекистан",
    tj: "Самарқанд, Ӯзбекистон"
  },
  social: {
    email: {
      label: "asilbekabdunabiyev@gmail.com",
      link: "mailto:asilbekabdunabiyev@gmail.com",
    },
    phone: {
      label: "+998 (94) 616 66 63",
      link: "tel:+998776030033",
    },
    github: {
      label: "GitHub",
      link: "https://github.com/AsilbekCodes",
    },
    linkedin: {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/asilbek-abdunabiyev-0064a436a/",
    },
    telegram: {
      label: "Telegram",
      link: "https://t.me/Dasturchim",
    },
    instagram: {
      label: "Instagram",
      link: "https://instagram.com/asilbekdev",
    },
  },
};

// Tech Stack
import { FaPython, FaNodeJs, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa";
import { SiRedis, SiNextdotjs, SiVite, SiPostman } from "react-icons/si";

export const techStack = [
  // ==== Frontend ====
  { name: "HTML", icon: Monitor, level: 98 },
  { name: "CSS", icon: BookOpen, level: 94 },
  { name: "JavaScript", icon: Terminal, level: 92 },
  { name: "TypeScript", icon: FileCode, level: 88 },
  { name: "Bootstrap", icon: Package, level: 80 },
  { name: "Sass", icon: Brush, level: 76 },
  { name: "Tailwind CSS", icon: Palette, level: 95 },
  { name: "React", icon: Code, level: 91 },
  { name: "Next.js", icon: SiNextdotjs, level: 85 },
  { name: "Vite", icon: SiVite, level: 82 },

  // ==== Backend ====
  { name: "PHP", icon: FileText, level: 90 },
  { name: "Python", icon: FaPython, level: 84 },
  { name: "Node.js", icon: FaNodeJs, level: 85 },
  { name: "Laravel", icon: Server, level: 96 },
  { name: "MySQL", icon: Database, level: 88 },
  { name: "REST API", icon: Network, level: 87 },
  { name: "Redis", icon: SiRedis, level: 75 },

  // ==== Tools ====
  { name: "Git", icon: FaGitAlt, level: 90 },
  { name: "Docker", icon: FaDocker, level: 78 },
  { name: "Postman", icon: SiPostman, level: 86 },
  { name: "Figma", icon: FaFigma, level: 80 },
];

// Stats
export const stats = [
  {
    icon: Star,
    value: '4+',
    label: {
      en: 'Years of Experience',
      uz: 'Tajriba yillari',
      ru: 'Годы опыта',
      tj: 'Солҳои таҷриба',
    },
  },
  {
    icon: Award,
    value: '1000+',
    label: {
      en: 'Projects Completed',
      uz: 'Tugallangan loyihalar',
      ru: 'Завершённые проекты',
      tj: 'Лоиҳаҳои ба анҷом расида',
    },
  },
  {
    icon: Users,
    value: '50+',
    label: {
      en: 'Satisfied Clients',
      uz: 'Hamkor kompaniyalar',
      ru: 'Довольные клиенты',
      tj: 'Мизоҷони қаноатманд',
    },
  },
  {
    icon: GraduationCap,
    value: '80+',
    label: {
      en: 'Mentored Students',
      uz: 'Mamnun mijozlar',
      ru: 'Обученные ученики',
      tj: 'Шогирдони омӯзонидашуда',
    },
  },
];

// Projects
export const projects = [
  {
    id: 1,
    name: {
      en: "asilmedia.org",
      uz: "asilmedia.org",
      ru: "asilmedia.org",
      tj: "asilmedia.org"
    },
    description: {
      en: "A SaaS platform to build professional websites using drag & drop tools with Laravel backend and React frontend.",
      uz: "AsilMedia.org O'zbekistonning eng mashhur kino sayti bo'lib, har kuni 170 mingdan ortiq foydalanuvchiga xizmat ko'rsatadi. Saytimizda tarjima kinolar uzbek tilida to'liq dublyaj yoki subtitr bilan taqdim etiladi. Yangi kinolar 2026 yilgi premyeralardan tortib, klassik asarlargacha barchasi HD va 1080p sifatida mavjud. Siz kinolar onlayn uzbek tilida tomosha qilishingiz yoki qurilmangizga bepul yuklab olishingiz mumkin.",
      ru: "SaaS-платформа для создания профессиональных сайтов с помощью инструментов drag & drop на базе backend Laravel и frontend React.",
      tj: "Платформаи SaaS барои сохтани сомонаҳои касбӣ бо истифодаи абзорҳои drag & drop бо backend-и Laravel ва frontend-и React."
    },
    image: "/images/projects/templatesuz.png",
    tech: ["PHP", "MySQL", "(DataLife Engine CMS)"],
    liveDemo: 'https://asilmedia.org/',
    github: null,
    featured: true,
    category: "Full-Stack"
  },
  {
    id: 2,
    name: {
      en: "Ismlarga Niklar Vidiolar",
      uz: "Ismlarga Niklar Vidiolar",
      ru: "Ismlarga Niklar Vidiolar",
      tj: "Ismlarga Niklar Vidiolar"
    },
    description: {
      en: "A real-time social messaging web app built with pure PHP and MySQL, featuring user registration, login, chat system, and message notifications.",
      uz: "IsmgaNikVideoXBot orqali Ism, Nik, Foto va Logongizni chiroyli animatsion videoga aylantiring. Nik effektlari, kulgi ovozlar va professional animatsiyalar bilan videongizni jonlantiring. Tez, sifatli va HD formatda. Hoziroq sinab ko'ring: @IsmgaNikVideoXBot",
      ru: "Веб-приложение для обмена сообщениями в реальном времени, созданное на чистом PHP и MySQL, с функциями регистрации, авторизации, системой чата и уведомлениями.",
      tj: "Веб-иловаи паёмнависии иҷтимоии воқеӣ, ки бо PHP ва MySQL сохта шудааст ва дорои бақайдгирии корбар, воридшавӣ, системаи чат ва огоҳиномаҳои паёмӣ мебошад."
    },
    image: "/images/projects/php-social-messenger.png",
    tech: ["PHP", "MySQL"],
    liveDemo: 'https://t.me/IsmgaNikVideoXBot',
    github: "https://github.com/AsilbekCodes/IsmlargaNiklar",
    featured: false,
    category: "Backend"
  },
  {
    id: 3,
    name: {
      en: "User info bot",
      uz: "User info bot",
      ru: "User info bot",
      tj: "User info bot"
    },
    description: {
      en: "An interactive vocabulary learning game built with JavaScript. It includes multiple vocabulary levels, AJAX-based dynamic questions, text-to-speech pronunciation, and real-time score tracking.",
      uz: "usinfosbot bitta username orqali User ID, Group ID, Super Group ID, Channel ID, Private Channel ID, Bot ID va Premium foydalanuvchi ID'ni aniqlab beradi. Tezkor, ishonchli va mutlaqo bepul. Hoziroq sinab ko'ring: @usinfosbot",
      ru: "Интерактивная игра для изучения словарного запаса, созданная на JavaScript. Включает уровни словаря, динамические вопросы через AJAX, произношение text-to-speech и отслеживание результатов в реальном времени.",
      tj: "Бозии интерактивӣ барои омӯзиши луғат, ки бо JavaScript сохта шудааст. Он дорои сатҳҳои луғат, саволҳои динамикӣ бо AJAX, талаффузи text-to-speech ва пайгирии натиҷаҳо дар вақти воқеӣ мебошад."
    },
    image: "/images/projects/javascript-vocabulary-quiz.png",
    tech: ["Python"],
    liveDemo: 'https://t.me/usinfobot',
    github: "https://github.com/AsilbekCodes/userinfobot",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    name: {
      en: "Java Calculator App",
      uz: "Java Calculator App",
      ru: "Java Calculator App",
      tj: "Java Calculator App"
    },
    description: {
      en: "A simple desktop calculator built with Java and Swing. It supports basic arithmetic operations, a clean graphical interface, and error handling such as division by zero.",
      uz: "Java va Swing yordamida yaratilgan oddiy desktop kalkulyator. Unda asosiy arifmetik amallar, sodda grafik interfeys va nolga bo‘lish kabi xatolarni boshqarish mavjud.",
      ru: "Простой настольный калькулятор, созданный на Java с использованием Swing. Поддерживает базовые арифметические операции, удобный графический интерфейс и обработку ошибок.",
      tj: "Калкулятори оддии desktop, ки бо Java ва Swing сохта шудааст. Он амалиётҳои асосии арифметикӣ, интерфейси графикии содда ва идоракунии хатогиҳоро дастгирӣ мекунад."
    },
    image: "/images/projects/java-calculator.png",
    tech: ["Java", "Swing", "OOP"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/java-calculator-app",
    featured: false,
    category: "Desktop"
  },
  {
    id: 5,
    name: {
      en: "Java Test Platform",
      uz: "Java Test Platform",
      ru: "Java Test Platform",
      tj: "Java Test Platform"
    },
    description: {
      en: "A Java Swing-based quiz platform designed to test vocabulary skills with timed questions, randomized answers, scoring system, and final performance summary.",
      uz: "Java Swing asosida yaratilgan test platformasi bo‘lib, unda vaqt bilan savollar, tasodifiy javob variantlari, ball tizimi va yakuniy natija hisoboti mavjud.",
      ru: "Платформа для тестирования, созданная на Java Swing, с таймером для вопросов, случайным порядком ответов, системой подсчёта баллов и итоговой статистикой.",
      tj: "Платформаи тестӣ, ки бо Java Swing сохта шудааст ва дорои саволҳои бо вақт маҳдуд, ҷавобҳои тасодуфӣ, системаи холгузорӣ ва натиҷаи ниҳоӣ мебошад."
    },
    image: "/images/projects/java-test-platform.png",
    tech: ["Java", "Swing", "AWT", "OOP"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/java-test-platform",
    featured: false,
    category: "Desktop"
  },
  {
    id: 6,
    name: {
      en: "Java To-Do List",
      uz: "Java To-Do List",
      ru: "Java To-Do List",
      tj: "Java To-Do List"
    },
    description: {
      en: "A simple task management desktop application built with Java Swing that allows users to add, edit, delete, and mark tasks as completed with an intuitive user interface.",
      uz: "Java Swing yordamida yaratilgan oddiy vazifalar boshqaruvi desktop ilovasi. Unda vazifalarni qo‘shish, tahrirlash, o‘chirish va bajarilgan deb belgilash imkoniyati mavjud.",
      ru: "Простое настольное приложение для управления задачами, созданное на Java Swing. Позволяет добавлять, редактировать, удалять задачи и отмечать их как выполненные.",
      tj: "Барномаи оддии идоракунии вазифаҳо, ки бо Java Swing сохта шудааст. Имкон медиҳад вазифаҳоро илова, таҳрир, нест ва ҳамчун анҷомшуда қайд кард."
    },
    image: "/images/projects/java-todo-list.png",
    tech: ["Java", "Swing", "OOP"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/java-todo-list",
    featured: false,
    category: "Desktop"
  },
  {
    id: 7,
    name: {
      en: "Java Android Messenger",
      uz: "Java Android Messenger",
      ru: "Java Android Messenger",
      tj: "Java Android Messenger"
    },
    description: {
      en: "An AI-powered Android chat application built with Java and Room Database. It integrates Google Gemini API to generate real-time conversational responses and stores messages locally using SQLite.",
      uz: "Java va Room Database asosida yaratilgan AI chat Android ilovasi. Google Gemini API orqali real vaqt rejimida javoblar yaratadi va xabarlarni SQLite orqali lokal saqlaydi.",
      ru: "Android чат-приложение с искусственным интеллектом, созданное на Java с использованием Room Database. Интегрирует Gemini API для генерации ответов в реальном времени.",
      tj: "Барномаи чати Android бо зеҳни сунъӣ, ки бо Java ва Room Database сохта шудааст. Gemini API-ро барои тавлиди ҷавобҳои воқеӣ истифода мебарад."
    },
    image: "/images/projects/java-android-messenger.png",
    tech: ["Java", "Android", "Room DB", "SQLite", "Gemini API"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/java-android-messenger",
    featured: false,
    category: "Mobile"
  },
  {
    id: 8,
    name: {
      en: "Mantiqli savollar bot",
      uz: "Mantiqli savollar bot",
      ru: "Mantiqli savollar bot",
      tj: "Mantiqli savollar bot"
    },
    description: {
      en: "A secure authentication system built with PHP and MySQL featuring user registration, login, logout, session management, and password hashing for improved security.",
      uz: "Mantiqiy fikrlashni rivojlantiruvchi Telegram kanal va bot tizimi. Foydalanuvchilarga turli xil mantiqiy va IQ savollari taqdim etiladi, ular orqali fikrlash qobiliyatini oshirish maqsad qilingan. Tizimda reyting jadvali, 500 dan ortiq savollar bazasi, foydalanuvchi statistikasi va ballar hisoblash mexanizmi mavjud.",
      ru: "Безопасная система аутентификации на PHP и MySQL с регистрацией пользователей, входом в систему, управлением сессиями и хешированием паролей.",
      tj: "Системаи бехатари аутентификатсия, ки бо PHP ва MySQL сохта шудааст. Он бақайдгирӣ, воридшавӣ, идоракунии сессия ва ҳешкунии паролро дар бар мегирад."
    },
    image: "/images/projects/php-authentication-system.png",
    tech: ["PHP", "MySQL", "Sessions", "Security"],
    liveDemo: 'https://t.me/Mantiqlisavollar_uzbbot',
    github: "https://github.com/AsilbekCodes/Mantiqli-savollar-bot",
    featured: false,
    category: "Backend"
  },
 {
  id: 9,
  name: {
    en: "Book Library",
    uz: "Book Library",
    ru: "Book Library",
    tj: "Book Library"
  },
  description: {
    en: "A digital book library platform inspired by Open Library, an initiative of the Internet Archive. It allows users to search, browse, and explore books and cultural artifacts in a simple and organized web interface.",
    uz: "Internet Archive tashkilotining Open Library loyihasidan ilhomlangan raqamli kitoblar kutubxonasi. Foydalanuvchilarga kitoblarni qidirish, ko'rish va oddiy hamda tartibli veb-interfeys orqali o'rganish imkonini beradi.",
    ru: "Платформа цифровой библиотеки книг, вдохновлённая проектом Open Library от Internet Archive. Позволяет пользователям искать, просматривать и изучать книги через простой и удобный веб-интерфейс.",
    tj: "Платформаи китобхонаи рақамӣ, ки аз лоиҳаи Open Library-и Internet Archive илҳом гирифтааст. Ба корбарон имкон медиҳад, ки китобҳоро ҷустуҷӯ, дида баромада ва тавассути интерфейси веб-сайти сода омӯзанд."
  },
  image: "/images/projects/book.png",
  tech: ["PHP", "LARVEL", "MySQL", "Bootstrap"],
  liveDemo: 'https://openlibrary.org/',
  github: "https://github.com/AsilbekCodes/book_library",
  featured: false,
  category: "Full-Stack"
},
  // {
  //   id: 10,
  //   name: {
  //     en: "Laravel Business Website",
  //     uz: "Laravel Business Website",
  //     ru: "Laravel Business Website",
  //     tj: "Laravel Business Website"
  //   },
  //   description: {
  //     en: "A modern business website built with Laravel featuring a customizable design, admin dashboard, portfolio management, and content management system for businesses.",
  //     uz: "Laravel asosida yaratilgan zamonaviy biznes veb-sayti. Unda admin panel, portfolio boshqaruvi va kontentni boshqarish tizimi mavjud.",
  //     ru: "Современный бизнес-сайт на Laravel с административной панелью, управлением портфолио и системой управления контентом.",
  //     tj: "Сомонаи муосири бизнес, ки бо Laravel сохта шудааст ва дорои панели идоракунӣ ва системаи идоракунии контент мебошад."
  //   },
  //   image: "/images/projects/laravel-business-website.png",
  //   tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  //   liveDemo: null,
  //   github: "https://github.com/AsilbekCodes/laravel-business-website",
  //   featured: false,
  //   category: "Full-Stack"
  // },
  {
    id: 11,
    name: {
      en: "PHP Click Payment Integration",
      uz: "MaqolachiX [BOT]",
      ru: "Интеграция платежной системы Click на PHP",
      tj: "Интегратсияи пардохти Click бо PHP"
    },
    description: {
      en: "A PHP-based integration for the Click payment system that enables secure online payments through API communication with prepare and complete payment stages.",
      uz: "PHP asosida ishlab chiqilgan konspekt yozuvchi Telegram bot. Foydalanuvchi yuborgan matnni avtomatik ravishda chiroyli formatlangan varoq (A4 format) ko'rinishiga aylantirib beradi, o'quvchi va talabalar uchun konspekt tayyorlashni osonlashtiradi.",
      ru: "Интеграция платежной системы Click на PHP, позволяющая выполнять безопасные онлайн-платежи через API с этапами prepare и complete.",
      tj: "Интегратсияи системаи пардохти Click бо PHP, ки пардохтҳои онлайнро тавассути API бо марҳилаҳои prepare ва complete амалӣ мекунад."
    },
    image: "/images/projects/php-click-payment.png",
    tech: ["PHP", "MySQL", "Click API", "Payment Integration"],
    liveDemo: 'https://t.me/MaqolachiXBot',
    github: "https://github.com/AsilbekCodes/php-click-payment",
    featured: false,
    category: "Backend"
  },
  {
    id: 12,
    name: {
      en: "PremiumHub Premium Bot",
      uz: "PremiumHub Premium Bot",
      ru: "PremiumHub Premium Bot",
      tj: "PremiumHub Premium Bot"
    },
    description: {
      en: "A role-based user management system built with PHP that includes authentication, admin and user roles, profile image uploads, and secure access control.",
      uz: "Python va MySQL yordamida ishlab chiqilgan Telegram Stars/Premium sotib olish boti. Click va Fragment to'lov tizimlari integratsiya qilingan, oyiga $10,000+ tranzaksiya qayta ishlanadi, Top Rating, shaxsiy kabinet va referral dasturi orqali foydalanuvchi faolligi oshirilgan.",
      ru: "Система управления пользователями на PHP с ролевым доступом, регистрацией, входом в систему, загрузкой изображений профиля и безопасной авторизацией.",
      tj: "Системаи идоракунии корбарон бо PHP, ки дорои дастрасии вобаста ба нақш, бақайдгирӣ, воридшавӣ ва боркунии аксҳои профил мебошад."
    },
    image: "/images/projects/php-user-role-manager.png",
    tech: ["Python", "Django ", "Node.js"],
    liveDemo: 'https://t.me/HubPremiyumBot',
    featured: false,
    category: "Backend"
  },
  // {
  //   id: 13,
  //   name: {
  //     en: "PHP Education Management System",
  //     uz: "PHP Ta'lim Boshqaruv Tizimi",
  //     ru: "PHP Система управления образованием",
  //     tj: "Системаи идоракунии таълим бо PHP"
  //   },
  //   description: {
  //     en: "A comprehensive education management system built with PHP that allows institutions to manage courses, student records, learning materials, and track academic performance through an intuitive admin dashboard.",
  //     uz: "PHP yordamida yaratilgan ta'lim boshqaruv tizimi. Unda kurslarni boshqarish, talabalar ma'lumotlarini yuritish, o‘quv materiallarini yuklash va admin panel orqali o‘quv jarayonini nazorat qilish mumkin.",
  //     ru: "Система управления образованием на PHP, позволяющая управлять курсами, студентами, учебными материалами и отслеживать успеваемость через административную панель.",
  //     tj: "Системаи идоракунии таълим бо PHP, ки имкон медиҳад курсҳо, маълумоти донишҷӯён ва маводҳои таълимиро тавассути панели идоракунӣ идора кард."
  //   },
  //   image: "/images/projects/php-education-management.png",
  //   tech: ["PHP", "MySQL", "Admin Panel", "Education System"],
  //   liveDemo: "https://uzwriter.uz",
  //   github: "https://github.com/AsilbekCodes/php-education-management",
  //   featured: false,
  //   category: "Full-Stack"
  // },
  {
    id: 14,
    name: {
      en: "JavaScript Test Platform",
      uz: "JavaScript Test Platform",
      ru: "JavaScript Test Platform",
      tj: "JavaScript Test Platform"
    },
    description: {
      en: "An interactive quiz platform built with JavaScript that helps users test their knowledge of HTML, CSS, and JavaScript with dynamic questions, SweetAlert2 feedback, and a real-time countdown timer.",
      uz: "JavaScript yordamida yaratilgan interaktiv test platformasi. Unda HTML, CSS va JavaScript bo‘yicha bilimlarni tekshirish uchun dinamik savollar, SweetAlert2 bildirishnomalari va real vaqt taymeri mavjud.",
      ru: "Интерактивная платформа тестирования на JavaScript для проверки знаний HTML, CSS и JavaScript с динамической загрузкой вопросов, уведомлениями SweetAlert2 и таймером.",
      tj: "Платформаи интерактивии тестӣ бо JavaScript барои санҷиши донишҳои HTML, CSS ва JavaScript бо саволҳои динамикӣ, SweetAlert2 ва таймер."
    },
    image: "/images/projects/javascript-test-platform.png",
    tech: ["JavaScript", "AJAX", "JSON", "SweetAlert2", "Bootstrap"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/javascript-test-platform",
    featured: false,
    category: "Frontend"
  },
  {
    id: 15,
    name: {
      en: "JavaScript Dynamic Slider",
      uz: "JavaScript Dynamic Slider",
      ru: "JavaScript Dynamic Slider",
      tj: "JavaScript Dynamic Slider"
    },
    description: {
      en: "A lightweight and responsive image slider built with HTML, CSS, and JavaScript featuring smooth transitions, navigation controls, and auto-play functionality.",
      uz: "HTML, CSS va JavaScript yordamida yaratilgan responsiv rasm slideri. Unda silliq animatsiyalar, navigatsiya tugmalari va avtomatik aylanish funksiyasi mavjud.",
      ru: "Легкий и адаптивный слайдер изображений, созданный с использованием HTML, CSS и JavaScript с плавными переходами, навигационными кнопками и автопрокруткой.",
      tj: "Слайдери тасвирҳои сабук ва мутобиқшаванда, ки бо HTML, CSS ва JavaScript сохта шудааст ва дорои гузаришҳои ҳамвор ва autoplay мебошад."
    },
    image: "/images/projects/javascript-dynamic-slider.png",
    tech: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/javascript-dynamic-slider",
    featured: false,
    category: "Frontend"
  },
  {
    id: 16,
    name: {
      en: "JavaScript Text Encryption",
      uz: "JavaScript Text Encryption",
      ru: "JavaScript Text Encryption",
      tj: "JavaScript Text Encryption"
    },
    description: {
      en: "A simple web application that allows users to encrypt and decrypt text using AES encryption. Built with HTML, CSS, and JavaScript with clipboard support and responsive design.",
      uz: "AES shifrlash yordamida matnni shifrlash va qayta ochish imkonini beruvchi oddiy web ilova. HTML, CSS va JavaScript yordamida yaratilgan.",
      ru: "Простое веб-приложение для шифрования и дешифрования текста с использованием AES. Построено на HTML, CSS и JavaScript.",
      tj: "Барномаи веб барои рамзгузорӣ ва кушодани матн бо истифодаи AES, ки бо HTML, CSS ва JavaScript сохта шудааст."
    },
    image: "/images/projects/javascript-text-encryption.png",
    tech: ["JavaScript", "AES Encryption", "HTML", "CSS"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/javascript-text-encryption-main",
    featured: false,
    category: "Frontend"
  },
  {
    id: 17,
    name: {
      en: "Kuy Navo Bot | Shazam",
      uz: "Kuy Navo Bot | Shazam",
      ru: "Kuy Navo Bot | Shazam",
      tj: "Kuy Navo Bot | Shazam"
    },
    description: {
      en: "A secure authentication and role management system built with PHP featuring admin dashboard, role-based access control, active session tracking, and advanced security mechanisms.",
      uz: "Ijtimoiy tarmoqlardan video/audio yuklab oluvchi ko'p funksiyali Telegram bot. Instagram, TikTok, YouTube, Snapchat, Likee, Pinterest va Threads'dan suv belgisiz kontent yuklab olish, shuningdek Shazam orqali qo'shiq nomini aniqlash funksiyasi mavjud. Bot guruhlarda ham ishlay oladi.",
      ru: "Безопасная система аутентификации и управления ролями на PHP с административной панелью, контролем доступа на основе ролей и отслеживанием активных сессий.",
      tj: "Системаи бехатари аутентификатсия ва идоракунии нақшҳо бо PHP, ки дорои панели админ ва назорати дастрасӣ мебошад."
    },
    image: "/images/projects/php-auth-master.png",
    tech: ["Python", "Django ", "Node.js", "Security"],
    liveDemo: 'https://t.me/kuynavobot',
    featured: false,
    category: "Backend"
  },
  {
    id: 18,
    name: {
      en: "PHP English Learning Platform",
      uz: "𝑮𝒖𝒓𝒖𝒉 𝑵𝒂𝒛𝒐𝒓𝒂𝒕𝒄𝒉𝒊",
      ru: "PHP Платформа для изучения английского",
      tj: "Платформаи омӯзиши англисӣ бо PHP"
    },
    description: {
      en: "An English learning platform built with PHP that helps users improve vocabulary, sentence structure, and reading skills through exercises, translations, and PDF exports.",
      uz: "PHP asosida ishlab chiqilgan Telegram guruh boshqaruv boti. Admin tayinlash, ogohlantirish/ban tizimi, xabarlarni o'chirish va pin qilish, a'zo statistikasi va reyting jadvali, kanalga majburiy a'zolik kabi funksiyalarni o'z ichiga oladi.",
      ru: "Платформа для изучения английского языка на PHP с функциями словаря, предложений, переводов текстов, упражнений и экспорта в PDF.",
      tj: "Платформаи омӯзиши забони англисӣ бо PHP, ки луғат, ҷумлаҳо, тарҷумаи матн ва машқҳоро дар бар мегирад."
    },
    image: "/images/projects/php-english-platform.png",
    tech: ["Python","PDF Export", "Education System"],
    liveDemo: 'https://t.me/GuruhNazorati_Bot',
    // github: "https://github.com/AsilbekCodes/php-english-platform",
    featured: false,
    category: "Full-Stack"
  },
  {
    id: 19,
    name: {
      en: "SAMSU AI Lab Website",
      uz: "SAMDU Sun'iy Intellekt Laboratoriyasi Sayti",
      ru: "Сайт лаборатории искусственного интеллекта СамГУ",
      tj: "Сомонаи лабораторияи зеҳни сунъии СамДУ"
    },
    description: {
      en: "A Laravel-based website developed for the SAMSU Artificial Intelligence Laboratory to showcase research activities, projects, news, members, and collaboration opportunities.",
      uz: "Samarqand davlat universiteti Sun'iy intellekt laboratoriyasi uchun Laravel asosida yaratilgan rasmiy veb-sayt. Unda tadqiqotlar, loyihalar, yangiliklar va laboratoriya a'zolari haqida ma'lumotlar mavjud.",
      ru: "Веб-сайт лаборатории искусственного интеллекта Самаркандского государственного университета, разработанный на Laravel для демонстрации исследований, проектов и новостей.",
      tj: "Сомонаи лабораторияи зеҳни сунъии Донишгоҳи давлатии Самарқанд, ки бо Laravel сохта шудааст ва маълумот дар бораи тадқиқотҳо ва лоиҳаҳоро пешниҳод мекунад."
    },
    image: "/images/projects/samsu-ai-lab.png",
    tech: ["Laravel", "PHP", "Blade", "Vite", "MySQL"],
    liveDemo: "https://ai-lab.sampc.uz/",
    // github: "https://github.com/AsilbekCodes/samsu-ai-lab-laravel",
    featured: false,
    category: "Full-Stack"
  },
  {
    id: 20,
    name: {
      en: "Asilbek Personal Website",
      uz: "Asilbek Shaxsiy Veb-sayti",
      ru: "Персональный сайт Икболшоха",
      tj: "Сомонаи шахсии Иқболшоҳ"
    },
    description: {
      en: "A personal portfolio website showcasing my skills, experience, and projects as a Full-Stack Developer. Built with a modern design to present my work and allow visitors to contact me easily.",
      uz: "Full-Stack Developer sifatidagi ko‘nikmalarim, tajribam va loyihalarimni ko‘rsatish uchun yaratilgan shaxsiy portfolio veb-sayt.",
      ru: "Персональный сайт-портфолио, демонстрирующий мои навыки, опыт и проекты как Full-Stack разработчика.",
      tj: "Сомонаи шахсии портфолио барои нишон додани малакаҳо, таҷриба ва лоиҳаҳои ман ҳамчун Full-Stack developer."
    },
    image: "/images/projects/asilbek-portfolio.png",
    tech: ["React", "TypeScript", "Vite", "TailwindCSS"],
    liveDemo: "https://asilbekdev.uz",
    github: "https://github.com/AsilbekCodes/Portfolio",
    featured: false,
    category: "Frontend"
  },
  {
    id: 21,
    name: {
      en: "JavaScript XO Game",
      uz: "JavaScript XO O‘yini",
      ru: "Игра Крестики-Нолики на JavaScript",
      tj: "Бозии XO бо JavaScript"
    },
    description: {
      en: "A classic Tic-Tac-Toe (XO) game built using HTML, CSS, and JavaScript where two players compete on a 3x3 grid with winner detection, draw handling, and restart functionality.",
      uz: "HTML, CSS va JavaScript yordamida yaratilgan klassik XO (Tic-Tac-Toe) o‘yini. Unda g‘olibni aniqlash, durangni ko‘rsatish va o‘yinni qayta boshlash funksiyalari mavjud.",
      ru: "Классическая игра Крестики-Нолики, созданная с использованием HTML, CSS и JavaScript с определением победителя и возможностью перезапуска.",
      tj: "Бозии классикии XO, ки бо HTML, CSS ва JavaScript сохта шудааст ва муайянкунии ғолиб ва бозоғозиро дастгирӣ мекунад."
    },
    image: "/images/projects/javascript-xo-game.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/javascript-xo-game",
    featured: false,
    category: "Frontend"
  },
  {
    id: 22,
    name: {
      en: "JavaScript Calculator Website",
      uz: "JavaScript Kalkulyator Veb-sayti",
      ru: "Веб-калькулятор на JavaScript",
      tj: "Калкулятори веб бо JavaScript"
    },
    description: {
      en: "A responsive calculator web application built with HTML, CSS, and JavaScript supporting basic arithmetic operations with a clean and intuitive interface.",
      uz: "HTML, CSS va JavaScript yordamida yaratilgan responsiv kalkulyator veb-ilovasi. Unda asosiy arifmetik amallar va qulay foydalanuvchi interfeysi mavjud.",
      ru: "Простое и удобное веб-приложение калькулятора на HTML, CSS и JavaScript с поддержкой основных арифметических операций.",
      tj: "Барномаи веб-калкулятор бо HTML, CSS ва JavaScript, ки амалиётҳои асосии арифметикиро дастгирӣ мекунад."
    },
    image: "/images/projects/javascript-calculator-website.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/javascript-calculator-website",
    featured: false,
    category: "Frontend"
  },
  {
    id: 23,
    name: {
      en: "JavaScript Language Switcher",
      uz: "milli.ai",
      ru: "JavaScript Переключатель языков",
      tj: "Ивазкунандаи забон бо JavaScript"
    },
    description: {
      en: "A lightweight multilingual system built with vanilla JavaScript that dynamically switches website language using JSON files and stores user preference in localStorage.",
      uz: "Sun'iy intellekt asosidagi veb-sayt. HTML, CSS, JavaScript va Bootstrap bilan yaratilgan, AI API orqali ishlaydi. Vanilla JavaScript yordamida qurilgan ko'p tilli tizim JSON fayllar orqali sayt tilini dinamik almashtiradi va foydalanuvchi tilini localStorage'da saqlaydi.",
      ru: "Легкая система мультиязычности на JavaScript, позволяющая переключать язык сайта с помощью JSON файлов и сохранять выбор пользователя.",
      tj: "Системаи бисёрзабона бо JavaScript, ки бо истифодаи JSON файлҳо забони сайтро иваз мекунад ва интихоби корбарро нигоҳ медорад."
    },
    image: "/images/projects/javascript-language-switcher.png",
    tech: ["Html", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/milliai",
    featured: false,
    category: "Frontend"
  },
  {
    id: 24,
    name: {
      en: "Samarkand Travel Guide",
      uz: "Samarqand Sayohat Qo‘llanmasi",
      ru: "Путеводитель по Самарканду",
      tj: "Роҳнамои саёҳат ба Самарқанд"
    },
    description: {
      en: "A responsive tourism website that provides detailed information about the historic city of Samarkand including landmarks, museums, history, and travel attractions.",
      uz: "Samarqand shahri haqida batafsil ma'lumot beruvchi turistik veb-sayt. Unda tarixiy obidalar, muzeylar, sayohat joylari va shahar tarixi haqida ma'lumotlar mavjud.",
      ru: "Туристический сайт о Самарканде, предоставляющий информацию о достопримечательностях, музеях, истории и туристических маршрутах.",
      tj: "Сомонаи туристӣ дар бораи Самарқанд, ки маълумот дар бораи ёдгориҳо, музейҳо ва таърихи шаҳр пешниҳод мекунад."
    },
    image: "/images/projects/samarkand-travel-guide.png",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/samarkand-travel-website",
    featured: false,
    category: "Frontend"
  },
  {
    id: 25,
    name: {
      en: "JavaScript Digital Clock",
      uz: "JavaScript Raqamli Soat",
      ru: "Цифровые часы на JavaScript",
      tj: "Соати рақамӣ бо JavaScript"
    },
    description: {
      en: "A simple digital clock built with HTML, CSS, and JavaScript that displays the current time and updates every second in real-time.",
      uz: "HTML, CSS va JavaScript yordamida yaratilgan oddiy raqamli soat. U real vaqtni ko‘rsatadi va har soniyada avtomatik yangilanadi.",
      ru: "Простые цифровые часы, созданные с использованием HTML, CSS и JavaScript, отображающие текущее время с обновлением каждую секунду.",
      tj: "Соати рақамӣ бо HTML, CSS ва JavaScript, ки вақтро дар вақти воқеӣ нишон медиҳад ва ҳар сония нав мешавад."
    },
    image: "/images/projects/javascript-digital-clock.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/javascript-digital-clock",
    featured: false,
    category: "Frontend"
  },
  {
    id: 26,
    name: {
      en: "JavaScript Countdown Timer",
      uz: "JavaScript Taymer",
      ru: "Таймер обратного отсчета на JavaScript",
      tj: "Таймери ҳисобкунии баръакс бо JavaScript"
    },
    description: {
      en: "A responsive countdown timer built with HTML, CSS, and JavaScript featuring play/pause controls and alert notifications when the timer reaches zero.",
      uz: "HTML, CSS va JavaScript yordamida yaratilgan taymer. Unda countdown funksiyasi, play/pause boshqaruvi va vaqt tugaganda ogohlantirish mavjud.",
      ru: "Таймер обратного отсчета на HTML, CSS и JavaScript с возможностью паузы, продолжения и уведомлением при завершении времени.",
      tj: "Таймери ҳисобкунии баръакс бо HTML, CSS ва JavaScript бо имкони pause/play ва огоҳӣ ҳангоми ба анҷом расидани вақт."
    },
    image: "/images/projects/javascript-timer.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/javascript-countdown-timer",
    featured: false,
    category: "Frontend"
  },
  {
    id: 27,
    name: {
      en: "HTML CSS Login Form",
      uz: "HTML CSS Login Forma",
      ru: "Форма входа HTML CSS",
      tj: "Формаи воридшавӣ HTML CSS"
    },
    description: {
      en: "A modern and responsive login form built using HTML and CSS featuring clean UI design, smooth animations, and customizable components.",
      uz: "HTML va CSS yordamida yaratilgan zamonaviy login forma. Unda responsiv dizayn, animatsiyalar va toza UI elementlari mavjud.",
      ru: "Современная адаптивная форма входа, созданная с использованием HTML и CSS с плавными анимациями и чистым интерфейсом.",
      tj: "Формаи воридшавии замонавӣ бо HTML ва CSS бо тарҳи тоза ва анимацияҳои ҳамвор."
    },
    image: "/images/projects/html-css-login-form.png",
    tech: ["HTML", "CSS", "Responsive Design", "UI Animation"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/html-css-form",
    featured: false,
    category: "Frontend"
  },
  {
    id: 28,
    name: {
      en: "PHP Send Mail System",
      uz: "Avto Sug'urta Online || Onlayn",
      ru: "Система отправки почты на PHP",
      tj: "Системаи фиристодани email бо PHP"
    },
    description: {
      en: "A secure email sending system built with PHP using PHPMailer and SMTP. It includes CSRF protection, AJAX requests, Bootstrap UI, and SweetAlert2 notifications.",
      uz: "PHP asosida ishlab chiqilgan avtomobil va sug'urta xizmatlari uchun Telegram bot. OSAGO/KASKO sug'urta, taxi litsenziya, ishonchnoma va boshqa avtomobil hujjatlarini rasmiylashtirish xizmatlarini taqdim etadi. Bot orqali narxlarni ko'rish va operator bilan bog'lanish imkoniyati mavjud, 24/7 rejimida ishlaydi.",
      ru: "Система отправки email на PHP с использованием PHPMailer и SMTP с защитой CSRF, AJAX запросами и уведомлениями SweetAlert2.",
      tj: "Системаи фиристодани email бо PHP бо истифодаи PHPMailer ва SMTP бо муҳофизати CSRF ва AJAX."
    },
    image: "/images/projects/php-send-mail.png",
    tech: ["PHP","MySQL"],
    liveDemo: 'https://t.me/Sugurta_olish_bot',
    featured: false,
    category: "Backend"
  },
  {
    id: 29,
    name: {
      en: "Kuy Navo Bot | Shazam",
      uz: "Kuy Navo Bot | Shazam",
      ru: "Маркетплейс на PHP и MySQL",
      tj: "Marketplace бо PHP ва MySQL"
    },
    description: {
      en: "An online marketplace platform built with PHP and MySQL where users can buy and sell products, manage listings, search products, and place orders through a shopping cart system.",
      uz: "Ijtimoiy tarmoqlardan video/audio yuklab oluvchi ko'p funksiyali Telegram bot. Instagram, TikTok, YouTube, Snapchat, Likee, Pinterest va Threads'dan suv belgisiz kontent yuklab olish, shuningdek Shazam orqali qo'shiq nomini aniqlash funksiyasi mavjud. Bot guruhlarda ham ishlay oladi.",
      ru: "Онлайн маркетплейс на PHP и MySQL, позволяющий пользователям размещать товары, искать продукты, добавлять их в корзину и оформлять заказы.",
      tj: "Платформаи marketplace бо PHP ва MySQL, ки имкон медиҳад корбарон маҳсулот илова кунанд, ҷустуҷӯ кунанд ва фармоиш диҳанд."
    },
    image: "/images/projects/php-auth-master.png",
    tech: ["Python", "MySQL", "Django"],
    liveDemo: 'https://t.me/kuynavobot',
    featured: true,
    category: "Full-Stack"
  },
{
  id: 30,
  name: {
    en: "MegaDrive PDF Bot",
    uz: "MegaDrive PDF Bot",
    ru: "MegaDrive PDF Bot",
    tj: "MegaDrive PDF Bot"
  },
  description: {
    en: "A Telegram bot that converts photos into PDF files and provides a built-in file manager (MegaDrive) for storing and organizing uploaded files. Supports easy switching between upload and conversion modes via commands.",
    uz: "Rasmlarni PDF faylga aylantiruvchi Telegram bot. Yuklangan fayllarni saqlash va boshqarish uchun o'rnatilgan MegaDrive fayl menejeriga ega. Buyruqlar orqali yuklash va konvertatsiya rejimlari o'rtasida qulay almashtirish imkonini beradi.",
    ru: "Telegram-бот для конвертации фотографий в PDF-файлы. Имеет встроенный файловый менеджер MegaDrive для хранения и организации загруженных файлов. Поддерживает удобное переключение между режимами загрузки и конвертации с помощью команд.",
    tj: "Боти Telegram барои табдил додани аксҳо ба файли PDF. Дорои менеҷери файлии дарунсохти MegaDrive барои нигоҳдорӣ ва ташкили файлҳои боркардашуда. Тавассути фармонҳо байни ҳолатҳои боркунӣ ва конвертатсия иваз кардан мумкин аст."
  },
  image: "/images/projects/megadrive-pdf-bot.png",
  tech: ["Python"],
  liveDemo: 'https://t.me/MegaDrivePdf_bot',
  featured: false,
  category: "Backend"
},
  {
    id: 31,
    name: {
      en: "PHP Ninja Multiplayer Game",
      uz: "PHP Ninja Multiplayer O'yini",
      ru: "Мультиплеерная игра Ninja на PHP",
      tj: "Бозии multiplayer Ninja бо PHP"
    },
    description: {
      en: "A multiplayer browser game built with PHP where users can create unique game links and invite others to play simultaneously. The system includes authentication, leaderboard, and game management features.",
      uz: "PHP yordamida yaratilgan multiplayer brauzer o‘yini. Foydalanuvchilar maxsus o‘yin linki yaratib boshqalarni taklif qilishi va bir vaqtning o‘zida o‘ynashi mumkin. Tizimda login, leaderboard va o‘yin boshqaruvi mavjud.",
      ru: "Мультиплеерная браузерная игра на PHP, где пользователи могут создавать уникальные ссылки и приглашать других игроков для совместной игры.",
      tj: "Бозии multiplayer дар браузер бо PHP, ки корбарон метавонанд линк эҷод кунанд ва дигаронро барои бозӣ даъват намоянд."
    },
    image: "/images/projects/php-ninja-game.png",
    tech: ["PHP", "JavaScript", "MySQL", "Multiplayer", "Game Logic"],
    liveDemo: null,
    github: "https://github.com/AsilbekCodes/php-ninja-game",
    featured: false,
    category: "Full-Stack"
  },
  {
  id: 32,
  name: {
    en: "Group Help Bot",
    uz: "Group Help Bot",
    ru: "Group Help Bot",
    tj: "Group Help Bot"
  },
  description: {
    en: "An advanced Telegram bot for managing groups easily and securely. Once added as an admin, it provides a wide range of moderation and management commands to help admins keep their groups organized and safe.",
    uz: "Guruhlaringizni oson va xavfsiz boshqarish uchun mo'ljallangan ilg'or Telegram bot. Botni guruhga admin sifatida qo'shgach, adminlarga guruhni tartibli va xavfsiz saqlash uchun keng qamrovli moderatsiya va boshqaruv buyruqlari taqdim etiladi.",
    ru: "Продвинутый Telegram-бот для лёгкого и безопасного управления группами. После добавления бота с правами администратора он предоставляет широкий набор команд модерации и управления для поддержания порядка и безопасности в группе.",
    tj: "Боти пешрафтаи Telegram барои идоракунии осон ва бехатари гурӯҳҳо. Пас аз илова кардани бот ҳамчун админ, он маҷмӯи васеи фармонҳои модератсия ва идоракуниро барои нигоҳ доштани тартиб ва бехатарии гурӯҳ пешниҳод мекунад."
  },
  image: "/images/projects/grouphelpbot.png",
  tech: ["Python"],
  liveDemo: 'https://t.me/GHelpUzorgBot',
  featured: false,
  category: "Backend"
},
];

// Highlights
export const highlights = [
  {
    icon: Award,
    text: {
      en: "Three or more years of hands-on programming experience",
      uz: "Uch yoki undan ortiq yillik amaliy dasturlash tajribasi",
      ru: "Три или более лет практического опыта программирования",
      tj: "Се ё зиёда сол таҷрибаи амалии барномасозӣ",
    },
  },
  {
    icon: Compass,
    text: {
      en: "Guided by purpose and grounded in values",
      uz: "Maqsad bilan yo‘naltirilgan va qadriyatlarga asoslangan",
      ru: "Руководствуюсь целью и опираюсь на ценности",
      tj: "Бо мақсад роҳнамоӣ шуда ва ба арзишҳо такя мекунад",
    },
  },
  {
    icon: Lightbulb,
    text: {
      en: "Transforming complex ideas into clean and efficient code",
      uz: "Murakkab g‘oyalarni toza va samarali kodga aylantirish",
      ru: "Превращение сложных идей в чистый и эффективный код",
      tj: "Табдили ғояҳои мураккаб ба коди тоза ва самаранок",
    },
  },
  {
    icon: HeartHandshake,
    text: {
      en: "Providing mentorship with sincerity and growing through meaningful impact",
      uz: "Samimiylik bilan mentorlik qilish va mazmunli ta’sir orqali o‘sish",
      ru: "Искреннее наставничество и профессиональный рост через значимое влияние",
      tj: "Пешниҳоди менторинг бо самимият ва рушд тавассути таъсири пурмазмун",
    },
  },
  {
    icon: ShieldCheck,
    text: {
      en: "Dedicated to ethical principles and secure technology practices",
      uz: "Axloqiy tamoyillar va xavfsiz texnologik amaliyotlarga sodiqman",
      ru: "Привержен этическим принципам и безопасным технологиям",
      tj: "Ба принсипҳои ахлоқӣ ва таҷрибаҳои бехатари технологӣ содиқам",
    },
  },
  {
    icon: Rocket,
    text: {
      en: "Founder of the asilmedia.org Software-as-a-Service platform",
      uz: "asilmedia.org SaaS (Software-as-a-Service) platformasi asoschisi",
      ru: "Основатель платформы Software-as-a-Service asilmedia.org",
      tj: "Муассиси платформаи Software-as-a-Service asilmedia.org",
    },
  },
];

// Journey
export const journey = [
  {
    year: "2022",
    title: {
      en: "Started University",
      uz: "Dasturlashni Mohir Dev platformasida o'rganishni boshladim",
      ru: "Начало обучения в университете",
      tj: "Оғози донишгоҳ"
    },
    description: {
      en: "Began Software Engineering at Samarkand State University",
      uz: "Dasturiy Injenering yo'nalishida o'qishni boshladim, shu bilan birga Mohir Dev platformasida dasturlashni ham o'rgana boshladim",
      ru: "Начал изучать программную инженерию в Самаркандском Государственном Университете",
      tj: "Муҳандисии нармафзорро дар Донишгоҳи Давлатии Самарқанд оғоз кардам"
    }
  },
  {
    year: "2022",
    title: {
      en: "Frontend Foundations",
      uz: "Frontend asoslari",
      ru: "Основы Frontend",
      tj: "Асосҳои Frontend"
    },
    description: {
      en: "Started learning HTML, CSS, JavaScript, and React—my first step into the frontend world",
      uz: "HTML, CSS, JavaScript va Reactni o‘rganishni boshladim — bu mening frontend dunyosiga birinchi qadamim edi",
      ru: "Начал изучать HTML, CSS, JavaScript и React — мой первый шаг в мир фронтенда",
      tj: "Омӯзиши HTML, CSS, JavaScript ва React-ро оғоз кардам — қадами аввалини ман ба ҷаҳони frontend"
    }
  },
  {
    year: "2023",
    title: {
      en: "Backend Breakthrough",
      uz: "Backend rivojlanishi",
      ru: "Прорыв в Backend",
      tj: "Пешравии Backend"
    },
    description: {
      en: "Dived into Laravel and REST APIs, fell in love with backend development",
      uz: "Laravel va REST API-larni chuqur o‘rgandim va backend dasturlashga mehrim tushdi",
      ru: "Погрузился в изучение Laravel и REST API, влюбился в бэкенд-разработку",
      tj: "Ба омӯзиши Laravel ва REST API дохил шудам ва ба таҳияи backend дилбастагӣ пайдо кардам"
    }
  },
  {
    year: "2023",
    title: {
      en: "First Real Freelance Project",
      uz: "Birinchi haqiqiy frilans loyiha",
      ru: "Первый реальный фриланс-проект",
      tj: "Аввалин лоиҳаи воқеии фриланс"
    },
    description: {
      en: "Completed a full-stack client project from scratch using Laravel and React",
      uz: "Laravel va React yordamida mijozning to'liq (full-stack) loyihasini noldan tugatdim",
      ru: "С нуля выполнил full-stack клиентский проект с использованием Laravel и React",
      tj: "Лоиҳаи пурраи муштариро бо истифода аз Laravel ва React аз сифр анҷом додам"
    }
  },
  {
    year: "2024",
    title: {
      en: "Contributed to Open Source",
      uz: "Open Source’ga hissa",
      ru: "Вклад в Open Source",
      tj: "Саҳм дар Open Source"
    },
    description: {
      en: "Published several public repositories and joined global developer communities",
      uz: "Bir nechta ochiq repozitoriylarni nashr qildim va global dasturchilar hamjamiyatlariga qo‘shildim",
      ru: "Опубликовал несколько открытых репозиториев и присоединился к мировым сообществам разработчиков",
      tj: "Якчанд репозиторийҳои оммавиро нашр кардам ва ба ҷомеаҳои глобалии таҳиягарон пайвастам"
    }
  },
  {
    year: "2024",
    title: {
      en: "Portfolio and Personal Website",
      uz: "Portfolio va shaxsiy veb-sayt",
      ru: "Портфолио и личный сайт",
      tj: "Портфолио ва вебсайти шахсӣ"
    },
    description: {
      en: "Launched asilbekdev.uz to showcase my work, applications, and skills",
      uz: "O'z ishlarim, ilovalarim va ko‘nikmalarimni namoyish etish uchun asilbekdev.uz saytini ishga tushirdim",
      ru: "Запустил сайт asilbekdev.uz для демонстрации своих работ, приложений и навыков",
      tj: "Барои намоиши корҳо, барномаҳо ва малакаҳои худ asilbekdev.uz-ро ба кор даровардам"
    }
  },
  {
    year: "2025",
    title: {
      en: "Mentored Over 70 Developers",
      uz: "Junior Web Dasturchi",
      ru: "Обучил более 70 разработчиков",
      tj: "Ба зиёда аз 70 таҳиягарон устодӣ кардам"
    },
    description: {
      en: "Taught software development from scratch using C++, React, and Laravel through practical lessons",
      uz: "Turli veb-loyihalarda ishladim, asosan frontend qismiga e’tibor qaratdim.",
      ru: "Обучал разработке программного обеспечения с нуля на C++, React и Laravel через практические уроки",
      tj: "Тавассути дарсҳои амалӣ таҳияи нармафзорро аз сифр бо истифодаи C++, React ва Laravel омӯзонидам"
    }
  },
  {
    year: "2025",
    title: {
      en: "1000+ Public Projects",
      uz: "1000+ Ochiq loyihalar",
      ru: "1000+ Открытых проектов",
      tj: "1000+ Лоиҳаҳои оммавӣ"
    },
    description: {
      en: "Published over 50 open-source/public projects on GitHub and other platforms",
      uz: "GitHub va boshqa platformalarda 50 dan ortiq ochiq manbali/ommaviy loyihalarni e'lon qildim",
      ru: "Опубликовал более 50 open-source проектов на GitHub и других платформах",
      tj: "Дар GitHub ва дигар платформаҳо зиёда аз 50 лоиҳаи кушодаасос/оммавиро нашр кардам"
    }
  },
  {
    year: "2025",
    title: {
      en: "Educational Content Creator",
      uz: "Ta'limiy kontent yaratuvchisi",
      ru: "Создатель образовательного контента",
      tj: "Эҷодкори мундариҷаи таълимӣ"
    },
    description: {
      en: "Started sharing free software tutorials on Instagram and YouTube",
      uz: "Instagram va YouTube tarmog'ida bepul dasturlash darsliklarini ulashishni boshladim",
      ru: "Начал публиковать бесплатные уроки по программированию в Instagram и YouTube",
      tj: "Мубодилаи дарсҳои ройгони нармафзорро дар Instagram ва YouTube оғоз кардам"
    }
  },
  {
    year: "2025",
    title: {
      en: "Freelance Career Growth",
      uz: "Frilansdagi karyera o'sishi",
      ru: "Карьерный рост во фрилансе",
      tj: "Афзоиши касб дар фриланс"
    },
    description: {
      en: "Worked with multiple clients to build real-world digital solutions",
      uz: "Haqiqiy raqamli yechimlarni yaratish bo'yicha ko'plab mijozlar bilan ishladim",
      ru: "Работал с множеством клиентов над созданием реальных цифровых решений",
      tj: "Бо муштариёни сершумор барои сохтани ҳалли воқеии рақамӣ ҳамкорӣ кардам"
    }
  },
  {
    year: "2026",
    title: {
      en: "AsilMedia.org",
      uz: "AsilMedia.org",
      ru: "AsilMedia.org",
      tj: "AsilMedia.org"
    },
    description: {
      en: "Founded and developed AsilMedia.org, an online platform for streaming and downloading dubbed movies, series, and cartoons in Uzbek, free and in HD quality.",
      uz: "AsilMedia.org platformasini — o'zbek tilidagi tarjima kinolar, seriallar va multfilmlarni bepul, HD sifatda onlayn tomosha qilish yoki yuklab olish imkonini beruvchi zamonaviy sayt.",
      ru: "Создал платформу AsilMedia.org — сайт для бесплатного онлайн-просмотра и скачивания фильмов, сериалов и мультфильмов с озвучкой на узбекском языке в HD качестве.",
      tj: "Платформаи AsilMedia.org-ро сохтам — сомонае барои тамошои онлайн ва боргирии ройгони филмҳо, сериалҳо ва мультфилмҳо бо тарҷумаи забони узбекӣ бо сифати HD."
    }
  },
];

// Beyond
export const beyond = [
  {
    icon: GraduationCap,
    title: {
      en: "Mentoring",
      uz: "Ustozlik",
      ru: "Наставничество",
      tj: "Менторинг"
    },
    description: {
      en: "Taught more than twenty students from scratch in C++, frontend, and backend through structured lessons, real projects, and practical support.",
      uz: "Yigirmadan ortiq talabalarga tizimli darslar, haqiqiy loyihalar va amaliy ko'mak orqali C++, frontend va backendni noldan o'rgatdim.",
      ru: "Обучил более двадцати студентов с нуля программированию на C++, фронтенду и бэкенду с помощью структурированных уроков, реальных проектов и практической поддержки.",
      tj: "Ба зиёда аз бист донишҷӯ аз сифр C++, frontend ва backend-ро тавассути дарсҳои сохторӣ, лоиҳаҳои воқеӣ ва дастгирии амалӣ омӯзонидам."
    }
  },
  {
    icon: Code2,
    title: {
      en: "Open Source Contributions",
      uz: "Ochiq kodli dasturlarga hissa",
      ru: "Вклад в Open Source",
      tj: "Саҳмгузорӣ дар Open Source"
    },
    description: {
      en: "Actively contribute to GitHub by sharing open repositories, reusable code, templates, and development tools that support the programming community.",
      uz: "Ochiq repozitoriylar, qayta ishlatiladigan kodlar, shablonlar va dasturlash asboblarini baham ko'rish orqali GitHub'ga faol hissa qo'shaman.",
      ru: "Активно вношу вклад в GitHub, делясь открытыми репозиториями, переиспользуемым кодом, шаблонами и инструментами разработки.",
      tj: "Тавассути мубодилаи репозиторийҳои кушода, коди такроран истифодашаванда, қолабҳо ва абзорҳои таҳия дар GitHub саҳми фаъол мегузорам."
    }
  },
  {
    icon: HeartHandshake,
    title: {
      en: "Ethical Technology",
      uz: "Axloqiy texnologiya",
      ru: "Этичные технологии",
      tj: "Технологияи ахлоқӣ"
    },
    description: {
      en: "I develop software that protects user privacy, upholds moral values, and contributes to solving social problems with good intentions.",
      uz: "Foydalanuvchi maxfiyligini himoya qiluvchi, axloqiy qadriyatlarni qo'llab-quvvatlovchi va ezgu niyatlar bilan ijtimoiy muammolarni hal qilishga yordam beruvchi dasturlar yarataman.",
      ru: "Я разрабатываю программное обеспечение, которое защищает конфиденциальность пользователей, поддерживает моральные ценности и помогает решать социальные проблемы с добрыми намерениями.",
      tj: "Ман нармафзоре таҳия мекунам, ки махфияти корбаронро ҳифз мекунад, арзишҳои ахлоқиро дастгирӣ мекунад ва ба ҳалли мушкилоти иҷтимоӣ бо ниятҳои нек мусоидат мекунад."
    }
  },
  {
    icon: MessageCircle,
    title: {
      en: "Community Engagement",
      uz: "Hamjamiyat bilan ishlash",
      ru: "Участие в сообществе",
      tj: "Фаъолият дар ҷомеа"
    },
    description: {
      en: "Regularly publish tutorials, programming tips, and developer lifestyle content on Instagram and YouTube to educate and inspire others.",
      uz: "Boshqalarga o'rgatish va ilhomlantirish uchun Instagram va YouTube'da muntazam darsliklar, dasturlash maslahatlari va dasturchi hayoti haqida kontent nashr etaman.",
      ru: "Регулярно публикую обучающие материалы, советы по программированию и контент о жизни разработчика в Instagram и YouTube, чтобы обучать и вдохновлять других.",
      tj: "Барои таълим ва илҳом бахшидан ба дигарон, дар Instagram ва YouTube мунтазам дарсҳо, маслиҳатҳои барномасозӣ ва мундариҷаи ҳаёти таҳиягаронро нашр мекунам."
    }
  },
  {
    icon: BookOpenCheck,
    title: {
      en: "Lifelong Learning",
      uz: "Uzluksiz ta'lim",
      ru: "Пожизненное обучение",
      tj: "Омӯзиши якумра"
    },
    description: {
      en: "I continuously invest time in learning—from upgrading Laravel to mastering TypeScript—focusing on daily improvement and professional growth.",
      uz: "Nodejs'ni yangilashdan tortib TypeScript'ni mukammal o'zlashtirishgacha o'rganishga doimiy vaqt ajrataman — kunlik rivojlanish va kasbiy o'sishga e'tibor qarataman.",
      ru: "Я постоянно инвестирую время в обучение — от обновления Laravel до освоения TypeScript — сосредотачиваясь на ежедневном улучшении и профессиональном росте.",
      tj: "Ман ҳамеша барои омӯзиш вақт ҷудо мекунам — аз навсозии Laravel то азхудкунии TypeScript — ба беҳтаршавии ҳаррӯза ва рушди касбӣ диққат медиҳам."
    }
  }
];

// Services
export const services = [
  {
    id: 1,
    category: "frontend",
    icon: Palette,
    price: "1 200 000+ UZS",
    title: {
      en: "UI/UX Design",
      uz: "UI/UX Dizayn",
      ru: "UI/UX дизайн",
      tj: "Тарроҳии UI/UX"
    },
    description: {
      en: "Clean, modern, pixel-perfect interfaces with Tailwind CSS and Figma.",
      uz: "Tailwind CSS va Figma yordamida toza, zamonaviy va piksellarigacha aniq interfeyslar.",
      ru: "Чистые, современные и точные до пикселя интерфейсы с использованием Tailwind CSS и Figma.",
      tj: "Интерфейсҳои тоза, муосир ва дақиқ бо истифодаи Tailwind CSS ва Figma."
    },
    tech: ["Frontend", "Figma", "Tailwind"],
    features: {
      en: ["Figma to Code", "Mobile First", "Tailwind CSS", "Modern Aesthetic"],
      uz: ["Figma'dan Kodga", "Mobil qurilmalar uchun mos", "Tailwind CSS", "Zamonaviy estetika"],
      ru: ["Из Figma в код", "Mobile First", "Tailwind CSS", "Современная эстетика"],
      tj: ["Аз Figma ба Код", "Барои мобилӣ мувофиқ", "Tailwind CSS", "Эстетикаи муосир"]
    }
  },
  {
    id: 2,
    category: "backend",
    icon: Network,
    price: "1 800 000+ UZS",
    title: {
      en: "Custom API Services",
      uz: "Maxsus API xizmatlari",
      ru: "Пользовательские API сервисы",
      tj: "Хизматрасониҳои махсуси API"
    },
    description: {
      en: "Secure and scalable RESTful APIs for mobile and web apps.",
      uz: "Mobil va veb ilovalar uchun xavfsiz va kengaytiriladigan RESTful API-lar.",
      ru: "Безопасные и масштабируемые RESTful API для мобильных и веб-приложений.",
      tj: "API-ҳои бехатар ва васеъшавандаи RESTful барои барномаҳои мобилӣ ва веб."
    },
    features: {
      en: ["Custom Routes", "JWT", "Secure Tokens", "Error Handling"],
      uz: ["Maxsus yo'nalishlar", "JWT", "Xavfsiz tokenlar", "Xatoliklarni boshqarish"],
      ru: ["Кастомные маршруты", "JWT", "Безопасные токены", "Обработка ошибок"],
      tj: ["Хатсайрҳои махсус", "JWT", "Токенҳои бехатар", "Идоракунии хатогиҳо"]
    }
  },
  {
    id: 3,
    category: "backend",
    icon: ShieldCheck,
    price: "2 500 000+ UZS",
    title: {
      en: "Security Optimization",
      uz: "Xavfsizlikni optimallashtirish",
      ru: "Оптимизация безопасности",
      tj: "Оптимизатсияи амният"
    },
    description: {
      en: "Hardening web apps with secure headers, validations, and attack protection.",
      uz: "Xavfsiz sarlavhalar, tekshiruvlar va hujumlardan himoya qilish bilan veb-ilovalarni kuchaytirish.",
      ru: "Укрепление веб-приложений с помощью безопасных заголовков, валидации и защиты от атак.",
      tj: "Мустаҳкамкунии барномаҳои веб бо сарлавҳаҳои бехатар, валидатсия ва муҳофизат аз ҳамлаҳо."
    },
    features: {
      en: ["Validation", "Rate Limiting", "Secure Headers", "CSRF/XSS Defense"],
      uz: ["Validatsiya", "So'rovlar chegarasi", "Xavfsiz sarlavhalar", "CSRF/XSS himoyasi"],
      ru: ["Валидация", "Ограничение скорости", "Безопасные заголовки", "Защита от CSRF/XSS"],
      tj: ["Валидатсия", "Маҳдудияти суръат", "Сарлавҳаҳои бехатар", "Муҳофизати CSRF/XSS"]
    }
  },
  {
    id: 4,
    category: "frontend",
    icon: Monitor,
    price: "2 500 000+ UZS",
    title: {
      en: "Basic Frontend Website",
      uz: "Oddiy Frontend sayt",
      ru: "Базовый Frontend сайт",
      tj: "Вебсайти оддии Frontend"
    },
    description: {
      en: "Responsive 3-page static website, perfect for portfolios and personal brands.",
      uz: "Portfoliolar va shaxsiy brendlar uchun mukammal bo'lgan moslashuvchan (responsive) 3 sahifali statik veb-sayt.",
      ru: "Адаптивный 3-страничный статический сайт, идеально подходящий для портфолио и личных брендов.",
      tj: "Вебсайти статикии 3-саҳифагӣ, комил барои портфолио ва брендҳои шахсӣ."
    },
    tech: ["Frontend", "HTML", "CSS", "JavaScript"],
    features: {
      en: ["3 Pages", "Responsive Design", "SEO Friendly", "Performance Optimized"],
      uz: ["3 ta sahifa", "Moslashuvchan dizayn", "SEO qulay", "Tezlik optimallashtirilgan"],
      ru: ["3 страницы", "Адаптивный дизайн", "SEO оптимизация", "Оптимизация производительности"],
      tj: ["3 Саҳифа", "Тарроҳии ҷавобгӯ", "Дӯстона бо SEO", "Иҷрои оптимизатсияшуда"]
    }
  },
  {
    id: 5,
    category: "special",
    icon: Bot,
    price: "3 500 000+ UZS",
    title: {
      en: "Chatbot Development",
      uz: "Chatbot yaratish",
      ru: "Разработка чат-ботов",
      tj: "Таҳияи чатботҳо"
    },
    description: {
      en: "Telegram or web chatbots to automate support, orders, and interaction.",
      uz: "Qo'llab-quvvatlash, buyurtmalar va o'zaro aloqani avtomatlashtirish uchun Telegram yoki veb chatbotlar.",
      ru: "Telegram или веб чат-боты для автоматизации поддержки, заказов и взаимодействия.",
      tj: "Чатботҳои Telegram ё веб барои автоматикунонии дастгирӣ, фармоишҳо ва ҳамкорӣ."
    },
    features: {
      en: ["Telegram Bot", "Web Chatbot", "Webhook", "AI Logic"],
      uz: ["Telegram bot", "Veb Chatbot", "Webhook", "AI mantiq"],
      ru: ["Telegram-бот", "Веб-чатбот", "Webhook", "ИИ логика"],
      tj: ["Telegram Bot", "Web Chatbot", "Webhook", "Мантиқи AI"]
    }
  },
  {
    id: 6,
    category: "frontend",
    icon: Layout,
    price: "5 000 000+ UZS",
    title: {
      en: "Advanced Frontend Website",
      uz: "Kengaytirilgan Frontend sayt",
      ru: "Продвинутый Frontend сайт",
      tj: "Вебсайти пешрафтаи Frontend"
    },
    description: {
      en: "Multi-page frontend site with animations, effects, and premium layout.",
      uz: "Animatsiyalar, effektlar va premium dizaynga ega ko'p sahifali frontend sayt.",
      ru: "Многостраничный frontend сайт с анимациями, эффектами и премиум-дизайном.",
      tj: "Сайти бисёрсаҳифагии frontend бо аниматсияҳо, эффектҳо ва тарҳбандии премиум."
    },
    tech: ["Frontend", "React", "Framer Motion"],
    features: {
      en: ["Animations", "Custom Layouts", "Scroll Effects", "Multiple Pages"],
      uz: ["Animatsiyalar", "Maxsus tuzilmalar", "Aylantirish effektlari", "Ko'p sahifali"],
      ru: ["Анимации", "Пользовательские макеты", "Эффекты прокрутки", "Многостраничность"],
      tj: ["Аниматсияҳо", "Тарҳҳои махсус", "Эффектҳои ҳаракат", "Саҳифаҳои сершумор"]
    }
  },
  {
    id: 7,
    category: "fullstack",
    icon: Server,
    price: "6 000 000+ UZS",
    title: {
      en: "Dynamic Website",
      uz: "Dinamik veb-sayt",
      ru: "Динамический сайт",
      tj: "Вебсайти динамикӣ"
    },
    description: {
      en: "Fully dynamic website using Laravel and React for interactive experience.",
      uz: "Interaktiv tajriba uchun Laravel va React yordamida to'liq dinamik veb-sayt.",
      ru: "Полностью динамический сайт с использованием Laravel и React для интерактивного опыта.",
      tj: "Вебсайти комилан динамикӣ бо истифодаи Laravel ва React барои таҷрибаи интерактивӣ."
    },
    tech: ["FullStack", "Laravel", "React"],
    features: {
      en: ["Laravel + React", "Interactive UI", "Form Handling", "Database Connected"],
      uz: ["Laravel + React", "Interaktiv UI", "Formalarni ishlash", "Ma'lumotlar bazasiga ulangan"],
      ru: ["Laravel + React", "Интерактивный UI", "Обработка форм", "Подключенная БД"],
      tj: ["Laravel + React", "UI интерактивӣ", "Коркарди шаклҳо", "Пайваст ба пойгоҳи додаҳо"]
    }
  },
  {
    id: 8,
    category: "backend",
    icon: Database,
    price: "7 500 000+ UZS",
    title: {
      en: "Backend + Admin Panel",
      uz: "Backend + Admin panel",
      ru: "Backend + Админ панель",
      tj: "Backend + Панели администратор"
    },
    description: {
      en: "Custom backend system with admin dashboard, user management, and secure API.",
      uz: "Boshqaruv paneli, foydalanuvchilarni boshqarish va xavfsiz API bilan maxsus backend tizimi.",
      ru: "Пользовательская backend система с панелью администратора, управлением пользователями и безопасным API.",
      tj: "Системаи махсуси backend бо панели маъмурӣ, идоракунии корбарон ва API бехатар."
    },
    features: {
      en: ["Admin Panel", "User Management", "JWT Auth", "REST API"],
      uz: ["Admin panel", "Foydalanuvchilarni boshqarish", "JWT avtorizatsiya", "REST API"],
      ru: ["Админ панель", "Управление пользователями", "JWT авторизация", "REST API"],
      tj: ["Панели маъмурӣ", "Идоракунии корбарон", "Аутентификатсияи JWT", "REST API"]
    }
  },
  {
    id: 9,
    category: "fullstack",
    icon: Code,
    price: "11 000 000+ UZS",
    title: {
      en: "Full-Stack Application",
      uz: "Full-Stack ilova",
      ru: "Full-Stack приложение",
      tj: "Барномаи Full-Stack"
    },
    description: {
      en: "End-to-end app with full frontend and backend logic — ideal for startups.",
      uz: "To'liq frontend va backend mantig'iga ega keng qamrovli ilova — startaplar uchun ideal.",
      ru: "Комплексное приложение с полной логикой frontend и backend — идеально для стартапов.",
      tj: "Барномаи мукаммал бо мантиқи пурраи frontend ва backend — беҳтарин барои стартапҳо."
    },
    features: {
      en: ["Full Flow", "Laravel + React", "Advanced Auth", "Scalable DB"],
      uz: ["To'liq oqim", "Laravel + React", "Murakkab avtorizatsiya", "Kengaytiriladigan bazalar"],
      ru: ["Полный цикл", "Laravel + React", "Продвинутая авторизация", "Масштабируемая БД"],
      tj: ["Ҷараёни пурра", "Laravel + React", "Аутентификатсияи пешрафта", "Махзани васеъшаванда"]
    }
  }
];

// Process Steps
export const processSteps = [
  {
    step: "01",
    title: {
      en: "Discovery",
      uz: "O'rganish",
      ru: "Изучение",
      tj: "Омӯзиш"
    },
    description: {
      en: "Understanding your requirements, goals, and target audience",
      uz: "Sizning talablaringiz, maqsadlaringiz va maqsadli auditoriyangizni tushunish",
      ru: "Понимание ваших требований, целей и целевой аудитории",
      tj: "Фаҳмидани талабот, ҳадафҳо ва шунавандагони мақсадноки шумо"
    }
  },
  {
    step: "02",
    title: {
      en: "Planning",
      uz: "Rejalashtirish",
      ru: "Планирование",
      tj: "Банақшагирӣ"
    },
    description: {
      en: "Creating a detailed project roadmap and technical architecture",
      uz: "Batafsil loyiha xaritasi va texnik arxitekturani yaratish",
      ru: "Создание подробной дорожной карты проекта и технической архитектуры",
      tj: "Таҳияи харитаи муфассали лоиҳа ва меъмории техникӣ"
    }
  },
  {
    step: "03",
    title: {
      en: "Development",
      uz: "Ishlab chiqish",
      ru: "Разработка",
      tj: "Таҳия"
    },
    description: {
      en: "Building your solution with clean, scalable, and maintainable code",
      uz: "Toza, kengaytiriladigan va saqlash oson bo'lgan kod bilan yechimingizni yaratish",
      ru: "Создание вашего решения с чистым, масштабируемым и поддерживаемым кодом",
      tj: "Сохтани ҳалли шумо бо коди тоза, васеъшаванда ва қобили нигоҳдорӣ"
    }
  },
  {
    step: "04",
    title: {
      en: "Delivery",
      uz: "Topshirish",
      ru: "Сдача проекта",
      tj: "Супоридан"
    },
    description: {
      en: "Testing, deployment, and ongoing support to ensure success",
      uz: "Muvaffaqiyatni ta'minlash uchun sinovdan o'tkazish, joylashtirish va doimiy qo'llab-quvvatlash",
      ru: "Тестирование, развертывание и постоянная поддержка для обеспечения успеха",
      tj: "Санҷиш, татбиқ ва дастгирии доимӣ барои таъмини муваффақият"
    }
  }
];

// Blog Posts
export const blogPosts = [
  {
    id: 1,
    title: {
      en: "The New Look of asilbekdev.uz – A Digital Masterpiece",
      uz: "Yangi asilbekdev.uz – Raqamli san’at asari",
      ru: "Новый asilbekdev.uz – Цифровой шедевр",
      tj: "asilbekdev.uz-и нав – Шоҳкори рақамӣ"
    },
    excerpt: {
      en: "Today, asilbekdev.uz got a stunning redesign! A clean UI, elegant layout, powerful multilingual support, and vibrant animations make it a must-see portfolio for developers and clients alike. From the moment you land on the homepage, you are greeted with fluid transitions, clear sections, and intuitive navigation. It reflects not just the skills of a developer, but the vision of a brand. Designed with React and Laravel, it balances beauty with functionality, bringing every element to life. Whether you're a potential client or a curious coder, this site will leave you inspired and impressed.",
      uz: "Bugun asilbekdev.uz sayti hayratlanarli darajada yangilandi! Toza interfeys, nafis tuzilma, kuchli ko‘p tilli qo‘llab-quvvatlash va jonli animatsiyalar uni har qanday dasturchi va mijoz uchun ko‘rishga arzigulik portfelga aylantiradi. Bosh sahifaga kirgan zahoti, silliq o‘tishlar, aniq bo‘limlar va tushunarli navigatsiya ko‘zingizga tashlanadi. Bu nafaqat dasturchi mahoratini, balki shaxsiy brend qarashini ham aks ettiradi. React va Laravel asosida ishlab chiqilgan bu sayt funksionallik va estetikani uyg‘unlashtirib, har bir elementni jonlantiradi. Siz mijoz bo‘lasizmi yoki shunchaki o‘rganayotgan dasturchi — bu sayt sizni ilhomlantiradi va qoyil qoldiradi.",
      ru: "Сегодня сайт asilbekdev.uz получил потрясающий редизайн! Чистый пользовательский интерфейс, элегантная структура, мощная многоязычная поддержка и яркие анимации делают его портфолио, которое обязательно стоит увидеть как разработчикам, так и клиентам. С первой секунды на главной странице вас встречают плавные переходы, логично структурированные блоки и интуитивная навигация. Этот сайт отражает не только технические навыки разработчика, но и стратегическое видение личного бренда. Построенный на базе React и Laravel, он гармонично сочетает красоту с функциональностью. Будь вы клиент или программист — вы обязательно вдохновитесь этим шедевром.",
      tj: "Имрӯз сомонаи asilbekdev.uz бо намуди нави аҷиб навсозӣ гардид! Интерфейси тоза, тарҳи зебо, дастгирии пурқуввати бисёрзабона ва аниматсияҳои рангин онро ба як портфолои воқеан арзандаи дидан барои ҳам барномасозон ва ҳам муштариён табдил додаанд. Аз лаҳзаи аввал, ки ба саҳифаи асосӣ ворид мешавед, гузаришҳои мулоим, қисмҳои возеҳ ва роҳнамоии фаҳмост. Ин сомона на танҳо маҳоратҳои техникии барномасозро нишон медиҳад, балки диди равшани шахсии ӯро низ. Бо истифода аз React ва Laravel сохта шудааст ва зебоӣ ва функсионалиятро ба таври мутавозин муттаҳид мекунад. Новобаста аз он ки шумо муштарӣ ҳастед ё шогирди ҳаваскор — ин сомона шуморо илҳом мебахшад ва дар таассур мегузорад."
    },
    featured: false,
    date: "2025-06-26",
    tags: ["Portfolio", "Design", "Branding"],
    image: "/images/blogs/blog-1.png",
    slug: "new-design-asilbekdev-uz"
  }
];