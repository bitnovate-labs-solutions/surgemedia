export const LANDING_IDS = ["1", "2", "3"] as const;
export type LandingId = (typeof LANDING_IDS)[number];

export type HeroVariant = "clinic" | "brand" | "wellness";

export type LandingConfig = {
  id: LandingId;
  /** Page `<title>` and Open Graph — industry-focused, no company name */
  title: string;
  description: string;
  heroVariant: HeroVariant;
  badge: string;
  headline: string;
  subhead: string;
  bullets: readonly string[];
  accentBg: string;
  accentBgHover: string;
  accentRing: string;
  surfaceClass: string;
  /** Background behind the lead form card */
  formSectionBg: string;
  formEyebrow: string;
  formTitle: string;
  formHint: string;
  roleLabel: string;
};

export const landingConfigs: Record<LandingId, LandingConfig> = {
  "1": {
    id: "1",
    title: "Private Clinic Marketing & Patient Trust | Malaysia",
    description:
      "Calm, compliant-first digital presence for busy practices: profiles, reviews, and messaging that fits clinical settings.",
    heroVariant: "clinic",
    badge: "Clinics & practitioners",
    headline: "Your practice deserves a steadier online voice.",
    subhead:
      "Patients compare clinics before they book. Keep your profile, reviews, and day-to-day posts aligned — without loud claims or shortcuts that do not belong in healthcare.",
    bullets: [
      "Messaging that respects clinical context and patient sensitivity",
      "Google Business Profile, reviews, and social handled as one practical rhythm",
      "Optional in-venue screen placements when you want hyper-local visibility",
    ],
    accentBg: "bg-[#1e3a4c]",
    accentBgHover: "hover:bg-[#152a38]",
    accentRing: "focus-visible:ring-[#1e3a4c]/30",
    surfaceClass: "bg-white/90 border border-gray-900/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.06)]",
    formSectionBg: "bg-[#e8e4dc]/50",
    formEyebrow: "About your practice",
    formTitle: "Book a short consult",
    formHint: "Tell us what you want to improve. We reply within one working day.",
    roleLabel: "Clinic / healthcare professional",
  },
  "2": {
    id: "2",
    title: "In-Clinic Screen Advertising for Brands | Malaysia",
    description:
      "Reach people in waiting areas with rotation-based placements, plus optional digital support when you need social, content, or reviews.",
    heroVariant: "brand",
    badge: "Brands & businesses",
    headline: "Real-world attention. Measured placements.",
    subhead:
      "Waiting rooms concentrate attention: one screen, minimal competition, and dwell time you can plan around. Ideal for FMCG, services, insurance, and brands that want geography-aware reach.",
    bullets: [
      "Private-clinic waiting-room inventory with clear rotation windows",
      "Reporting that helps you compare locations and time bands",
      "Add digital execution if you also need social, creative, or reputation help",
    ],
    accentBg: "bg-[#e33c1d]",
    accentBgHover: "hover:bg-[#cf361a]",
    accentRing: "focus-visible:ring-[#e33c1d]/35",
    surfaceClass: "bg-white border border-gray-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.12)]",
    formSectionBg: "bg-slate-100",
    formEyebrow: "Campaign intake",
    formTitle: "Share your brief",
    formHint: "Budget range, geography, and timing — a paragraph is enough to start.",
    roleLabel: "Brand or advertiser",
  },
  "3": {
    id: "3",
    title: "Wellness Brand Marketing Near Care | Malaysia",
    description:
      "Creative and placements built for health-adjacent contexts: careful claims, clinic-safe rotations, and clear approval paths.",
    heroVariant: "wellness",
    badge: "Health & wellness brands",
    headline: "Credibility-first campaigns where context matters.",
    subhead:
      "Supplements, devices, and lifestyle offers need restraint near care. Plan messaging, creative checks, and venue-appropriate rotations so your brand stays trustworthy where it shows up.",
    bullets: [
      "Creative guidance aligned with common healthcare-advertising expectations",
      "Rotation plans that respect venue rules and approval steps",
      "Reporting you can use to refine creative and geography over time",
    ],
    accentBg: "bg-[#0d6e5c]",
    accentBgHover: "hover:bg-[#0a5a4b]",
    accentRing: "focus-visible:ring-[#0d6e5c]/30",
    surfaceClass: "bg-white/95 border border-emerald-900/10 shadow-[0_12px_48px_rgba(13,110,92,0.12)]",
    formSectionBg: "bg-gradient-to-b from-emerald-50/40 via-[#f4faf7] to-white",
    formEyebrow: "Product fit",
    formTitle: "Describe what you promote",
    formHint: "If the category is not a fit, you will hear back early — no pressure.",
    roleLabel: "Health / wellness brand",
  },
};
