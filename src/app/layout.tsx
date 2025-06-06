import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukesh Kannan - Blog",
  description:
    "I talk about c++, nix, opengl, networking, machine learning, or any thing that i find interesting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${JetBrainsMono.className} antialiased `}>
        {children}
      </body>
    </html>
  );
}
