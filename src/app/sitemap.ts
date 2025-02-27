import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ghumakad.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://ghumakad.vercel.app/contact",
      lastModified: new Date(),
    },
    {
      url: "https://ghumakad.vercel.app/palnatrip",
      lastModified: new Date(),
    },
  ];
}
