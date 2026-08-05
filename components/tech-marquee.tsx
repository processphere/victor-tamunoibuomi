const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "REST APIs",
  "Git",
  "Vercel",
  "Figma",
];

export function TechMarquee() {
  const row = [...tech, ...tech];
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-6"
    >
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.2em] text-zinc-600"
          >
            {item}
            <span className="text-accent/60">*</span>
          </span>
        ))}
      </div>
    </div>
  );
}