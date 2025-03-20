import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as 'tr' | 'fr';
  
  const title = locale === 'tr' 
    ? 'AKBAT CONSTRUCTION - İnşaat ve Yapı Hizmetleri | Vannes, Fransa'
    : 'AKBAT CONSTRUCTION - Services de Construction | Vannes, France';
  
  const description = locale === 'tr'
    ? 'AKBAT CONSTRUCTION olarak 25 yıllık tecrübemizle Vannes ve çevresinde anahtar teslim ev, iç dekorasyon, dış cephe mantolama, çatı montajı ve tadilat hizmetleri sunuyoruz.'
    : 'Avec 25 ans d\'expérience, AKBAT CONSTRUCTION offre des services de construction de qualité à Vannes et ses environs, de la maison clé en main à la décoration intérieure, de l\'isolation extérieure à l\'installation de toiture.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://akbatconstruction.com/${locale}`,
      siteName: 'AKBAT CONSTRUCTION',
      images: [
        {
          url: 'https://akbatconstruction.com/images/hero-bg.jpg',
          width: 1200,
          height: 630,
          alt: 'AKBAT CONSTRUCTION',
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://akbatconstruction.com/images/hero-bg.jpg'],
    },
  };
} 