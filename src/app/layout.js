import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NMBTS \u2014 Business Networking, Advisory & Transitions | Navi Mumbai",
  description:
    "NMBTS is Navi Mumbai\u2019s premier business growth ecosystem \u2014 BNI referral networking, TAB peer advisory, Corporate Connections, business broking, franchising & distribution. Led by Pankaj Harwansh.",
  keywords:
    "BNI Navi Mumbai, business networking Navi Mumbai, peer advisory board Mumbai, The Alternative Board India, Corporate Connections Navi Mumbai, business broking Mumbai, buy sell business India, franchise advisory India, distribution business India, YBounce Ventures, DealsFlow Ventures, business coaching Navi Mumbai, CEO peer board Mumbai, SME advisory Navi Mumbai, Pankaj Harwansh, NMBTS, business growth Navi Mumbai, referral networking Mumbai, executive coaching Mumbai, business transitions India",
  openGraph: {
    title: "NMBTS | Navi Mumbai\u2019s Complete Business Growth Ecosystem",
    description:
      "From referral networking and peer advisory to M&A and franchising \u2014 NMBTS connects Navi Mumbai\u2019s business owners to the right platform at every stage of their journey.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NMBTS | Navi Mumbai\u2019s Complete Business Growth Ecosystem",
    description:
      "From referral networking and peer advisory to M&A and franchising \u2014 NMBTS connects Navi Mumbai\u2019s business owners to the right platform at every stage of their journey.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
