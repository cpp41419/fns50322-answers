import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

const config = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "FNS50322 Answers",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://answers.fns50322.com.au",
  code: process.env.NEXT_PUBLIC_QUALIFICATION_CODE || "FNS50322",
  qualification: process.env.NEXT_PUBLIC_QUALIFICATION_NAME || "Diploma of Finance and Mortgage Broking Management",
  industry: process.env.NEXT_PUBLIC_VERTICAL_INDUSTRY || "Finance",
};

export const metadata: Metadata = {
  title: {
    default: `${config.code} Questions & Answers | Mortgage Broker Training Australia`,
    template: `%s | ${config.code} Answers`,
  },
  description: `Get answers to 50+ common questions about ${config.code} ${config.qualification}. The mandatory qualification for becoming a licensed Mortgage Broker in Australia. Independent Q&A resource.`,
  keywords: [
    "FNS50322 assessment answers",
    "Diploma of Finance Mortgage Broking course",
    "Become a mortgage broker Australia",
    "FNS50322 vs FNS50320",
    "mortgage broker qualification",
    "MFAA membership requirements",
    "FBAA membership",
    "credit licence Australia",
  ],
  metadataBase: new URL(config.url),
  openGraph: {
    title: `${config.code} Questions & Answers | Mortgage Broker Training`,
    description: `Your complete Q&A resource for ${config.qualification} in Australia. Required for MFAA/FBAA membership.`,
    url: config.url,
    siteName: config.name,
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#047857",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={cn(
        "font-body antialiased min-h-screen flex flex-col overflow-x-hidden max-w-[100vw]",
        inter.variable,
        poppins.variable
      )}>
        <Header />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
