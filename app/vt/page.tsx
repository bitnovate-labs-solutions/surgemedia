import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TemplatePreview } from "./TemplatePreview";
import { CLINIC_VIDEO_TEMPLATES } from "./templates";

export const metadata: Metadata = {
  title: "10s clinic video templates — Surge Media",
  description:
    "Four 10-second in-clinic video ad formats (A–D): portrait and landscape layout specs, MMC/MAB context.",
  robots: { index: false, follow: false },
};

export default function VideoTemplatesPage() {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:px-10">
      <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:gap-4">
        <Link href="/" className="inline-flex shrink-0 items-center gap-2 md:gap-2.5" aria-label="Surge Media home">
          <Image src="/SurgeMedia-logo.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" priority />
          <Image
            src="/SurgeMedia-brand.png"
            alt="Surge Media"
            width={140}
            height={32}
            className="h-7 w-auto opacity-95 md:h-8"
            priority
          />
        </Link>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          Specs · not indexed
        </span>
      </div>

      <header className="pb-12">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-[#e33c1d] sm:text-left">
          In-clinic DOOH
        </p>
        <h1 className="mt-3 text-center sm:text-left">
          <span className="block text-3xl font-black leading-[1.02] tracking-tight text-white sm:text-4xl md:text-5xl">
            10-second video templates
          </span>
          <span className="mt-2 block font-playfair text-xl font-medium italic text-slate-400 sm:text-2xl md:text-[1.65rem]">
            Formats A–D for waiting-room screens
          </span>
        </h1>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] ring-1 ring-white/[0.05] sm:p-8">
          <div className="space-y-3 text-sm leading-relaxed text-slate-400 sm:text-[0.9375rem]">
            <p>
              <strong className="font-semibold text-slate-100">Duration:</strong> 10 seconds per spot.{" "}
              <strong className="font-semibold text-slate-100">Primary use:</strong> portrait on clinic screens; landscape
              is the same message in a 16:9 safe layout.
            </p>
            <p>
              <strong className="font-semibold text-slate-100">Templates A, B &amp; C:</strong> MMC &amp; MAB compliant for{" "}
              <em className="text-slate-200">all</em> advertiser types — no pre-approval required when used as prescribed.
            </p>
            <p>
              <strong className="font-semibold text-slate-100">Template D:</strong>{" "}
              <span className="text-[#ffb38a]">Non-healthcare advertisers only</span> — not for healthcare product or
              service claims in this format.
            </p>
            <p className="border-t border-white/10 pt-3 text-slate-500">
              We assist healthcare advertisers with MAB submission where required. Share only{" "}
              <code className="rounded-md bg-[#e33c1d]/15 px-1.5 py-0.5 text-xs font-semibold text-[#ffb8a8]">/vt</code>.
              Optional MP4 paths in{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-slate-300">app/vt/templates.ts</code> →{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-slate-300">public/video-templates/</code>.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e33c1d] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(227,60,29,0.35)] transition-colors hover:bg-[#cf361a]"
          >
            ← Main website
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
          >
            Contact
          </Link>
        </div>
      </header>

      <ol className="space-y-12 sm:space-y-14">
        {CLINIC_VIDEO_TEMPLATES.map((template) => (
          <li
            key={template.letter}
            className="rounded-3xl border border-white/[0.08] bg-slate-900/35 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.04] backdrop-blur-sm sm:p-9 md:p-10"
          >
            <div className="mb-8 flex flex-col items-center gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-5">
                <div className="relative shrink-0">
                  <div
                    className="absolute -inset-1 rounded-lg bg-gradient-to-br from-[#e33c1d]/50 to-transparent opacity-80 blur-sm"
                    aria-hidden
                  />
                  <span
                    className={`relative flex h-14 w-14 items-center justify-center font-sans text-2xl font-black text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl ${
                      template.audience === "all" ? "bg-[#0d9488]" : "bg-[#ea580c]"
                    }`}
                  >
                    {template.letter}
                  </span>
                </div>
                <div className="min-w-0 text-center sm:text-left">
                  <h2 className="text-xl font-black capitalize tracking-tight text-white sm:text-2xl md:text-[1.65rem]">
                    {template.title}
                  </h2>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                    Template {template.letter} · example on-screen copy
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Surge spec
              </span>
            </div>
            <TemplatePreview template={template} />
          </li>
        ))}
      </ol>

      <footer className="mt-16 border-t border-white/10 pt-10 text-center text-xs leading-relaxed text-slate-500">
        <span className="font-semibold text-slate-400">Surge Media</span> · in-clinic screen advertising ·{" "}
        <code className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">/vt</code> · formats A–D · direct URL only
      </footer>
    </div>
  );
}
