import './globals.scss';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimationProvider from '../components/AnimationProvider';
import Script from 'next/script';

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
    title: meta.title,
    description: meta.description,
    icons: {
      icon: [
        { url: '/images/logo.jpg' },
        { url: '/images/logo.jpg', sizes: '16x16', type: 'image/jpg' },
        { url: '/images/logo.jpg', sizes: '32x32', type: 'image/jpg' },
        { url: '/images/logo.jpg', sizes: '192x192', type: 'image/jpg' },
        { url: '/images/logo.jpg', sizes: '512x512', type: 'image/jpg' },
      ],
      apple: [
        { url: '/images/logo.jpg' },
      ],
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: 'https://akbatconstruction.com',
      siteName: 'AKBAT CONSTRUCTION',
      images: [
        {
          url: '/images/logo.jpg',
          width: 800,
          height: 600,
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/images/logo.jpg'],
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
    "logo": "https://akbatconstruction.com/images/logo.png",
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
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#ffffff" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AnimationProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AnimationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 