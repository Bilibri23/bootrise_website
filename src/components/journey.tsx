const steps = [
  {
    title: "Connect your project",
    body: "Multiple repositories. One project.",
  },
  {
    title: "BootRise understands it",
    body: "Code, architecture, dependencies, and relationships.",
  },
  {
    title: "Find what needs attention",
    body: "Security, architecture, compliance, and other technical risks.",
  },
  {
    title: "Understand the problem",
    body: "Plain English, not engineering jargon.",
  },
  {
    title: "Get the plan",
    body: "Actionable instructions you can take back to your AI builder.",
  },
  {
    title: "Release with confidence",
    body: "Know what you are shipping — and why it is ready.",
  },
];

export function Journey() {
  return (
    <section className="bg-atmosphere py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
            Meet your AI CTO
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            From AI-built to release-ready
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            BootRise is the layer between &ldquo;I think I&apos;m done&rdquo;
            and &ldquo;I understand what I&apos;m releasing.&rdquo;
          </p>
        </div>

        <ol className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span className="font-display text-4xl font-semibold text-brand/20">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
