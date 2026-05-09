import Link from "next/link";
import { AboutSection, FooterSection } from "../_components/home/sections";
import { Navbar } from "../_components/home/Navbar";

export default function AboutPage() {
  return (
    <div className="text-gray-900 antialiased overflow-x-clip min-h-screen">
      <Navbar />
      <AboutSection centerCards />
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="relative rounded-[2.5rem] p-[1px] bg-gradient-to-br from-[#e33c1d]/40 via-[#e33c1d]/15 to-gray-900/10 animate-enter">
          <div className="relative overflow-hidden rounded-[calc(2.5rem-1px)] bg-[#efeae5] p-8 md:p-12 lg:p-14 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(227,60,29,0.16),transparent_45%),radial-gradient(circle_at_85%_100%,rgba(0,0,0,0.06),transparent_42%)]" />
            <div className="absolute -top-20 -right-12 h-56 w-56 rounded-full bg-[#e33c1d]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-14 h-60 w-60 rounded-full bg-black/10 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div className="max-w-3xl">
                <span className="bg-white/70 border border-white text-gray-900 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider inline-block mb-6">
                  Let&apos;s connect
                </span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[0.95] mb-5">
                  Want to work with us?
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Whether you&apos;re looking to advertise, need digital
                  marketing support, or just want to understand what we do
                  &mdash; we&apos;re easy to reach.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-w-[180px] justify-center items-center gap-2 bg-[#0f172a] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-[0_10px_28px_rgba(15,23,42,0.28)]"
                >
                  Get in touch
                  <iconify-icon icon="solar:arrow-right-linear" width="18" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-w-[170px] justify-center items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-gray-900/15 text-gray-800 hover:border-gray-900/30 hover:text-black transition-colors bg-white/70 backdrop-blur-sm"
                >
                  Explore services
                  <iconify-icon icon="solar:arrow-right-linear" width="16" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection showLeadSection={false} />
    </div>
  );
}
