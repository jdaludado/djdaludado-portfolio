import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://djdaludado-portfolio.vercel.app"),
  title: {
    default:
      "Dawna Joy Daludado | Documentation Engineering & AI Workflows",
    template: "%s | Dawna Joy Daludado",
  },
  description:
    "Explore Dawna Joy Daludado's portfolio: 25+ years of technical documentation experience, documentation modernization, AI-assisted development, and workflow automation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dawna Joy Daludado | Portfolio",
    title:
      "Dawna Joy Daludado | Documentation Engineering & AI Workflows",
    description:
      "Documentation modernization, AI-assisted development, and practical automation backed by 25+ years of technical communication experience.",
    images: [
      {
        url: "/portfolio-social.png",
        alt: "Dawna Joy Daludado — Documentation Engineering & AI Workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Dawna Joy Daludado | Documentation Engineering & AI Workflows",
    description:
      "Documentation modernization, AI-assisted development, and practical automation backed by 25+ years of technical communication experience.",
    images: ["/portfolio-social.png"],
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
