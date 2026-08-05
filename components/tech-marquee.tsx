const tech: { label: string; src?: string }[] = [
  { label: "React", src: "/logos/react.svg" },
  { label: "Next.js", src: "/scroll-logos/nextjs.png" },
  { label: "TypeScript", src: "/logos/typescript.svg" },
  { label: "Node.js", src: "/logos/nodejs.svg" },
  { label: "Express", src: "/scroll-logos/expressjs.png" },
  { label: "Tailwind CSS", src: "/logos/tailwind.svg" },
  { label: "PostgreSQL", src: "/logos/postgresql.svg" },
  { label: "MongoDB", src: "/logos/mongodb.svg" },
  { label: "Git", src: "/logos/git.svg" },
  { label: "Vercel", src: "/logos/vercel.svg" },
  { label: "Figma", src: "/logos/figma.svg" },
];

export function TechMarquee() {
  const row = [...tech, ...tech];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-8"
    >
      <div className="marquee-track flex w-max items-center gap-14 pr-14">
        {row.map((item, i) => (
          <span key={`${item.label}-${i}`} className="flex items-center gap-14">
            {item.src ? (
              <img
                src={item.src}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
            ) : (
              <span className="font-mono text-sm uppercase tracking-[0.2em] text-zinc-600">
                {item.label}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}