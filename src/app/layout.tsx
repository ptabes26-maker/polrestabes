import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderIP from "@/components/HeaderIP"; // Import Header
import FooterIP from "@/components/FooterIP"; // Import Footer yang baru

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-PPID Polrestabes Makassar",
  description: "Portal Resmi Informasi Publik Polrestabes Makassar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header muncul di paling atas di semua halaman */}
        <HeaderIP /> 
        
        {/* Konten halaman nu akan muncul di sini */}
        <main>
          {children}
        </main>

        {/* Footer muncul di paling bawah di semua halaman */}
        <FooterIP />
      </body>
    </html>
  );
}