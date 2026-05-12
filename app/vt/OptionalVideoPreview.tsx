"use client";

import { useCallback, useState } from "react";

export function OptionalVideoPreview({
  src,
  label,
}: {
  src: string;
  label: string;
}) {
  const [failed, setFailed] = useState(false);
  const onError = useCallback(() => setFailed(true), []);

  if (failed) {
    return (
      <p className="max-w-sm text-center text-xs leading-relaxed text-slate-500">
        Could not load <code className="rounded bg-white/5 px-1.5 py-0.5 text-slate-300">{label}</code>.
      </p>
    );
  }

  return (
    <video
      className="max-h-52 w-full max-w-md rounded-xl border border-white/10 bg-black/40 object-contain shadow-lg ring-1 ring-white/5"
      src={src}
      controls
      playsInline
      muted
      loop
      preload="metadata"
      aria-label={label}
      onError={onError}
    />
  );
}
