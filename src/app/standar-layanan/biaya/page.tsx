"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { Banknote, ShieldCheck, Info, FileText, Monitor, HardDrive, AlertCircle } from "lucide-react";
import Link from "next/link";

const daftarBiaya = [
  { item: "Penyediaan Informasi", biaya: "Rp 0,- (GRATIS)", icon: <ShieldCheck className="text-emerald-500" /> },
  { item: "Pengiriman via Email/WA", biaya: "Rp 0,- (GRATIS)", icon: <Monitor className="text-blue-500" /> },
  { item: "Fotokopi (Per Lembar)", biaya: "Sesuai Harga Pasar", icon: <FileText className="text-slate-400" /> },
  { item: "Penyimpanan (CD/DVD/Flashdisk)", biaya: "Disediakan Pemohon", icon: <HardDrive className="text-slate-400" /> },
];

export default function BiayaPelayananPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-emerald-950 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-emerald-500">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 bg-emerald-500 text-white rounded-[32px] flex items-center justify-center shadow-2xl shrink-0">
                <Banknote size={48} />
            </div>
            <div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
                    Standar <br/> <span className="text-emerald-400">Biaya Pelayanan</span>
                </h1>
                <p className="text-emerald-100 max-w-2xl font-medium text-lg italic">
                    Transparansi biaya penggandaan dan perolehan informasi publik pada PPID Polrestabes Makassar.
                </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
            
            {/* --- BANNER GRATIS (Kreativitas) --- */}
            <div className="bg-white rounded-[40px] p-10 md:p-16 border-4 border-dashed border-emerald-200 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <ShieldCheck size={200} />
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-emerald-600 tracking-tighter mb-4">GRATIS</h2>
                <p className="text-slate-500 font-bold text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                    Sesuai UU KIP, setiap pemohon informasi publik <span className="text-slate-900">tidak dipungut biaya</span> untuk perolehan informasi.
                </p>
            </div>

            {/* --- TABEL BIAYA --- */}
            <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100">
                <div className="p-10 border-b border-slate-50 bg-slate-50/50 flex items-center gap-4">
                    <Info className="text-blue-900" size={24} />
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Rincian Biaya Penggandaan</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left font-bold text-slate-700">
                        <tbody className="divide-y divide-slate-50">
                            {daftarBiaya.map((item, idx) => (
                                <tr key={idx} className="group hover:bg-emerald-50/50 transition-colors">
                                    <td className="p-8 flex items-center gap-6">
                                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-white transition-all">
                                            {item.icon}
                                        </div>
                                        <span className="text-slate-900 uppercase tracking-tighter">{item.item}</span>
                                    </td>
                                    <td className="p-8 text-right font-black text-emerald-700">{item.biaya}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- CATATAN HUKUM --- */}
            <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
                <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                        <AlertCircle className="text-yellow-500" size={32} />
                        <h2 className="text-2xl font-black uppercase tracking-tight">Ketentuan Tambahan</h2>
                    </div>
                    <ul className="space-y-4 text-slate-400 font-medium text-lg leading-relaxed">
                        <li>• Biaya penggandaan hanya berlaku jika pemohon meminta salinan fisik (hardcopy).</li>
                        <li>• Pemohon dapat membawa media penyimpanan sendiri (Flashdisk/Harddisk) untuk menghindari biaya media.</li>
                        <li>• Biaya pengiriman melalui jasa kurir/pos ditanggung sepenuhnya oleh pemohon informasi.</li>
                    </ul>
                    <div className="pt-6">
                         <Link href="/layanan-informasi/permohonan" className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-yellow-500 hover:text-slate-900 transition-all uppercase text-xs tracking-[0.2em] shadow-xl">
                            Ajukan Permohonan Sekarang
                         </Link>
                    </div>
                </div>
            </div>

        </div>
      </div>

      <FooterIP />
    </div>
  );
}