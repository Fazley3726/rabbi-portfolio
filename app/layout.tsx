import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fazley Rabbi — Frontend Engineer & Applied ML Researcher",
  description:
    "Premium engineering portfolio featuring production case studies in clinical AI, modern web architecture, and IEEE-accepted research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className={
        "min-h-full flex flex-col bg-zinc-950 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(14,165,233,0.15),rgba(99,102,241,0.1),rgba(0,0,0,0))] text-zinc-100 antialiased"
      }>
        {children}
      </body>
    </html>
  );
}
