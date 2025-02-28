import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghumakkad - AI-Powered Travel Planning & Smart Itineraries",
  description: "Plan your dream trip with Ghumakkad! Get AI-powered travel recommendations, custom itineraries, real-time budget estimates, and seamless trip planning.",
  keywords: "AI trip planner, travel planning, budget travel, travel itineraries, explore destinations, smart travel, Gemini 1.5 AI, personalized travel, vacation planner, trip budget estimator",
  openGraph: {
    title: "Ghumakkad - AI-Powered Travel Planning & Itineraries",
    description: "Plan your trips with AI! Get personalized recommendations, smart travel itineraries, and real-time budget insights with Ghumakkad.",
    url: "https://ghumakkad.vercel.app",
    siteName: "Ghumakkad",
    images: [
      {
        url: "/ghumakkad-og.png", // Replace with a high-quality OG image
        width: 1200,
        height: 630,
        alt: "Ghumakkad - AI-Powered Travel Planning",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghumakkad - AI-Powered Travel Planning & Itineraries",
    description: "Plan your trips with AI! Get personalized recommendations, smart travel itineraries, and real-time budget insights with Ghumakkad.",
    images: ["/ghumakkad-og.png"], // Ensure this image exists
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
        <link rel="canonical" href="https://ghumakkad.vercel.app" />
        <meta name="publisher" content="Ghumakkad Team" />
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

          <title>Ghumkkad -  AI-Powered Travel Planning & Smart Itineraries</title>
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
