export default function VideoTemplatesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-slate-950 font-[family-name:var(--font-manrope),sans-serif] text-slate-100 antialiased">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(227,60,29,0.22),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(30,58,76,0.18),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-950"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
