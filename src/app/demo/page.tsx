import type { Metadata } from "next";
import { DemoShell } from "@/components/demo/demo-shell";

export const metadata: Metadata = {
  title: "Explore Marketly | BootRise Interactive Preview",
  description:
    "See what BootRise sees — explore a sample AI-built marketplace across repositories, system design, security, and compliance.",
};

export default function DemoPage() {
  return <DemoShell />;
}
