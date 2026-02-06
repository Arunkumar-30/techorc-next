import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://support.techorc.in"),
  title: {
    default: "Techorc | Software & IT Solutions Company India",
    template: "%s | Techorc",
  },
  description:
    "Techorc is a leading software and IT solutions company in India, delivering web development, mobile app development, custom software, UI/UX design, and digital solutions.",
  keywords: [
    "Techorc",
    "Software Development Company India",
    "IT Solutions Company Coimbatore",
    "Web Development Company India",
    "Mobile App Development Services",
    "Custom Software Development",
    "Tailored IT Solutions",
    "Digital Transformation Services",
    "Cloud Integration Solutions",
    "AI & ML Development India",
    "Enterprise Software Development",
    "UI UX Design Services India",
  ],
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Techorc | Software & IT Solutions Company India",
    description:
      "Techorc is a trusted software and IT solutions company in India offering web development, mobile apps, custom software, and UI/UX design services.",
    url: "https://support.techorc.in",
    siteName: "Techorc",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techorc | Software & IT Solutions Company India",
    description:
      "Leading software and IT solutions company in India specializing in web development, mobile apps, and custom software.",
    images: ["https://support.techorc.in/images/hero-vector.svg"],
  },
};


import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">


      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Techorc",
                  "url": "https://support.techorc.in",
                  "logo": "https://support.techorc.in/favicon.png",
                  "sameAs": [
                    "https://www.linkedin.com/company/techorc",
                    "https://www.facebook.com/techorc"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "name": "Techorc",
                  "url": "https://support.techorc.in",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Coimbatore",
                    "addressRegion": "Tamil Nadu",
                    "addressCountry": "IN"
                  },
                  "areaServed": ["India", "Global"]
                }
              ]
            }),
          }}
        />

        <Header />
        <main className="min-h-screen">
          <div className="max-w-[2000px] mx-auto">
            {children}
          </div>
        </main>
        <Footer />


      </body>
    </html>
  );
}
