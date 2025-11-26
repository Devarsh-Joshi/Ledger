import { createClient as createSupabaseClient } from '@supabase/supabase-js@2';
import { projectId, publicAnonKey } from './info.tsx';

let supabaseInstance: ReturnType<typeof createSupabaseClient> | null = null;

export function createClient() {
  if (!supabaseInstance) {
    const supabaseUrl = `https://${projectId}.supabase.co`;
    
    // Configure Supabase with localStorage for persistent sessions
    // On mobile devices, localStorage is cleared on app uninstall/reinstall
    // Combined with inactivity timeout for additional security
    supabaseInstance = createSupabaseClient(supabaseUrl, publicAnonKey, {
      auth: {
        storage: typeof window !== 'undefined' ? window.localStorage : undefined,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce', // More secure auth flow
      },
    });
  }
  return supabaseInstance;
}
