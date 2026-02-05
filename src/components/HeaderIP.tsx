"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Shield, Bell, Search, Globe, ChevronRight } from "lucide-react";

export default function HeaderIP() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek Sticky & Scroll Lock
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // KREATIVITAS: Lock scroll saat menu mobile terbuka
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const menuData = [
    { label: "Beranda", href: "/" },
    { label: "Profil", href: "/profil" },
    {
      label: "Informasi Publik",
      links: [
        { label: "Informasi Berkala", href: "/informasi-publik/informasi-berkala" },
        { label: "Informasi Serta Merta", href: "/informasi-publik/informasi-serta-merta" },
        { label: "Informasi Setiap Saat", href: "/informasi-publik/informasi-setiap-saat" },
        { label: "Informasi Dikecualikan", href: "/informasi-publik/informasi-dikecualikan" },
        { label: "Layanan Digital Polri", href: "/informasi-publik/layanan-digital-polri" },
        { label: "UU & Peraturan", href: "/informasi-publik/uu-dan-peraturan" },
      ],
    },
    {
      label: "Layanan Informasi",
      links: [
        { label: "Registrasi Permohonan", href: "/layanan-informasi/permohonan" },
        { label: "Permohonan Keberatan", href: "/layanan-informasi/keberatan" },
        { label: "Statistik/Rekapitulasi", href: "/layanan-informasi/statistik" },
        { label: "Laporan Tahunan", href: "/layanan-informasi/laporan-tahunan" },
      ],
    },
    {
      label: "Standar Layanan",
      links: [
        { label: "Tata Cara", href: "/standar-layanan/tata-cara" },
        { label: "Alur Pelayanan", href: "/standar-layanan/alur" },
        { label: "Mekanisme Sengketa", href: "/standar-layanan/sengketa" },
        { label: "Waktu Pelayanan", href: "/standar-layanan/waktu" },
        { label: "Standar Biaya", href: "/standar-layanan/biaya" },
        { label: "Maklumat", href: "/standar-layanan/maklumat" },
      ],
    },
    { label: "Regulasi", href: "/regulasi" },
    { label: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="fixed top-0 w-full z-[999]">
      {/* Running Text */}
      <div className="bg-red-700 text-white py-1 overflow-hidden hidden md:block border-b border-red-800">
        <div className="container mx-auto flex items-center">
          <div className="bg-yellow-500 text-slate-900 px-3 py-0.5 text-[10px] font-black uppercase tracking-tighter z-10">INFO:</div>
          <div className="overflow-hidden whitespace-nowrap w-full">
  <div className="animate-marquee text-[11px] font-bold tracking-wide">
    Portal Resmi E-PPID Polrestabes Makassar Melayani Dengan Hati • Pastikan Data Diri Anda Valid Saat Bermohon.
  </div>
</div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-500 ${isScrolled ? "bg-blue-950/95 backdrop-blur-xl py-3 shadow-2xl" : "bg-blue-900 py-5"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-lg">
              <Shield className="text-blue-900" size={24} />
            </div>
            <div className="text-white">
              <h1 className="font-black text-base md:text-xl leading-none tracking-tighter uppercase">PPID-Polrestabes</h1>
              <p className="text-[8px] font-black uppercase text-yellow-400 tracking-[0.2em]">Makassar</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-1 text-white">
            {menuData.map((item, idx) => (
              <li 
                key={idx} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.links ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-[11px] font-black uppercase hover:text-yellow-400 transition-colors">
                    {item.label} <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link href={item.href || "#"} className="px-4 py-2 text-[11px] font-black uppercase hover:text-yellow-400 transition-colors">
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Desktop */}
                {item.links && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-2">
                    <div className="bg-red-900 border-t-4 border-yellow-500 shadow-2xl rounded-b-2xl overflow-hidden">
                      {item.links.map((sub, sIdx) => (
                        <Link key={sIdx} href={sub.href} className="block px-6 py-4 text-[10px] font-bold text-white hover:bg-white/10 hover:text-yellow-400 border-b border-white/5 last:border-none">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger Button (PENTING: Pastikan z-index tinggi) */}
          <button 
            className="xl:hidden text-white p-2 relative z-[1010]" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* --- FULL SCREEN MOBILE MENU --- */}
      <div className={`fixed inset-0 bg-blue-950 z-[1005] transition-all duration-500 ease-in-out xl:hidden ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
        <div className="p-8 pt-32 h-full overflow-y-auto">
          <div className="space-y-6">
            {menuData.map((item, idx) => (
              <div key={idx} className="border-b border-white/10 pb-4">
                {item.links ? (
                  <div className="space-y-4">
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                      className="w-full flex justify-between items-center text-xl font-black text-white uppercase tracking-tighter"
                    >
                      {item.label} <ChevronDown className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="grid grid-cols-1 gap-3 pl-4 animate-in slide-in-from-left">
                        {item.links.map((sub, sIdx) => (
                          <Link 
                            key={sIdx} 
                            href={sub.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between bg-white/5 p-4 rounded-2xl text-slate-300 font-bold text-sm hover:text-yellow-400"
                          >
                            {sub.label} <ChevronRight size={14} />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href || "#"} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-black text-white uppercase tracking-tighter"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Footer Info */}
          <div className="mt-20 p-8 bg-yellow-500 rounded-[40px] text-slate-900">
            <h4 className="font-black uppercase text-xs mb-2">Emergency 24/7</h4>
            <p className="text-2xl font-black">Call 110</p>
          </div>
        </div>
      </div>
    </header>
  );
}