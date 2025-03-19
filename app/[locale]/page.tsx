'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerTransition } from '../utils/motionUtils';

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
      image: 'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'FRANSIZ TARZI VİLLA PROJESİ',
      description: 'Fransız tarzı modern villa projemiz, lüks yaşam standartlarını en üst seviyede sunuyor.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      title: 'LÜKS KONUT PROJESİ',
      description: 'Özel tasarım detayları ve kaliteli malzemelerle inşa edilen lüks konut projelerimiz.'
    }
  ];

  const heroImage = 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
  const ctaImage = 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  return (
    <div className={styles.homePage}>
      <motion.section 
        className={styles.hero}
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <motion.div 
          className={styles.container}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <span className={styles.since}>{t('since')}</span>
          <h1>{homeT('hero.title')}</h1>
          <Link href={`/${locale}/hakkimizda`} className={styles.heroButton}>
            {t('about')}
            <span className={styles.arrow}>→</span>
          </Link>
        </motion.div>
        <Image
          src={heroImage}
          alt="AKBAT CONSTRUCTION"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
          quality={85}
        />
        <div className={styles.overlay}></div>
      </motion.section>

      <motion.section 
        className={styles.intro}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className={styles.container}>
          <motion.div 
            className={styles.introContent}
            variants={fadeInLeft}
            transition={{ delay: 0.2 }}
          >
            <h2>{homeT('intro.title')}</h2>
            <div className={styles.introText}>
              <p>{homeT('intro.description')}</p>
            </div>
            <motion.div 
              className={styles.stats}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={staggerTransition(0.3, 0.2)}
            >
              <motion.div className={styles.stat} variants={fadeInUp}>
                <h3>25</h3>
                <p>{homeT('intro.stats.experience')}</p>
              </motion.div>
              <motion.div className={styles.stat} variants={fadeInUp}>
                <h3>500+</h3>
                <p>{homeT('intro.stats.projects')}</p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className={styles.introDescription}
            variants={fadeInRight}
            transition={{ delay: 0.4 }}
          >
            <p>{homeT('intro.description')}</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.services}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className={styles.container}>
          <motion.div 
            className={styles.servicesHeader}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <span>{homeT('services.title')}</span>
            <Link href={`/${locale}/hizmetler`} className={styles.servicesLink}>
              {homeT('services.viewAll')}
              <span className={styles.arrow}>→</span>
            </Link>
          </motion.div>
          <motion.div 
            className={styles.servicesList}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={staggerTransition(0.3, 0.1)}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={service.link} className={styles.serviceItem}>
                  {service.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.features}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className={styles.container}>
          <motion.div 
            className={styles.featuresGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={staggerTransition(0.3, 0.15)}
          >
            <motion.div className={styles.feature} variants={fadeInUp}>
              <h3>{homeT('features.quality')}</h3>
              <span className={styles.plus}>+</span>
            </motion.div>
            <motion.div className={styles.feature} variants={fadeInUp}>
              <h3>{homeT('features.onTime')}</h3>
              <span className={styles.plus}>+</span>
            </motion.div>
            <motion.div className={styles.feature} variants={fadeInUp}>
              <h3>{homeT('features.expertise')}</h3>
              <span className={styles.plus}>+</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.projects}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className={styles.container}>
          <motion.h2 
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {homeT('projects.subtitle')}
          </motion.h2>
          <div className={styles.projectsContent}>
            <motion.div 
              className={styles.projectImage}
              variants={fadeInLeft}
              transition={{ delay: 0.3 }}
            >
              <Image
                src={projects[0].image}
                alt="Proje"
                width={600}
                height={400}
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={80}
              />
            </motion.div>
            <motion.div 
              className={styles.projectInfo}
              variants={fadeInRight}
              transition={{ delay: 0.4 }}
            >
              <span>{homeT('projects.subtitle')}</span>
              <h3>{homeT('projects.title')}</h3>
              <p>{homeT('projects.description')}</p>
              <Link href={`/${locale}/projeler`} className={styles.projectLink}>
                {homeT('projects.button')}
                <span className={styles.arrow}>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.cta}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className={styles.container}>
          <motion.div 
            className={styles.ctaContent}
            variants={fadeInLeft}
            transition={{ delay: 0.3 }}
          >
            <span>{homeT('cta.subtitle')}</span>
            <h2>{homeT('cta.title')}</h2>
            <Link href={`/${locale}/iletisim`} className={styles.ctaButton}>
              {homeT('cta.button')}
              <span className={styles.arrow}>→</span>
            </Link>
          </motion.div>
          <motion.div 
            className={styles.ctaImage}
            variants={fadeInRight}
            transition={{ delay: 0.4 }}
          >
            <Image
              src={ctaImage}
              alt="Birlikte Çalışalım"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              quality={80}
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage; 