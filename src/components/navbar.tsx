"use client";
import { useState } from "react";
import Link from "next/link";
import { Shield, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-[9999] bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition">
            <Shield className="text-slate-900" size={24} />
          </div>
          <div className="hidden sm:block">
            <h1 className="font-black text-slate-900 leading-none text-base tracking-tighter">E-PPID POLRI</h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Polrestabes Makassar</p>
          </div>
        </Link>

        {/* MENU DESKTOP - Link-nya sudah saya perbaiki! */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm">
          <Link href="/" className="text-slate-600 hover:text-blue-900 transition-all">Beranda</Link>
          <Link href="/profil" className="text-slate-600 hover:text-blue-900 transition-all">Profil</Link>
          <Link href="/informasi-publik" className="text-slate-600 hover:text-blue-900 transition-all">Informasi Publik</Link>
          <Link 
            href="/login" 
            className="bg-blue-900 text-white px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-slate-800 transition shadow-lg shadow-blue-900/20"
          >
            <LogIn size={16} />
            <span>Login Petugas</span>
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full md:hidden bg-white border-b border-slate-200 p-6 flex flex-col gap-6 font-bold shadow-2xl animate-in slide-in-from-top">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="py-2 border-b border-slate-50">Beranda</Link>
          <Link href="/profil" onClick={() => setIsMenuOpen(false)} className="py-2 border-b border-slate-50">Profil</Link>
          <Link href="/informasi-publik" onClick={() => setIsMenuOpen(false)} className="py-2 border-b border-slate-50">Informasi Publik</Link>
          <Link href="/login" onClick={() => setIsMenuOpen(false)} className="bg-blue-900 text-white p-4 rounded-2xl flex items-center justify-center gap-2">
            <LogIn size={18} /> Login Petugas
          </Link>
        </div>
      )}
    </nav>
  );
}