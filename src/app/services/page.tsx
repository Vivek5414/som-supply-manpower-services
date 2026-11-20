import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Users,
  Building2,
  Factory,
  Briefcase,
  ShieldCheck,
  Trees,
  Shield,
  CheckCircle,
  Phone,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, COMPANY_DETAILS } from '@/data/content';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'All Services | Manpower Supply, Housekeeping & Facility Management',
  description: 'Explore the full spectrum of facility services by SOM Services in Indore: Housekeeping, Manpower Supply, Facility Management, Industrial Cleaning, Office Staff, Deep Cleaning, Gardening, and Security.',
  openGraph: {
    title: 'Services | SOM Supply and Manpower Services Indore',
    description: 'Comprehensive commercial housekeeping, industrial workforce, office helpers, and facility care in Indore, MP.'
  }
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <section
        style={{
          backgroundColor: '#0F261B',
          color: '#FFFFFF',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <span
              style={{
                display: 'inline-block',
                backgroundColor: 'rgba(78, 154, 103, 0.25)',
                color: '#C5E6D3',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                padding: '0.35rem 0.9rem',
                borderRadius: '4px',
                marginBottom: '1rem'
              }}
            >
              Our Service Capabilities
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}
            >
              Comprehensive Facility & Manpower Services
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#D1E3D8', lineHeight: 1.65 }}>
              Professional, structured, and supervised solutions designed to maintain pristine commercial environments and satisfy flexible staffing demands across Indore.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Detailed Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3.5rem',
                    alignItems: 'center',
                    paddingBottom: '3.5rem',
                    borderBottom: index < SERVICES_DATA.length - 1 ? '1px solid #E0ECE3' : 'none'
                  }}
                >
                  {/* Content Column */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#176B43',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        marginBottom: '0.5rem'
                      }}
                    >
                      <span>0{index + 1}.</span>
                      <span>SOM CORE SERVICE</span>
                    </div>

                    <h2
                      style={{
                        fontSize: '2rem',
                        color: '#176B43',
                        marginBottom: '1rem',
                        fontWeight: 700
                      }}
                    >
                      {service.title}
                    </h2>

                    <p
                      style={{
                        fontSize: '1.05rem',
                        lineHeight: 1.7,
                        color: '#3E4B43',
                        marginBottom: '1.5rem'
                      }}
                    >
                      {service.fullDesc}
                    </p>

                    <div style={{ marginBottom: '1.75rem' }}>
                      <h4
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 700,
                          color: '#1E2922',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          marginBottom: '0.85rem'
                        }}
                      >
                        Core Scope & Key Deliverables:
                      </h4>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                          gap: '0.65rem'
                        }}
                      >
                        {service.features.map((feat, i) => (
                          <li
                            key={i}
                            style={{
                              fontSize: '0.9rem',
                              color: '#2B3B30',
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.5rem'
                            }}
                          >
                            <CheckCircle size={16} color="#176B43" style={{ flexShrink: 0, marginTop: '3px' }} />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#F9FCFA',
                        padding: '1rem 1.25rem',
                        borderRadius: '6px',
                        border: '1px solid #E0ECE3',
                        marginBottom: '1.75rem',
                        fontSize: '0.88rem',
                        color: '#4E5D54'
                      }}
                    >
                      <strong style={{ color: '#176B43' }}>Ideal Applications:</strong> {service.scope}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="btn btn-primary"
                      >
                        <span>Request Service Quote</span>
                        <ArrowRight size={16} />
                      </Link>
                      <a
                        href={COMPANY_DETAILS.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <span>WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div
                      style={{
                        position: 'relative',
                        height: '380px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-md)',
                        border: '1px solid #E0ECE3'
                      }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Quick CTA */}
      <CtaBanner
        title="Need a Custom Package of Multiple Services?"
        description="We consolidate your housekeeping, manpower supply, and office support staff under one transparent contract in Indore."
      />
    </>
  );
}
