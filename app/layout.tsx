import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Providers from "./components/Providers";
import Themechanger from "./components/ThemeChanger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebDev - Arnout Reitsma",
  description: "Welcome to my personal website! I'm Arnout Reitsma, a passionate full-stack web developer specializing in React/NextJS, AngularJS, Blazor, and C# .NET. With over 8 years of experience, I create creative and performant web experiences. Explore my site to learn more about my work, hobbies, and how to connect with me.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gray-100 dark:bg-neutral-900 transition-colors`}>
        <Providers>
          <Header></Header>
          <Themechanger></Themechanger>
          {children}
        </Providers>
      </body>
    </html>
  );
}
