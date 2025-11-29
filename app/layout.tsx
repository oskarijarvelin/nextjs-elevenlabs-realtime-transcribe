import '#/styles/globals.css';


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Next.js Playground', template: '%s | Next.js Playground' },
  metadataBase: new URL('https://app-router.vercel.app'),
  description:
    'A playground to explore Next.js features such as nested layouts, instant loading states, streaming, and component level data fetching.',
  openGraph: {
    title: 'Next.js Playground',
    description:
      'A playground to explore Next.js features such as nested layouts, instant loading states, streaming, and component level data fetching.',
    images: [`/api/og?title=Next.js Playground`],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body
        className={`overflow-y-scroll bg-gray-950 font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
