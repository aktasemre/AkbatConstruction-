'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const HomePage = () => {
  const services = [
    {
      title: 'MALZEME SATIŞI',
      link: '/hizmetler/malzeme-satisi'
    },
    {
      title: 'İÇ DEKORASYON',
      link: '/hizmetler/ic-dekorasyon'
    },
    {
      title: 'KABA İNŞAAT',
      link: '/hizmetler/kaba-insaat'
    },
    {
      title: 'DIŞ CEPHE MANTOLAMA',
      link: '/hizmetler/dis-cephe-mantolama'
    },
    {
      title: 'ÇATI MONTAJI',
      link: '/hizmetler/cati-montaji'
    },
    {
      title: 'TADİLAT & TAMİRAT',
      link: '/hizmetler/tadilat-tamirat'
    },
    {
      title: 'ANAHTAR TESLİM EV',
      link: '/hizmetler/anahtar-teslim-ev'
    },
    {
      title: 'PENCERE & KAPI MONTAJI',
      link: '/hizmetler/pencere-kapi-montaji'
    }
  ];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'MODERN VİLLA PROJESİ',
      description: 'Fransız tarzı modern villa projemiz, lüks yaşam standartlarını en üst seviyede sunuyor.'
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'LÜKS KONUT PROJESİ',
      description: 'Özel tasarım detayları ve kaliteli malzemelerle inşa edilen lüks konut projelerimiz.'
    }
  ];

  const heroImage = 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
  const ctaImage = 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  return (
    <div className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.since}>1998'DEN BERİ</span>
          <h1>YARINLARA AKBAT CONSTRUCTION KALİTESİYLE ADIM ATIN</h1>
          <Link href="/hakkimizda" className={styles.heroButton}>
            HAKKIMIZDA
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
        <Image
          src={heroImage}
          alt="AKBAT CONSTRUCTION"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className={styles.overlay}></div>
      </section>

      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2>AKBAT CONSTRUCTION SAMSUN İNŞAAT İLE GEREKLİ ÇÖZÜMLER</h2>
            <div className={styles.introText}>
              <p>AKBAT CONSTRUCTION SAMSUN İNŞAAT OLARAK MÜŞTERİLERE, TOPLULUKLARA VE ÇEVREYE HİZMET EDEN, DOĞA DOSTU VE YENİLİKÇİ İNŞAAT ÇÖZÜMLERİ SUNUYORUZ.</p>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>100%</h3>
                <p>Her projede %100 müşteri memnuniyeti garantisi veriyoruz.</p>
              </div>
              <div className={styles.stat}>
                <h3>99%</h3>
                <p>Projelerimizin %99'u müşteri beklentilerine göre özel olarak tasarlanır.</p>
              </div>
            </div>
          </div>
          <div className={styles.introDescription}>
            <p>AKBAT CONSTRUCTION Samsun İnşaat, malzeme satışından kaba inşaata, iç dekorasyondan dış cepheye kadar tüm inşaat projelerinizde yanınızda. Tadilat ve tamirat işlerinizde profesyonel dokunuşlarla mekanlarınıza yeni bir soluk getirirken, anahtar teslim ev projeleri ile hayalinizdeki yaşam alanlarını gerçeğe dönüştürüyoruz.</p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesHeader}>
            <span>HİZMETLER</span>
            <Link href="/hizmetler" className={styles.servicesLink}>
              HİZMETLERİMİZ
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <Link key={index} href={service.link} className={styles.serviceItem}>
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <h3>GÜÇLÜ VE DAYANIKLI YAPILAR</h3>
              <span className={styles.plus}>+</span>
            </div>
            <div className={styles.feature}>
              <h3>KALİTELİ MALZEMELER</h3>
              <span className={styles.plus}>+</span>
            </div>
            <div className={styles.feature}>
              <h3>UZMAN KADRO İLE PROFESYONEL HİZMET</h3>
              <span className={styles.plus}>+</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>PROJELER</h2>
          <div className={styles.projectsContent}>
            <div className={styles.projectImage}>
              <Image
                src="/images/projects/project-1.jpg"
                alt="Proje"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.projectInfo}>
              <span>VİZYON</span>
              <h3>HER PROJEDE YANINIZDAYIZ</h3>
              <p>AKBAT CONSTRUCTION Samsun İnşaat olarak, her bütçeye ve ihtiyaca uygun projeler üretiyoruz. Kaliteli malzeme ve güvenilir işçilikle, hayalinizdeki yapıları gerçeğe dönüştürüyoruz.</p>
              <Link href="/projeler" className={styles.projectLink}>
                ÇOK YAKINDA SİZLERLE
                <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <span>MÜŞTERİ OLUN</span>
            <h2>GÜÇLÜ YAPILAR İÇİN İLK ADIMI ATIN</h2>
            <Link href="/iletisim" className={styles.ctaButton}>
              BİRLİKTE ÇALIŞALIM
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
          <div className={styles.ctaImage}>
            <Image
              src={ctaImage}
              alt="Birlikte Çalışalım"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 