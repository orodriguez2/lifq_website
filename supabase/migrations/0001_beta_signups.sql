-- Beta signups table — run in Supabase SQL editor against the lifq project
-- Supabase project: dfnemjldftwzwjturglh.supabase.co

create table public.beta_signups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  age_range text check (age_range in ('25-29','30-39','40-49','50-59','60+')),
  household_type text check (household_type in ('single','married_partnered','married_with_children','single_parent')),
  policy_count text check (policy_count in ('1-2','3-5','6+')),
  policy_types text[] not null default '{}',
  biggest_frustration text,
  status text not null default 'pending' check (status in ('pending','invited','accepted','declined')),
  invited_at timestamptz,
  notes text,
  unique (email)
);

create index beta_signups_status_idx on public.beta_signups (status);
create index beta_signups_created_at_idx on public.beta_signups (created_at desc);

-- RLS: no client access; only service role writes via API route
alter table public.beta_signups enable row level security;
