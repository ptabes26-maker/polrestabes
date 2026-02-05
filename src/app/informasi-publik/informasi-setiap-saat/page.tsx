"use client";
import { useState } from "react";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { ChevronDown, FileText, Download, FolderOpen, Search, Filter, BookOpen } from "lucide-react";
import Link from "next/link";

const daftarSetiapSaat = [
  { id: "A", title: "Daftar Informasi Publik (DIP)", desc: "Daftar lengkap seluruh informasi yang berada di bawah penguasaan Polrestabes Makassar." },
  { id: "B", title: "Informasi tentang Peraturan, Keputusan dan/atau Kebijakan", desc: "Kumpulan dokumen regulasi internal dan instruksi pimpinan yang berlaku setiap saat." },
  { id: "C", title: "Seluruh Dokumen Informasi Publik", desc: "Arsip dokumen yang telah dinyatakan terbuka untuk umum berdasarkan klasifikasi informasi." },
  { id: "D", title: "Perjanjian Kerja Sama dengan Pihak Ketiga", desc: "Dokumen kontrak atau MoU antara Polrestabes Makassar dengan instansi atau vendor mitra." },
  { id: "E", title: "Surat-Surat Masuk dan Keluar", desc: "Ringkasan administrasi surat menyurat yang tidak dikecualikan oleh undang-undang." },
  { id: "F", title: "Surat Keputusan (SK) Pimpinan", desc: "Daftar surat keputusan yang dikeluarkan oleh Kapolrestabes Makassar terkait operasional satuan." },
  { id: "G", title: "Daftar Penelitian dan Hasil Penelitian", desc: "Informasi terkait izin penelitian mahasiswa atau instansi dan ringkasan hasil kajian teknis." },
  { id: "H", title: "Daftar Induk Inventaris Barang Milik Negara (BMN)", desc: "Laporan ketersediaan aset, sarana prasarana, dan fasilitas penunjang tugas kepolisian." },
  { id: "I", title: "Prosedur Kerja atau SOP Satker", desc: "Standard Operating Procedure (SOP) setiap satuan kerja untuk menjamin layanan yang akuntabel." },
  { id: "J", title: "Laporan Statistik Kriminal & Kecelakaan", desc: "Data berkala mengenai angka kriminalitas dan laka lantas di wilayah hukum Makassar." },
];

export default function InformasiSetiapSaat() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = daftarSetiapSaat.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <HeaderIP />

      {/* --- HERO SECTION (Emerald Style) --- */}
      <div className="relative bg-[#064e3b] pt-36 pb-24 px-4 overflow-hidden border-b-8 border-emerald-500">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <nav className="flex justify-center md:justify-start gap-2 text-emerald-400 font-black text-[10px] uppercase tracking-widest mb-6">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/informasi-publik">Informasi Publik</Link>
            <span>/</span>
            <span className="text-white">Setiap Saat</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">Informasi Setiap Saat</h1>
                <p className="text-emerald-100 max-w-2xl font-medium text-lg">Dokumen informasi yang wajib disediakan dan tersedia setiap saat untuk pemohon informasi.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[32px] border border-white/20 hidden lg:block">
                <FolderOpen size={80} className="text-emerald-400 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* --- FILTER & SEARCH --- */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-4 flex flex-col md:flex-row gap-4 border border-emerald-100">
            <div className="flex-1 flex items-center gap-4 px-4 bg-slate-50 rounded-2xl">
                <Search className="text-slate-400" size={20} />
                <input 
                    type="text" 
                    placeholder="Cari judul dokumen..." 
                    className="bg-transparent border-none focus:outline-none w-full h-12 text-sm font-bold"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-2 px-6 bg-emerald-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest cursor-default">
                <Filter size={16} /> Filter
            </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredData.map((item) => (
            <div key={item.id} className="group border border-slate-100 rounded-3xl overflow-hidden hover:border-emerald-200 transition-all duration-300">
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between p-6 md:p-10 text-left transition-all ${openId === item.id ? "bg-emerald-900 text-white" : "bg-white text-slate-900 hover:bg-emerald-50/50"}`}
              >
                <div className="flex items-center gap-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-all ${openId === item.id ? "bg-emerald-500 text-white shadow-lg" : "bg-emerald-50 text-emerald-900"}`}>
                    {item.id}
                  </div>
                  <h3 className="text-lg md:text-xl font-black tracking-tight uppercase leading-tight">{item.title}</h3>
                </div>
                <ChevronDown className={`transition-transform duration-500 ${openId === item.id ? "rotate-180" : ""}`} />
              </button>

              {/* DETAIL CONTENT */}
              {openId === item.id && (
                <div className="p-10 bg-white border-t border-slate-50 animate-in slide-in-from-top duration-500">
                  <p className="text-slate-500 font-medium mb-10 leading-relaxed text-lg border-l-4 border-emerald-200 pl-6">{item.desc}</p>
                  
                  <div className="space-y-3">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 block">Arsip Tersedia:</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl group/file hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200">
                                <div className="flex items-center gap-4">
                                    <FileText className="text-emerald-600" size={24} />
                                    <div>
                                        <p className="font-black text-[11px] text-slate-900 uppercase">Dokumen_{item.id}_V.0{num}.pdf</p>
                                        <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Status: Terbuka • PDF</p>
                                    </div>
                                </div>
                                <button className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all">
                                    <Download size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {filteredData.length === 0 && (
            <div className="py-20 text-center bg-slate-50 rounded-[40px] border-2 border-dashed border-slate-200">
                <Search size={48} className="mx-auto text-slate-300 mb-4" />
                <p className="font-black text-slate-400 uppercase tracking-widest text-xs">Dokumen tidak ditemukan</p>
            </div>
          )}
        </div>
      </div>

      {/* --- INFO BOX --- */}
      <div className="container mx-auto px-4 pb-32">
        <div className="max-w-4xl mx-auto bg-emerald-50 rounded-[40px] p-10 md:p-20 flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-emerald-900 text-emerald-400 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl">
                <BookOpen size={48} />
            </div>
            <div>
                <h2 className="text-3xl font-black text-emerald-900 mb-4 tracking-tighter uppercase">Butuh Salinan Cetak?</h2>
                <p className="text-emerald-800/70 font-medium text-lg leading-relaxed mb-8">
                    Selain unduhan digital, warga Makassar juga dapat meminta salinan cetak langsung di loket PPID Polrestabes Makassar dengan biaya penggantian penggandaan sesuai regulasi.
                </p>
                <Link href="#" className="bg-emerald-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-800 transition-all uppercase text-xs tracking-widest shadow-xl shadow-emerald-900/20">
                    Lihat Prosedur Cetak
                </Link>
            </div>
        </div>
      </div>

      <FooterIP />
    </div>
  );
}