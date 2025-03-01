'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  const services = [
    { title: 'ANAHTAR TESLİM EV', link: '/hizmetler/anahtar-teslim-ev' },
    { title: 'ÇATI MONTAJI', link: '/hizmetler/cati-montaji' },
    { title: 'DIŞ CEPHE MANTOLAMA', link: '/hizmetler/dis-cephe-mantolama' },
    { title: 'İÇ DEKORASYON', link: '/hizmetler/ic-dekorasyon' },
  ];

  const additionalServices = [
    { title: 'KABA İNŞAAT', link: '/hizmetler/kaba-insaat' },
    { title: 'MALZEME SATIŞI', link: '/hizmetler/malzeme-satisi' },
    { title: 'PENCERE & KAPI MONTAJI', link: '/hizmetler/pencere-kapi-montaji' },
    { title: 'TADİLAT & TAMİRAT', link: '/hizmetler/tadilat-tamirat' },
  ];

  const regions = [
    { title: 'VANNES HİZMET BÖLGESİ', link: '/bolge/vannes' },
    { title: 'RENNES HİZMET BÖLGESİ', link: '/bolge/rennes' },
    { title: 'NANTES HİZMET BÖLGESİ', link: '/bolge/nantes' },
    { title: 'LORIENT HİZMET BÖLGESİ', link: '/bolge/lorient' },
  ];

  const additionalRegions = [
    { title: 'PARIS HİZMET BÖLGESİ', link: '/bolge/paris' },
    { title: 'BORDEAUX HİZMET BÖLGESİ', link: '/bolge/bordeaux' },
    { title: 'LYON HİZMET BÖLGESİ', link: '/bolge/lyon' },
    { title: 'MARSEILLE HİZMET BÖLGESİ', link: '/bolge/marseille' },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.jpg"
              alt="AKBAT CONSTRUCTION"
              width={150}
              height={60}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>HİZMETLER</h3>
              <div className={styles.linkColumns}>
                <div className={styles.linkColumn}>
                  {services.map((service, index) => (
                    <Link key={index} href={service.link}>{service.title}</Link>
                  ))}
                </div>
                <div className={styles.linkColumn}>
                  {additionalServices.map((service, index) => (
                    <Link key={index} href={service.link}>{service.title}</Link>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h3>HİZMET BÖLGELERİ</h3>
              <div className={styles.linkColumns}>
                <div className={styles.linkColumn}>
                  {regions.map((region, index) => (
                    <Link key={index} href={region.link}>{region.title}</Link>
                  ))}
                </div>
                <div className={styles.linkColumn}>
                  {additionalRegions.map((region, index) => (
                    <Link key={index} href={region.link}>{region.title}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <div className={styles.address}>
              <h3>BİZİ ZİYARET EDİN</h3>
              <p>8 RUE THIERS, 56000 VANNES, FRANCE</p>
              <Link href="https://maps.google.com" target="_blank" className={styles.directionLink}>
                YOL TARİFİ ALIN →
              </Link>
            </div>
            <div className={styles.contact}>
              <h3>İLETİŞİME GEÇİN</h3>
              <a href="tel:+33630508536">+33 6 30 50 85 36</a>
              <a href="mailto:info@akbatconstruction.com">info@akbatconstruction.com</a>
            </div>
            <div className={styles.social}>
              <h3>BİZİ TAKİP EDİN</h3>
              <div className={styles.socialLinks}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>© 2025 — Tum haklari saklidir - aktasemre1988@gmail.com</p>
            <div className={styles.links}>
              <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>
              <Link href="/gizlilik-politikasi">Gizlilik Politikası</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 