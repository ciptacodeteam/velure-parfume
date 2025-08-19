import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import NavigationSection from "@/components/navigation";
import TopSection from "@/components/topbar";
import FooterSection from "@/components/footersection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Velure perfume – Premium Fragrances for Every Moment",
    template: "Velure perfume Collection | Velure",
  },
  description:
    "Velure is crafted to embody everlasting sophistication, delivering a luxurious fragrance that captivates from the very first note. Each spray reveals confidence, charm, and a lasting impression that lingers beautifully.",
  keywords: [
    "parfum medan",
    "parfum",
    "parfum lokal",
    "parfum indonesia",
    "parfum tahan lama",
    "parfum premium",
    "parfum laki laki",
    "parfum perempuan",
    "parfum mewah",
    "kado ulang tahun",
    "parfum wangi",
    "wangi parfum",
    "medan",
    "produk indonesia",
    "UMKM"
  ],
  metadataBase: new URL("https://velureperfume.store"), // ganti domain kamu
  alternates: {
    canonical: "https://velureperfume.store",
  },
  openGraph: {
    title: "Velure Perfume – Premium Fragrances for Every Moment",
    description:
      "Velure is crafted to embody everlasting sophistication, delivering a luxurious fragrance that captivates from the very first note. Each spray reveals confidence, charm, and a lasting impression that lingers beautifully.",
    url: "https://velureperfume.store",
    siteName: "Velure",
    images: [
      {
        url: "/img/img1.webp",
        width: 1200,
        height: 630,
        alt: "velureperfume",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} antialiased`}
      >
        <TopSection />
        <NavigationSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
