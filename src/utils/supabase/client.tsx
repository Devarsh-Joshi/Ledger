import { createClient as createSupabaseClient } from '@supabase/supabase-js@2';
import { projectId, publicAnonKey } from './info.tsx';

let supabaseInstance: ReturnType<typeof createSupabaseClient> | null = null;

export function createClient() {
  if (!supabaseInstance) {
    const supabaseUrl = `https://${projectId}.supabase.co`;
    
    // Configure Supabase with sessionStorage for better security
    // This ensures sessions are cleared when the browser/app is closed
    supabaseInstance = createSupabaseClient(supabaseUrl, publicAnonKey, {
      auth: {
        storage: typeof window !== 'undefined' ? window.sessionStorage : undefined,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce', // More secure auth flow
      },
    });
  }
  return supabaseInstance;
}