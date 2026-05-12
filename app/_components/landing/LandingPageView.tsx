import Link from "next/link";
import { LandingHero } from "./LandingHero";
import { LandingLeadForm } from "./LandingLeadForm";
import type { LandingConfig } from "./landingConfig";

export function LandingPageView({ config }: { config: LandingConfig }) {
  return (
    <article className="flex min-h-screen flex-col">
      <LandingHero config={config} />

      <div
        className={`flex flex-1 flex-col items-center px-6 py-16 md:px-10 md:py-20 ${config.formSectionBg}`}
      >
        <LandingLeadForm config={config} />
      </div>

      <footer className="border-t border-gray-900/5 bg-white/80 px-6 py-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ·{" "}
        <Link href="/" className="font-semibold text-gray-700 hover:text-gray-900">
          Main website
        </Link>
      </footer>
    </article>
  );
}
