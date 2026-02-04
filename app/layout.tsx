import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jin Blog · Year-Month-Week",
  description: "Public weekly notes with Apple-inspired minimal aesthetic."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <div className="min-h-screen bg-ink">
          <Header />
          <main className="container-shell py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
