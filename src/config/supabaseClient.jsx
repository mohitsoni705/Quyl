// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://aolslaakbcujvbeabmvu.supabase.co" // Use the environment variable
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbHNsYWFrYmN1anZiZWFibXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2OTQ0OTgsImV4cCI6MjA1MDI3MDQ5OH0.4-R7sj4osZq37pAxGFp-NdV2I45mYrQKZWBu94iJMIU" // Use the environment variable
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;