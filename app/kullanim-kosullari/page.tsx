'use client';

import React from 'react';
import Link from 'next/link';
import styles from './page.module.scss';

const KullanimKosullariPage = () => {
  return (
    <div className={styles.termsPage}>
      <div className={styles.container}>
        <h1>KULLANIM KOŞULLARI</h1>
        
        <div className={styles.content}>
          <section>
            <h2>1. GİRİŞ</h2>
            <p>Bu web sitesini kullanarak, aşağıda belirtilen kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, lütfen sitemizi kullanmayınız.</p>
          </section>

          <section>
            <h2>2. SİTE KULLANIMI</h2>
            <p>AKBAT CONSTRUCTION web sitesini kullanırken, tüm yürürlükteki yasa ve yönetmeliklere uymayı kabul edersiniz. Sitemizi yasadışı veya bu koşulları ihlal edecek şekilde kullanmanız yasaktır.</p>
          </section>

          <section>
            <h2>3. FİKRİ MÜLKİYET HAKLARI</h2>
            <p>Bu sitede yer alan tüm içerik (metin, grafikler, logolar, düğme simgeleri, görseller, ses klipleri, dijital indirmeler, veri derlemeleri ve yazılım dahil) AKBAT CONSTRUCTION'ın mülkiyetindedir ve telif hakkı yasaları tarafından korunmaktadır.</p>
          </section>

          <section>
            <h2>4. SORUMLULUK REDDİ</h2>
            <p>Bu sitedeki bilgiler "olduğu gibi" sunulmaktadır. AKBAT CONSTRUCTION, sitedeki bilgilerin doğruluğu, eksiksizliği veya güncelliği konusunda hiçbir garanti vermemektedir.</p>
          </section>

          <section>
            <h2>5. ÜÇÜNCÜ TARAF BAĞLANTILARI</h2>
            <p>Sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca bilgi amaçlıdır ve AKBAT CONSTRUCTION, bu sitelerin içeriği veya gizlilik politikaları üzerinde hiçbir kontrole sahip değildir.</p>
          </section>

          <section>
            <h2>6. KULLANIM KOŞULLARINDA DEĞİŞİKLİKLER</h2>
            <p>AKBAT CONSTRUCTION, bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler, web sitemizde yayınlandıktan sonra geçerli olacaktır.</p>
          </section>

          <section>
            <h2>7. İLETİŞİM</h2>
            <p>Bu kullanım koşulları hakkında sorularınız varsa, lütfen <a href="mailto:info@akbatconstruction.com">info@akbatconstruction.com</a> adresinden bizimle iletişime geçin.</p>
          </section>
        </div>

        <div className={styles.backLink}>
          <Link href="/">Ana Sayfaya Dön</Link>
        </div>
      </div>
    </div>
  );
};

export default KullanimKosullariPage; 