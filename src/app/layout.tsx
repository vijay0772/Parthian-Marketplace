import type { Metadata } from "next";
import "../index.css";
import "../styles/globals.css";
import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Parthian Marketplace",
    template: "%s · Parthian",
  },
  description: "The premier platform for battery sellers and buyers.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-background">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

