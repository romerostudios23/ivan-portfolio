import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import SmoothScroll from "../components/SmoothScroll";

const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.ttf",
  variable: "--font-general-sans",
});

export const metadata: Metadata = {
  title: "Ivan Romero Portfolio",
  description: "Portafolio audiovisual y fotografía profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${generalSans.variable} font-sans`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}