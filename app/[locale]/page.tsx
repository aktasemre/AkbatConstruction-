'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './page.module.scss';

const HomePage = () => {
  const t = useTranslations('Common');
  const homeT = useTranslations('HomePage');
  const servicesT = useTranslations('ServicesPage.services');
  const { locale } = useParams();

  const services = [
    {
      title: servicesT('materialSales'),
      link: `/${locale}/hizmetler/malzeme-satisi`
    },
    {
      title: servicesT('interiorDecoration'),
      link: `/${locale}/hizmetler/ic-dekorasyon`
    },
    {
      title: servicesT('roughConstruction'),
      link: `/${locale}/hizmetler/kaba-insaat`
    },
    {
      title: servicesT('exteriorInsulation'),
      link: `/${locale}/hizmetler/dis-cephe-mantolama`
    },
    {
      title: servicesT('roofing'),
      link: `/${locale}/hizmetler/cati-montaji`
    },
    {
      title: servicesT('renovation'),
      link: `/${locale}/hizmetler/tadilat-tamirat`
    },
    {
      title: servicesT('turnkeyHomes'),
      link: `/${locale}/hizmetler/anahtar-teslim-ev`
    },
    {
      title: servicesT('windowsDoors'),
      link: `/${locale}/hizmetler/pencere-kapi-montaji`
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
          <span className={styles.since}>{t('since')}</span>
          <h1>{homeT('hero.title')}</h1>
          <Link href={`/${locale}/hakkimizda`} className={styles.heroButton}>
            {t('about')}
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
            <h2>{homeT('intro.title')}</h2>
            <div className={styles.introText}>
              <p>{homeT('intro.description')}</p>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>25</h3>
                <p>{homeT('intro.stats.experience')}</p>
              </div>
              <div className={styles.stat}>
                <h3>500+</h3>
                <p>{homeT('intro.stats.projects')}</p>
              </div>
            </div>
          </div>
          <div className={styles.introDescription}>
            <p>{homeT('intro.description')}</p>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesHeader}>
            <span>{homeT('services.title')}</span>
            <Link href={`/${locale}/hizmetler`} className={styles.servicesLink}>
              {homeT('services.viewAll')}
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
              <h3>{homeT('features.quality')}</h3>
              <span className={styles.plus}>+</span>
            </div>
            <div className={styles.feature}>
              <h3>{homeT('features.onTime')}</h3>
              <span className={styles.plus}>+</span>
            </div>
            <div className={styles.feature}>
              <h3>{homeT('features.expertise')}</h3>
              <span className={styles.plus}>+</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={styles.container}>
          <h2>{homeT('projects.subtitle')}</h2>
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
              <span>{homeT('projects.subtitle')}</span>
              <h3>{homeT('projects.title')}</h3>
              <p>{homeT('projects.description')}</p>
              <Link href={`/${locale}/projeler`} className={styles.projectLink}>
                {homeT('projects.button')}
                <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <span>{homeT('cta.subtitle')}</span>
            <h2>{homeT('cta.title')}</h2>
            <Link href={`/${locale}/iletisim`} className={styles.ctaButton}>
              {homeT('cta.button')}
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