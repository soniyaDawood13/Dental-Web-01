import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "BrightSmile Dental — Modern Dental Care",
  description:
    "Comprehensive, gentle dental care in a modern, comfortable environment. Book your visit with BrightSmile Dental.",
  icons: {
    icon: "/images/tooth-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <PageLoader/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
      
    </html>
  );
}
