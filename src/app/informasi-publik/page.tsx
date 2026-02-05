"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP"; // Import Footer yang baru
import { FileText, Download, Search, Info, ArrowLeft } from "lucide-react";
import Link from "next/link";

const dataInformasi = [
  { id: 1, judul: "Laporan Realisasi Anggaran 2025", kategori: "Berkala", format: "PDF" },
  { id: 2, judul: "Rencana Strategis Polrestabes 2024-2029", kategori: "Berkala", format: "PDF" },
  { id: 3, judul: "Prosedur Pelayanan SIM & SKCK", kategori: "Setiap Saat", format: "PDF" },
  { id: 4, judul: "Daftar Aset dan Inventaris Kantor", kategori: "Setiap Saat", format: "PDF" },
  { id: 5, judul: "Informasi Peringatan Dini Cuaca Ekstrem", kategori: "Serta Merta", format: "DOCX" },
];

export default function InformasiPublikPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. HEADER KHUSUS PPID */}
      <HeaderIP />

      {/* 2. HERO SECTION (Disesuaikan Padding-nya supaya pas) */}
      <div className="relative bg-slate-900 pt-20 pb-24 px-4 overflow-hidden">
        {/* Tombol Kembali (Opsional, ditaruh di bawah navbar) */}
        <div className="container mx-auto mb-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-all"
            >
                <ArrowLeft size={18} />
                <span>Beranda Utama</span>
            </Link>
        </div>

        <div className="container relative z-10 mx-auto text-center">
          <span className="text-yellow-500 font-black text-xs tracking-[0.4em] uppercase mb-4 block animate-pulse">Transparency Portal</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">Informasi Publik</h1>
          
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[24px] flex items-center shadow-2xl">
            <Search className="ml-5 text-slate-400" size={24} />
            <input 
                type="text" 
                placeholder="Cari dokumen, laporan, atau regulasi..." 
                className="bg-transparent border-none focus:outline-none text-white px-5 w-full placeholder:text-slate-500 h-14 text-lg" 
            />
            <button className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 px-8 py-3.5 rounded-2xl font-black transition-all shadow-lg active:scale-95">
                Cari
            </button>
          </div>
        </div>
      </div>

      {/* 3. TABLE SECTION */}
      <div className="container mx-auto px-4 -mt-12 mb-32 relative z-20">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 uppercase text-xs font-black tracking-[0.2em]">
                    <th className="p-10">Nama Dokumen Informasi</th>
                    <th className="p-10">Klasifikasi</th>
                    <th className="p-10 text-center">Aksi</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                {dataInformasi.map((doc) => (
                    <tr key={doc.id} className="group hover:bg-slate-50 transition-colors duration-300">
                    <td className="p-10">
                        <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-all duration-500">
                            <FileText size={24} />
                        </div>
                        <span className="font-bold text-slate-900 text-xl tracking-tight leading-tight">{doc.judul}</span>
                        </div>
                    </td>
                    <td className="p-10">
                        <span className="px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200">
                        {doc.kategori}
                        </span>
                    </td>
                    <td className="p-10">
                        <div className="flex justify-center">
                        <button className="bg-slate-900 hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 transition-all shadow-xl active:scale-95 text-sm uppercase tracking-widest">
                            <Download size={18} /> Unduh {doc.format}
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
          </div>
          
          {/* HELP CARD */}
          <div className="m-8 bg-blue-900 rounded-[32px] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-blue-900/40 border border-white/10">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center border border-white/20 shadow-inner">
                <Info size={40} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tight mb-2">Informasi Belum Tersedia?</h3>
                <p className="text-blue-200 text-lg max-w-md">Silahkan ajukan permohonan informasi secara tertulis melalui form permohonan resmi kami.</p>
              </div>
            </div>
            <Link 
                href="#" 
                className="bg-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl shadow-yellow-500/20 active:scale-95 whitespace-nowrap uppercase tracking-widest text-sm"
            >
              Ajukan Permohonan
            </Link>
          </div>
        </div>
      </div>

      {/* 4. FOOTER */}
      <FooterIP />
    </div>
  );
}