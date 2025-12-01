import React from "react";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import Navbar from "~/components/Navbar";

export const metadata: Metadata = {
  title: "Reading Advantage (Thailand)",
  description: "Revolutionizing Education Through Innovation",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
