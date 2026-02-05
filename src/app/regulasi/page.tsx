"use client";
import { useState } from "react";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { Gavel, Scale, Book, FileText, Download, Search, Landmark, ShieldCheck } from "lucide-react";
import Link from "next/link";

const allRegulasi = [
  { id: 1, cat: "Undang-Undang", title: "UU No. 14 Tahun 2008", desc: "Keterbukaan Informasi Publik", file: "UU_14_2008.pdf" },
  { id: 2, cat: "Undang-Undang", title: "UU No. 25 Tahun 2009", desc: "Pelayanan Publik", file: "UU_25_2009.pdf" },
  { id: 3, cat: "PERKI", title: "PERKI No. 1 Tahun 2021", desc: "Standar Layanan Informasi Publik", file: "PERKI_01_2021.pdf" },
  { id: 4, cat: "PERKAP", title: "PERKAP No. 6 Tahun 2011", desc: "Tata Cara Pelayanan Informasi Publik di Lingkungan Polri", file: "PERKAP_06_2011.pdf" },
  { id: 5, cat: "PERKAP", title: "PERKAP No. 1 Tahun 2023", desc: "Penyelenggaraan PPID di Lingkungan Polri", file: "PERKAP_01_2023.pdf" },
  { id: 6, cat: "Peraturan Pemerintah", title: "PP No. 61 Tahun 2010", desc: "Pelaksanaan UU Keterbukaan Informasi Publik", file: "PP_61_2010.pdf" },
];

export default function RegulasiHubPage() {
  const [filter, setFilter] = useState("Semua");

  const filteredData = filter === "Semua" 
    ? allRegulasi 
    : allRegulasi.filter(item => item.cat === filter);

  const categories = ["Semua", "Undang-Undang", "PERKI", "PERKAP", "Peraturan Pemerintah"];

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION (Professional Law Theme) --- */}
      <div className="relative bg-[#1e293b] pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-600">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Landmark className="absolute -right-20 -bottom-20 text-white" size={400} />
        </div>
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Pusat <br/> <span className="text-yellow-500">Regulasi & Hukum</span>
          </h1>
          <p className="text-slate-400 max-w-2xl font-medium text-lg italic">
            Kumpulan dasar hukum dan peraturan perundang-undangan yang menjadi landasan operasional PPID Polrestabes Makassar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
            
            {/* --- FILTER TABS --- */}
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${filter === cat ? "bg-blue-900 text-white shadow-xl scale-105" : "bg-white text-slate-400 hover:bg-slate-100 border border-slate-200"}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* --- GRID REGULASI --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map((item) => (
                    <div key={item.id} className="group bg-white rounded-[40px] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all">
                            <Gavel size={24} />
                        </div>
                        <div className="flex-grow space-y-3">
                            <span className="text-[10px] font-black text-yellow-600 uppercase tracking-widest">{item.cat}</span>
                            <h3 className="text-xl font-black text-slate-900 leading-tight uppercase">{item.title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                        </div>
                        <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between">
                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Format: PDF</span>
                            <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-lg">
                                <Download size={14} /> Unduh
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- CREATIVE BANNER: JDIH --- */}
            <div className="bg-blue-900 rounded-[50px] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="flex-1 space-y-6 text-center lg:text-left relative z-10">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                        <Scale className="text-yellow-400" size={32} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">Cari Produk Hukum Lainnya?</h2>
                    <p className="text-blue-100 text-lg font-medium max-w-xl">
                        Akses database lengkap Jaringan Dokumentasi dan Informasi Hukum (JDIH) Kepolisian Negara Republik Indonesia.
                    </p>
                    <a href="https://jdih.polri.go.id" target="_blank" className="inline-flex items-center gap-3 bg-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-white transition-all uppercase text-xs tracking-widest shadow-xl">
                        Kunjungi JDIH POLRI
                    </a>
                </div>
                <div className="w-full lg:w-1/3 p-8 bg-white/5 backdrop-blur-md rounded-[40px] border border-white/10 relative z-10">
                    <h4 className="text-yellow-400 font-black uppercase text-xs tracking-[0.2em] mb-6">Informasi Terbaru</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all"><FileText size={18}/></div>
                            <p className="text-xs font-bold leading-tight">Draf Peraturan Kapolrestabes 2026</p>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-slate-900 transition-all"><FileText size={18}/></div>
                            <p className="text-xs font-bold leading-tight">Pedoman Klasifikasi Informasi 2025</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <FooterIP />
    </div>
  );
}