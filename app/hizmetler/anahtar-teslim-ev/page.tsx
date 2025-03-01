'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[slug]/page.module.scss';

const AnahtarTeslimPage = () => {
  const features = [
    {
      icon: '📋',
      title: 'PROJE PLANLAMA',
      description: 'Her projeyi detaylı bir şekilde planlıyor, ihtiyaçlarınızı ve bütçenizi göz önünde bulundurarak en uygun çözümleri sunuyoruz.'
    },
    {
      icon: '🏗️',
      title: 'PROFESYONEL UYGULAMA',
      description: 'Uzman ekibimizle, temelinden çatısına kadar tüm inşaat sürecini titizlikle yönetiyoruz.'
    },
    {
      icon: '🔑',
      title: 'ANAHTAR TESLİM',
      description: 'Projenizi tüm detaylarıyla tamamlayıp, kullanıma hazır bir şekilde size teslim ediyoruz.'
    }
  ];

  const images = {
    main1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    main2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/hizmetler">Hizmetler</Link> / Anahtar Teslim Ev
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.serviceIntro}>
            <h1>ANAHTAR TESLİM EV</h1>
            <p>AKBAT CONSTRUCTION olarak, hayalinizdeki evi A'dan Z'ye inşa ediyoruz. Projelendirmeden iç dekorasyona, bahçe düzenlemesinden son detayına kadar tüm süreci profesyonel bir şekilde yönetiyoruz. Kaliteli malzeme ve işçilikle, zamanında teslim garantisiyle, bütçenize uygun çözümler sunuyoruz.</p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>HAYALİNİZDEKİ EVİ İNŞA EDİYORUZ</h2>
          
          <div className={styles.description}>
            <div>
              <p>Anahtar teslim ev projelerimizde, modern mimari anlayışı ile fonksiyonelliği bir araya getiriyoruz. Her aşamada sizinle istişare ederek, beklentilerinizi en iyi şekilde karşılayan çözümler üretiyoruz. Kaliteli malzeme seçimi ve uzman işçilikle, uzun yıllar güvenle yaşayabileceğiniz evler inşa ediyoruz.</p>
            </div>
            <div>
              <p>Projelerimizde enerji verimliliğinden güvenliğe, estetik tasarımdan kullanım rahatlığına kadar her detayı düşünüyoruz. Temel kazısından başlayarak, iç dekorasyon ve peyzaj düzenlemesine kadar tüm süreci titizlikle yönetiyor, size sadece anahtarınızı teslim almak kalıyor.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main1}
                alt="Anahtar Teslim Ev"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src={images.main2}
                alt="Anahtar Teslim Ev"
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
          <h2>HAYALİNİZDEKİ EVE KAVUŞMAK İÇİN</h2>
          <p>Sizin için en uygun çözümü birlikte belirleyelim.</p>
          <Link href="/iletisim" className={styles.button}>
            BİZE ULAŞIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AnahtarTeslimPage; 