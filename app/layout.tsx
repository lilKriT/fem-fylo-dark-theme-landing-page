import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "FEM Fylo Dark Theme Landing Page",
  description: "Created by lilKriT using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${ralewaySans.variable} antialiased`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
