import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// GANTI Navbar LAMA DENGAN HeaderIP BARU
import HeaderIP from "@/components/HeaderIP"; 

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        {/* Panggil HeaderIP di sini supaya muncul di semua halaman */}
        <HeaderIP /> 
        
        {/* pt-28 supaya konten Hero tidak tertutup Header yang sekarang makin lebar */}
        <main className="pt-28 md:pt-36">
          {children}
        </main>
      </body>
    </html>
  );
}