import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '@/data/content';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Industries We Serve | Corporate, Industrial, Healthcare & Retail in Indore',
  description: 'Specialized facility management, commercial housekeeping, and manpower solutions for corporate offices, manufacturing plants, healthcare, retail, and institutions in Indore.',
  openGraph: {
    title: 'Industries We Serve | SOM Services Indore',
    description: 'Explore our tailored manpower and cleaning solutions for diverse commercial sectors across Madhya Pradesh.'
  }
};

export default function IndustriesPage() {
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
          <div style={{ maxWidth: '780px' }}>
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
              Tailored Sector Support
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
              Industries We Serve in Indore & MP
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#D1E3D8', lineHeight: 1.65 }}>
              Different industries operate under distinct regulatory, safety, and hygiene standards. Discover how our customized manpower and facility deployments support your exact sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="corp-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(15, 38, 27, 0.8) 0%, transparent 60%)'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      left: '1.5rem',
                      right: '1.5rem',
                      color: '#FFFFFF'
                    }}
                  >
                    <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', fontWeight: 700, margin: 0 }}>
                      {ind.title}
                    </h3>
                  </div>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p style={{ fontSize: '0.95rem', color: '#3E4B43', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {ind.description}
                  </p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#176B43', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.04em' }}>
                      Recommended Solutions:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {ind.servicesSupplied.map((svc, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.8rem',
                            backgroundColor: '#F1F8F1',
                            color: '#1E2922',
                            padding: '0.25rem 0.65rem',
                            borderRadius: '4px',
                            fontWeight: 500
                          }}
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid #EDF3EE' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1E2922', marginBottom: '0.5rem' }}>
                      Key Operational Benefits:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {ind.benefits.map((b, i) => (
                        <li key={i} style={{ fontSize: '0.85rem', color: '#4E5D54', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <CheckCircle2 size={14} color="#4E9A67" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                      className="btn btn-secondary"
                      style={{ width: '100%', fontSize: '0.88rem', padding: '0.65rem' }}
                    >
                      <span>Inquire For This Industry</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Require Specialized Staffing for Your Sector?"
        description="Our Indore operations team can design an operational scope matching your shift timings, compliance demands, and premise size."
      />
    </>
  );
}
