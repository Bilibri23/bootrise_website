"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { type DemoView, marketly } from "@/data/demo/marketly";
import { ComplianceView } from "./compliance-view";
import { OverviewView } from "./overview-view";
import { RepositoriesView } from "./repositories-view";
import { SecurityView } from "./security-view";
import { SystemDesignView } from "./system-design-view";

const navItems: { id: DemoView; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "repositories", label: "Repositories" },
  { id: "system-design", label: "System Design" },
  { id: "security", label: "Security" },
  { id: "compliance", label: "Compliance" },
];

export function DemoShell() {
  const [view, setView] = useState<DemoView>("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navigate = useCallback((next: DemoView) => {
    setView(next);
    setMobileNavOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link href="/" className="shrink-0">
              <Image
                src="/bootrise-logo.png"
                alt="BootRise"
                width={120}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <span className="hidden h-5 w-px bg-border sm:block" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-navy">{marketly.name}</p>
              <p className="text-xs text-ink-muted">Interactive preview</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-navy lg:hidden"
              onClick={() => setMobileNavOpen((o) => !o)}
              aria-expanded={mobileNavOpen}
            >
              Menu
            </button>
            <Link
              href="/#waitlist"
              className="rounded-xl bg-brand px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep"
            >
              Get early access
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-0 lg:gap-6 lg:px-6 lg:py-6">
        <aside
          className={`${
            mobileNavOpen ? "block" : "hidden"
          } w-full border-b border-border bg-white lg:block lg:w-56 lg:shrink-0 lg:rounded-2xl lg:border lg:border-border`}
        >
          <nav className="flex flex-col p-2" aria-label="Demo sections">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(item.id)}
                className={`rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                  view === item.id
                    ? "bg-brand/10 text-brand"
                    : "text-navy/80 hover:bg-surface hover:text-navy"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:rounded-2xl lg:border lg:border-border lg:bg-white lg:px-8 lg:py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              {view === "overview" && <OverviewView onNavigate={navigate} />}
              {view === "repositories" && <RepositoriesView />}
              {view === "system-design" && <SystemDesignView />}
              {view === "security" && <SecurityView />}
              {view === "compliance" && <ComplianceView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <section className="border-t border-border bg-navy px-4 py-12 text-center text-white sm:px-6">
        <p className="font-display text-2xl font-semibold sm:text-3xl">
          Your AI built the product.
          <br />
          BootRise helps you understand it.
        </p>
        <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
          Architecture. Security. Compliance. Dependencies. Technical risks.
          Cross-repository relationships. And ultimately: Am I ready to release?
        </p>
        <Link
          href="/#waitlist"
          className="mt-6 inline-flex rounded-xl bg-teal px-5 py-3 text-sm font-semibold text-navy transition hover:bg-teal-bright"
        >
          Get early access
        </Link>
      </section>
    </div>
  );
}
