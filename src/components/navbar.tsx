import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/bootrise-logo.png"
            alt="BootRise"
            width={160}
            height={48}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/demo"
            className="rounded-xl px-3 py-2 text-sm font-medium text-navy/80 transition hover:text-navy"
          >
            Explore demo
          </Link>
          <a
            href="#waitlist"
            className="rounded-xl bg-navy px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-navy/90 sm:px-4"
          >
            Join waitlist
          </a>
        </div>
      </nav>
    </header>
  );
}
