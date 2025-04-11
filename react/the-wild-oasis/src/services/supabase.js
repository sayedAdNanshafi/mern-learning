import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://myzvblkflnjyfyrevqeo.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15enZibGtmbG5qeWZ5cmV2cWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjIxMjcsImV4cCI6MjA1ODAzODEyN30.D3Hdgie7ejKVAc5HFXc2-wzL5xzeDzHg4_3zJmehmTA"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
