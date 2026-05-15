-- Contact form: marketing budget and services of interest.
-- Run in Supabase SQL Editor or via supabase db push.

alter table public.contact_submissions
  add column if not exists marketing_budget text;

alter table public.contact_submissions
  add column if not exists services_interested text[] default '{}';

comment on column public.contact_submissions.marketing_budget is
  'Self-reported monthly marketing budget range from the contact form.';

comment on column public.contact_submissions.services_interested is
  'One or more digital marketing services selected on the contact form.';
