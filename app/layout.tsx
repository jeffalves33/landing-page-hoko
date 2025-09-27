import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: 'ho.ko AI.nalytics - Inteligência Preditiva para Gestão de Marca',
  description: 'A primeira plataforma brasileira de inteligência preditiva para gestão de marca e comunicação. Decisões mais inteligentes, marcas mais fortes.',
  keywords: 'inteligência preditiva, gestão de marca, analytics, comunicação, marketing, brand health',
  authors: [{ name: 'ho.ko AI.nalytics' }],
  creator: 'ho.ko AI.nalytics',
  openGraph: {
    title: 'ho.ko AI.nalytics - Inteligência Preditiva para Gestão de Marca',
    description: 'A primeira plataforma brasileira de inteligência preditiva para gestão de marca e comunicação.',
    url: 'https://hoko-analytics.com',
    siteName: 'ho.ko AI.nalytics',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ho.ko AI.nalytics - Inteligência Preditiva para Gestão de Marca',
    description: 'A primeira plataforma brasileira de inteligência preditiva para gestão de marca e comunicação.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ho.ko AI.nalytics",
              "url": "https://hoko-analytics.com",
              "description": "A primeira plataforma brasileira de inteligência preditiva para gestão de marca e comunicação",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "areaServed": "BR",
                "availableLanguage": "Portuguese"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}