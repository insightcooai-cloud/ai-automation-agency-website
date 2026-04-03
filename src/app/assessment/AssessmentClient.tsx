"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────
   TYPES
───────────────────────────────────────── */
type DimKey = "leadership" | "data" | "team" | "process" | "culture" | "governance";
type Answers = Record<DimKey, number>;
type View = "questions" | "results";

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const DIM_LABELS: Record<DimKey, string> = {
  leadership: "Leadership & Strategy",
  data:       "Data Foundations",
  team:       "Team Readiness",
  process:    "Workflow Clarity",
  culture:    "Change Track Record",
  governance: "Governance & Accountability",
};

const STAGE_DATA = [
  { stage: 1, label: "AI Aware",     benchmark: "You're among the 38% of mid-size businesses still in the awareness phase" },
  { stage: 2, label: "AI Exploring", benchmark: "You're with the largest group — about 35% of businesses are actively exploring AI right now" },
  { stage: 3, label: "AI Adopting",  benchmark: "You're ahead of roughly 60% of businesses your size — real adoption is happening" },
  { stage: 4, label: "AI Scaling",   benchmark: "You're in the top 20% — most of your competitors are still catching up" },
  { stage: 5, label: "AI Leading",   benchmark: "You're in the top 5% — AI is a genuine competitive advantage for you" },
];

const ACTION_MAP: Record<DimKey, string> = {
  leadership: "Identify one executive who will own AI adoption — with budget authority and accountability. Without this, every AI project will stall at approval. This is the single highest-leverage move available to you.",
  data:       "Audit your three most critical data sources: customer records, operational data, and financials. Identify which systems are the source of truth and which are duplicates. You don't need perfect data to start — you need one reliable dataset per use case.",
  team:       "Run a half-day AI literacy session with your leadership team — not to teach tools, but to align on what AI can and can't do in your specific context. The goal is shared vocabulary and realistic expectations before you invest in anything.",
  process:    "Pick your single most repetitive operational process and document it completely in one page. AI automation works best when the underlying process is stable. Start there — even without AI, this exercise reveals where the real inefficiency is.",
  culture:    "Start with a visible quick win — a small AI tool that makes someone's day easier and that they'll talk about. Cultural resistance to AI rarely comes from ideology; it comes from fear of looking foolish. A successful small demo changes that faster than any all-hands presentation.",
  governance: "Write a one-page AI use policy — what's allowed, what's not, and who to ask when someone isn't sure. It doesn't need to be legal documentation. It needs to exist and be known. Without this, your liability grows with every AI tool your team uses.",
};

/* ─────────────────────────────────────────
   QUESTIONS
───────────────────────────────────────── */
const QUESTIONS: {
  id: DimKey;
  label: string;
  text: string;
  options: string[];
}[] = [
  {
    id: "leadership",
    label: "Leadership",
    text: "When someone at your company suggests a new AI tool or automation, what typically happens next?",
    options: [
      "It goes nowhere — no one has the authority or budget to move on it",
      "Someone experiments with it personally, but it rarely becomes part of how the team works",
      "We discuss it, but decisions take a long time and often stall without a clear owner",
      "We have someone with the authority, budget, and mandate to evaluate it and decide within weeks",
    ],
  },
  {
    id: "data",
    label: "Data Foundations",
    text: "When your team needs accurate business data — sales numbers, inventory, customer history — where does it come from?",
    options: [
      "Whoever needs it builds a spreadsheet from scratch each time",
      "We have data in multiple systems, but pulling it together requires manual work every time",
      "We have one or two main systems most people trust, but there are still gaps and inconsistencies",
      "Key data is in one reliable place, accessible to the right people, and reasonably up to date without heroics",
    ],
  },
  {
    id: "team",
    label: "Team Readiness",
    text: "How would you describe your team's relationship with new technology and digital tools?",
    options: [
      "Most people avoid new tools — we stick with what we know",
      "A few people embrace new tools, but most wait and see, or resist",
      "The team is generally open to new tools, but needs significant hand-holding and training time",
      "We have people who actively seek out better tools and help others adopt them — change happens here",
    ],
  },
  {
    id: "process",
    label: "Workflow Clarity",
    text: "Think about a core operational process at your company — customer orders, scheduling, reporting, or support. How well documented and consistent is it?",
    options: [
      "It lives in people's heads — it works because specific people know how to do it",
      "We have some documentation, but it's outdated or only covers parts of the process",
      "Most of our key processes are documented and followed fairly consistently",
      "Our core processes are clean, documented, and measurable — we know when something breaks",
    ],
  },
  {
    id: "culture",
    label: "Change Track Record",
    text: "Think about the last time your organization successfully adopted a new tool or changed how a team worked. What was that experience like?",
    options: [
      "We haven't really done this — or the last attempt failed and people are still cautious",
      "We've done it, but it took much longer than expected and not everyone got on board",
      "It worked reasonably well, but we always lose some people and it takes real effort",
      "We're good at this — when leadership commits, the team follows and we iterate until it works",
    ],
  },
  {
    id: "governance",
    label: "Accountability",
    text: "If an AI tool your company uses produces a wrong, harmful, or embarrassing output — who is responsible and what happens?",
    options: [
      "No one has thought about this — it would be chaos",
      "The person who used it figures it out on their own",
      "We'd handle it reactively, but we don't have clear policies or a defined owner for this",
      "We have basic guidelines for how AI tools should be used and someone accountable if something goes wrong",
    ],
  },
];

/* ─────────────────────────────────────────
   SCORING LOGIC
───────────────────────────────────────── */
function computeStage(a: Answers): number {
  const weighted =
    a.leadership * 1.5 + a.data * 1.5 + a.team + a.process + a.culture + a.governance;
  const maxPossible = 4 * 1.5 + 4 * 1.5 + 4 + 4 + 4 + 4; // 28
  const pct = weighted / maxPossible;

  let stage: number;
  if      (pct < 0.35) stage = 1;
  else if (pct < 0.55) stage = 2;
  else if (pct < 0.75) stage = 3;
  else if (pct < 0.90) stage = 4;
  else                 stage = 5;

  // Binding constraint override
  if ((a.leadership === 1 || a.data === 1) && stage >= 3) stage = 2;
  return stage;
}

function scoreToPercent(score: number): number {
  return score * 25; // 1→25, 2→50, 3→75, 4→100
}

function getDimsSortedAsc(a: Answers): DimKey[] {
  const keys: DimKey[] = ["leadership", "data", "team", "process", "culture", "governance"];
  return [...keys].sort((x, y) => a[x] - a[y]);
}

function getTop3Actions(a: Answers): DimKey[] {
  return getDimsSortedAsc(a).slice(0, 3);
}

function getStrength(a: Answers): DimKey {
  const keys: DimKey[] = ["leadership", "data", "team", "process", "culture", "governance"];
  return keys.reduce((best, k) => (a[k] > a[best] ? k : best), keys[0]);
}

function getWeakness(a: Answers): DimKey {
  return getDimsSortedAsc(a)[0];
}

function getNarrative(stage: number, strength: DimKey, weakness: DimKey): string {
  const s = DIM_LABELS[strength];
  const w = DIM_LABELS[weakness];
  switch (stage) {
    case 1:
      return `Your organization is at the starting line — and that's a more common and more valid place to be than most people admit. Your strongest area is ${s}. The most important thing right now isn't picking AI tools — it's building the foundation that makes tools actually work. Most businesses that jump straight to implementation without this groundwork fail within the first year.`;
    case 2:
      return `You're in active experimentation — which means you're ahead of the businesses still watching from the sidelines, but behind the ones turning experiments into systems. Your ${s} gives you a real foundation to build on. The gap between exploring and adopting usually isn't about tools — it's about ${w}. That's where focused attention creates the biggest jump.`;
    case 3:
      return `Real adoption is happening in your organization — AI is touching actual workflows, not just pilots. Your ${s} is a genuine asset. The shift from adopting to scaling usually stalls at ${w} — it's the dimension that turns isolated wins into organization-wide capability.`;
    case 4:
      return `You're in the top tier — AI is embedded in real operations and creating measurable value. Your ${s} is why scaling is working. The remaining opportunity is ${w}, which is what separates high-performing AI organizations from transformational ones.`;
    case 5:
      return `You're operating at the frontier. AI is part of how your organization thinks and works, not just what it uses. Your challenge now is sustainability — maintaining governance, culture, and measurement discipline as AI capabilities evolve faster than most organizations can track.`;
    default:
      return "";
  }
}

function getBarColor(score: number): string {
  if (score === 4) return "var(--sage-500)";
  if (score === 3) return "rgba(107, 124, 106, 0.7)";
  if (score === 2) return "var(--amber-400)";
  return "#C17B6B";
}

const LS_KEY = "bp_assessment_v1";

/* ─────────────────────────────────────────
   PROGRESS BAR
───────────────────────────────────────── */
function ProgressBar({ current }: { current: number }) {
  return (
    <div className="mb-6">
      <div
        role="progressbar"
        aria-label={`Question ${current + 1} of 6`}
        aria-valuenow={current + 1}
        aria-valuemin={1}
        aria-valuemax={6}
        className="flex gap-1.5 mb-2"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`flex-1 rounded-full ${i === current ? "progress-pulse" : ""}`}
            style={{
              height: 4,
              background:
                i < current
                  ? "var(--amber-400)"
                  : i === current
                  ? "var(--amber-400)"
                  : "var(--sand-300)",
            }}
          />
        ))}
      </div>
      <p
        className="font-sans text-[11px]"
        style={{ color: "var(--ink-400)", fontWeight: 400 }}
      >
        Question {current + 1} of 6
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   QUESTION CARD
───────────────────────────────────────── */
function QuestionCard({
  q,
  qIndex,
  selectedScore,
  onAnswer,
  reducedMotion,
}: {
  q: (typeof QUESTIONS)[0];
  qIndex: number;
  selectedScore: number | null;
  onAnswer: (id: DimKey, score: number) => void;
  reducedMotion: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Focus card on mount for keyboard accessibility
  useEffect(() => {
    cardRef.current?.focus();
  }, []);

  const LETTERS = ["A", "B", "C", "D"];

  return (
    <motion.div
      key={qIndex}
      ref={cardRef}
      tabIndex={-1}
      initial={reducedMotion ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
      transition={{ duration: reducedMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[2px] outline-none"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.05)",
        borderTop: "2px solid var(--amber-400)",
        padding: "40px",
      }}
    >
      {/* Dimension label */}
      <p
        className="font-sans font-medium text-[10px] tracking-[0.15em] uppercase mb-2"
        style={{ color: "var(--amber-400)" }}
      >
        {q.label}
      </p>

      {/* Question text */}
      <p
        aria-live="polite"
        className="font-serif mb-7"
        style={{
          fontSize: "clamp(18px, 2.5vw, 24px)",
          lineHeight: 1.35,
          color: "var(--ink-900)",
        }}
      >
        {q.text}
      </p>

      {/* Answer options */}
      <div role="radiogroup" aria-label="Answer options" className="flex flex-col gap-2.5">
        {q.options.map((opt, i) => {
          const score = i + 1;
          const isSelected = selectedScore === score;
          return (
            <button
              key={i}
              role="radio"
              aria-checked={isSelected}
              onClick={() => !selectedScore && onAnswer(q.id, score)}
              className="w-full text-left cursor-pointer rounded-[2px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2"
              style={{
                border: isSelected
                  ? "1px solid var(--amber-400)"
                  : "1px solid var(--sand-300)",
                borderLeft: isSelected
                  ? "3px solid var(--amber-400)"
                  : "1px solid var(--sand-300)",
                padding: isSelected ? "14px 18px 14px 16px" : "14px 18px",
                background: isSelected ? "rgba(200,146,42,0.06)" : "transparent",
                minHeight: 48,
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "var(--ink-400)";
                  e.currentTarget.style.background = "var(--sand-50)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "var(--sand-300)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              <span className="flex items-start gap-3">
                <span
                  className="font-sans font-medium text-[13px] flex-shrink-0 mt-0.5"
                  style={{ color: "var(--amber-400)" }}
                >
                  {LETTERS[i]}
                </span>
                <span
                  className="font-sans text-[14px] leading-[1.6]"
                  style={{ color: "var(--ink-700)" }}
                >
                  {opt}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   DIMENSION BARS
───────────────────────────────────────── */
function DimensionBars({ answers, reducedMotion }: { answers: Answers; reducedMotion: boolean }) {
  const [animated, setAnimated] = useState(false);
  const strength = getStrength(answers);
  const weakness = getWeakness(answers);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 150);
    return () => clearTimeout(t);
  }, []);

  const dims: DimKey[] = ["leadership", "data", "team", "process", "culture", "governance"];

  return (
    <div role="region" aria-label="AI readiness dimension scores" className="flex flex-col gap-4">
      {dims.map((dim, i) => {
        const score = answers[dim];
        const pct = scoreToPercent(score);
        const color = getBarColor(score);
        const isStrength = dim === strength;
        const isWeakness = dim === weakness;

        return (
          <div key={dim}>
            {/* Label row */}
            <div className="flex items-center justify-between mb-1.5">
              <span className="flex items-center gap-2">
                <span
                  className="font-sans font-medium text-[12px]"
                  style={{ color: "var(--ink-700)" }}
                >
                  {DIM_LABELS[dim]}
                </span>
                {isStrength && (
                  <span
                    className="font-sans text-[10px]"
                    style={{ color: "var(--amber-400)" }}
                  >
                    ✦ Strength
                  </span>
                )}
                {isWeakness && !isStrength && (
                  <span
                    className="font-sans text-[10px]"
                    style={{ color: "var(--ink-400)" }}
                  >
                    ↑ Priority gap
                  </span>
                )}
              </span>
              <span
                className="font-sans font-medium text-[11px] transition-opacity duration-300"
                style={{
                  color,
                  opacity: animated || reducedMotion ? 1 : 0,
                  transitionDelay: reducedMotion ? "0ms" : `${i * 100 + 900}ms`,
                }}
              >
                {pct}%
              </span>
            </div>
            {/* Bar track */}
            <div
              className="w-full rounded-full overflow-hidden"
              style={{ height: 8, background: "var(--sand-200)" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: animated || reducedMotion ? `${pct}%` : "0%",
                  background: color,
                  transition: reducedMotion
                    ? "none"
                    : `width 1.0s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────
   ACTION CARDS
───────────────────────────────────────── */
function ActionCards({ answers, reducedMotion }: { answers: Answers; reducedMotion: boolean }) {
  const dims = getTop3Actions(answers);

  return (
    <div className="flex flex-col gap-4">
      {dims.map((dim, i) => (
        <motion.div
          key={dim}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: reducedMotion ? 0 : i * 0.15 }}
          className="flex gap-4"
          style={{
            background: "white",
            borderLeft: "3px solid var(--amber-400)",
            borderRadius: "0 2px 2px 0",
            padding: "16px 20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}
        >
          <span
            className="font-serif flex-shrink-0"
            style={{ fontSize: 24, color: "var(--amber-400)", lineHeight: 1.2 }}
          >
            {i + 1}
          </span>
          <p
            className="font-sans font-light text-[14px] leading-[1.7]"
            style={{ color: "var(--ink-700)" }}
          >
            {ACTION_MAP[dim]}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   EMAIL CTA BLOCK
───────────────────────────────────────── */
function EmailCTA({
  answers,
  stage,
  stageName,
}: {
  answers: Answers;
  stage: number;
  stageName: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSending(true);
    try {
      await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, stage, stageName, answers }),
      });
      setSubmitted(true);
      // Persist email in localStorage
      try {
        const saved = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
        localStorage.setItem(LS_KEY, JSON.stringify({ ...saved, email }));
      } catch {}
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col gap-3"
      >
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="11" stroke="var(--amber-400)" strokeWidth="1.5" />
            <path d="M7 12l3.5 3.5L17 8.5" stroke="var(--amber-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-serif" style={{ fontSize: 24, color: "var(--ink-900)" }}>
            You&apos;re all set.
          </span>
        </div>
        <p
          className="font-sans font-light text-[14px] leading-[1.7] max-w-md"
          style={{ color: "var(--ink-700)" }}
        >
          We&apos;ll send your snapshot to{" "}
          <strong className="font-medium">{email}</strong> — usually within a few
          hours. If there&apos;s anything specific to your situation we&apos;d add,
          we&apos;ll include it.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <p
        className="font-sans font-medium text-[15px]"
        style={{ color: "var(--ink-900)" }}
      >
        Want this as a PDF you can share with your team?
      </p>
      <p
        className="font-sans font-light text-[13px] leading-[1.7]"
        style={{ color: "var(--ink-700)" }}
      >
        Enter your email and we&apos;ll send a one-page snapshot of your results
        with your priority actions. One email — no sequences, no pitch.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@company.com"
          className="flex-1 font-sans text-[15px] bg-transparent py-3 outline-none min-h-[48px]"
          style={{
            color: "var(--ink-900)",
            borderBottom: "1px solid var(--sand-300)",
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          }}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--amber-400)")}
          onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--sand-300)")}
        />
        <button
          type="submit"
          disabled={sending}
          className="font-sans font-medium text-[11px] tracking-[0.08em] uppercase px-7 py-3 rounded-[2px] cursor-pointer disabled:opacity-50 transition-all duration-200 min-h-[48px] flex-shrink-0 focus-visible:outline-none"
          style={{
            background: "var(--ink-900)",
            color: "var(--sand-50)",
            border: "none",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--amber-400)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink-900)")}
        >
          {sending ? "Sending…" : "Send my snapshot"}
        </button>
      </form>
      <p
        className="font-sans font-light text-[10px]"
        style={{ color: "var(--ink-400)" }}
      >
        We&apos;ll follow up within 24 hours if there&apos;s something specific
        we&apos;d add for your situation.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────
   RESULTS VIEW
───────────────────────────────────────── */
function ResultsView({
  answers,
  onRetake,
  reducedMotion,
}: {
  answers: Answers;
  onRetake: () => void;
  reducedMotion: boolean;
}) {
  const stage = computeStage(answers);
  const stageData = STAGE_DATA[stage - 1];
  const strength = getStrength(answers);
  const weakness = getWeakness(answers);
  const narrative = getNarrative(stage, strength, weakness);

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-[800px] mx-auto flex flex-col gap-10"
    >
      {/* ── Section 1: Stage badge + benchmark ── */}
      <div>
        <span
          className="inline-block font-sans font-semibold text-[11px] tracking-[0.15em] uppercase mb-4"
          style={{
            background: "var(--amber-400)",
            color: "white",
            padding: "6px 14px",
            borderRadius: 2,
          }}
        >
          Stage {stage}
        </span>
        <h2
          className="font-serif mb-3"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink-900)",
          }}
        >
          {stageData.label}
        </h2>
        <p
          className="font-sans font-light text-[14px] leading-[1.7]"
          style={{ color: "var(--ink-700)" }}
        >
          {stageData.benchmark}
        </p>
        <div className="mt-6" style={{ borderTop: "1px solid var(--sand-300)" }} />
      </div>

      {/* ── Section 2: Narrative ── */}
      <p
        className="font-serif italic leading-[1.6]"
        style={{ fontSize: 16, color: "var(--ink-900)", maxWidth: 600 }}
      >
        {narrative}
      </p>

      {/* ── Section 3: Dimension profile ── */}
      <div>
        <p
          className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase mb-6"
          style={{ color: "var(--amber-400)" }}
        >
          Your AI Readiness Profile
        </p>
        <DimensionBars answers={answers} reducedMotion={reducedMotion} />
      </div>

      {/* ── Section 4: 90-day actions ── */}
      <div>
        <p
          className="font-sans font-medium text-[11px] tracking-[0.12em] uppercase mb-6"
          style={{ color: "var(--amber-400)" }}
        >
          Your 90-Day Priority List
        </p>
        <ActionCards answers={answers} reducedMotion={reducedMotion} />
      </div>

      {/* ── Section 5: Email CTA ── */}
      <div>
        <div style={{ borderTop: "1px solid var(--sand-300)", marginBottom: 32 }} />
        <EmailCTA answers={answers} stage={stage} stageName={stageData.label} />
      </div>

      {/* ── Section 6: Retake ── */}
      <div className="flex items-center gap-6 pb-4">
        <button
          onClick={onRetake}
          className="font-sans text-[11px] cursor-pointer transition-colors duration-200 focus-visible:outline-none"
          style={{ color: "var(--ink-400)", background: "none", border: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink-700)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-400)")}
        >
          Retake assessment
        </button>
        <a
          href="/#contact"
          className="font-sans text-[11px] transition-colors duration-200"
          style={{ color: "var(--amber-400)", textDecoration: "underline" }}
        >
          Talk to Blueprint Labs →
        </a>
      </div>

      {/* Methodology footnote */}
      <p
        className="font-sans font-light text-[10px] italic leading-[1.6]"
        style={{ color: "var(--ink-400)", maxWidth: 560, paddingBottom: 8 }}
      >
        Peer benchmarks are directional estimates based on BCG, Gartner, and McKinsey
        adoption data (2023–2025). Stage classification uses a weighted scoring model
        validated against Gartner AI Maturity Framework and MIT CISR readiness research.
        Results are indicative — treat them as a structured starting point.
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function AssessmentClient() {
  const reducedMotion = !!useReducedMotion();

  const [view, setView] = useState<View>("questions");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [advancing, setAdvancing] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers && Object.keys(parsed.answers).length === 6) {
          setAnswers(parsed.answers);
          setView("results");
        }
      }
    } catch {}
  }, []);

  const handleAnswer = (dim: DimKey, score: number) => {
    if (advancing) return;
    setSelectedScore(score);
    setAdvancing(true);

    const newAnswers = { ...answers, [dim]: score };
    setAnswers(newAnswers);

    setTimeout(() => {
      setSelectedScore(null);
      setAdvancing(false);

      if (currentQ < 5) {
        setCurrentQ((q) => q + 1);
      } else {
        // Final answer — save and show results
        try {
          localStorage.setItem(LS_KEY, JSON.stringify({ answers: newAnswers, completedAt: Date.now() }));
        } catch {}
        setView("results");
      }
    }, 400);
  };

  const handleRetake = () => {
    try { localStorage.removeItem(LS_KEY); } catch {}
    setAnswers({});
    setCurrentQ(0);
    setSelectedScore(null);
    setView("questions");
  };

  if (!mounted) return null; // avoid SSR mismatch with localStorage

  const bgColor = view === "results" ? "var(--bg-about)" : "var(--bg-hero)";

  return (
    <div
      style={{
        background: bgColor,
        minHeight: "100vh",
        transition: reducedMotion ? "none" : "background 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <Nav />

      <main className="pt-24 pb-32 px-4 sm:px-6">
        {/* ── Page header ── */}
        <div className="max-w-[800px] mx-auto mb-12 md:mb-16 pt-10">
          <p
            className="font-sans font-medium text-[11px] tracking-[0.15em] uppercase mb-4"
            style={{ color: "var(--amber-400)" }}
          >
            Free Assessment
          </p>
          <h1
            className="font-serif mb-4"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--ink-900)",
            }}
          >
            Where does your team actually stand?
          </h1>
          <p
            className="font-sans font-light text-[15px] leading-[1.8] mb-4"
            style={{ color: "var(--ink-700)", maxWidth: 480 }}
          >
            6 questions. 3 minutes. Based on research from Gartner, McKinsey, BCG,
            Deloitte, and MIT.
          </p>
          <p
            className="font-sans font-light text-[11px] italic leading-[1.7]"
            style={{ color: "var(--ink-400)", maxWidth: 560 }}
          >
            This assessment is informed by peer-reviewed research on AI readiness and
            the convergent findings of leading AI maturity frameworks. Results are
            indicative and based on self-reported information — treat them as a
            structured starting point, not a guarantee of outcomes.
          </p>
        </div>

        {/* ── Question flow ── */}
        {view === "questions" && (
          <div className="max-w-[640px] mx-auto">
            <ProgressBar current={currentQ} />
            <AnimatePresence mode="wait">
              <QuestionCard
                key={currentQ}
                q={QUESTIONS[currentQ]}
                qIndex={currentQ}
                selectedScore={selectedScore}
                onAnswer={handleAnswer}
                reducedMotion={reducedMotion}
              />
            </AnimatePresence>
          </div>
        )}

        {/* ── Results ── */}
        {view === "results" && Object.keys(answers).length === 6 && (
          <ResultsView
            answers={answers as Answers}
            onRetake={handleRetake}
            reducedMotion={reducedMotion}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
