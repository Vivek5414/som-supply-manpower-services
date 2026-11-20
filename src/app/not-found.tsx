import Link from 'next/link';
import { ArrowLeft, Home, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        backgroundColor: '#F9FCFA',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '540px' }}>
        <div
          style={{
            fontSize: '6rem',
            fontWeight: 800,
            color: '#176B43',
            lineHeight: 1,
            marginBottom: '1rem'
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: '#1E2922' }}>
          Page Not Found
        </h1>
        <p style={{ color: '#4E5D54', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          The page or facility resource you are looking for might have been relocated, removed, or is temporarily unavailable.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">
            <Home size={16} />
            <span>Return to Home</span>
          </Link>
          <a href={`tel:${COMPANY_DETAILS.phone}`} className="btn btn-secondary">
            <Phone size={16} />
            <span>Call Our Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
