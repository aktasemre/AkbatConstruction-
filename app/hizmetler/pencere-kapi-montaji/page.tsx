'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[slug]/page.module.scss';

const PencereKapiMontajPage = () => {
  const features = [
    {
      icon: '🚪',
      title: 'KAPI MONTAJI',
      description: 'İç kapı, dış kapı ve güvenlik kapısı montajlarını profesyonel ekibimizle gerçekleştiriyoruz.'
    },
    {
      icon: '🪟',
      title: 'PENCERE MONTAJI',
      description: 'PVC, alüminyum ve ahşap pencere sistemlerinin montaj ve değişim işlemlerini yapıyoruz.'
    },
    {
      icon: '🛠️',
      title: 'TAMİR & BAKIM',
      description: 'Mevcut kapı ve pencerelerinizin tamir, bakım ve yenileme işlemlerini uzman ekibimizle sağlıyoruz.'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    main2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail1: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail2: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/hizmetler">Hizmetler</Link> / Pencere & Kapı Montajı
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.serviceIntro}>
            <h1>PENCERE & KAPI MONTAJI</h1>
            <p>AKBAT CONSTRUCTION olarak, yaşam alanlarınızın güvenliğini ve konforunu artıracak kapı ve pencere çözümleri sunuyoruz. Modern sistemler ve kaliteli malzemelerle, enerji tasarrufu sağlayan, ses yalıtımı yüksek ve estetik görünümlü kapı ve pencereler monte ediyoruz.</p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>KALİTELİ MONTAJ, UZUN ÖMÜRLÜ KULLANIM</h2>
          
          <div className={styles.description}>
            <div>
              <p>Kapı ve pencere montaj hizmetlerimizde, mekanınızın stiline ve ihtiyaçlarınıza uygun çözümler üretiyoruz. Isı ve ses yalıtımı sağlayan, güvenlik standartlarını karşılayan, estetik görünümlü ürünleri profesyonel montaj hizmetiyle sunuyoruz.</p>
            </div>
            <div>
              <p>PVC, alüminyum ve ahşap sistemlerde uzman ekibimizle, montaj öncesi ölçüm ve planlama aşamasından, montaj sonrası kontrol ve bakım hizmetlerine kadar eksiksiz bir hizmet sunuyoruz. Garanti kapsamında montaj ve satış sonrası destek hizmetleriyle yanınızdayız.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main1}
                alt="Pencere & Kapı Montajı"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main2}
                alt="Pencere & Kapı Montajı"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <div className={styles.icon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.imageGrid} style={{ marginTop: '4rem' }}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.detail1}
                alt="Pencere & Kapı Montajı Detay"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.detail2}
                alt="Pencere & Kapı Montajı Detay"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>PENCERE & KAPI PROJENİZ İÇİN</h2>
          <p>Ücretsiz keşif ve fiyat teklifi için hemen bizimle iletişime geçin.</p>
          <Link href="/iletisim" className={styles.button}>
            KEŞİF TALEBİ OLUŞTURUN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PencereKapiMontajPage; 