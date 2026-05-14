"use client";

import { useEffect, useId, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

export type ThemedMessageModalProps = {
  open: boolean;
  onClose: () => void;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  primaryCta?: { href: string; label: string };
  /** Shown as text button; calls onClose (e.g. “Maybe later”). */
  dismissLabel?: string;
};

/**
 * Reusable full-screen overlay + card, aligned with site cream / coral / rounded UI.
 * Parent controls `open` and persistence (e.g. localStorage).
 */
export function ThemedMessageModal({
  open,
  onClose,
  eyebrow,
  title,
  children,
  primaryCta,
  dismissLabel = "Maybe later",
}: ThemedMessageModalProps) {
  const titleId = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevHtmlOverscroll = documentElement.style.overscrollBehavior;
    const prevBodyOverscroll = body.style.overscrollBehavior;
    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    documentElement.style.overscrollBehavior = "none";
    body.style.overscrollBehavior = "none";
    return () => {
      documentElement.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      documentElement.style.overscrollBehavior = prevHtmlOverscroll;
      body.style.overscrollBehavior = prevBodyOverscroll;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[700] flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-lg rounded-[2rem] border border-gray-900/10 bg-[#efeae5] shadow-2xl shadow-gray-900/15 overflow-hidden"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.85),transparent_55%)] pointer-events-none" />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-900/10 bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 transition-colors"
          aria-label="Close"
        >
          <iconify-icon icon="solar:close-circle-linear" width="22" height="22" />
        </button>

        <div className="relative p-8 md:p-10 pt-14 md:pt-12 text-center flex flex-col items-center">
          {eyebrow ? (
            <span className="inline-flex bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-5">
              {eyebrow}
            </span>
          ) : null}
          <h2
            id={titleId}
            className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 leading-[1.05] mb-4 px-2"
          >
            {title}
          </h2>
          <div className="text-sm md:text-base text-gray-700 leading-relaxed space-y-3 w-full max-w-md mx-auto">
            {children}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center w-full">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                onClick={onClose}
                className="inline-flex justify-center items-center gap-2 rounded-full bg-[#e33c1d] text-white px-6 py-3.5 text-sm font-semibold hover:bg-[#c7351a] transition-colors shadow-[0_8px_24px_rgba(227,60,29,0.35)]"
              >
                {primaryCta.label}
                <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" />
              </Link>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center rounded-full border border-gray-900/15 bg-white/70 px-6 py-3 text-sm font-medium text-gray-800 hover:border-gray-900/30 hover:bg-white transition-colors"
            >
              {dismissLabel}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
