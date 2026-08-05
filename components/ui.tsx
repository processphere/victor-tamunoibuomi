export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-400">
          <span className="text-accent">{index}</span> — {eyebrow}
        </p>
        <h2 className="mt-4 text-4xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-lg leading-relaxed text-zinc-300">
          {description}
        </p>
      )}
    </div>
  );
}

export function SectionDivider() {
  return <hr className="border-white/5" aria-hidden="true" />;
}