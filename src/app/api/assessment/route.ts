import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, stage, stageName, answers } = body;

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const dimLabels: Record<string, string> = {
    leadership: "Leadership & Strategy",
    data: "Data Foundations",
    team: "Team Readiness",
    process: "Workflow Clarity",
    culture: "Change Track Record",
    governance: "Governance & Accountability",
  };

  const scoreLabel = (s: number) => ["", "25% — Needs attention", "50% — Developing", "75% — Good", "100% — Strong"][s] ?? s;

  const answerRows = answers
    ? Object.entries(answers)
        .map(([k, v]) => `<tr><td style="padding:6px 12px;color:#7A7568">${dimLabels[k] ?? k}</td><td style="padding:6px 12px;font-weight:500">${scoreLabel(Number(v))}</td></tr>`)
        .join("")
    : "";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Blueprint Labs <onboarding@resend.dev>",
        to: ["insightcoo.ai@gmail.com"],
        subject: `Assessment result: ${stageName} — ${email}`,
        reply_to: email,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1814;">
            <h2 style="font-size:24px;margin-bottom:4px;">New Assessment Submission</h2>
            <p style="color:#7A7568;margin-bottom:24px;font-size:14px;">${email}</p>
            <div style="background:#FFF8EE;border-left:3px solid #C8922A;padding:16px 20px;margin-bottom:24px;border-radius:0 4px 4px 0;">
              <p style="margin:0;font-size:11px;color:#C8922A;letter-spacing:0.1em;text-transform:uppercase;font-weight:600">Stage ${stage}</p>
              <p style="margin:4px 0 0;font-size:22px;font-weight:400">${stageName}</p>
            </div>
            <h3 style="font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:#7A7568;margin-bottom:12px;">Dimension Scores</h3>
            <table style="width:100%;border-collapse:collapse;background:#FDFAF5;border-radius:4px;overflow:hidden;">
              ${answerRows}
            </table>
            <p style="margin-top:24px;font-size:13px;color:#7A7568;">
              Reply to this email to follow up with ${email}.
            </p>
          </div>
        `,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    }
    const data = await res.json();
    console.error("Resend error:", data);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  } catch (err) {
    console.error("Assessment route error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
