import type { AreaStatus, Severity } from "@/data/demo/marketly";

const areaStyles: Record<AreaStatus, string> = {
  critical: "bg-critical/10 text-critical",
  warning: "bg-medium/15 text-medium",
  good: "bg-ok/10 text-ok",
};

const areaDot: Record<AreaStatus, string> = {
  critical: "🔴",
  warning: "🟡",
  good: "🟢",
};

const severityStyles: Record<Severity, string> = {
  critical: "bg-critical/10 text-critical border-critical/20",
  high: "bg-high/10 text-high border-high/20",
  medium: "bg-medium/10 text-medium border-medium/20",
  ok: "bg-ok/10 text-ok border-ok/20",
  review: "bg-medium/10 text-medium border-medium/20",
};

export function AreaBadge({ status }: { status: AreaStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${areaStyles[status]}`}
    >
      <span aria-hidden>{areaDot[status]}</span>
      {status === "critical"
        ? "Critical"
        : status === "warning"
          ? "Review"
          : "Good"}
    </span>
  );
}

export function SeverityBadge({ severity }: { severity: Severity }) {
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-0.5 text-xs font-semibold capitalize ${severityStyles[severity]}`}
    >
      {severity}
    </span>
  );
}
