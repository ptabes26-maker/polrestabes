"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { FileText, Download, Gavel, Scale, Library, Search, ChevronRight } from "lucide-react";
import Link from "next/link";

const regulasiData = [
  {
    kategori: "Undang-Undang",
    items: [
      { tahun: "2008", judul: "UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik", desc: "Payung hukum utama yang menjamin hak warga negara untuk mendapatkan informasi." },
      { tahun: "2009", judul: "UU No. 25 Tahun 2009 tentang Pelayanan Publik", desc: "Mengatur standar pelayanan prima dari instansi pemerintah kepada masyarakat." },
    ]
  },
  {
    kategori: "Peraturan Komisi Informasi",
    items: [
      { tahun: "2021", judul: "PERKI No. 1 Tahun 2021 tentang Standar Layanan Informasi Publik", desc: "Pedoman teknis bagi Badan Publik dalam menyelenggarakan layanan informasi." },
      { tahun: "2010", judul: "PERKI No. 1 Tahun 2010 tentang Standar Layanan Informasi Publik", desc: "Regulasi awal mengenai mekanisme permohonan dan sengketa informasi." },
    ]
  },
  {
    kategori: "Peraturan Kapolri (PERKAP)",
    items: [
      { tahun: "2023", judul: "PERKAP No. 1 Tahun 2023 tentang PPID di Lingkungan Polri", desc: "Aturan terbaru mengenai tata kelola informasi publik khusus di instansi Kepolisian." },
      { tahun: "2017", judul: "PERKAP No. 20 Tahun 2017 tentang Pelayanan Informasi Publik", desc: "Regulasi internal Polri terkait prosedur dokumentasi dan pelayanan data." },
    ]
  }
];

export default function UUDanPeraturan() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderIP />

      {/* --- HERO SECTION (Legal Authority Style) --- */}
      <div className="relative bg-slate-900 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-600">
        <div className="absolute inset-0 opacity-10 pointer-events-none grayscale">
            <img src="/images/polrestabes.webp" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <nav className="flex justify-center md:justify-start gap-2 text-yellow-500 font-black text-[10px] uppercase tracking-widest mb-6">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/informasi-publik">Informasi Publik</Link>
            <span>/</span>
            <span className="text-white">Regulasi</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-yellow-500 text-slate-900 rounded-[32px] flex items-center justify-center shadow-2xl shrink-0">
                <Gavel size={48} />
            </div>
            <div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-none">Regulasi & Dasar Hukum</h1>
                <p className="text-slate-400 max-w-2xl font-medium text-lg italic">Kumpulan payung hukum yang menjamin keterbukaan informasi di lingkungan Polrestabes Makassar.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- REGULATION LIST --- */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto space-y-24">
          {regulasiData.map((cat, idx) => (
            <section key={idx} className="space-y-10">
              <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-6">
                <Scale className="text-yellow-600" size={32} />
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">{cat.kategori}</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="group flex flex-col md:flex-row items-start md:items-center gap-6 p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-2xl hover:border-yellow-200 transition-all duration-500">
                    <div className="w-20 h-20 bg-slate-50 rounded-2xl flex flex-col items-center justify-center shrink-0 border border-slate-100 group-hover:bg-yellow-50 transition-colors">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Tahun</span>
                        <span className="text-xl font-black text-slate-900">{item.tahun}</span>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-yellow-600 transition-colors">{item.judul}</h3>
                        <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-xl">
                           <Download size={16} /> Unduh PDF
                        </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* --- KREATIVITAS: LEGAL HELP BOX --- */}
        <div className="max-w-5xl mx-auto mt-32 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[50px] p-10 md:p-20 flex flex-col items-center text-center gap-8">
            <Library size={64} className="text-slate-300" />
            <div className="space-y-4">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Butuh Regulasi Lainnya?</h2>
                <p className="text-slate-500 font-medium text-lg max-w-xl mx-auto">
                    Jika peraturan yang Anda cari tidak tersedia dalam daftar di atas, silakan akses Jaringan Dokumentasi dan Informasi Hukum (JDIH) Polri.
                </p>
            </div>
            <a href="https://jdih.polri.go.id" target="_blank" className="inline-flex items-center gap-3 bg-white border-2 border-slate-900 text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all uppercase text-xs tracking-widest">
                Kunjungi JDIH POLRI <ChevronRight size={18} />
            </a>
        </div>
      </div>

  
    </div>
  );
}