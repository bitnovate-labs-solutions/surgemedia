import type { ClinicVideoTemplate } from "./templates";
import { OptionalVideoPreview } from "./OptionalVideoPreview";
import { TemplateFormatMockup } from "./TemplateFormatMockup";

function DeviceShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.35rem] bg-gradient-to-br from-[#e33c1d]/90 via-[#c4321a] to-[#7c1d12] p-px shadow-[0_20px_50px_rgba(227,60,29,0.22)] ring-1 ring-white/10 sm:rounded-[1.75rem] sm:p-[3px]">
      <div className="overflow-hidden rounded-[1.3rem] bg-slate-950/30 sm:rounded-[1.65rem]">{children}</div>
    </div>
  );
}

export function TemplatePreview({ template }: { template: ClinicVideoTemplate }) {
  const hasPortrait = Boolean(template.portraitSrc);
  const hasLandscape = Boolean(template.landscapeSrc);

  return (
    <div className="space-y-8">
      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-8 lg:gap-12">
        <div className="flex flex-col items-center gap-3 md:items-end">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e33c1d] sm:tracking-[0.28em]">
            Portrait · 9:16 · clinic screen
          </p>
          <DeviceShell>
            <div className="aspect-[9/16] w-full max-w-[280px] bg-slate-950 sm:max-w-[300px]">
              <TemplateFormatMockup template={template} orientation="portrait" />
            </div>
          </DeviceShell>
          <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
            10s spot
          </span>
        </div>

        <div className="flex w-full min-w-0 flex-col items-center gap-3 md:items-start">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e33c1d] sm:tracking-[0.28em]">
            Landscape · 16:9
          </p>
          <DeviceShell>
            <div className="aspect-video w-full max-w-2xl bg-slate-950">
              <TemplateFormatMockup template={template} orientation="landscape" />
            </div>
          </DeviceShell>
          <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-300">
            10s spot
          </span>
        </div>
      </div>

      {(hasPortrait || hasLandscape) && (
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.04]">
          <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#e33c1d]">
            Exported file preview
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {hasPortrait && template.portraitSrc ? (
              <OptionalVideoPreview src={template.portraitSrc} label={`Template ${template.letter} portrait`} />
            ) : null}
            {hasLandscape && template.landscapeSrc ? (
              <OptionalVideoPreview src={template.landscapeSrc} label={`Template ${template.letter} landscape`} />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
