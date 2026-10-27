import '../css/variables.css';
import '../css/base.css';
import '../css/components.css';
import '../css/sections.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import LightboxModal from '../components/LightboxModal';

export const metadata = {
  metadataBase: new URL('https://navyuginfragen.com'),
  title: {
    default: 'Navyug Infragen | Precast Concrete Products & Infrastructure Solutions (Since 1964)',
    template: '%s | Navyug Infragen',
  },
  description: 'Established in 1964, Navyug Infragen is a premier Indian manufacturer of high-strength precast concrete products, paver blocks, and turnkey civil infrastructure solutions with units in Morbi and Ahmedabad.',
  keywords: [
    'Navyug Infragen',
    'precast concrete',
    'paver blocks manufacturer Gujarat',
    'curb stones India',
    'RE blocks',
    'retaining walls',
    'fuel station construction',
    'zero cement pavers',
    'uncarbon pavers',
    'fly ash bricks',
    'Morbi precast',
    'Ahmedabad precast',
  ],
  authors: [{ name: 'Navyug Infragen Private Limited' }],
  icons: {
    icon: '/assets/images/branding/navyug-logo-mark.png',
  },
  openGraph: {
    title: 'Navyug Infragen | Precast Concrete Products & Infrastructure Solutions',
    description: 'Innovating Concrete. Sustaining Futures. 64 years of precast engineering excellence across India.',
    url: 'https://navyuginfragen.com',
    siteName: 'Navyug Infragen',
    images: [
      {
        url: '/assets/images/branding/navyug-logo-full.jpeg',
        width: 1200,
        height: 630,
        alt: 'Navyug Infragen Private Limited',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Navyug Infragen | Precast Concrete Products',
    description: 'Innovating Concrete. Sustaining Futures. 64 years of precast engineering excellence across India.',
    images: ['/assets/images/branding/navyug-logo-full.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <LightboxModal />
      </body>
    </html>
  );
}
