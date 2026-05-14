import type { Metadata } from "next";
import { VideoTemplatesView } from "../VideoTemplatesView";
import { CLINIC_VIDEO_TEMPLATES_VT1 } from "../templates-vt1";

export const metadata: Metadata = {
  title: "More clinic video templates (E–L) — Surge Media",
  description:
    "Eight more 10-second in-clinic video ad formats (E–L): portrait and landscape slots, MMC/MAB context.",
  robots: { index: false, follow: false },
};

export default function VideoTemplatesVt1Page() {
  return (
    <VideoTemplatesView
      kicker="In-clinic DOOH"
      headline="More 10-second video templates"
      subheadline="Formats E–L for waiting-room screens"
      templates={CLINIC_VIDEO_TEMPLATES_VT1}
      complianceGroup="E-L"
      templateNavLinks={[{ href: "/vt", label: "Core templates (A–D)" }]}
    />
  );
}
