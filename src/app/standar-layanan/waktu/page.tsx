"use client";
import { useState, useEffect } from "react";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { Clock, Calendar, Coffee, AlertCircle, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function WaktuPelayananPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Minggu, 1 = Senin, ...
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hour + minutes / 60;

      // Senin - Kamis: 08:00 - 15:00
      if (day >= 1 && day <= 4) {
        if (currentTime >= 8 && currentTime < 15) {
          // Istirahat 12:00 - 13:00
          if (currentTime >= 12 && currentTime < 13) setIsOpen(false);
          else setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      } 
      // Jumat: 08:00 - 15:30
      else if (day === 5) {
        if (currentTime >= 8 && currentTime < 15.5) {
          // Istirahat Jumat 12:00 - 13:30
          if (currentTime >= 12 && currentTime < 13.5) setIsOpen(false);
          else setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      } 
      // Sabtu & Minggu Tutup
      else {
        setIsOpen(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Cek tiap menit
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-950 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-500">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
                    Waktu <br/> <span className="text-yellow-400">Pelayanan</span>
                </h1>
                <p className="text-blue-200 max-w-xl font-medium text-lg leading-relaxed">
                    Jadwal operasional loket layanan informasi publik PPID Polrestabes Makassar.
                </p>
            </div>
            
            {/* Real-time Status Card */}
            <div className={`p-8 rounded-[40px] border-4 ${isOpen ? "bg-emerald-500/10 border-emerald-500" : "bg-red-500/10 border-red-500"} backdrop-blur-md transition-all duration-500`}>
                <div className="flex items-center gap-4 mb-2">
                    <div className={`w-3 h-3 rounded-full animate-ping ${isOpen ? "bg-emerald-500" : "bg-red-500"}`}></div>
                    <span className="text-white font-black uppercase tracking-[0.3em] text-xs">Status Saat Ini</span>
                </div>
                <h2 className={`text-4xl font-black uppercase ${isOpen ? "text-emerald-400" : "text-red-500"}`}>
                    {isOpen ? "SANGAT BUKA" : "SEDANG TUTUP"}
                </h2>
                <p className="text-white/60 text-[10px] font-bold mt-2 uppercase tracking-widest italic">Waktu Makassar (WITA)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* --- JADWAL TABEL --- */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
                    <div className="p-10 border-b border-slate-50 bg-slate-50/50 flex items-center gap-4">
                        <Calendar className="text-blue-900" size={24} />
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Jadwal Operasional Mingguan</h3>
                    </div>
                    <div className="p-2 overflow-x-auto">
                        <table className="w-full text-left font-bold text-slate-700">
                            <tbody className="divide-y divide-slate-50">
                                <tr className="hover:bg-blue-50/50 transition-colors">
                                    <td className="p-8 text-slate-900 uppercase tracking-tighter">Senin - Kamis</td>
                                    <td className="p-8 text-blue-900">08.00 - 15.00 WITA</td>
                                </tr>
                                <tr className="bg-blue-50/30 hover:bg-blue-50/50 transition-colors">
                                    <td className="p-8 text-slate-900 uppercase tracking-tighter font-black">Jumat</td>
                                    <td className="p-8 text-blue-900">08.00 - 15.30 WITA</td>
                                </tr>
                                <tr className="text-slate-400">
                                    <td className="p-8 uppercase tracking-tighter italic">Sabtu & Minggu</td>
                                    <td className="p-8 uppercase font-black tracking-widest text-red-400">Libur / Tutup</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-[32px] p-8 flex items-start gap-6">
                    <div className="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                        <Coffee size={24} />
                    </div>
                    <div>
                        <h4 className="text-amber-900 font-black uppercase text-sm tracking-widest mb-2">Waktu Istirahat</h4>
                        <p className="text-amber-800/80 text-sm font-bold leading-relaxed">
                            Layanan ditangguhkan sementara pada pukul 12.00 - 13.00 WITA (Senin-Kamis) dan 12.00 - 13.30 WITA (Jumat) untuk keperluan ISOMA.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- LOKASI & KONTAK --- */}
            <div className="space-y-8">
                <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-8">Lokasi Fisik</h3>
                    <div className="space-y-8">
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center shrink-0"><MapPin size={20}/></div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Alamat Kantor</p>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed">Jl. Ahmad Yani No.9, Baru, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan 90174</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start">
                            <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center shrink-0"><Phone size={20}/></div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Telepon Layanan</p>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed">(0411) 3629216</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 rounded-3xl overflow-hidden border border-slate-100 h-48 bg-slate-100 flex items-center justify-center">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center px-10">Peta Google Maps Akan Muncul Di Sini</p>
                    </div>
                </div>

                <div className="bg-slate-900 p-10 rounded-[40px] text-white flex items-start gap-6">
                    <AlertCircle className="text-yellow-500 shrink-0" size={24} />
                    <p className="text-xs font-bold leading-relaxed text-slate-400 uppercase tracking-wide">
                        Layanan online melalui portal ini tetap dapat diakses <span className="text-white">24 Jam</span>, namun verifikasi petugas tetap mengikuti jam kerja resmi.
                    </p>
                </div>
            </div>

        </div>
      </div>

    </div>
  );
}