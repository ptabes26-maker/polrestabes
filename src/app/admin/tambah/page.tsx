"use client";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Image as ImageIcon, UploadCloud } from "lucide-react";
import Link from "next/link";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function TambahBerita() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Giat");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert("Pilih foto dulu bosku!");
    setLoading(true);

    try {
      // 1. UPLOAD KE STORAGE
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error: uploadError } = await supabase.storage
        .from('news-images')
        .upload(fileName, imageFile);

      if (uploadError) throw new Error(`Gagal Upload Foto: ${uploadError.message}`);

      // 2. AMBIL URL
      const { data: urlData } = supabase.storage.from('news-images').getPublicUrl(fileName);
      const publicUrl = urlData.publicUrl;

      // 3. SIMPAN KE DB
      const { error: insertError } = await supabase.from("posts").insert([
        { title, category, image_url: publicUrl, content }
      ]);

      if (insertError) throw new Error(`Gagal Simpan Data: ${insertError.message}`);

      alert("Berhasil Terbit!");
      router.push("/admin");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto border p-10 rounded-[40px] shadow-xl">
        <h1 className="text-3xl font-black mb-8 text-slate-900">Upload Berita Baru</h1>
        <form onSubmit={handleSave} className="space-y-6">
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
          {preview && <img src={preview} className="w-full h-48 object-cover rounded-2xl mb-4" />}
          
          <input 
            type="text" placeholder="Judul Berita" 
            className="w-full p-4 border rounded-xl text-slate-900 font-bold"
            onChange={(e) => setTitle(e.target.value)} 
          />
          
          <select 
            className="w-full p-4 border rounded-xl text-slate-900 font-bold"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Giat">Kegiatan</option>
            <option value="Kriminal">Kriminal</option>
          </select>

          <textarea 
            rows={6} placeholder="Isi berita..." 
            className="w-full p-4 border rounded-xl text-slate-900"
            onChange={(e) => setContent(e.target.value)}
          ></textarea>

          <button 
            type="submit" disabled={loading}
            className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl"
          >
            {loading ? "Sabar ki, lagi mengupload..." : "PUBLIKASIKAN SEKARANG"}
          </button>
        </form>
      </div>
    </div>
  );
}