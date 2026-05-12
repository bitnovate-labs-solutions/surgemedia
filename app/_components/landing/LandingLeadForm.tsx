"use client";

import { useState } from "react";
import { getSupabaseBrowserClient } from "../../../lib/supabaseClient";
import type { LandingConfig } from "./landingConfig";

type Props = {
  config: LandingConfig;
};

export function LandingLeadForm({ config }: Props) {
  const [state, setState] = useState<"idle" | "saving" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("saving");
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      role: config.roleLabel,
      name: String(fd.get("name") ?? "").trim(),
      organisation: String(fd.get("organisation") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      whatsapp: String(fd.get("phone") ?? "").trim() || "—",
      state: String(fd.get("state") ?? "Others").trim() || "Others",
      message: [
        `[Landing ${config.id}]`,
        String(fd.get("message") ?? "").trim() || "(no message)",
      ].join("\n"),
      source_page: `/landing/${config.id}`,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
    };

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setState("error");
        return;
      }
      const { error } = await supabase.from("contact_submissions").insert(payload);
      if (error) {
        setState("error");
        return;
      }
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  };

  return (
    <section
      id="lead"
      className={`mx-auto w-full max-w-lg rounded-[2rem] p-8 md:p-10 ${config.surfaceClass}`}
    >
      {state === "success" ? (
        <div className="text-center py-4" role="status">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Received</p>
          <p className="text-lg font-black text-gray-900 tracking-tight">Thanks — we&apos;ll be in touch.</p>
          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            Your details are in. We usually respond within one working day.
          </p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className={`mt-8 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors ${config.accentBg} ${config.accentBgHover}`}
          >
            Send another note
          </button>
        </div>
      ) : (
        <>
          <div className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">{config.formEyebrow}</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 leading-tight mb-2">
              {config.formTitle}
            </h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">{config.formHint}</p>
          </div>

          <form className="space-y-4 text-left" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="lp-name" className="block text-xs font-semibold text-gray-800 mb-1.5">
                Name
              </label>
              <input
                id="lp-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-gray-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900/25 focus:ring-2 focus:ring-gray-900/10"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="lp-email" className="block text-xs font-semibold text-gray-800 mb-1.5">
                Work email
              </label>
              <input
                id="lp-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-gray-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900/25 focus:ring-2 focus:ring-gray-900/10"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="lp-org" className="block text-xs font-semibold text-gray-800 mb-1.5">
                Organisation
              </label>
              <input
                id="lp-org"
                name="organisation"
                type="text"
                autoComplete="organization"
                className="w-full rounded-xl border border-gray-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900/25 focus:ring-2 focus:ring-gray-900/10"
                placeholder="Clinic or company name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="lp-phone" className="block text-xs font-semibold text-gray-800 mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  id="lp-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-gray-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900/25 focus:ring-2 focus:ring-gray-900/10"
                  placeholder="+60 …"
                />
              </div>
              <div>
                <label htmlFor="lp-state" className="block text-xs font-semibold text-gray-800 mb-1.5">
                  State
                </label>
                <select
                  id="lp-state"
                  name="state"
                  defaultValue="Selangor"
                  className="w-full rounded-xl border border-gray-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900/25 focus:ring-2 focus:ring-gray-900/10"
                >
                  <option>Selangor</option>
                  <option>Kuala Lumpur</option>
                  <option>Johor</option>
                  <option>Penang</option>
                  <option>Perak</option>
                  <option>Sabah</option>
                  <option>Sarawak</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="lp-msg" className="block text-xs font-semibold text-gray-800 mb-1.5">
                What are you looking for?
              </label>
              <textarea
                id="lp-msg"
                name="message"
                rows={4}
                className="w-full resize-y rounded-xl border border-gray-900/12 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900/25 focus:ring-2 focus:ring-gray-900/10"
                placeholder="A sentence or two is enough."
              />
            </div>

            {state === "error" ? (
              <p className="text-sm text-red-600" role="alert">
                Could not send just now. Email{" "}
                <a href="mailto:hello@surgemedia.ai" className="font-semibold underline underline-offset-2">
                  hello@surgemedia.ai
                </a>{" "}
                or try again.
              </p>
            ) : null}

            <button
              type="submit"
              disabled={state === "saving"}
              className={`w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:opacity-95 active:scale-[0.99] disabled:opacity-60 ${config.accentBg} ${config.accentBgHover} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${config.accentRing}`}
            >
              {state === "saving" ? "Sending…" : "Get in touch"}
            </button>
          </form>
        </>
      )}
    </section>
  );
}
