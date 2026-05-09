"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/services", label: "Digital Services" },
  { href: "/compliance", label: "Compliance" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    if (menuOpen) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className="w-full px-6 pt-6 pb-6 md:px-12 relative z-[500] animate-enter">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="leading-none" aria-label="Go to homepage">
            <img src="/SurgeMedia-brand.png" alt="Surge Media" className="h-8 md:h-10 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 z-[501] relative">
            {pathname !== "/contact" && (
              <Link href="/contact" className="flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group">
                Get in touch
                <iconify-icon icon="solar:arrow-right-linear" width="16" class="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            <button type="button" onClick={() => setMenuOpen((prev) => !prev)} className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" aria-label="Toggle Menu" aria-expanded={menuOpen}>
              <iconify-icon icon={menuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
