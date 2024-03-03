import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const mainStyle = `
  max-lg:mx-[2rem] 
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