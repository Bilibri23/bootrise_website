type VideoPlaceholderProps = {
  embedUrl?: string;
};

function toEmbedUrl(url: string): string {
  const trimmed = url.trim();
  const shareMatch = trimmed.match(/loom\.com\/share\/([a-zA-Z0-9]+)/);
  if (shareMatch) {
    return `https://www.loom.com/embed/${shareMatch[1]}`;
  }
  return trimmed;
}

export function VideoPlaceholder({ embedUrl }: VideoPlaceholderProps) {
  const resolved = embedUrl ? toEmbedUrl(embedUrl) : "";

  return (
    <section className="bg-atmosphere py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand">
            Real BootRise walkthrough
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Watch BootRise analyze a real project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink-muted">
            {resolved
              ? "A short look at BootRise analyzing a real project — from repositories to what to fix before release."
              : "Coming soon — a 60–90 second story of opening a project, connecting repositories, and seeing what needs attention before release."}
          </p>
        </div>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl border border-border bg-navy/95 shadow-[0_24px_60px_-30px_rgba(33,44,68,0.5)]">
          {resolved ? (
            <iframe
              src={resolved}
              title="BootRise product walkthrough"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <>
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 40%, rgba(0,115,230,0.45), transparent 45%), radial-gradient(circle at 70% 60%, rgba(0,191,136,0.35), transparent 40%)",
                }}
              />
              <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-2xl text-white backdrop-blur-sm">
                  ▶
                </span>
                <p className="text-lg font-semibold text-white">
                  Would you ship this product?
                </p>
                <p className="text-sm text-white/65">
                  Video goes live once the Loom recording is ready.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
