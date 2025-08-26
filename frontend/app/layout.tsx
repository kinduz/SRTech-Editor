import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { I18nInitializer } from "../src/shared/i18n/I18nInitializer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Editor",
  description: "Effect your music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.className} bg-gradient-to-br from-black via-green-900 to-green-800 min-h-screen`}
      >
        <I18nInitializer />
        {children}
      </body>
    </html>
  );
}
