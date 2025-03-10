'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      // Mevcut URL'yi al ve dili değiştir
      const currentPath = window.location.pathname;
      const segments = currentPath.split('/');
      
      // İlk segment dil kodu ise değiştir, değilse ekle
      if (segments.length > 1 && (segments[1] === 'tr' || segments[1] === 'fr')) {
        segments[1] = newLocale;
      } else {
        segments.splice(1, 0, newLocale);
      }
      
      const newPath = segments.join('/');
      router.push(newPath);
    });
  };

  return (
    <div className={styles.languageSwitcher}>
      <button 
        onClick={() => switchLocale('tr')} 
        className={`${styles.languageButton} ${locale === 'tr' ? styles.active : ''}`}
        aria-label="Türkçe"
        disabled={isPending}
      >
        TR
      </button>
      <span className={styles.divider}>|</span>
      <button 
        onClick={() => switchLocale('fr')} 
        className={`${styles.languageButton} ${locale === 'fr' ? styles.active : ''}`}
        aria-label="Français"
        disabled={isPending}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher; 