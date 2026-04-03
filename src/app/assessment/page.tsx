import type { Metadata } from "next";
import AssessmentClient from "./AssessmentClient";

export const metadata: Metadata = {
  title: "Free AI Readiness Assessment | Blueprint Labs",
  description:
    "Find out where your team stands on AI adoption in 3 minutes. 6 behavioral questions, instant results, research-backed scoring. No email required to see your results.",
  openGraph: {
    title: "Free AI Readiness Assessment | Blueprint Labs",
    description:
      "Find out where your team stands on AI adoption in 3 minutes. Instant results, no email required.",
    type: "website",
  },
  alternates: {
    canonical: "https://blueprintlabs.ai/assessment",
  },
};

export default function AssessmentPage() {
  return <AssessmentClient />;
}
