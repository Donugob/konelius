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
    "Portfolio, Vision 2026, and Manifesto of Udemmadu Cornelius Ezechukwu, National LAWSA Vice President Aspirant.",

  // Required for WhatsApp, Facebook, LinkedIn
  openGraph: {
    title: "Udemmadu Cornelius Ezechukwu | National LAWSA VP Aspirant",
    description:
      "Explore the Vision 2025 roadmap: partnerships, mentorships, legal education support, and national student empowerment.",
    url: "https://konelius.vercel.app",
    siteName: "Udemmadu Cornelius Campaign",
    images: [
      {
        url: "https://konelius.vercel.app/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Udemmadu Cornelius Campaign Preview",
      },
    ],
    type: "website",
  },

  // Required for Twitter
  twitter: {
    card: "summary_large_image",
    title: "Udemmadu Cornelius Ezechukwu | National LAWSA VP Aspirant",
    description:
      "Explore the Vision 2025 roadmap: partnerships, mentorships, legal education support, and national student empowerment.",
    images: ["https://konelius.vercel.app/preview.jpeg"],
  },

  // Optional but good
  metadataBase: new URL("https://konelius.vercel.app"),
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
