import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Providers from "./components/Providers";
import Themechanger from "./components/ThemeChanger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toonra Page",
  description: "Wow great page!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header></Header>
          <Themechanger></Themechanger>
          {children}
        </Providers>
      </body>
    </html>
  );
}
