"use client";

import { useEffect, useState } from "react";
import { marketly } from "@/data/demo/marketly";

export function RepositoriesView() {
  const [activeRepo, setActiveRepo] = useState<string>(
    marketly.repositories[0].id,
  );
  const [activeFile, setActiveFile] = useState(0);
  const [chatStarted, setChatStarted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    if (!chatStarted) return;
    const timer = window.setTimeout(() => setShowAnswer(true), 700);
    return () => window.clearTimeout(timer);
  }, [chatStarted]);

  const file = marketly.files[activeFile];

  return (
    <div className="flex h-full min-h-[28rem] flex-col gap-4 lg:flex-row">
      <aside className="w-full shrink-0 rounded-2xl border border-border bg-white lg:w-52">
        <p className="border-b border-border px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
          Repositories
        </p>
        <ul>
          {marketly.repositories.map((repo) => (
            <li key={repo.id}>
              <button
                type="button"
                onClick={() => {
                  setActiveRepo(repo.id);
                  setChatStarted(false);
                  setShowAnswer(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm transition ${
                  activeRepo === repo.id
                    ? "bg-brand/10 font-semibold text-brand"
                    : "text-navy hover:bg-surface"
                }`}
              >
                {repo.name}
              </button>
            </li>
          ))}
        </ul>
        {activeRepo === "marketly-web" && (
          <>
            <p className="border-t border-border px-4 py-3 text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Files
            </p>
            <ul>
              {marketly.files.map((f, index) => (
                <li key={f.path}>
                  <button
                    type="button"
                    onClick={() => setActiveFile(index)}
                    className={`w-full truncate px-4 py-2.5 text-left font-mono text-xs transition ${
                      activeFile === index
                        ? "bg-surface font-medium text-navy"
                        : "text-ink-muted hover:bg-surface/70"
                    }`}
                  >
                    {f.path}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>

      <div className="min-w-0 flex-1 rounded-2xl border border-border bg-navy text-white">
        {activeRepo === "marketly-web" ? (
          <>
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <p className="truncate font-mono text-xs text-white/70">
                {file.path}
              </p>
              <span className="text-[10px] uppercase tracking-wider text-teal-bright">
                {file.language}
              </span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-white/85 sm:text-sm">
              <code>{file.content}</code>
            </pre>
          </>
        ) : (
          <div className="flex h-full min-h-[16rem] items-center justify-center p-8 text-center">
            <p className="max-w-xs text-sm text-white/70">
              Open <span className="font-semibold text-white">marketly-web</span>{" "}
              to explore code and ask BootRise about cross-repository flows.
            </p>
          </div>
        )}
      </div>

      <aside className="flex w-full shrink-0 flex-col rounded-2xl border border-border bg-white lg:w-72">
        <div className="border-b border-border px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            BootRise chat
          </p>
          <p className="mt-0.5 text-sm font-medium text-navy">Your AI CTO</p>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          {!chatStarted ? (
            <>
              <p className="text-sm text-ink-muted">
                Ask BootRise something founders usually don&apos;t know how to
                answer from one repo alone.
              </p>
              <button
                type="button"
                onClick={() => setChatStarted(true)}
                disabled={activeRepo !== "marketly-web"}
                className="rounded-xl border border-brand/30 bg-brand/5 px-3 py-3 text-left text-sm font-medium text-navy transition hover:bg-brand/10 disabled:cursor-not-allowed disabled:opacity-50"
              >
                &ldquo;{marketly.chat.question}&rdquo;
              </button>
            </>
          ) : (
            <>
              <div className="ml-auto max-w-[90%] rounded-2xl rounded-br-md bg-brand px-3 py-2 text-sm text-white">
                {marketly.chat.question}
              </div>
              {showAnswer ? (
                <div className="space-y-3">
                  <div className="max-w-[95%] rounded-2xl rounded-bl-md bg-surface px-3 py-2 text-sm text-navy">
                    {marketly.chat.answer.map((line) => (
                      <p key={line} className="mb-2 last:mb-0">
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium">
                    {marketly.chat.flow.map((step, index) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="rounded-md bg-navy px-2 py-1 text-white">
                          {step}
                        </span>
                        {index < marketly.chat.flow.length - 1 && (
                          <span className="text-ink-muted" aria-hidden>
                            →
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-ink-muted">BootRise is tracing…</p>
              )}
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
