import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const mainStyle = `
  max-lg:mx-[2rem] 
  max-lg:text-center 
  max-lg:mt-[1rem] 
  mx-[5rem]
`

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
      <body className={inter.className}>
        <Navbar />
        <main className={mainStyle}>
          {children}
        </main>
      </body>
    </html>
  );
}