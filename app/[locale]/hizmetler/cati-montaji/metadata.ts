import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as 'tr' | 'fr';
  
  const title = locale === 'tr' 
    ? 'Çatı Montajı ve Onarımı - AKBAT CONSTRUCTION | Vannes, Fransa'
    : 'Montage et Réparation de Toiture - AKBAT CONSTRUCTION | Vannes, France';
  
  const description = locale === 'tr'
    ? 'AKBAT CONSTRUCTION uzman ekibiyle çatı montajı, onarımı ve izolasyonu hizmetleri sunuyor. Kaliteli malzeme ve işçilik garantisiyle çatınızı güvence altına alıyoruz.'
    : 'AKBAT CONSTRUCTION offre des services de montage, réparation et isolation de toiture avec une équipe d\'experts. Nous assurons votre toiture avec une garantie de matériaux et de main-d\'œuvre de qualité.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://akbatconstruction.com/${locale}/hizmetler/cati-montaji`,
      siteName: 'AKBAT CONSTRUCTION',
      images: [
        {
          url: 'https://akbatconstruction.com/images/logo.jpg',
          width: 800,
          height: 600,
          alt: 'AKBAT CONSTRUCTION Çatı Montajı',
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