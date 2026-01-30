import Link from "next/link";
import { ArrowLeft, Target, Eye, Shield } from "lucide-react";

export default function ProfilPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* HEADER SECTION */}
      <div className="relative bg-slate-900 pt-32 pb-20 px-4 text-center overflow-hidden">
        {/* --- TOMBOL KEMBALI (MELAYANG) --- */}
        <div className="absolute top-8 left-4 md:left-10 z-50">
            <Link 
              href="/" 
              className="flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-slate-900 px-5 py-2.5 rounded-full shadow-xl font-bold transition-all border border-white/20 backdrop-blur-md"
            >
                <ArrowLeft size={20} />
                <span>Kembali</span>
            </Link>
        </div>

        <div className="container relative z-10 mx-auto">
          <span className="text-yellow-500 font-black text-xs tracking-[0.3em] uppercase mb-4 block">Tentang Kami</span>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter">Profil Satuan</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Mengenal lebih dekat Polrestabes Makassar dalam melayani dan melindungi masyarakat Kota Daeng.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 mb-20">
        <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-slate-100">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-2xl flex items-center justify-center shadow-inner">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Visi</h2>
              <p className="text-slate-600 leading-relaxed text-xl font-medium">
                Terwujudnya pelayanan keamanan dan ketertiban masyarakat yang prima, tegaknya hukum dan keamanan dalam negeri yang mantap serta terjalinnya sinergi polisional yang proaktif.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-yellow-50 text-yellow-900 rounded-2xl flex items-center justify-center shadow-inner">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Misi</h2>
              <ul className="space-y-4 text-slate-600 text-lg">
                <li className="flex gap-4">
                  <span className="flex-none w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">1</span>
                  <p>Memberikan perlindungan, pengayoman dan pelayanan secara mudah, cepat, dan nyaman.</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-none w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-black">2</span>
                  <p>Menjamin keberhasilan penanggulangan gangguan keamanan dan ketertiban masyarakat.</p>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-100 mb-24" />

          <div className="text-center space-y-12">
            <div>
              <span className="text-blue-600 font-black text-xs tracking-widest uppercase">Pimpinan Polrestabes Makassar</span>
              <h2 className="text-4xl font-black text-slate-900 mt-2">Struktur Komando</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-black text-slate-900">Kombes Pol. Dr. Mokhamad Ngajib, S.I.K., M.H.</h3>
                <p className="text-blue-600 font-black uppercase text-xs tracking-[0.2em] mt-3">Kapolrestabes Makassar</p>
              </div>
              <div className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl font-black text-slate-900">AKBP Budi Susanto, S.I.K.</h3>
                <p className="text-blue-600 font-black uppercase text-xs tracking-[0.2em] mt-3">Wakapolrestabes Makassar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}