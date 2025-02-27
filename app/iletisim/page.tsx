'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'ADRES',
      content: 'ATATÜRK MAHALLESİ MEHMET ÇETİN CADDESİ NO:54, ASARCIK/SAMSUN',
      link: 'https://maps.google.com',
      linkText: 'YOL TARİFİ AL'
    },
    {
      icon: 'fas fa-phone',
      title: 'TELEFON',
      content: '+90 535 675 2515',
      link: 'tel:+905356752515',
      linkText: 'HEMEN ARA'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WHATSAPP',
      content: '+90 535 675 2515',
      link: 'https://wa.me/905356752515',
      linkText: 'MESAJ GÖNDER'
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-POSTA',
      content: 'info@esiyapi.com',
      link: 'mailto:info@esiyapi.com',
      linkText: 'MAİL GÖNDER'
    }
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
      link: 'https://wa.me/905356752515',
      label: 'WhatsApp'
    }
  ];

  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>İLETİŞİME GEÇİN</h1>
          <p>ESİ YAPI olarak, projeleriniz için en uygun çözümleri sunmak üzere yanınızdayız. Soru, öneri ve talepleriniz için bize ulaşın, en kısa sürede dönüş yapalım.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.contactInfo}>
              <h2>İLETİŞİM BİLGİLERİ</h2>
              <div className={styles.infoList}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.infoItem}>
                    <div className={styles.icon}>
                      <i className={info.icon}></i>
                    </div>
                    <div className={styles.text}>
                      <h3>{info.title}</h3>
                      <p>{info.content}</p>
                      <a href={info.link} target={info.icon === 'fas fa-map-marker-alt' ? '_blank' : '_self'} rel="noopener noreferrer">
                        {info.linkText} →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.socialLinks}>
                <h3>SOSYAL MEDYA</h3>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d36.123456!3d41.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA3JzM0LjQiTiAzNsKwMDcnMzQuNCJF!5e0!3m2!1str!2str!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ESİ YAPI Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <h2>HEMEN TEKLİF ALIN</h2>
          <p>Projeleriniz için ücretsiz keşif ve fiyat teklifi almak için hemen iletişime geçin.</p>
          <a href="https://wa.me/905356752515" className={styles.button} target="_blank" rel="noopener noreferrer">
            WHATSAPP İLE ULAŞIN
            <span className={styles.arrow}>→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 