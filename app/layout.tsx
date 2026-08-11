import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import StoreClientLayout from "@/components/StoreClientLayout";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Churn & Grain Co. — Pure Food, Fully Shown",
  description: "A premium pantry of lab-tested ghee, saffron, honey and Ayurvedic essentials, rooted in Odisha.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body><StoreClientLayout>{children}</StoreClientLayout></body></html>;
}
