import React from 'react';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimationProvider from './components/AnimationProvider';
import './globals.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
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
        
        {/* Favicon */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF5722" />
        
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body>
        <AnimationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
} 