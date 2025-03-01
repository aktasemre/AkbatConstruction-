'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.contactInfo}>
            <a href="tel:+33630508536">
              <i className="fas fa-phone"></i>
              <span>+33 6 30 50 85 36</span>
            </a>
            <a href="mailto:info@akbatconstruction.com">
              <i className="fas fa-envelope"></i>
              <span>info@akbatconstruction.com</span>
            </a>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/33630508536" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image 
              src="/images/logo.jpg" 
              alt="AKBAT CONSTRUCTION" 
              width={150} 
              height={60}
              priority
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
            onClick={handleMenuClick}
            aria-label="Menü"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
            <ul>
              <li><Link href="/" onClick={closeMenu}>Ana Sayfa</Link></li>
              <li><Link href="/hakkimizda" onClick={closeMenu}>Hakkımızda</Link></li>
              <li><Link href="/hizmetler" onClick={closeMenu}>Hizmetlerimiz</Link></li>
              <li><Link href="/projeler" onClick={closeMenu}>Projelerimiz</Link></li>
              <li><Link href="/iletisim" onClick={closeMenu}>İletişim</Link></li>
            </ul>
          </nav>

          <div className={styles.cta}>
            <a href="tel:+33630508536" className={styles.phone}>
              <i className="fas fa-phone"></i>
              <span>Bizi Arayın</span>
            </a>
            <Link href="/iletisim" className={styles.button} onClick={closeMenu}>
              Teklif Alın
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 