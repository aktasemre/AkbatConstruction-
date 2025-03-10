'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './page.module.scss';

const ServicesPage = () => {
  const t = useTranslations('Common');
  const servicesPageT = useTranslations('ServicesPage');
  const servicesT = useTranslations('ServicesPage.services');
  const params = useParams();
  const locale = params.locale;

  const services = [
    {
      id: 1,
      titleKey: 'services.turnkey',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/anahtar-teslim-ev`
    },
    {
      id: 2,
      titleKey: 'services.roofing',
      image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/cati-montaji`
    },
    {
      id: 3,
      titleKey: 'services.interior',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/ic-dekorasyon`
    },
    {
      id: 4,
      titleKey: 'services.roughConstruction',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/kaba-insaat`
    },
    {
      id: 5,
      titleKey: 'services.exteriorInsulation',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/dis-cephe-mantolama`
    },
    {
      id: 6,
      titleKey: 'services.materialSales',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/malzeme-satisi`
    },
    {
      id: 7,
      titleKey: 'services.windowsDoors',
      image: 'https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/pencere-kapi-montaji`
    },
    {
      id: 8,
      titleKey: 'services.renovation',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/tadilat-tamirat`
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>{servicesPageT('title')}</h1>
          <div className={styles.description}>
            <div className={styles.leftContent}>
              <p>{servicesPageT('description1')}</p>
            </div>
            <div className={styles.rightContent}>
              <p>{servicesPageT('description2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link href={service.link} key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image
                    src={service.image}
                    alt={servicesT(service.titleKey)}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover' }}
                    priority={service.id <= 4}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3>{servicesT(service.titleKey)}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>AKBAT CONSTRUCTION</h2>
          <p>{t('since')}</p>
          <Link href={`/${locale}/iletisim`} className={styles.button}>
            {t('contactUs')}
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 