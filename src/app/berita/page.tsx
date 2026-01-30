"use client";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function DaftarBerita() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBerita();
  }, []);

  async function fetchBerita() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setPosts(data);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER SECTION */}
      <div className="relative bg-slate-900 pt-32 pb-20 px-4 overflow-hidden">
        {/* Tombol Kembali (Melayang) */}
        <div className="absolute top-8 left-4 md:left-10 z-50">
            <Link 
              href="/" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-slate-900 px-5 py-2.5 rounded-full shadow-xl font-bold transition-all border border-white/20 backdrop-blur-md"
            >
                <ArrowLeft size={20} />
                <span>Beranda</span>
            </Link>
        </div>

        <div className="container relative z-10 mx-auto text-center">
          <span className="text-yellow-500 font-black text-xs tracking-[0.4em] uppercase mb-4 block">Arsip Informasi</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Semua Berita</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Kumpulan rilis berita dan kegiatan resmi Polrestabes Makassar.</p>
        </div>
      </div>

      {/* BERITA GRID */}
      <div className="container mx-auto px-4 -mt-10 mb-20">
        {loading ? (
          <div className="bg-white rounded-[40px] p-20 text-center shadow-xl">
             <div className="animate-spin w-10 h-10 border-4 border-blue-900 border-t-transparent rounded-full mx-auto mb-4"></div>
             <p className="font-bold text-slate-500">Memuat kabar berita...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post) => (
              <div key={post.id} className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 flex flex-col h-full">
                <div className="h-56 md:h-64 overflow-hidden relative">
                  <img src={post.image_url} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={post.title} />
                  <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 bg-slate-900/80 text-white text-[9px] font-black rounded-full uppercase tracking-widest backdrop-blur-md">
                       {post.category}
                     </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold mb-4 uppercase tracking-wider">
                       <Calendar size={12} className="text-yellow-500" />
                       {new Date(post.created_at).toLocaleDateString('id-ID', {
                          day: 'numeric', month: 'long', year: 'numeric'
                       })}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-3 mb-8 leading-relaxed">
                    {post.content}
                  </p>
                  <Link href={`/berita/${post.id}`} className="inline-flex items-center gap-2 text-xs font-black text-slate-900 group/link border-b-2 border-yellow-400 pb-1 w-fit hover:border-blue-600 transition-all mt-auto">
                    SELENGKAPNYA <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {posts.length === 0 && !loading && (
          <div className="bg-white rounded-[40px] p-20 text-center shadow-xl border border-slate-100">
            <p className="text-slate-400 font-bold">Belum ada berita yang diterbitkan.</p>
          </div>
        )}
      </div>
    </div>
  );
}