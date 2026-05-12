"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { LandingConfig } from "./landingConfig";

const SLIDE_COUNT = 3;
const AUTO_MS = 5200;

function splitHeadline(headline: string): { primary: string; secondary: string | null } {
  const m = headline.match(/^(.+?\.)\s+(.+)$/);
  if (m?.[1] && m?.[2]) {
    return { primary: m[1].trim(), secondary: m[2].trim() };
  }
  return { primary: headline, secondary: null };
}

function TopBar() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-4">
      <Link href="/" className="inline-flex shrink-0 items-center gap-1 md:gap-1.5" aria-label="Go to homepage">
        <img src="/SurgeMedia-logo.png" alt="" className="h-9 w-9 object-contain" aria-hidden />
        <img src="/SurgeMedia-brand.png" alt="" className="h-7 w-auto md:h-8" aria-hidden />
      </Link>
      <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-xs font-semibold text-white/85">
        <Link href="/contact" className="hover:text-white underline-offset-4 hover:underline">
          Contact
        </Link>
        <span className="text-white/20" aria-hidden>
          |
        </span>
        <Link href="/landing/1" className="text-white/70 hover:text-white">
          Clinics
        </Link>
        <Link href="/landing/2" className="text-white hover:text-white">
          Brands
        </Link>
        <Link href="/landing/3" className="text-white/70 hover:text-white">
          Wellness
        </Link>
      </nav>
    </div>
  );
}

export function HeroBrandPaginated({ config }: { config: LandingConfig }) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((p) => (p + 1) % SLIDE_COUNT);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion]);

  const go = useCallback((i: number) => {
    setIndex(((i % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const { primary: headlinePrimary, secondary: headlineSecondary } = splitHeadline(config.headline);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  };

  return (
    <header
      className="relative w-full overflow-hidden bg-slate-950"
      role="region"
      aria-roledescription="carousel"
      aria-label="Campaign highlights"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className="border-b border-white/10 bg-slate-950/90 px-6 py-5 backdrop-blur-sm md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <TopBar />
        </div>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(227,60,29,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-950" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-12 text-left md:px-10 md:pb-28 md:pt-16">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e33c1d]">{config.badge}</p>

          <h1 className="mt-5 max-w-4xl">
            <span className="block text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl">
              {headlinePrimary}
            </span>
            {headlineSecondary ? (
              <span className="mt-3 block font-playfair text-3xl font-medium italic leading-tight tracking-tight text-slate-400 sm:text-4xl md:text-[2.75rem]">
                {headlineSecondary}
              </span>
            ) : null}
          </h1>

          <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-start lg:gap-14">
            <div>
              <p className="max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">{config.subhead}</p>

              <ol className="mt-10 max-w-2xl border-l border-white/10" aria-live="polite">
                {config.bullets.map((line, i) => (
                  <li key={line}>
                    <button
                      type="button"
                      onClick={() => go(i)}
                      className={`flex w-full gap-4 border-l-2 py-4 pl-6 text-left transition-colors -ml-px ${
                        i === index
                          ? "border-[#e33c1d] bg-white/[0.04]"
                          : "border-transparent hover:bg-white/[0.02]"
                      }`}
                      aria-current={i === index ? "true" : undefined}
                    >
                      <span className="w-8 shrink-0 font-mono text-xs tabular-nums text-white/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-sm leading-snug md:text-base ${i === index ? "text-white" : "text-slate-500"}`}
                      >
                        {line}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <a
                  href="#lead"
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] ${config.accentBg} ${config.accentBgHover}`}
                >
                  {config.formTitle}
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </div>

            <div className="lg:pt-2">
              <div
                className="relative w-full max-w-xl lg:max-w-none"
                onTouchStart={(e) => {
                  touchStartX.current = e.changedTouches[0]?.clientX ?? null;
                }}
                onTouchEnd={(e) => {
                  const start = touchStartX.current;
                  touchStartX.current = null;
                  if (start == null) return;
                  const dx = e.changedTouches[0].clientX - start;
                  if (dx < -48) go(index + 1);
                  if (dx > 48) go(index - 1);
                }}
              >
                <div className="rounded-[2rem] bg-gradient-to-br from-[#e33c1d] via-[#c4321a] to-[#7c1d12] p-1 shadow-[0_24px_80px_rgba(227,60,29,0.25)] ring-1 ring-white/10">
                  <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950/20 px-4 py-8 sm:px-6 sm:py-10">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_50%)]" />
                    <div className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay">
                      <div
                        className="h-full w-full"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
                        }}
                      />
                    </div>

                    <div className="relative z-10 mx-auto w-full max-w-md overflow-hidden lg:mx-0">
                      <div
                        className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                          width: `${SLIDE_COUNT * 100}%`,
                          transform: `translateX(-${(index * 100) / SLIDE_COUNT}%)`,
                        }}
                      >
                        <div className="box-border w-[calc(100%/3)] shrink-0 px-1">
                          <p className="text-center text-[10px] font-bold uppercase tracking-[0.35em] text-white/85">
                            Capacity
                          </p>
                          <div className="mt-4 rounded-2xl border border-white/25 bg-black/25 p-5 backdrop-blur-md sm:p-6">
                            <div className="flex items-end justify-between gap-4">
                              <div>
                                <p className="text-4xl font-black tabular-nums text-white sm:text-5xl">24</p>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">Week slots</p>
                              </div>
                              <div className="h-14 w-px shrink-0 bg-white/25" aria-hidden />
                              <div>
                                <p className="text-4xl font-black tabular-nums text-white sm:text-5xl">8</p>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/70">Zones</p>
                              </div>
                            </div>
                            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-black/35">
                              <div className="h-full w-[72%] rounded-full bg-white/90" />
                            </div>
                          </div>
                        </div>

                        <div className="box-border w-[calc(100%/3)] shrink-0 px-1">
                          <p className="text-center text-[10px] font-bold uppercase tracking-[0.35em] text-white/85">
                            Windows
                          </p>
                          <div className="mt-4 space-y-3 rounded-2xl border border-white/25 bg-black/25 p-5 backdrop-blur-md sm:p-6">
                            {["Morning", "Afternoon", "Full day"].map((label, j) => (
                              <div key={label} className="flex items-center gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15 text-xs font-black text-white">
                                  {j + 1}
                                </div>
                                <div className="min-w-0 flex-1 text-left">
                                  <p className="text-sm font-semibold text-white">{label}</p>
                                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/35">
                                    <div
                                      className="h-full rounded-full bg-white/90"
                                      style={{ width: j === 0 ? "100%" : j === 1 ? "78%" : "92%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="box-border w-[calc(100%/3)] shrink-0 px-1">
                          <p className="text-center text-[10px] font-bold uppercase tracking-[0.35em] text-white/85">
                            Reporting
                          </p>
                          <div className="mt-4 rounded-2xl border border-white/25 bg-black/25 p-5 backdrop-blur-md sm:p-6">
                            <div className="grid grid-cols-3 gap-2 text-center">
                              {[
                                { k: "Reach", v: "68%" },
                                { k: "QR", v: "12%" },
                                { k: "Geo", v: "24" },
                              ].map((cell) => (
                                <div key={cell.k} className="rounded-xl bg-white/10 px-1 py-3 sm:px-2 sm:py-4">
                                  <p className="text-xl font-black tabular-nums text-white sm:text-2xl">{cell.v}</p>
                                  <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-white/60 sm:text-[10px]">
                                    {cell.k}
                                  </p>
                                </div>
                              ))}
                            </div>
                            <div className="mt-4 flex gap-1">
                              {[36, 58, 42, 72, 50].map((h, j) => (
                                <div key={j} className="flex-1 rounded-sm bg-white/20" style={{ height: `${h}px` }} />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-start">
                <div className="flex items-center gap-2.5" role="tablist" aria-label="Hero slides">
                  {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={i === index}
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => go(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e33c1d] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                        i === index ? "w-10 bg-[#e33c1d] shadow-[0_0_20px_rgba(227,60,29,0.55)]" : "w-2.5 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
