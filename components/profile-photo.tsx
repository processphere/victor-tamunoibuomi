"use client";

import { useState } from "react";
import Image from "next/image";
import { content } from "@/lib/content";

export function ProfilePhoto({ priority = false }: { priority?: boolean }) {
  const [ok, setOk] = useState(content.photo !== "");

  const box =
    "h-56 w-56 rounded-2xl border border-white/10 object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80";

  if (!ok) {
    return (
      <div
        aria-hidden="true"
        className={`${box} flex items-center justify-center border-white/10 bg-white/[0.03]`}
      >
        <span className="font-mono text-7xl text-accent">
          {content.firstName.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={content.photo}
      alt={`Portrait of ${content.name}`}
      width={320}
      height={320}
      priority={priority}
      onError={() => setOk(false)}
      className={box}
    />
  );
}