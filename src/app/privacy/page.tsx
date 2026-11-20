import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_DETAILS } from '@/data/content';

export const metadata: Metadata = {
  title: 'Privacy Policy | SOM Supply and Manpower Services',
  description: 'Privacy policy and data handling practices for SOM Supply and Manpower Services in Indore, Madhya Pradesh.',
  robots: {
    index: true,
    follow: true
  }
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        style={{
          backgroundColor: '#0F261B',
          color: '#FFFFFF',
          padding: '4rem 0',
          position: 'relative'
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.5rem' }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#D1E3D8', fontSize: '1rem' }}>
            Effective Date: November 2026
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#3E4B43', lineHeight: 1.75 }}>
            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#176B43', marginBottom: '0.75rem' }}>
                1. Overview & Commitment
              </h2>
              <p>
                At <strong>{COMPANY_DETAILS.name}</strong>, based in {COMPANY_DETAILS.location}, we take the confidentiality of our clients, website visitors, and corporate partners seriously. This Privacy Policy details how we handle information submitted to us via our online contact channels, telephone inquiries, and service request forms.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#176B43', marginBottom: '0.75rem' }}>
                2. Information We Collect
              </h2>
              <p>
                When inquiring about our commercial housekeeping, manpower supply, or facility management services, we may collect:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Your full name and designated business role</li>
                <li>Company or organization name and premises location</li>
                <li>Direct contact phone number and corporate email address</li>
                <li>Specific operational requirements (e.g., manpower count, cleaning square footage, shift frequency)</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#176B43', marginBottom: '0.75rem' }}>
                3. Purpose of Information Use
              </h2>
              <p>
                The information you submit is strictly utilized for legitimate business operations:
              </p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                <li>Preparing and delivering transparent commercial proposals and service estimates</li>
                <li>Scheduling on-site visits and surveys in Indore and nearby regions</li>
                <li>Communicating shift coordination, contract updates, and supervisory reports</li>
                <li>Complying with applicable employment and commercial statutory laws in India</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#176B43', marginBottom: '0.75rem' }}>
                4. Data Protection & Confidentiality
              </h2>
              <p>
                We do not sell, rent, lease, or distribute your private business contacts to external marketing networks or unauthorized third parties. Information is accessible solely by our internal operations management responsible for servicing your account.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#176B43', marginBottom: '0.75rem' }}>
                5. Third-Party Channels & WhatsApp
              </h2>
              <p>
                If you choose to communicate with us using external services such as WhatsApp or telephone networks, your communications are also governed by the terms and policies of those respective service providers.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: '#176B43', marginBottom: '0.75rem' }}>
                6. Contact Information
              </h2>
              <p>
                For questions regarding this policy or to request updates to your business information, please reach out directly:
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                <strong>{COMPANY_DETAILS.name}</strong><br />
                Location: {COMPANY_DETAILS.location}<br />
                Direct Telephone: <a href={`tel:${COMPANY_DETAILS.phone}`} style={{ color: '#176B43', fontWeight: 600 }}>{COMPANY_DETAILS.displayPhone}</a>
              </p>
            </div>

            <div style={{ marginTop: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #E0ECE3' }}>
              <Link href="/" className="btn btn-secondary">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
