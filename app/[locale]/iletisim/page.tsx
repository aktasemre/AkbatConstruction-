'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

const ContactPage = () => {
  const t = useTranslations('Common');
  const contactT = useTranslations('ContactPage');

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      titleKey: 'phone',
      contentKey: 'phoneNumber',
      link: 'tel:+33630508536',
      linkTextKey: 'call'
    },
    {
      icon: 'fas fa-map-marker-alt',
      titleKey: 'address',
      contentKey: 'addressText',
      link: 'https://maps.google.com',
      linkTextKey: 'directions'
    },
    {
      icon: 'fas fa-envelope',
      titleKey: 'email',
      contentKey: 'emailAddress',
      link: 'mailto:info@akbatconstruction.com',
      linkTextKey: 'sendEmail'
    },
    {
      icon: 'fab fa-whatsapp',
      titleKey: 'whatsapp',
      contentKey: 'whatsappNumber',
      link: 'https://wa.me/33630508536',
      linkTextKey: 'sendMessage'
    },
  ];

  const socialLinks = [
    {
      icon: 'fab fa-facebook-f',
      link: 'https://facebook.com',
      label: 'Facebook'
    },
    {
      icon: 'fab fa-instagram',
      link: 'https://instagram.com',
      label: 'Instagram'
    },
    {
      icon: 'fab fa-whatsapp',
      link: 'https://wa.me/33630508536',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.contactIntro}>
            <h1>{contactT('title')}</h1>
            <p>{contactT('intro')}</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.contactInfo}>
              <h2>{contactT('contactInfo')}</h2>
              <div className={styles.infoList}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.infoItem}>
                    <div className={styles.icon}>
                      <i className={info.icon}></i>
                    </div>
                    <div className={styles.text}>
                      <h3>{contactT(`infoItems.${info.titleKey}.title`)}</h3>
                      <p>{contactT(`infoItems.${info.contentKey}`)}</p>
                      <a href={info.link} target={info.icon === 'fas fa-map-marker-alt' ? '_blank' : '_self'} rel="noopener noreferrer">
                        {contactT(`infoItems.${info.linkTextKey}`)} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialLinks}>
                <h3>{contactT('socialMedia')}</h3>
                <div className={styles.links}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.8069882486844!2d36.23079999999999!3d41.2999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU5LjYiTiAzNsKwMTMnNTAuOSJF!5e0!3m2!1str!2str!4v1625000000000!5m2!1str!2str"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={contactT('mapTitle')}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>{contactT('cta.title')}</h2>
          <p>{contactT('cta.description')}</p>
          <a href="https://wa.me/33630508536" className={styles.button} target="_blank" rel="noopener noreferrer">
            {contactT('cta.button')}
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 