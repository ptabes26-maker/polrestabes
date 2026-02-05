import { Shield, Phone, Mail, MapPin } from "lucide-react";

export default function FooterIP() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-4 border-t border-white/10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
              <Shield className="text-slate-900" size={24} />
            </div>
            <h2 className="font-black text-xl tracking-tighter uppercase">E-PPID POLRI</h2>
          </div>
          <p className="text-slate-400 leading-relaxed font-medium">
            Portal resmi Pejabat Pengelola Informasi dan Dokumentasi (PPID) Polrestabes Makassar. Melayani dengan transparansi dan akuntabilitas.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-black uppercase tracking-widest text-yellow-500">Kontak Kami</h3>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li className="flex items-center gap-3"><MapPin size={20} /> Jl. Ahmad Yani No.9, Makassar</li>
            <li className="flex items-center gap-3"><Phone size={20} /> (0411) 3629216</li>
            <li className="flex items-center gap-3"><Mail size={20} /> ppid@polrestabesmakassar.id</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-black uppercase tracking-widest text-yellow-500">Jam Layanan</h3>
          <p className="text-slate-400 font-medium">Senin - Kamis: 08.00 - 15.00 WITA<br/>Jumat: 08.00 - 15.30 WITA</p>
        </div>
      </div>
      <div className="container mx-auto pt-10 border-t border-white/5 text-center text-slate-500 text-sm font-bold">
        © 2026 POLRESTABES MAKASSAR. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}