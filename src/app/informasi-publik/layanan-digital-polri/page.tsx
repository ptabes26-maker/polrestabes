"use client";
import React from "react";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import Image from "next/image";

const appsPolri = [
  { title: "Polri Super App", imgSrc: "/images/polisisuperapp.webp", url: "https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi&hl=en_US&gl=US" },
  { title: "Media Hub", imgSrc: "/images/mediahub.webp", url: "https://play.google.com/store/apps/details?id=com.mediahub.mediahub_mobile" },
  { title: "Polisiku", imgSrc: "/images/polisiku.webp", url: "https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi" },
  { title: "SP2HP", imgSrc: "/images/sp2hp.webp", url: "https://sp2hp.bareskrim.polri.go.id/" },
  { title: "Polri TV & Radio", imgSrc: "/images/polritv_radio.webp", url: "https://play.google.com/store/apps/details?id=com.polritv" },
  { title: "SDM - Penerimaan POLRI", imgSrc: "/images/sdm.webp", url: "https://penerimaan.polri.go.id/" },
  { title: "Pelayanan SIM", imgSrc: "/images/sim.webp", url: "https://www.digitalkorlantas.id/sim/" },
  { title: "Pelayanan e-Rikkes SIM", imgSrc: "/images/rikkes.webp", url: "https://erikkes.id/" },
  { title: "Pelayanan Test Psikologi SIM", imgSrc: "/images/psikologi.webp", url: "https://eppsi.id/" },
  { title: "Pelayanan e-Avis", imgSrc: "/images/avis.webp", url: "https://e-avis.korlantas.polri.go.id/" },
  { title: "Pelayanan Samsat Digital", imgSrc: "/images/samsat.webp", url: "https://samsatdigital.id/" },
  { title: "Pelayanan SKCK", imgSrc: "/images/skck.webp", url: "https://skck.polri.go.id/" },
  { title: "Pelayanan Propam Presisi", imgSrc: "/images/propam.webp", url: "https://play.google.com/store/apps/details?id=com.stk.pengaduanpropam" },
  { title: "Pelayanan Binmas", imgSrc: "/images/bimnas.webp", url: "https://bos.polri.go.id/login" },
  { title: "Pelayanan Dumas Presisi", imgSrc: "/images/dumas.webp", url: "https://dumaspresisi.polri.go.id/" },
  { title: "Whistle Blower System", imgSrc: "/images/blower.webp", url: "https://pengaduan-penerimaan.polri.go.id/" },
];

export default function LayananDigitalPolri() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-950 pt-36 pb-20 px-4 overflow-hidden border-b-8 border-yellow-500">
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Layanan <br/> <span className="text-yellow-400">Digital Polri</span>
          </h1>
          <p className="text-blue-200 max-w-2xl font-medium text-lg italic">
            Klik pada ikon untuk mengakses portal layanan digital Kepolisian Negara Republik Indonesia.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-[60px] shadow-2xl p-10 md:p-16 border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {appsPolri.map((app, idx) => (
              <a 
                key={idx} 
                href={app.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden p-3">
                  <div className="relative w-full h-full">
                    <Image 
                      src={app.imgSrc} 
                      alt={app.title} 
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-[10px] md:text-[11px] font-black uppercase tracking-tight text-slate-800 leading-tight group-hover:text-blue-900 transition-colors">
                  {app.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}