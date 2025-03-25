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

### 1. Framer Motion Entegrasyonu (Uygulandı ✅)

Framer Motion kütüphanesi projeye başarıyla entegre edildi.

### 2. Animasyon Bileşenleri Oluşturma (Uygulandı ✅)

Eksik animasyon bileşenleri (`FadeTransition`, `SlideTransition`, `ScaleTransition`) oluşturuldu ve `app/components` klasörüne eklendi.

### 3. Animasyon Sağlayıcı Bileşeni (Uygulandı ✅)

`AnimationProvider` bileşeni oluşturuldu ve `app/[locale]/layout.tsx` dosyasına entegre edildi.

### 4. Sayfa Bileşenlerini Sarmalama (Uygulandı ✅)

Ana sayfa (`app/[locale]/page.tsx`), hizmetler sayfası (`app/[locale]/hizmetler/page.tsx`), hakkımızda sayfası (`app/[locale]/hakkimizda/page.tsx`) ve iletişim sayfası (`app/[locale]/iletisim/page.tsx`) bileşenleri `FadeTransition` ile sarmalandı.

### 5. Varsayılan Animasyonlar (Uygulandı ✅)

Tüm sayfa bileşenleri varsayılan animasyon olan `FadeTransition` ile sarmalandı.

### 6. Özel Animasyonlar (Kısmen Uygulandı ⚠️)

Çatı montajı hizmeti sayfası (`app/[locale]/hizmetler/cati-montaji/page.tsx`) özel bir animasyon olan `SlideTransition` ile sarmalandı.

Diğer hizmet sayfaları için de özel animasyonlar uygulanabilir.

### Uygulama Adımları

1. ✅ `FadeTransition`, `SlideTransition` ve `ScaleTransition` bileşenleri oluşturuldu ve `app/components` klasörüne eklendi.
2. ✅ Tüm sayfa bileşenleri varsayılan animasyon bileşeni olan `FadeTransition` ile sarmalandı.
3. ⚠️ Çatı montajı hizmeti sayfası için özel animasyon (`SlideTransition`) uygulandı. Diğer hizmet sayfaları için de özel animasyonlar eklenebilir.
4. Animasyonların beklendiği gibi çalıştığından emin olmak için tüm sayfaları ve geçişleri test edin.
5. Performans sorunları olup olmadığını kontrol edin ve gerekirse optimizasyon yapın.

Bu adımları tamamladıktan sonra, AKBAT CONSTRUCTION web sitesi akıcı ve ilgi çekici sayfa geçişlerine sahip olacaktır. Kullanıcı deneyimi önemli ölçüde iyileşecek ve sitenin genel kalitesi artacaktır.

## Performans İyileştirmeleri

Web sitesinin performansını artırmak için aşağıdaki iyileştirmeleri yapmanızı öneririm:

### 1. Görüntü Optimizasyonu

- Next.js'in yerleşik `Image` bileşenini kullanarak görüntüleri optimize edin.
- Görüntüleri WebP veya AVIF formatlarında sunun.
- Uygun `width`, `height` ve `quality` özelliklerini belirtin.
- Kritik görüntüler için `priority` özelliğini kullanın.

### 2. Kod Bölümleme

- Dinamik import kullanarak kod bölümleme yapın.
- Sayfa bazında kod bölümleme için Next.js'in dinamik import özelliğini kullanın.
- Büyük kütüphaneleri veya bileşenleri isteğe bağlı olarak yükleyin.

### 3. Gereksiz Render'ları Önleme

- `React.memo`, `useMemo` ve `useCallback` kullanarak gereksiz render'ları önleyin.
- Sık değişmeyen verileri `useMemo` ile önbelleğe alın.
- Callback fonksiyonlarını `useCallback` ile sabitleyin.

### 4. Lazy Loading

- Görüntüler, videolar ve diğer ağır içerikler için lazy loading uygulayın.
- `next/image` bileşeninin `loading="lazy"` özelliğini kullanın.
- İçeriği görüntü alanına girdiğinde yüklemek için kütüphaneler kullanın (ör. `react-lazy-load-image-component`).

### 5. Önbelleğe Alma

- Sık kullanılan verileri önbelleğe almak için `react-query` veya `swr` gibi kütüphaneleri kullanın.
- Server tarafında önbelleğe alma için Next.js'in `getStaticProps` veya `getServerSideProps` yöntemlerini kullanın.
- CDN önbelleğe alma için `Cache-Control` ve `ETag` başlıklarını kullanın.

### 6. Paket Boyutunu Küçültme

- Kullanılmayan kütüphane ve bileşenleri kaldırın.
- Kod sıkıştırma için `terser` veya `esbuild` kullanın.
- Gereksiz CSS kodlarını kaldırmak için `PurgeCSS` kullanın.

### 7. Veritabanı Optimizasyonu

- Veritabanı sorgularını optimize edin.
- İndeksler ekleyerek sorgu performansını artırın.
- Büyük veri kümeleri için sayfalama veya sonsuz kaydırma uygulayın.

### 8. Sunucu Yanıt Sürelerini İyileştirme

- Sunucu yanıt sürelerini izleyin ve optimize edin.
- Yavaş API yanıtlarını belirlemek için profil oluşturma araçlarını kullanın.
- Ağır işlemleri arka planda veya iş parçacıkları kullanarak gerçekleştirin.

Bu performans iyileştirmeleri, AKBAT CONSTRUCTION web sitesinin daha hızlı yüklenmesini ve daha iyi bir kullanıcı deneyimi sunmasını sağlayacaktır.

## Sonuç

Yukarıda belirtilen öneriler ve iyileştirmeler, AKBAT CONSTRUCTION web sitesinin genel kalitesini ve kullanıcı deneyimini önemli ölçüde artıracaktır. Animasyonlu sayfa geçişleri, kullanıcıları daha akıcı ve ilgi çekici bir deneyimle buluştururken, performans optimizasyonları sitenin hızını ve yanıt verme süresini iyileştirecektir.

Bu değişiklikleri adım adım uygulamak, test etmek ve sürekli iyileştirmeler yapmak, AKBAT CONSTRUCTION'ın web varlığını sektördeki en iyi uygulamalara uygun hale getirecektir. 