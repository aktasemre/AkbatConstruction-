'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[slug]/page.module.scss';

const CatiMontajPage = () => {
  const features = [
    {
      icon: '🏠',
      title: 'ÇATI SİSTEMLERİ',
      description: 'Modern ve klasik çatı sistemleri ile binanızın karakterine uygun çözümler sunuyoruz.'
    },
    {
      icon: '💧',
      title: 'SU YALITIMI',
      description: 'İleri teknoloji yalıtım malzemeleri ile çatınızı su ve nem sorunlarına karşı koruyoruz.'
    },
    {
      icon: '🌡️',
      title: 'ISI YALITIMI',
      description: 'Çatı ısı yalıtımı ile enerji tasarrufu sağlıyor, yaşam konforunuzu artırıyoruz.'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    main2: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail1: 'https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail2: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/hizmetler">Hizmetler</Link> / Çatı Montajı
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>ÇATI MONTAJI</h1>
          <p>ESİ YAPI olarak, çatı sistemlerinde profesyonel çözümler sunuyoruz. Modern teknoloji ve kaliteli malzemelerle, binanızın üst örtüsünü güvenle yapılandırıyor, su ve ısı yalıtımı ile enerji tasarrufu sağlıyoruz. Uzman ekibimizle çatınızı güvenle ve estetik bir şekilde inşa ediyoruz.</p>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>ÇATINIZ BİZE EMANET</h2>
          
          <div className={styles.description}>
            <div>
              <p>Çatı montajı hizmetlerimizde, binanızın mimarisine ve ihtiyaçlarınıza uygun çözümler üretiyoruz. Çatı kaplama malzemelerinden yalıtım sistemlerine kadar tüm bileşenlerde en kaliteli ürünleri kullanıyoruz. Yağmur ve kar sularına karşı etkili drenaj sistemleri ile çatınızı koruyoruz.</p>
            </div>
            <div>
              <p>Çatı sistemlerimizde ısı yalıtımına özel önem veriyoruz. Doğru malzeme seçimi ve profesyonel uygulama ile kışın ısı kaybını, yazın ise aşırı ısınmayı önlüyoruz. Böylece hem enerji tasarrufu sağlıyor hem de yaşam konforunuzu artırıyoruz.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main1}
                alt="Çatı Montajı"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main2}
                alt="Çatı Montajı"
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
          <h2>ÇATI PROJENİZ İÇİN</h2>
          <p>Uzman ekibimizle görüşün, çatınız için en uygun çözümü birlikte belirleyelim.</p>
          <Link href="/iletisim" className={styles.button}>
            BİZE ULAŞIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CatiMontajPage; 