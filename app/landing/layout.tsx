export default function LandingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen font-[family-name:var(--font-manrope),sans-serif] text-gray-900 antialiased">
      {children}
    </div>
  );
}
