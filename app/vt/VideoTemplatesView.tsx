import Image from "next/image";
import Link from "next/link";
import type { ClinicVideoTemplate } from "./templates";
import { TemplatePreview } from "./TemplatePreview";

export function VideoTemplatesView({
  kicker,
  headline,
  subheadline,
  templates,
  complianceGroup = "A-D",
  templateNavLinks,
}: {
  kicker: string;
  headline: string;
  subheadline: string;
  templates: readonly ClinicVideoTemplate[];
  /** MMC/MAB disclaimer labels per letter range */
  complianceGroup?: "A-D" | "E-L";
  /** Extra nav pills before Main website (e.g. jump between template sets) */
  templateNavLinks?: readonly { href: string; label: string }[];
}) {
  return (
    <div className="mx-auto min-w-0 max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:px-10">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-gray-900/10 pb-8">
        <Link href="/" className="inline-flex shrink-0 items-center gap-2 md:gap-2.5" aria-label="Surge Media home">
          <Image src="/SurgeMedia-logo.png" alt="" width={36} height={36} className="h-9 w-9 object-contain" priority />
          <Image
            src="/SurgeMedia-brand.png"
            alt="Surge Media"
            width={140}
            height={32}
            className="h-7 w-auto md:h-8"
            priority
          />
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
          {templateNavLinks?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900/20 hover:bg-gray-50 sm:px-5 sm:py-3"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e33c1d] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(227,60,29,0.35)] transition-colors hover:bg-[#c7351a] sm:px-6 sm:py-3"
          >
            ← Main website
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-gray-900/20 hover:bg-gray-50 sm:px-6 sm:py-3"
          >
            Contact
          </Link>
        </div>
      </div>

      <header className="pb-12 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e33c1d]">{kicker}</p>
        <h1 className="mt-3">
          <span className="block text-3xl font-black leading-[1.02] tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {headline}
          </span>
          <span className="mt-2 block font-playfair text-xl font-medium italic text-gray-500 sm:text-2xl md:text-[1.65rem]">
            {subheadline}
          </span>
        </h1>

        <div className="mx-auto mt-8 max-w-3xl rounded-[2rem] border border-gray-100 bg-[#efeae5] p-6 shadow-xl shadow-gray-200/40 sm:p-8">
          <div className="space-y-3 text-sm leading-relaxed text-gray-600 sm:text-[0.9375rem]">
            {complianceGroup === "E-L" ? (
              <>
                <p>
                  <strong className="font-semibold text-gray-900">Templates E, F, G, I, J &amp; K:</strong> MMC &amp; MAB compliant for{" "}
                  <em className="text-gray-800">all</em> advertiser types — no pre-approval required when used as prescribed.
                </p>
                <p>
                  <strong className="font-semibold text-gray-900">Templates H &amp; L:</strong>{" "}
                  <span className="font-semibold text-[#c2410c]">Non-healthcare advertisers only</span> — not for healthcare
                  product or service claims in this format.
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong className="font-semibold text-gray-900">Templates A, B &amp; C:</strong> MMC &amp; MAB compliant for{" "}
                  <em className="text-gray-800">all</em> advertiser types — no pre-approval required when used as prescribed.
                </p>
                <p>
                  <strong className="font-semibold text-gray-900">Template D:</strong>{" "}
                  <span className="font-semibold text-[#c2410c]">Non-healthcare advertisers only</span> — not for healthcare
                  product or service claims in this format.
                </p>
              </>
            )}
            <p>We assist healthcare advertisers with MAB submission where required.</p>
          </div>
        </div>
      </header>

      <ol className="space-y-12 sm:space-y-14">
        {templates.map((template) => (
          <li
            key={template.letter}
            className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 sm:p-9 md:p-10"
          >
            <div className="mb-8 flex flex-col items-start gap-4 border-b border-gray-900/5 pb-6 sm:flex-row sm:items-end sm:justify-start sm:gap-6">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:gap-5">
                <div className="relative shrink-0">
                  <div
                    className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#e33c1d]/35 to-transparent opacity-90 blur-sm"
                    aria-hidden
                  />
                  <span
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl font-sans text-2xl font-black text-white shadow-lg sm:h-16 sm:w-16 sm:text-3xl ${
                      template.audience === "all" ? "bg-[#e33c1d]" : "bg-[#ea580c]"
                    }`}
                  >
                    {template.letter}
                  </span>
                </div>
                <div className="min-w-0 text-left">
                  <h2 className="text-xl font-black capitalize tracking-tight text-gray-900 sm:text-2xl md:text-[1.65rem]">
                    {template.title}
                  </h2>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500 sm:text-sm">
                    Template {template.letter} · example on-screen copy
                  </p>
                </div>
              </div>
            </div>
            <TemplatePreview template={template} />
          </li>
        ))}
      </ol>
    </div>
  );
}
