"use client";
import { useState } from "react";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { User, Mail, Phone, MapPin, FileText, Upload, Send, ShieldCheck, Info } from "lucide-react";
import Link from "next/link";

export default function PermohonanInformasi() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-900 pt-36 pb-20 px-4 overflow-hidden border-b-8 border-yellow-500">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">Permohonan Informasi</h1>
          <p className="text-blue-200 max-w-2xl font-medium text-lg italic">
            Sampaikan permohonan informasi publik Anda secara resmi dan terpantau sistem.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* --- SIDEBAR INFO (Kreativitas) --- */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Syarat Utama</h3>
                <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                        <div className="w-6 h-6 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center shrink-0 mt-1"><ShieldCheck size={14}/></div>
                        <p className="text-sm text-slate-500 font-bold leading-relaxed">Menyiapkan Scan KTP (untuk Individu) atau Akta Pendirian (untuk Lembaga).</p>
                    </li>
                    <li className="flex gap-4 items-start">
                        <div className="w-6 h-6 bg-blue-100 text-blue-900 rounded-lg flex items-center justify-center shrink-0 mt-1"><ShieldCheck size={14}/></div>
                        <p className="text-sm text-slate-500 font-bold leading-relaxed">Menjelaskan tujuan penggunaan informasi secara jelas.</p>
                    </li>
                </ul>
            </div>
            
            <div className="bg-blue-900 p-8 rounded-[32px] text-white">
                <Info className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-lg font-black mb-2 uppercase tracking-tight">Estimasi Waktu</h3>
                <p className="text-blue-200 text-sm font-medium leading-relaxed">
                    Sesuai regulasi, kami akan merespon permohonan Anda dalam maksimal 10 hari kerja.
                </p>
            </div>
          </div>

          {/* --- MAIN FORM --- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
                {/* Form Header */}
                <div className="bg-slate-50 p-8 border-b border-slate-100 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Formulir Digital</h2>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Lengkapi data diri Anda dengan benar</p>
                    </div>
                    <div className="text-right hidden sm:block">
                        <span className="text-[10px] font-black text-blue-900 uppercase bg-blue-50 px-3 py-1 rounded-full">Protokol SSL Aktif</span>
                    </div>
                </div>

                <form className="p-8 md:p-12 space-y-8">
                    {/* Identitas Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Nama Lengkap (Sesuai KTP)</label>
                            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus-within:border-blue-900 transition-all">
                                <User className="text-slate-400" size={20} />
                                <input type="text" placeholder="Contoh: Muhammad Fikri" className="bg-transparent border-none focus:outline-none w-full font-bold text-slate-900" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Aktif</label>
                            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus-within:border-blue-900 transition-all">
                                <Mail className="text-slate-400" size={20} />
                                <input type="email" placeholder="ikki@example.com" className="bg-transparent border-none focus:outline-none w-full font-bold text-slate-900" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Nomor WhatsApp</label>
                            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus-within:border-blue-900 transition-all">
                                <Phone className="text-slate-400" size={20} />
                                <input type="text" placeholder="0812..." className="bg-transparent border-none focus:outline-none w-full font-bold text-slate-900" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Pekerjaan</label>
                            <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus-within:border-blue-900 transition-all">
                                <FileText className="text-slate-400" size={20} />
                                <input type="text" placeholder="Contoh: Mahasiswa" className="bg-transparent border-none focus:outline-none w-full font-bold text-slate-900" />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Alamat Domisili (Makassar)</label>
                        <div className="flex items-start gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus-within:border-blue-900 transition-all">
                            <MapPin className="text-slate-400 mt-1" size={20} />
                            <textarea rows={3} placeholder="Masukkan alamat lengkap sesuai domisili..." className="bg-transparent border-none focus:outline-none w-full font-bold text-slate-900"></textarea>
                        </div>
                    </div>

                    {/* Informasi Section */}
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Rincian Informasi yang Dibutuhkan</label>
                        <div className="flex items-start gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus-within:border-blue-900 transition-all">
                            <FileText className="text-slate-400 mt-1" size={20} />
                            <textarea rows={4} placeholder="Jelaskan secara detail data atau informasi apa yang Anda minta..." className="bg-transparent border-none focus:outline-none w-full font-bold text-slate-900"></textarea>
                        </div>
                    </div>

                    {/* Upload Section (Kreativitas) */}
                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Identitas Pendukung (KTP/SIM)</label>
                        <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center hover:border-blue-900 transition-all cursor-pointer group">
                            <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-900 group-hover:text-white transition-all">
                                <Upload size={24} />
                            </div>
                            <p className="text-sm font-black text-slate-900">Klik untuk unggah file atau tarik file ke sini</p>
                            <p className="text-[10px] text-slate-400 uppercase font-bold mt-2 tracking-widest">PNG, JPG atau PDF (Maks. 2MB)</p>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-blue-900 text-white py-6 rounded-[24px] font-black text-sm uppercase tracking-[0.3em] shadow-2xl shadow-blue-900/40 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95"
                    >
                        <Send size={18}/> Kirim Permohonan
                    </button>
                </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}