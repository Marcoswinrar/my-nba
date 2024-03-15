import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "./ui/components/Layout";
import Navbar from "./ui/components/Navbar";
import Footer from "./ui/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const mainStyle = `
  max-md:mx-[1rem] 
  max-lg:text-center 
  max-lg:mt-[1rem] 
  mx-[3rem]
  flex-grow
`;

export const metadata: Metadata = {
  title: "My nba",
  description: "Livescore, games, stats and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-slate-900 to-slate-700`}>
        <Layout >
          <Navbar />
          <main className={mainStyle}>
            {children}
          </main>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}