# AKBAT CONSTRUCTION Proje Yapısı

Bu belge, AKBAT CONSTRUCTION web sitesi projesinin yapısını ve sayfalarını açıklamaktadır.

## Proje Yapısı

Proje, Next.js App Router yapısını kullanmaktadır ve çoklu dil desteği için next-intl kütüphanesi entegre edilmiştir.

### Dil Desteği

- Türkçe (tr) - Varsayılan dil
- Fransızca (fr)

## Sayfalar

### Ana Sayfa
- **Dosya Yolu:** `/app/[locale]/page.tsx`
- **Açıklama:** Şirketin ana sayfası, hizmetlerin genel tanıtımı ve öne çıkan projeler.

### Hakkımızda
- **Dosya Yolu:** `/app/[locale]/hakkimizda/page.tsx`
- **Açıklama:** Şirket hakkında detaylı bilgiler, değerler ve ekip.

### Hizmetler
- **Dosya Yolu:** `/app/[locale]/hizmetler/page.tsx`
- **Açıklama:** Tüm hizmetlerin listelendiği sayfa.

#### Hizmet Detay Sayfaları
- **Dosya Yolu:** `/app/[locale]/hizmetler/[slug]/page.tsx`
- **Açıklama:** Dinamik olarak oluşturulan hizmet detay sayfaları.

1. **Anahtar Teslim Ev**
   - **URL:** `/[locale]/hizmetler/anahtar-teslim-ev`

2. **Çatı Montajı**
   - **URL:** `/[locale]/hizmetler/cati-montaji`

3. **Dış Cephe Mantolama**
   - **URL:** `/[locale]/hizmetler/dis-cephe-mantolama`

4. **İç Dekorasyon**
   - **URL:** `/[locale]/hizmetler/ic-dekorasyon`

5. **Kaba İnşaat**
   - **URL:** `/[locale]/hizmetler/kaba-insaat`

6. **Malzeme Satışı**
   - **URL:** `/[locale]/hizmetler/malzeme-satisi`

7. **Pencere ve Kapı Montajı**
   - **URL:** `/[locale]/hizmetler/pencere-kapi-montaji`

8. **Tadilat ve Tamirat**
   - **URL:** `/[locale]/hizmetler/tadilat-tamirat`

### İletişim
- **Dosya Yolu:** `/app/[locale]/iletisim/page.tsx`
- **Açıklama:** İletişim bilgileri ve iletişim formu.

### Yasal Sayfalar
1. **Gizlilik Politikası**
   - **Dosya Yolu:** `/app/[locale]/gizlilik-politikasi/page.tsx`

2. **Kullanım Koşulları**
   - **Dosya Yolu:** `/app/[locale]/kullanim-kosullari/page.tsx`

## Bileşenler

### Header
- **Dosya Yolu:** `/app/components/Header.tsx`
- **Açıklama:** Sitenin üst kısmında yer alan navigasyon menüsü.

### Footer
- **Dosya Yolu:** `/app/components/Footer.tsx`
- **Açıklama:** Sitenin alt kısmında yer alan bilgiler ve linkler.

### Dil Değiştirici
- **Dosya Yolu:** `/app/components/LanguageSwitcher.tsx`
- **Açıklama:** Dil değiştirme bileşeni.

### Animasyon Sağlayıcı
- **Dosya Yolu:** `/app/components/AnimationProvider.tsx`
- **Açıklama:** Sayfa animasyonları için sağlayıcı bileşen.

## Stil Dosyaları

### Global Stiller
- **Dosya Yolu:** `/app/[locale]/globals.scss`
- **Açıklama:** Tüm site için geçerli olan global stil tanımlamaları.

### Animasyonlar
- **Dosya Yolu:** `/app/styles/animations.scss`
- **Açıklama:** Animasyon tanımlamaları.

### Sayfa Stilleri
Her sayfa için ayrı bir module.scss dosyası bulunmaktadır:
- `/app/[locale]/page.module.scss` - Ana sayfa
- `/app/[locale]/hakkimizda/page.module.scss` - Hakkımızda sayfası
- `/app/[locale]/hizmetler/page.module.scss` - Hizmetler sayfası
- `/app/[locale]/hizmetler/[slug]/page.module.scss` - Hizmet detay sayfaları
- `/app/[locale]/iletisim/page.module.scss` - İletişim sayfası
- `/app/[locale]/gizlilik-politikasi/page.module.scss` - Gizlilik Politikası sayfası
- `/app/[locale]/kullanim-kosullari/page.module.scss` - Kullanım Koşulları sayfası

## Çoklu Dil Yapılandırması

### Dil Dosyaları
- **Dosya Yolu:** `/messages/tr.json` - Türkçe çeviriler
- **Dosya Yolu:** `/messages/fr.json` - Fransızca çeviriler

### Yapılandırma Dosyaları
- **Dosya Yolu:** `/next-intl.config.js` - next-intl yapılandırması
- **Dosya Yolu:** `/middleware.ts` - Dil yönlendirmeleri için middleware
- **Dosya Yolu:** `/i18n.ts` - Dil yapılandırması 