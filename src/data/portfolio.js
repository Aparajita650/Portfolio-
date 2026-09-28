export const profile = {
  name: "Aparajita",
  role: "Java Full Stack Developer",
  location: "Rajeev Colony, Gurugram",
  phone: "8470855650",
  email: "aparajitas0707@gmail.com",
  summary:
    "Motivated and detail-oriented Java Full Stack Developer with a strong foundation in Object-Oriented Programming and modern front-end technologies. Skilled at building scalable, maintainable, and user-centric applications through clean coding practices and structured problem-solving.",
};

export const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
];

export const skills = [
  {
    title: "Programming",
    items: ["Java", "Object-Oriented Programming"],
  },
  {
    title: "Frontend",
    items: ["ReactJS 19", "JavaScript", "HTML5", "Tailwind CSS"],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "Tools",
    items: ["Visual Studio Code", "Git", "GitHub"],
  },
];

export const experience = [
  {
    period: "02/2025 – 02/2026",
    title: "Java Full Stack Trainee",
    company: "Q & J Spider",
    location: "Noida Sector 2",
    bullets: [
      "Strengthening deep proficiency in Java, mastering both core and advanced OOP concepts to build efficient, modular applications.",
      "Designing and implementing responsive, accessible UI components using HTML5, CSS3, and JavaScript, ensuring seamless user experience.",
    ],
  },
];

export const projects = [
  {
    number: "01",
    liveUrl: "https://career-executive.vercel.app/", // Add the deployed project URL here, e.g. "https://your-career-coach.vercel.app"
    title: "AI Career Coach",
    type: "Full-Stack Web Application",
    description:
      "An AI-powered career guidance platform designed to deliver personalized recommendations, resume insights, and skill-based suggestions.",
    highlights: [
      "Modern front-end experience",
      "Secure authentication and database workflows",
      "Practical AI integration",
      "Designed with scalability and performance in mind",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "ShadCN UI", "Gemini API", "Clerk", "JWT", "Neon DB", "Prisma", "Inngest"],
  },
  {
    number: "02",
    liveUrl: "https://pastebin-lite-one-bay.vercel.app/", // Add the deployed project URL here
    title: "Pastebin Lite",
    type: "Minimal Text Sharing Platform",
    description:
      "A lightweight text-sharing application focused on shareable content, controlled access, and automatic expiry.",
    highlights: [
      "Create pastes with unique IDs and shareable links",
      "TTL-based automatic expiry",
      "Maximum view-count limit",
      "Secure content rendering and REST APIs",
    ],
    stack: ["Next.js 14", "React.js", "Tailwind CSS", "Next.js API Routes", "Node.js", "PostgreSQL", "Vercel"],
  },
  {
    number: "03",
    liveUrl: "https://auth-system-seven-smoky.vercel.app/login", // Add the deployed project URL here
    title: "Auth System",
    type: "Secure User Authentication Platform",
    description:
      "A responsive authentication platform with secure account flows, protected routes, persistent sessions, and dashboard experience.",
    highlights: [
      "Email validation and password-strength checks",
      "bcrypt password hashing",
      "JWT-based protected routes",
      "Persistent session with localStorage",
      "Responsive dashboard with profile and logout",
    ],
    stack: ["JWT", "bcrypt", "JavaScript", "Responsive UI", "REST APIs"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Kanpur Institute of Technology (A.K.T.U.)",
    score: "75%",
    period: "2021 – 2025",
    location: "Kanpur, India",
  },
  {
    degree: "Intermediate",
    institution: "R.P.M. Inter College (U.P. Board)",
    score: "85.8%",
    period: "2020 – 2021",
    location: "Kanpur, India",
  },
  {
    degree: "High School",
    institution: "R.P.M. Inter College (U.P. Board)",
    score: "84.6%",
    period: "2018 – 2019",
    location: "Kanpur, India",
  },
];

export const certifications = [
  "Java Full Stack Development Training",
  "Co-ordinator in Entrepreneurship & Innovative Ideas (A.K.T.U.)",
  "Full Stack Development by N.I.E.L.I.T.",
];