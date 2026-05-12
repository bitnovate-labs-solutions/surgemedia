/**
 * In-clinic 10s video ad formats (MMC / MAB context).
 * Optional `portraitSrc` / `landscapeSrc` point to MP4s under `public/video-templates/` when exports exist.
 */
export type TemplateLetter = "A" | "B" | "C" | "D";

export type AudienceKind = "all" | "non-healthcare";

export type ClinicVideoTemplate = {
  letter: TemplateLetter;
  title: string;
  audience: AudienceKind;
  exampleCopy: string;
  portraitSrc?: string;
  landscapeSrc?: string;
};

export const CLINIC_VIDEO_TEMPLATES: readonly ClinicVideoTemplate[] = [
  {
    letter: "A",
    title: "Brand awareness",
    audience: "all",
    exampleCopy:
      "Bright Smile Dental — Orthodontics & general dentistry. 2 min from here. Walk-ins welcome.",
  },
  {
    letter: "B",
    title: "Proximity trigger",
    audience: "all",
    exampleCopy:
      "ShieldLife Financial — Our office is 3 minutes from here. Free consultation. Scan to book.",
  },
  {
    letter: "C",
    title: "Health education hook",
    audience: "all",
    exampleCopy:
      "1 in 3 Malaysians has undetected high cholesterol. Get screened at Wellness Lab. Scan to find out more.",
  },
  {
    letter: "D",
    title: "Offer spotlight",
    audience: "non-healthcare",
    exampleCopy: "Free financial health check for new clients this month. Scan to reserve your slot.",
  },
];
