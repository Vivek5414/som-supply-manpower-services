import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://sommanpower.com'),
  title: {
    template: '%s | SOM Supply and Manpower Services',
    default: 'SOM Supply and Manpower Services | Facility Management & Manpower Supply in Indore'
  },
  description: 'SOM Supply and Manpower Services provides reliable commercial housekeeping, industrial cleaning, office support staff, and verified manpower supply in Indore, Madhya Pradesh.',
  keywords: [
    'Manpower Supply Indore',
    'Housekeeping Services Indore',
    'Facility Management Indore',
    'Corporate Cleaning Madhya Pradesh',
    'Office Staffing Indore',
    'Industrial Cleaning Services',
    'Deep Cleaning Services Indore'
  ],
  authors: [{ name: 'SOM Supply and Manpower Services' }],
  creator: 'SOM Supply and Manpower Services',
  publisher: 'SOM Supply and Manpower Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sommanpower.com',
    siteName: 'SOM Supply and Manpower Services',
    title: 'SOM Supply and Manpower Services | Facility Management & Manpower in Indore',
    description: 'Specialized commercial housekeeping, office staff, industrial cleaning, and reliable manpower supply based in Indore, Madhya Pradesh.',
    images: [
      {
        url: '/images/hero-facility.jpg',
        width: 1200,
        height: 630,
        alt: 'SOM Supply and Manpower Services Facility Management Indore'
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
