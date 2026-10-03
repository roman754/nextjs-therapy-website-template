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
  title: "Dr. Maya Reynolds, PsyD | Anxiety, Trauma & Burnout Therapy Santa Monica",
  description: "Licensed clinical psychologist specializing in anxiety, panic, trauma, and burnout therapy for adults in Santa Monica, CA. In-person and telehealth sessions available.",
  keywords: ["anxiety therapy Santa Monica", "trauma therapy Santa Monica", "burnout therapy", "psychologist Santa Monica", "EMDR therapy", "CBT therapy California"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
