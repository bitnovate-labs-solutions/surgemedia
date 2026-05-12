import Link from "next/link";
import { LandingHero } from "./LandingHero";
import { LandingLeadForm } from "./LandingLeadForm";
import type { LandingConfig } from "./landingConfig";

export function LandingPageView({ config }: { config: LandingConfig }) {
  return (
    <article className="flex min-h-screen min-w-0 flex-col">
      <LandingHero config={config} />

      <div
        className={`flex flex-1 flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-16 md:px-10 md:py-20 md:text-left ${config.formSectionBg}`}
      >
        <LandingLeadForm config={config} />
      </div>

      <footer className="border-t border-gray-900/5 bg-white/80 px-4 py-8 text-center text-xs text-gray-500 sm:px-6">
        © {new Date().getFullYear()} ·{" "}
        <Link href="/" className="font-semibold text-gray-700 hover:text-gray-900">
          Main website
        </Link>
      </footer>
    </article>
  );
}
