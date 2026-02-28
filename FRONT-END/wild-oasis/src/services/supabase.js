import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://tdduzifsjohhjvqbqmfr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZHV6aWZzam9oaGp2cWJxbWZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNzI1NTUsImV4cCI6MjA3OTY0ODU1NX0.LQW7mGne8gCB1qrIl6tgKD8t_K_4oSPb3GKwuLdrEbU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
