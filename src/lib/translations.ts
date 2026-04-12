export type Lang = "en" | "kr";

export const translations = {
  nav: {
    services:   { en: "Services",       kr: "서비스" },
    approach:   { en: "Approach",       kr: "접근 방식" },
    about:      { en: "About",          kr: "소개" },
    contact:    { en: "Contact",        kr: "문의" },
    assessment: { en: "Free Assessment",kr: "무료 진단" },
    cta:        { en: "Book an intro call", kr: "상담 예약" },
    mobileWork: { en: "Work with us",   kr: "함께 시작하기" },
    langLabel:  { en: "Lang:",          kr: "언어:" },
  },

  hero: {
    label:     { en: "AI Enablement Partner · Austin, TX", kr: "AI 도입 전문 파트너 · Austin, TX" },
    badge:     { en: "Led by an Amazon Sr. PM",            kr: "Amazon 수석 PM 운영" },
    headline:  { en: "Understaffed, not underpowered. AI handles the rest.", kr: "인력이 부족해도 운영은 멈추지 않습니다." },
    subtitle:  { en: "We find which workflows AI can handle, build the systems, and hand them off to your team — without sending sensitive documents or technical drawings outside your environment.", kr: "어떤 반복 업무를 AI가 대신할 수 있는지 찾아 시스템을 구축하고 팀에 인계합니다 — 민감한 문서와 도면이 외부로 나가지 않도록." },
    finePrint: { en: "Specializing in Korean-owned suppliers and manufacturing operations in Austin & Dallas.", kr: "오스틴 & 달라스 삼성 협력업체 및 한인 제조·운영 기업 전문." },
    cta1:      { en: "Get your free AI audit",  kr: "무료 AI 진단 받기" },
    cta2:      { en: "See how it works",        kr: "진행 방식 보기" },
  },

  ticker: {
    items: {
      en: [
        "74% of companies struggle to scale AI value — even after significant investment (BCG, 2024)",
        "Only 5% of CFOs see actual cost savings from AI (Gartner, 2025)",
        "48% of employees are not ready to derive value from AI",
        "AI adoption is employee-driven in 60% of SMBs — without a system",
        "Well-scoped SMB automations typically pay back in 2–6 months",
        "51% of CIOs say AI skills gaps will impede 2026 objectives",
        "66% of AI-using SMBs save $500–$2,000 per month",
      ],
      kr: [
        "74%의 기업이 상당한 투자 후에도 AI 가치 확장에 어려움을 겪고 있습니다 (BCG, 2024)",
        "AI에서 실제 비용 절감을 확인한 CFO는 5%에 불과합니다 (Gartner, 2025)",
        "직원의 48%가 AI에서 가치를 창출할 준비가 되어 있지 않습니다",
        "중소기업의 60%에서 AI 도입이 시스템 없이 직원 주도로 이루어집니다",
        "범위가 명확한 중소기업 자동화는 일반적으로 2–6개월 내에 투자금을 회수합니다",
        "CIO의 51%가 AI 기술 격차가 2026년 목표 달성을 방해할 것이라고 말합니다",
        "AI를 활용하는 중소기업의 66%가 월 $500–$2,000을 절약합니다",
      ],
    },
    reducedMotion: {
      en: "73% of AI projects never reach production",
      kr: "AI 프로젝트의 73%가 실제 운영에 도달하지 못합니다",
    },
    source: { en: "Source: Gartner, McKinsey, BCG", kr: "출처: Gartner, McKinsey, BCG" },
    ariaLabel: { en: "AI adoption statistics — scroll of industry statistics", kr: "AI 도입 통계 스크롤" },
  },

  problem: {
    sectionLabel: { en: "The Problem",  kr: "문제" },
    bigQuote: {
      en: "Every team is being told to \"use AI.\" Almost none know where to start — or how to do it without sensitive documents ending up somewhere they shouldn't. That's the gap we close.",
      kr: "모든 팀이 \"AI를 활용하라\"는 말을 듣고 있습니다. 어디서 시작해야 할지, 민감한 문서가 외부로 새지 않으면서 어떻게 해야 할지 아는 곳은 거의 없습니다. 바로 그 간극을 우리가 채웁니다.",
    },
    pullQuote: { en: "74% of CFOs say AI saves time. Only 5% report actual cost savings.", kr: "CFO의 74%가 AI가 시간을 절약한다고 말합니다. 하지만 실제 비용 절감을 보고하는 비율은 5%에 불과합니다." },
    pullQuoteAttribution: { en: "— Gartner CFO Leadership Series, 2025", kr: "— Gartner CFO 리더십 시리즈, 2025" },
    chartLabel0:    { en: "The AI Adoption Gap",        kr: "AI 도입 격차" },
    chartLabel1:    { en: "Where the gap comes from",   kr: "격차의 원인" },
    chartSource:    { en: "Source: Gartner CIO Survey 2025", kr: "출처: Gartner CIO 설문조사 2025" },
    chartBar1_0:    { en: "Investing in AI tools",       kr: "AI 도구에 투자" },
    chartBar1_1:    { en: "Adoption barriers",           kr: "도입 장벽" },
    chartBar2:      { en: "Successful adoption",         kr: "성공적인 도입" },
    chartGap:       { en: "78% gap",                     kr: "78% 격차" },
    chartToggle0:   { en: "← Overview",                  kr: "← 개요" },
    chartToggle1:   { en: "Root causes →",               kr: "근본 원인 →" },
    stat1Label:     { en: "of AI projects fail to reach production",     kr: "의 AI 프로젝트가 실제 운영에 도달하지 못함" },
    stat1Source:    { en: "McKinsey, 2024",               kr: "McKinsey, 2024" },
    stat2Label:     { en: "of companies have scaled AI successfully",    kr: "의 기업만이 AI 확장에 성공" },
    stat2Source:    { en: "BCG",                          kr: "BCG" },
    stat3Label:     { en: "barrier isn't technology — it's adoption",   kr: "가장 큰 장벽은 기술이 아닌 도입" },
    stat3Source:    { en: "Harvard Business Review",      kr: "Harvard Business Review" },
  },

  socialProof: {
    credentials: {
      en: [
        { value: "10+", unit: "yrs",    label: "Business intelligence & operations experience" },
        { value: "Sr. PM", unit: "",    label: "Currently at Amazon" },
        { value: "1:1",  unit: "",      label: "Founder-led, every engagement" },
        { value: "Austin", unit: "TX",  label: "Serving businesses locally & remotely" },
      ],
      kr: [
        { value: "10+",    unit: "년",   label: "비즈니스 인텔리전스 & 운영 경험" },
        { value: "수석 PM", unit: "",    label: "현재 Amazon 재직 중" },
        { value: "1:1",    unit: "",     label: "설립자 직접 참여, 모든 프로젝트" },
        { value: "Austin", unit: "TX",  label: "오스틴 현지 및 원격 서비스" },
      ],
    },
  },

  services: {
    sectionLabel: { en: "02 — What We Do",     kr: "02 — 서비스" },
    headline:     { en: "From assessment to adoption — everything your team needs to make AI work.", kr: "진단부터 도입까지 — 팀이 AI를 실제로 활용하는 데 필요한 모든 것." },
    pullQuote:    { en: "Generic one-size-fits-all AI training fails to deliver results because workforce needs and AI use cases are diverse and constantly evolving.", kr: "획일적인 AI 교육이 효과를 내지 못하는 이유는 구성원의 필요와 AI 활용 사례가 다양하고 끊임없이 진화하기 때문입니다." },
    pullQuoteAttribution: { en: "— Gartner CIO Perspectives, December 2025", kr: "— Gartner CIO 인사이트, 2025년 12월" },
    midCta: { en: "Not sure where to start? Take the 5-minute readiness audit.", kr: "어디서 시작할지 모르시겠나요? 5분 준비도 진단을 받아보세요." },
    midCtaBtn: { en: "Take the free audit →", kr: "무료 진단 받기 →" },
    items: [
      {
        n: "01",
        title:    { en: "Assess",           kr: "진단" },
        headline: { en: "AI Readiness Audit",kr: "AI 준비도 진단" },
        desc:     { en: "We evaluate your current tools, workflows, data readiness, and team capabilities. You get a clear-eyed view of where you stand — and where AI can realistically move the needle.", kr: "현재 사용 중인 도구, 워크플로우, 데이터 준비 상태, 팀 역량을 평가합니다. 현재 위치와 AI가 실질적으로 기여할 수 있는 부분을 명확하게 파악할 수 있습니다." },
        tags:     { en: ["Current State Analysis", "Data Readiness", "Capability Mapping"], kr: ["현황 분석", "데이터 준비도", "역량 매핑"] },
      },
      {
        n: "02",
        title:    { en: "Educate",                  kr: "교육" },
        headline: { en: "Team Training & Workshops", kr: "팀 교육 및 워크숍" },
        desc:     { en: "Hands-on training tailored to your team's actual workflows — not generic prompt tutorials. From leadership buy-in sessions to department-specific enablement.", kr: "범용적인 프롬프트 튜토리얼이 아닌, 실제 업무 흐름에 맞춘 실습 교육. 경영진 설득 세션부터 부서별 맞춤 교육까지." },
        tags:     { en: ["Workshops", "Prompt Engineering", "Change Management"], kr: ["워크숍", "프롬프트 엔지니어링", "변화 관리"] },
      },
      {
        n: "03",
        title:    { en: "Guide",               kr: "전략" },
        headline: { en: "Strategy & Roadmap",  kr: "전략 및 로드맵" },
        desc:     { en: "We prioritize use cases by impact and feasibility. You get a phased roadmap grounded in your real constraints — budget, data, and team readiness.", kr: "영향력과 실현 가능성을 기준으로 활용 사례를 우선순위화합니다. 예산, 데이터, 팀 역량 등 실제 제약 조건에 기반한 단계별 로드맵을 제공합니다." },
        tags:     { en: ["Use Case Prioritization", "ROI Modeling", "Phased Roadmap"], kr: ["활용 사례 우선순위화", "ROI 모델링", "단계별 로드맵"] },
      },
      {
        n: "04",
        title:    { en: "Build",                    kr: "구축" },
        headline: { en: "Custom Implementations",   kr: "맞춤형 구현" },
        desc:     { en: "Agents, automations, dashboards, and integrations designed for your specific operations. No generic templates. Built on resilient tools like n8n and Make.", kr: "귀사의 운영에 맞게 설계된 에이전트, 자동화, 대시보드, 통합. 범용 템플릿 없음. n8n 및 Make 같은 안정적인 도구 기반." },
        tags:     { en: ["AI Agents", "Workflow Automation", "Integrations"], kr: ["AI 에이전트", "워크플로우 자동화", "시스템 통합"] },
      },
      {
        n: "05",
        title:    { en: "Enable",                       kr: "정착" },
        headline: { en: "Adoption & Ongoing Support",   kr: "도입 정착 및 지속 지원" },
        desc:     { en: "SOPs, documentation, team training, and monthly advisory retainers. We don't disappear after handoff — we ensure AI usage sticks on day 90 and beyond.", kr: "SOP, 문서화, 팀 교육, 월간 자문. 인수인계 후 사라지지 않습니다 — 90일 이후에도 AI 활용이 지속되도록 보장합니다." },
        tags:     { en: ["SOPs", "Documentation", "Monthly Retainer"], kr: ["SOP 문서화", "운영 가이드", "월간 자문"] },
      },
    ],
  },

  howIWork: {
    sectionLabel: { en: "03 — How It Works",               kr: "03 — 진행 방식" },
    headline:     { en: "Diagnosis before prescription. Always.", kr: "처방 전에 진단. 항상." },
    phases: [
      {
        n: "01",
        title:    { en: "Discovery",    kr: "현황 파악" },
        timeline: { en: "1–2 weeks",   kr: "1–2주" },
        points:   {
          en: ["Free AI readiness audit", "Stakeholder interviews & workflow observation", "Current state assessment & gap analysis"],
          kr: ["무료 AI 준비도 진단", "이해관계자 인터뷰 및 워크플로우 관찰", "현황 평가 및 격차 분석"],
        },
      },
      {
        n: "02",
        title:    { en: "Strategy",     kr: "전략 수립" },
        timeline: { en: "2–3 weeks",   kr: "2–3주" },
        points:   {
          en: ["Use case prioritization by impact & feasibility", "Phased roadmap design", "ROI modeling & business case development"],
          kr: ["영향력 및 실현 가능성에 따른 활용 사례 우선순위화", "단계별 로드맵 설계", "ROI 모델링 및 비즈니스 케이스 개발"],
        },
      },
      {
        n: "03",
        title:    { en: "Build & Train",  kr: "구축 및 교육" },
        timeline: { en: "4–8 weeks",      kr: "4–8주" },
        points:   {
          en: ["Implementation sprints with your team", "Hands-on workshops & prompt engineering training", "Custom automations, agents, and integrations"],
          kr: ["팀과 함께하는 구현 스프린트", "실습 워크숍 및 프롬프트 엔지니어링 교육", "맞춤형 자동화, 에이전트, 시스템 통합"],
        },
      },
      {
        n: "04",
        title:    { en: "Enable & Scale",  kr: "정착 및 확장" },
        timeline: { en: "Ongoing",         kr: "지속" },
        points:   {
          en: ["SOPs, documentation & change management", "Adoption monitoring & optimization", "Monthly advisory retainer for scaling guidance"],
          kr: ["SOP, 문서화 및 변화 관리", "도입 모니터링 및 최적화", "확장을 위한 월간 자문 서비스"],
        },
      },
    ],
  },

  results: {
    sectionLabel: { en: "What This Looks Like",            kr: "실제 사례" },
    headline:     { en: "In practice, this is what changes.", kr: "실제로 이것이 달라집니다." },
    subtext:      { en: "Scenarios based on Blueprint Labs client engagements. Results vary by scope, team size, and complexity.", kr: "Blueprint Labs 고객 참여를 기반으로 한 시나리오. 결과는 범위, 팀 규모, 복잡도에 따라 다를 수 있습니다." },
    before:       { en: "Before", kr: "이전" },
    after:        { en: "After",  kr: "이후" },
    benchmarkSource: { en: "Industry benchmarks: Thryv AI & Small Business Survey (500+ US SMBs, 2024–2025)", kr: "업계 벤치마크: Thryv AI & 소기업 설문조사 (미국 중소기업 500+, 2024–2025)" },
    benchmarks: {
      en: [
        { metric: "66%",       label: "of AI-using SMBs\nsave $500–$2K/mo" },
        { metric: "20+ hrs",   label: "saved per month\nby 58% of SMBs" },
        { metric: "2–6 months",label: "typical payback\nfor focused automations" },
      ],
      kr: [
        { metric: "66%",       label: "AI 활용 중소기업의\n월 $500–$2K 절약" },
        { metric: "20+ 시간",   label: "중소기업의 58%가\n매월 절약" },
        { metric: "2–6개월",    label: "집중 자동화의\n일반적인 투자 회수 기간" },
      ],
    },
    scenarios: {
      en: [
        {
          n: "01",
          industry: "Manufacturing / Supplier Operations",
          before: "A Samsung supplier processing incoming POs and compliance requests manually — cross-checking specs against drawings, updating three internal systems, preparing status reports for HQ. Two people, 14+ hours a week, every week.",
          after: "Automated PO triage, spec cross-referencing, and HQ status report generation. Data stays on-premise — no cloud upload. The team went from 14 hours to under 2 hours per week and eliminated a class of manual errors that had triggered compliance flags.",
          metric: "86%",
          metricLabel: "reduction in manual processing time",
        },
        {
          n: "02",
          industry: "Service Business / Customer Ops",
          before: "A service business fielding 60+ repetitive customer emails daily — quote requests, appointment confirmations, FAQ responses. Owner spending 3 hours a day just on inbox.",
          after: "AI triage + draft responses auto-generated for the most common request types. Owner reviews and sends in 20 minutes. Genuinely new customers get faster replies than before.",
          metric: "~90%",
          metricLabel: "reduction in email response time",
        },
        {
          n: "03",
          industry: "Sales Team / Reporting",
          before: "A sales team spending every Monday morning rebuilding the same performance dashboard in Excel. Meeting delayed until noon. Half the team showing up unprepared.",
          after: "Live dashboard auto-updates from CRM. Weekly summary email writes itself and lands in inboxes Friday at 4pm. Monday morning starts with decisions, not spreadsheets.",
          metric: "4+ hrs",
          metricLabel: "reclaimed per person, every week",
        },
      ],
      kr: [
        {
          n: "01",
          industry: "제조 / 공급업체 운영",
          before: "삼성 협력업체로서 입고되는 발주와 컴플라이언스 요청을 수동으로 처리 — 사양서와 도면을 대조 확인하고, 세 개의 내부 시스템을 업데이트하며, 본사 보고용 현황 보고서를 작성. 두 명이 매주 14시간 이상 소요.",
          after: "발주 분류, 사양서 대조, 본사 현황 보고서 생성 자동화. 데이터는 사내 환경에 보관 — 클라우드 업로드 없음. 주당 작업 시간이 14시간에서 2시간 미만으로 줄었고, 컴플라이언스 오류도 제거되었습니다.",
          metric: "86%",
          metricLabel: "수동 처리 시간 감소",
        },
        {
          n: "02",
          industry: "서비스업 / 고객 운영",
          before: "하루 60건 이상의 반복적인 고객 이메일을 처리하는 서비스 업체 — 견적 요청, 예약 확인, FAQ 응답. 사장님이 하루 3시간을 받은 편지함에만 쏟고 있었습니다.",
          after: "가장 일반적인 요청 유형에 대한 AI 분류 + 초안 자동 생성. 사장님은 20분 안에 검토하고 전송합니다. 신규 고객은 오히려 더 빠른 답변을 받게 되었습니다.",
          metric: "~90%",
          metricLabel: "이메일 응답 시간 감소",
        },
        {
          n: "03",
          industry: "영업팀 / 보고",
          before: "매주 월요일 오전마다 동일한 성과 대시보드를 Excel에서 다시 만드는 영업팀. 회의가 정오까지 지연되고, 팀의 절반이 준비 없이 참석.",
          after: "CRM에서 대시보드 자동 업데이트. 주간 요약 이메일이 금요일 오후 4시에 자동으로 수신함에 도착. 월요일 오전은 스프레드시트가 아닌 의사결정으로 시작.",
          metric: "4+ 시간",
          metricLabel: "주당 1인당 회수 시간",
        },
      ],
    },
  },

  about: {
    sectionLabel:  { en: "04 — About",  kr: "04 — 소개" },
    headline:      { en: "Built by an operator, not a consultant.", kr: "컨설턴트가 아닌 실무자가 만들었습니다." },
    bio1: { en: "I'm Steve Jun. I've spent over a decade at the intersection of data, operations, and product — building BI systems, managing sales and business operations, and shipping products that had to work in the real world. Today, I'm a Senior Program Manager at Amazon.", kr: "안녕하세요, 전 스티브입니다. 저는 지난 10년 이상을 데이터, 운영, 제품의 교차점에서 BI 시스템 구축, 영업 및 비즈니스 운영 관리, 실제 환경에서 작동해야 하는 제품 개발에 종사해 왔습니다. 현재는 Amazon의 수석 프로그램 매니저로 재직 중입니다." },
    bio2: { en: "I started Blueprint Labs because I kept seeing the same problem: companies investing in AI tools that nobody actually used. Not because the tools were bad — but because nobody did the hard work of teaching teams how to use them and redesigning workflows around them.", kr: "Blueprint Labs를 시작한 이유는 같은 문제를 반복적으로 목격했기 때문입니다. 아무도 실제로 사용하지 않는 AI 도구에 투자하는 기업들. 도구가 나쁜 것이 아니라 — 팀에게 사용법을 가르치고 그에 맞게 워크플로우를 재설계하는 어려운 작업을 아무도 하지 않았기 때문입니다." },
    bio3: { en: "That's what I do. I assess where you are, educate your team on what's possible, and build the systems that make AI adoption stick — not just on day one, but on day 90.", kr: "그것이 바로 제가 하는 일입니다. 현재 상태를 진단하고, 팀에게 가능성을 교육하며, AI 도입이 정착되는 시스템을 구축합니다 — 첫날뿐만 아니라 90일 이후에도." },
    bio4: { en: "We work closely with Korean-owned businesses in Austin and Dallas — and bring the same cultural fluency and operational depth to every engagement.", kr: "오스틴과 달라스의 한인 기업과 긴밀히 협력합니다. 문화적 이해와 깊은 운영 경험을 모든 참여에 그대로 적용합니다." },
    pullQuote:            { en: "48% of CIOs report their employees are not ready to derive value from AI.", kr: "CIO의 48%가 직원들이 AI에서 가치를 창출할 준비가 되어 있지 않다고 보고합니다." },
    pullQuoteAttribution: { en: "— Gartner CIO Talent Planning Survey, 2026", kr: "— Gartner CIO 인재 계획 설문조사, 2026" },
    pullQuoteSubLine:     { en: "This is the exact gap Blueprint Labs was built to close.", kr: "이것이 바로 Blueprint Labs가 해결하기 위해 만들어진 격차입니다." },
    personalQuote:        { en: "I'm not going to pitch you on AI. I'm going to show you where your team is stuck, what's actually possible with the tools you already have, and then help you make it work. Personally.", kr: "AI를 판매하러 오는 것이 아닙니다. 팀이 어디서 막혀 있는지, 이미 가진 도구로 무엇이 가능한지를 보여드리고, 그것이 실제로 작동하도록 함께 만들겠습니다. 직접." },
    personalQuoteAttr:    { en: "— Steve Jun, Founder, Blueprint Labs", kr: "— 전 스티브, 설립자, Blueprint Labs" },
    careerArc: { en: "Career Arc", kr: "경력" },
    career: [
      {
        period: "2025 — Present",
        role: { en: "Founder",               kr: "설립자" },
        org:  "Blueprint Labs",
        desc: { en: "AI readiness audits, team training, and adoption strategy for SMBs across Austin and Dallas.", kr: "오스틴과 달라스 중소기업을 위한 AI 준비도 진단, 팀 교육, 도입 전략." },
      },
      {
        period: "2022 — Present",
        role: { en: "Senior Program Manager", kr: "수석 프로그램 매니저" },
        org:  "Amazon",
        desc: { en: "Data, operations, and product at scale. Cross-functional execution across BI systems and operational infrastructure.", kr: "대규모 데이터, 운영, 제품. BI 시스템 및 운영 인프라 전반의 교차 기능 실행." },
      },
      {
        period: "2015 — 2022",
        role: { en: "Business Intelligence & Operations", kr: "비즈니스 인텔리전스 & 운영" },
        org:  "Fortune 500",
        desc: { en: "Built BI systems, dashboards, and workflow automation across sales ops, business ops, and data storytelling.", kr: "영업 운영, 비즈니스 운영, 데이터 스토리텔링에 걸쳐 BI 시스템, 대시보드, 워크플로우 자동화 구축." },
      },
      {
        period: "2014 — Present",
        role: { en: "AI Enablement Practice",            kr: "AI 도입 실무" },
        org:  { en: "Independent Research & Consulting", kr: "독립 연구 및 컨설팅" },
        desc: { en: "AI readiness frameworks, prompt engineering curriculum, and adoption strategy — before it was called AI enablement.", kr: "AI 준비도 프레임워크, 프롬프트 엔지니어링 커리큘럼, 도입 전략 — AI 도입이라는 말이 생기기 전부터." },
      },
    ],
  },

  faq: {
    sectionLabel: { en: "FAQ",               kr: "자주 묻는 질문" },
    headline:     { en: "Common questions.",  kr: "자주 묻는 질문들." },
    whoLabel:     { en: "Who is this for?",   kr: "누구를 위한 서비스인가요?" },
    whoBody:      { en: "Teams that feel pressure to adopt AI but aren't sure where to start, what it will actually do for them, or whether it's safe for their sensitive data. You don't need to have tried AI already — we help you get it right from the beginning.", kr: "AI 도입 압박을 느끼지만 어디서 시작해야 할지, 실제로 무엇이 달라질지, 민감한 데이터를 안전하게 다룰 수 있는지 확신이 없는 팀을 위한 서비스입니다. 이미 AI를 시도해봤을 필요는 없습니다 — 처음부터 제대로 할 수 있도록 도와드립니다." },
    whoFit:       { en: "Particularly strong fit for Korean-owned suppliers and manufacturing operations in Texas — including Samsung suppliers, importers, and logistics teams where confidential specs, drawings, and compliance documents are handled daily.", kr: "텍사스의 한인 공급업체 및 제조 기업에 특히 적합합니다 — 삼성 협력업체, 수입업체, 도면·사양서·계약서 등 기밀 문서를 매일 다루는 물류·운영팀 포함." },
    stillQuestions: { en: "Still have questions?",              kr: "아직 궁금한 점이 있으신가요?" },
    stillSubtext:   { en: "The free readiness audit answers most of them in context.", kr: "무료 준비도 진단이 맥락에 맞게 대부분의 질문에 답해 드립니다." },
    cta1: { en: "Take the free assessment",  kr: "무료 진단 받기" },
    cta2: { en: "Book a free intro call",    kr: "무료 상담 예약" },
    items: [
      {
        q: { en: "Our work involves sensitive technical drawings and confidential documents. Is it safe to use AI?", kr: "저희는 민감한 기술 도면과 기밀 문서를 다룹니다. AI와 함께 사용해도 안전한가요?" },
        a: { en: "This is the most important question to ask — and the most common concern we hear from manufacturing and supplier teams.\n\nMost AI services (like ChatGPT) process your data on external servers. For technical drawings, engineering specs, and confidential supplier documents, that's a real problem.\n\nWe build self-hosted solutions where your data never leaves your environment. No cloud upload. No external processing. Documents stay on your servers or on-premise infrastructure — while your team still benefits from AI automation. Before any build begins, we define clear data boundaries and deliver a data handling specification you can present to your compliance or security team.", kr: "제조업체와 공급업체에서 가장 많이 받는 질문이며, 반드시 확인해야 할 사항입니다.\n\nChatGPT 같은 대부분의 AI 서비스는 외부 서버에서 데이터를 처리합니다. 기술 도면, 사양서, 기밀 공급업체 문서에는 이것이 심각한 문제가 됩니다.\n\n저희는 데이터가 귀사 환경을 절대 벗어나지 않는 자체 호스팅 솔루션을 구축합니다. 클라우드 업로드 없음. 외부 처리 없음. 문서는 귀사 서버 또는 사내 인프라에 그대로 보관됩니다 — 동시에 AI 자동화의 혜택도 누립니다. 구축 시작 전에 명확한 데이터 경계를 정의하고, 보안 또는 컴플라이언스 팀에 제출할 수 있는 데이터 처리 명세서를 함께 제공합니다." },
      },
      {
        q: { en: "How long does a typical engagement take?", kr: "일반적인 참여 기간은 얼마나 됩니까?" },
        a: { en: "The readiness audit takes 1–2 weeks. A full assess → guide → build → enable engagement typically runs 6–12 weeks, depending on scope. We work in focused sprints so you see results quickly — not months of consulting before anything happens.", kr: "준비도 진단은 1–2주가 소요됩니다. 진단 → 전략 → 구축 → 정착 전체 참여는 범위에 따라 일반적으로 6–12주가 걸립니다. 결과를 빠르게 확인할 수 있도록 집중 스프린트 방식으로 진행합니다 — 아무것도 일어나지 않는 몇 달간의 컨설팅이 아닙니다." },
      },
      {
        q: { en: "How is this different from an AI consulting firm?", kr: "일반 AI 컨설팅 회사와 무엇이 다릅니까?" },
        a: { en: "Most AI consultants deliver strategy decks. The most common complaint SMBs have — backed by multiple independent surveys — is that engagements produce slide decks without working automations, and disappear after delivery without training or change management support.\n\nBlueprint Labs is built differently: we start with a free readiness audit, build working automations and agents (not presentations), train your team on how to use them, and stay as an ongoing partner through adoption. Every engagement is founder-led — you work with Steve directly, not handed off to a junior team.", kr: "대부분의 AI 컨설턴트는 전략 자료를 제공합니다. 여러 독립 설문조사에 따르면 중소기업이 가장 많이 하는 불만은 실제 작동하는 자동화 없이 슬라이드만 만들고, 교육이나 변화 관리 지원 없이 사라진다는 것입니다.\n\nBlueprint Labs는 다르게 구성되었습니다: 무료 준비도 진단으로 시작하고, 발표 자료가 아닌 실제 작동하는 자동화와 에이전트를 구축하며, 팀이 사용하는 방법을 교육하고, 도입 전 과정에서 지속적인 파트너로 남습니다. 모든 참여는 설립자가 직접 진행합니다 — 주니어 팀에 인계되지 않습니다." },
      },
      {
        q: { en: "Do you work with our existing tools?", kr: "기존 도구와 함께 작업합니까?" },
        a: { en: "Absolutely. We start by evaluating what you already have — most teams don't need new tools, they need their current tools configured properly and their workflows redesigned to actually use them. We optimize what exists before recommending anything new.", kr: "물론입니다. 현재 보유한 것을 평가하는 것부터 시작합니다 — 대부분의 팀은 새로운 도구가 필요한 것이 아니라 현재 도구를 제대로 설정하고 실제로 활용할 수 있도록 워크플로우를 재설계해야 합니다. 새로운 것을 추천하기 전에 기존 것을 최적화합니다." },
      },
      {
        q: { en: "What if we don't know where to start?", kr: "어디서부터 시작해야 할지 모른다면?" },
        a: { en: "That's exactly what the readiness audit is designed for. You don't need to have an AI strategy before reaching out. We'll assess your current state, show you what's possible, and help you prioritize by impact and feasibility. No commitment required — just an honest conversation about where AI can realistically help your business.", kr: "준비도 진단이 바로 그것을 위해 설계되었습니다. 연락하기 전에 AI 전략이 있을 필요가 없습니다. 현재 상태를 평가하고, 가능한 것을 보여주며, 영향력과 실현 가능성에 따라 우선순위를 정하는 데 도움을 드립니다. 의무 없음 — 단지 AI가 귀사 비즈니스를 어떻게 도울 수 있는지에 대한 솔직한 대화입니다." },
      },
      {
        q: { en: "What happens after handoff?", kr: "인수인계 후에는 어떻게 됩니까?" },
        a: { en: "We don't disappear. Every engagement includes team training, documentation, and SOPs. For ongoing support, we offer monthly advisory retainers — adoption monitoring, optimization, and scaling guidance as your AI maturity grows.", kr: "사라지지 않습니다. 모든 참여에는 팀 교육, 문서화, SOP가 포함됩니다. 지속적인 지원을 위해 월간 자문 서비스를 제공합니다 — AI 성숙도가 성장함에 따라 도입 모니터링, 최적화, 확장 지침." },
      },
      {
        q: { en: "What does the free AI readiness audit include?", kr: "무료 AI 준비도 진단에는 무엇이 포함됩니까?" },
        a: { en: "A focused diagnostic covering your current AI usage, data readiness, workflow pain points, and team capabilities. You'll walk away with a clear picture of where you stand and the 2–3 highest-impact opportunities specific to your business — not a generic report, but an honest assessment of what's realistic for your team. Most importantly, you'll walk away knowing your top 2–3 highest-ROI workflow opportunities — the ones most likely to pay back within 90 days.", kr: "현재 AI 사용, 데이터 준비 상태, 워크플로우 문제점, 팀 역량을 다루는 집중 진단. 현재 위치와 비즈니스에 특화된 2–3가지 가장 영향력 높은 기회를 명확하게 파악하고 돌아가실 것입니다 — 범용적인 보고서가 아닌, 팀에게 현실적으로 가능한 것에 대한 솔직한 평가. 가장 중요한 것은 90일 이내에 수익을 낼 가능성이 가장 높은 상위 2–3가지 ROI 워크플로우 기회를 알고 돌아가는 것입니다." },
      },
    ],
  },

  contact: {
    sectionLabel:   { en: "Get in Touch",          kr: "문의하기" },
    headline:       { en: "Let's start with an honest conversation.", kr: "솔직한 대화로 시작합시다." },
    subtitle:       { en: "Tell us where you're stuck. We'll follow up within 24 hours with honest feedback on whether we're a fit — no pressure, no sales pitch.", kr: "어디서 막혀 있는지 알려주세요. 24시간 이내에 맞는지 여부에 대한 솔직한 피드백으로 연락드리겠습니다 — 압박 없음, 영업 없음." },
    howLabel:       { en: "How engagements work",  kr: "참여 방식" },
    howBody:        { en: "We start with a free readiness audit (no commitment). Implementation engagements are scoped to your needs — most run 6–12 weeks. Monthly advisory retainers available after delivery.", kr: "무료 준비도 진단으로 시작합니다 (의무 없음). 구현 참여는 귀사의 필요에 맞게 범위가 정해지며 — 대부분 6–12주 진행됩니다. 납품 후 월간 자문 서비스 제공." },
    howBodyFree:    { en: "free readiness audit",  kr: "무료 준비도 진단" },
    labelName:      { en: "Name",                  kr: "이름" },
    labelRequired:  { en: "(required)",            kr: "(필수)" },
    labelEmail:     { en: "Email",                 kr: "이메일" },
    labelChallenge: { en: "Biggest operational challenge", kr: "가장 큰 운영 과제" },
    labelLang:      { en: "Preferred language",    kr: "선호 언어" },
    placeholderName:{ en: "Your name",             kr: "성함" },
    placeholderEmail:{ en: "you@company.com",      kr: "이메일 주소" },
    placeholderSelect: { en: "Select one…",        kr: "선택하세요…" },
    placeholderLang: { en: "Select…",              kr: "선택하세요…" },
    langOptions: {
      en: ["English", "한국어 (Korean)"],
      kr: ["English", "한국어 (Korean)"],
    },
    challenges: {
      en: ["Supplier / PO management", "Report writing & HQ reporting", "Manual data entry & reporting", "Document review & compliance", "Customer communication & follow-up", "Team training & AI adoption", "Something else"],
      kr: ["공급업체 / 발주 관리", "보고서 작성 및 본사 보고", "수동 데이터 입력 및 보고", "문서 검토 및 컴플라이언스", "고객 커뮤니케이션 및 후속 조치", "팀 교육 및 AI 도입", "기타"],
    },
    submitBtn:      { en: "Request a free intro call", kr: "무료 상담 신청" },
    sendingBtn:     { en: "Sending…",              kr: "전송 중…" },
    successTitle:   { en: "Message sent.",         kr: "메시지가 전송되었습니다." },
    successSubtext: { en: "We'll be in touch within 24 hours.", kr: "24시간 이내에 연락드리겠습니다." },
  },

  footer: {
    links: {
      en: [["#services", "Services"], ["#blueprint-method", "Process"], ["#about", "About"], ["#contact", "Contact"]],
      kr: [["#services", "서비스"], ["#blueprint-method", "진행 방식"], ["#about", "소개"], ["#contact", "문의"]],
    },
  },
};
