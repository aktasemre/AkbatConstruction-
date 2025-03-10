'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from '../page.module.scss';

const KabaInsaatPage = () => {
  const t = useTranslations('Common');
  const serviceT = useTranslations('ServiceDetail.roughConstruction');
  const params = useParams();
  const locale = params.locale;

  const features = [
    {
      icon: '🏗️',
      titleKey: 'features.foundation',
      descriptionKey: 'Temel atma işlemleri ile sağlam bir yapı inşa ediyoruz'
    },
    {
      icon: '🧱',
      titleKey: 'features.concrete',
      descriptionKey: 'Betonarme işleri ile binanızın iskeletini oluşturuyoruz'
    },
    {
      icon: '🔌',
      titleKey: 'features.electrical',
      descriptionKey: 'Elektrik altyapısı ile binanızı geleceğe hazırlıyoruz'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
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
          <h2 className={styles.tagline}>KABA İNŞAAT HİZMETLERİ</h2>
          
          <div className={styles.description}>
            <div>
              <p>Kaba inşaat hizmetlerimizle binanızın temelinden çatısına kadar tüm yapısal unsurlarını inşa ediyoruz. Kaliteli malzemeler ve uzman işçilikle, sağlam ve dayanıklı yapılar inşa ediyoruz.</p>
            </div>
            <div>
              <p>Temel atma, betonarme işleri, duvar örme, çatı konstrüksiyonu, yapısal izolasyon, tesisat altyapısı ve elektrik altyapısı ile binanızın kaba inşaatını tamamlıyoruz. Depreme dayanıklı yapılar inşa ederek, güvenliğinizi ön planda tutuyoruz.</p>
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
          <h2>KABA İNŞAAT PROJENİZ İÇİN</h2>
          <p>Uzman ekibimizle kaba inşaat projenizi hayata geçirelim.</p>
          <Link href={`/${locale}/iletisim`} className={styles.button}>
            BİZE ULAŞIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KabaInsaatPage; 