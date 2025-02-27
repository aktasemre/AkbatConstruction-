'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

const AboutPage = () => {
  const stats = [
    {
      number: '25 YIL',
      title: 'İnşaat Sektöründe Tecrübe ve Güven',
      icon: '🏗️'
    },
    {
      number: '1M+',
      title: 'Kullanılan Yapı Malzemeleri',
      icon: '🏢'
    },
    {
      number: '500+',
      title: 'Tamamlanan Projeler',
      icon: '📋'
    }
  ];

  const values = [
    {
      id: 1,
      title: '1. GÜVENİN ADRESİYİZ',
      description: 'Her işimizde müşterilerimizin güvenini kazandık, kazanmaya devam ediyoruz.'
    },
    {
      id: 2,
      title: '2. KALİTEDEN ÖDÜN VERMİYORUZ',
      description: 'Her projede mükemmeliyeti arıyor, kalıcı çözümler üretiyoruz.'
    },
    {
      id: 3,
      title: '3. BERABER DAHA GÜÇLÜYÜZ',
      description: 'Ekip çalışması ve dayanışma ile en büyük zorlukların üstesinden geliyoruz.'
    }
  ];

  const brands = [
    { name: 'DYO', image: '/images/brands/dyo.png' },
    { name: 'Alvit', image: '/images/brands/alvit.png' },
    { name: 'ECA', image: '/images/brands/eca.png' },
    { name: 'Marshall', image: '/images/brands/marshall.png' }
  ];

  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>27 YILLIK TECRÜBE İLE KALİTELİ VE GÜVENLİ İNŞAAT ÇÖZÜMLERİ</h1>
          <div className={styles.description}>
            <div className={styles.leftContent}>
              <p>ESİ YAPI olarak, inşaat sektöründe 1998'den bu yana sunduğumuz hizmetlerle köklü bir geçmişe sahibiz. Kurucumuz Yılmaz Çekli'nin nesiller boyunca süregelen tecrübeleri ve inşaata dair derin bilgi birikimi, Samsun ve çevresinde yüzlerce projede kendini göstermiştir. Bu birikimi daha ileri taşımak ve geleceğin yapılarını şekillendirmek adına, kaliteli, güvenilir ve yenilikçi çözümler sunmaya devam ediyoruz.</p>
            </div>
            <div className={styles.rightContent}>
              <p>Yılların getirdiği tecrübemiz, sürekli gelişen inşaat teknolojileri ile harmanlanıyor ve projelerimizde modern tekniklerle güçlü yapılar inşa ediyoruz. Malzeme satışı, anahtar teslim projeler ve tadilat çözümleri ile sektörde fark yaratıyoruz. Yılmaz İnşaat olarak, müşteri memnuniyetini en ön planda tutuyor ve her projeye büyük bir titizlikle yaklaşıyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.experience}>
        <div className={styles.container}>
          <div className={styles.title}>
            <span>DENEYİM, ŞEFFAFLIK VE SONUÇLAR</span>
          </div>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <span className={styles.icon}>{stat.icon}</span>
                <h2>{stat.number}</h2>
                <p>{stat.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className={styles.container}>
          <h2>HER PROJEYE DEĞER KATAN YAKLAŞIM</h2>
          <p>ESİ YAPI olarak, müşteri memnuniyetini her şeyin önüne koyuyoruz. Projelerimizin her aşamasında, müşterilerimize kendilerini değerli hissettirecek güçlü bağlar kurmaya odaklanıyoruz. 25 yılı aşkın tecrübemizle, her projeye bir dost gibi yaklaşarak en iyi çözümleri sunuyoruz. Güvenilir, sürdürülebilir ve yenilikçi inşaat çözümlerimizle, kalite ve başarıyı bir araya getiriyoruz.</p>
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.container}>
          <h2>KÖKLÜ GEÇMİŞTEN GÜÇ ALIYORUZ</h2>
          <p>İnşaat sektöründe yılların tecrübesiyle köklü bir yapı oluşturuyor, her projede sağlam bir temel atıyoruz.</p>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.id} className={styles.valueCard}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.brands}>
        <div className={styles.container}>
          <h2>ÇALIŞTIĞIMIZ MARKALAR</h2>
          <p>Projelerimizde, sektörün lider markalarıyla çalışarak kaliteyi ve güveni bir araya getiriyoruz. Dayanıklı, estetik ve uzun ömürlü çözümler için en iyi malzemeleri tercih ediyoruz.</p>
          <div className={styles.brandsGrid}>
            {brands.map((brand, index) => (
              <div key={index} className={styles.brandCard}>
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={150}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ceo}>
        <div className={styles.container}>
          <div className={styles.ceoContent}>
            <div className={styles.ceoImage}>
              <Image
                src="/images/ceo.jpg"
                alt="Yılmaz Çekli"
                width={400}
                height={400}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.ceoText}>
              <blockquote>
                "25 yılı aşkın süredir inşaat sektöründe yenilikçi çözümler sunuyoruz. Bugün, hedefimiz sürdürülebilir projelerle geleceğin inşaat sektörünü şekillendirmek ve güvenli yapılarla topluma katkı sağlamak. Birlikte, daha yeşil ve güvenli yarınlar inşa ediyoruz."
              </blockquote>
              <cite>YILMAZ ÇEKLİ</cite>
              <span>Kurucu</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 