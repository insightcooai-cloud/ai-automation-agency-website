import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blueprint Labs — AI Strategy & Automation",
  description:
    "Steve Jun helps businesses build the right AI foundation — starting with diagnosis, not tools. AI readiness audits, workflow automation, and data-driven strategy.",
  keywords: [
    "AI automation",
    "AI consulting",
    "workflow automation",
    "business intelligence",
    "AI strategy",
    "AI audit",
  ],
  openGraph: {
    title: "Blueprint Labs — AI Strategy & Automation",
    description: "Build your AI foundation the right way.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
