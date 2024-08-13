import BusinessServices from "@/components/BusinessServices";
import ScrollUp from "@/components/Common/ScrollUp";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LatestProject from "@/components/LatestProject";
import OurWork from "@/components/OurWork";
import PositiveKeyword from "@/components/PositiveKeywords";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cubicus.io"),
  title: "Website Design and Development Services - Cubicus",
  alternates: {
    canonical: "https://www.cubicus.io",
  },
  description:
    "Your partner for Website Design and Development, Blockchain Development, UI/UX Design, Logo Design, Company Branding, or any Graphic Design service.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.cubicus.io",
    siteName: "Cubicus.io",
    images: [
      {
        url: "https://www.cubicus.io/images/og-images/home.png",
        width: 1200,
        height: 630,
        alt: "Cubicus.io",
      },
      {
        url: "https://www.cubicus.io/images/og-images/home-mobile.png",
        width: 396,
        height: 700,
        alt: "Cubicus.io",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@cubicus.io",
    creatorId: "https://twitter.com/cubicus.io",
    description:
      "Your partner for Website Design and Development, Blockchain Development, UI/UX Design, Logo Design, Company Branding, or any Graphic Design service.",
    title: "Website Design and Development Services - Cubicus",
    site: "@cubicus.io",
  },
  applicationName: "Cubicus.io",
  authors: {
    name: "Cubicus.io",
  },
  category: "Software Development",
  creator: "Cubicus.io",
  generator: "Cubicus.io",
  keywords:
    "Cubicus.io, cubicus, web app development, custom web app development, design web-apps, progressive web app development company, ui and ux design services, ui ux design and development services, ux design agency los angeles, urban writers, ghost writers for hire, ghostwriting services, how to find a ghostwriter, urban poets, ghostwriters near me, web design for family lawyer, franchise web design, portland web design, web design packages, tampa web design, web design companies near me, web design new jersey, shopify website development services, shopify website designer, website designers shopify, shopify website design services, ecommerce website cost, shopify website creator, modern logo design, interior design logo, circle logo design, etsy logo design, vintage logo design, truck logo design, church logo design, eagle logo design, farming logo design, construction logo design, wolf logo design, custom wordpress development, wordpress web design company, wordpress development companies, cheap hosting web window, small business web site hosting, ecommerce web site hosting, cheap web hosting services, cartoon video maker, cartoon video maker app, create a cartoon video, best animation video maker, mobile app development service, mobile developer, app developers near me, app developer near me, flutter app development company",
  robots: "all",
  icons: "/logo.svg",
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Services />
      <Technologies />
      <Process />
      <OurWork />
      <PositiveKeyword />
      <LatestProject />
      <BusinessServices />
      <Testimonials />
      <FAQ />
    </main>
  );
}
