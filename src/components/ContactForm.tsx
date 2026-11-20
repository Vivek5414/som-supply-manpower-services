'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SERVICES_DATA, COMPANY_DETAILS } from '@/data/content';

export const ContactForm: React.FC<{ defaultService?: string }> = ({ defaultService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    service: defaultService || SERVICES_DATA[0].title,
    requirementType: 'Corporate Contract',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\+]/g, '');
      if (cleanPhone.length < 10) {
        errs.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (!formData.service) {
      errs.service = 'Please choose a primary service';
    }

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide details about your requirement (at least 10 characters)';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic async submission with client feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 900);
  };

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        padding: '2.5rem',
        boxShadow: '0 12px 32px rgba(23, 107, 67, 0.08)',
        border: '1px solid #E0ECE3'
      }}
    >
      {submitSuccess ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#F1F8F1',
              color: '#176B43',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}
          >
            <CheckCircle size={36} />
          </div>
          <h3 style={{ fontSize: '1.45rem', marginBottom: '0.75rem', color: '#176B43' }}>
            Inquiry Received Successfully
          </h3>
          <p style={{ color: '#3E4B43', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Thank you, <strong>{formData.fullName}</strong>. Our team in Indore has received your inquiry for <strong>{formData.service}</strong>. We will review your requirements and reach out to you at <strong>{formData.phone}</strong> shortly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => {
                setSubmitSuccess(false);
                setFormData({
                  fullName: '',
                  phone: '',
                  email: '',
                  organization: '',
                  service: SERVICES_DATA[0].title,
                  requirementType: 'Corporate Contract',
                  message: ''
                });
              }}
              className="btn btn-secondary"
            >
              Submit Another Inquiry
            </button>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Connect On WhatsApp Immediately
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem', color: '#176B43' }}>
              Request a Corporate Quotation
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#6B7B70' }}>
              Fill out your service requirements. We will contact you with clear manpower or housekeeping estimates.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: '#1E2922' }}>
                Full Name / Contact Person *
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Rajesh Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '6px',
                  border: errors.fullName ? '1.5px solid #D32F2F' : '1px solid #C5D8CC',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
              {errors.fullName && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#D32F2F', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                  <AlertCircle size={12} /> {errors.fullName}
                </span>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: '#1E2922' }}>
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="e.g. 98260 12345"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '6px',
                  border: errors.phone ? '1.5px solid #D32F2F' : '1px solid #C5D8CC',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
              {errors.phone && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#D32F2F', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                  <AlertCircle size={12} /> {errors.phone}
                </span>
              )}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            {/* Email */}
            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: '#1E2922' }}>
                Corporate Email (Optional)
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. rajesh@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '6px',
                  border: errors.email ? '1.5px solid #D32F2F' : '1px solid #C5D8CC',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
              {errors.email && (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#D32F2F', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                  <AlertCircle size={12} /> {errors.email}
                </span>
              )}
            </div>

            {/* Organization / Facility Name */}
            <div>
              <label htmlFor="organization" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: '#1E2922' }}>
                Company / Facility Name
              </label>
              <input
                id="organization"
                type="text"
                placeholder="e.g. Acme Logistics Park"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '6px',
                  border: '1px solid #C5D8CC',
                  fontSize: '0.92rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Service Dropdown & Type */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <label htmlFor="service" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: '#1E2922' }}>
                Primary Service Required *
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '6px',
                  border: '1px solid #C5D8CC',
                  fontSize: '0.92rem',
                  backgroundColor: '#FFFFFF',
                  outline: 'none'
                }}
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="requirementType" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: '#1E2922' }}>
                Engagement Model
              </label>
              <select
                id="requirementType"
                value={formData.requirementType}
                onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '6px',
                  border: '1px solid #C5D8CC',
                  fontSize: '0.92rem',
                  backgroundColor: '#FFFFFF',
                  outline: 'none'
                }}
              >
                <option value="Corporate Contract">Annual / Monthly Contract</option>
                <option value="On-Demand / One-Time">One-Time / Deep Cleaning</option>
                <option value="Temporary Shift Staffing">Temporary Shift Staffing</option>
                <option value="Custom Facility Package">Comprehensive Facility Package</option>
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="message" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: '#1E2922' }}>
              Requirement Scope & Location Details *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Please describe approximate premises area, number of personnel needed, location in Indore, or expected start date..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem 0.9rem',
                borderRadius: '6px',
                border: errors.message ? '1.5px solid #D32F2F' : '1px solid #C5D8CC',
                fontSize: '0.92rem',
                outline: 'none',
                resize: 'vertical'
              }}
            />
            {errors.message && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#D32F2F', fontSize: '0.78rem', marginTop: '0.25rem' }}>
                <AlertCircle size={12} /> {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{
              width: '100%',
              padding: '0.9rem 1.5rem',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Processing Your Enquiry...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Service Inquiry</span>
              </>
            )}
          </button>

          <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#6B7B70', marginTop: '1rem' }}>
            We respect your privacy. No spam. Direct response from our Indore operations office.
          </p>
        </form>
      )}

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        :global(.animate-spin) {
          animation: spin 1s linear infinite;
        }
        @media (max-width: 600px) {
          form > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
