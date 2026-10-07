import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "BootRise — Build like you have a CTO",
    template: "%s | BootRise",
  },
  description:
    "Your AI can build the product. BootRise helps you understand what you're actually about to release — architecture, security, compliance, and release readiness.",
  metadataBase: new URL("https://bootrise.com"),
  openGraph: {
    title: "BootRise — Build like you have a CTO",
    description:
      "The layer between AI-built and release-ready. Understand your project before you ship.",
    siteName: "BootRise",
    type: "website",
    images: [
      {
        url: "/bootrise-logo.png",
        width: 1200,
        height: 630,
        alt: "BootRise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BootRise — Build like you have a CTO",
    description:
      "Your AI can build the product. BootRise helps you understand what you're about to release.",
    images: ["/bootrise-logo.png"],
  },
  icons: {
    icon: "/bootrise-logo.png",
    apple: "/bootrise-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
