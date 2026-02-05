"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { FileText, Download, Calendar, Shield, BookOpen, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

const laporanData = [
  { tahun: "2025", judul: "Laporan Tahunan PPID Polrestabes Makassar 2025", size: "4.2 MB", status: "Terbaru" },
  { tahun: "2024", judul: "Laporan Tahunan PPID Polrestabes Makassar 2024", size: "3.8 MB", status: "Arsip" },
  { tahun: "2023", judul: "Laporan Tahunan PPID Polrestabes Makassar 2023", size: "5.1 MB", status: "Arsip" },
  { tahun: "2022", judul: "Laporan Tahunan PPID Polrestabes Makassar 2022", size: "3.5 MB", status: "Arsip" },
];

export default function LaporanTahunan() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-900 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-500">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <nav className="flex justify-center md:justify-start gap-2 text-yellow-500 font-black text-[10px] uppercase tracking-widest mb-6">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/layanan-informasi">Layanan Informasi</Link>
            <span>/</span>
            <span className="text-white">Laporan Tahunan</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-white/10 border border-white/20 rounded-[32px] flex items-center justify-center shadow-2xl shrink-0 backdrop-blur-md">
                <BookOpen className="text-yellow-400" size={48} />
            </div>
            <div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-none">Laporan Tahunan</h1>
                <p className="text-blue-200 max-w-2xl font-medium text-lg italic">
                    Arsip dokumentasi capaian dan akuntabilitas pelayanan informasi publik Polrestabes Makassar.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- LIST LAPORAN (Kreativitas: Timeline Style) --- */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
            
            {laporanData.map((lapor, idx) => (
                <div key={idx} className="relative pl-12 md:pl-20 group">
                    {/* Garis Timeline */}
                    <div className="absolute left-6 md:left-10 top-0 bottom-0 w-1 bg-slate-100 group-last:bg-transparent"></div>
                    {/* Bulatan Timeline */}
                    <div className={`absolute left-0 w-12 md:w-20 flex justify-center top-0`}>
                        <div className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${idx === 0 ? "bg-yellow-500 scale-125" : "bg-slate-300 group-hover:bg-blue-900"}`}></div>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-12 shadow-sm hover:shadow-2xl hover:border-blue-900/20 transition-all duration-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex flex-col items-center justify-center shrink-0 border border-slate-100 group-hover:bg-blue-50 transition-colors">
                                <Calendar className="text-blue-900" size={24} />
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-2xl font-black text-slate-900">{lapor.tahun}</span>
                                    {idx === 0 && <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Terbaru</span>}
                                </div>
                                <h3 className="text-lg font-bold text-slate-500 leading-tight group-hover:text-blue-900 transition-colors">{lapor.judul}</h3>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-3 w-full md:w-auto">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{lapor.size} • PDF Document</span>
                            <button className="w-full md:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-900 transition-all shadow-xl active:scale-95">
                                <Download size={18} /> Unduh Laporan
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>

        {/* --- CREATIVE CALL TO ACTION --- */}
        <div className="max-w-4xl mx-auto mt-24">
            <div className="bg-slate-900 rounded-[48px] p-10 md:p-20 text-white flex flex-col items-center text-center gap-8 relative overflow-hidden shadow-2xl">
                <Shield className="absolute -right-10 -bottom-10 text-white/5" size={300} />
                <div className="w-20 h-20 bg-yellow-500 text-slate-900 rounded-3xl flex items-center justify-center shadow-2xl relative z-10">
                    <Search size={32} />
                </div>
                <div className="space-y-4 relative z-10">
                    <h2 className="text-3xl font-black tracking-tighter uppercase leading-none">Cari Laporan Spesifik?</h2>
                    <p className="text-slate-400 font-medium text-lg max-w-xl mx-auto">
                        Gunakan fitur pencarian atau akses dashboard statistik untuk melihat data rekapitulasi permohonan informasi secara lebih detail.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
                    <Link href="/layanan-informasi/statistik" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-yellow-500 transition-all uppercase text-xs tracking-widest">
                        Buka Dashboard Statistik
                    </Link>
                    <Link href="/layanan-informasi/permohonan" className="border-2 border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-xs tracking-widest flex items-center gap-2">
                        Bermohon Informasi <ArrowRight size={16}/>
                    </Link>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}