import { Metadata } from "next";
import Layout from "@/components/Common/Layout";
import SessionWrapper from "@/components/SessionWrapper";
import Script from "next/script";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cubicus.io"),
  title: {
    template: "%s - Cubicus",
    default: "Cubicus",
  },
  alternates: {
    canonical: "https://www.cubicus.io",
  },
  description:
    "Cubicus is a software development company that provides web development, mobile app development, and digital marketing services.",
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
      "Cubicus.io is a software development company that provides web development, mobile app development, and digital marketing services.",
    title: {
      template: "%s - Cubicus",
      default: "Cubicus.io",
    },
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

export default function RootLayout({
  children,
  session, // Add session as a prop
}: {
  children: React.ReactNode;
  session: any; // Adjust type as necessary
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <link rel="apple-touch-icon image_src" href="/logo.svg" />
        <link rel="apple-touch-icon-image image_src" href="/logo.svg" />
        <link rel="apple-touch-icon-precomposed image_src" href="/logo.svg" />
        <meta name="google-adsense-account" content="ca-pub-5473878394117822" />
      </head>

      <body className="!scroll-smooth bg-[#F9F9FB]">
        <SessionWrapper session={session}>
          <Layout>{children}</Layout>
        </SessionWrapper>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '508492424930927');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=508492424930927&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5473878394117822"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
