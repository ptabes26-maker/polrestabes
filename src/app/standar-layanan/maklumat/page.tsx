"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { Award, ShieldCheck, Quote, Star, PenTool as Signature, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function MaklumatPelayananPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-600">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Maklumat <br/> <span className="text-yellow-500">Pelayanan</span>
          </h1>
          <p className="text-slate-400 max-w-xl font-medium text-lg leading-relaxed italic">
            Pernyataan kesanggupan dan janji resmi untuk memberikan pelayanan informasi sesuai standar yang ditetapkan.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-5xl mx-auto">
          
          {/* --- PIAGAM MAKLUMAT (Kreativitas: Plaque Design) --- */}
          <div className="relative bg-white p-1 md:p-4 rounded-[60px] shadow-2xl border-2 border-slate-100">
            <div className="bg-white border-8 border-double border-yellow-500/30 rounded-[50px] p-10 md:p-20 relative overflow-hidden">
                
                {/* Ornamen Background */}
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Star size={300} />
                </div>
                <div className="absolute bottom-0 left-0 p-10 opacity-5">
                    <Award size={300} />
                </div>

                <div className="relative z-10 text-center space-y-12">
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-blue-900 text-yellow-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-500">
                            <ShieldCheck size={48} />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">MAKLUMAT PELAYANAN</h2>
                        <div className="w-24 h-1.5 bg-yellow-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-3xl mx-auto relative">
                        <Quote className="absolute -top-10 -left-10 text-slate-100" size={120} />
                        <p className="text-xl md:text-3xl font-black text-slate-800 leading-tight tracking-tight uppercase italic relative z-10">
                            "DENGAN INI, KAMI MENYATAKAN SANGGUP MENYELENGGARAKAN PELAYANAN SESUAI STANDAR PELAYANAN YANG TELAH DITETAPKAN DAN APABILA TIDAK MENEPATI JANJI INI, KAMI SIAP MENERIMA SANKSI SESUAI PERATURAN PERUNDANG-UNDANGAN YANG BERLAKU."
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-10">
                        <div className="text-center">
                            <div className="mb-4 text-slate-300">
                                <Signature size={64} className="mx-auto" />
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Tertanda,</p>
                            <p className="text-sm font-black text-slate-900 uppercase">PPID POLRESTABES MAKASSAR</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* --- POIN KOMITMEN (Kreativitas) --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              { title: "Transparan", desc: "Memberikan informasi apa adanya tanpa ada yang ditutupi sesuai UU KIP." },
              { title: "Akuntabel", desc: "Setiap data yang diberikan dapat dipertanggungjawabkan kebenarannya." },
              { title: "Tanpa Biaya", desc: "Menjamin seluruh proses layanan informasi bebas dari pungutan liar." }
            ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-all">
                        <CheckCircle size={24} />
                    </div>
                    <h4 className="text-lg font-black text-slate-900 uppercase mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <Link href="/layanan-informasi/permohonan" className="inline-flex items-center gap-3 bg-blue-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-yellow-500 hover:text-slate-900 transition-all uppercase text-xs tracking-[0.2em] shadow-2xl">
                Bantu Kami Menepati Janji: Mulai Bermohon
             </Link>
          </div>

        </div>
      </div>

      <FooterIP />
    </div>
  );
}