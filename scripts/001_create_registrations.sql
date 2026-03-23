-- Create registrations table for Demo Day signups
CREATE TABLE IF NOT EXISTS public.registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for public signup form)
CREATE POLICY "Allow anonymous inserts" ON public.registrations
  FOR INSERT
  WITH CHECK (true);

-- Only allow service role to read/update/delete (for admin access)
CREATE POLICY "Service role full access" ON public.registrations
  FOR ALL
  USING (auth.role() = 'service_role');
