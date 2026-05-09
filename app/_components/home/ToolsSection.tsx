"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { getSupabaseBrowserClient } from "../../../lib/supabaseClient";

export function ToolsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [hasWebsite, setHasWebsite] = useState("yes");
  const [hasGoogleProfile, setHasGoogleProfile] = useState("yes");
  const [postsPerWeek, setPostsPerWeek] = useState("1");
  const [socialPlatforms, setSocialPlatforms] = useState("2plus");
  const [profileOptimized, setProfileOptimized] = useState("partial");
  const [contentPillars, setContentPillars] = useState("somewhat");
  const [reviewResponse, setReviewResponse] = useState("sometimes");
  const [ctaClarity, setCtaClarity] = useState("somewhat");
  const [primaryGoal, setPrimaryGoal] = useState("awareness");
  const [targetLocationClarity, setTargetLocationClarity] = useState("somewhat");
  const [profileCompleteness, setProfileCompleteness] = useState("partial");
  const [recentReviews, setRecentReviews] = useState("some");
  const [trackingSetup, setTrackingSetup] = useState("partial");
  const [showResult, setShowResult] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "saving" | "error">("idle");
  const [isMounted, setIsMounted] = useState(false);
  const totalSteps = 14;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = documentElement.style.overflow;
    const prevHtmlOverscroll = documentElement.style.overscrollBehavior;
    const prevBodyOverscroll = body.style.overscrollBehavior;

    // Lock background scroll without shifting layout.
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
  }, [isModalOpen]);

  const audit = useMemo(() => {
    let score = 0;

    score += hasWebsite === "yes" ? 10 : 3;
    score += hasGoogleProfile === "yes" ? 10 : 0;
    score += postsPerWeek === "3plus" ? 10 : postsPerWeek === "1" ? 6 : 2;
    score += socialPlatforms === "2plus" ? 8 : socialPlatforms === "1" ? 5 : 1;
    score += profileOptimized === "yes" ? 8 : profileOptimized === "partial" ? 5 : 1;
    score += contentPillars === "yes" ? 8 : contentPillars === "somewhat" ? 5 : 1;
    score += reviewResponse === "always" ? 10 : reviewResponse === "sometimes" ? 6 : 2;
    score += ctaClarity === "clear" ? 8 : ctaClarity === "somewhat" ? 5 : 1;
    score += primaryGoal === "clear" ? 8 : primaryGoal === "somewhat" ? 5 : 1;
    score += targetLocationClarity === "clear" ? 6 : targetLocationClarity === "somewhat" ? 4 : 1;
    score += profileCompleteness === "complete" ? 8 : profileCompleteness === "partial" ? 5 : 1;
    score += recentReviews === "weekly" ? 8 : recentReviews === "some" ? 5 : 1;
    score += trackingSetup === "full" ? 8 : trackingSetup === "partial" ? 5 : 1;

    return Math.min(100, Math.max(0, score));
  }, [contentPillars, ctaClarity, hasGoogleProfile, hasWebsite, postsPerWeek, primaryGoal, profileCompleteness, profileOptimized, recentReviews, reviewResponse, socialPlatforms, targetLocationClarity, trackingSetup]);

  const openModal = () => {
    setCurrentStep(0);
    setIsModalOpen(true);
  };

  const goNext = () => setCurrentStep((prev) => Math.min(totalSteps - 1, prev + 1));
  const goBack = () => setCurrentStep((prev) => Math.max(0, prev - 1));
  const canProceed = currentStep !== 0 || (leadName.trim() !== "" && leadEmail.trim() !== "" && leadCompany.trim() !== "");

  const saveAuditSubmission = async () => {
    setSubmitState("saving");
    try {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setSubmitState("error");
        return;
      }

      const { error } = await supabase.from("audit_submissions").insert({
        name: leadName.trim(),
        email: leadEmail.trim(),
        company_name: leadCompany.trim(),
        has_website: hasWebsite,
        has_google_profile: hasGoogleProfile,
        posts_per_week: postsPerWeek,
        social_platforms: socialPlatforms,
        profile_optimized: profileOptimized,
        content_pillars: contentPillars,
        review_response: reviewResponse,
        cta_clarity: ctaClarity,
        primary_goal: primaryGoal,
        target_location_clarity: targetLocationClarity,
        profile_completeness: profileCompleteness,
        recent_reviews: recentReviews,
        tracking_setup: trackingSetup,
        score: audit,
        source_page: typeof window !== "undefined" ? window.location.pathname : "/",
        user_agent: typeof navigator !== "undefined" ? navigator.userAgent : null,
      });

      setSubmitState(error ? "error" : "idle");
    } catch {
      setSubmitState("error");
    }
  };

  const renderChoice = (
    question: string,
    value: string,
    setValue: (value: string) => void,
    options: Array<{ label: string; value: string }>
  ) => (
    <div>
      <p className="text-sm text-gray-700 mb-3">{question}</p>
      <div className="flex gap-3 w-full">
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => setValue(option.value)}
              className={`flex-1 min-w-0 text-center rounded-full border px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                selected
                  ? "border-[#e33c1d] bg-[#e33c1d] text-white"
                  : "border-gray-200 bg-gray-50 text-gray-800 hover:border-gray-400"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-3">
            <p className="text-sm text-gray-700 text-center">
              Add your basic details so Surge Media can share your audit follow-up.
            </p>
            <input
              type="text"
              value={leadName}
              onChange={(e) => setLeadName(e.target.value)}
              placeholder="Full name *"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm"
            />
            <input
              type="email"
              value={leadEmail}
              onChange={(e) => setLeadEmail(e.target.value)}
              placeholder="Work email *"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm"
            />
            <input
              type="text"
              value={leadCompany}
              onChange={(e) => setLeadCompany(e.target.value)}
              placeholder="Brand / company name *"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm"
            />
            <input
              type="text"
              value={leadPhone}
              onChange={(e) => setLeadPhone(e.target.value)}
              placeholder="Phone / WhatsApp (optional)"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm"
            />
          </div>
        );
      case 1:
        return renderChoice("Do you have a website or booking page?", hasWebsite, setHasWebsite, [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]);
      case 2:
        return renderChoice("Is your Google Business Profile active?", hasGoogleProfile, setHasGoogleProfile, [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]);
      case 3:
        return renderChoice("How often do you post content weekly?", postsPerWeek, setPostsPerWeek, [
          { label: "3+ times", value: "3plus" },
          { label: "About once", value: "1" },
          { label: "Rarely", value: "0" },
        ]);
      case 4:
        return renderChoice("How many active social platforms do you maintain?", socialPlatforms, setSocialPlatforms, [
          { label: "2+ active", value: "2plus" },
          { label: "1 active", value: "1" },
          { label: "None active", value: "0" },
        ]);
      case 5:
        return renderChoice("Are your social profiles optimized (bio, link, highlights, branding)?", profileOptimized, setProfileOptimized, [
          { label: "Yes", value: "yes" },
          { label: "Partially", value: "partial" },
          { label: "No", value: "no" },
        ]);
      case 6:
        return renderChoice("Do you post content pillars consistently (education, trust, offer)?", contentPillars, setContentPillars, [
          { label: "Yes", value: "yes" },
          { label: "Somewhat", value: "somewhat" },
          { label: "Not really", value: "no" },
        ]);
      case 7:
        return renderChoice("Do you respond to reviews consistently?", reviewResponse, setReviewResponse, [
          { label: "Always", value: "always" },
          { label: "Sometimes", value: "sometimes" },
          { label: "Never", value: "never" },
        ]);
      case 8:
        return renderChoice(
          "Is your call-to-action clear (Book now / WhatsApp / Contact)?",
          ctaClarity,
          setCtaClarity,
          [
            { label: "Very clear", value: "clear" },
            { label: "Somewhat", value: "somewhat" },
            { label: "Unclear", value: "unclear" },
          ]
        );
      case 9:
        return renderChoice("Is your primary marketing goal clearly defined?", primaryGoal, setPrimaryGoal, [
          { label: "Yes, clearly defined", value: "clear" },
          { label: "Somewhat", value: "somewhat" },
          { label: "Not really", value: "unclear" },
        ]);
      case 10:
        return renderChoice("Is your target location/audience clearly defined?", targetLocationClarity, setTargetLocationClarity, [
          { label: "Very clear", value: "clear" },
          { label: "Somewhat", value: "somewhat" },
          { label: "Unclear", value: "unclear" },
        ]);
      case 11:
        return renderChoice(
          "Are your profile details complete (hours, services, contact info, photos)?",
          profileCompleteness,
          setProfileCompleteness,
          [
            { label: "Mostly complete", value: "complete" },
            { label: "Partially complete", value: "partial" },
            { label: "Missing key details", value: "missing" },
          ]
        );
      case 12:
        return renderChoice("How frequently do you receive new reviews?", recentReviews, setRecentReviews, [
          { label: "Weekly", value: "weekly" },
          { label: "A few per month", value: "some" },
          { label: "Rarely or none", value: "none" },
        ]);
      default:
        return renderChoice("Do you track conversions (GA4, Meta Pixel, UTM links)?", trackingSetup, setTrackingSetup, [
          { label: "Yes, properly set up", value: "full" },
          { label: "Partially", value: "partial" },
          { label: "Not set up", value: "none" },
        ]);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 bg-white/50 backdrop-blur-sm rounded-[3rem] mb-14 md:mb-16 border border-white border-t border-gray-900/5">
      <div className="flex flex-col items-center text-center mb-16 animate-enter">
        <span className="bg-[#e33c1d] text-white px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider mb-6">Free Resources</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 leading-[0.95]">
          Free <span className="font-playfair italic font-medium">Online</span>{" "}
          <span className="font-playfair italic font-medium">Presence Audit</span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl text-base md:text-lg">
          Get a quick review of your brand&apos;s digital presence. We&apos;ll check your social channels, Google profile, brand consistency, and basic conversion readiness.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-enter delay-100">
        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">What this free audit checks</h3>
          <ul className="space-y-4">
            {[
              "Website and booking page readiness",
              "Google Business Profile activity and completeness",
              "Social posting consistency and review response habits",
              "CTA clarity, goal clarity, and audience/location targeting",
              "Tracking setup for conversions (GA4, Meta Pixel, UTM links)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="text-black mt-0.5 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-6">
            Fast self-check based on essentials most businesses need to improve visibility.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 text-center flex flex-col justify-center">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">Run your free visibility score</h3>
          <p className="text-sm text-gray-600 mb-6">Answer a short set of essential questions in a popup and get your score instantly.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button type="button" onClick={openModal} className="bg-[#e33c1d] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#c7351a] transition-colors">
              Run free audit
            </button>
            <a href="/contact" className="px-6 py-3 rounded-full text-sm font-medium border border-gray-300 text-gray-800 hover:border-black transition-colors">
              Talk to us
            </a>
          </div>

          {showResult ? (
            <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-5 text-center">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Audit result</p>
              <p className="text-4xl font-bold text-gray-900 mt-1">{audit}/100</p>
              {audit < 100 ? (
                <p className="text-sm text-gray-700 mt-2">Let us get you to 100%. Talk to us now!</p>
              ) : (
                <p className="text-sm text-gray-700 mt-2">Perfect score. You&apos;re doing great.</p>
              )}
              {submitState === "error" ? (
                <p className="text-xs text-red-600 mt-2">We could not save your details. Please contact us directly.</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>

      {isMounted && isModalOpen
        ? createPortal(
            <div className="fixed inset-0 z-[700] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 md:p-8">
                <div className="mb-6">
                  <div className="w-full text-center">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#e33c1d] mb-2">Free online presence audit</p>
                    <h4 className="text-2xl font-semibold tracking-tight text-gray-900">Test your brand for free</h4>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 text-center">
                    Question {currentStep + 1} of {totalSteps}
                  </p>
                  {renderStep()}
                </div>

                <div className="flex items-center justify-center gap-2 mb-6">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${i === currentStep ? "bg-black" : "bg-gray-300"}`}
                    />
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button type="button" onClick={goBack} disabled={currentStep === 0} className="w-full px-6 py-3 rounded-full text-sm font-medium border border-gray-300 text-gray-800 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#e33c1d] transition-colors">
                    Back
                  </button>
                  {currentStep < totalSteps - 1 ? (
                    <button type="button" disabled={!canProceed} onClick={goNext} className="w-full bg-[#e33c1d] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#c7351a] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={async () => {
                        await saveAuditSubmission();
                        setShowResult(true);
                        setIsModalOpen(false);
                      }}
                      disabled={submitState === "saving"}
                      className="w-full bg-[#e33c1d] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#c7351a] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitState === "saving" ? "Saving..." : "Show my score"}
                    </button>
                  )}
                  <button type="button" onClick={() => setIsModalOpen(false)} className="w-full px-6 py-3 rounded-full text-sm font-medium border border-gray-300 text-gray-800 hover:border-[#e33c1d] hover:text-[#e33c1d] transition-all duration-300">
                    Cancel
                  </button>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}
