'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, fadeInUp, staggerContainer, staggerTransition } from '../../utils/motionUtils';
import { getAnimationClass } from '../../utils/animations';

const ServicesPage = () => {
  const t = useTranslations('Common');
  const servicesPageT = useTranslations('ServicesPage');
  const servicesT = useTranslations('ServicesPage.services');
  const params = useParams();
  const locale = params.locale;

  const services = [
    {
      id: 1,
      titleKey: 'turnkey',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/anahtar-teslim-ev`
    },
    {
      id: 2,
      titleKey: 'roofing',
      image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/cati-montaji`
    },
    {
      id: 3,
      titleKey: 'interior',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/ic-dekorasyon`
    },
    {
      id: 4,
      titleKey: 'roughConstruction',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/kaba-insaat`
    },
    {
      id: 5,
      titleKey: 'exteriorInsulation',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/dis-cephe-mantolama`
    },
    {
      id: 6,
      titleKey: 'materialSales',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/malzeme-satisi`
    },
    {
      id: 7,
      titleKey: 'windowsDoors',
      image: 'https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/pencere-kapi-montaji`
    },
    {
      id: 8,
      titleKey: 'renovation',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: `/${locale}/hizmetler/tadilat-tamirat`
    }
  ];

  return (
    <div className={`${styles.servicesPage} ${getAnimationClass('fadeIn')}`} style={{ width: '100%', overflowX: 'hidden' }}>
      <motion.section 
        className={styles.hero}
        initial="hidden"
        animate="show"
        variants={fadeIn}
        style={{ width: '100%' }}
      >
        <div className={styles.container} style={{ width: '100%', maxWidth: '1400px' }}>
          <motion.h1 variants={fadeInUp} transition={{ delay: 0.2 }}>
            {servicesPageT('title')}
          </motion.h1>
          <motion.div 
            className={styles.description}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            transition={staggerTransition(0.3, 0.2)}
            style={{ width: '100%' }}
          >
            <motion.div className={styles.leftContent} variants={fadeInUp}>
              <p>{servicesPageT('description1')}</p>
            </motion.div>
            <motion.div className={styles.rightContent} variants={fadeInUp}>
              <p>{servicesPageT('description2')}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.services}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
        style={{ width: '100%' }}
      >
        <div className={styles.container} style={{ width: '100%', maxWidth: '1400px' }}>
          <motion.div 
            className={styles.servicesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={staggerTransition(0.2, 0.1)}
            style={{ width: '100%' }}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={fadeInUp} style={{ width: '100%' }}>
                <Link href={service.link} className={styles.serviceCard} style={{ width: '100%' }}>
                  <div className={styles.serviceImage} style={{ width: '100%' }}>
                    <Image
                      src={service.image}
                      alt={servicesT(service.titleKey)}
                      width={600}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      priority={service.id <= 4}
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <h3>{servicesT(service.titleKey)}</h3>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className={styles.cta}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        transition={{ delay: 0.3 }}
        style={{ width: '100%' }}
      >
        <div className={styles.container} style={{ width: '100%', maxWidth: '1400px' }}>
          <motion.h2 variants={fadeInUp} transition={{ delay: 0.4 }}>
            AKBAT CONSTRUCTION
          </motion.h2>
          <motion.p variants={fadeInUp} transition={{ delay: 0.5 }}>
            {t('since')}
          </motion.p>
          <motion.div variants={fadeInUp} transition={{ delay: 0.6 }}>
            <Link href={`/${locale}/iletisim`} className={styles.button}>
              {t('contactUs')}
              <span className={styles.arrow}>→</span>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ServicesPage; 