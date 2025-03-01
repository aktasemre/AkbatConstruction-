'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'ANAHTAR TESLİM EV',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: '/hizmetler/anahtar-teslim-ev'
    },
    {
      id: 2,
      title: 'ÇATI MONTAJI',
      image: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: '/hizmetler/cati-montaji'
    },
    {
      id: 3,
      title: 'İÇ DEKORASYON',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: '/hizmetler/ic-dekorasyon'
    },
    {
      id: 4,
      title: 'KABA İNŞAAT',
      image: 'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: '/hizmetler/kaba-insaat'
    },
    {
      id: 5,
      title: 'DIŞ CEPHE MANTOLAMA',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: '/hizmetler/dis-cephe-mantolama'
    },
    {
      id: 6,
      title: 'MALZEME SATIŞI',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: '/hizmetler/malzeme-satisi'
    },
    {
      id: 7,
      title: 'PENCERE & KAPI MONTAJI',
      image: 'https://images.unsplash.com/photo-1534511902651-6ab0ce131f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: '/hizmetler/pencere-kapi-montaji'
    },
    {
      id: 8,
      title: 'TADİLAT & TAMİRAT',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      link: '/hizmetler/tadilat-tamirat'
    }
  ];

  return (
    <div className={styles.servicesPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>HİZMETLERİMİZ</h1>
          <div className={styles.description}>
            <div className={styles.leftContent}>
              <p>AKBAT CONSTRUCTION olarak, inşaat sektöründe anahtar teslim projelerden malzeme satışına, iç dekorasyondan çatı montajına kadar geniş bir hizmet yelpazesiyle yanınızdayız. Kaliteli malzemeler ve uzman ekibimizle, estetik ve dayanıklılığı bir araya getirerek yaşam alanlarınızı dönüştürüyoruz.</p>
            </div>
            <div className={styles.rightContent}>
              <p>Her projede müşteri memnuniyetini en üst seviyede tutmayı hedefliyoruz. Her hizmetimiz, projelerinizi sorunsuz ve etkili bir şekilde tamamlamak için profesyonel bir yaklaşımla sunulmaktadır.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link href={service.link} key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceImage}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    style={{ objectFit: 'cover' }}
                    priority={service.id <= 4}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <h3>{service.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 