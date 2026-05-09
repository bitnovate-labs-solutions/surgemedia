"use client";

import Link from "next/link";

export function HeroSection() {
  return (
    <main className="max-w-7xl mx-auto px-6 pt-12 pb-12 md:px-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center">
        <div className="flex flex-col gap-8 max-w-xl relative z-10">
          <h1 className="animate-enter delay-200 text-3xl md:text-4xl lg:text-5xl leading-[0.95] tracking-tight text-gray-900">
            <span className="font-black">Everyone visits a clinic.</span>
            <br />
            <span className="font-playfair italic font-medium">Not everyone ignores the screen.</span>
          </h1>

          <p className="animate-enter delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
            Surge Media places your brand on display screens in clinic waiting rooms — where everyday Malaysians sit, wait, and have nothing else to look at.
          </p>

          <div className="animate-enter delay-400 flex flex-wrap items-center gap-3 mt-1">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e33c1d] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#cf361a] transition-colors shadow-[0_6px_18px_rgba(227,60,29,0.35)]"
            >
              Get in touch
              <iconify-icon icon="solar:arrow-right-linear" width="18" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border border-gray-900/15 text-gray-800 hover:border-gray-900/30 hover:text-black transition-colors"
            >
              Digital services
              <iconify-icon icon="solar:arrow-right-linear" width="16" />
            </Link>
          </div>
        </div>

        <div className="flex lg:justify-end animate-enter delay-300 relative justify-center lg:-mt-8 xl:-mt-10">
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-full blur-3xl pointer-events-none bg-gradient-to-br from-[#e33c1d]/35 to-[#e33c1d]/80" />

          <figure className="relative w-full max-w-2xl lg:max-w-[40rem] xl:max-w-[44rem] mx-auto">
            <div className="rounded-2xl bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 p-3 sm:p-4 lg:p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-black ring-1 ring-white/15 shadow-inner">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/clinic.jpeg"
                  aria-label="Waiting room display showing clinic environment"
                >
                  <source src="/clinic2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </main>
  );
}
