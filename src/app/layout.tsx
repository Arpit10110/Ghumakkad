import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghumkkad - Explore & Plan Your Trips",
  description: "Discover and plan your perfect trip with Ghumkkad. Get personalized travel itineraries, budget estimates, and recommendations.",
  keywords: "travel, trip planning, budget travel, itineraries, explore destinations",
  openGraph: {
    title: "Ghumkkad - Your Ultimate Travel Planner",
    description: "Plan your trips seamlessly with Ghumkkad. Get the best travel recommendations and budget insights.",
    url: "https://ghumakad.vercel.app", // Replace with your actual domain
    siteName: "Ghumkkad",
    images: [
      {
        url: "/favicon.png", // Update if you have a specific OG image
        width: 1200,
        height: 630,
        alt: "Ghumkkad - Travel Planning Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghumkkad - Your Ultimate Travel Planner",
    description: "Plan your trips seamlessly with Ghumkkad. Get the best travel recommendations and budget insights.",
    images: ["/favicon.png"], // Twitter preview image
  },
};

import { ClerkProvider,ClerkLoaded,ClerkLoading } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.png" sizes="any" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

          {/* SEO Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Ghumkkad Team" />
          <meta name="theme-color" content="#FF6F38" />

          {/* Open Graph Meta Tags for Facebook & LinkedIn */}
          <meta property="og:title" content="Ghumkkad - Your Ultimate Travel Planner" />
          <meta property="og:description" content="Plan your trips seamlessly with Ghumkkad. Get the best travel recommendations and budget insights." />
          <meta property="og:image" content="/favicon.png" />
          <meta property="og:url" content="https://ghumakad.vercel.app/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Ghumkkad - Your Ultimate Travel Planner" />
          <meta name="twitter:description" content="Plan your trips seamlessly with Ghumkkad. Get the best travel recommendations and budget insights." />
          <meta name="twitter:image" content="/favicon.png" />

          <meta name="google-site-verification" content="XT0nYe__4mxz7yNohm0n6d6EcqKd1q5j8Ly0FGWKchA" />

          <title>Ghumkkad - Explore & Plan Your Trips</title>
        </head>
        <body>
        <ClerkLoading>
            <div className="w-full justify-center items-center flex bg-gray-900 h-[100vh] flex-col " >
                <h1 className=" text-[4rem] text-[#FF6F38]  ">Welcome to Ghumakkad</h1>
                <h5 className=" text-[1.5rem] text-[#FF6F38]  ">Great things take time! Loading your experience...</h5>
            </div>
        </ClerkLoading>
        <ClerkLoaded>
          {children}
        </ClerkLoaded>
          </body>
      </html>
    </ClerkProvider>
  );
}
