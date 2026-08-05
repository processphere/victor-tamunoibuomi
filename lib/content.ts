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
  linkedin: "https://www.linkedin.com/",
  facebook: "https://www.facebook.com/", // update with your real profile URL
  resumeUrl: "", // optional /resume.pdf in public/
  siteUrl: "https://victor-shadrach.vercel.app", // update after your Vercel deploy

  // Nav/header avatar — placeholder until you add your own photo.
  logo: "/images/header-logo.jpeg",

  // Hero portrait — used by the 3D circle in the hero.
  heroImage: "/images/hero-image.jpeg",

  // Drop your photo at public/images/photo.png (square crop works best), then set:
  photo: "/images/photo.png",

  status: "Available for new opportunities",

  sectionDescriptions: {
    about:
      "A quick introduction to who I am, how I work, and the problems I like to solve.",
    skills:
      "The tools I reach for when designing, building, and shipping products end to end.",
    projects:
      "A few things I've built recently. The rest is on GitHub.",
    experience:
      "Where I&apos;ve learned and worked so far — replace these with your real roles.",
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
      githubUrl: "https://github.com/processphere",
      image: "/images/project-1a.png",
      // Extra screenshots shown in the "See all" gallery. Drop files into
      // public/images/ and add them here, e.g. "/images/project-1b.png".
      screenshots: ["/images/project-1b.png", "/images/project-1c.png"],
      // Optional per-image captions, shown above each screenshot in the
      // gallery. One string per image (main image first), in order.
      captions: [],
      features: [
        "Daily QR code generation per employee",
        "QR check-in / check-out scanning",
        "Employee onboarding and profiles",
        "Attendance reports and exports",
      ],
      emoji: "01",
      featured: true,
    },
    {
      title: "Hall Clone",
      description:
        "A social media mobile app built with React Native and Expo — profiles, feeds, and real-time interactions in a native experience.",
      tech: ["React Native", "Expo", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/processphere",
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
      featured: true,
    },
    {
      title: "Deambrose Socials",
      description:
        "A social media marketplace web app where users buy and sell securely — real money transactions handled end to end, backed by a powerful admin dashboard.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Neon"],
      liveUrl: "https://deambrosesocials.com",
      githubUrl: "https://github.com/processphere",
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
      featured: false,
    },
    {
      title: "Project Four",
      description:
        "Replace me with a real project. Rename, describe, and drop in a live link and the source repo.",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/processphere",
      image: "", // e.g. "/images/project-four.png"
      screenshots: [],
      captions: [],
      features: [],
      emoji: "04",
      featured: false,
    },
  ],

  experience: [
    {
      title: "Software Engineer",
      org: "Harvoxx",
      period: "2025 — Present",
      type: "Work",
      description:
        "replace.me — Add a short line about what you built, owned, or shipped at Harvoxx.",
      tech: ["React", "Next.js"],
      logo: "", // e.g. "/images/harvoxx-logo.png"
    },
    {
      title: "Manager & Engineer",
      org: "TechTan",
      period: "2024 — 2025",
      type: "Work",
      description:
        "replace.me — Add a short line about what you managed and built at TechTan.",
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