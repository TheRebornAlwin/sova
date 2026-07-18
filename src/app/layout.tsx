import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F4F1EA",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sovarelief.com"),
  title: "Sova | Premium At-Home Tension Release",
  description:
    "The Nuro is a heated shiatsu kneading massager that works the knots out of your neck and shoulders like a real massage therapist's hands. Real relief at home, whenever you need it.",
  // Favicon is versioned (-v2) to bust the browser/CDN cache when replaced.
  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon-v2.ico",
    apple: "/favicon-v2.ico",
  },
  openGraph: {
    title: "Sova | Premium At-Home Tension Release",
    description:
      "The Nuro works the knots out of your neck and shoulders like a real massage therapist's hands. Real relief at home, whenever you need it.",
    siteName: "Sova",
    url: "https://sovarelief.com",
    images: [{ url: "/og-image.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel — Sova live Pixel/Dataset ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2209407996525613');
fbq('track', 'PageView');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2209407996525613&ev=PageView&noscript=1" alt=""/>`,
          }}
        />
        {/* Microsoft Clarity — replace SOVA_CLARITY_ID with your real project ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "SOVA_CLARITY_ID");`,
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
