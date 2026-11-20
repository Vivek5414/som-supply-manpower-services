import type { Metadata } from 'next';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us & Free Quote | SOM Services Indore',
  description: 'Get in touch with SOM Supply and Manpower Services in Indore, Madhya Pradesh. Call +91 88272 72515 or submit your facility management and manpower requirements.',
  openGraph: {
    title: 'Contact SOM Services Indore | Facility Management & Manpower',
    description: 'Direct phone, WhatsApp, and inquiry form for facility and staffing services in Indore, MP.'
  }
};

export default function ContactPage() {
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
              Get In Touch
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
              Contact SOM Services in Indore
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#D1E3D8', lineHeight: 1.65 }}>
              Have questions or need an immediate quotation for housekeeping, staffing, or facility upkeep? Our team in Indore is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
              alignItems: 'flex-start'
            }}
          >
            {/* Contact Details & Info */}
            <div>
              <span className="section-badge">Direct Communication</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                We Are Readily Available
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#3E4B43', lineHeight: 1.65, marginBottom: '2.5rem' }}>
                We believe in prompt communication. Reach out to us via direct phone call, instant WhatsApp chat, or submit the quotation form.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {/* Phone Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0ECE3',
                    borderRadius: '8px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#F1F8F1',
                      color: '#176B43',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#6B7B70', fontWeight: 600 }}>Direct Contact Number</div>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      style={{ fontSize: '1.25rem', fontWeight: 700, color: '#176B43' }}
                    >
                      {COMPANY_DETAILS.displayPhone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0ECE3',
                    borderRadius: '8px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#EAF8EE',
                      color: '#25D366',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#6B7B70', fontWeight: 600 }}>WhatsApp Inquiry Desk</div>
                    <a
                      href={COMPANY_DETAILS.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1E2922' }}
                    >
                      Click to Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Address Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0ECE3',
                    borderRadius: '8px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#F1F8F1',
                      color: '#176B43',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#6B7B70', fontWeight: 600 }}>Operating Headquarters</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#1E2922' }}>
                      {COMPANY_DETAILS.location}
                    </div>
                  </div>
                </div>

                {/* Operating Hours */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0ECE3',
                    borderRadius: '8px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: '#F1F8F1',
                      color: '#176B43',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: '#6B7B70', fontWeight: 600 }}>Operations Hours</div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: '#1E2922' }}>
                      {COMPANY_DETAILS.hours}
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '1.5rem',
                  backgroundColor: '#F1F8F1',
                  borderRadius: '8px',
                  border: '1px solid #D1E5D7'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#176B43', fontWeight: 700, marginBottom: '0.35rem' }}>
                  <ShieldCheck size={18} />
                  <span>On-Site Visit Assistance</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#2B3B30', margin: 0, lineHeight: 1.6 }}>
                  Need a representative to visit your office or factory in Indore for an on-ground site survey? Call our number directly to book a site inspection date.
                </p>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
