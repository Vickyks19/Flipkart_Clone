import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://royhwvaeovlwafhjrsmn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJveWh3dmFlb3Zsd2FmaGpyc21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyODkzODIsImV4cCI6MTk4OTg2NTM4Mn0.Y7fBhB_P30Os3e0n3FboAM05vgUCrUmb69oEdQSBybU"
);

export default supabase;
