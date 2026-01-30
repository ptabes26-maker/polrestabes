import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // IMPORT DISINI

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-PPID Polrestabes Makassar",
  description: "Portal Keterbukaan Informasi Publik Polrestabes Makassar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
        {/* PANGGIL KOMPONEN NAVBAR DISINI */}
        <Navbar />
        
        {/* pt-20 supaya kontenmu tidak tertutup Navbar yang melayang */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
} 