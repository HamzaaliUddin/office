"use client";
import Header from "../Header";
import { ThemeProvider } from "next-themes";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import Scripts from "./Scripts";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
      <main className={inter.className}>
        <Scripts />
        <Header />
        {children}

        <Footer />
        <ScrollToTop />
      </main>
    </ThemeProvider>
  );
}
