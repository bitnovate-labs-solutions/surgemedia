export default function VideoTemplatesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-white text-gray-900 antialiased">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-10%,rgba(239,234,229,0.9),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_100%_0%,rgba(227,60,29,0.06),transparent_50%)]"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
