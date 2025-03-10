'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

const GizlilikPolitikasiPage = () => {
  const t = useTranslations('Common');
  const privacyT = useTranslations('PrivacyPage');

  return (
    <div className={styles.privacyPage}>
      <div className={styles.container}>
        <h1>{privacyT('title')}</h1>
        
        <div className={styles.content}>
          <section>
            <h2>{privacyT('section1.title')}</h2>
            <p>{privacyT('section1.content')}</p>
          </section>

          <section>
            <h2>{privacyT('section2.title')}</h2>
            <p>{privacyT('section2.intro')}</p>
            <ul>
              <li>{privacyT('section2.items.item1')}</li>
              <li>{privacyT('section2.items.item2')}</li>
              <li>{privacyT('section2.items.item3')}</li>
            </ul>
          </section>

          <section>
            <h2>{privacyT('section3.title')}</h2>
            <p>{privacyT('section3.intro')}</p>
            <ul>
              <li>{privacyT('section3.items.item1')}</li>
              <li>{privacyT('section3.items.item2')}</li>
              <li>{privacyT('section3.items.item3')}</li>
              <li>{privacyT('section3.items.item4')}</li>
            </ul>
          </section>

          <section>
            <h2>{privacyT('section4.title')}</h2>
            <p>{privacyT('section4.content')}</p>
          </section>

          <section>
            <h2>{privacyT('section5.title')}</h2>
            <p>{privacyT('section5.content')}</p>
          </section>

          <section>
            <h2>{privacyT('section6.title')}</h2>
            <p>{privacyT('section6.content')}</p>
          </section>

          <section>
            <h2>{privacyT('section7.title')}</h2>
            <p>{privacyT('section7.intro')}</p>
            <ul>
              <li>{privacyT('section7.items.item1')}</li>
              <li>{privacyT('section7.items.item2')}</li>
              <li>{privacyT('section7.items.item3')}</li>
              <li>{privacyT('section7.items.item4')}</li>
            </ul>
          </section>

          <section>
            <h2>{privacyT('section8.title')}</h2>
            <p>{privacyT('section8.content')}</p>
          </section>

          <section>
            <h2>{privacyT('section9.title')}</h2>
            <p>{privacyT('section9.content')}</p>
          </section>
        </div>

        <div className={styles.backLink}>
          <Link href="/">{t('backToHome')}</Link>
        </div>
      </div>
    </div>
  );
};

export default GizlilikPolitikasiPage; 