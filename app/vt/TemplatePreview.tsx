import type { ClinicVideoTemplate } from "./templates";

function DeviceShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[1.35rem] bg-gradient-to-br from-[#e33c1d]/90 via-[#c4321a] to-[#7c1d12] p-px shadow-[0_20px_50px_rgba(227,60,29,0.18)] ring-1 ring-gray-900/10 sm:rounded-[1.75rem] sm:p-[3px]">
      <div className="overflow-hidden rounded-[1.3rem] bg-gray-100 sm:rounded-[1.65rem]">{children}</div>
    </div>
  );
}

/** Shown when no `portraitSrc` / `landscapeSrc` is set in `templates.ts`. */
function VideoSlotPlaceholder({
  orientation,
  templateLetter,
}: {
  orientation: "portrait" | "landscape";
  templateLetter: string;
}) {
  const label =
    orientation === "portrait"
      ? `Portrait 9:16 video slot, template ${templateLetter}`
      : `Landscape video slot, template ${templateLetter}`;

  return (
    <div
      className="flex min-h-0 min-w-0 flex-1 flex-col items-center justify-center gap-2 border-2 border-dashed border-gray-300 bg-white p-4 text-center"
      aria-label={label}
      role="img"
    >
      <span className="rounded-full bg-gray-100 p-2.5 text-gray-500 ring-1 ring-gray-200" aria-hidden>
        <iconify-icon icon="solar:video-frame-play-vertical-bold-duotone" width="28" height="28" />
      </span>
      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Video placeholder</span>
      <span className="max-w-[14rem] text-[9px] leading-snug text-gray-400">
        Set paths in <code className="rounded bg-gray-100 px-1 text-gray-600">app/vt/templates.ts</code> — files live in{" "}
        <code className="rounded bg-gray-100 px-1 text-gray-600">public/</code>.
      </span>
    </div>
  );
}

export function TemplatePreview({ template }: { template: ClinicVideoTemplate }) {
  const portraitSrc = template.portraitSrc?.trim();
  const landscapeSrc = template.landscapeSrc?.trim();

  return (
    <div className="space-y-8">
      <div className="grid w-full min-w-0 grid-cols-1 gap-10 md:grid-cols-[auto_1fr] md:items-start md:gap-4 lg:gap-5">
        <div className="flex w-full min-w-0 max-w-full flex-col items-center gap-3 md:w-max md:items-start">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e33c1d] sm:tracking-[0.28em]">
            Portrait · 9:16
          </p>
          <DeviceShell>
            <div className="flex w-full max-w-[320px] flex-col overflow-hidden rounded-2xl bg-black aspect-[9/16] sm:max-w-[380px]">
              {portraitSrc ? (
                <video
                  className="min-h-0 w-full flex-1 object-contain"
                  src={portraitSrc}
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  aria-label={`Template ${template.letter} portrait — ${template.title}`}
                />
              ) : (
                <VideoSlotPlaceholder orientation="portrait" templateLetter={template.letter} />
              )}
            </div>
          </DeviceShell>
        </div>

        <div className="flex w-full min-w-0 flex-col items-center gap-3 md:min-w-0 md:items-end md:justify-self-stretch">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e33c1d] sm:tracking-[0.28em]">
            Landscape · 16:9
          </p>
          <DeviceShell>
            <div className="mx-auto flex w-full max-w-none flex-col overflow-hidden rounded-2xl bg-black aspect-video md:mx-0">
              {landscapeSrc ? (
                <video
                  className="h-full w-full object-contain"
                  src={landscapeSrc}
                  controls
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  aria-label={`Template ${template.letter} landscape — ${template.title}`}
                />
              ) : (
                <VideoSlotPlaceholder orientation="landscape" templateLetter={template.letter} />
              )}
            </div>
          </DeviceShell>
        </div>
      </div>
    </div>
  );
}
