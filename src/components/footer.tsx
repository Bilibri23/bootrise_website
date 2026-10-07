import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/bootrise-logo.png"
            alt="BootRise"
            width={120}
            height={36}
            className="h-8 w-auto"
          />
          <span className="text-sm text-ink-muted">
            Build like you have a CTO.
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-ink-muted">
          <Link href="/demo" className="transition hover:text-navy">
            Interactive preview
          </Link>
          <a href="#waitlist" className="transition hover:text-navy">
            Waitlist
          </a>
          <span>© {new Date().getFullYear()} BootRise</span>
        </div>
      </div>
    </footer>
  );
}
