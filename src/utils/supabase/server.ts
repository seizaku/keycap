import { createServerClient } from "@supabase/ssr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { CookieOptions } from "@supabase/ssr";

export function createClient() {

  const cookieStore: ReadonlyRequestCookies = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options});
          } catch (error) {
            
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({name, value: '', ...options});
          } catch (error) {
            
          }
        }
      }
    }
  )
}