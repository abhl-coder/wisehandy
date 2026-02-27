import type { Metadata } from "next";
import { Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Work_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Wise Handy | Full‑Service Commercial & Home Repair",
    template: "%s | Wise Handy",
  },
  description:
    "Professional handyman services for home and commercial projects in Florida. Repairs, installations, improvements, and exterior work.",
  metadataBase: new URL("https://wisehandy.com"),
  alternates: {
    canonical: "https://wisehandy.com",
  },
  openGraph: {
    type: "website",
    url: "https://wisehandy.com",
    title: "Wise Handy | Full‑Service Commercial & Home Repair",
    description:
      "Professional handyman services for home and commercial projects in Florida.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wise Handy | Full‑Service Commercial & Home Repair",
    description:
      "Professional handyman services for home and commercial projects in Florida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
