import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const barlowRegular = localFont({
  src: "./fonts/Barlow-Regular.ttf",
  variable: "--font-barlow-regular",
  weight: "400",
});

const barlowSemibold = localFont({
  src: "./fonts/Barlow-SemiBold.ttf",
  variable: "--font-barlow-semibold",
  weight: "400",
});

export const metadata: Metadata = {
  title: "JDZM portfolio",
  description: "This is a portfolio website for JDZM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
