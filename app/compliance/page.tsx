import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../_components/home/Navbar";
import { FooterSection } from "../_components/home/sections";

export const metadata: Metadata = {
  title: "Compliance — Surge Media",
};

const complianceItems = [
  {
    title: "MMC — Malaysian Medical Council",
    text: "The dissemination of information by medical professionals (including social media) is reviewed against current MMC guidance before clinic-screen deployment.",
  },
  {
    title: "MAB — Medicine Advertisements Board",
    text: "Supplement, OTC, and medical device advertising is checked against current MAB policy requirements, including claims, disclaimers, and visual representations.",
  },
  {
    title: "Act 290 — Medicines (Advertisement and Sale) Act 1956",
    text: "Healthcare advertising is aligned with Act 290 and its regulations as part of ad approval requirements under Malaysia's healthcare advertising framework.",
  },
] as const;

export default function CompliancePage() {
  return (
    <div className="text-gray-900 antialiased overflow-x-clip min-h-screen">
      <Navbar />

      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24 border-t border-gray-900/5">
        <div className="flex flex-col items-center text-center mb-14 animate-enter">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            Compliance
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
            Every ad is reviewed <br className="hidden md:block" />
            before it goes live.
          </h1>
          <p className="text-gray-500 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
            Because our screens are inside private clinics, Malaysian healthcare advertising rules apply. Every creative goes through a two-stage review before appearing on any clinic screen.
          </p>
          <p className="text-gray-700 mt-6 max-w-3xl text-base leading-relaxed">
            Not sure if your content qualifies?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#e33c1d] hover:text-[#cf361a] underline-offset-4 hover:underline"
            >
              Send it to us
            </Link>{" "}
            and we&apos;ll check.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-enter delay-100">
          {complianceItems.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-900/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-14 md:mt-16 rounded-[2rem] bg-[#efeae5] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] animate-enter delay-200">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-4">
            Content review process
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Ads go through automated screening, then human review against applicable guidelines. Standard turnaround is 3-5 working days. After internal clearance, each clinic must also review and approve the ad before it goes live.
          </p>
        </section>
      </section>

      <FooterSection
        leadTitle={
          <>
            Need a compliance check before you{" "}
            <span className="font-playfair italic font-medium">publish?</span>
          </>
        }
        leadDescription="Share your draft creative and intended placements. We will review and advise on required edits before deployment."
        leadCtaLabel="Send your draft"
        leadCtaHref="/contact"
      />
    </div>
  );
}
