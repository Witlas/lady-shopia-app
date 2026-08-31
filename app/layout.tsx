import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lady Shopia — Sleepwear & Fashion",
  description:
    "Lady Shopia — comfortable, elegant homewear and dresses for everyday use.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-dvh bg-white font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
