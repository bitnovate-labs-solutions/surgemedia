import Link from "next/link";
import { HeroBrandPaginated } from "./HeroBrandPaginated";
import type { LandingConfig } from "./landingConfig";

function TopBar({ onDark }: { onDark: boolean }) {
  const link = onDark ? "text-white/85 hover:text-white" : "text-gray-700 hover:text-gray-900";
  const sep = onDark ? "text-white/20" : "text-gray-300";
  const lp = onDark ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-gray-900";

  return (
    <div className="flex w-full min-w-0 flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      <Link href="/" className="inline-flex shrink-0 items-center gap-1 md:gap-1.5" aria-label="Go to homepage">
        <img src="/SurgeMedia-logo.png" alt="" className="h-9 w-9 object-contain" aria-hidden />
        <img src="/SurgeMedia-brand.png" alt="" className="h-7 w-auto md:h-8" aria-hidden />
      </Link>
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold sm:justify-end">
        <Link href="/contact" className={`${link} underline-offset-4 hover:underline`}>
          Contact
        </Link>
        <span className={sep} aria-hidden>
          |
        </span>
        <Link href="/landing/1" className={lp}>
          Clinics
        </Link>
        <Link href="/landing/2" className={lp}>
          Brands
        </Link>
        <Link href="/landing/3" className={lp}>
          Wellness
        </Link>
      </nav>
    </div>
  );
}

function CtaPill({
  label,
  accentBg,
  accentHover,
  className = "",
}: {
  label: string;
  accentBg: string;
  accentHover: string;
  className?: string;
}) {
  return (
    <a
      href="#lead"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${accentBg} ${accentHover} ${className}`}
    >
      {label}
      <span aria-hidden>↓</span>
    </a>
  );
}

/** Full-bleed, centered “theater” — clinics */
function HeroClinic({ config }: { config: LandingConfig }) {
  return (
    <header className="relative w-full overflow-hidden bg-[#e9e4dc]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(30,58,76,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(30,58,76,0.06) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[min(70vh,520px)] w-[min(100%,900px)] -translate-x-1/2 bg-gradient-to-b from-white/50 to-transparent blur-3xl" />

      <div className="relative border-b border-stone-800/10 bg-white/30 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5 md:px-10">
        <div className="mx-auto max-w-5xl">
          <TopBar onDark={false} />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 pb-20 pt-14 text-center sm:px-6 sm:pb-24 sm:pt-16 md:px-8 md:pb-32 md:pt-20">
        <span className="mx-auto mb-6 inline-flex rounded-full border border-stone-800/10 bg-white/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-900 shadow-sm backdrop-blur-sm">
          {config.badge}
        </span>

        <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-stone-900 sm:text-5xl md:text-6xl">
          {config.headline}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
          {config.subhead}
        </p>

        <ul className="mx-auto mt-12 max-w-2xl space-y-5 text-center">
          {config.bullets.map((line) => (
            <li key={line} className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-3">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1e3a4c] sm:mt-1.5" aria-hidden />
              <span className="max-w-xl text-sm leading-relaxed text-stone-700 md:text-base">{line}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <CtaPill label={config.formTitle} accentBg={config.accentBg} accentHover={config.accentBgHover} />
        </div>
      </div>
    </header>
  );
}

/** Editorial 12-col + bento cards — wellness */
function HeroWellness({ config }: { config: LandingConfig }) {
  return (
    <header className="relative w-full overflow-hidden bg-[#f0f0f2]">
      <div className="border-b border-gray-900/10 bg-white/70 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5 md:px-10">
        <div className="mx-auto max-w-6xl">
          <TopBar onDark={false} />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 text-center sm:px-6 md:px-10 md:pb-28 md:pt-16 lg:text-left">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 lg:items-start">
          <div className="mx-auto max-w-2xl lg:col-span-7 lg:mx-0 lg:max-w-none">
            <span className="mb-4 inline-block rounded-md bg-[#0d6e5c] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {config.badge}
            </span>
            <h1 className="text-[2.125rem] font-black leading-[1.02] tracking-tight text-gray-900 sm:text-5xl md:text-[3.25rem] lg:pr-8">
              {config.headline}
            </h1>
            <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-gray-600 md:text-lg lg:mx-0">
              {config.subhead}
            </p>

            <div className="mt-10 hidden lg:block">
              <CtaPill label={config.formTitle} accentBg={config.accentBg} accentHover={config.accentBgHover} />
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-md gap-3 sm:max-w-none sm:grid-cols-3 lg:col-span-5 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-4">
            {config.bullets.map((line, i) => (
              <div
                key={line}
                className={`rounded-2xl border border-gray-900/[0.06] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.05)] ${
                  i === 0
                    ? "bg-white lg:translate-x-0"
                    : i === 1
                      ? "bg-gradient-to-br from-emerald-50 to-white lg:translate-x-4"
                      : "bg-gray-900 text-white lg:-translate-x-2"
                }`}
              >
                <p className={`text-left text-[10px] font-bold uppercase tracking-wider ${i === 2 ? "text-white/60" : "text-[#0d6e5c]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className={`mt-2 text-left text-sm font-medium leading-snug ${i === 2 ? "text-white/95" : "text-gray-800"}`}>
                  {line}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:col-span-12 lg:hidden">
            <CtaPill
              label={config.formTitle}
              accentBg={config.accentBg}
              accentHover={config.accentBgHover}
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export function LandingHero({ config }: { config: LandingConfig }) {
  switch (config.heroVariant) {
    case "clinic":
      return <HeroClinic config={config} />;
    case "brand":
      return <HeroBrandPaginated config={config} />;
    case "wellness":
      return <HeroWellness config={config} />;
    default:
      return <HeroClinic config={config} />;
  }
}
