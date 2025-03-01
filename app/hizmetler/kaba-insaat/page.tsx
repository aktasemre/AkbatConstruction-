'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../[slug]/page.module.scss';

const KabaInsaatPage = () => {
  const features = [
    {
      icon: '🏗️',
      title: 'TEMEL VE BETONARME',
      description: 'Sağlam temeller ve dayanıklı betonarme yapılar inşa ediyor, binanızın güvenliğini garanti altına alıyoruz.'
    },
    {
      icon: '🧱',
      title: 'DUVAR ÖRME',
      description: 'Kaliteli tuğla ve bloklar kullanarak, profesyonel işçilikle duvarlarınızı örüyoruz.'
    },
    {
      icon: '📏',
      title: 'STATİK HESAPLAMALAR',
      description: 'Detaylı statik hesaplamalar ve mühendislik çözümleri ile yapınızın güvenliğini sağlıyoruz.'
    }
  ];

  return (
    <div className={styles.servicePage}>
      <div className={styles.breadcrumb}>
        <div className={styles.container}>
          <Link href="/hizmetler">Hizmetler</Link> / Kaba İnşaat
        </div>
      </div>

      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.serviceIntro}>
            <h1>KABA İNŞAAT</h1>
            <p>AKBAT CONSTRUCTION olarak, kaba inşaat işlerinde profesyonel ve güvenilir çözümler sunuyoruz. Temel kazısından çatı katına kadar tüm yapısal elemanları, en son teknoloji ve yüksek kalite standartlarında inşa ediyoruz. Depreme dayanıklı, sağlam ve uzun ömürlü yapılar için doğru adresiniz.</p>
          </div>
        </div>
      </section>

      <section className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.tagline}>SAĞLAM TEMELLER, GÜÇLÜ YAPILAR</h2>
          
          <div className={styles.description}>
            <div>
              <p>Kaba inşaat hizmetlerimizde, yapınızın temelinden çatısına kadar her aşamayı titizlikle planlıyor ve uyguluyoruz. Modern inşaat teknolojilerini kullanarak, depreme dayanıklı ve uzun ömürlü yapılar inşa ediyoruz. Kaliteli malzeme seçimi ve profesyonel işçilikle, güvenli yaşam alanları oluşturuyoruz.</p>
            </div>
            <div>
              <p>Her projede detaylı statik hesaplamalar yapıyor, zemin etüdünden yapı statiğine kadar tüm teknik gereklilikleri en üst düzeyde karşılıyoruz. Düzenli kalite kontrolleri ve şeffaf süreç yönetimi ile müşterilerimize güven veriyoruz. Yapınızın sağlamlığı ve güvenliği bizim önceliğimizdir.</p>
            </div>
          </div>

          <div className={styles.imageGrid}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Kaba İnşaat"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Kaba İnşaat"
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
          <h2>KABA İNŞAAT PROJENİZ İÇİN</h2>
          <p>Uzman ekibimizle görüşün, projeniz için en uygun çözümü birlikte geliştirelim.</p>
          <Link href="/iletisim" className={styles.button}>
            BİZE ULAŞIN
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KabaInsaatPage; 