'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

const AboutPage = () => {
  const t = useTranslations('Common');
  const aboutT = useTranslations('AboutPage');

  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>{aboutT('hero.title')}</h1>
          <div className={styles.description}>
            <p>{aboutT('hero.description1')}</p>
            <p>{aboutT('hero.description2')}</p>
          </div>
        </div>
      </section>

      <section className={styles.experience}>
        <div className={styles.container}>
          <h2>{aboutT('experience.title')}</h2>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>{aboutT('experience.years')}</h3>
              <p>{aboutT('experience.yearsText')}</p>
            </div>
            <div className={styles.stat}>
              <h3>{aboutT('experience.projects')}</h3>
              <p>{aboutT('experience.projectsText')}</p>
            </div>
            <div className={styles.stat}>
              <h3>{aboutT('experience.clients')}</h3>
              <p>{aboutT('experience.clientsText')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>{aboutT('approach.title')}</h2>
            <p>{aboutT('approach.description')}</p>
          </div>
          <div className={styles.image}>
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Çalışma Yaklaşımımız"
              width={600}
              height={400}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2>{aboutT('values.title')}</h2>
          <p className={styles.description}>{aboutT('values.description')}</p>
          <div className={styles.valuesGrid}>
            <div className={styles.value}>
              <h3>{aboutT('values.quality')}</h3>
              <p>{aboutT('values.qualityText')}</p>
            </div>
            <div className={styles.value}>
              <h3>{aboutT('values.integrity')}</h3>
              <p>{aboutT('values.integrityText')}</p>
            </div>
            <div className={styles.value}>
              <h3>{aboutT('values.reliability')}</h3>
              <p>{aboutT('values.reliabilityText')}</p>
            </div>
            <div className={styles.value}>
              <h3>{aboutT('values.expertise')}</h3>
              <p>{aboutT('values.expertiseText')}</p>
            </div>
            <div className={styles.value}>
              <h3>{aboutT('values.innovation')}</h3>
              <p>{aboutT('values.innovationText')}</p>
            </div>
            <div className={styles.value}>
              <h3>{aboutT('values.sustainability')}</h3>
              <p>{aboutT('values.sustainabilityText')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.brands}>
        <div className={styles.container}>
          <h2>{aboutT('brands.title')}</h2>
          <p className={styles.description}>{aboutT('brands.description')}</p>
          <div className={styles.brandsGrid}>
            <div className={styles.brand}>
              <Image
                src="/images/brands/brand1.png"
                alt="Brand 1"
                width={150}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.brand}>
              <Image
                src="/images/brands/brand2.png"
                alt="Brand 2"
                width={150}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.brand}>
              <Image
                src="/images/brands/brand3.png"
                alt="Brand 3"
                width={150}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.brand}>
              <Image
                src="/images/brands/brand4.png"
                alt="Brand 4"
                width={150}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.brand}>
              <Image
                src="/images/brands/brand5.png"
                alt="Brand 5"
                width={150}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.brand}>
              <Image
                src="/images/brands/brand6.png"
                alt="Brand 6"
                width={150}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ceo}>
        <div className={styles.container}>
          <div className={styles.quote}>
            <blockquote>
              {aboutT('ceo.quote')}
            </blockquote>
            <div className={styles.author}>
              <div className={styles.avatar}>
                <Image
                  src="/images/ceo.jpg"
                  alt="CEO"
                  width={80}
                  height={80}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.info}>
                <h3>{aboutT('ceo.name')}</h3>
                <p>{aboutT('ceo.title')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 