import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anugami - Under Maintenance",
  description:
    "Anugami Premium Marketplace is currently under maintenance. We'll be back soon!",
  icons: {
    icon: "/logo.png",                 // default 32×32
    shortcut: "/logo.png",
    apple: "/logo.png",       // if you have one
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}