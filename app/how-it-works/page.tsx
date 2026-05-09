import Link from "next/link";
import {
  FooterSection,
  footerLeadClinicAdvertising,
} from "../_components/home/sections";
import { Navbar } from "../_components/home/Navbar";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Screens are live in private clinic waiting rooms",
      text: "Our clinic network operates display screens as part of the patient queue management system in each clinic. Patients see the screen while they wait for their appointment — typically 15 to 25 minutes of uninterrupted exposure.",
      image: "/clinic.jpeg",
    },
    {
      number: "02",
      title: "You book advertising slots through Surge Media",
      text: "Brands, health companies, and agencies book advertising time directly with us. We handle the full commercial relationship — brief, pricing, scheduling, and reporting. You don't deal with individual clinics.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
    },
    {
      number: "03",
      title: "We review your creative for compliance",
      text: "Because screens are inside private clinics, Malaysian healthcare advertising regulations apply. We review all content against MMC and MAB guidelines before anything goes live. Standard turnaround is 3–5 working days.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1400&auto=format&fit=crop",
    },
    {
      number: "04",
      title: "Your ad runs. We send you a report.",
      text: "Your content appears on clinic waiting room screens in rotation. Standard is one slot per 2-hour cycle. You choose which clinics and time windows. We send a monthly performance report with reach and QR scan data.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop",
    },
  ] as const;

  const audienceCards = [
    {
      icon: "solar:users-group-rounded-bold",
      title: "Broad mass-market reach",
      text: "Malaysia's population mix includes 22.2% aged 0-14, 70.1% aged 15-64, and 7.7% aged 65+ (DOSM, 2024). Private clinic waiting rooms therefore expose your brand to families, working adults, and seniors in one channel.",
    },
    {
      icon: "solar:stethoscope-bold",
      title: "Health-engaged consumers",
      text: "People in this environment are actively seeking care, so attention and message relevance are naturally higher for health, wellness, insurance, and everyday household products tied to wellbeing.",
    },
    {
      icon: "solar:map-point-bold",
      title: "Location-targeted visibility",
      text: "You can choose specific clinics and areas, making the channel practical for neighbourhood campaigns, outlet-level promotions, and region-by-region rollout strategies.",
    },
  ] as const;

  const targetingCards = [
    {
      icon: "solar:map-point-bold",
      title: "By clinic location",
      text: "Target specific clinics, postcodes, or zones. Useful for local businesses or campaigns tied to a particular area of Selangor or KL.",
    },
    {
      icon: "solar:clock-circle-bold",
      title: "By time of day",
      text: "Choose morning, afternoon, or full-day rotation windows to reach patients when it's most relevant for your brand.",
    },
    {
      icon: "solar:refresh-circle-bold",
      title: "By rotation slot",
      text: "Standard is one slot per 2-hour rotation cycle. Premium packages give you more frequent exposure across the same screens.",
    },
    {
      icon: "solar:qr-code-bold",
      title: "QR tracking",
      text: "Add a QR code to your creative for anonymous aggregate engagement data. Measure scan rates by clinic and time window.",
    },
  ] as const;

  const permittedCategories = [
    "Health supplements & vitamins (with disclaimers)",
    "OTC medicines (non-prescription)",
    "Medical devices (Class A & B)",
    "Health insurance & takaful",
    "Wellness & lifestyle products",
    "General consumer brands (reviewed case by case)",
  ] as const;

  const restrictedCategories = [
    "Prescription-only medicines (MMC/MAB)",
    "Tobacco and alcohol products",
    "Unregistered health products",
    "Unsubstantiated curative claims",
    "Gambling and adult content",
  ] as const;

  return (
    <div className="text-gray-900 antialiased overflow-x-hidden min-h-screen">
      <Navbar />

      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24">
        <div className="flex flex-col items-center text-center mb-16 animate-enter">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            How it works
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
            In-clinic advertising,{" "}
            <span className="font-playfair italic font-medium">
              made simple.
            </span>
          </h1>
          <p className="text-gray-500 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
            Surge Media manages advertising on display screens in private clinic
            waiting rooms across Malaysia. Here's how a campaign works from
            start to finish.
          </p>
        </div>

        <div className="relative mt-2">
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-6 bottom-6 w-px bg-gradient-to-b from-[#e33c1d]/20 via-[#e33c1d]/35 to-[#e33c1d]/20" />
          <div className="space-y-7 md:space-y-10">
            {steps.map((step, i) => {
              const reverse = i % 2 === 1;

              return (
                <article
                  key={step.number}
                  className="group relative pl-14 md:pl-0 animate-enter"
                  style={{ animationDelay: `${i * 110}ms` }}
                >
                  <div className="absolute left-0 top-6 md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 h-10 w-10 rounded-full bg-[#e33c1d] text-white flex items-center justify-center text-xs font-black tracking-[0.08em] shadow-[0_10px_24px_rgba(227,60,29,0.35)]">
                    {step.number}
                  </div>

                  <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-10 items-stretch">
                    <div
                      className={`rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] ${reverse ? "md:order-2" : "md:order-1"}`}
                    >
                      <h2 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 mb-4">
                        {step.title}
                      </h2>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {step.text}
                      </p>
                    </div>

                    <div
                      className={`relative mt-4 md:mt-0 overflow-hidden rounded-[2rem] aspect-[16/9] bg-gray-900 shadow-[0_6px_26px_rgba(0,0,0,0.12)] ${reverse ? "md:order-1" : "md:order-2"}`}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
        <div className="flex flex-col items-center text-center mb-14 animate-enter">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            The audience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
            Who&apos;s in the waiting room.
          </h2>
          <p className="text-gray-500 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
            This is not a niche audience. Malaysia recorded 68.2 million patient
            arrivals at MOH facilities in 2023, and private clinics capture a
            broad cross-section of the public too. For advertisers, that means
            real mass-market exposure in a focused, low-distraction environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">
          {audienceCards.map((card, i) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#e33c1d]/25 hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_top_right,rgba(227,60,29,0.12),transparent_48%)] transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#e33c1d]/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-[#e33c1d]/20" />

              <span
                className={
                  i % 2 === 0
                    ? "relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e33c1d] text-white shadow-[0_10px_24px_rgba(227,60,29,0.35)]"
                    : "relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#e33c1d] border border-gray-900/[0.08] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                }
                aria-hidden
              >
                <iconify-icon icon={card.icon} width="24" />
              </span>
              <h3 className="relative z-10 text-xl font-black tracking-tight text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </article>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-8 max-w-4xl">
          Sources: MOH Health Facts 2024 (2023 patient arrivals at MOH
          facilities), DOSM Current Population Estimates 2024 (age structure),
          and NHMS 2019 healthcare-seeking behaviour findings.
        </p>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
        <div className="flex flex-col items-center text-center mb-14 animate-enter">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            Targeting
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
            How you can target.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-enter delay-100">
          {targetingCards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[#e33c1d]/25 hover:shadow-[0_18px_44px_rgba(0,0,0,0.12)]"
            >
              <div className="absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_top_right,rgba(227,60,29,0.12),transparent_48%)] transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#e33c1d]/10 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-[#e33c1d]/20" />

              <span
                className="relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e33c1d] text-white shadow-[0_10px_24px_rgba(227,60,29,0.35)]"
                aria-hidden
              >
                <iconify-icon icon={card.icon} width="24" />
              </span>
              <h3 className="relative z-10 text-xl font-black tracking-tight text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
        <div className="flex flex-col items-center text-center mb-14 animate-enter">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            Compliance
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
            What can be advertised.
          </h2>
          <p className="text-gray-500 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
            Because screens are inside private clinics, all content is reviewed
            against Malaysian healthcare advertising regulations before going
            live.{" "}
            <span className="text-gray-700">
              Each clinic&apos;s doctors and team also approve what can be shown
              on their own waiting-room screens
            </span>{" "}
            — so messaging stays appropriate for their patients and practice.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 animate-enter delay-100">
          <div className="group rounded-[2rem] bg-[#efeae5] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 mb-8 flex items-center gap-2">
              <span className="text-[#e33c1d]" aria-hidden>
                ✓
              </span>{" "}
              Permitted
            </h3>
            <ul className="space-y-5 list-none pl-0">
              {permittedCategories.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 font-medium text-gray-900"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-[13px] font-bold leading-none text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="group rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-900/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 mb-8 flex items-center gap-2">
              <span className="text-gray-400" aria-hidden>
                ✗
              </span>{" "}
              Restricted
            </h3>
            <ul className="space-y-5 list-none pl-0">
              {restrictedCategories.map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-600">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-300 text-[13px] font-bold leading-none text-white"
                    aria-hidden
                  >
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-600 text-sm md:text-base mt-12 max-w-xl mx-auto leading-relaxed animate-enter delay-200">
          Not sure if your product qualifies?{" "}
          <Link
            href="/contact"
            className="font-semibold text-[#e33c1d] hover:text-[#cf361a] underline-offset-4 hover:underline"
          >
            Get in touch
          </Link>{" "}
          — we&apos;ll do a review for you.
        </p>
      </section>

      <FooterSection {...footerLeadClinicAdvertising} />
    </div>
  );
}
