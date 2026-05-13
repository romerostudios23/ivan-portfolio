import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import SmoothScroll from "../components/SmoothScroll";

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
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