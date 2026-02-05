"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { Phone, Mail, MapPin, MessageSquare, Send, Clock, Globe, Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-900 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-500">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Hubungi <br/> <span className="text-yellow-400">Kami</span>
          </h1>
          <p className="text-blue-100 max-w-2xl font-medium text-lg italic leading-relaxed">
            Layanan pengaduan dan konsultasi informasi publik Polrestabes Makassar hadir untuk melayani Anda.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* --- INFO KONTAK (Kreativitas: Modern Cards) --- */}
            <div className="space-y-8">
                <div className="space-y-6">
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Informasi <span className="text-blue-900">Resmi</span></h2>
                    <p className="text-slate-500 font-medium leading-relaxed">Silahkan hubungi kami melalui saluran komunikasi berikut atau datang langsung ke kantor kami di jam operasional.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                        <div className="w-12 h-12 bg-blue-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <MapPin size={24} />
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Alamat</p>
                        <p className="text-sm font-bold text-slate-700 leading-tight">Jl. Ahmad Yani No.9, Makassar</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                        <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Phone size={24} />
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Telepon</p>
                        <p className="text-sm font-bold text-slate-700 leading-tight">(0411) 3629216</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Mail size={24} />
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-sm font-bold text-slate-700 leading-tight">ppid@polrestabesmakassar.id</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                        <div className="w-12 h-12 bg-yellow-500 text-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Clock size={24} />
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Jam Kerja</p>
                        <p className="text-sm font-bold text-slate-700 leading-tight">08.00 - 15.00 WITA</p>
                    </div>
                </div>

                {/* Sosial Media */}
                <div className="pt-8 space-y-4">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Media Sosial Kami</p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-900 hover:text-white transition-all"><Instagram size={20}/></Link>
                        <Link href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-900 hover:text-white transition-all"><Facebook size={20}/></Link>
                        <Link href="#" className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-900 hover:text-white transition-all"><Twitter size={20}/></Link>
                    </div>
                </div>
            </div>

            {/* --- PESAN CEPAT FORM --- */}
            <div className="bg-white rounded-[48px] shadow-2xl p-10 md:p-16 border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <MessageSquare size={150} />
                </div>
                <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">Kirim Pesan Cepat</h3>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Ada pertanyaan? Kami siap menjawab.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Nama Anda</label>
                            <input type="text" placeholder="Masukkan nama lengkap..." className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-blue-900 outline-none font-bold text-slate-900 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Email / No. HP</label>
                            <input type="text" placeholder="Untuk membalas pesan Anda..." className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-blue-900 outline-none font-bold text-slate-900 transition-all" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Pesan Anda</label>
                            <textarea rows={4} placeholder="Tuliskan pertanyaan atau kendala Anda di sini..." className="w-full bg-slate-50 px-6 py-4 rounded-2xl border border-transparent focus:border-blue-900 outline-none font-bold text-slate-900 transition-all"></textarea>
                        </div>
                        <button className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-900/30 hover:bg-slate-900 transition-all flex items-center justify-center gap-3 active:scale-95">
                            <Send size={18}/> Kirim Sekarang
                        </button>
                    </form>
                </div>
            </div>
          </div>

          {/* --- GOOGLE MAPS SECTION (Kreativitas) --- */}
          <div className="mt-24">
            <div className="bg-white p-4 rounded-[50px] shadow-2xl border border-slate-100 overflow-hidden h-[500px] relative group">
                {/* Embed Map Polrestabes Makassar */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.818817753177!2d119.4102!3d-5.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf0331046465db%3A0xc3f8e5e546114e9d!2sPolrestabes%20Makassar!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
                    className="w-full h-full rounded-[40px] grayscale group-hover:grayscale-0 transition-all duration-1000"
                    allowFullScreen 
                    loading="lazy" 
                />
                <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-xl max-w-xs pointer-events-none group-hover:translate-x-4 transition-transform duration-500">
                    <h4 className="font-black text-blue-900 uppercase text-xs mb-2">Lokasi Strategis</h4>
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">Berada tepat di jantung Kota Makassar, memudahkan Anda untuk akses layanan fisik PPID.</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <FooterIP />
    </div>
  );
}