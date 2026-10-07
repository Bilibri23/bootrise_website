"use client";

import { marketly, type DemoView } from "@/data/demo/marketly";
import { AreaBadge } from "./status-badge";

type OverviewViewProps = {
  onNavigate: (view: DemoView) => void;
};

export function OverviewView({ onNavigate }: OverviewViewProps) {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-ink-muted">Project</p>
        <h2 className="font-display mt-1 text-3xl font-semibold text-navy">
          {marketly.name}
        </h2>
        <p className="mt-2 text-ink-muted">{marketly.tagline}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Repositories
          </p>
          <p className="mt-2 font-display text-3xl font-semibold text-navy">
            {marketly.repositories.length}
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-5 sm:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Release Readiness
          </p>
          <div className="mt-3 flex items-end gap-4">
            <p className="font-display text-3xl font-semibold text-navy">
              {marketly.releaseReadiness}%
            </p>
            <div className="mb-1.5 h-2 flex-1 overflow-hidden rounded-full bg-surface">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-teal"
                style={{ width: `${marketly.releaseReadiness}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <p className="text-lg text-navy">{marketly.summary}</p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {marketly.areas.map((area) => (
          <button
            key={area.id}
            type="button"
            onClick={() => onNavigate(area.view)}
            className="rounded-2xl border border-border bg-white p-5 text-left transition hover:border-brand/40 hover:shadow-sm"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-navy">{area.title}</h3>
              <AreaBadge status={area.status} />
            </div>
            <p className="mt-3 text-sm text-ink-muted">{area.label}</p>
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-muted">
          Repositories
        </h3>
        <ul className="mt-3 divide-y divide-border rounded-2xl border border-border bg-white">
          {marketly.repositories.map((repo) => (
            <li key={repo.id}>
              <button
                type="button"
                onClick={() => onNavigate("repositories")}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-surface/80"
              >
                <div>
                  <p className="font-medium text-navy">{repo.name}</p>
                  <p className="text-sm text-ink-muted">{repo.description}</p>
                </div>
                <span className="text-xs font-medium text-ink-muted">
                  {repo.language}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
