import type { ClinicVideoTemplate } from "./templates";

/** Formats E–L on `/vt/1` (single page). Add `portraitSrc` / `landscapeSrc` when assets are ready (paths under `public/`). */
export const CLINIC_VIDEO_TEMPLATES_VT1: readonly ClinicVideoTemplate[] = [
  {
    letter: "E",
    title: "Appointment nudge",
    audience: "all",
    exampleCopy: "Book online in under a minute — next hygiene slots this Thursday & Friday. Scan to choose a time.",
  },
  {
    letter: "F",
    title: "Clinic credentials strip",
    audience: "all",
    exampleCopy: "MOH-registered · same-day callbacks · family-friendly hours. Scan to read our full practice profile.",
  },
  {
    letter: "G",
    title: "Scan-to-learn teaser",
    audience: "all",
    exampleCopy: "What happens at a first visit? 30-second walkthrough, no jargon. Scan for the illustrated guide.",
  },
  {
    letter: "H",
    title: "Seasonal retail tie-in",
    audience: "non-healthcare",
    exampleCopy: "Partner café: show this screen for 10% off before your appointment. Scan for the voucher code.",
  },
  {
    letter: "I",
    title: "Service highlight reel",
    audience: "all",
    exampleCopy: "Same-day specialist referrals at MetroCare Clinic. Scan to see this week’s availability.",
  },
  {
    letter: "J",
    title: "Local landmark hook",
    audience: "all",
    exampleCopy: "Two blocks from Central Station — grab a coffee on us when you book your first visit.",
  },
  {
    letter: "K",
    title: "FAQ motion card",
    audience: "all",
    exampleCopy: "What does a screening include? 60 seconds, zero jargon. Scan for the full checklist.",
  },
  {
    letter: "L",
    title: "Limited-time banner",
    audience: "non-healthcare",
    exampleCopy: "Double rewards points this weekend only. Scan to activate before midnight Sunday.",
  },
];
