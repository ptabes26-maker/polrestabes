"use client";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import Link from "next/link";
import { ArrowRight, Search, FileText, Users, Clock } from "lucide-react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchBerita() {
      const { data } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(3);
      if (data) setPosts(data);
    }
    fetchBerita();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* --- HERO SECTION (DENGAN GAMBAR POLRESTABES ASLI) --- */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 text-white pt-20 overflow-hidden px-4">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* INI YANG DIGANTI: Path ke gambar lokal */}
          <img 
            src="/images/polrestabes.webp" 
            className="w-full h-full object-cover opacity-40" // Opacity diatur biar tidak terlalu gelap/terang
            alt="Kantor Polrestabes Makassar"
          />
          {/* Gradient biar teks makin jelas terbaca */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto text-center md:text-left">
          <div className="inline-flex py-1.5 px-4 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-[10px] font-black mb-6 uppercase tracking-widest mx-auto md:mx-0 backdrop-blur-sm">
            Portal Informasi Publik Resmi
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] tracking-tighter drop-shadow-lg">
            Pelayanan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
              Presisi & Transparan
            </span>
          </h1>
          
          <p className="text-slate-300 max-w-2xl text-base md:text-xl font-medium leading-relaxed mb-10 md:mb-12 drop-shadow-md">
            Komitmen Polrestabes Makassar dalam mewujudkan keterbukaan informasi publik yang akuntabel bagi seluruh masyarakat Kota Daeng.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-black shadow-xl shadow-yellow-500/20 active:scale-95 transition-all text-sm md:text-base">
                Ajukan Permohonan Info
             </button>
             <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-1.5 rounded-2xl flex items-center flex-1 max-w-md shadow-inner">
                <Search className="ml-4 text-slate-400" size={20} />
                <input type="text" placeholder="Cari laporan, dokumen, dll..." className="bg-transparent border-none focus:outline-none text-white px-4 w-full placeholder:text-slate-400" />
             </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="relative z-20 -mt-10 md:-mt-16 container mx-auto px-4">
        <div className="bg-white rounded-[24px] md:rounded-[40px] shadow-2xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border border-slate-100">
            <div className="flex flex-col items-center text-center group">
               <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all">
                  <FileText size={28} />
               </div>
               <h3 className="text-3xl md:text-5xl font-black text-slate-900">15.420+</h3>
               <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">Dokumen Publik</p>
            </div>
            <div className="flex flex-col items-center text-center md:border-x border-slate-100 px-8 group">
               <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-50 text-yellow-900 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all">
                  <Users size={28} />
               </div>
               <h3 className="text-3xl md:text-5xl font-black text-slate-900">128K+</h3>
               <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">Pengunjung Portal</p>
            </div>
            <div className="flex flex-col items-center text-center group">
               <div className="w-12 h-12 md:w-16 md:h-16 bg-green-50 text-green-900 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Clock size={28} />
               </div>
               <h3 className="text-3xl md:text-5xl font-black text-slate-900">24 Jam</h3>
               <p className="text-slate-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">Layanan Online</p>
            </div>
        </div>
      </section>

      {/* --- BERITA SECTION --- */}
      <section className="py-20 md:py-32 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6 text-center md:text-left">
            <div>
              <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3 block">Kabar Presisi</span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900">Berita Terkini</h2>
            </div>
            <Link href="/berita" className="group flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold text-slate-900 hover:bg-slate-50 transition text-sm shadow-sm">
              Lihat Semua Berita <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {posts.map((post) => (
              <div key={post.id} className="group bg-white rounded-[24px] md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-slate-100 flex flex-col h-full">
                <div className="h-48 md:h-64 overflow-hidden relative">
                  <img src={post.image_url} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={post.title} />
                  <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 bg-slate-900/80 text-white text-[9px] font-black rounded-full uppercase tracking-widest backdrop-blur-md">
                       {post.category}
                     </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold mb-3 uppercase tracking-wider">
                       <Clock size={12} className="text-yellow-500" />
                       {new Date(post.created_at).toLocaleDateString('id-ID', {
                          day: 'numeric', month: 'long', year: 'numeric'
                       })}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight group-hover:text-blue-600 transition tracking-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm line-clamp-3 mb-6 md:mb-8 leading-relaxed">
                    {post.content}
                  </p>
                  <Link href={`/berita/${post.id}`} className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black text-slate-900 group/link border-b-2 border-yellow-400 pb-1 w-fit hover:border-blue-600 transition-all mt-auto">
                    BACA SELENGKAPNYA <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </section>
    </div>
  );
} 