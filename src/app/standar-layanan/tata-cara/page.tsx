"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { ClipboardList, UserCheck, Search, Send, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const langkahLangkah = [
  {
    no: "01",
    title: "Pemohon Mengisi Formulir",
    desc: "Warga mengisi formulir permohonan informasi baik secara online melalui portal ini atau datang langsung ke kantor PPID.",
    icon: <ClipboardList className="text-blue-600" size={32} />
  },
  {
    no: "02",
    title: "Verifikasi Identitas",
    desc: "Petugas akan memverifikasi kelengkapan data diri pemohon (KTP/SIM) dan tujuan permohonan informasi.",
    icon: <UserCheck className="text-emerald-600" size={32} />
  },
  {
    no: "03",
    title: "Pencarian Data",
    desc: "PPID akan melakukan koordinasi dengan satuan kerja terkait untuk mencari dan memvalidasi informasi yang diminta.",
    icon: <Search className="text-yellow-600" size={32} />
  },
  {
    no: "04",
    title: "Penyampaian Informasi",
    desc: "Informasi akan dikirimkan kepada pemohon dalam format digital (email) atau fisik sesuai dengan kesepakatan.",
    icon: <Send className="text-indigo-600" size={32} />
  }
];

export default function TataCaraPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-900 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-500">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <nav className="flex justify-center md:justify-start gap-2 text-blue-400 font-black text-[10px] uppercase tracking-widest mb-6">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="#">Standar Layanan</Link>
            <span>/</span>
            <span className="text-white">Tata Cara</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">
            Tata Cara <br/> <span className="text-yellow-400">Permohonan Informasi</span>
          </h1>
          <p className="text-blue-200 max-w-2xl font-medium text-lg leading-relaxed">
            Panduan lengkap mekanisme pengajuan informasi publik sesuai dengan standar operasional prosedur Polri.
          </p>
        </div>
      </div>

      {/* --- INFOGRAPHIC SECTION --- */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Garis Penghubung (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
          
          {langkahLangkah.map((step, idx) => (
            <div key={idx} className="group relative bg-white border border-slate-100 p-8 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="absolute -top-6 left-8 bg-blue-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shadow-xl group-hover:bg-yellow-500 group-hover:text-slate-900 transition-colors">
                {step.no}
              </div>
              <div className="mb-6 mt-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-none">{step.title}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- CREATIVE CALL TO ACTION --- */}
      <div className="container mx-auto px-4 pb-32">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[50px] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 shadow-2xl overflow-hidden relative">
            <ShieldCheck className="absolute -right-10 -bottom-10 text-white/5" size={300} />
            <div className="flex-1 space-y-6 text-center lg:text-left relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">
                    Sudah Paham <br/> <span className="text-yellow-500">Mekanismenya?</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium">
                    Jangan menunda lagi, ajukan permohonan informasi Anda sekarang juga melalui portal digital kami yang aman dan cepat.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link href="/layanan-informasi/permohonan" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-yellow-500 transition-all uppercase text-xs tracking-widest shadow-xl flex items-center gap-2">
                        Mulai Bermohon <ArrowRight size={16}/>
                    </Link>
                    <Link href="#" className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-xs tracking-widest flex items-center gap-2">
                        <Clock size={16}/> Cek Status
                    </Link>
                </div>
            </div>
            <div className="w-full lg:w-1/3 bg-blue-900/30 backdrop-blur-md border border-white/10 p-10 rounded-[40px] relative z-10">
                <h4 className="text-yellow-500 font-black uppercase text-xs tracking-widest mb-4">Penting Untuk Diketahui</h4>
                <ul className="space-y-4 text-white/80 text-sm font-bold">
                    <li className="flex gap-3 items-start">• Jangka waktu respon: 10 + 7 hari kerja.</li>
                    <li className="flex gap-3 items-start">• Biaya: Gratis (kecuali penggandaan).</li>
                    <li className="flex gap-3 items-start">• Media: Email, Hardcopy, atau CD/DVD.</li>
                </ul>
            </div>
        </div>
      </div>

      <FooterIP />
    </div>
  );
}