'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './page.module.scss';

const AboutPage = () => {
  const t = useTranslations('Common');
  const aboutT = useTranslations('AboutPage');
  const params = useParams();
  const locale = params.locale;
  
  const parallaxRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
      
      // Animasyon için scroll pozisyonunu kontrol et
      const animateOnScroll = (ref: React.RefObject<HTMLElement>, className: string) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
          
          if (isVisible) {
            ref.current.classList.add(className);
          }
        }
      };
      
      animateOnScroll(statsRef, styles.animate);
      animateOnScroll(valuesRef, styles.animate);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className={styles.aboutPage}>
      {/* Parallax Hero Section */}
      <section className={styles.heroParallax}>
        <div className={styles.parallaxOverlay}></div>
        <div className={styles.parallaxImage} ref={parallaxRef}>
          <Image 
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="AKBAT CONSTRUCTION" 
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>{aboutT('hero.title')}</h1>
            <div className={styles.heroLine}></div>
            <p className={styles.heroSubtitle}>AKBAT CONSTRUCTION</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <h2>{t('since')} <span>2000</span></h2>
              <p>{aboutT('hero.description1')}</p>
              <p>{aboutT('hero.description2')}</p>
              <Link href={`/${locale}/iletisim`} className={styles.introButton}>
                {t('contactUs')}
              </Link>
            </div>
            <div className={styles.introImage}>
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
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <h3>{stat.number}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className={styles.approach}>
        <div className={styles.container}>
          <div className={styles.approachGrid}>
            <div className={styles.approachImage}>
              <Image 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Çalışma Yaklaşımımız" 
                width={600}
                height={800}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.approachContent}>
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
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.values} ref={valuesRef}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{aboutT('values.title')}</h2>
            <p>{aboutT('values.description')}</p>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className={styles.brands}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>{aboutT('brands.title')}</h2>
            <p>{aboutT('brands.description')}</p>
          </div>
          <div className={styles.brandsSlider}>
            <div className={styles.brandsTrack}>
              {brands.map((brand, index) => (
                <div key={index} className={styles.brandCard}>
                  <Image 
                    src={brand.logo}
                    alt={brand.name}
                    width={150}
                    height={80}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Quote Section */}
      <section className={styles.ceoQuote}>
        <div className={styles.container}>
          <div className={styles.quoteWrapper}>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>{t('contactUs')}</h2>
          <p>AKBAT CONSTRUCTION</p>
          <Link href={`/${locale}/iletisim`} className={styles.ctaButton}>
            {t('getQuote')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 