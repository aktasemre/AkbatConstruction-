import { Metadata } from 'next';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = params.locale as 'tr' | 'fr';
  
  const title = locale === 'tr' 
    ? 'İletişim - AKBAT CONSTRUCTION | Bize Ulaşın'
    : 'Contact - AKBAT CONSTRUCTION | Contactez-nous';
  
  const description = locale === 'tr'
    ? 'AKBAT CONSTRUCTION ile iletişime geçin. Vannes\'te bulunan ofisimiz ve iletişim bilgilerimiz ile inşaat ve yapı projeleriniz için hizmetinizdeyiz.'
    : 'Contactez AKBAT CONSTRUCTION. Notre bureau à Vannes et nos coordonnées sont à votre service pour vos projets de construction.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://akbatconstruction.com/${locale}/iletisim`,
      siteName: 'AKBAT CONSTRUCTION',
      images: [
        {
          url: 'https://akbatconstruction.com/images/logo.jpg',
          width: 800,
          height: 600,
          alt: 'AKBAT CONSTRUCTION İletişim',
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