'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

const GizlilikPolitikasiPage = () => {
  return (
    <div className={styles.privacyPage}>
      <div className={styles.container}>
        <h1>GİZLİLİK POLİTİKASI</h1>
        
        <div className={styles.content}>
          <section>
            <h2>1. GİRİŞ</h2>
            <p>AKBAT CONSTRUCTION olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin korunmasına önem veriyoruz. Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.</p>
          </section>

          <section>
            <h2>2. TOPLANAN BİLGİLER</h2>
            <p>Web sitemizi ziyaret ettiğinizde, iletişim formlarını doldurduğunuzda veya hizmetlerimizi talep ettiğinizde aşağıdaki bilgileri toplayabiliriz:</p>
            <ul>
              <li>Ad, soyad, e-posta adresi, telefon numarası gibi iletişim bilgileri</li>
              <li>IP adresi, tarayıcı türü, ziyaret saati gibi teknik bilgiler</li>
              <li>Hizmetlerimizle ilgili tercihleriniz ve talepleriniz</li>
            </ul>
          </section>

          <section>
            <h2>3. BİLGİLERİN KULLANIMI</h2>
            <p>Topladığımız bilgileri aşağıdaki amaçlar için kullanabiliriz:</p>
            <ul>
              <li>Hizmetlerimizi sunmak ve geliştirmek</li>
              <li>Taleplerinize yanıt vermek ve müşteri hizmetleri sağlamak</li>
              <li>Sizinle iletişim kurmak ve bilgilendirmek</li>
              <li>Web sitemizin güvenliğini ve işlevselliğini sağlamak</li>
            </ul>
          </section>

          <section>
            <h2>4. BİLGİLERİN PAYLAŞIMI</h2>
            <p>Kişisel bilgilerinizi, yasal zorunluluklar dışında, önceden izniniz olmadan üçüncü taraflarla paylaşmayız. Bilgileriniz, hizmet sağlayıcılarımız, iş ortaklarımız veya yasal mercilerle paylaşılabilir.</p>
          </section>

          <section>
            <h2>5. ÇEREZLER</h2>
            <p>Web sitemiz, deneyiminizi geliştirmek için çerezler kullanabilir. Çerezler, tarayıcınız tarafından cihazınıza yerleştirilen küçük metin dosyalarıdır. Tarayıcı ayarlarınızı değiştirerek çerezleri devre dışı bırakabilirsiniz.</p>
          </section>

          <section>
            <h2>6. GÜVENLİK</h2>
            <p>Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel önlemler alıyoruz. Ancak, internet üzerinden veri iletiminin %100 güvenli olmadığını unutmayın.</p>
          </section>

          <section>
            <h2>7. HAKLARINIZ</h2>
            <p>Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
            <ul>
              <li>Verilerinize erişim talep etme</li>
              <li>Verilerinizin düzeltilmesini veya silinmesini talep etme</li>
              <li>Verilerinizin işlenmesine itiraz etme</li>
              <li>Veri taşınabilirliği talep etme</li>
            </ul>
          </section>

          <section>
            <h2>8. POLİTİKA DEĞİŞİKLİKLERİ</h2>
            <p>Bu gizlilik politikasını herhangi bir zamanda değiştirme hakkını saklı tutuyoruz. Değişiklikler, web sitemizde yayınlandıktan sonra geçerli olacaktır.</p>
          </section>

          <section>
            <h2>9. İLETİŞİM</h2>
            <p>Gizlilik politikamız hakkında sorularınız varsa, lütfen <a href="mailto:info@akbatconstruction.com">info@akbatconstruction.com</a> adresinden bizimle iletişime geçin.</p>
          </section>
        </div>

        <div className={styles.backLink}>
          <Link href="/">Ana Sayfaya Dön</Link>
        </div>
      </div>
    </div>
  );
};

export default GizlilikPolitikasiPage; 