"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

type WaitlistFormProps = {
  variant?: "hero" | "footer";
  className?: string;
};

export function WaitlistForm({
  variant = "footer",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined }),
      });
      const data = (await response.json()) as { error?: string; ok?: boolean };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list. We'll be in touch.");
      setEmail("");
      setName("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  const isHero = variant === "hero";

  if (status === "success") {
    return (
      <p
        className={`rounded-xl border border-teal/30 bg-teal/10 px-4 py-3 text-sm font-medium text-navy ${className}`}
        role="status"
      >
        {message}
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex w-full flex-col gap-3 ${isHero ? "sm:max-w-md" : "mx-auto max-w-lg"} ${className}`}
    >
      {!isHero && (
        <label className="sr-only" htmlFor="waitlist-name">
          Name
        </label>
      )}
      {!isHero && (
        <input
          id="waitlist-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none ring-brand/30 placeholder:text-ink-muted/70 focus:ring-2"
        />
      )}
      <div className={`flex flex-col gap-3 ${isHero ? "sm:flex-row" : ""}`}>
        <label className="sr-only" htmlFor={`waitlist-email-${variant}`}>
          Email
        </label>
        <input
          id={`waitlist-email-${variant}`}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full flex-1 rounded-xl border border-border bg-white px-4 py-3 text-sm text-navy outline-none ring-brand/30 placeholder:text-ink-muted/70 focus:ring-2"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center justify-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p className="text-sm text-critical" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
