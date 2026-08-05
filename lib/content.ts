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
      title: "Project One",
      description:
        "Replace me with a real project. Describe what it does, who it's for, and the problem it solves in one or two lines.",
      tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      liveUrl: "",
      githubUrl: "https://github.com/processphere",
      emoji: "01",
      featured: true,
    },
    {
      title: "Project Two",
      description:
        "Replace me with a real project. Rename, describe, and drop in a live link and the source repo.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/processphere",
      emoji: "02",
      featured: true,
    },
    {
      title: "Project Three",
      description:
        "Replace me with a real project. Keep the description tight — what you built, and why it was worth building.",
      tech: ["Next.js", "Tailwind", "REST APIs"],
      liveUrl: "",
      githubUrl: "https://github.com/processphere",
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