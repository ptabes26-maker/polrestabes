"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { AlertCircle, FileSearch, Scale, Send, Info, Fingerprint, MessageSquareWarning } from "lucide-react";
import Link from "next/link";

export default function PermohonanKeberatan() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION (Objection Style) --- */}
      <div className="relative bg-slate-900 pt-36 pb-20 px-4 overflow-hidden border-b-8 border-orange-600">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Pengajuan <span className="text-orange-500">Keberatan</span>
          </h1>
          <p className="text-slate-400 max-w-2xl font-medium text-lg italic">
            Formulir resmi untuk menyampaikan keberatan atas layanan informasi publik yang tidak sesuai standar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          
          {/* --- INFO BOX REGULASI --- */}
          <div className="bg-orange-50 border-2 border-orange-200 p-8 rounded-[32px] mb-12 flex items-start gap-6">
            <div className="w-12 h-12 bg-orange-600 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <Scale size={24} />
            </div>
            <div>
                <h3 className="text-orange-900 font-black uppercase text-sm tracking-widest mb-2">Dasar Hukum Keberatan</h3>
                <p className="text-orange-800/80 text-sm font-bold leading-relaxed">
                    Sesuai Pasal 35 UU KIP, pemohon informasi berhak mengajukan keberatan secara tertulis kepada atasan PPID jika permohonan ditolak, informasi tidak akurat, atau biaya yang diminta tidak wajar.
                </p>
            </div>
          </div>

          {/* --- FORM KEBERATAN --- */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
            <div className="p-8 md:p-16 space-y-10">
                
                {/* Section 1: Referensi Permohonan */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <Fingerprint className="text-blue-900" size={20} />
                        <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Data Referensi</h2>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Nomor Pendaftaran Permohonan (Wajib)</label>
                        <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus-within:border-orange-600 transition-all">
                            <FileSearch className="text-slate-400" size={20} />
                            <input type="text" placeholder="Contoh: PPID-2026-0001" className="bg-transparent border-none focus:outline-none w-full font-black text-slate-900" />
                        </div>
                        <p className="text-[9px] text-slate-400 font-bold ml-2">Masukkan nomor pendaftaran yang Anda terima saat pertama kali bermohon.</p>
                    </div>
                </div>

                {/* Section 2: Alasan Keberatan */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                        <MessageSquareWarning className="text-blue-900" size={20} />
                        <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Alasan Keberatan</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {[
                            "Permohonan Informasi Ditolak",
                            "Informasi Berkala Tidak Disediakan",
                            "Permohonan Tidak Ditanggapi",
                            "Biaya Penggandaan Tidak Wajar",
                            "Informasi yang Diberikan Tidak Akurat"
                        ].map((reason, idx) => (
                            <label key={idx} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl cursor-pointer hover:bg-orange-50 transition-all border border-transparent hover:border-orange-200 group">
                                <input type="radio" name="reason" className="w-5 h-5 text-orange-600 focus:ring-orange-600" />
                                <span className="text-sm font-bold text-slate-700 group-hover:text-orange-900">{reason}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Section 3: Uraian Keberatan */}
                <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Uraian Kasus Posisi Keberatan</label>
                    <div className="flex items-start gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus-within:border-orange-600 transition-all">
                        <AlertCircle className="text-slate-400 mt-1" size={20} />
                        <textarea rows={5} placeholder="Jelaskan secara detail kronologi keberatan Anda..." className="bg-transparent border-none focus:outline-none w-full font-bold text-slate-900"></textarea>
                    </div>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-orange-600 text-white py-6 rounded-[24px] font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-orange-900/20 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                    <Send size={18}/> Ajukan Keberatan Resmi
                </button>
            </div>

            {/* Help Footer */}
            <div className="bg-slate-50 p-8 text-center border-t border-slate-100">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                    Butuh bantuan teknis? Hubungi <Link href="#" className="text-blue-900 border-b border-blue-900">Petugas PPID</Link>
                </p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}