import { createClient } from '@supabase/supabase-js';

VITE_SUPABASE_URL=https://dajciyocihzulwngpqgn.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_f8pbcJaGy5opNfrTRI7bSw_M1HD_RqW

if(!supabaseurl || !supabasekey) {
  throw new Error('Missing Supabase URL or Key. Please check your environment variables.');
}       

export const supabase = createClient(supabaseurl, supabasekey);
