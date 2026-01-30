"use client";
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { Plus, Trash2, Edit2, LogOut, LayoutDashboard, FileText } from "lucide-react";
import Link from "next/link";

// --- CLIENT SETUP LANGSUNG ---
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function AdminDashboard() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/login");
      } else {
        fetchPosts();
      }
    };
    checkUser();
  }, [router]);

  const fetchPosts = async () => {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (data) setPosts(data);
    setLoading(false);
  };

  const deletePost = async (id: number) => {
    if (confirm("Yakin mau hapus berita ini?")) {
      const { error } = await supabase.from("posts").delete().eq("id", id);
      if (!error) fetchPosts();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) return <div className="p-20 text-center font-bold">Memuat Data...</div>;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white hidden md:block p-6">
        <div className="flex items-center gap-2 font-bold text-xl mb-10 text-yellow-500">
           <LayoutDashboard /> E-PPID Admin
        </div>
        <nav className="space-y-4">
           <Link href="/admin" className="flex items-center gap-3 bg-white/10 p-3 rounded-lg text-white">
             <FileText size={18} /> Kelola Berita
           </Link>
           <button onClick={handleLogout} className="flex items-center gap-3 text-red-400 p-3 w-full hover:bg-red-500/10 rounded-lg mt-20 transition">
             <LogOut size={18} /> Keluar
           </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Manajemen Berita</h1>
          <Link href="/admin/tambah" className="bg-blue-900 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-800 shadow-lg transition transform active:scale-95">
            <Plus size={20} /> Tambah Berita
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-100 border-b border-slate-200">
              <tr>
                <th className="p-4 font-bold text-slate-600 uppercase text-xs">Judul Berita</th>
                <th className="p-4 font-bold text-slate-600 uppercase text-xs">Kategori</th>
                <th className="p-4 font-bold text-slate-600 text-center uppercase text-xs">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50 transition">
                  <td className="p-4 font-medium text-slate-800">{post.title}</td>
                  <td className="p-4">
                    <span className="bg-slate-200 px-2 py-1 rounded text-xs font-bold uppercase">{post.category}</span>
                  </td>
                  
                  {/* AKSI EDIT & HAPUS */}
                  <td className="p-4 flex justify-center gap-4">
                    <Link 
                      href={`/admin/edit/${post.id}`} 
                      className="text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all active:scale-90"
                    >
                      <Edit2 size={20} />
                    </Link>

                    <button 
                      onClick={() => deletePost(post.id)} 
                      className="text-red-500 hover:bg-red-50 p-3 rounded-xl transition-all active:scale-90"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}