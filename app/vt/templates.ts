/**
 * In-clinic 10s video ad formats (MMC / MAB context).
 * Optional `portraitSrc` / `landscapeSrc` are public URLs (e.g. files in `public/` or `public/video-templates/`).
 */
export type TemplateLetter = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L";

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
    portraitSrc: "/brandawareness-template.mp4",
    landscapeSrc: "/brandawareness-template2.mp4",
  },
  {
    letter: "B",
    title: "Proximity trigger",
    audience: "all",
    exampleCopy:
      "ShieldLife Financial — Our office is 3 minutes from here. Free consultation. Scan to book.",
    portraitSrc: "/proximity-template1.mp4",
    landscapeSrc: "/proximity-template.mp4",
  },
  {
    letter: "C",
    title: "Health education hook",
    audience: "all",
    exampleCopy:
      "1 in 3 Malaysians has undetected high cholesterol. Get screened at Wellness Lab. Scan to find out more.",
    portraitSrc: "/healthedu-template.mp4",
    landscapeSrc: "/healthedu-template1.mp4",
  },
  {
    letter: "D",
    title: "Offer spotlight",
    audience: "non-healthcare",
    exampleCopy: "Free financial health check for new clients this month. Scan to reserve your slot.",
    portraitSrc: "/offer-template.mp4",
    landscapeSrc: "/offer-template1.mp4",
  },
];
