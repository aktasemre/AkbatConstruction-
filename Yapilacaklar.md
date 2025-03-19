# AKBAT CONSTRUCTION - Yapılacaklar Listesi

Bu belge, AKBAT CONSTRUCTION web sitesi projesinde değiştirilmesi veya iyileştirilmesi gereken noktaları içermektedir.

## Değiştirilmesi Gereken Yerler ve Öneriler

1. **Footer.tsx Dosyasındaki E-posta Hatası**: ✅ YAPILDI
   - 124. satırda `<link rel="stylesheet" href="aktasemre1988@gmail.com" />` şeklinde hatalı bir kullanım var. Bu bir link etiketi değil, e-posta adresi olmalı.
   - Öneri: Bu satırı tamamen kaldırın veya doğru bir şekilde düzenleyin.

2. **Resim Yolları ve Eksik Görseller**: ✅ YAPILDI
   - Birçok sayfada `/images/...` yolları kullanılmış ancak bu görsellerin varlığı kontrol edilmeli.
   - Özellikle `/images/brands/...` ve `/images/ceo.jpg` gibi görsellerin public klasöründe olduğundan emin olunmalı.
   - Öneri: Tüm görselleri public/images klasörüne ekleyin veya Unsplash gibi dış kaynaklardan alınan görselleri kullanın.

3. **Hizmet Bölgesi Sayfaları Eksik**:
   - Footer'da hizmet bölgeleri için linkler var (Vannes, Rennes, Nantes vb.) ancak bu sayfalar mevcut değil.
   - Öneri: `/bolge/[slug]` şeklinde dinamik sayfalar oluşturun.

4. **Projeler Sayfası Eksik**:
   - Header'da "Projelerimiz" linki var ancak bu sayfa mevcut değil.
   - Öneri: `/projeler` sayfası oluşturun.

5. **Kullanım Koşulları ve Gizlilik Politikası Sayfaları Eksik**: ✅ YAPILDI
   - Footer'da bu sayfalara linkler var ancak sayfalar mevcut değil.
   - Öneri: `/kullanim-kosullari` ve `/gizlilik-politikasi` sayfaları oluşturun.

6. **İletişim Formu Fonksiyonalitesi**: ✅ YAPILDI
   - İletişim sayfasında form var ancak form gönderimi için gerekli fonksiyonlar eksik.
   - Öneri: Form gönderimi için API route oluşturun veya bir form servisi (Formspree, Netlify Forms vb.) kullanın.

7. **SEO Optimizasyonu**:
   - Her sayfa için özel meta etiketleri ve açıklamalar eklenmeli.
   - Öneri: Her sayfaya özel metadata.ts dosyaları ekleyin.

8. **Responsive Tasarım İyileştirmeleri**: ✅ YAPILDI
   - Mobil görünümde bazı düzenlemeler gerekebilir, özellikle Header ve Footer bileşenlerinde.
   - Öneri: Farklı ekran boyutlarında test edin ve gerekli düzenlemeleri yapın.

9. **Performans İyileştirmeleri**:
   - Büyük resimler için lazy loading ve öncelik ayarları yapılmalı.
   - Öneri: Image bileşeninde priority, loading ve sizes özelliklerini optimize edin.

10. **Kod Tekrarlarının Azaltılması**:
    - Hizmet sayfalarında benzer kodlar tekrarlanıyor.
    - Öneri: Ortak bileşenler oluşturun ve sayfalarda bu bileşenleri kullanın.

11. **Animasyon ve Geçiş Efektleri**: ✅ YAPILDI
    - Kullanıcı deneyimini artırmak için daha fazla animasyon eklenebilir.
    - Öneri: Framer Motion gibi bir kütüphane kullanarak sayfa geçişleri ve bileşen animasyonları ekleyin.

12. **Favicon ve Manifest Dosyaları**: ✅ YAPILDI
    - Favicon ve manifest dosyaları eksik veya güncel değil.
    - Öneri: Uygun favicon ve manifest.json dosyaları ekleyin.

13. **Dil Desteği**:
    - Şu anda sadece Türkçe dil desteği var.
    - Öneri: İngilizce gibi ek dil seçenekleri eklemek için next-intl veya benzer bir kütüphane kullanın.

14. **Tema Desteği**:
    - Açık/koyu tema seçeneği eklenebilir.
    - Öneri: CSS değişkenleri ve Context API kullanarak tema değiştirme özelliği ekleyin.

15. **Sosyal Medya Entegrasyonu**:
    - Sosyal medya hesaplarına bağlantılar var ancak gerçek hesaplar belirtilmemiş.
    - Öneri: Gerçek sosyal medya hesaplarının URL'lerini ekleyin.

16. **Build Hataları**: ✅ YAPILDI
    - Layout dosyasında 'use client' direktifi ile metadata çakışması
    - İletişim sayfasında eksik linkText özelliği
    - Öneri: AnimationProvider bileşeni oluşturarak client-side kodları ayrı bir bileşene taşıyın ve tip hatalarını düzeltin.

17. **Fransızca Dil Desteği Ekleme**:
    - Şirket merkezi Fransa'nın Vannes şehri olduğu için Fransızca dil desteği eklenmeli.
    - Aşağıdaki adımlar izlenerek Fransızca dil desteği eklenebilir:

    #### Adım 1: Next.js Internationalization (i18n) Kurulumu
    ```bash
    npm install next-intl
    ```

    #### Adım 2: Dil Dosyalarını Oluşturma
    - `/messages` klasörü oluşturun
    - `/messages/tr.json` ve `/messages/fr.json` dosyalarını oluşturun
    - Her dil için çeviri metinlerini bu dosyalara ekleyin

    #### Adım 3: Middleware Oluşturma
    - `/middleware.ts` dosyası oluşturun ve dil yönlendirmelerini yapılandırın
    ```typescript
    import createMiddleware from 'next-intl/middleware';
    
    export default createMiddleware({
      locales: ['tr', 'fr'],
      defaultLocale: 'tr'
    });
    
    export const config = {
      matcher: ['/((?!api|_next|.*\\..*).*)']
    };
    ```

    #### Adım 4: Rota Yapılandırması
    - `/app` klasörü yerine `/app/[locale]` yapısını kullanın
    - Mevcut sayfaları bu yapıya taşıyın

    #### Adım 5: Dil Sağlayıcısı Oluşturma
    - `/app/[locale]/layout.tsx` dosyasını güncelleyin
    ```typescript
    import { NextIntlClientProvider } from 'next-intl';
    
    export default async function LocaleLayout({
      children,
      params: { locale }
    }) {
      const messages = (await import(`../../messages/${locale}.json`)).default;
    
      return (
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      );
    }
    ```

    #### Adım 6: Çeviri Kullanımı
    - Metinleri çevirmek için `useTranslations` hook'unu kullanın
    ```typescript
    'use client';
    import { useTranslations } from 'next-intl';
    
    export default function Component() {
      const t = useTranslations('Common');
      
      return <h1>{t('title')}</h1>;
    }
    ```

    #### Adım 7: Dil Değiştirme Bileşeni
    - Header'a dil değiştirme bileşeni ekleyin
    ```typescript
    'use client';
    import { usePathname, useRouter } from 'next-intl/client';
    import { useLocale } from 'next-intl';
    
    export default function LanguageSwitcher() {
      const locale = useLocale();
      const router = useRouter();
      const pathname = usePathname();
      
      const switchLocale = (newLocale) => {
        router.replace(pathname, { locale: newLocale });
      };
      
      return (
        <div>
          <button onClick={() => switchLocale('tr')} disabled={locale === 'tr'}>TR</button>
          <button onClick={() => switchLocale('fr')} disabled={locale === 'fr'}>FR</button>
        </div>
      );
    }
    ```

    #### Adım 8: Metadata Yapılandırması
    - Her dil için ayrı metadata tanımlayın
    ```typescript
    export async function generateMetadata({ params: { locale } }) {
      return {
        title: locale === 'tr' 
          ? 'AKBAT CONSTRUCTION - İnşaat ve Yapı Hizmetleri | Vannes, Fransa'
          : 'AKBAT CONSTRUCTION - Services de Construction | Vannes, France',
        description: locale === 'tr'
          ? 'AKBAT CONSTRUCTION olarak 25 yıllık tecrübemizle Vannes ve çevresinde anahtar teslim ev, iç dekorasyon, dış cephe mantolama, çatı montajı ve tadilat hizmetleri sunuyoruz.'
          : 'AKBAT CONSTRUCTION propose des services de construction clé en main, décoration intérieure, isolation extérieure, montage de toiture et rénovation à Vannes et ses environs avec 25 ans d\'expérience.'
      };
    }
    ```

    #### Adım 9: Statik Sayfaları Yapılandırma
    - `next.config.js` dosyasını güncelleyin
    ```javascript
    const withNextIntl = require('next-intl/plugin')('./i18n.js');
    
    module.exports = withNextIntl({
      // Diğer Next.js yapılandırmaları
    });
    ```

    #### Adım 10: Fransızca İçerik Oluşturma
    - Tüm sayfalar için Fransızca içerik oluşturun
    - Fransızca metinleri `/messages/fr.json` dosyasına ekleyin 



## Sayfa Geçişleri İçin Animasyon Stratejisi

AKBAT CONSTRUCTION web sitesinin kullanıcı deneyimini geliştirmek için sayfa geçişlerinde animasyonlar eklemek üzere aşağıdaki stratejiyi öneriyoruz:

### 1. Framer Motion Entegrasyonu

Framer Motion, React uygulamalarında animasyon oluşturmak için en popüler ve güçlü kütüphanelerden biridir. Mevcut projemize entegre edilmesi kolay ve performans açısından verimlidir.

#### Kurulum Adımı:
```bash
npm install framer-motion
```

### 2. Sayfa Geçiş Bileşeni Oluşturma

Tüm sayfa geçişleri için kullanılacak bir `PageTransition` bileşeni oluşturacağız:

```tsx
// app/components/PageTransition.tsx
'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      className="page-transition-container"
    >
      {children}
    </motion.div>
  );
}
```

### 3. Layout Dosyasına Entegrasyon

Mevcut `app/[locale]/layout.tsx` dosyasını güncelleyerek her sayfa geçişinde animasyon sağlayabiliriz:

```tsx
// app/[locale]/layout.tsx içinde
import PageTransition from '@/app/components/PageTransition';

// ...diğer kodlar

return (
  <html lang={locale}>
    <body className={inter.className}>
      <AnimationProvider>
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </AnimationProvider>
    </body>
  </html>
);
```

### 4. Özel Geçiş Efektleri

Farklı sayfa türleri için özel geçiş efektleri tanımlayabiliriz:

#### Hizmet Sayfaları İçin:
```tsx
// app/components/ServiceTransition.tsx
'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const serviceVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  enter: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

export default function ServiceTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={serviceVariants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

### 5. Bileşen Düzeyinde Animasyonlar

Sayfa içindeki bileşenler için kademeli animasyonlar uygulayabiliriz:

```tsx
// Örnek kullanım
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ServicesGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="services-grid"
    >
      {services.map((service, index) => (
        <motion.div key={index} variants={item} className="service-card">
          {/* Hizmet içeriği */}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### 6. Sayfa Yönüne Bağlı Geçişler

Kullanıcı deneyimini iyileştirmek için, navigasyon yönüne göre farklı geçiş efektleri uygulayabiliriz:

```tsx
// app/components/DirectionalTransition.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function DirectionalTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState('');
  const [direction, setDirection] = useState('forward');
  
  useEffect(() => {
    if (prevPath === '') {
      setPrevPath(pathname);
      return;
    }
    
    // Sayfa derinliğini kontrol et
    const prevDepth = (prevPath.match(/\//g) || []).length;
    const currentDepth = (pathname.match(/\//g) || []).length;
    
    if (prevDepth < currentDepth) {
      setDirection('forward');
    } else if (prevDepth > currentDepth) {
      setDirection('backward');
    } else {
      // Aynı derinlikte - yol adı karşılaştırması yap
      setDirection(prevPath < pathname ? 'forward' : 'backward');
    }
    
    setPrevPath(pathname);
  }, [pathname]);
  
  const variants = {
    forward: {
      hidden: { opacity: 0, x: 50 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -50 },
    },
    backward: {
      hidden: { opacity: 0, x: -50 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 50 },
    },
  };
  
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants[direction]}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### 7. Performans Optimizasyonu

Animasyonların performansını optimize etmek için şunları yapmalıyız:

- CSS transform ve opacity özelliklerini kullanarak GPU hızlandırmasından faydalanma
- Karmaşık animasyonları sadece masaüstü cihazlarda etkinleştirme
- Tüm animasyonlar için `will-change` CSS özelliğini kullanma

### 8. Erişilebilirlik

Animasyonları erişilebilir hale getirmek için:

```tsx
// Kullanıcı tercihleri için animasyonları devre dışı bırakma
// app/components/PageTransition.tsx içinde

import { useReducedMotion } from 'framer-motion';

export default function PageTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = shouldReduceMotion 
    ? {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
      };
  
  // ...geri kalan kod
}
```

### 9. Uygulama Planı

1. Framer Motion'ı projeye ekle
2. Temel sayfa geçiş bileşenini oluştur
3. Layout dosyasına entegre et
4. Farklı sayfa türleri için özel geçişler geliştir
5. Sayfa içi bileşenler için kademeli animasyonlar ekle
6. Tarayıcı performansını test et ve optimize et
7. Erişilebilirlik uyarlamalarını ekle

Bu strateji, modern web geliştirme standartlarına uygun olarak AKBAT CONSTRUCTION web sitesinde sayfa geçişleri için profesyonel, akıcı ve duyarlı animasyonlar sağlayacaktır. 