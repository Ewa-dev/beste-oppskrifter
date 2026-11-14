import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Beste Oppskrifter",
  description: "Finn beste oppskrifter for forskjellige anledninger",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
