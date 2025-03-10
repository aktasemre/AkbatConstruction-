'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from '../page.module.scss';

const IcDekorasyonPage = () => {
  const t = useTranslations('Common');
  const serviceT = useTranslations('ServiceDetail.interiorDecoration');
  const params = useParams();
  const locale = params.locale;

  const features = [
    {
      icon: '🎨',
      titleKey: 'features.design',
      descriptionKey: 'İç mekan tasarımı ile yaşam alanlarınızı yeniliyoruz'
    },
    {
      icon: '🖌️',
      titleKey: 'features.painting',
      descriptionKey: 'Boya ve duvar kağıdı uygulamaları ile mekanlarınıza renk katıyoruz'
    },
    {
      icon: '💡',
      titleKey: 'features.lighting',
      descriptionKey: 'Aydınlatma çözümleri ile mekanlarınızı aydınlatıyoruz'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
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
          <h2 className={styles.tagline}>İÇ DEKORASYON HİZMETLERİ</h2>
          
          <div className={styles.description}>
            <div>
              <p>İç dekorasyon hizmetlerimizle yaşam alanlarınızı yeniliyor, fonksiyonel ve estetik çözümler sunuyoruz. Kaliteli malzemeler ve uzman işçilikle, mekanlarınızı dönüştürüyoruz.</p>
            </div>
            <div>
              <p>İç mekan tasarımı, boya ve duvar kağıdı, zemin kaplamaları, aydınlatma çözümleri, mobilya seçimi ve aksesuar danışmanlığı ile yaşam alanlarınızı kişiselleştiriyoruz. Modern ve fonksiyonel tasarımlarla, mekanlarınızı daha yaşanabilir hale getiriyoruz.</p>
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
                <h3>{feature.titleKey}</h3>
                <p>{feature.descriptionKey}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>İÇ DEKORASYON PROJENİZ İÇİN</h2>
          <p>Uzman ekibimizle iç dekorasyon projenizi hayata geçirelim.</p>
          <Link href={`/${locale}/iletisim`} className={styles.button}>
            BİZE ULAŞIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IcDekorasyonPage; 