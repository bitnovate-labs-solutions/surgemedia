const offerings = [
  {
    icon: "solar:smartphone-bold",
    title: "Social Media Management",
    description:
      "Support to keep your social channels active and consistent.",
    bullets: [
      "Monthly content direction and planning",
      "Post scheduling support",
      "Simple monthly performance check-in",
    ],
    footnote:
      "A practical option if you need consistent posting without building a full in-house team.",
  },
  {
    icon: "solar:palette-round-bold",
    title: "Content Creation",
    description:
      "On-brand content support across graphics, short video, and copy.",
    bullets: [
      "Creative support for social posts and stories",
      "Short-form video support based on scope",
      "Caption and copy support in English and Bahasa Malaysia",
    ],
    footnote:
      "Designed for teams that need a steady flow of quality creative without expanding internal headcount.",
  },
  {
    icon: "solar:star-bold",
    title: "Google Review Management",
    description:
      "Ongoing support for Google Business Profile upkeep and review responses.",
    bullets: [
      "Google Business Profile housekeeping",
      "Review response support",
      "Periodic reputation summary",
    ],
    footnote:
      "Useful for any business where local search and reviews influence customer decisions.",
  },
  {
    icon: "solar:tag-bold",
    title: "Branding",
    description:
      "Branding and web design support to keep your materials visually consistent.",
    bullets: [
      "Website and landing page updates based on scope",
      "Brand identity consistency support",
      "Ongoing branding maintenance for active campaigns",
    ],
    footnote:
      "Best for refreshes, maintenance, or smaller brand updates over time.",
  },
] as const;

export function DigitalServicesSection() {
  return (
    <section
      id="services"
      className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-24 md:pb-32 relative z-10"
    >
      <div className="flex flex-col items-center text-center mb-14 md:mb-16 animate-enter">
        <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
          Digital services
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
          Beyond the waiting room.
        </h1>
        <p className="text-gray-500 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
          We also provide digital support for businesses that need practical help with social content, reviews, and brand upkeep. This can complement in-clinic campaigns or be engaged on its own.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 animate-enter delay-200">
        {offerings.map((item, i) => (
          <article
            key={item.title}
            className="group relative overflow-hidden rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-gray-900/12 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            <div className="absolute inset-0 opacity-0 bg-[radial-gradient(circle_at_top_right,rgba(227,60,29,0.08),transparent_50%)] transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            <span
              className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e33c1d] text-white shadow-[0_10px_24px_rgba(227,60,29,0.35)]"
              aria-hidden
            >
              <iconify-icon icon={item.icon} width="24" />
            </span>
            <h2 className="relative text-xl md:text-2xl font-black tracking-tight text-gray-900 mb-3">
              {item.title}
            </h2>
            <p className="relative text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              {item.description}
            </p>
            <ul className="relative space-y-3 list-none pl-0 mb-6">
              {item.bullets.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm text-gray-800 font-medium"
                >
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[11px] font-bold leading-none text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="relative text-xs text-gray-500 leading-relaxed border-t border-gray-900/10 pt-5">
              {item.footnote}
            </p>
          </article>
        ))}
      </div>

    </section>
  );
}
