'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './page.module.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import DirectionalTransition from '../../components/DirectionalTransition';
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerTransition } from '../../utils/motionUtils';

const AboutPage = () => {
  const t = useTranslations('Common');
  const aboutT = useTranslations('AboutPage');
  const params = useParams();
  const locale = params.locale;
  
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Parallax efekti için framer-motion kullanımı
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const stats = [
    { number: '25', text: aboutT('experience.yearsText'), icon: '🏗️' },
    { number: '500+', text: aboutT('experience.projectsText'), icon: '🏢' },
    { number: '300+', text: aboutT('experience.clientsText'), icon: '👥' }
  ];

  const values = [
    { title: aboutT('values.quality'), text: aboutT('values.qualityText'), icon: '✨' },
    { title: aboutT('values.integrity'), text: aboutT('values.integrityText'), icon: '🤝' },
    { title: aboutT('values.reliability'), text: aboutT('values.reliabilityText'), icon: '⏱️' },
    { title: aboutT('values.expertise'), text: aboutT('values.expertiseText'), icon: '🔧' },
    { title: aboutT('values.innovation'), text: aboutT('values.innovationText'), icon: '💡' },
    { title: aboutT('values.sustainability'), text: aboutT('values.sustainabilityText'), icon: '🌱' }
  ];

  const brands = [
    { name: 'Saint-Gobain', logo: 'https://images.unsplash.com/photo-1563302111-eab4b145e6f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Lafarge', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Velux', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Knauf', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Weber', logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
    { name: 'Isover', logo: 'https://images.unsplash.com/photo-1563302111-eab4b145e6f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' }
  ];

  return (
    <DirectionalTransition>
      <div className={styles.aboutPage}>
        {/* Parallax Hero Section */}
        <section className={styles.heroParallax} ref={parallaxRef}>
          <div className={styles.parallaxOverlay}></div>
          <motion.div 
            className={styles.parallaxImage}
            style={{ y: parallaxY }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="AKBAT CONSTRUCTION" 
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </motion.div>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.container}>
              <h1 className={styles.heroTitle}>{aboutT('hero.title')}</h1>
              <div className={styles.heroLine}></div>
              <p className={styles.heroSubtitle}>AKBAT CONSTRUCTION</p>
            </div>
          </motion.div>
        </section>

        {/* Introduction Section */}
        <motion.section 
          className={styles.introduction}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className={styles.container}>
            <div className={styles.introGrid}>
              <motion.div 
                className={styles.introText}
                variants={fadeInLeft}
                transition={{ delay: 0.2 }}
              >
                <h2>{t('since')} <span>2000</span></h2>
                <p>{aboutT('hero.description1')}</p>
                <p>{aboutT('hero.description2')}</p>
                <Link href={`/${locale}/iletisim`} className={styles.introButton}>
                  {t('contactUs')}
                </Link>
              </motion.div>
              <motion.div 
                className={styles.introImage}
                variants={fadeInRight}
                transition={{ delay: 0.4 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Lüks Fransız Tarzı Villa" 
                  width={500}
                  height={700}
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.introImageOverlay}>
                  <span>AKBAT</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          className={styles.stats}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className={styles.container}>
            <motion.div 
              className={styles.statsGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={staggerTransition(0.2, 0.2)}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className={styles.statCard} 
                  variants={fadeInUp}
                >
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <h3>{stat.number}</h3>
                  <p>{stat.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Approach Section */}
        <motion.section 
          className={styles.approach}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className={styles.container}>
            <div className={styles.approachGrid}>
              <motion.div 
                className={styles.approachImage}
                variants={fadeInLeft}
                transition={{ delay: 0.2 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                  alt="Çalışma Yaklaşımımız" 
                  width={600}
                  height={800}
                  style={{ objectFit: 'cover' }}
                />
              </motion.div>
              <motion.div 
                className={styles.approachContent}
                variants={fadeInRight}
                transition={{ delay: 0.4 }}
              >
                <div className={styles.approachHeader}>
                  <span className={styles.approachLabel}>AKBAT</span>
                  <h2>{aboutT('approach.title')}</h2>
                </div>
                <p>{aboutT('approach.description')}</p>
                <div className={styles.approachSignature}>
                  <Image 
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Yusuf Aktas İmza" 
                    width={150}
                    height={80}
                    style={{ objectFit: 'contain' }}
                  />
                  <div className={styles.signatureInfo}>
                    <h4>Yusuf Aktas</h4>
                    <p>Founder & CEO</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          className={styles.values}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className={styles.container}>
            <motion.div 
              className={styles.sectionHeader}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2>{aboutT('values.title')}</h2>
              <p>{aboutT('values.description')}</p>
            </motion.div>
            <motion.div 
              className={styles.valuesGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={staggerTransition(0.3, 0.15)}
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className={styles.valueCard} 
                  variants={fadeInUp}
                >
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Brands Section */}
        <motion.section 
          className={styles.brands}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className={styles.container}>
            <motion.div 
              className={styles.sectionHeader}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h2>{aboutT('brands.title')}</h2>
              <p>{aboutT('brands.description')}</p>
            </motion.div>
            <motion.div 
              className={styles.brandsSlider}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <div className={styles.brandsTrack}>
                {brands.map((brand, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.brandCard}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={brand.logo}
                      alt={brand.name}
                      width={150}
                      height={80}
                      style={{ objectFit: 'contain' }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CEO Quote Section */}
        <motion.section 
          className={styles.ceoQuote}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className={styles.container}>
            <motion.div 
              className={styles.quoteWrapper}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.quoteImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Yusuf Aktas - CEO" 
                  width={300}
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.quoteContent}>
                <div className={styles.quoteSymbol}>"</div>
                <blockquote>
                  {aboutT('ceo.quote')}
                </blockquote>
                <div className={styles.quoteAuthor}>
                  <h4>Yusuf Aktas</h4>
                  <p>{aboutT('ceo.title')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className={styles.cta}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className={styles.container}>
            <h2>{t('contactUs')}</h2>
            <p>AKBAT CONSTRUCTION</p>
            <Link href={`/${locale}/iletisim`} className={styles.ctaButton}>
              {t('contactUs')}
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </motion.section>
      </div>
    </DirectionalTransition>
  );
};

export default AboutPage; 