"use client";

import { useState } from "react";
import { marketly } from "@/data/demo/marketly";
import { SeverityBadge } from "./status-badge";

export function SecurityView() {
  const [activeId, setActiveId] = useState<string>(
    marketly.security.findings[0].id,
  );
  const active =
    marketly.security.findings.find((f) => f.id === activeId) ??
    marketly.security.findings[0];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Security Hub
          </h2>
          <p className="mt-1 text-ink-muted">Security posture for Marketly</p>
        </div>
        <div className="rounded-2xl border border-border bg-white px-5 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Score
          </p>
          <p className="font-display text-3xl font-semibold text-navy">
            {marketly.security.score}{" "}
            <span className="text-lg text-ink-muted">/ 100</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {(
          [
            ["critical", marketly.security.counts.critical],
            ["high", marketly.security.counts.high],
            ["medium", marketly.security.counts.medium],
          ] as const
        ).map(([label, count]) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-white px-4 py-3"
          >
            <p className="text-xs font-semibold capitalize text-ink-muted">
              {label}
            </p>
            <p className="mt-1 text-xl font-semibold text-navy">{count}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
        <ul className="space-y-2">
          {marketly.security.findings.map((finding) => (
            <li key={finding.id}>
              <button
                type="button"
                onClick={() => setActiveId(finding.id)}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                  activeId === finding.id
                    ? "border-brand/40 bg-brand/5"
                    : "border-border bg-white hover:border-brand/25"
                }`}
              >
                <div className="flex items-center gap-2">
                  <SeverityBadge severity={finding.severity} />
                  <span className="font-medium text-navy">{finding.title}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-ink-muted">
                  {finding.summary}
                </p>
              </button>
            </li>
          ))}
        </ul>

        <article className="rounded-2xl border border-border bg-white p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <SeverityBadge severity={active.severity} />
            <h3 className="text-lg font-semibold text-navy">{active.title}</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {active.summary}
          </p>

          <div className="mt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
              What this means
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-navy">
              {active.meaning}
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-teal/25 bg-teal/5 p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal">
              What to tell your AI builder
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-navy">
              {active.aiPrompt}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
