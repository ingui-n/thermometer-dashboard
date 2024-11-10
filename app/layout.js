import localFont from "next/font/local";
import "./globals.css";
import {Providers} from "@/app/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Temperature dashboard",
  description: "Dashboard for temperature sensors",
};

export default function RootLayout({children}) {
  return (
    <html lang="cs">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  );
}
