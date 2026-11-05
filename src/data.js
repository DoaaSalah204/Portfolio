// All the text and links of the site live here. Edit this file to change the content.

export const profile = {
  name: 'Doaa Salah',
  location: 'Beheira, Egypt',
  email: 'frog2042003@gmail.com',
  linkedin: 'https://www.linkedin.com/in/doaa-salah-ba3b68272',
  // Leave github or cv empty to hide its row in the Contact section.
  github: 'https://github.com/DoaaSalah204',
  cv: '/Doaa_Salah_CV.pdf',
}

export const marqueeWords = [
  'React', 'Vite', 'JavaScript', 'Node.js', 'HTML and CSS', 'Python', 'Java', 'C++',
  'Responsive design', 'RTL layouts', 'Dark mode', 'Admin dashboards', 'Networking basics',
]

// `mock` picks the laptop + phone illustration. A project with `shots` shows a screenshot slider instead.
// Optional per project: `video` (LinkedIn post URL) and `repo` (GitHub URL) add buttons under the text.
export const projects = [
  {
    key: 'wanderly', name: 'Wanderly', type: 'Travel booking',
    pb: '#0E4D5C', pf: '#F3F8F7', pa: '#F6B26B',
    desc: 'Travel booking platform. Travellers discover, save and book trips, and the team runs everything from an admin dashboard.',
    facts: ['Booking with availability checks', 'Prices calculated on the server', 'Reviews moderated before they appear', 'Admin dashboard with roles', 'English and Arabic (RTL)', 'Light and dark themes'],
    tags: 'React · Node.js · Express · SQLite',
    video: 'https://lnkd.in/p/eGi-n4YC',
  },
  {
    key: 'edulearn', mock: 'edulearn', name: 'EduLearn', type: 'E-learning · Graduation project',
    pb: '#2A1F6B', pf: '#F5F3FF', pa: '#A99BFF',
    desc: 'My graduation project. Students learn, take quizzes and earn certificates, and admins edit everything, even the site content.',
    facts: ['Course filters, progress and quizzes', 'Certificate issued automatically', 'Admin dashboard, including homepage and FAQs', 'English and Arabic (RTL)', 'Light and dark themes'],
    tags: 'React · Node.js',
    video: 'https://lnkd.in/p/ed4QBC_8',
  },
  {
    key: 'carely', name: 'Carely', type: 'Healthcare · Appointment booking',
    pb: '#DCEBF7', pf: '#0F2747', pa: '#34D3B8',
    desc: 'Healthcare booking platform. Patients pick a real available slot and book, and admins run the whole system.',
    facts: ['Doctors, clinics and specialties','Book, reschedule or cancel','No double-booking of a slot','Reviews, favorites and medical history','Admin dashboard with stats and reports','English and Arabic (RTL), light and dark'],
    tags: 'React · Node.js · SQLite',
    video: 'https://lnkd.in/p/e5QjXvru',
  },
  {
    key: 'velora', name: 'VELORA', type: 'Fashion · Personal styling',
    pb: '#1A1A1D', pf: '#F4EFEA', pa: '#D8A47F',
    desc: 'Personal styling app that plans your outfit for the day, in English or Arabic.',
    facts: ['Digital wardrobe','Outfit builder and weekly style calendar','Style quiz and stylist chat','Favorites and inspiration feed','Admin dashboard','English and Arabic (RTL), light and dark'],
    tags: 'React · Node.js · Express · SQLite',
    video: 'https://lnkd.in/p/eGRZwU7D',
  },
  {
    key: 'volt', shotsTitle: 'Volt — Home Appliances Store', name: 'Volt', type: 'E-commerce · Appliances',
    pb: '#0B3F3D', pf: '#F1FAF8', pa: '#FF6F7E',
    desc: 'Home appliances store in English and Arabic, built from a 12-page design to a working backend.',
    facts: ['Compare up to 4 products', 'Accounts with favorites, addresses and orders', 'Checkout saved to a database', 'Admin panel with no code changes needed', 'Light and dark themes'],
    tags: 'React · Node.js · Express · SQLite',
    video: 'https://lnkd.in/p/eCj7FPVC',
  },
]

// Volt screenshots in /public/images, shown in this order.
export const voltShots = [
  'Home · Dark theme', 'Home · Light theme', 'Categories and benefits', 'Best sellers',
  'New arrivals', 'Store categories', 'Category list', 'All products with filters',
  'Price and rating filters', 'Customer account · Orders', 'Admin panel · Products',
  'Admin panel · Categories', 'Admin panel · Orders',
].map((caption, i) => ({ caption, src: `/images/volt-${String(i + 1).padStart(2, '0')}.jpg` }))

export const skills = [
  { title: 'Web', items: ['HTML and CSS', 'JavaScript', 'React', 'Vite', 'Node.js', 'Responsive layout', 'Admin dashboards', 'Light and dark themes', 'English and Arabic (RTL)'] },
  { title: 'Programming · familiar', items: ['Python', 'Java', 'C++', 'JavaScript'] },
  { title: 'Networking', items: ['Networks and communications (university courses)', 'CCNA foundational knowledge'] },
  { title: 'Working style', items: ['Teamwork', 'Problem solving', 'Presentation', 'Explaining technical topics', 'Word, Excel, PowerPoint'] },
]

// Carely screenshots in /public/images, shown in this order.
export const carelyShots = [
  'Home · Dark theme', 'Home · Top rated doctors', 'Find a doctor', 'Medical specialties',
  'Clinics', 'Sign in', 'Create account', 'Patient profile', 'Admin dashboard',
].map((caption, i) => ({ caption, src: `/images/carely-${String(i + 1).padStart(2, '0')}.jpg` }))

// EduLearn screenshots in /public/images, shown in this order.
export const edulearnShots = [
  'Home · Dark theme', 'Home · Light theme', 'Featured courses', 'All courses with filters',
  'Course details', 'Instructors', 'Instructor profile', 'Sign in', 'Sign up',
  'Student · My learning', 'Admin dashboard',
].map((caption, i) => ({ caption, src: `/images/edulearn-${String(i + 1).padStart(2, '0')}.jpg` }))

export const wanderlyShots = [
  'Home · Light theme', 'Featured destinations', 'Hand-picked hotels', 'Top experiences',
  'Offers', 'Destinations with filters', 'Hotels with filters', 'Hotel details',
  'Room and booking', 'Experiences', 'Sign in', 'Create account', 'Customer account', 'Admin dashboard',
].map((caption, i) => ({ caption, src: `/images/wanderly-${String(i + 1).padStart(2, '0')}.jpg` }))

export const veloraShots = [
  'Home · Light theme', 'Home · Dark theme', 'Explore looks', 'Style quiz call to action',
  'Explore · Dark theme', 'Explore · Light theme', 'Choose who to style', 'Style quiz · Preferences',
  'Style quiz · Colors', 'Customer dashboard', 'Admin overview', 'Sign in', 'Create account',
].map((caption, i) => ({ caption, src: `/images/velora-${String(i + 1).padStart(2, '0')}.jpg` }))

projects.find((p) => p.key === 'velora').shots = veloraShots
projects.find((p) => p.key === 'wanderly').shots = wanderlyShots
projects.find((p) => p.key === 'volt').shots = voltShots
projects.find((p) => p.key === 'edulearn').shots = edulearnShots
projects.find((p) => p.key === 'carely').shots = carelyShots

// Certificates. A section appears only when this list has items.
// Each item: { name, issuer, year, link } where text can be a string or { en: '...', ar: '...' }. `link` is optional.
export const certificates = [
  {
    name: 'Front-End Web Development using Vue.js',
    issuer: { en: 'Information Technology Institute (ITI)', ar: 'معهد تكنولوجيا المعلومات (ITI)' },
    year: { en: 'Jul–Aug 2026', ar: 'يوليو–أغسطس 2026' },
    detail: { en: '132 hours · attendance certificate', ar: '132 ساعة · شهادة حضور' },
    link: '/certificates/iti-vuejs.jpg', thumb: '/certificates/iti-vuejs-thumb.jpg',
  },
]

// Client reviews. A section appears only when this list has items.
// Each item: { quote, author, role } where text can be a string or { en: '...', ar: '...' }.
export const reviews = []

// Courses taken in the field. A section appears only when this list has items.
// Each item: { name, provider, year, link } where text can be a string or { en: '...', ar: '...' }. `link` is optional.
const iti = { en: 'ITI Platform (Mahara-Tech)', ar: 'منصة ITI (مهارة تك)' }
const oct = { en: 'Oct 2026', ar: 'أكتوبر 2026' }
const done = (en, ar) => ({ en: `${en} · certificate of completion`, ar: `${ar} · شهادة إتمام` })
export const courses = [
  { name: { en: 'HTML and CSS', ar: 'HTML وCSS' } },
  { name: { en: 'JavaScript', ar: 'JavaScript' } },
  { name: { en: 'React', ar: 'React' } },
  { name: { en: 'Databases', ar: 'قواعد البيانات' } },
  { name: { en: 'Python', ar: 'Python' } },
  { name: { en: 'Java', ar: 'Java' } },
  { name: { en: 'C++', ar: 'C++' } },
  { name: { en: 'Freelancing Basics', ar: 'أساسيات العمل الحر' }, issuer: iti, year: oct, detail: done('3 hours 8 min', '3 ساعات و8 دقائق'), link: '/certificates/freelancing-basics.pdf', thumb: '/certificates/freelancing-basics-thumb.jpg' },
  { name: { en: 'Getting started as a freelancer (Upwork)', ar: 'البدء كمستقل (Upwork)' }, issuer: iti, year: oct, detail: done('50 min', '50 دقيقة'), link: '/certificates/freelancer-upwork.pdf', thumb: '/certificates/freelancer-upwork-thumb.jpg' },
  { name: { en: 'Getting started as a freelancer (Khamsat)', ar: 'البدء كمستقل (خمسات)' }, issuer: iti, year: oct, detail: done('1 hour', 'ساعة'), link: '/certificates/freelancer-khamsat.pdf', thumb: '/certificates/freelancer-khamsat-thumb.jpg' },
  { name: { en: 'Getting started as a freelancer (Mostaql)', ar: 'البدء كمستقل (مستقل)' }, issuer: iti, year: oct, detail: done('33 min', '33 دقيقة'), link: '/certificates/freelancer-mostaql.pdf', thumb: '/certificates/freelancer-mostaql-thumb.jpg' },
  { name: { en: 'Find Your Freelance Fit', ar: 'اعثري على مجالك في العمل الحر' }, issuer: iti, year: oct, detail: done('15 min', '15 دقيقة'), link: '/certificates/freelance-fit.pdf', thumb: '/certificates/freelance-fit-thumb.jpg' },
]

// Experience timeline. Each item: { role, org, period, place, bullets: [ ... ] } with text as a string or { en, ar }.
export const experience = [
  {
    role: { en: 'Programming Instructor', ar: 'مدرّسة برمجة' },
    bullets: [
      { en: 'Teach frontend fundamentals and explain programming concepts with clear, simple examples.', ar: 'أشرح أساسيات الـ Frontend ومفاهيم البرمجة بأمثلة واضحة وبسيطة.' },
      { en: 'Help students build their first web projects and solve programming exercises.', ar: 'أساعد الطلاب على بناء أول مشاريع الويب وحل تمارين البرمجة.' },
    ],
  },
]
