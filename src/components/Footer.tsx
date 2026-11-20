import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_DATA } from '@/data/content';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#132118', color: '#B3C8BA', paddingTop: '4.5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)'
          }}
        >
          {/* Brand Column */}
          <div>
            <Logo variant="light" size="large" />
            <p
              style={{
                marginTop: '1.25rem',
                fontSize: '0.92rem',
                lineHeight: 1.65,
                color: '#C5D8CC'
              }}
            >
              Professional corporate manpower supply, commercial housekeeping, and comprehensive facility management services based in Indore, Madhya Pradesh.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4E9A67', fontSize: '0.85rem' }}>
              <ShieldCheck size={18} />
              <span>Reliable & Verified Personnel Deployment</span>
            </div>
          </div>

          {/* Core Services Column */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '1.05rem',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              Our Core Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {SERVICES_DATA.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    style={{
                      color: '#B3C8BA',
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <ArrowRight size={13} color="#4E9A67" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '1.05rem',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link href="/" style={{ color: '#B3C8BA', fontSize: '0.9rem' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: '#B3C8BA', fontSize: '0.9rem' }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" style={{ color: '#B3C8BA', fontSize: '0.9rem' }}>
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/industries" style={{ color: '#B3C8BA', fontSize: '0.9rem' }}>
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#B3C8BA', fontSize: '0.9rem' }}>
                  Contact Us & Enquiry
                </Link>
              </li>
              <li>
                <Link href="/privacy" style={{ color: '#B3C8BA', fontSize: '0.9rem' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontSize: '1.05rem',
                marginBottom: '1.25rem',
                letterSpacing: '0.02em'
              }}
            >
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#4E9A67" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} color="#4E9A67" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  style={{ color: '#FFFFFF', fontWeight: 600 }}
                >
                  {COMPANY_DETAILS.displayPhone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Clock size={18} color="#4E9A67" style={{ flexShrink: 0 }} />
                <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
                style={{
                  width: '100%',
                  fontSize: '0.88rem',
                  padding: '0.65rem 1rem'
                }}
              >
                Chat On WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            padding: '1.75rem 0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.82rem',
            color: '#8CA595'
          }}
        >
          <p>© 2026 {COMPANY_DETAILS.name}. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: '#8CA595', textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            <Link href="/contact" style={{ color: '#8CA595', textDecoration: 'underline' }}>
              Direct Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
