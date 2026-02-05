"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { Gavel, Scale, FileWarning, History, CheckCircle2, AlertOctagon, ArrowRight } from "lucide-react";
import Link from "next/link";

const tahapanSengketa = [
  {
    tahap: "Pengajuan Permohonan",
    desc: "Pemohon mengajukan sengketa ke Komisi Informasi maksimal 14 hari kerja setelah menerima tanggapan tertulis dari atasan PPID.",
    icon: <FileWarning size={24} />,
    deadline: "14 Hari Kerja",
    color: "bg-red-800"
  },
  {
    tahap: "Proses Mediasi",
    desc: "Komisi Informasi melakukan mediasi antara Pemohon dan Polrestabes Makassar untuk mencapai kesepakatan bersama.",
    icon: <Scale size={24} />,
    deadline: "14 Hari Kerja",
    color: "bg-slate-700"
  },
  {
    tahap: "Ajudikasi Non-Litigasi",
    desc: "Jika mediasi gagal, proses berlanjut ke sidang ajudikasi untuk pembuktian dan pemeriksaan saksi/ahli.",
    icon: <Gavel size={24} />,
    deadline: "Maks 100 Hari",
    color: "bg-red-950"
  },
  {
    tahap: "Putusan Komisi",
    desc: "Komisi Informasi membacakan putusan sengketa yang bersifat final dan mengikat bagi para pihak.",
    icon: <CheckCircle2 size={24} />,
    deadline: "Final & Binding",
    color: "bg-emerald-700"
  }
];

export default function SengketaLayananPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-red-950 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-600">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Penyelesaian <br/> <span className="text-yellow-500">Sengketa Informasi</span>
          </h1>
          <p className="text-red-200 max-w-2xl font-medium text-lg leading-relaxed italic">
            Mekanisme hukum jika pemohon tidak puas dengan keputusan keberatan yang diberikan oleh atasan PPID.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          
          {/* --- ALERT REGULASI --- */}
          <div className="bg-red-50 border-l-8 border-red-700 p-8 rounded-2xl mb-16 flex items-start gap-6 shadow-sm">
            <AlertOctagon className="text-red-700 shrink-0" size={32} />
            <div>
              <h3 className="text-red-900 font-black uppercase text-sm tracking-widest mb-2">Syarat Pengajuan</h3>
              <p className="text-red-800/80 text-sm font-bold leading-relaxed">
                Permohonan sengketa hanya dapat diajukan apabila pemohon telah melalui tahapan pengajuan keberatan kepada Atasan PPID Polrestabes Makassar dan tetap tidak puas dengan jawabannya.
              </p>
            </div>
          </div>

          {/* --- TIMELINE PROSES --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tahapanSengketa.map((item, idx) => (
              <div key={idx} className="group relative bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl group-hover:rotate-6 transition-transform`}>
                  {item.icon}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">{item.tahap}</h3>
                  <span className="bg-slate-100 text-slate-500 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{item.deadline}</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="pt-6 border-t border-slate-50 flex items-center gap-2 text-[10px] font-black text-red-800 uppercase tracking-widest">
                  <History size={14} /> Tahap Ke-{idx + 1} Sengketa
                </div>
              </div>
            ))}
          </div>

          {/* --- FOOTER CARD (Kreativitas) --- */}
          <div className="mt-20 bg-slate-900 rounded-[50px] p-12 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none grayscale">
              <img src="/images/polrestabes.webp" className="w-full h-full object-cover" alt="" />
            </div>
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tighter relative z-10">Bantuan Hukum & Konsultasi</h2>
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
              Jika Anda ragu mengenai mekanisme sengketa, tim PPID Polrestabes Makassar siap memberikan asistensi terkait prosedur yang berlaku sesuai UU No. 14 Tahun 2008.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <Link href="/layanan-informasi/keberatan" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-yellow-500 transition-all uppercase text-xs tracking-widest shadow-xl">
                Ajukan Keberatan Dulu
              </Link>
              <Link href="#" className="border-2 border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-xs tracking-widest flex items-center gap-2">
                Kontak Komisi Informasi <ArrowRight size={16}/>
              </Link>
            </div>
          </div>

        </div>
      </div>

      <FooterIP />
    </div>
  );
}