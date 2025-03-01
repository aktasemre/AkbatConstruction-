'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[slug]/page.module.scss';

const TadilatTamiratPage = () => {
  const features = [
    {
      icon: '🏠',
      title: 'GENEL TADİLAT',
      description: 'Evinizin veya iş yerinizin her türlü tadilat işlemini profesyonel ekibimizle gerçekleştiriyoruz.'
    },
    {
      icon: '🚰',
      title: 'TESİSAT TAMİRATI',
      description: 'Su, elektrik ve doğalgaz tesisatı tamiri ve yenileme işlemlerini uzman ekibimizle yapıyoruz.'
    },
    {
      icon: '🔨',
      title: 'BAKIM ONARIM',
      description: 'Düzenli bakım ve onarım hizmetleriyle yapınızın ömrünü uzatıyor, sorunları erkenden çözüyoruz.'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    main2: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail1: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    detail2: 'https://images.unsplash.com/photo-1581092160607-7638e922c722?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/hizmetler">Hizmetler</Link> / Tadilat & Tamirat
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.serviceIntro}>
            <h1>TADİLAT & TAMİRAT</h1>
            <p>AKBAT CONSTRUCTION olarak, yaşam ve çalışma alanlarınızın tadilat ve tamirat işlerini profesyonel bir yaklaşımla gerçekleştiriyoruz. Küçük onarımlardan kapsamlı renovasyon projelerine kadar her ölçekte hizmet sunuyoruz. Deneyimli ekibimiz ve kaliteli malzemelerle, mekanlarınızı yeniliyor, değer katıyoruz.</p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>UZMAN EKİP, KALİTELİ HİZMET</h2>
          
          <div className={styles.description}>
            <div>
              <p>Tadilat ve tamirat hizmetlerimizde, müşterilerimizin ihtiyaç ve beklentilerini ön planda tutuyoruz. Her projeye özel çözümler üreterek, en uygun maliyetle en iyi sonucu elde etmeyi hedefliyoruz. Modern teknikler ve kaliteli malzemeler kullanarak, dayanıklı ve estetik sonuçlar elde ediyoruz.</p>
            </div>
            <div>
              <p>Mutfak ve banyo yenilemeden zemin döşemeye, duvar örümünden boya badanaya kadar tüm tadilat işlerinizi üstleniyoruz. Ayrıca su, elektrik ve doğalgaz tesisatı tamiri gibi teknik işlerde de uzman ekibimizle yanınızdayız. İşimizi zamanında ve temiz bir şekilde tamamlayarak, memnuniyetinizi garanti ediyoruz.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main1}
                alt="Tadilat & Tamirat"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main2}
                alt="Tadilat & Tamirat"
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
          <h2>TADİLAT PROJENİZ İÇİN</h2>
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

export default TadilatTamiratPage; 