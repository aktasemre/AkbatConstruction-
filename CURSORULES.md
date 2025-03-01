# AKBAT CONSTRUCTION - Geliştirme Kuralları

Bu belge, AKBAT CONSTRUCTION web sitesi projesinin geliştirme sürecinde uyulması gereken kuralları ve standartları içermektedir.

## Kod Yazım Standartları

### Genel Kurallar

- Tüm dosyalar UTF-8 kodlaması ile kaydedilmelidir.
- Satır sonları LF (Unix) formatında olmalıdır.
- Her dosya sonunda boş bir satır bırakılmalıdır.
- Tüm kodlar Türkçe yorum satırları ile açıklanmalıdır.
- Gereksiz boşluklar ve yorumlar temizlenmelidir.

### TypeScript / JavaScript

- TypeScript kullanılmalıdır.
- Değişken ve fonksiyon isimleri camelCase olmalıdır.
- Bileşen isimleri PascalCase olmalıdır.
- Sabitler UPPER_SNAKE_CASE olmalıdır.
- Her fonksiyon ve bileşen için JSDoc yorumları eklenmelidir.
- `any` tipi kullanımından kaçınılmalıdır.
- Tüm bileşenler fonksiyonel bileşen olarak yazılmalıdır.
- Tüm bileşenler 'use client' direktifi ile başlamalıdır.

### SCSS

- BEM (Block Element Modifier) metodolojisi kullanılmalıdır.
- Değişkenler için anlamlı isimler kullanılmalıdır.
- Medya sorguları için belirlenmiş breakpoint'ler kullanılmalıdır.
- Renk kodları için CSS değişkenleri kullanılmalıdır.
- Stil dosyaları ilgili bileşen dosyasıyla aynı isimde olmalıdır.

## Dosya Organizasyonu

- Tüm bileşenler `app/components` dizininde olmalıdır.
- Sayfa bileşenleri ilgili rota dizininde `page.tsx` olarak saklanmalıdır.
- Stil dosyaları `.module.scss` uzantısı ile kaydedilmelidir.
- Resimler `public/images` dizininde saklanmalıdır.
- Hizmet sayfaları `app/hizmetler/[hizmet-adi]` şeklinde organize edilmelidir.

## Git Kullanımı

- Commit mesajları Türkçe ve açıklayıcı olmalıdır.
- Her özellik veya düzeltme için ayrı bir branch oluşturulmalıdır.
- Branch isimleri `feature/ozellik-adi` veya `fix/hata-adi` formatında olmalıdır.
- Merge işlemleri Pull Request üzerinden yapılmalıdır.
- Kod incelemeleri (code review) zorunludur.

## Performans Optimizasyonu

- Resimler Next.js Image bileşeni ile optimize edilmelidir.
- Büyük bileşenler için lazy loading kullanılmalıdır.
- Bundle boyutunu küçültmek için gereksiz import'lardan kaçınılmalıdır.
- API çağrıları için caching mekanizmaları kullanılmalıdır.
- Lighthouse skorları düzenli olarak kontrol edilmelidir.

## Erişilebilirlik (Accessibility)

- Tüm görseller için anlamlı alt metinleri eklenmelidir.
- Semantik HTML etiketleri kullanılmalıdır.
- Klavye navigasyonu desteklenmelidir.
- Renk kontrastı WCAG standartlarına uygun olmalıdır.
- ARIA attribute'ları gerektiğinde kullanılmalıdır.

## Responsive Tasarım

- Mobile-first yaklaşımı benimsenmelidir.
- Standart breakpoint'ler: 
  - Mobil: 768px'e kadar
  - Tablet: 768px - 1024px
  - Masaüstü: 1024px ve üzeri
- Tüm bileşenler responsive olarak tasarlanmalıdır.
- Farklı cihazlarda test edilmelidir.

## Güvenlik

- Kullanıcı girdileri doğrulanmalı ve temizlenmelidir.
- API anahtarları ve hassas bilgiler environment variable'larda saklanmalıdır.
- Cross-Site Scripting (XSS) saldırılarına karşı önlem alınmalıdır.
- Content Security Policy (CSP) uygulanmalıdır.

## Derleme ve Deployment

- Deployment öncesi `npm run build` komutu çalıştırılmalıdır.
- TypeScript hataları ve lint uyarıları giderilmelidir.
- Deployment için Vercel veya Netlify tercih edilmelidir.
- Her deployment öncesi test edilmelidir.

## İyileştirme Önerileri

Aşağıdaki konularda iyileştirmeler yapılabilir:

1. SEO optimizasyonu için meta etiketleri ve yapılandırılmış veri eklenmesi
2. Çoklu dil desteği eklenmesi
3. Form validasyonu için Formik veya React Hook Form entegrasyonu
4. Animasyonlar için Framer Motion kullanımı
5. State yönetimi için Context API veya Redux implementasyonu
6. Unit ve integration testleri eklenmesi
7. CI/CD pipeline kurulması
8. Tema değiştirme özelliği (açık/koyu tema)
9. Performans izleme araçları entegrasyonu
10. PWA (Progressive Web App) desteği eklenmesi 