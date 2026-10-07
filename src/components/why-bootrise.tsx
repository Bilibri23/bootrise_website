const pillars = [
  "Architecture",
  "Security",
  "Compliance",
  "Dependencies",
  "Technical risks",
  "Cross-repository relationships",
];

export function WhyBootRise() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Your AI can write the code.
              <br />
              <span className="text-ink-muted">
                BootRise helps you understand the consequences.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
              Not another scanner checklist. A technical co-pilot for founders
              who built with AI and need a clear answer to one question:{" "}
              <span className="font-medium text-navy">
                Am I ready to release?
              </span>
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {pillars.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-border bg-surface px-4 py-4 text-sm font-medium text-navy"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
