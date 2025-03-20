'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import { motion } from 'framer-motion';
import DirectionalTransition from '../../components/DirectionalTransition';
import { fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerTransition } from '../../utils/motionUtils';
import { useParams } from 'next/navigation';

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
    <DirectionalTransition>
      <div className={styles.contactPage}>
        <motion.section 
          className={styles.hero}
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <div className={styles.container}>
            <motion.div 
              className={styles.contactIntro}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h1>{contactT('title')}</h1>
              <p>{contactT('intro')}</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className={styles.content}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className={styles.container}>
            <div className={styles.grid}>
              <motion.div 
                className={styles.contactInfo}
                variants={fadeInLeft}
                transition={{ delay: 0.3 }}
              >
                <h2>{contactT('contactInfo')}</h2>
                <motion.div 
                  className={styles.infoList}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={staggerTransition(0.2, 0.15)}
                >
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      className={styles.infoItem}
                      variants={fadeInUp}
                    >
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
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div 
                  className={styles.socialLinks}
                  variants={fadeInUp}
                  transition={{ delay: 0.5 }}
                >
                  <h3>{contactT('socialMedia')}</h3>
                  <div className={styles.links}>
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <i className={social.icon}></i>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className={styles.map}
                variants={fadeInRight}
                transition={{ delay: 0.4 }}
              >
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
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className={styles.cta}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.container}>
            <h2>{contactT('cta.title')}</h2>
            <p>{contactT('cta.description')}</p>
            <motion.a 
              href="https://wa.me/33630508536" 
              className={styles.button} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {contactT('cta.button')}
              <span className={styles.arrow}>→</span>
            </motion.a>
          </div>
        </motion.section>
      </div>
    </DirectionalTransition>
  );
};

export default ContactPage; 