import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Blueprint Labs — AI Enablement Partner | Austin, TX",
  description:
    "Your team has AI tools. Blueprint Labs makes sure they actually use them. AI readiness audits, team training, strategy, and adoption support for businesses ready to make AI work.",
  keywords: [
    "AI enablement",
    "AI adoption",
    "AI readiness audit",
    "AI training",
    "AI consulting Austin",
    "AI transformation",
    "workflow automation",
    "AI team training",
  ],
  openGraph: {
    title: "Blueprint Labs — AI Enablement Partner",
    description: "Your team has AI tools. We make sure they actually use them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
