import { ReactIcon } from "@/components/icons";

type IconProps = { className?: string };

function NextLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.5 15.5v-7l5 7v-7" />
      <circle cx="15" cy="9" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TypeScriptLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M9 8.5h5" />
      <path d="M11.5 8.5v7" />
      <path d="M15.2 15.3c.5.3 1 .5 1.5.5.8 0 1.3-.3 1.3-.8s-.5-.8-1.3-1c-.9-.3-1.7-.6-1.7-1.5 0-.7.6-1.2 1.5-1.2.6 0 1.1.2 1.5.5" />
    </svg>
  );
}

function TailwindLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 7.5c-2.8 0-4.6 1.4-5.4 4.2 1.1-1.4 2.4-1.9 3.9-1.6.8.2 1.4.8 2 1.4 1 1 2.2 2.2 4.4 2.2 2.8 0 4.6-1.4 5.4-4.2-1.1 1.4-2.4 1.9-3.9 1.6-.8-.2-1.4-.8-2-1.4-1-1-2.2-2.2-4.4-2.2Z" />
    </svg>
  );
}

function NodeLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M14.4 9.5v3.7a1.9 1.9 0 0 1-3.8 0" />
      <path d="M15 15c.4.3.9.4 1.3.4.7 0 1.2-.3 1.2-.7 0-.5-.5-.7-1.2-.9-.9-.3-1.6-.6-1.6-1.4 0-.6.6-1.1 1.4-1.1.5 0 1 .2 1.3.4" />
    </svg>
  );
}

function HtmlCssLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m8.5 8.5-3.5 3.5 3.5 3.5M15.5 8.5 19 12l-3.5 3.5" />
    </svg>
  );
}

function PostgresLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M6.2 9C6.2 5.8 8.6 4 12 4s5.8 1.8 5.8 5c0 1.8 1.2 2.3 1.2 4.4 0 2.3-2.3 3.6-4.6 3.6-1.2 0-1.9-.3-2.9-.3s-1.7.3-2.9.3c-2.3 0-4.6-1.3-4.6-3.6 0-2.1 1.2-2.6 1.2-4.4Z" />
      <path d="M8.5 8.5v6.5" />
      <circle cx="9.5" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MongoLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 3c1 2.6 2.9 5.1 2.9 7.7 0 3-1.8 5.4-2.9 6.6-1.1-1.2-2.9-3.6-2.9-6.6C9.1 8.1 11 5.6 12 3Z" />
      <path d="M12 17.3c.3.8.5 1.7.5 2.5v1.2" />
    </svg>
  );
}

function GraphQLLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.5 19.5 7v10L12 21.5 4.5 17V7L12 2.5Z" />
      <path d="M4.5 7l7.5 4.5L19.5 7M12 11.5v10M4.5 17l7.5-4.5L19.5 17" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GitLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <circle cx="7" cy="6.5" r="2.8" />
      <circle cx="7" cy="17.5" r="2.8" />
      <path d="M9.8 6.5h3.2a3.5 3.5 0 0 1 3.5 3.5v3.5" />
    </svg>
  );
}

function VercelLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 3.5 22 20H2L12 3.5Z" />
    </svg>
  );
}

function FigmaLogo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 3h2.8a2.8 2.8 0 0 1 0 5.6H12V3Z" />
      <path d="M12 8.6h2.8a2.8 2.8 0 0 1 0 5.6H12V8.6Z" />
      <path d="M12 14.2h2.8a2.8 2.8 0 0 1 0 5.6H12v-5.6Z" />
      <path d="M9.2 3H12v5.6H9.2a2.8 2.8 0 0 1 0-5.6Z" />
      <path d="M9.2 8.6H12v5.6H9.2a2.8 2.8 0 0 1 0-5.6Z" />
    </svg>
  );
}

function ExpressLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.8 9.6c-.4-1.2-1.5-1.9-3-1.9-2.3 0-3.9 1.6-3.9 3.9s1.6 3.9 3.9 3.9c1.6 0 2.8-.9 3.2-2.2" />
      <path d="M8.8 12h6.2" />
    </svg>
  );
}

function RestApiLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M9 3v4M15 3v4" />
      <path d="M9 7h6v3a3 3 0 0 0 3 3v4h-4v3h-4v-3H6v-4a3 3 0 0 0 3-3V7Z" />
    </svg>
  );
}

function PostmanLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M10 4.2 8.7 2.2M14 4.2l1.3-2" />
      <path d="M12 3.5c3.8 0 6.5 2.7 6.5 6.5 0 1.2-.3 2-1.2 3-.9 1-1.3 1.8-1.3 3V18H8v-2c0-1.2-.4-2-1.3-3-.9-1-1.2-1.8-1.2-3 0-3.8 2.7-6.5 6.5-6.5Z" />
      <path d="M10.2 12.4c1 1 2.6 1 3.6 0" />
      <circle cx="9.9" cy="9.8" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="14.1" cy="9.8" r="0.55" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinuxLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 3.5c-2.6 0-4.5 1.9-4.5 4.5 0 1.4.5 2.3.5 3.4 0 1.4-1.3 1.9-1.3 3.7 0 1.7 1.5 2.4 3 2.4h4.6c1.5 0 3-.7 3-2.4 0-1.8-1.3-2.3-1.3-3.7 0-1.1.5-2 .5-3.4 0-2.6-1.9-4.5-4.5-4.5Z" />
      <path d="M8.2 9.2c-1 .6-1.6 1.6-1.7 2.7M15.8 9.2c1 .6 1.6 1.6 1.7 2.7" />
      <path d="M9.5 19.5v1.5M12 19.5v1.5M14.5 19.5v1.5" />
      <circle cx="10.2" cy="7.6" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="13.8" cy="7.6" r="0.55" fill="currentColor" stroke="none" />
      <path d="M10.9 9.8h2.2L12 11l-1.1-1.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const skillLogos: Record<string, (p: IconProps) => React.ReactNode> = {
  React: ReactIcon,
  "Next.js": NextLogo,
  TypeScript: TypeScriptLogo,
  "Tailwind CSS": TailwindLogo,
  "HTML / CSS": HtmlCssLogo,
  "Node.js": NodeLogo,
  Express: ExpressLogo,
  "REST APIs": RestApiLogo,
  PostgreSQL: PostgresLogo,
  MongoDB: MongoLogo,
  "Git / GitHub": GitLogo,
  Vercel: VercelLogo,
  Postman: PostmanLogo,
  Figma: FigmaLogo,
  Linux: LinuxLogo,
};
