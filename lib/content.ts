export const content = {
  name: "Victor Tamunoibuomi",
  firstName: "Victor",
  role: "Full-Stack Developer",
  tagline:
    "I build fast, accessible, and well-crafted web products — from polished interfaces to the APIs that power them.",

  // Update these with your real contact details.
  location: "Remote, worldwide",
  email: "processphere@gmail.com",
  github: "https://github.com/processphere",
  linkedin: "https://www.linkedin.com/",
  resumeUrl: "", // optional /resume.pdf in public/

  // Drop your photo at public/photo.png (square crop works best), then set:
  photo: "/photo.png",

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
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
    },
    {
      group: "Tools",
      items: ["Git / GitHub", "Vercel", "Figma", "Postman", "Linux"],
    },
  ],

  projects: [
    {
      title: "Project One",
      description:
        "Replace me with a real project. Describe what it does, who it's for, and the problem it solves in one or two lines.",
      tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      liveUrl: "",
      githubUrl: "https://github.com/processphere",
      emoji: "01",
    },
    {
      title: "Project Two",
      description:
        "Replace me with a real project. Rename, describe, and drop in a live link and the source repo.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com/processphere",
      emoji: "02",
    },
    {
      title: "Project Three",
      description:
        "Replace me with a real project. Keep the description tight — what you built, and why it was worth building.",
      tech: ["Next.js", "Tailwind", "REST APIs"],
      liveUrl: "",
      githubUrl: "https://github.com/processphere",
      emoji: "03",
    },
  ],

  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};

export const accent = {
  // Single muted accent used sparingly across the site.
  hex: "#34d399",
};