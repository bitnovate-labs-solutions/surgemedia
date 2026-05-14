import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export type FooterSectionProps = {
  showLeadSection?: boolean;
  /** Top CTA eyebrow label */
  leadBadge?: string;
  /** Main headline in the lead card (default: homepage campaign headline) */
  leadTitle?: ReactNode;
  /** Supporting line under the headline */
  leadDescription?: ReactNode;
  leadCtaHref?: string;
  leadCtaLabel?: string;
};

/** Preset lead copy for in-clinic / waiting-room funnel pages */
export const footerLeadClinicAdvertising: Pick<
  FooterSectionProps,
  "leadTitle" | "leadDescription"
> = {
  leadTitle: "Ready to put your brand in the waiting room?",
  leadDescription:
    "See what packages we offer or get in touch to talk through your goals first.",
};

const faqs = [
  {
    q: "What does Surge Media actually do?",
    a: "We provide two core services: in-clinic screen advertising in GP waiting rooms, and digital growth services (social media, content, reviews, and branding) for businesses that want stronger local visibility and lead flow.",
  },
  {
    q: "Who is your advertising audience?",
    a: "Our clinic-screen audience is everyday Malaysians visiting GP clinics. That gives brands access to broad, real-world consumer attention in a waiting-room setting with 15-25 minutes of dwell time.",
  },
  {
    q: "How is campaign performance measured?",
    a: "For clinic-screen campaigns, we track placement delivery and response signals such as QR actions, then report monthly. For digital services, we track content consistency, review activity, profile quality, and conversion-readiness indicators.",
  },
  {
    q: "Can I use Surge Media if I am not in healthcare?",
    a: "Yes. We work with healthcare professionals, health brands, FMCG, and other general-market businesses. Our clinic placements reach broad consumer audiences, and our digital services support wider market growth.",
  },
  {
    q: "Are your ads and content compliant with local guidelines?",
    a: "Yes. We create campaign materials with MMC and MAB guidelines in mind, and we review content before deployment so messaging is suitable for clinic environments and public-facing channels.",
  },
  {
    q: "How do we get started?",
    a: "Start with a quick consultation or free visibility audit. We review your goals, audience, location focus, and current presence, then propose a practical rollout across advertising and/or digital services.",
  },
];

const heroMetricCards = [
  {
    label: "GP visits per person, per year",
    value: "2.7",
    summary: "doctor visits per Malaysian every year",
    more: "Nearly 3 clinic visits per person annually. Every visit is a waiting room — and a screen in front of them.",
    source:
      "National Health Morbidity Survey (NHMS) 2019, Institute for Public Health, Ministry of Health Malaysia.",
  },
  {
    label: "Patient arrivals at MOH facilities",
    value: "68.2M",
    summary: "patient arrivals at MOH facilities in 2023",
    more: "Total patient arrivals across Ministry of Health facilities, including inpatient, outpatient, and day care.",
    source:
      "MOH Health Facts 2024, Ministry of Health Malaysia (2023 arrivals).",
  },
  {
    label: "Waiting room time",
    value: "15-25 min",
    summary: "average waiting room time per clinic visit",
    more: "Waiting-room window before consultation; varies by clinic volume, specialty, and time of day.",
    source:
      "General practice dwell time benchmarks for Malaysian GP clinics. Waiting time varies by clinic volume and time of day.",
  },
] as const;

export function HeroMetricsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-10 border-t border-gray-900/5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 w-full">
        {heroMetricCards.map((card) => (
          <article
            key={card.label}
            tabIndex={0}
            className="group/card relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border border-gray-900/[0.06] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.06),0_16px_40px_-8px_rgba(15,23,42,0.14)] transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_12px_-2px_rgba(0,0,0,0.08),0_28px_56px_-12px_rgba(15,23,42,0.22)] hover:border-gray-900/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e33c1d]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E3DDD7] min-h-[148px] md:min-h-[158px] p-5 md:p-6"
          >
            <div className="relative z-10">
              <p className="text-[11px] tracking-[0.06em] text-gray-500 font-semibold mb-2 leading-snug">
                {card.label}
              </p>
              <p className="text-3xl font-black tracking-tight text-gray-900">
                {card.value}
              </p>
              <p className="text-sm text-gray-600 mt-1 leading-snug">
                {card.summary}
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-wider text-gray-400 md:hidden">
                Open below for notes &amp; source
              </p>
              <p className="mt-3 text-[10px] uppercase tracking-wider text-gray-400 hidden md:block opacity-70">
                Hover or focus for source &amp; notes
              </p>
            </div>

            <details className="relative z-10 md:hidden mt-3 rounded-xl border border-gray-200/45 bg-white/50 [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer list-none px-3 py-2.5 text-xs font-semibold text-gray-700 flex items-center justify-between gap-2">
                Source &amp; notes
                <span
                  className="text-gray-400 text-lg leading-none"
                  aria-hidden
                >
                  ▾
                </span>
              </summary>
              <div className="px-3 pb-3 pt-0 space-y-2 border-t border-gray-200/40">
                <p className="text-xs text-gray-600 leading-relaxed pt-3">
                  {card.more}
                </p>
                <p className="text-[11px] leading-snug text-gray-500 pb-1">
                  <span className="font-semibold text-gray-700">Source — </span>
                  {card.source}
                </p>
              </div>
            </details>

            {/* Desktop: full-width panel slides in from the right */}
            <div className="pointer-events-none absolute inset-0 z-20 hidden md:block overflow-hidden rounded-[inherit]">
              <div className="absolute inset-0 flex w-full max-h-full min-h-0 flex-col justify-start overflow-y-auto bg-gray-950/[0.98] px-5 py-5 rounded-[inherit] shadow-none translate-x-[calc(100%+12px)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:translate-x-0 group-focus-within/card:translate-x-0">
                <p className="text-xs text-gray-100 leading-relaxed">
                  {card.more}
                </p>
                <p className="text-[11px] leading-snug text-gray-300 mt-3">
                  <span className="font-semibold text-white">Source — </span>
                  {card.source}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10 border-t border-gray-900/5"
    >
      <div className="flex flex-col items-center text-center mb-16 animate-enter">
        <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
          What We Do
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-3xl">
          Get Seen. Get Customers.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-enter delay-100">
        <Link
          href="/contact"
          className="group flex flex-col h-full rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-900/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <span
            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e33c1d] text-white shadow-[0_10px_24px_rgba(227,60,29,0.35)]"
            aria-hidden
          >
            <iconify-icon icon="solar:display-bold" width="24" />
          </span>
          <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
            Clinic Screen Marketing
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
            Place your brand on GP clinic waiting room screens where attention
            is captive for 15-25 minutes and competition is minimal. Ideal for
            health brands, FMCG, insurance, lifestyle, and any brand targeting
            everyday Malaysians.
          </p>
          <span className="text-sm font-semibold text-[#e33c1d] inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
            Get in touch
            <iconify-icon icon="solar:arrow-right-linear" width="18" />
          </span>
        </Link>

        <Link
          href="/services"
          className="group flex flex-col h-full rounded-[2rem] bg-[#efeae5] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
        >
          <span
            className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#e33c1d] border border-gray-900/[0.08] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            aria-hidden
          >
            <iconify-icon icon="solar:chart-square-bold" width="24" />
          </span>
          <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-3">
            Digital Growth Services
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
            We help healthcare professionals, health brands, FMCG companies, and
            other general-market businesses grow their digital presence through
            social media management, content creation, Google review management,
            and branding.
          </p>
          <span className="text-sm font-semibold text-[#e33c1d] inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
            See all digital services
            <iconify-icon icon="solar:arrow-right-linear" width="18" />
          </span>
        </Link>
      </div>
    </section>
  );
}

const statsBandCards = [
  {
    title: "GP visits per person, per year",
    value: "2.7",
    subtitle: "doctor visits per Malaysian every year",
    more: "Nearly 3 clinic visits per person annually. Every visit is a waiting room — and a screen in front of them.\n\nNHMS captures self-reported healthcare utilisation at national level.",
    source:
      "National Health Morbidity Survey (NHMS) 2019, Institute for Public Health, Ministry of Health Malaysia.",
  },
  {
    title: "Patient arrivals at MOH facilities",
    value: "68.2M",
    subtitle: "patient arrivals in Malaysia in 2023",
    more: "68.2 million visits - up 18% from 2020. The clinic audience is not a niche. It is the Malaysian general public.\n\nFigure reflects aggregate arrivals across MOH facilities (inpatient, outpatient, and day care).",
    source:
      "MOH Health Facts 2024, Ministry of Health Malaysia. Covers inpatient, outpatient, and day care arrivals across all MOH facilities in 2023.",
  },
  {
    title: "Average waiting room time",
    value: "15-25 min",
    subtitle: "of uninterrupted attention per visit",
    more: "One screen. No competing ads. No skip button. Just your brand and an audience with nowhere else to be.\n\nBenchmark range — actual waits vary by clinic volume, specialty, and time of day.",
    source:
      "General practice dwell time benchmarks for Malaysian GP clinics. Waiting time varies by clinic volume and time of day.",
  },
] as const;

export function StatsBandSection() {
  const entranceDelay = ["", "delay-100", "delay-200"] as const;

  return (
    <section
      className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 md:pb-14"
      aria-label="Key audience metrics"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {statsBandCards.map((stat, i) => (
          <div key={stat.title} className={`animate-enter ${entranceDelay[i]}`}>
            <article
              tabIndex={0}
              className="stats-card-float group/card relative overflow-hidden h-full min-h-0 md:min-h-[300px] rounded-[1.5rem] md:rounded-[2rem] bg-gray-900 px-5 py-6 md:px-7 md:py-7 text-white border border-white/[0.07] shadow-[0_2px_8px_rgba(0,0,0,0.08),0_28px_60px_-12px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.03)_inset] transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-white/[0.12] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2),0_36px_72px_-16px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.06)_inset] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#E3DDD7]"
              style={{ animationDelay: `${i * 1.85}s` }}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-xs font-semibold tracking-wide text-gray-400 leading-snug">
                    {stat.title}
                  </p>
                  <span className="w-4 h-4 rounded-full bg-white/15 border border-white/[0.12] inline-flex items-center justify-center text-[9px] font-bold text-white/70 shrink-0">
                    i
                  </span>
                </div>
                <p className="text-4xl md:text-5xl font-semibold tracking-tight leading-none mb-3">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base font-medium text-white leading-snug">
                  {stat.subtitle}
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-wider text-gray-500 md:hidden">
                  Details &amp; source
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-wider text-gray-500 hidden md:block opacity-80">
                  Hover or focus for details &amp; source
                </p>
              </div>

              <details className="relative z-10 md:hidden mt-2 rounded-xl border border-white/[0.08] bg-black/25 [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer list-none px-3 py-2 text-xs font-semibold text-gray-200 flex items-center justify-between gap-2">
                  Details &amp; source
                  <span
                    className="text-gray-500 text-lg leading-none"
                    aria-hidden
                  >
                    ▾
                  </span>
                </summary>
                <div className="px-3 pb-3 pt-0 space-y-3 border-t border-white/[0.06]">
                  <p className="text-xs text-gray-300 leading-relaxed pt-3 whitespace-pre-line">
                    {stat.more}
                  </p>
                  <p className="text-[11px] leading-snug text-gray-400 pb-1">
                    <span className="font-semibold text-gray-200">
                      Source —{" "}
                    </span>
                    {stat.source}
                  </p>
                </div>
              </details>

              <div className="pointer-events-none absolute inset-0 z-20 hidden md:block overflow-hidden rounded-[inherit]">
                <div className="absolute inset-0 flex w-full h-full flex-col gap-3 overflow-hidden overscroll-none bg-gray-900 px-5 py-5 md:px-6 md:py-6 rounded-[inherit] shadow-none translate-x-[calc(100%+16px)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:translate-x-0 group-focus-within/card:translate-x-0">
                  <p className="text-xs text-gray-200 leading-relaxed whitespace-pre-line">
                    {stat.more}
                  </p>
                  <p className="text-[11px] leading-snug text-gray-400 pt-3 mt-auto border-t border-white/[0.08]">
                    <span className="font-semibold text-white">Source — </span>
                    {stat.source}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32"
    >
      <div className="flex flex-col items-center text-center mb-20 animate-enter">
        <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">
          How we work
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-2xl">
          A clear process from{" "}
          <span className="font-playfair italic font-medium">
            brief to live campaign
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 animate-enter delay-100">
        {[
          [
            "solar:target-linear",
            "Brief & Define",
            "We align on audience, clinic locations, goals, and content.",
          ],
          [
            "solar:smartphone-linear",
            "Review & Go Live",
            "We review creative, confirm placements, and activate quickly.",
          ],
          [
            "solar:graph-new-linear",
            "Report & Refine",
            "Monthly reporting and campaign optimisation based on results.",
          ],
        ].map(([icon, title, text], i) => (
          <div
            key={title}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            <div
              className={`w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${i === 1 ? "bg-black text-white shadow-lg shadow-gray-900/20" : "bg-white text-gray-900 shadow-lg shadow-gray-900/5"}`}
            >
              <iconify-icon icon={icon} width="32" />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function QuoteSection() {
  return (
    <section
      id="advertise"
      className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-28 border-t border-gray-900/5"
    >
      <div className="flex flex-col items-center text-center mb-10 animate-enter">
        <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
          What Clients Say
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 animate-enter delay-100">
        <article className="bg-[#efeae5] rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center mb-10">
              <iconify-icon icon="solar:quote-up-bold" width="20" />
            </div>
            <h3 className="text-[2.15rem] md:text-[2.5rem] font-medium tracking-tight text-gray-900 leading-[1.08] max-w-lg">
              &quot;Surge Media gave our clinic consistent visibility and helped
              us attract more qualified walk-ins each month.&quot;
            </h3>
          </div>
          <div className="mt-10">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-gray-900">
              Dr. Aisyah Rahman
            </p>
            <p className="text-base text-gray-500 mt-1">
              General Practitioner, Klang Valley
            </p>
          </div>
        </article>

        <article className="relative rounded-[2.5rem] overflow-hidden min-h-[420px] bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1758691462878-6edc3d3da1be?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Malaysian clinic healthcare setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/25" />
        </article>
      </div>
    </section>
  );
}

export function BeyondScreenSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
      <div className="flex flex-col items-center text-center mb-10 animate-enter">
        <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">
          Beyond the screen
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
          We also offer{" "}
          <span className="font-playfair italic font-medium">
            digital support.
          </span>
        </h2>
      </div>
      <div className="bg-white/40 backdrop-blur-sm border border-white/40 rounded-[2rem] p-8 md:p-10 animate-enter delay-100">
        <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mb-6">
          While we build the DOOH network, Surge Media also helps clinics and
          health brands grow their digital presence - social media management,
          content creation, Google review management, and branding.
        </p>
        <a
          href="/services"
          className="text-sm font-medium text-[#007A72] hover:underline"
        >
          See all digital services →
        </a>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  const otherAgencyPoints = [
    "Run social ads without in-clinic visibility",
    "Use generic monthly plans with little local context",
    "Report impressions, but not actionable lead insights",
    "Split DOOH and digital across separate vendors",
    "Offer one-size packages that do not match your goals",
  ];
  const surgePoints = [
    "Clinic-screen reach + digital growth support in one team",
    "Targeted clinic placements by location and audience",
    "Ad creatives aligned with MMC and MAB guidelines",
    "QR tracking with transparent monthly reporting",
    "Campaign optimisation based on local performance data",
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
      <div className="flex flex-col items-center text-center mb-16 animate-enter">
        <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
          The difference
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
          Why choose us over{" "}
          <span className="font-playfair italic font-medium">everyone</span>{" "}
          else?
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="group animate-enter delay-100 rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-900/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <h3 className="text-2xl font-semibold text-gray-500 mb-8">
            Other Agencies
          </h3>
          <ul className="space-y-5 list-none pl-0">
            {otherAgencyPoints.map((item) => (
              <li key={item} className="flex items-start gap-4 text-gray-500">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-300 text-[13px] font-bold leading-none text-white"
                  aria-hidden
                >
                  ×
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="group animate-enter delay-200 relative overflow-hidden rounded-[2rem] bg-[#efeae5] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
          <h3 className="mb-8 flex items-center gap-1 md:gap-1.5 leading-none">
            <img
              src="/SurgeMedia-logo.png"
              alt=""
              className="h-8 w-8 md:h-10 md:w-10 shrink-0 object-contain"
              aria-hidden
            />
            <img
              src="/SurgeMedia-brand.png"
              alt="Surge Media"
              className="h-8 md:h-10 w-auto"
            />
          </h3>
          <ul className="space-y-5 list-none pl-0">
            {surgePoints.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 font-medium text-gray-900"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-[13px] font-bold leading-none text-white"
                  aria-hidden
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type AboutSectionProps = {
  centerCards?: boolean;
};

export function AboutSection({ centerCards = false }: AboutSectionProps) {
  const coreValues = [
    {
      icon: "solar:shield-check-bold",
      title: "Compliance first",
      text: "Every piece of content we produce respects MMC, MAB, and MASA guidelines. Healthcare marketing trust is earned, not assumed.",
    },
    {
      icon: "lucide:handshake",
      title: "Honest partnerships",
      text: "We say what we can deliver and deliver what we say. That applies to our advertisers, our venue partners, and every client relationship we build. No inflated promises, no jargon to hide behind.",
    },
    {
      icon: "solar:chart-square-bold",
      title: "Results you can see",
      text: "Every campaign comes with clear reporting. We believe clients should always know what their money is doing — whether that's a QR scan count, a WhatsApp lead, or a foot traffic uplift. Marketing without measurement is guesswork.",
    },
    {
      icon: "solar:hospital-bold",
      title: "Clinic-safe advertising",
      text: "Our screens are in clinic waiting rooms, so content must fit that environment. Every ad is reviewed for compliance and relevance, and we do not run content that feels inappropriate for patients.",
    },
    {
      icon: "solar:leaf-bold",
      title: "Building for the long term",
      text: "We're not optimising for a quick win. We're building a network and a reputation — and that takes consistent effort, good relationships, and patience. Every client we work with, and every clinic we partner with, is part of something we intend to grow properly.",
    },
  ] as const;

  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24"
    >
      <div className="flex flex-col items-center text-center mb-12 animate-enter">
        <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
          About
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
          {/* We&apos;re a startup. <br className="hidden md:block" /> */}
          {/* Meet the team behind your success. <br className="hidden md:block" /> */}
          Here&apos;s who we are.
        </h2>
      </div>

      <div className="max-w-4xl mx-auto text-center mb-16 animate-enter delay-100">
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Surge Media is a media and marketing company focused on one idea —
          that the most powerful advertising happens in real spaces, with real
          people, in real moments. We connect brands with everyday Malaysians
          through in-clinic display screens in GP waiting rooms, and help
          businesses across industries — from pharmaceutical companies and
          healthcare brands to general businesses — grow their presence online.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16 animate-enter delay-200">
        <article className="rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider inline-block mb-5">
            Vision
          </span>
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed font-medium">
            &quot;To become the most trusted healthcare marketing ecosystem in Southeast Asia — where every clinic waiting room is a smart geo-targeted media channel and every healthcare professional has a world-class digital presence.&quot;
          </p>
        </article>

        <article className="rounded-[2rem] bg-[#efeae5] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <span className="bg-black text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider inline-block mb-5">
            Mission
          </span>
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed font-medium">
            &quot;We empower Malaysia&apos;s healthcare professionals with compliant, data-driven marketing — turning clinic waiting rooms into geo-targeted advertising networks and giving doctors a professional brand presence that attracts, educates, and retains patients.&quot;
          </p>
        </article>
      </div>

      <section className="mb-16 animate-enter delay-300">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            Core values
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
            What we stand for.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {coreValues.map((value, i) => (
            <article
              key={value.title}
              className={`group rounded-[2rem] aspect-square p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                i % 2 === 1
                  ? "bg-[#efeae5] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
                  : "border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-gray-900/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              }`}
            >
              <span
                className={
                  i % 2 === 0
                    ? "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e33c1d] text-white shadow-[0_10px_24px_rgba(227,60,29,0.35)]"
                    : "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#e33c1d] border border-gray-900/[0.08] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                }
                aria-hidden
              >
                <iconify-icon icon={value.icon} width="24" />
              </span>
              <h4 className="text-xl font-black tracking-tight text-gray-900 mb-3 leading-tight">
                {value.title}
              </h4>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 9,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {value.text}
              </p>
            </article>
          ))}
        </div>

        <div className="hidden lg:block relative mx-auto w-full max-w-[1120px] aspect-square">
          <div className="absolute inset-[18%] rounded-full border border-gray-900/10" />
          <div className="absolute inset-[30%] rounded-full border border-gray-900/5" />

          {coreValues.map((value, i) => (
            <article
              key={value.title}
              className={`absolute w-[340px] aspect-square rounded-[2rem] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                i % 2 === 1
                  ? "bg-[#efeae5] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
                  : "border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-gray-900/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              }`}
              style={{
                left: `${50 + Math.cos((i / coreValues.length) * Math.PI * 2 - Math.PI / 2) * 37}%`,
                top: `${50 + Math.sin((i / coreValues.length) * Math.PI * 2 - Math.PI / 2) * 37}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <span
                className={
                  i % 2 === 0
                    ? "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e33c1d] text-white shadow-[0_10px_24px_rgba(227,60,29,0.35)]"
                    : "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#e33c1d] border border-gray-900/[0.08] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                }
                aria-hidden
              >
                <iconify-icon icon={value.icon} width="24" />
              </span>
              <h4 className="text-xl font-black tracking-tight text-gray-900 mb-3 leading-tight">
                {value.title}
              </h4>
              <p
                className="text-gray-600 text-sm leading-relaxed"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 9,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {value.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="animate-enter delay-400 border-t border-gray-900/5 pt-16 md:pt-20"
        aria-labelledby="about-co-founders-heading"
      >
        <div className="flex flex-col items-center text-center mb-10 md:mb-12">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            Leadership
          </span>
          <h3
            id="about-co-founders-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-2xl"
          >
            Co-founders
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-4xl mx-auto">
          <figure className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4] overflow-hidden rounded-[2rem] border border-gray-900/[0.08] bg-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <Image
                src="/tl.png"
                alt="Timothy Lim, co-founder at Surge Media"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 320px"
              />
            </div>
            <figcaption className="mt-4">
              <span className="block text-lg font-black tracking-tight text-gray-900">Timothy Lim</span>
              <span className="mt-1 block text-sm font-semibold uppercase tracking-wide text-gray-500">
                Co-founder
              </span>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center text-center">
            <div className="relative w-full max-w-[320px] aspect-[3/4] overflow-hidden rounded-[2rem] border border-gray-900/[0.08] bg-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <Image
                src="/jy.png"
                alt="David Chua, co-founder at Surge Media"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 320px"
              />
            </div>
            <figcaption className="mt-4">
              <span className="block text-lg font-black tracking-tight text-gray-900">David Chua</span>
              <span className="mt-1 block text-sm font-semibold uppercase tracking-wide text-gray-500">
                Co-founder
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

    </section>
  );
}

export function FaqSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-24 pb-24 relative border-t border-gray-900/5">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 animate-enter flex flex-col items-center text-center">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            Questions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] mt-6">
            Frequently Asked{" "}
            <span className="font-playfair italic font-medium">Questions</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 animate-enter delay-100">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              name="faq-accordion"
              className="faq-item group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4"
            >
              <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                {faq.q}
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
                  <iconify-icon icon="solar:alt-arrow-down-linear" width="18" />
                </div>
              </summary>
              <div className="faq-answer">
                <div>
                  <div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl pb-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FooterSection({
  showLeadSection = true,
  leadBadge = "Get started",
  leadTitle,
  leadDescription,
  leadCtaHref = "/contact",
  leadCtaLabel = "Get in touch",
}: FooterSectionProps = {}) {
  const title: ReactNode = leadTitle ?? (
    <>
      Start your next{" "}
      <span className="font-playfair italic font-medium">
        marketing campaign.
      </span>
    </>
  );

  const description: ReactNode =
    leadDescription ??
    "Get in touch and we'll walk you through the network, the slots available, and what works for your brand and budget.";

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-24">
      {showLeadSection && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24 animate-enter">
          <div className="bg-[#efeae5] rounded-[2.5rem] p-12 md:p-20 flex flex-col justify-center items-start text-left relative overflow-hidden">
            <div className="absolute top-12 left-12 w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 rotate-3">
              <iconify-icon icon="solar:stars-minimalistic-bold" width="32" />
            </div>

            <div className="mt-20">
              <span className="bg-white/50 border border-white/50 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">
                {leadBadge}
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[0.95] mb-8">
                {title}
              </h2>
              <p className="text-gray-500 mb-10 max-w-sm">{description}</p>
              <Link
                href={leadCtaHref}
                className="inline-flex bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 items-center gap-3 shadow-xl"
              >
                {leadCtaLabel}
              </Link>
            </div>
          </div>

          <div className="bg-[#efeae5] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center min-h-[500px] group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60" />

            <div className="relative w-[280px] rotate-[-12deg] group-hover:rotate-0 transition-all duration-700 ease-out transform group-hover:scale-105">
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/20">
                <div className="bg-white rounded-[2.5rem] overflow-hidden relative aspect-[9/19] border border-gray-100">
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200" />
                      <div className="h-3 w-24 bg-gray-100 rounded-full" />
                    </div>
                    <div
                      className="relative w-full aspect-square rounded-2xl overflow-hidden mb-2 border border-gray-900/15 shadow-md ring-1 ring-black/5"
                      role="img"
                      aria-label="This could be you"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ backgroundImage: "url(/cta.jpeg)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-black/20" />
                      <div className="relative z-10 flex h-full min-h-[8rem] items-center justify-center p-5 text-center">
                        <p className="text-[1.45rem] sm:text-xl leading-[1.1] font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
                          This could be{" "}
                          <span className="font-playfair italic font-medium text-[#ffb199]">you!</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[#e33c1d]/15 text-[#e33c1d] flex items-center justify-center">
                        <iconify-icon icon="solar:heart-bold" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100" />
                      <div className="w-8 h-8 rounded-full bg-gray-100" />
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full" />
                    <div className="h-2 w-3/4 bg-gray-100 rounded-full" />
                  </div>

                  <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-3 flex items-center gap-3 w-[90%] animate-pulse">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
                      <iconify-icon icon="solar:graph-up-linear" />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-500 font-semibold uppercase">
                        Growth Alert
                      </div>
                      <div className="text-xs font-bold text-gray-900">
                        +128% Engagement
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-gray-900/10 pt-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24 animate-enter delay-200">
        <div className="max-w-xs">
          <Link href="/" className="inline-flex items-center gap-1 md:gap-1.5 mb-6 cursor-pointer">
            <img
              src="/SurgeMedia-logo.png"
              alt=""
              className="h-8 w-8 md:h-10 md:w-10 shrink-0 object-contain"
              aria-hidden
            />
            <img
              src="/SurgeMedia-brand.png"
              alt="Surge Media"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
          <h4 className="text-xl font-black tracking-tight text-gray-900 leading-tight mb-4">
            Marketing that drives{" "}
            <span className="font-playfair italic font-medium">real</span>{" "}
            results.
          </h4>
          <p className="text-xs text-gray-500 mb-6">
            Built for healthcare professionals, local businesses, and growing
            brands.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Surge Media on Facebook"
            >
              <iconify-icon icon="simple-icons:facebook" width="16" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Surge Media on Instagram"
            >
              <iconify-icon icon="simple-icons:instagram" width="16" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Surge Media on LinkedIn"
            >
              <iconify-icon icon="simple-icons:linkedin" width="16" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Surge Media on TikTok"
            >
              <iconify-icon icon="simple-icons:tiktok" width="16" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Navigate
            </span>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Digital Services
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/compliance"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Compliance
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Connect
            </span>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Get in touch
            </Link>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              TikTok
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Facebook
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Legal
            </span>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-900/5 flex flex-col sm:flex-row sm:justify-between gap-2 text-[10px] text-gray-400 font-medium">
        <span>© 2026 Surge Media Sdn. Bhd. All rights reserved.</span>
      </div>
    </footer>
  );
}
