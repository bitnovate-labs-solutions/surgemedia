import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LANDING_IDS, landingConfigs, type LandingId } from "../../_components/landing/landingConfig";
import { LandingPageView } from "../../_components/landing/LandingPageView";

function isLandingId(id: string): id is LandingId {
  return (LANDING_IDS as readonly string[]).includes(id);
}

export function generateStaticParams() {
  return LANDING_IDS.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  if (!isLandingId(id)) return { title: "Not found" };
  const c = landingConfigs[id];
  return {
    title: c.title,
    description: c.description,
  };
}

export default async function LandingDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (!isLandingId(id)) notFound();
  return <LandingPageView config={landingConfigs[id]} />;
}
