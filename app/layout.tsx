import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";
import { ScrollProgress } from "./components/ScrollProgress/ScrollProgress";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal blog for Frontend Developer, Anton Zhilin",
  description: "frontend development web development, personal bloging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${openSans.variable}`}>
        <div className="page">
          <Header />
          <ScrollProgress />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
