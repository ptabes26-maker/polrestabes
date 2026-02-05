"use client";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { Smartphone, ShieldCheck, CreditCard, ClipboardCheck, MessageSquare, Cpu, Globe, Download, ArrowRight } from "lucide-react";
import Link from "next/link";

const appsPolri = [
  {
    title: "POLRI SuperApps",
    desc: "Akses seluruh layanan kepolisian dalam satu genggaman, mulai dari perpanjang SIM, STNK, hingga pengaduan masyarakat.",
    icon: <Smartphone className="text-blue-500" size={32} />,
    color: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-500/20"
  },
  {
    title: "Digital Korlantas",
    desc: "Layanan khusus lalu lintas seperti perpanjangan SIM Online (SINAR) dan pembayaran pajak kendaraan bermotor (SIGNAL).",
    icon: <CreditCard className="text-yellow-500" size={32} />,
    color: "from-yellow-500/10 to-yellow-600/5",
    border: "border-yellow-500/20"
  },
  {
    title: "E-Survey Pelayanan",
    desc: "Sampaikan tingkat kepuasan Anda terhadap layanan Polrestabes Makassar untuk membantu kami terus berbenah.",
    icon: <ClipboardCheck className="text-emerald-500" size={32} />,
    color: "from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-500/20"
  },
  {
    title: "SPKT Online",
    desc: "Layanan pelaporan kehilangan dokumen atau gangguan kamtibmas secara digital tanpa harus antre di kantor polisi.",
    icon: <ShieldCheck className="text-red-500" size={32} />,
    color: "from-red-500/10 to-red-600/5",
    border: "border-red-500/20"
  },
];

export default function LayananDigitalPolri() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION (Digital Tech Style) --- */}
      <div className="relative bg-blue-900 pt-36 pb-24 px-4 overflow-hidden">
        {/* Ornamen Teknologi di Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent" />
            <Cpu className="absolute -right-10 top-20 text-white opacity-10 rotate-12" size={300} />
        </div>
        
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <nav className="flex justify-center md:justify-start gap-2 text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-6">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/informasi-publik">Informasi Publik</Link>
            <span>/</span>
            <span className="text-white">Layanan Digital</span>
          </nav>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-none">
            TRANSFORMASI <br/> <span className="text-yellow-400">DIGITAL POLRI</span>
          </h1>
          <p className="text-blue-100 max-w-2xl font-medium text-lg leading-relaxed">
            Menghadirkan pelayanan kepolisian yang lebih cepat, mudah, dan transparan melalui integrasi teknologi informasi terkini.
          </p>
        </div>
      </div>

      {/* --- GRID LAYANAN (Kreativitas: Glow Cards) --- */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {appsPolri.map((app, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-white border ${app.border} rounded-[40px] p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                    {app.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">{app.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow">
                    {app.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-900 transition-all">
                        <Download size={16} /> Unduh Apps
                    </button>
                    <Link href="#" className="text-slate-400 group-hover:text-slate-900 transition-colors">
                        <ArrowRight size={24} />
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PROMOSI SUPERAPPS (Kreativitas: Banner Modern) --- */}
        <div className="max-w-6xl mx-auto mt-24">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-[50px] p-10 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden shadow-2xl shadow-blue-900/40">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                <div className="flex-1 space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500 text-slate-900 rounded-full font-black text-[10px] uppercase tracking-widest mx-auto lg:mx-0">
                        <Globe size={14}/> Integrated Service
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">SATU APLIKASI UNTUK SEMUA LAYANAN</h2>
                    <p className="text-blue-100 text-lg font-medium max-w-xl mx-auto lg:mx-0">
                        Tidak perlu banyak aplikasi. Dengan POLRI SuperApps, urusan administrasi hingga pengaduan darurat kini lebih praktis dalam satu pintu.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-12 hover:scale-105 transition-transform cursor-pointer" alt="Play Store" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" className="h-12 hover:scale-105 transition-transform cursor-pointer" alt="App Store" />
                    </div>
                </div>
                <div className="hidden lg:block w-72 h-[500px] bg-slate-800 rounded-[40px] border-8 border-slate-700 shadow-2xl relative overflow-hidden group">
                    <img 
                        src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000" 
                        alt="Preview App" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                    <div className="absolute bottom-10 left-0 right-0 text-center">
                        <ShieldCheck className="mx-auto text-yellow-400 mb-2" size={40} />
                        <p className="font-black text-[10px] uppercase tracking-[0.2em]">Safe & Encrypted</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <FooterIP />
    </div>
  );
}