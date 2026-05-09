"use client";

import { useEffect, useRef, useState } from "react";
import { getSupabaseBrowserClient } from "../../lib/supabaseClient";
import { FooterSection } from "../_components/home/sections";
import { Navbar } from "../_components/home/Navbar";

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<
    "idle" | "saving" | "success" | "error"
  >("idle");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitState !== "success" || !successRef.current) return;
    successRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    successRef.current.focus({ preventScroll: true });
  }, [submitState]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("saving");

    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setSubmitState("error");
        return;
      }

      const form = event.currentTarget;
      const formData = new FormData(form);

      const payload = {
        role: String(formData.get("role") ?? "").trim(),
        name: String(formData.get("name") ?? "").trim(),
        organisation: String(formData.get("organisation") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        whatsapp: String(formData.get("whatsapp") ?? "").trim(),
        state: String(formData.get("state") ?? "").trim(),
        message: String(formData.get("message") ?? "").trim(),
        source_page:
          typeof window !== "undefined" ? window.location.pathname : "/contact",
        user_agent:
          typeof navigator !== "undefined" ? navigator.userAgent : null,
      };

      const { error } = await supabase
        .from("contact_submissions")
        .insert(payload);

      if (error) {
        setSubmitState("error");
        return;
      }

      setSubmitState("success");
      form.reset();
    } catch {
      setSubmitState("error");
    }
  };

  return (
    <div className="text-gray-900 antialiased overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="flex flex-col items-center text-center mb-14 md:mb-16 animate-enter">
          <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95] max-w-4xl">
            Let&apos;s have a conversation.
          </h1>
          <p className="text-gray-500 mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
            Whether you want to advertise in clinics, need digital marketing
            support, or just want to understand what we do — get in touch.
            We&apos;re a small team and we respond personally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-8 animate-enter delay-100">
          <section className="relative overflow-hidden rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <form
              className={
                submitState === "success"
                  ? "pointer-events-none space-y-5 select-none"
                  : "space-y-5"
              }
              onSubmit={handleSubmit}
              aria-hidden={submitState === "success"}
            >
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  I am a...
                </label>
                <select
                  id="role"
                  name="role"
                  defaultValue="Brand or advertiser looking to advertise in clinics"
                  className="w-full rounded-xl border border-gray-900/15 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#e33c1d] focus:ring-2 focus:ring-[#e33c1d]/20"
                >
                  <option>
                    Brand or advertiser looking to advertise in clinics
                  </option>
                  <option>Clinic or healthcare professional</option>
                  <option>
                    Business looking for digital marketing support
                  </option>
                  <option>General enquiry</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-gray-900/15 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#e33c1d] focus:ring-2 focus:ring-[#e33c1d]/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="organisation"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Organisation
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    type="text"
                    placeholder="Company or clinic name"
                    className="w-full rounded-xl border border-gray-900/15 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#e33c1d] focus:ring-2 focus:ring-[#e33c1d]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-gray-900/15 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#e33c1d] focus:ring-2 focus:ring-[#e33c1d]/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="whatsapp"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="+60 12-345 6789"
                    required
                    className="w-full rounded-xl border border-gray-900/15 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#e33c1d] focus:ring-2 focus:ring-[#e33c1d]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    defaultValue="Selangor"
                    className="w-full rounded-xl border border-gray-900/15 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#e33c1d] focus:ring-2 focus:ring-[#e33c1d]/20"
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
                <div className="hidden md:block" />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us what you're looking for..."
                  required
                  className="w-full rounded-xl border border-gray-900/15 bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#e33c1d] focus:ring-2 focus:ring-[#e33c1d]/20 resize-y"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={submitState === "saving"}
                  className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                >
                  {submitState === "saving" ? "Sending..." : "Send"}
                  <span aria-hidden>→</span>
                </button>
                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    We reply within 1 working day.
                  </p>
                  {submitState === "error" && (
                    <p className="text-xs text-red-600 mt-1" role="alert">
                      Could not send right now. Please try again or use
                      WhatsApp.
                    </p>
                  )}
                </div>
              </div>
            </form>

            {submitState === "success" && (
              <div
                ref={successRef}
                tabIndex={-1}
                role="status"
                aria-live="polite"
                className="absolute inset-0 z-20 flex items-center justify-center rounded-[2rem] bg-gray-950/25 p-10 backdrop-blur-[2px] outline-none sm:p-12 md:p-14 lg:p-16"
              >
                <div className="w-full max-w-md rounded-[2rem] border border-gray-900/[0.06] bg-white px-10 py-12 text-center shadow-[0_24px_64px_rgba(0,0,0,0.35)] sm:px-12 sm:py-14 md:px-14 md:py-16">
                  <span
                    className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e33c1d] text-white shadow-[0_10px_28px_rgba(227,60,29,0.35)]"
                    aria-hidden
                  >
                    <iconify-icon icon="solar:check-circle-bold" width="32" />
                  </span>
                  <h2 className="mt-8 text-xl font-black tracking-tight text-gray-900 sm:text-2xl">
                    Your message is in.
                  </h2>
                  <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                    Thank you so much for your time and interest — we&apos;ve
                    received your details and what you&apos;re interested in.
                    The Surge Media team will review it and get back to you
                    soon, usually within one working day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitState("idle")}
                    className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send another message
                    <iconify-icon icon="solar:arrow-right-linear" width="16" />
                  </button>
                </div>
              </div>
            )}
          </section>

          <aside className="space-y-6">
            <section className="rounded-[2rem] bg-[#efeae5] p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-5">
                Prefer WhatsApp?
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                We&apos;re a small team. WhatsApp is often the fastest way to
                reach us. Mon–Fri, 9am–6pm MYT.
              </p>

              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#1eb85a] transition-colors shadow-[0_8px_24px_rgba(37,211,102,0.32)]"
              >
                <iconify-icon icon="solar:chat-round-dots-bold" width="18" />
                WhatsApp us
              </a>
            </section>

            <section className="rounded-[2rem] border border-gray-900/[0.08] bg-white/90 backdrop-blur-sm p-8 md:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#e33c1d] text-white shadow-[0_10px_24px_rgba(227,60,29,0.35)]"
                    aria-hidden
                  >
                    <iconify-icon icon="solar:letter-linear" width="18" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Email
                    </p>
                    <a
                      href="mailto:hello@surgemedia.ai"
                      className="text-gray-900 hover:text-black"
                    >
                      hello@surgemedia.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#e33c1d] border border-gray-900/[0.08] shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    aria-hidden
                  >
                    <iconify-icon icon="solar:phone-linear" width="18" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      Phone
                    </p>
                    <a
                      href="tel:+60123456789"
                      className="text-gray-900 hover:text-black"
                    >
                      +60 12-345 6789
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
      <FooterSection showLeadSection={false} />
    </div>
  );
}
