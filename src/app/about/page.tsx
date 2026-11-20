import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Target, CheckCircle2, Award, Users, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, WHY_CHOOSE_US, STATS_DATA } from '@/data/content';
import { CtaBanner } from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us | Professional Manpower & Facility Solutions in Indore',
  description: 'Learn about SOM Supply and Manpower Services, our operational standards, verified staffing methodologies, and facility management services based in Indore, Madhya Pradesh.',
  openGraph: {
    title: 'About SOM Supply and Manpower Services | Indore',
    description: 'Learn about our corporate facility management approach, reliable workforce sourcing, and Indore service coverage.'
  }
};

export default function AboutPage() {
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
          <div style={{ maxWidth: '750px' }}>
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
              Corporate Profile
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
              About SOM Supply and Manpower Services
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#D1E3D8', lineHeight: 1.65 }}>
              Dedicated to delivering dependable manpower supply, commercial housekeeping, and comprehensive facility management for businesses across Indore and Madhya Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile & Mission */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span className="section-badge">Who We Are</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Operational Excellence Rooted in Indore
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#3E4B43', marginBottom: '1.25rem' }}>
                SOM Supply and Manpower Services operates with a clear objective: to enable companies to focus completely on their core business operations while we take complete ownership of facility upkeep, hygiene, and workforce deployment.
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: '#4E5D54', marginBottom: '1.75rem' }}>
                We understand that commercial workspaces, production factories, and institutional campuses require dependable and disciplined hands. From daily floor maintenance to peak seasonal industrial staffing, our hands-on leadership ensures every deployment meets strict standards.
              </p>

              <div
                style={{
                  backgroundColor: '#F1F8F1',
                  borderLeft: '4px solid #176B43',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '2rem'
                }}
              >
                <h4 style={{ color: '#176B43', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  Our Service Philosophy
                </h4>
                <p style={{ fontSize: '0.92rem', color: '#2B3B30', margin: 0, lineHeight: 1.6 }}>
                  Consistency matters more than promises. We deploy supervised personnel, conduct routine quality audits, and provide swift escalation resolution from our local base in Indore.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/services" className="btn btn-primary">
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  <span>Contact Our Operations</span>
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  height: '480px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid #E0ECE3'
                }}
              >
                <Image
                  src="/images/about-office.jpg"
                  alt="SOM Supply and Manpower Services Facility"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1rem 1.5rem',
                  borderRadius: '8px',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid #E0ECE3',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#176B43' }}>Indore</div>
                <div style={{ fontSize: '0.8rem', color: '#6B7B70', fontWeight: 600 }}>Madhya Pradesh, India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-badge">How We Deliver Value</span>
            <h2 className="section-title">Our Four Operational Pillars</h2>
            <p className="section-description">
              Our delivery framework is designed to eliminate common facility bottlenecks and staffing shortages.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', border: '1px solid #E0ECE3' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  backgroundColor: '#F1F8F1',
                  color: '#176B43',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#176B43', marginBottom: '0.75rem' }}>
                Identity & Background Checks
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#3E4B43', lineHeight: 1.6 }}>
                Every workforce candidate is vetted with government-issued identity documents and local background verification before site placement.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', border: '1px solid #E0ECE3' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  backgroundColor: '#F1F8F1',
                  color: '#176B43',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Users size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#176B43', marginBottom: '0.75rem' }}>
                Grooming & Decorum
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#3E4B43', lineHeight: 1.6 }}>
                We instruct our personnel on neat corporate attire, professional demeanor, punctual shift handovers, and courteous workplace interactions.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', border: '1px solid #E0ECE3' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  backgroundColor: '#F1F8F1',
                  color: '#176B43',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#176B43', marginBottom: '0.75rem' }}>
                Checklist Auditing
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#3E4B43', lineHeight: 1.6 }}>
                Cleaning tasks and shift duties are recorded against structured daily checklists to ensure consistent hygiene standards day after day.
              </p>
            </div>

            <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', border: '1px solid #E0ECE3' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '8px',
                  backgroundColor: '#F1F8F1',
                  color: '#176B43',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#176B43', marginBottom: '0.75rem' }}>
                Indore Proximity
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#3E4B43', lineHeight: 1.6 }}>
                Our leadership is based locally in Indore, enabling on-site visits within hours whenever operational adjustments or emergency replacements are needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="section">
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E0ECE3',
              borderRadius: '8px',
              padding: '2.5rem',
              maxWidth: '850px',
              margin: '0 auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  backgroundColor: '#F1F8F1',
                  color: '#176B43',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Award size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#176B43', marginBottom: '0.5rem' }}>
                  Transparent Business Commitment
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#3E4B43', lineHeight: 1.65, margin: 0 }}>
                  We are a genuine service provider committed to verified facts. All our security support personnel are deployed for access control and premises vigilance within standard regulatory norms. We provide clear, verifiable proposals and contracts to every enterprise client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Looking for a Professional Facility & Manpower Partner?"
        description="Let our Indore team conduct an assessment of your facility requirements and provide a transparent commercial scope."
      />
    </>
  );
}
