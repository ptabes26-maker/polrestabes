"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { BarChart3, PieChart, TrendingUp, Users, CheckCircle2, Clock, XCircle, Download } from "lucide-react";
import Link from "next/link";

export default function StatistikLayanan() {
  const statsSummary = [
    { label: "Total Permohonan", value: "128", icon: <Users size={24} />, color: "bg-blue-600" },
    { label: "Sedang Diproses", value: "12", icon: <Clock size={24} />, color: "bg-yellow-500" },
    { label: "Diterima/Selesai", value: "110", icon: <CheckCircle2 size={24} />, color: "bg-emerald-600" },
    { label: "Ditolak", value: "6", icon: <XCircle size={24} />, color: "bg-red-600" },
  ];

  const monthlyData = [
    { month: "Januari", count: 45, percent: "45%" },
    { month: "Februari", count: 28, percent: "28%" },
    { month: "Maret", count: 35, percent: "35%" },
    { month: "April", count: 20, percent: "20%" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-slate-900 pt-36 pb-20 px-4 overflow-hidden border-b-8 border-blue-600">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">
            Statistik <span className="text-blue-500">Layanan</span>
          </h1>
          <p className="text-slate-400 max-w-2xl font-medium text-lg italic">
            Visualisasi data real-time terkait permohonan informasi publik di Polrestabes Makassar.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* --- TOP CARDS --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsSummary.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* --- GRAFIK BULANAN (Kreativitas) --- */}
            <div className="lg:col-span-2 bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-3">
                        <BarChart3 className="text-blue-600" size={24} />
                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Tren Permohonan 2026</h3>
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">Per Bulan</span>
                </div>
                
                <div className="space-y-8">
                    {monthlyData.map((data, idx) => (
                        <div key={idx} className="space-y-2">
                            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-500">
                                <span>{data.month}</span>
                                <span className="text-slate-900">{data.count} Permohonan</span>
                            </div>
                            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out" 
                                    style={{ width: data.percent }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- REKAPITULASI STATUS --- */}
            <div className="bg-slate-900 p-10 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
                <TrendingUp className="absolute -right-10 -top-10 text-white/5" size={200} />
                <h3 className="text-xl font-black mb-8 uppercase tracking-tight relative z-10 flex items-center gap-3">
                    <PieChart className="text-yellow-400" size={24} /> Kualitas Layanan
                </h3>
                <div className="space-y-8 relative z-10">
                    <div>
                        <p className="text-slate-400 text-[10px] font-black uppercase mb-2">Rata-rata Waktu Respon</p>
                        <p className="text-3xl font-black text-yellow-400">3.2 Hari</p>
                    </div>
                    <div>
                        <p className="text-slate-400 text-[10px] font-black uppercase mb-2">Tingkat Kepuasan Publik</p>
                        <p className="text-3xl font-black text-emerald-400">98.5%</p>
                    </div>
                    <div className="pt-6">
                        <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                            <Download size={16} /> Unduh Laporan Lengkap
                        </button>
                    </div>
                </div>
            </div>
          </div>

          {/* --- DATA TABLE --- */}
          <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-100">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Rekapitulasi Tahunan</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                            <th className="px-10 py-6">Tahun</th>
                            <th className="px-10 py-6 text-center">Masuk</th>
                            <th className="px-10 py-6 text-center">Selesai</th>
                            <th className="px-10 py-6 text-center">Ditolak</th>
                            <th className="px-10 py-6 text-right">Persentase (%)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 font-bold text-slate-700">
                        {[2026, 2025, 2024].map((year) => (
                            <tr key={year} className="hover:bg-slate-50 transition-colors">
                                <td className="px-10 py-6 text-slate-900">{year}</td>
                                <td className="px-10 py-6 text-center">128</td>
                                <td className="px-10 py-6 text-center text-emerald-600">110</td>
                                <td className="px-10 py-6 text-center text-red-600">6</td>
                                <td className="px-10 py-6 text-right">
                                    <span className="bg-blue-50 text-blue-900 px-3 py-1 rounded-full text-[10px]">95.3%</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>

      <FooterIP />
    </div>
  );
}