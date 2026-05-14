import type { Metadata } from "next";
import { VideoTemplatesView } from "./VideoTemplatesView";
import { CLINIC_VIDEO_TEMPLATES } from "./templates";

export const metadata: Metadata = {
  title: "10s clinic video templates — Surge Media",
  description:
    "Four 10-second in-clinic video ad formats (A–D): portrait and landscape layout specs, MMC/MAB context.",
  robots: { index: false, follow: false },
};

export default function VideoTemplatesPage() {
  return (
    <VideoTemplatesView
      kicker="In-clinic DOOH"
      headline="10-second video templates"
      subheadline="Formats A–D for waiting-room screens"
      templates={CLINIC_VIDEO_TEMPLATES}
      templateNavLinks={[{ href: "/vt/1", label: "More templates" }]}
    />
  );
}
