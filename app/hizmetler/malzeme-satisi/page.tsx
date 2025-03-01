'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[slug]/page.module.scss';

const MalzemeSatisPage = () => {
  const features = [
    {
      icon: '🏗️',
      title: 'YAPI MALZEMELERİ',
      description: 'Çimento, demir, tuğla, kum ve çakıl gibi temel yapı malzemelerinde kaliteli ürünler sunuyoruz.'
    },
    {
      icon: '🎨',
      title: 'BOYA VE YALITIM',
      description: 'İç ve dış cephe boyaları, su ve ısı yalıtım malzemelerinde geniş ürün yelpazesi sunuyoruz.'
    },
    {
      icon: '🔧',
      title: 'TEKNİK MALZEMELER',
      description: 'Elektrik, su tesisatı ve hırdavat malzemelerinde profesyonel çözümler sağlıyoruz.'
    }
  ];

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/hizmetler">Hizmetler</Link> / Malzeme Satışı
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.serviceIntro}>
            <h1>MALZEME SATIŞI</h1>
            <p>AKBAT CONSTRUCTION olarak, inşaat sektörünün tüm ihtiyaçlarına yönelik geniş ürün yelpazemizle hizmet veriyoruz. Yapı malzemelerinden teknik ekipmanlara, boyadan yalıtım malzemelerine kadar her türlü inşaat malzemesini uygun fiyatlarla sunuyoruz.</p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>KALİTELİ MALZEME, UYGUN FİYAT</h2>
          
          <div className={styles.description}>
            <div>
              <p>Malzeme satışı hizmetimizde, sektörün önde gelen markalarının ürünlerini müşterilerimizle buluşturuyoruz. Geniş stok ağımız ve güçlü tedarik zincirimiz sayesinde, ihtiyacınız olan malzemeleri hızlı ve güvenilir bir şekilde temin ediyoruz.</p>
            </div>
            <div>
              <p>Profesyonel ekibimiz, projeniz için en uygun malzemelerin seçiminde size rehberlik ediyor. Teknik destek ve danışmanlık hizmetlerimizle, doğru malzeme seçimi yapmanızı sağlıyoruz. Rekabetçi fiyatlarımız ve esnek ödeme seçeneklerimizle bütçenize uygun çözümler sunuyoruz.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Malzeme Satışı"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Malzeme Satışı"
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
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>İNŞAAT MALZEMELERİ İÇİN</h2>
          <p>Kaliteli malzeme ve uygun fiyat için hemen bizimle iletişime geçin.</p>
          <Link href="/iletisim" className={styles.button}>
            FİYAT TEKLİFİ ALIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MalzemeSatisPage; 