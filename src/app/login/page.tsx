"use client";
import { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Login Gagal: " + error.message);
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="bg-slate-900 p-8 text-center relative">
          <Link href="/" className="absolute top-4 left-4 text-slate-400 hover:text-white transition">
            <ArrowLeft size={20} />
          </Link>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-4 shadow-lg">
            <ShieldCheck size={32} className="text-slate-900" />
          </div>
          <h1 className="text-2xl font-extrabold text-white uppercase tracking-tighter">Admin E-PPID</h1>
          <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-bold">Polrestabes Makassar</p>
        </div>
        
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Email Petugas</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="email" 
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none transition text-slate-900"
                placeholder="admin@polri.go.id"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
              <input 
                type="password" 
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-900 outline-none transition text-slate-900"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95 disabled:bg-slate-400"
          >
            {loading ? "Otorisasi..." : "Masuk ke Sistem"}
          </button>
        </form>
      </div>
    </div>
  );
}