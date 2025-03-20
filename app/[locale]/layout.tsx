import './globals.scss';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimationProvider from '../components/AnimationProvider';
import PageTransition from '../components/PageTransition';
import Script from 'next/script';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

// Dil bazlı meta veriler
const metadataByLocale = {
  tr: {
    title: 'AKBAT CONSTRUCTION - İnşaat ve Yapı Hizmetleri | Vannes, Fransa',
    description: 'AKBAT CONSTRUCTION olarak 25 yıllık tecrübemizle Vannes ve çevresinde anahtar teslim ev, iç dekorasyon, dış cephe mantolama, çatı montajı ve tadilat hizmetleri sunuyoruz.',
  },
  fr: {
    title: 'AKBAT CONSTRUCTION - Services de Construction | Vannes, France',
    description: 'Avec 25 ans d\'expérience, AKBAT CONSTRUCTION offre des services de construction de qualité à Vannes et ses environs, de la maison clé en main à la décoration intérieure, de l\'isolation extérieure à l\'installation de toiture.',
  }
};

export function generateMetadata({ params }: { params: { locale: string } }) {
  const locale = params.locale as 'tr' | 'fr';
  const meta = metadataByLocale[locale] || metadataByLocale.fr;

  return {
    metadataBase: new URL('https://akbatconstruction.com'),
    title: meta.title,
    description: meta.description,
    icons: {
      icon: [
        { url: 'https://akbatconstruction.com/images/logo.jpg' },
        { url: 'https://akbatconstruction.com/images/logo.jpg', sizes: '16x16', type: 'image/jpeg' },
        { url: 'https://akbatconstruction.com/images/logo.jpg', sizes: '32x32', type: 'image/jpeg' },
        { url: 'https://akbatconstruction.com/images/logo.jpg', sizes: '192x192', type: 'image/jpeg' },
        { url: 'https://akbatconstruction.com/images/logo.jpg', sizes: '512x512', type: 'image/jpeg' },
      ],
      apple: [
        { url: 'https://akbatconstruction.com/images/logo.jpg' },
      ],
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://akbatconstruction.com/${locale}`,
      siteName: 'AKBAT CONSTRUCTION',
      images: [
        {
          url: 'https://akbatconstruction.com/images/logo.jpg',
          width: 800,
          height: 600,
          alt: 'AKBAT CONSTRUCTION Logo',
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['https://akbatconstruction.com/images/logo.jpg'],
    },
    alternates: {
      canonical: `https://akbatconstruction.com/${locale}`,
      languages: {
        'fr': 'https://akbatconstruction.com/fr',
        'tr': 'https://akbatconstruction.com/tr',
      },
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'fr' }];
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Schema.org yapısal verisi
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AKBAT CONSTRUCTION",
    "url": "https://akbatconstruction.com",
    "logo": "https://akbatconstruction.com/images/logo.jpg",
    "image": "https://akbatconstruction.com/images/logo.jpg",
    "founder": {
      "@type": "Person",
      "name": "Yusuf Aktas",
      "jobTitle": "Founder & CEO"
    },
    "sameAs": [
      "https://www.facebook.com/akbatconstruction",
      "https://www.instagram.com/akbatconstruction"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8 RUE THIERS",
      "addressLocality": "VANNES",
      "postalCode": "56000",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33 6 30 50 85 36",
      "contactType": "customer service",
      "availableLanguage": ["French", "Turkish"]
    },
    "description": locale === 'fr' 
      ? "Avec 25 ans d'expérience, AKBAT CONSTRUCTION offre des services de construction de qualité à Vannes et ses environs."
      : "AKBAT CONSTRUCTION olarak 25 yıllık tecrübemizle Vannes ve çevresinde kaliteli inşaat ve yapı hizmetleri sunuyoruz."
  };

  return (
    <html lang={locale}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <Script id="font-awesome-load">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const fontAwesomeLink = document.querySelector('link[href*="font-awesome"]');
              if (fontAwesomeLink) fontAwesomeLink.setAttribute('media', 'all');
            });
          `}
        </Script>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 0) }}
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AnimationProvider>
            <Header />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
            <SpeedInsights />
          </AnimationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 