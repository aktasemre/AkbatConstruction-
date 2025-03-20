import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as 'tr' | 'fr';
  
  const title = locale === 'tr' 
    ? 'Hizmetlerimiz - AKBAT CONSTRUCTION | İnşaat ve Yapı Çözümleri'
    : 'Nos Services - AKBAT CONSTRUCTION | Solutions de Construction';
  
  const description = locale === 'tr'
    ? 'AKBAT CONSTRUCTION olarak sunduğumuz anahtar teslim ev, çatı montajı, iç dekorasyon, dış cephe mantolama ve diğer yapı hizmetlerini keşfedin.'
    : 'Découvrez les services de construction proposés par AKBAT CONSTRUCTION: maison clé en main, montage de toiture, décoration intérieure, isolation extérieure et autres services.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://akbatconstruction.com/${locale}/hizmetler`,
      siteName: 'AKBAT CONSTRUCTION',
      images: [
        {
          url: 'https://akbatconstruction.com/images/logo.jpg',
          width: 800,
          height: 600,
          alt: 'AKBAT CONSTRUCTION Hizmetleri',
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://akbatconstruction.com/images/logo.jpg'],
    },
  };
} 