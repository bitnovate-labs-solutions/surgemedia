-- Free Online Presence Audit: structured insights + optional phone capture.
-- Run in Supabase SQL Editor or via supabase db push.

alter table public.audit_submissions
  add column if not exists phone text;

alter table public.audit_submissions
  add column if not exists audit_insights jsonb;

comment on column public.audit_submissions.audit_insights is
  'Gaps, score band, and narrative copy generated client-side for the free presence audit (versioned JSON).';
