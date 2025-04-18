'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from '../page.module.scss';

const CatiMontajPage = () => {
  const t = useTranslations('Common');
  const serviceT = useTranslations('ServiceDetail.roofing');
  const params = useParams();
  const locale = params.locale;

  const features = [
    {
      icon: '🏠',
      titleKey: 'features.installation',
      descriptionKey: 'features.installationText'
    },
    {
      icon: '🔧',
      titleKey: 'features.repair',
      descriptionKey: 'features.repairText'
    },
    {
      icon: '🌡️',
      titleKey: 'features.insulation',
      descriptionKey: 'features.insulationText'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    main2: 'https://images.unsplash.com/photo-1622993295842-4de4b13e0cbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
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
          <h2 className={styles.tagline}>{serviceT('tagline')}</h2>
          
          <div className={styles.description}>
            <div>
              <p>{serviceT('content.paragraph1')}</p>
            </div>
            <div>
              <p>{serviceT('content.paragraph2')}</p>
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

export default CatiMontajPage; 