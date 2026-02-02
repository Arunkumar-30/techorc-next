import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Techorc | Software & IT Solutions Company",
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
  metadataBase: new URL("https://www.techorc.in"),
  robots: "index, follow",
  openGraph: {
    title: "Techorc | Software & IT Solutions Company",
    description:
      "Techorc is a trusted software and IT solutions company in India offering web development, mobile apps, custom software, and UI/UX design services.",
    url: "https://www.techorc.in",
    siteName: "Techorc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techorc | Software & IT Solutions Company",
    description:
      "Leading software and IT solutions company in India specializing in web development, mobile apps, and custom software.",
    images: ["/favicon.png"],
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
        <Header />
        <main className="min-h-screen">
          <div className="max-w-[2000px] mx-auto overflow-hidden">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
