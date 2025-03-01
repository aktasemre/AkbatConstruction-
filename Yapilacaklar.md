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
   - Footer'da hizmet bölgeleri için linkler var (Samsun, İlkadım, Atakum vb.) ancak bu sayfalar mevcut değil.
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