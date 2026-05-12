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
    <div className="flex w-full min-w-0 flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-3 md:gap-4">
      <Link href="/" className="inline-flex shrink-0 items-center gap-1 md:gap-1.5" aria-label="Go to homepage">
        <img src="/SurgeMedia-logo.png" alt="" className="h-9 w-9 object-contain" aria-hidden />
        <img src="/SurgeMedia-brand.png" alt="" className="h-7 w-auto md:h-8" aria-hidden />
      </Link>
      <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold text-white/85 sm:justify-end">
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
      className="relative w-full min-w-0 overflow-x-clip bg-slate-950"
      role="region"
      aria-roledescription="carousel"
      aria-label="Campaign highlights"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className="border-b border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur-sm sm:px-6 sm:py-5 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <TopBar />
        </div>
      </div>

      <div className="relative w-full">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(227,60,29,0.18),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-950" />

        <div className="relative mx-auto w-full min-w-0 max-w-6xl px-4 pb-16 pt-10 text-center sm:px-6 sm:pb-20 sm:pt-12 md:px-10 md:pb-28 md:pt-16 lg:text-left">
          <p className="mx-auto max-w-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#e33c1d] sm:text-[11px] sm:tracking-[0.28em] lg:mx-0">
            {config.badge}
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-balance break-words sm:mt-5 lg:mx-0">
            <span className="block text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {headlinePrimary}
            </span>
            {headlineSecondary ? (
              <span className="mt-2 block font-playfair text-2xl font-medium italic leading-snug tracking-tight text-slate-400 sm:mt-3 sm:text-3xl sm:leading-tight md:text-[2.75rem]">
                {headlineSecondary}
              </span>
            ) : null}
          </h1>

          <div className="mt-8 grid min-w-0 gap-10 sm:mt-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,380px)] lg:items-start lg:gap-14">
            <div className="min-w-0">
              <p className="mx-auto max-w-2xl text-[0.9375rem] leading-relaxed text-slate-400 sm:text-base md:text-lg lg:mx-0">
                {config.subhead}
              </p>

              <ol
                className="mx-auto mt-8 max-w-md space-y-2 sm:max-w-2xl lg:mt-10 lg:space-y-0 lg:border-l lg:border-white/10 lg:mx-0"
                aria-live="polite"
              >
                {config.bullets.map((line, i) => (
                  <li key={line} className="min-w-0">
                    <button
                      type="button"
                      onClick={() => go(i)}
                      className={`flex w-full min-w-0 max-w-full flex-col items-center gap-1.5 rounded-xl border border-transparent px-4 py-3.5 text-center transition-colors lg:flex-row lg:items-start lg:gap-4 lg:rounded-none lg:border-0 lg:border-l-2 lg:py-4 lg:pl-6 lg:text-left lg:-ml-px ${
                        i === index
                          ? "border-[#e33c1d] bg-white/[0.04] lg:border-l-[#e33c1d] lg:bg-white/[0.04]"
                          : "border-white/10 hover:bg-white/[0.02] lg:border-transparent lg:hover:bg-white/[0.02]"
                      }`}
                      aria-current={i === index ? "true" : undefined}
                    >
                      <span className="w-7 shrink-0 font-mono text-[0.65rem] tabular-nums text-white/35 lg:w-8 lg:text-xs">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`min-w-0 max-w-prose text-pretty text-sm leading-snug lg:flex-1 lg:text-base ${i === index ? "text-white" : "text-slate-500"}`}
                      >
                        {line}
                      </span>
                    </button>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex justify-center lg:mt-10 lg:justify-start">
                <a
                  href="#lead"
                  className={`inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98] lg:w-auto lg:max-w-none lg:px-8 ${config.accentBg} ${config.accentBgHover}`}
                >
                  {config.formTitle}
                  <span aria-hidden>↓</span>
                </a>
              </div>
            </div>

            <div className="mx-auto min-w-0 max-w-xl lg:mx-0 lg:max-w-none lg:pt-2">
              <div
                className="relative w-full min-w-0 lg:max-w-none"
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
                <div className="rounded-2xl bg-gradient-to-br from-[#e33c1d] via-[#c4321a] to-[#7c1d12] p-px shadow-[0_24px_80px_rgba(227,60,29,0.25)] ring-1 ring-white/10 sm:rounded-[2rem] sm:p-1">
                  <div className="relative overflow-hidden rounded-[1.375rem] bg-slate-950/20 px-3 py-6 sm:rounded-[1.75rem] sm:px-6 sm:py-10">
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

                    <div className="relative z-10 mx-auto w-full min-w-0 max-w-md overflow-hidden lg:mx-0">
                      <div
                        className="flex min-w-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
                        style={{
                          width: `${SLIDE_COUNT * 100}%`,
                          transform: `translateX(-${(index * 100) / SLIDE_COUNT}%)`,
                        }}
                      >
                        <div className="box-border w-1/3 min-w-0 shrink-0 grow-0 basis-1/3 px-0.5 sm:px-1">
                          <p className="text-center text-[9px] font-bold uppercase tracking-[0.18em] text-white/85 sm:text-[10px] sm:tracking-[0.35em]">
                            Capacity
                          </p>
                          <div className="mt-3 rounded-xl border border-white/25 bg-black/25 p-4 backdrop-blur-md sm:mt-4 sm:rounded-2xl sm:p-5 md:p-6">
                            <div className="flex items-end justify-between gap-2 sm:gap-4">
                              <div className="min-w-0">
                                <p className="text-3xl font-black tabular-nums leading-none text-white sm:text-4xl md:text-5xl">
                                  24
                                </p>
                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">
                                  Week slots
                                </p>
                              </div>
                              <div className="h-12 w-px shrink-0 self-stretch bg-white/25 sm:h-14" aria-hidden />
                              <div className="min-w-0 text-right">
                                <p className="text-3xl font-black tabular-nums leading-none text-white sm:text-4xl md:text-5xl">
                                  8
                                </p>
                                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/70 sm:text-xs">
                                  Zones
                                </p>
                              </div>
                            </div>
                            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-black/35">
                              <div className="h-full w-[72%] rounded-full bg-white/90" />
                            </div>
                          </div>
                        </div>

                        <div className="box-border w-1/3 min-w-0 shrink-0 grow-0 basis-1/3 px-0.5 sm:px-1">
                          <p className="text-center text-[9px] font-bold uppercase tracking-[0.18em] text-white/85 sm:text-[10px] sm:tracking-[0.35em]">
                            Windows
                          </p>
                          <div className="mt-3 space-y-2.5 rounded-xl border border-white/25 bg-black/25 p-4 backdrop-blur-md sm:mt-4 sm:space-y-3 sm:rounded-2xl sm:p-5 md:p-6">
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

                        <div className="box-border w-1/3 min-w-0 shrink-0 grow-0 basis-1/3 px-0.5 sm:px-1">
                          <p className="text-center text-[9px] font-bold uppercase tracking-[0.18em] text-white/85 sm:text-[10px] sm:tracking-[0.35em]">
                            Reporting
                          </p>
                          <div className="mt-3 rounded-xl border border-white/25 bg-black/25 p-4 backdrop-blur-md sm:mt-4 sm:rounded-2xl sm:p-5 md:p-6">
                            <div className="grid min-w-0 grid-cols-3 gap-1.5 text-center sm:gap-2">
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

              <div className="mt-8 flex justify-center lg:justify-start">
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
