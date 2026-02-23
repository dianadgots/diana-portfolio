import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dianagots.com"),
  title: "Diana Gots - Brand Marketing & Content Strategy",
  description:
    "I'm Diana Gots, a brand marketing and content strategy expert. I help brands grow their business through brand strategy, DTC growth, and growth marketing.",
  openGraph: {
    title: "Diana Gots - Brand Marketing & Content Strategy",
    description:
      "I'm Diana Gots, a brand marketing and content strategy expert. I help brands grow their business through brand strategy, DTC growth, and growth marketing.",
    images: ["/imgs/footer.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diana Gots - Brand Marketing & Content Strategy",
    description:
      "I'm Diana Gots, a brand marketing and content strategy expert. I help brands grow their business through brand strategy, DTC growth, and growth marketing.",
    images: ["/imgs/footer.png"],
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/63186de99f692377753c6ed7/63186e5fd8d88871d8d456ac_Favicon%20(1).png",
    apple:
      "https://cdn.prod.website-files.com/63186de99f692377753c6ed7/63186ecb04abef4372c24298_webclip%20(1).png",
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
        <link
          rel="stylesheet"
          href="/css/webflow.min.css"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root { --app-height: 100%; }
          .cover_section { height: var(--app-height); }
          html:not(.w-editor).section.loader { opacity: 0; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
