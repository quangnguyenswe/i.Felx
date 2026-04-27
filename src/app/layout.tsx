import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "i.Felx",
  description: "Yet another personal site",
  openGraph: {
    title: "i.Felx",
    description: "Yet another personal site",
    url: "https://ifelx.pages.dev",
    siteName: "i.Felx",
    images: [
      {
        url: "https://ifelx.pages.dev/images/banner.png",
        width: 1200,
        height: 630,
        alt: "i.Felx's Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
