import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dbgbjwjkonghgcbijsup.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxNzIwMDAsImV4cCI6MTk2MDc0ODAwMH0.RSYOQs8cJ0uLk9Mfk8vqKjLwJGxJc9JnwBJwOqLqJz8M";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey)
    : null;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);