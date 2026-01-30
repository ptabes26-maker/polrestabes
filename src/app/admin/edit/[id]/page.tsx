"use client";
import { useState, useEffect, use } from "react";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Image as ImageIcon, UploadCloud, RefreshCw } from "lucide-react";
import Link from "next/link";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function EditBerita({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const router = useRouter();

  // --- 1. PROTEKSI HALAMAN (SATPARAM) ---
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      // Kuncinya disini: Kalau tidak ada session (belum login), tendang!
      if (!session) {
        router.push("/login");
      } else {
        // Kalau dia admin asli, baru ambil datanya
        loadData();
      }
    };

    const loadData = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setTitle(data.title);
        setCategory(data.category);
        setContent(data.content);
        setImageUrl(data.image_url);
        setPreview(data.image_url);
      }
      setLoading(false);
    };

    checkUser();
  }, [id, router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);

    try {
      let finalImageUrl = image_url;

      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('news-images')
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage.from('news-images').getPublicUrl(fileName);
        finalImageUrl = urlData.publicUrl;
      }

      const { error: updateError } = await supabase
        .from("posts")
        .update({
          title,
          category,
          content,
          image_url: finalImageUrl
        })
        .eq("id", id);

      if (updateError) throw updateError;

      alert("Berita Berhasil Diperbarui!");
      router.push("/admin");
    } catch (err: any) {
      alert("Gagal Update: " + err.message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div className="p-20 text-center font-bold text-slate-900">Mengecek Otoritas Admin...</div>;

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/admin" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 font-bold transition">
          <ArrowLeft size={20} /> Batal Edit
        </Link>

        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-slate-200">
          <h1 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter">EDIT INFORMASI PETUGAS</h1>
          
          <form onSubmit={handleUpdate} className="space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-700 uppercase flex items-center gap-2">Foto Berita</label>
              <input type="file" accept="image/*" id="edit-img" className="hidden" onChange={handleImageChange} />
              <label htmlFor="edit-img" className="w-full h-64 border-4 border-dashed border-slate-200 rounded-3xl flex items-center justify-center cursor-pointer overflow-hidden bg-slate-50">
                {preview ? <img src={preview} className="w-full h-full object-cover" /> : <ImageIcon size={48} className="text-slate-300" />}
              </label>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-slate-700 uppercase">Judul Berita</label>
              <input 
                type="text" required value={title}
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 text-slate-900 font-bold text-lg outline-none focus:border-blue-900 transition"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-slate-700 uppercase">Kategori</label>
              <select 
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 bg-white text-slate-900 font-bold outline-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Giat">Kegiatan</option>
                <option value="Kriminal">Kriminal</option>
                <option value="Layanan">Layanan</option>
              </select>
            </div>

            <div className="space-y-3 text-slate-900">
              <label className="text-xs font-black text-slate-700 uppercase">Konten Narasi</label>
              <textarea 
                rows={10} required value={content}
                className="w-full px-6 py-4 rounded-2xl border border-slate-200 font-medium outline-none focus:border-blue-900 transition"
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>

            <button 
              type="submit" disabled={updating}
              className="w-full bg-slate-900 text-white font-black py-5 rounded-3xl shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-all disabled:bg-slate-400"
            >
              {updating ? <RefreshCw className="animate-spin" /> : <Save />}
              {updating ? "Menyimpan..." : "SIMPAN PERUBAHAN"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}