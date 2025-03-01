'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[slug]/page.module.scss';

const DisMantolamaPage = () => {
  const features = [
    {
      icon: '🏗️',
      title: 'SIVA VE MONTAJ',
      description: 'Profesyonel ekibimizle, binalarınızın dış yüzeyini en iyi şekilde hazırlayarak, yüksek kaliteli malzemeler kullanıyoruz.'
    },
    {
      icon: '🎨',
      title: 'BOYA UYGULAMALARI',
      description: 'UV ışınlarına ve hava koşullarına dayanıklı boyalar ile estetik görünümle birlikte yüksek koruma sağlıyoruz.'
    },
    {
      icon: '🌡️',
      title: 'ISI YALITIM SİSTEMLERİ',
      description: 'Enerji verimliliğini artıran dış cephe ısı yalıtım çözümlerimiz, binalarınızı hem sıcak hem de soğuk havalarda korur.'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    main2: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail1: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail2: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/hizmetler">Hizmetler</Link> / Dış Cephe Mantolama
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.serviceIntro}>
            <h1>DIŞ CEPHE MANTOLAMA</h1>
            <p>AKBAT CONSTRUCTION, BİNALARINIZIN DIŞ CEPHESİNİ HEM ESTETİK HEM DE DAYANIKLILIK ESASLARINA GÖRE YENİLER. DIŞ CEPHE MANTOLAMA, SIVA, MONTAJ VE ISI YALITIMINDA UZMAN ÇÖZÜMLER SUNARAK BİNALARINIZI DIŞ ETKENLERE KARŞI KORUR VE ENERJİ TASARRUFU SAĞLAR.</p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>EVİNİZİ GÜVENLE SARIYORUZ</h2>
          
          <div className={styles.description}>
            <div>
              <p>AKBAT CONSTRUCTION olarak, dış cephe mantolama alanında uzun yıllara dayanan deneyimimizle, projelerinizde estetik ve güvenliği bir arada sunuyoruz. Dış cephe sadece yapınızın estetik görünümünü değil, aynı zamanda çevresel etkenlerle karşı korunmasını da sağlar.</p>
            </div>
            <div>
              <p>Kullanılan kaliteli yalıtım malzemeleri, enerji tasarrufunu artırarak yapının ömrünü uzatır ve çevresel etkilere karşı maksimum koruma sağlar. Dış cephe inşaatında, yenilikçi malzemeler ve modern teknikler kullanarak, projelerinizi kusursuz bir şekilde tamamlıyoruz.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main1}
                alt="Dış Cephe Mantolama"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main2}
                alt="Dış Cephe Mantolama"
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
                alt="Dış Cephe Mantolama Detay"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.detail2}
                alt="Dış Cephe Mantolama Detay"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>PROFESYONEL DIŞ CEPHE ÇÖZÜMÜ İÇİN</h2>
          <p>Uzman ekibimizle tanışın, projeniz için en uygun çözümü birlikte belirleyelim.</p>
          <Link href="/iletisim" className={styles.button}>
            BİZE ULAŞIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DisMantolamaPage; 