/**
 * Self-check scoring for the Free Online Presence Audit (ToolsSection).
 * Copy is intentionally high-level so the public scorecard is not a tactical playbook.
 */

export type PresenceAuditAnswers = {
  hasWebsite: string;
  hasGoogleProfile: string;
  postsPerWeek: string;
  socialPlatforms: string;
  profileOptimized: string;
  contentPillars: string;
  reviewResponse: string;
  ctaClarity: string;
  primaryGoal: string;
  targetLocationClarity: string;
  profileCompleteness: string;
  recentReviews: string;
  trackingSetup: string;
};

export type AuditDimension = {
  id: string;
  label: string;
  earned: number;
  max: number;
  answerLabel: string;
};

/** Public + UI: titles and uplift only—no how-to strings. */
export type AuditGap = {
  id: string;
  label: string;
  recoverablePoints: number;
};

export type PresenceAuditInsights = {
  rawScore: number;
  score: number;
  dimensions: AuditDimension[];
  gaps: AuditGap[];
  scoreBandKey: "foundation" | "growing" | "strong" | "excellent";
  scoreBandTitle: string;
  scoreBandBlurb: string;
  whatTheScoreMeasures: string;
  onePercentBusinessImpact: string;
  howSurgeCanHelpSummary: string;
  /** Stored in `audit_submissions.audit_insights` — v2 is structured only (no long prose). */
  forDatabase: {
    version: 2;
    raw_score: number;
    score: number;
    score_band: PresenceAuditInsights["scoreBandKey"];
    gaps: Array<{
      id: string;
      label: string;
      recoverable_points: number;
    }>;
    generated_at: string;
  };
};

function answerLabelForDimension(id: string, value: string): string {
  const maps: Record<string, Record<string, string>> = {
    has_website: { yes: "Yes", no: "No" },
    has_google_profile: { yes: "Yes", no: "No" },
    posts_per_week: { "3plus": "3+ times per week", "1": "About once per week", "0": "Rarely" },
    social_platforms: { "2plus": "2+ active platforms", "1": "1 active platform", "0": "None active" },
    profile_optimized: { yes: "Fully optimized", partial: "Partially optimized", no: "Not optimized" },
    content_pillars: { yes: "Consistent pillars", somewhat: "Somewhat consistent", no: "Not really" },
    review_response: { always: "Always respond", sometimes: "Sometimes", never: "Never" },
    cta_clarity: { clear: "Very clear", somewhat: "Somewhat clear", unclear: "Unclear" },
    primary_goal: { clear: "Clearly defined", somewhat: "Somewhat defined", unclear: "Not really defined" },
    target_location_clarity: { clear: "Very clear", somewhat: "Somewhat clear", unclear: "Unclear" },
    profile_completeness: { complete: "Mostly complete", partial: "Partially complete", missing: "Missing key details" },
    recent_reviews: { weekly: "Weekly new reviews", some: "A few per month", none: "Rarely or none" },
    tracking_setup: { full: "Properly set up", partial: "Partially set up", none: "Not set up" },
  };
  return maps[id]?.[value] ?? value;
}

function dimension(
  id: string,
  label: string,
  max: number,
  earned: number,
  value: string
): AuditDimension {
  return {
    id,
    label,
    earned,
    max,
    answerLabel: answerLabelForDimension(id, value),
  };
}

export function analyzePresenceAudit(answers: PresenceAuditAnswers): PresenceAuditInsights {
  const d: AuditDimension[] = [];

  const wEarn =
    answers.hasWebsite === "yes" ? 10 : answers.hasWebsite === "no" ? 3 : 3;
  d.push(dimension("has_website", "Website or booking page", 10, wEarn, answers.hasWebsite));

  const gEarn = answers.hasGoogleProfile === "yes" ? 10 : 0;
  d.push(dimension("has_google_profile", "Google Business Profile", 10, gEarn, answers.hasGoogleProfile));

  const pEarn =
    answers.postsPerWeek === "3plus" ? 10 : answers.postsPerWeek === "1" ? 6 : 2;
  d.push(dimension("posts_per_week", "Weekly content cadence", 10, pEarn, answers.postsPerWeek));

  const sEarn =
    answers.socialPlatforms === "2plus" ? 8 : answers.socialPlatforms === "1" ? 5 : 1;
  d.push(dimension("social_platforms", "Active social platforms", 8, sEarn, answers.socialPlatforms));

  const poEarn =
    answers.profileOptimized === "yes" ? 8 : answers.profileOptimized === "partial" ? 5 : 1;
  d.push(dimension("profile_optimized", "Social profile optimization", 8, poEarn, answers.profileOptimized));

  const cpEarn =
    answers.contentPillars === "yes" ? 8 : answers.contentPillars === "somewhat" ? 5 : 1;
  d.push(dimension("content_pillars", "Content themes & consistency", 8, cpEarn, answers.contentPillars));

  const rrEarn =
    answers.reviewResponse === "always" ? 10 : answers.reviewResponse === "sometimes" ? 6 : 2;
  d.push(dimension("review_response", "Review responses", 10, rrEarn, answers.reviewResponse));

  const ctaEarn = answers.ctaClarity === "clear" ? 8 : answers.ctaClarity === "somewhat" ? 5 : 1;
  d.push(dimension("cta_clarity", "Call-to-action clarity", 8, ctaEarn, answers.ctaClarity));

  const pgEarn =
    answers.primaryGoal === "clear" ? 8 : answers.primaryGoal === "somewhat" ? 5 : 1;
  d.push(dimension("primary_goal", "Primary marketing goal clarity", 8, pgEarn, answers.primaryGoal));

  const tlEarn =
    answers.targetLocationClarity === "clear" ? 6 : answers.targetLocationClarity === "somewhat" ? 4 : 1;
  d.push(
    dimension(
      "target_location_clarity",
      "Target audience / location clarity",
      6,
      tlEarn,
      answers.targetLocationClarity
    )
  );

  const pcEarn =
    answers.profileCompleteness === "complete" ? 8 : answers.profileCompleteness === "partial" ? 5 : 1;
  d.push(dimension("profile_completeness", "Profile detail completeness", 8, pcEarn, answers.profileCompleteness));

  const rvEarn =
    answers.recentReviews === "weekly" ? 8 : answers.recentReviews === "some" ? 5 : 1;
  d.push(dimension("recent_reviews", "New review frequency", 8, rvEarn, answers.recentReviews));

  const trEarn =
    answers.trackingSetup === "full" ? 8 : answers.trackingSetup === "partial" ? 5 : 1;
  d.push(dimension("tracking_setup", "Conversion & results measurement", 8, trEarn, answers.trackingSetup));

  const rawScore = d.reduce((sum, x) => sum + x.earned, 0);
  const score = Math.min(100, Math.max(0, rawScore));

  const gaps: AuditGap[] = d
    .filter((x) => x.earned < x.max)
    .map((x) => ({
      id: x.id,
      label: x.label,
      recoverablePoints: x.max - x.earned,
    }))
    .sort((a, b) => b.recoverablePoints - a.recoverablePoints);

  const scoreBand: PresenceAuditInsights["scoreBandKey"] =
    score >= 86 ? "excellent" : score >= 66 ? "strong" : score >= 41 ? "growing" : "foundation";

  const scoreBandTitle: Record<PresenceAuditInsights["scoreBandKey"], string> = {
    foundation: "Foundation stage",
    growing: "Growing presence",
    strong: "Strong presence",
    excellent: "Excellent readiness",
  };

  const scoreBandBlurb: Record<PresenceAuditInsights["scoreBandKey"], string> = {
    foundation: "There is headroom on this quick check. A private review is where we go deeper.",
    growing: "You are partway there on this snapshot. Next step is a conversation tailored to you.",
    strong: "Solid on the basics shown here. Fine-tuning is usually contextual—we cover that offline.",
    excellent: "Strong on this snapshot. The focus shifts to keeping momentum—not the score alone.",
  };

  const whatTheScoreMeasures =
    "This number is a simple snapshot from your answers. It is not a revenue forecast—just a nudge on where attention might help most.";

  const onePercentBusinessImpact =
    "Each point is a rough signal, not a recipe. What to change first depends on your category and goals—better on a short call than a generic tip list here.";

  const howSurgeCanHelpSummary =
    "We share specifics, priorities, and timelines in consultation. This screen stays intentionally light.";

  const forDatabase: PresenceAuditInsights["forDatabase"] = {
    version: 2,
    raw_score: rawScore,
    score,
    score_band: scoreBand,
    gaps: gaps.map((g) => ({
      id: g.id,
      label: g.label,
      recoverable_points: g.recoverablePoints,
    })),
    generated_at: new Date().toISOString(),
  };

  return {
    rawScore,
    score,
    dimensions: d,
    gaps,
    scoreBandKey: scoreBand,
    scoreBandTitle: scoreBandTitle[scoreBand],
    scoreBandBlurb: scoreBandBlurb[scoreBand],
    whatTheScoreMeasures,
    onePercentBusinessImpact,
    howSurgeCanHelpSummary,
    forDatabase,
  };
}
