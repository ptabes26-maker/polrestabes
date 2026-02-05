    "use client";
import { useState } from "react";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { ChevronDown, AlertTriangle, Flame, ShieldAlert, Users, Info, FileWarning } from "lucide-react";
import Link from "next/link";

const daftarSertaMerta = [
  { id: "A", title: "Informasi terkait Bencana Alam", desc: "Peringatan dini dan panduan keselamatan terkait banjir, gempa bumi, atau cuaca ekstrem di wilayah Makassar.", icon: <AlertTriangle className="text-orange-500" /> },
  { id: "B", title: "Informasi Peristiwa yang meresahkan Masyarakat", desc: "Klarifikasi dan informasi resmi terkait isu kriminalitas menonjol atau kejadian yang mengganggu ketenangan publik.", icon: <FileWarning className="text-red-600" /> },
  { id: "C", title: "Informasi mengenai Keamanan dan Ketertiban Masyarakat", desc: "Himbauan Kamtibmas dan rilis resmi situasi keamanan terkini di titik-titik vital Kota Makassar.", icon: <ShieldAlert className="text-blue-700" /> },
  { id: "D", title: "Informasi Terkait Kegiatan Masyarakat dan Unjuk Rasa", desc: "Pemberitahuan rencana aksi massa, penutupan jalan, dan pengalihan arus lalu lintas agar mobilitas warga tetap aman.", icon: <Users className="text-slate-700" /> },
  { id: "E", title: "SUB INFORMASI SERTA MERTA", desc: "Kumpulan dokumen tambahan terkait prosedur penanganan situasi darurat dan kontijensi Polri.", icon: <Info className="text-slate-400" /> },
];

export default function InformasiSertaMerta() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <HeaderIP />

      {/* --- HERO SECTION (Urgency Style) --- */}
      <div className="relative bg-red-950 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-red-600">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <nav className="flex justify-center md:justify-start gap-2 text-red-400 font-black text-[10px] uppercase tracking-widest mb-6">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/informasi-publik">Informasi Publik</Link>
            <span>/</span>
            <span className="text-white">Serta Merta</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse mx-auto md:mx-0">
                <Flame className="text-white" size={40} />
            </div>
            <div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-2 uppercase">Informasi Serta Merta</h1>
                <p className="text-red-200 max-w-2xl font-medium text-lg italic">Informasi darurat yang wajib diumumkan seketika untuk melindungi keselamatan publik.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- ACCORDION LIST --- */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {daftarSertaMerta.map((item) => (
            <div key={item.id} className="group border-2 border-slate-50 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:border-red-100 transition-all duration-500">
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between p-8 text-left transition-all ${openId === item.id ? "bg-slate-900 text-white" : "bg-white text-slate-900 hover:bg-red-50/30"}`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${openId === item.id ? "bg-red-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black tracking-[0.2em] opacity-50 uppercase">Kategori {item.id}</span>
                    <h3 className="text-lg md:text-xl font-black tracking-tight uppercase">{item.title}</h3>
                  </div>
                </div>
                <ChevronDown className={`transition-transform duration-500 ${openId === item.id ? "rotate-180" : ""}`} size={24} />
              </button>

              {/* ISI DATA (Modern Layout) */}
              {openId === item.id && (
                <div className="p-10 bg-white border-t border-slate-50 animate-in fade-in slide-in-from-bottom duration-500">
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="flex-1 space-y-6">
                        <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl">
                            <p className="text-red-900 font-bold leading-relaxed">{item.desc}</p>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Data ini diperbarui secara otomatis melalui sistem komando Polrestabes Makassar jika terdapat situasi kontijensi di lapangan.</p>
                    </div>
                    
                    <div className="w-full md:w-72 space-y-4">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dokumen Terkait</span>
                        <div className="p-5 border-2 border-dashed border-slate-200 rounded-3xl text-center">
                            <FileWarning className="mx-auto text-slate-300 mb-3" size={32} />
                            <p className="text-[10px] font-bold text-slate-400 uppercase">Belum ada rilis darurat hari ini.</p>
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- CREATIVE ALERT BOX --- */}
        <div className="max-w-4xl mx-auto mt-24 bg-gradient-to-br from-red-700 to-red-900 rounded-[48px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl shadow-red-900/40">
            <div className="absolute -right-20 -bottom-20 opacity-10 rotate-12">
                <AlertTriangle size={400} />
            </div>
            <div className="relative z-10">
                <h2 className="text-4xl font-black mb-6 tracking-tighter uppercase leading-none">Keadaan Darurat?</h2>
                <p className="text-red-100 font-medium text-lg mb-10 max-w-lg leading-relaxed">Jangan menunggu informasi publik jika Anda dalam ancaman langsung. Segera hubungi Call Center Polri untuk bantuan cepat petugas.</p>
                <div className="flex flex-wrap gap-6">
                    <a href="tel:110" className="bg-white text-red-900 px-10 py-5 rounded-2xl font-black hover:bg-yellow-400 transition-all flex items-center gap-3 shadow-xl uppercase text-sm tracking-widest">
                    </a>
                    <Link href="/kontak" className="border-2 border-white/30 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-sm tracking-widest">
                       Lapor Online
                    </Link>
                </div>
            </div>
        </div>
      </div>

    </div>
  );
}