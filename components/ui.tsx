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

function IndexMark({ value }: { value: string }) {
  return (
    <svg
      viewBox="0 0 100 64"
      aria-hidden="true"
      className="h-14 w-20 shrink-0 sm:h-20 sm:w-28"
    >
      <text
        x="0"
        y="56"
        style={{ fontFamily: "var(--font-geist-mono), monospace" }}
        fontSize="60"
        fontWeight="700"
        letterSpacing="-4"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.6"
      >
        {value}
      </text>
    </svg>
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
        <div className="flex items-end gap-5">
          <IndexMark value={index} />
          <p className="pb-2 font-mono text-sm font-semibold uppercase tracking-[0.3em] text-zinc-200 sm:pb-3">
            {eyebrow}
          </p>
        </div>
        <h2 className="mt-5 text-4xl font-medium tracking-tight sm:text-5xl">
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