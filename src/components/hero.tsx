"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "./waitlist-form";

const journey = [
  "AI-built product",
  "BootRise",
  "Understand · Analyze · Fix",
  "Release confidently",
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-hero-mesh pt-24 pb-16 sm:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,44,68,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(33,44,68,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-6"
          >
            <Image
              src="/bootrise-logo.png"
              alt="BootRise"
              width={220}
              height={66}
              className="h-14 w-auto sm:h-16"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="font-display max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]"
          >
            Build like you have a{" "}
            <span className="text-gradient-brand">CTO</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted"
          >
            Your AI can build the product. BootRise helps you understand what
            you&apos;re actually about to release.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-4"
          >
            <WaitlistForm variant="hero" />
            <Link
              href="/demo"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-deep"
            >
              Explore a sample project
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative"
          aria-hidden
        >
          <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/70 bg-white/55 p-6 shadow-[0_30px_80px_-40px_rgba(33,44,68,0.45)] backdrop-blur-md sm:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              The journey
            </p>
            <ol className="space-y-0">
              {journey.map((step, index) => (
                <li key={step} className="relative flex gap-4 pb-6 last:pb-0">
                  {index < journey.length - 1 && (
                    <span className="absolute left-[11px] top-7 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-brand to-teal" />
                  )}
                  <span
                    className={`relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ${
                      index === 1
                        ? "bg-gradient-to-br from-brand-deep to-teal shadow-md shadow-brand/30"
                        : "bg-navy/80"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        index === 1 ? "text-brand" : "text-navy"
                      }`}
                    >
                      {step}
                    </p>
                    {index === 1 && (
                      <p className="mt-1 text-xs text-ink-muted">
                        Your AI CTO layer between built and release-ready
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
