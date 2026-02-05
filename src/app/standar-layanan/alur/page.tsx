"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { GitCommitVertical, CheckCircle, Clock, FileSearch, ShieldCheck, MailCheck, MoveDown } from "lucide-react";
import Link from "next/link";

const alurProses = [
  {
    tahap: "Penerimaan Permohonan",
    desc: "Petugas PPID menerima form permohonan & dokumen pendukung (KTP/Akta) dari warga.",
    icon: <FileSearch className="text-white" size={24} />,
    time: "Hari ke-1",
    color: "bg-blue-600"
  },
  {
    tahap: "Verifikasi Kelengkapan",
    desc: "Pemeriksaan validitas dokumen. Jika lengkap diberi tanda terima, jika tidak dikembalikan untuk dilengkapi.",
    icon: <ShieldCheck className="text-white" size={24} />,
    time: "Hari ke-1 s/d 2",
    color: "bg-slate-700"
  },
  {
    tahap: "Koordinasi Satker",
    desc: "PPID berkoordinasi dengan Satuan Kerja (Lantas/Reskrim/Intel) untuk mendapatkan data yang diminta.",
    icon: <GitCommitVertical className="text-white" size={24} />,
    time: "Hari ke-3 s/d 7",
    color: "bg-blue-900"
  },
  {
    tahap: "Uji Konsekuensi",
    desc: "Proses penentuan apakah informasi bersifat terbuka atau dikecualikan (rahasia).",
    icon: <CheckCircle className="text-white" size={24} />,
    time: "Hari ke-8 s/d 9",
    color: "bg-indigo-700"
  },
  {
    tahap: "Keputusan & Penyerahan",
    desc: "Pemberitahuan tertulis dikirimkan dan informasi diserahkan kepada pemohon.",
    icon: <MailCheck className="text-white" size={24} />,
    time: "Hari ke-10",
    color: "bg-emerald-600"
  }
];

export default function AlurLayananPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-blue-600">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">
            Alur Pelayanan <br/> <span className="text-blue-500">Informasi Publik</span>
          </h1>
          <p className="text-slate-400 max-w-2xl font-medium text-lg leading-relaxed">
            Skema perjalanan dokumen permohonan Anda mulai dari meja pendaftaran hingga informasi sampai di tangan Anda.
          </p>
        </div>
      </div>

      {/* --- FLOWCHART SECTION --- */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
            
            {/* Diagram Alur */}
            <div className="space-y-0">
                {alurProses.map((step, idx) => (
                    <div key={idx} className="relative flex items-start gap-8 group">
                        {/* Jalur Line */}
                        {idx !== alurProses.length - 1 && (
                            <div className="absolute left-7 top-14 bottom-0 w-1 bg-slate-200 group-hover:bg-blue-200 transition-colors"></div>
                        )}

                        {/* Ikon Bulat */}
                        <div className={`relative z-10 w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 shrink-0`}>
                            {step.icon}
                        </div>

                        {/* Konten Kartu */}
                        <div className="pb-16 flex-1">
                            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Clock size={100} />
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{step.tahap}</h3>
                                    <span className="bg-slate-100 text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{step.time}</span>
                                </div>
                                <p className="text-slate-500 font-medium leading-relaxed max-w-xl">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- CATATAN TAMBAHAN (Advisor Touch) --- */}
            <div className="mt-10 bg-blue-900 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <Clock className="text-yellow-400" size={32} />
                        <h2 className="text-2xl font-black uppercase tracking-tight">Ketentuan Waktu</h2>
                    </div>
                    <p className="text-blue-100 font-medium text-lg leading-relaxed mb-8">
                        Berdasarkan UU KIP, PPID memiliki waktu <span className="text-yellow-400 font-black">10 Hari Kerja</span> untuk menjawab permohonan, dan dapat diperpanjang selama <span className="text-yellow-400 font-black">7 Hari Kerja</span> tambahan jika diperlukan koordinasi mendalam.
                    </p>
                    <div className="flex gap-4">
                         <div className="px-6 py-3 bg-white/10 rounded-2xl border border-white/20 text-xs font-bold uppercase tracking-widest">
                            Total Maks: 17 Hari Kerja
                         </div>
                    </div>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
}