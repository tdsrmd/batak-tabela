import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./global.css";
import { PlayersContext } from "@/context/PlayersContext";

export const metadata: Metadata = {
  title: "Batak Tabela",
  description: "Batak Tabela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={GeistSans.className}>
        <PlayersContext>{children}</PlayersContext>
      </body>
    </html>
  );
}
