import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noelia Ortíz",
  description: "Venta y alquiler de propiedades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
