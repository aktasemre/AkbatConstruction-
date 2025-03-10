'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

const KullanimKosullariPage = () => {
  const t = useTranslations('Common');
  const termsT = useTranslations('TermsPage');

  return (
    <div className={styles.termsPage}>
      <div className={styles.container}>
        <h1>{termsT('title')}</h1>
        
        <div className={styles.content}>
          <section>
            <h2>{termsT('section1.title')}</h2>
            <p>{termsT('section1.content')}</p>
          </section>

          <section>
            <h2>{termsT('section2.title')}</h2>
            <p>{termsT('section2.content')}</p>
          </section>

          <section>
            <h2>{termsT('section3.title')}</h2>
            <p>{termsT('section3.content')}</p>
          </section>

          <section>
            <h2>{termsT('section4.title')}</h2>
            <p>{termsT('section4.content')}</p>
          </section>

          <section>
            <h2>{termsT('section5.title')}</h2>
            <p>{termsT('section5.content')}</p>
          </section>

          <section>
            <h2>{termsT('section6.title')}</h2>
            <p>{termsT('section6.content')}</p>
          </section>

          <section>
            <h2>{termsT('section7.title')}</h2>
            <p>{termsT('section7.content')}</p>
          </section>
        </div>

        <div className={styles.backLink}>
          <Link href="/">{t('backToHome')}</Link>
        </div>
      </div>
    </div>
  );
};

export default KullanimKosullariPage; 