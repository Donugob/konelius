import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// The "Law/Traditional" Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// The "Modern/Clean" Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Udemmadu Cornelius Ezechukwu | National LAWSA VP Aspirant",
  description:
    "Portfolio and Manifesto of Udemmadu Cornelius Ezechukwu, Law Student, COOU.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-[#F4F4F0] text-[#111111]">
        {children}
      </body>
    </html>
  );
}
