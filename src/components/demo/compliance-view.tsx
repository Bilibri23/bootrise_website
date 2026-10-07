"use client";

import { useState } from "react";
import { marketly } from "@/data/demo/marketly";
import { AreaBadge } from "./status-badge";

export function ComplianceView() {
  const [selected, setSelected] = useState<string>(
    marketly.compliance.focus.id,
  );
  const showFocus = selected === marketly.compliance.focus.id;

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Compliance
          </h2>
          <p className="mt-1 text-ink-muted">
            {marketly.compliance.framework} readiness signals — not legal
            certification.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-white px-5 py-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Readiness
          </p>
          <p className="font-display text-3xl font-semibold text-navy">
            {marketly.compliance.readiness}%
          </p>
        </div>
      </div>

      <p className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink-muted">
        {marketly.compliance.disclaimer}
      </p>

      <ul className="grid gap-3 sm:grid-cols-2">
        {marketly.compliance.items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setSelected(item.id)}
              className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                selected === item.id
                  ? "border-brand/40 bg-brand/5"
                  : "border-border bg-white hover:border-brand/25"
              }`}
            >
              <div>
                <p className="font-medium text-navy">{item.title}</p>
                <p className="mt-1 text-sm text-ink-muted">{item.label}</p>
              </div>
              <AreaBadge status={item.status} />
            </button>
          </li>
        ))}
      </ul>

      {showFocus && (
        <article className="rounded-2xl border border-critical/25 bg-critical/5 p-5 sm:p-6">
          <p className="text-sm font-semibold text-critical">
            🔴 {marketly.compliance.focus.title}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy">
            {marketly.compliance.focus.summary}
          </p>
          <div className="mt-5 rounded-xl border border-border bg-white p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-brand">
              Recommended action
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-navy">
              {marketly.compliance.focus.action}
            </p>
          </div>
        </article>
      )}
    </div>
  );
}
