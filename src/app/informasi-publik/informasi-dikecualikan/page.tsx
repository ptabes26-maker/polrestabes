"use client";
import { useState } from "react";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { ChevronDown, Lock, ShieldOff, EyeOff, Key, Info, FileLock2, AlertCircle } from "lucide-react";
import Link from "next/link";

const daftarDikecualikan = [
  { id: "A", title: "Rahasia Proses Penyelidikan & Penyidikan", desc: "Informasi terkait taktis dan teknis penanganan perkara yang masih berjalan agar tidak menghambat proses hukum." },
  { id: "B", title: "Teknik dan Taktik Intelijen Kepolisian", desc: "Informasi mengenai cara kerja intelijen dalam mendeteksi ancaman keamanan di wilayah Makassar." },
  { id: "C", title: "Identitas Pelapor, Saksi, dan Informan", desc: "Data pribadi yang wajib dilindungi untuk menjamin keselamatan pihak-hal yang membantu tugas kepolisian." },
  { id: "D", title: "Sistem Keamanan Infrastruktur Vital Polri", desc: "Detail konfigurasi jaringan teknologi informasi dan pengamanan fisik markas komando." },
  { id: "E", title: "Informasi Pribadi Personel Polri", desc: "Data rekam medis, riwayat hidup, dan informasi keluarga personel yang bersifat privat." },
  { id: "F", title: "Informasi yang Dapat Mengganggu Ketertiban Umum", desc: "Data yang jika dibuka dapat memicu konflik horizontal atau keresahan massa yang luas." },
];

export default function InformasiDikecualikan() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION (Dark Stealth Style) --- */}
      <div className="relative bg-slate-900 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-indigo-600">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <nav className="flex justify-center md:justify-start gap-2 text-slate-500 font-black text-[10px] uppercase tracking-widest mb-6">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/informasi-publik">Informasi Publik</Link>
            <span>/</span>
            <span className="text-white">Dikecualikan</span>
          </nav>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 bg-indigo-600/20 border border-indigo-500/30 rounded-[32px] flex items-center justify-center backdrop-blur-md">
                <Lock className="text-indigo-500" size={48} />
            </div>
            <div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase">Informasi Dikecualikan</h1>
                <p className="text-slate-400 max-w-2xl font-medium text-lg leading-relaxed">
                    Informasi yang tidak dapat diakses oleh publik berdasarkan UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
                </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-3xl mb-12 flex items-start gap-4">
            <AlertCircle className="text-amber-600 flex-shrink-0" size={24} />
            <p className="text-amber-900 text-sm font-bold leading-relaxed">
              PENTING: Informasi dalam kategori ini bersifat tertutup. Pengajuan akses hanya dapat dilakukan melalui mekanisme sengketa informasi jika terdapat urgensi hukum yang sah.
            </p>
          </div>

          {daftarDikecualikan.map((item) => (
            <div key={item.id} className="group bg-white border border-slate-200 rounded-[32px] overflow-hidden hover:border-indigo-300 transition-all duration-500 shadow-sm">
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between p-8 text-left transition-all ${openId === item.id ? "bg-slate-800 text-white" : "bg-white text-slate-900 hover:bg-slate-50"}`}
              >
                <div className="flex items-center gap-8">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${openId === item.id ? "bg-indigo-600" : "bg-slate-100 text-slate-400"}`}>
                    <ShieldOff size={24} />
                  </div>
                  <h3 className="text-lg md:text-xl font-black tracking-tight uppercase leading-none">{item.title}</h3>
                </div>
                <ChevronDown className={`transition-transform duration-500 ${openId === item.id ? "rotate-180" : ""}`} />
              </button>

              {/* DETAIL CONTENT */}
              {openId === item.id && (
                <div className="p-10 bg-slate-50/50 animate-in slide-in-from-top duration-500">
                  <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Key size={16} className="text-indigo-600" />
                            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Dasar Pengecualian: Pasal 17 UU KIP</span>
                        </div>
                        <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">{item.desc}</p>
                        <div className="inline-flex items-center gap-2 py-2 px-4 bg-slate-200 rounded-full text-[10px] font-black text-slate-500 uppercase">
                           Status: Rahasia Negara / Privat
                        </div>
                    </div>
                    <div className="w-full md:w-64 text-center p-8 bg-white rounded-3xl border border-slate-200 shadow-inner">
                        <EyeOff className="mx-auto text-slate-200 mb-4" size={48} />
                        <p className="text-[10px] font-bold text-slate-400 uppercase leading-relaxed">Pratinjau Dokumen Tidak Tersedia Untuk Publik</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- CREATIVE CALL TO ACTION --- */}
      <div className="container mx-auto px-4 pb-32">
        <div className="max-w-4xl mx-auto bg-indigo-900 rounded-[48px] p-10 md:p-16 text-white text-center relative overflow-hidden shadow-2xl shadow-indigo-900/40">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <FileLock2 size={300} className="absolute -left-10 -bottom-10" />
            </div>
            <h2 className="text-3xl font-black mb-6 tracking-tighter uppercase">Butuh Klarifikasi Lebih Lanjut?</h2>
            <p className="text-indigo-200 font-medium text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                Jika Anda merasa informasi yang dikecualikan seharusnya bersifat terbuka, Anda dapat mengajukan keberatan secara resmi kepada atasan PPID Polrestabes Makassar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Link href="#" className="bg-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-white transition-all uppercase text-xs tracking-widest shadow-xl shadow-yellow-500/20">
                    Ajukan Keberatan
                </Link>
                <Link href="/informasi-publik" className="bg-white/10 border border-white/20 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all uppercase text-xs tracking-widest">
                    Lihat Informasi Lain
                </Link>
            </div>
        </div>
      </div>

      <FooterIP />
    </div>
  );
}