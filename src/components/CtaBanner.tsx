import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export const CtaBanner: React.FC<{
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}> = ({
  title = 'Ready to Streamline Your Facility Operations?',
  description = 'Connect with our operations desk in Indore today for customized manpower supply and housekeeping solutions.',
  primaryButtonText = 'Request Free Consultation',
  primaryButtonLink = '/contact'
}) => {
  return (
    <section
      style={{
        backgroundColor: '#176B43',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 0'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '40%',
          opacity: 0.05,
          backgroundImage: 'radial-gradient(#FFFFFF 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '0.35rem 0.9rem',
              borderRadius: '4px',
              marginBottom: '1.25rem'
            }}
          >
            Indore Corporate & Industrial Support
          </span>

          <h2
            style={{
              fontSize: '2.4rem',
              color: '#FFFFFF',
              marginBottom: '1.2rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#D8EDE0',
              marginBottom: '2.5rem',
              lineHeight: 1.6
            }}
          >
            {description}
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.25rem',
              flexWrap: 'wrap'
            }}
          >
            <Link href={primaryButtonLink} className="btn btn-white">
              <span>{primaryButtonText}</span>
              <ArrowRight size={16} />
            </Link>

            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="btn btn-outline-white"
            >
              <Phone size={16} />
              <span>Call: {COMPANY_DETAILS.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
