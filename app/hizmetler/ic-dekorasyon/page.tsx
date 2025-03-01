'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[slug]/page.module.scss';

const IcDekorasyonPage = () => {
  const features = [
    {
      icon: '🎨',
      title: 'TASARIM VE PLANLAMA',
      description: 'Mekanınızın potansiyelini en üst düzeye çıkarmak için detaylı tasarım ve planlama hizmeti sunuyoruz.'
    },
    {
      icon: '🛋️',
      title: 'MOBİLYA VE AKSESUAR',
      description: 'Özel tasarım mobilyalar ve şık aksesuarlarla mekanınıza kişilik katıyoruz.'
    },
    {
      icon: '💡',
      title: 'AYDINLATMA ÇÖZÜMLER',
      description: 'Modern ve fonksiyonel aydınlatma sistemleriyle mekanınıza değer katıyoruz.'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    main2: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail1: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail2: 'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/hizmetler">Hizmetler</Link> / İç Dekorasyon
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.serviceIntro}>
            <h1>İÇ DEKORASYON</h1>
            <p>AKBAT CONSTRUCTION olarak, yaşam alanlarınızı modern ve fonksiyonel bir şekilde tasarlıyor, estetik ve kullanışlılığı bir araya getiriyoruz. Her projeye özel yaklaşımımız ve deneyimli ekibimizle, hayalinizdeki mekanları gerçeğe dönüştürüyoruz.</p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>YAŞAM ALANLARINIZA DEĞER KATIYORUZ</h2>
          
          <div className={styles.description}>
            <div>
              <p>İç dekorasyon hizmetlerimizle, mekanlarınızı sadece güzelleştirmekle kalmıyor, aynı zamanda fonksiyonel ve yaşanabilir alanlar haline getiriyoruz. Modern tasarım anlayışımız ve kaliteli malzeme seçimlerimizle, her projeye özel çözümler üretiyoruz.</p>
            </div>
            <div>
              <p>Aydınlatmadan mobilyaya, duvar kaplamalarından zemin döşemelerine kadar tüm detayları özenle planlıyor ve uyguluyoruz. Uzman ekibimiz, projenizin her aşamasında yanınızda olarak, isteklerinizi en iyi şekilde hayata geçiriyor.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main1}
                alt="İç Dekorasyon"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main2}
                alt="İç Dekorasyon"
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
          <h2>MEKANINIZI YENİLEMEK İÇİN</h2>
          <p>Hayalinizdeki yaşam alanını birlikte tasarlayalım.</p>
          <Link href="/iletisim" className={styles.button}>
            BİZE ULAŞIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IcDekorasyonPage; 