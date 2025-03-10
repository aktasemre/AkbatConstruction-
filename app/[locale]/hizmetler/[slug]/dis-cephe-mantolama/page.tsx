'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from '../page.module.scss';

const DisCepheMantolama = () => {
  const t = useTranslations('Common');
  const serviceT = useTranslations('ServiceDetail.exteriorInsulation');
  const params = useParams();
  const locale = params.locale;

  const features = [
    {
      icon: '🧊',
      titleKey: 'features.insulation',
      descriptionKey: 'Isı yalıtımı ile enerji tasarrufu sağlar'
    },
    {
      icon: '🧱',
      titleKey: 'features.rendering',
      descriptionKey: 'Dış cephe sıvası ile binanızı korur'
    },
    {
      icon: '🎨',
      titleKey: 'features.painting',
      descriptionKey: 'Dış cephe boyası ile estetik görünüm'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
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
          <h2 className={styles.tagline}>DIŞ CEPHE MANTOLAMA HİZMETLERİ</h2>
          
          <div className={styles.description}>
            <div>
              <p>Dış cephe mantolama hizmetlerimizle binanızın enerji verimliliğini artırıyor, ısı kaybını önlüyor ve dış görünümünü güzelleştiriyoruz. Kaliteli malzemeler ve uzman işçilikle, binanızın değerini artırıyoruz.</p>
            </div>
            <div>
              <p>Isı yalıtımı, dış cephe sıvası, dış cephe boyası, cephe onarımı ve dekoratif uygulamalar ile binanızın dış cephesini yeniliyoruz. Enerji tasarrufu sağlayan çözümlerle, ısıtma ve soğutma maliyetlerinizi düşürüyoruz.</p>
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
          <h2>DIŞ CEPHE MANTOLAMA PROJENİZ İÇİN</h2>
          <p>Uzman ekibimizle dış cephe mantolama projenizi hayata geçirelim.</p>
          <Link href={`/${locale}/iletisim`} className={styles.button}>
            BİZE ULAŞIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DisCepheMantolama; 