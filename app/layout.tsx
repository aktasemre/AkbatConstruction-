import React from 'react';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.scss';

export const metadata = {
  title: 'AKBAT CONSTRUCTION - İnşaat ve Yapı Hizmetleri',
  description: 'AKBAT CONSTRUCTION olarak 25 yıllık tecrübemizle anahtar teslim ev, iç dekorasyon, dış cephe mantolama, çatı montajı ve tadilat hizmetleri sunuyoruz.',
  keywords: 'inşaat, yapı, tadilat, dekorasyon, mantolama, çatı, Samsun',
  authors: [{ name: 'AKBAT CONSTRUCTION' }],
  creator: 'AKBAT CONSTRUCTION',
  publisher: 'AKBAT CONSTRUCTION',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 