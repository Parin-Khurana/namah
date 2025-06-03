import { createClient } from "@supabase/supabase-js"

// Create a singleton instance for the Supabase client
let supabaseInstance: ReturnType<typeof createClient> | null = null

export function getSupabaseClient() {
  if (supabaseInstance) return supabaseInstance

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL or Anon Key is missing. Please check your environment variables.")

    // For development only - provide a mock client that won't crash the app
    if (process.env.NODE_ENV === "development") {
      return {
        from: () => ({
          insert: async () => ({ error: new Error("Supabase not configured"), data: null }),
          select: async () => ({ error: new Error("Supabase not configured"), data: null }),
          update: async () => ({ error: new Error("Supabase not configured"), data: null }),
          delete: async () => ({ error: new Error("Supabase not configured"), data: null }),
        }),
        storage: {
          from: () => ({
            upload: async () => ({ error: new Error("Supabase not configured"), data: null }),
          }),
        },
        auth: {
          signIn: async () => ({ error: new Error("Supabase not configured"), data: null }),
          signOut: async () => ({ error: new Error("Supabase not configured"), data: null }),
        },
      } as any
    }

    throw new Error("Supabase URL or Anon Key is missing")
  }

  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseInstance
}

// For backward compatibility
export const supabase = typeof window !== "undefined" ? getSupabaseClient() : null
