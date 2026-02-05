"use client";
import { useState } from "react";
import HeaderIP from "@/components/HeaderIP";
import FooterIP from "@/components/FooterIP";
import { ChevronDown, FileText, Download, Shield, Info, ArrowRight } from "lucide-react";
import Link from "next/link";

const daftarBerkala = [
  { id: "A", title: "Profil Kepolisian Negara Republik Indonesia", desc: "Berisi informasi dasar, sejarah, tugas pokok, dan fungsi Kepolisian RI." },
  { id: "B", title: "Program dan/atau Kegiatan Polri", desc: "Daftar rencana kerja, agenda tahunan, dan progres kegiatan kepolisian." },
  { id: "C", title: "Kinerja POLRI", desc: "Laporan capaian kinerja dan evaluasi tahunan Satuan Kerja Polrestabes Makassar." },
  { id: "D", title: "Keuangan Polri", desc: "Ringkasan laporan realisasi anggaran, neraca, dan daftar aset negara." },
  { id: "E", title: "Ringkasan Laporan Akses Informasi Publik", desc: "Data jumlah pemohon informasi dan tindak lanjut permohonan setiap bulan." },
  { id: "F", title: "Peraturan, Keputusan, dan/atau Kebijakan Publik", desc: "Dokumen regulasi yang berdampak langsung pada pelayanan masyarakat." },
  { id: "G", title: "Hak & Tata Cara Memperoleh Informasi Publik", desc: "Mekanisme pengajuan informasi, keberatan, hingga sengketa informasi." },
  { id: "H", title: "Pengaduan Masyarakat", desc: "Saluran resmi dan prosedur pengaduan terkait kinerja petugas di lapangan." },
  { id: "I", title: "Pengumuman Pengadaan Barang dan Jasa", desc: "Informasi tender dan lelang terbuka di lingkungan Polrestabes Makassar." },
  { id: "J", title: "Dokumen Pengadaan Barang dan Jasa Polri", desc: "Arsip kontrak dan detail administrasi pengadaan yang sudah selesai." },
  { id: "K", title: "Prosedur Peringatan Dini & Evakuasi Darurat", desc: "Panduan keselamatan warga Makassar saat terjadi bencana atau situasi kontijensi." },
  { id: "L", title: "Rancangan Peraturan Perundang-Undangan Polri", desc: "Daftar draf aturan baru yang sedang dalam tahap pembahasan publik." },
  { id: "M", title: "Implementasi Keterbukaan Informasi Publik (KIP)", desc: "Laporan kepatuhan terhadap UU No. 14 Tahun 2008 tentang KIP." },
  { id: "N", title: "Fasilitas Layanan Informasi Publik", desc: "Daftar sarana prasarana yang tersedia di kantor PPID untuk pemohon." },
];

export default function InformasiBerkala() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <HeaderIP />

      {/* --- HERO SECTION --- */}
      <div className="relative bg-blue-950 pt-36 pb-24 px-4 overflow-hidden border-b-8 border-yellow-500">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img src="/images/polrestabes.webp" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="container mx-auto relative z-10 text-center md:text-left">
          <nav className="flex justify-center md:justify-start gap-2 text-yellow-500 font-black text-[10px] uppercase tracking-widest mb-6">
            <Link href="/">Beranda</Link>
            <span>/</span>
            <Link href="/informasi-publik">Informasi Publik</Link>
            <span>/</span>
            <span className="text-white">Berkala</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">INFORMASI BERKALA</h1>
          <p className="text-blue-200 max-w-2xl font-medium text-lg">Informasi yang wajib disediakan dan diumumkan secara berkala oleh Badan Publik Polri.</p>
        </div>
      </div>

      {/* --- CONTENT SECTION (ACCORDION STYLE) --- */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-4">
          {daftarBerkala.map((item) => (
            <div key={item.id} className="group border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors ${openId === item.id ? "bg-red-900 text-white" : "bg-white text-slate-900 hover:bg-slate-50"}`}
              >
                <div className="flex items-center gap-6">
                  <span className={`text-2xl font-black ${openId === item.id ? "text-yellow-400" : "text-blue-900"}`}>{item.id}.</span>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight">{item.title}</h3>
                </div>
                <ChevronDown className={`transition-transform duration-500 ${openId === item.id ? "rotate-180" : ""}`} />
              </button>

              {/* ISI ACCORDION (Kreativitas: Dummy Files) */}
              {openId === item.id && (
                <div className="p-8 bg-white border-t border-slate-50 animate-in slide-in-from-top duration-500">
                  <p className="text-slate-500 font-medium mb-8 leading-relaxed italic">{item.desc}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Dummy File List */}
                    {[1, 2].map((file) => (
                      <div key={file} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 group/file hover:border-blue-900 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-red-600">
                            <FileText size={20} />
                          </div>
                          <div>
                            <p className="font-black text-xs text-slate-900 leading-none">DOKUMEN_PUBLIK_{item.id}_0{file}.pdf</p>
                            <span className="text-[10px] text-slate-400 font-bold uppercase">2.4 MB • PDF FILE</span>
                          </div>
                        </div>
                        <button className="p-2 bg-blue-900 text-white rounded-lg hover:bg-yellow-500 hover:text-slate-900 transition-all">
                          <Download size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-end">
                    <button className="flex items-center gap-2 text-xs font-black text-blue-900 hover:text-red-900 transition uppercase tracking-widest">
                      Lihat Selengkapnya <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- INFO BOX (Kreativitas: Bantuan Langsung) --- */}
        <div className="max-w-4xl mx-auto mt-20 bg-slate-900 rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 p-10">
                <Shield size={200} />
            </div>
            <div className="relative z-10 text-center md:text-left">
                <div className="w-16 h-16 bg-yellow-500 text-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <Info size={32} />
                </div>
                <h2 className="text-3xl font-black mb-4 tracking-tighter">Kesulitan Menemukan Data?</h2>
                <p className="text-slate-400 font-medium text-lg mb-8 max-w-lg">Sesuai UU KIP, warga berhak mengajukan bantuan pendampingan jika data yang dicari belum tersedia secara publik.</p>
                <div className="flex flex-wrap gap-4">
                    <Link href="#" className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-yellow-500 transition-all uppercase text-xs tracking-widest">Ajukan Permohonan</Link>
                    <Link href="#" className="border border-white/20 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition-all uppercase text-xs tracking-widest">Hubungi Petugas</Link>
                </div>
            </div>
        </div>
      </div>


    </div>
  );
}