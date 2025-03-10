'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from '../[slug]/page.module.scss';

const PencereKapiMontajiPage = () => {
  const t = useTranslations('Common');
  const serviceT = useTranslations('ServiceDetail.windowsDoors');
  const params = useParams();
  const locale = params.locale;

  const features = [
    {
      icon: '🪟',
      titleKey: 'features.windows',
      descriptionKey: 'features.windowsText'
    },
    {
      icon: '🚪',
      titleKey: 'features.doors',
      descriptionKey: 'features.doorsText'
    },
    {
      icon: '🔒',
      titleKey: 'features.security',
      descriptionKey: 'features.securityText'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    main2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href={`/${locale}/hizmetler`}>{t('services')}</Link> / {serviceT('title')}
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.serviceIntro}>
            <h1>{serviceT('title')}</h1>
            <p>{serviceT('description')}</p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>PENCERE & KAPI MONTAJI HİZMETLERİ</h2>
          
          <div className={styles.description}>
            <div>
              <p>Kaliteli pencere ve kapı montajı hizmetleri sunuyoruz. Enerji verimliliği yüksek ürünlerle evinizin konforunu artırıyoruz. Uzman ekibimizle, projelerinizi zamanında ve bütçenize uygun şekilde tamamlıyoruz.</p>
            </div>
            <div>
              <p>Pencere montajı, kapı montajı, PVC doğrama, alüminyum doğrama, ahşap doğrama, güvenlik sistemleri ve bakım-onarım hizmetleri sunuyoruz. Enerji tasarrufu sağlayan çözümlerle, ısıtma ve soğutma maliyetlerinizi düşürüyoruz.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main1}
                alt={serviceT('title')}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main2}
                alt={serviceT('title')}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <div className={styles.icon}>{feature.icon}</div>
                <h3>{serviceT(feature.titleKey)}</h3>
                <p>{serviceT(feature.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>{serviceT('cta.title')}</h2>
          <p>{serviceT('cta.description')}</p>
          <Link href={`/${locale}/iletisim`} className={styles.button}>
            {serviceT('cta.button')}
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PencereKapiMontajiPage; 