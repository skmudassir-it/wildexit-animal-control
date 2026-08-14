import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wildexit-animal-control.amsitservices.com"),
  title: {
    default: "WildExit Animal Control — Humane Wildlife Removal & Exclusion",
    template: "%s | WildExit Animal Control",
  },
  description:
    "WildExit Animal Control removes raccoons, squirrels, bats, birds and rodents humanely, seals every entry point, and restores your attic. Licensed, insured, 24/7 emergency response.",
  keywords: [
    "wildlife removal",
    "raccoon removal",
    "squirrel exclusion",
    "bat removal",
    "bird control",
    "rodent proofing",
    "attic restoration",
    "emergency wildlife removal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WildExit Animal Control",
    title: "WildExit Animal Control — Humane Wildlife Removal & Exclusion",
    description:
      "Humane wildlife removal and exclusion for homes and businesses. Raccoons, squirrels, bats, birds and rodents — sealed out for good.",
    url: "https://wildexit-animal-control.amsitservices.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WildExit Animal Control — technician inspecting a suburban roofline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WildExit Animal Control — Humane Wildlife Removal & Exclusion",
    description:
      "Humane wildlife removal and exclusion for homes and businesses. 24/7 emergency response.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="relative min-h-screen antialiased">
        <BackgroundBlobs />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
