import { createClient } from '@supabase/supabase-js'

// Ambil URL dan Key dari file .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Pengecekan biar tidak error konyol (Lupa setting .env)
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL atau Key belum disetting di .env.local bos! Cek file .env.local mu.')
}

// Export client biar bisa dipakai di halaman lain
export const supabase = createClient(supabaseUrl, supabaseKey)