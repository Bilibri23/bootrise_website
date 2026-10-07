import Link from "next/link";

export function DemoCta() {
  return (
    <section className="border-y border-border bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 px-5 sm:px-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-bright">
            Interactive preview
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            See what BootRise sees.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">
            Upload your AI-built project and BootRise helps you understand
            what&apos;s underneath it. Explore Marketly — a sample marketplace
            with three repositories, architecture findings, security, and
            compliance.
          </p>
        </div>
        <Link
          href="/demo"
          className="inline-flex items-center gap-2 rounded-xl bg-teal px-6 py-3.5 text-sm font-semibold text-navy transition hover:bg-teal-bright"
        >
          Explore Marketly
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
