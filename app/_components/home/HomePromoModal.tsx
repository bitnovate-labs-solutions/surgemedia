"use client";

import { useEffect, useState } from "react";
import { ThemedMessageModal } from "./ThemedMessageModal";

function isPromoEnabled() {
  return process.env.NEXT_PUBLIC_SHOW_HOME_PROMO_MODAL === "true";
}

/** Remaining spots shown in the modal (update in env as you fill seats). */
function spotsLeft(): number {
  const raw = process.env.NEXT_PUBLIC_HOME_PROMO_SPOTS_LEFT;
  if (raw === undefined || raw === "") return 5;
  const n = parseInt(String(raw), 10);
  if (Number.isNaN(n)) return 5;
  return Math.max(0, Math.min(n, 99));
}

/**
 * Homepage promotional modal. On/off is controlled only by env:
 * - `NEXT_PUBLIC_SHOW_HOME_PROMO_MODAL=true` — modal appears on each homepage visit (after a short delay).
 * - `NEXT_PUBLIC_SHOW_HOME_PROMO_MODAL=false` (or unset) — modal does not render.
 * - `NEXT_PUBLIC_HOME_PROMO_SPOTS_LEFT` (optional, default `5`) — “Only X spots left”; lower as seats fill.
 */
export function HomePromoModal() {
  const enabled = isPromoEnabled();
  const spots = spotsLeft();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!enabled || !mounted) return;
    const delayMs = 900;
    const t = window.setTimeout(() => setOpen(true), delayMs);
    return () => window.clearTimeout(t);
  }, [enabled, mounted]);

  const dismiss = () => {
    setOpen(false);
  };

  if (!enabled) return null;

  return (
    <ThemedMessageModal
      open={open}
      onClose={dismiss}
      eyebrow="Limited intake"
      title={
        spots === 0 ? (
          <>All trial spots are filled for now.</>
        ) : (
          <>
            <span className="font-playfair italic font-bold text-[#e33c1d]">
              Free digital marketing trial
            </span>
            {/* —very few spots. When they&apos;re full, we close the list. */}
          </>
        )
      }
      primaryCta={{ href: "/contact", label: "Reserve a spot" }}
      dismissLabel="Not now"
    >
      <p>
        We&apos;re opening a{" "}
        <strong className="text-gray-900">small batch</strong> of slots for a{" "}
        <br />
        <strong className="text-[#e33c1d]">
          free digital marketing services trial
        </strong>
        <br />
        When they&apos;re full, we close the list.
        {/* —or entry with a{" "}
        <strong className="text-gray-900">
          discounted commitment from RM 1,000
        </strong>{" "}
        instead of our usual onboarding fees. */}
      </p>
      <p>
        For every brand we accept, Surge Media shows up with{" "}
        <strong className="text-gray-900">
          hands-on, accountable delivery
        </strong>
        —so the work stays aimed at{" "}
        <strong className="text-gray-900">
          outcomes you can see in the business
        </strong>
        .
      </p>
      {spots > 0 ? (
        <p className="text-gray-900 font-black text-xl md:text-2xl border-t-4 border-[#e33c1d] pt-5 mt-4 max-w-md mx-auto tracking-tight">
          Only <span className="text-[#e33c1d] tabular-nums">{spots}</span> spot
          {spots === 1 ? "" : "s"} left
        </p>
      ) : (
        <p className="text-gray-600 text-sm border-t border-gray-200 pt-4 mt-4 max-w-md mx-auto">
          Message us—we can let you know when more trial spots open.
        </p>
      )}
    </ThemedMessageModal>
  );
}
