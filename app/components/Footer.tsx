'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import styles from './Footer.module.scss';

const Footer = () => {
  const t = useTranslations('Common');
  const footerT = useTranslations('Footer');
  const servicesT = useTranslations('ServicesPage.services');
  const { locale } = useParams();

  const services = [
    { title: servicesT('turnkeyHomes'), link: `/${locale}/hizmetler/anahtar-teslim-ev` },
    { title: servicesT('roofing'), link: `/${locale}/hizmetler/cati-montaji` },
    { title: servicesT('exteriorInsulation'), link: `/${locale}/hizmetler/dis-cephe-mantolama` },
    { title: servicesT('interiorDecoration'), link: `/${locale}/hizmetler/ic-dekorasyon` },
  ];

  const additionalServices = [
    { title: servicesT('roughConstruction'), link: `/${locale}/hizmetler/kaba-insaat` },
    { title: servicesT('materialSales'), link: `/${locale}/hizmetler/malzeme-satisi` },
    { title: servicesT('windowsDoors'), link: `/${locale}/hizmetler/pencere-kapi-montaji` },
    { title: servicesT('renovation'), link: `/${locale}/hizmetler/tadilat-tamirat` },
  ];

  const regions = [
    { title: 'VANNES', link: `/${locale}/bolge/vannes` },
    { title: 'RENNES', link: `/${locale}/bolge/rennes` },
    { title: 'NANTES', link: `/${locale}/bolge/nantes` },
    { title: 'LORIENT', link: `/${locale}/bolge/lorient` },
  ];

  const additionalRegions = [
    { title: 'PARIS', link: `/${locale}/bolge/paris` },
    { title: 'BORDEAUX', link: `/${locale}/bolge/bordeaux` },
    { title: 'LYON', link: `/${locale}/bolge/lyon` },
    { title: 'MARSEILLE', link: `/${locale}/bolge/marseille` },
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
              <h3>{footerT('services')}</h3>
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
              <h3>{footerT('serviceAreas')}</h3>
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
              <h3>{footerT('address')}</h3>
              <p>8 RUE THIERS, 56000 VANNES, FRANCE</p>
              <Link href="https://maps.google.com" target="_blank" className={styles.directionLink}>
                {footerT('getDirections')} →
              </Link>
            </div>
            <div className={styles.contact}>
              <h3>{footerT('contactInfo')}</h3>
              <a href="tel:+33630508536">+33 6 30 50 85 36</a>
              <a href="mailto:info@akbatconstruction.com">info@akbatconstruction.com</a>
            </div>
            <div className={styles.social}>
              <h3>{footerT('followUs')}</h3>
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
            <p>© 2025 — {footerT('allRightsReserved')}</p>
            <div className={styles.links}>
              <Link href={`/${locale}/kullanim-kosullari`}>{footerT('termsOfUse')}</Link>
              <Link href={`/${locale}/gizlilik-politikasi`}>{footerT('privacyPolicy')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 