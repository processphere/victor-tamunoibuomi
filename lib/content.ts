export const content = {
  name: "Victor Shadrach",
  firstName: "Victor",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, accessible, and well-crafted web and mobile products — from polished interfaces to the APIs that power them.",

  // Update these with your real contact details.
  location: "Remote, worldwide",
  email: "victortamunoibuomi07@gmail.com",
  github: "https://github.com/processphere",
  linkedin:
    "https://www.linkedin.com/in/victor-shadrach-7925bb289?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  facebook: "https://www.facebook.com/victor.tamunoiboumi",
  resumeUrl: "", // optional /resume.pdf in public/
  siteUrl: "https://victor-shadrach.vercel.app", // update after your Vercel deploy

  // Nav/header avatar — placeholder until you add your own photo.
  logo: "/images/header-logo.jpeg",

  // Hero portrait — used by the 3D circle in the hero.
  heroImage: "/images/hero-image.jpeg",

  status: "Available for new opportunities",

  // First-visit welcome quote (shown once per browser).
  quote: {
    text: "There's a solution to every problem — and every problem can always be solved.",
    attribution:
      "— something I've learned from years of debugging, building, and shipping",
  },

  sectionDescriptions: {
    about:
      "A quick introduction to who I am, how I work, and the problems I like to solve.",
    skills:
      "The tools I reach for when designing, building, and shipping products end to end.",
    projects:
      "A few things I've built recently. The rest is on GitHub.",
    experience:
      "The places I've learned, built, and shipped so far.",
    contact:
      "Have an idea, a project, or a role in mind? My inbox is always open.",
  },

  about: {
    intro:
      "I'm a full-stack developer focused on building products end-to-end. I care about clean code, thoughtful design, and shipping experiences that feel effortless on the inside and look sharp on the outside.",
    points: [
      "What I do: turn ideas into production-ready web apps — UI, APIs, and everything between.",
      "How I work: small, readable components; typed code; measurable performance.",
      "Currently: exploring real-time apps and modern backend patterns.",
    ],
  },

  skills: [
    {
      group: "Frontend",
      icon: "react",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
    },
    {
      group: "Backend",
      icon: "server",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
    },
    {
      group: "Dev Tools",
      icon: "tools",
      items: ["Git / GitHub", "Vercel", "Postman", "Figma", "Linux"],
    },
  ],

  exploring: ["Real-time apps", "WebSockets", "Edge compute"],

  projects: [
    {
      title: "Attendance System",
      description:
        "A check-in/check-out attendance system I built for my tech company — daily QR code generation and scanning, student onboarding, and attendance reports.",
      tech: ["Next.js", "TypeScript", "Node.js", "Firebase"],
      liveUrl: "https://mytechtan-attendance.vercel.app",
      // Live apps — code is private, shown on request.
      githubUrl: "",
      image: "/images/project-1a.png",
      // Extra screenshots shown in the "See all" gallery. Drop files into
      // public/images/ and add them here, e.g. "/images/project-1b.png".
      screenshots: ["/images/project-1b.png", "/images/project-1c.png"],
      // Optional per-image captions, shown above each screenshot in the
      // gallery. One string per image (main image first), in order.
      captions: [],
      features: [
        "Daily QR code generation per student",
        "QR check-in / check-out scanning",
        "Student onboarding and profiles",
        "Attendance reports and exports",
      ],
      emoji: "01",
    },
    {
      title: "Hall Clone",
      description:
        "A social media mobile app built with React Native and Expo — profiles, feeds, and real-time interactions in a native experience.",
      tech: ["React Native", "Expo", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "", // live app — code on request
      image: "/images/project-2a.png", // e.g. "/images/project-two.png"
      screenshots: [
        "/images/project-2b.png",
        "/images/project-2c.png",
        "/images/project-2d.png",
        "/images/project-2e.png",
        "/images/project-2f.png",
      ], // e.g. ["/images/project-two-b.png"]
      captions: [],
      features: [
        "Profile creation and editing",
        "Personal and home feeds",
        "Reels with video upload and playback",
        "Likes, comments, and follows",
        "Push notifications",
      ],
      emoji: "02",
    },
    {
      title: "Deambrose Socials",
      description:
        "A social media marketplace web app where users buy and sell securely — real money transactions handled end to end, backed by a powerful admin dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Neon"],
      liveUrl: "https://deambrosesocials.com",
      githubUrl: "", // live app — code on request
      image: "/images/project-3a.png", // e.g. "/images/project-three.png"
      screenshots: [
        "/images/project-3b.png",
        "/images/project-3c.png",
        "/images/project-3d.png",
        "/images/project-3e.png",
        "/images/project-3f.png",
        "/images/project-3g.png",
      ],
      captions: [],
      features: [
        "User marketplace with listings and search",
        "Social features — profiles, likes, and comments",
        "Secure wallet with real money transactions",
        "Escrow-style payment handling",
        "Admin dashboard for users, listings, and payments",
        "Transaction history and dispute management",
      ],
      emoji: "03",
    },
    {
      title: "Kalearnda",
      description:
        "A learning and quiz platform for professional exams like JAMB and others — practice questions, progress tracking, and mock tests.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://kalearnda.com",
      githubUrl: "", // live app — code on request
      image: "/images/project-4a.png", // e.g. "/images/project-four.png"
      screenshots: [
        "/images/project-4b.png",
        "/images/project-4c.png",
        "/images/project-4d.png",
        "/images/project-4e.png",
      ],
      captions: [],
      features: [],
      emoji: "04",
    },
  ],

  experience: [
    {
      title: "Software Engineer",
      org: "Harvoxx",
      period: "2025 — Present",
      type: "Work",
      description:
        "Build and ship production-ready web features end to end — React and Next.js frontends, clean component architecture, and the APIs behind them.",
      tech: ["React", "Next.js"],
      logo: "", // e.g. "/images/harvoxx-logo.png"
    },
    {
      title: "Manager & Engineer",
      org: "TechTan",
      period: "2024 — 2025",
      type: "Work",
      description:
        "Ran the engineering side of my own tech company — designed, built, and shipped the products the business runs on, including the attendance system, while managing delivery and the team.",
      tech: ["Node.js", "Express"],
      logo: "", // e.g. "/images/techtan-logo.png"
    },
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};