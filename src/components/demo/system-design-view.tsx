"use client";

import { useState } from "react";
import { marketly } from "@/data/demo/marketly";

export function SystemDesignView() {
  const [showWhy, setShowWhy] = useState(false);
  const { architecture } = marketly;
  const nodeMap = Object.fromEntries(
    architecture.nodes.map((node) => [node.id, node]),
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-semibold text-navy">
          System Design
        </h2>
        <p className="mt-1 text-ink-muted">
          How Marketly&apos;s repositories connect underneath the product.
        </p>
      </div>

      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-white sm:aspect-[16/10]">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          role="img"
          aria-label="Marketly architecture diagram"
        >
          {architecture.edges.map(([from, to]) => {
            const a = nodeMap[from];
            const b = nodeMap[to];
            return (
              <line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(33,44,68,0.2)"
                strokeWidth="0.4"
              />
            );
          })}
          {architecture.nodes.map((node) => (
            <g key={node.id}>
              <rect
                x={node.x - 10}
                y={node.y - 5}
                width="20"
                height="10"
                rx="2"
                fill={
                  node.id === "orders"
                    ? "rgba(217,119,6,0.12)"
                    : node.id === "web"
                      ? "rgba(0,115,230,0.12)"
                      : "#f4f7fb"
                }
                stroke={
                  node.id === "orders" ? "rgba(217,119,6,0.5)" : "rgba(33,44,68,0.15)"
                }
                strokeWidth="0.35"
              />
              <text
                x={node.x}
                y={node.y + 1}
                textAnchor="middle"
                fontSize="2.6"
                fill="#212c44"
                fontWeight="600"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="rounded-2xl border border-medium/30 bg-medium/5 p-5">
        <p className="text-sm font-semibold text-navy">
          I found something worth reviewing.
        </p>
        <p className="mt-3 text-sm font-semibold text-medium">
          ⚠️ {architecture.finding.title}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {architecture.finding.summary}
        </p>
        {!showWhy ? (
          <button
            type="button"
            onClick={() => setShowWhy(true)}
            className="mt-4 rounded-xl bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy/90"
          >
            Ask BootRise why
          </button>
        ) : (
          <div className="mt-4 rounded-xl border border-border bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              Plain English
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy">
              {architecture.finding.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
