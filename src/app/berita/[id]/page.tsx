import { createClient } from '@supabase/supabase-js';
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getPostDetail(id: string) {
  const { data } = await supabase.from('posts').select('*').eq('id', id).single();
  return data;
}

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPostDetail(id);

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* HEADER GAMBAR */}
      <div className="relative h-[50vh] w-full bg-slate-900">
        <img src={post.image_url} alt="" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        <div className="absolute top-24 left-10 z-20">
            <Link href="/" className="flex items-center gap-2 bg-white text-slate-900 px-5 py-2 rounded-full shadow-xl font-bold">
                <ArrowLeft size={18} /> Kembali
            </Link>
        </div>
        <div className="absolute bottom-10 left-10 right-10">
            <span className="bg-yellow-500 text-slate-900 px-3 py-1 rounded text-xs font-bold mb-4 inline-block">{post.category}</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">{post.title}</h1>
        </div>
      </div>

      {/* ISI BERITA (TEXT SAJA, BUKAN INPUT) */}
      <div className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="bg-white rounded-[40px] shadow-2xl p-10 md:p-16 max-w-4xl mx-auto border border-slate-100">
            <article className="prose prose-lg max-w-none text-slate-800 leading-relaxed text-xl">
                {(post.content || "").split('\n').map((paragraph: string, index: number) => (
                    <p key={index} className="mb-6">{paragraph}</p>
                ))}
            </article>
            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
                <div className="text-slate-400 text-sm">Update: {new Date(post.created_at).toLocaleDateString('id-ID')}</div>
                <button className="flex items-center gap-2 bg-yellow-400 px-6 py-2 rounded-xl font-bold"><Share2 size={18}/> Bagikan</button>
            </div>
        </div>
      </div>
    </div>
  );
}