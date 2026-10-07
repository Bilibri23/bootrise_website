import { WaitlistForm } from "./waitlist-form";

export function FinalCta() {
  return (
    <section id="waitlist" className="scroll-mt-8 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          You don&apos;t need to become a CTO to build a product.
        </h2>
        <p className="mt-4 text-xl text-ink-muted">
          Build like you have one.
        </p>
        <div className="mt-10">
          <WaitlistForm variant="footer" />
        </div>
      </div>
    </section>
  );
}
