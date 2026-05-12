import type { ClinicVideoTemplate } from "./templates";

function stripeClasses(audience: ClinicVideoTemplate["audience"]) {
  return audience === "all" ? "bg-[#0d9488]" : "bg-[#ea580c]";
}

function badgeClasses(audience: ClinicVideoTemplate["audience"]) {
  return audience === "all"
    ? "bg-teal-100 text-teal-900 ring-1 ring-teal-200/80"
    : "bg-orange-100 text-orange-950 ring-1 ring-orange-200/90";
}

export function TemplateFormatMockup({
  template,
  orientation,
}: {
  template: ClinicVideoTemplate;
  orientation: "portrait" | "landscape";
}) {
  const { letter, audience, exampleCopy } = template;
  const stripe = stripeClasses(audience);
  const badge = badgeClasses(audience);
  const badgeLabel = audience === "all" ? "All advertisers" : "Non-healthcare";

  if (orientation === "portrait") {
    return (
      <div className="flex h-full min-h-0 w-full overflow-hidden bg-white text-gray-900 shadow-inner">
        <div className={`flex w-[16%] min-w-[2.25rem] shrink-0 flex-col items-center ${stripe} pt-5 sm:pt-8`}>
          <span className="font-sans text-2xl font-black leading-none text-white sm:text-3xl">{letter}</span>
        </div>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col p-3 pt-4 sm:p-4 sm:pt-5">
          <span
            className={`mb-2.5 inline-flex w-fit rounded-full px-2 py-1 text-[8px] font-bold uppercase tracking-wide sm:text-[9px] ${badge}`}
          >
            {badgeLabel}
          </span>
          <p className="text-[11px] font-semibold leading-snug text-gray-900 sm:text-xs md:text-sm">{exampleCopy}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-hidden bg-white text-gray-900 shadow-inner">
      <div className={`flex w-14 shrink-0 flex-col items-center justify-center sm:w-20 ${stripe}`}>
        <span className="font-sans text-xl font-black text-white sm:text-2xl">{letter}</span>
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-2 px-3 py-3 sm:px-5 sm:py-4">
        <span
          className={`inline-flex w-fit rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide sm:text-[9px] ${badge}`}
        >
          {badgeLabel}
        </span>
        <p className="text-[11px] font-semibold leading-snug text-gray-900 sm:text-sm md:text-base">{exampleCopy}</p>
      </div>
    </div>
  );
}
