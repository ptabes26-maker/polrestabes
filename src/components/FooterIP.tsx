"use client";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterIP() {
  // Data Link - Nu isi manual mi di sini nanti link-nya
  const footerLinks = [
    { id: 1, img: "/images/footer/footer-1.png", alt: "Layanan Chat", url: "https://eppid.polri.go.id/informasi-publik/informasi-berkala" },
    { id: 2, img: "/images/footer/footer-2.png", alt: "Penyimpanan Digital", url: "https://eppid.polri.go.id/layanan-polri-digital" },
    { id: 3, img: "/images/footer/footer-3.png", alt: "Pertukaran Dokumen", url: "https://sisdivkum.id/library/peraturan-kepolisian" },
  ];

  return (
    <footer className="bg-[#2b59ff] pt-20 pb-10 px-4 overflow-hidden">
      <div className="container mx-auto">
        
        {/* --- ILLUSTRATION SECTION (Clickable Images) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end mb-20">
          {footerLinks.map((item) => (
            <div key={item.id} className="flex justify-center">
              <Link 
                href={item.url} 
                target={item.url.startsWith('http') ? "_blank" : "_self"}
                className="relative w-64 h-48 md:w-80 md:h-60 group transition-all duration-500 hover:scale-110 active:scale-95"
              >
                {/* Efek Glow pas di-hover biar makin gagah */}
                <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <Image 
                  src={item.img} 
                  alt={item.alt} 
                  fill 
                  className="object-contain relative z-10"
                />
                
                {/* Tooltip sederhana biar user tau ini bisa di-klik */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-blue-900 text-[8px] font-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest whitespace-nowrap z-20">
                  Buka Layanan
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="border-t border-white/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-white font-bold text-sm tracking-tight uppercase">
              Copyright @ 2026 PPID-Polrestabes Makassar
            </p>
            <p className="text-blue-100 text-[10px] font-black uppercase tracking-[0.2em]">
              Keterbukaan Informasi Publik - Presisi & Transparan
            </p>
          </div>

          <div className="flex items-center gap-4">
             <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 hover:text-blue-900 transition-all shadow-xl">
                <Instagram size={18} />
             </Link>
             <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 hover:text-blue-900 transition-all shadow-xl">
                <Facebook size={18} />
             </Link>
             <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-yellow-500 hover:text-blue-900 transition-all shadow-xl">
                <Twitter size={18} />
             </Link>
          </div>
        </div>

      </div> 
    </footer>
  );
}