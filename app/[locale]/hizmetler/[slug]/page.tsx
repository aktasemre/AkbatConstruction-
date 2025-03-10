'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { notFound, useParams } from 'next/navigation';
import styles from './page.module.scss';

const ServiceDetailPage = ({ params }: { params: { slug: string, locale: string } }) => {
  const t = useTranslations('Common');
  const serviceT = useTranslations('ServiceDetail');
  const { locale } = params;
  
  // Slug'a göre servis detaylarını belirle
  const getServiceKey = (slug: string) => {
    switch (slug) {
      case 'anahtar-teslim-ev':
        return 'turnkeyHomes';
      case 'cati-montaji':
        return 'roofing';
      case 'dis-cephe-mantolama':
        return 'exteriorInsulation';
      case 'ic-dekorasyon':
        return 'interiorDecoration';
      case 'kaba-insaat':
        return 'roughConstruction';
      case 'malzeme-satisi':
        return 'materialSales';
      case 'pencere-kapi-montaji':
        return 'windowsDoors';
      case 'tadilat-tamirat':
        return 'renovation';
      default:
        return null;
    }
  };

  const serviceKey = getServiceKey(params.slug);
  
  if (!serviceKey) {
    notFound();
  }

  // Servis özelliklerini al
  const getFeatures = (key: string) => {
    const features = [
      serviceT(`${key}.features.planning`),
      serviceT(`${key}.features.design`),
      serviceT(`${key}.features.permits`),
      serviceT(`${key}.features.construction`),
      serviceT(`${key}.features.interior`),
      serviceT(`${key}.features.exterior`),
      serviceT(`${key}.features.landscaping`)
    ];
    
    return features.filter(feature => feature !== undefined && feature !== '');
  };

  const features = getFeatures(serviceKey);

  // Servis için görsel URL'si
  const getServiceImage = (slug: string) => {
    switch (slug) {
      case 'anahtar-teslim-ev':
        return 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
      case 'cati-montaji':
        return 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
      case 'dis-cephe-mantolama':
        return 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
      case 'ic-dekorasyon':
        return 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
      case 'kaba-insaat':
        return 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
      case 'malzeme-satisi':
        return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
      case 'pencere-kapi-montaji':
        return 'https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
      case 'tadilat-tamirat':
        return 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
      default:
        return 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
    }
  };

  return (
    <div className={styles.serviceDetailPage}>
      <div className={styles.hero}>
        <div className={styles.container}>
          <h1>{serviceT(`${serviceKey}.title`)}</h1>
          <p>{serviceT(`${serviceKey}.description`)}</p>
        </div>
        <div className={styles.heroImage}>
          <Image
            src={getServiceImage(params.slug)}
            alt={serviceT(`${serviceKey}.title`)}
            width={1920}
            height={1080}
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.features}>
            <h2>{serviceT(`${serviceKey}.features.title`)}</h2>
            <div className={styles.featuresList}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <i className="fas fa-check"></i>
                  </div>
                  <div className={styles.featureText}>{feature}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <div className={styles.container}>
          <h2>{serviceT('cta.title')}</h2>
          <Link href={`/${locale}/iletisim`} className={styles.ctaButton}>
            {serviceT('cta.button')}
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage; 