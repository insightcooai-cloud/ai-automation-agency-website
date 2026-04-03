import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import GrainCanvas from "@/components/GrainCanvas";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
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
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <GrainCanvas />
        {children}
      </body>
    </html>
  );
}
