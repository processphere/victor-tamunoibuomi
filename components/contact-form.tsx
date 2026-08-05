"use client";

import { useState } from "react";
import { content } from "@/lib/content";

export function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${from})`);
    window.location.href = `mailto:${content.email}?subject=${subject}&body=${body}`;
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition-colors focus:border-accent/50 focus:bg-white/[0.05]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="cf-name"
            className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
          >
            Name
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="cf-email"
            className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
          >
            Your email
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="cf-message"
          className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500"
        >
          Message
        </label>
        <textarea
          id="cf-message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or role..."
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-zinc-100 px-6 py-3.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
      >
        Send message
      </button>
      <p className="text-center font-mono text-[11px] text-zinc-600">
        Opens your email app — no data leaves your device.
      </p>
    </form>
  );
}