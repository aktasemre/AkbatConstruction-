import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as 'tr' | 'fr';
  
  const title = locale === 'tr' 
    ? 'Hakkımızda - AKBAT CONSTRUCTION | 25 Yıllık Tecrübe'
    : 'À Propos - AKBAT CONSTRUCTION | 25 Ans d\'Expérience';
  
  const description = locale === 'tr'
    ? 'AKBAT CONSTRUCTION\'ın hikayesini ve 25 yıllık tecrübemizi keşfedin. Vannes, Fransa\'da yüksek kaliteli inşaat ve yapı hizmetleri sunuyoruz.'
    : 'Découvrez l\'histoire d\'AKBAT CONSTRUCTION et nos 25 ans d\'expérience. Nous offrons des services de construction de haute qualité à Vannes, France.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://akbatconstruction.com/${locale}/hakkimizda`,
      siteName: 'AKBAT CONSTRUCTION',
      images: [
        {
          url: 'https://akbatconstruction.com/images/office.jpg',
          width: 800,
          height: 600,
          alt: 'AKBAT CONSTRUCTION Ofisi',
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://akbatconstruction.com/images/office.jpg'],
    },
  };
} 