import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "The Normality - Anomaly Spotting Game",
  description: "The Normality, a QA inspector game where you review a website left unfinished by a deceased developer. Spot anomalies, follow protocols, and win by careful observation",
  keywords: ["anomaly game", "QA inspector game", "observation challenge", "spot anomalies", "The Normality", "mystery game"],
  authors: [{ name: "Karim Chehab" }],
  openGraph: {
    title: "The Normality - Anomaly Spotting Game",
    description: "Step into the abandoned website of a deceased developer. Inspect the layout, detect anomalies, and prove your observation skills in The Normality.",
    url: "https://the-normality.vercel.app",
    siteName: "The Normality",
    images: [
      {
        url: "https://the-normality.vercel.app/screenshots/intro-page.png",
        width: 1200,
        height: 630,
        alt: "The Normality Game - QA Inspector Challenge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Normality - Anomaly Spotting Game",
    description: "Inspect the abandoned website of a deceased developer. Spot anomalies and test your observation skills in The Normality.",
    images: ["https://the-normality.vercel.app/screenshots/intro-page.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
