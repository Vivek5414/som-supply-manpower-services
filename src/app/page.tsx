'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  Sparkles,
  Users,
  Building2,
  Award,
  ChevronRight,
  Target,
  Check,
  Star,
  MapPin,
  CalendarCheck,
  FileCheck2,
  Headphones,
  TrendingUp,
  Briefcase,
  Layers,
  ArrowUpRight,
  ShieldAlert,
  Building,
  Factory,
  CheckCircle,
  Wrench,
  HardHat,
  Zap,
  MessageCircle,
  Paintbrush,
  Hammer,
  Drill
} from 'lucide-react';
import {
  SERVICES_DATA,
  INDUSTRIES_DATA,
  WORKING_PROCESS,
  WHY_CHOOSE_US,
  STATS_DATA,
  COMPANY_DETAILS
} from '@/data/content';
import { ServiceCard } from '@/components/ServiceCard';
import { CtaBanner } from '@/components/CtaBanner';
import { ContactForm } from '@/components/ContactForm';
import Logo from '@/components/Logo';

const FAQ_ITEMS = [
  {
    q: 'How quickly can SOM deploy manpower or housekeeping staff in Indore?',
    a: 'For commercial and industrial units across Indore, we initiate preliminary site assessments within 24 hours and mobilize screened, uniformed personnel within 48 to 72 hours of finalized terms.'
  },
  {
    q: 'Do you supply skilled, semi-skilled, and general workers?',
    a: 'Yes. We supply skilled technical staff (electricians, mechanics, machine operators), semi-skilled workers (assembly line, warehouse packers), and general personnel (housekeeping, helpers, loaders, gate attendants).'
  },
  {
    q: 'Do you provide dedicated on-site supervision for deployed staff?',
    a: 'Yes. Every deployment is managed with structured daily logs, routine supervisory audits, and direct escalation channels to guarantee uncompromised hygiene and workforce discipline.'
  },
  {
    q: 'Are all deployed personnel background-screened?',
    a: 'Without exception. Every team member undergoes mandatory government identity verification, local address screening, and behavioral grooming on corporate etiquette before deployment.'
  },
  {
    q: 'Can you support multi-shift operations for manufacturing and warehouses?',
    a: 'Yes. We cater to 2-shift and 3-shift operational requirements with pre-arranged relief staff to guarantee zero downtime or absenteeism disruptions.'
  }
];

const TRUST_TAGS = [
  'Pithampur Industrial Hub',
  'Sanwer Road Manufacturing',
  'Super Corridor IT Parks',
  'Vijay Nagar Corporate Hubs',
  'AB Road Commercial Plazas',
  'Rau Logistics Belt'
];

const HANDYMAN_CAPABILITIES = [
  { name: 'Electrical Repairs & Installation', desc: 'Panel boards, circuit breakers, heavy machine wiring & lighting systems' },
  { name: 'Plumbing & Drainage Works', desc: 'Industrial pipelines, washroom fixtures, pressure pumps & leak resolution' },
  { name: 'Painting & Surface Coating', desc: 'Interior walls, exterior facade weatherproofing & factory floor markings' },
  { name: 'Carpentry & Furniture Fitting', desc: 'Office workstations, door hinges, cabinetry & acoustic partition setups' },
  { name: 'Deep Machine Scrubbing & Tiling', desc: 'Floor tile grouting, epoxy polishing & grease degreasing maintenance' },
  { name: 'Civil & Structural Maintenance', desc: 'Roof waterproofing, plaster repairs, shed maintenance & perimeter repairs' },
  { name: 'HVAC & AC Unit Assistance', desc: 'Filter cleaning, cooling duct servicing & central HVAC utility checking' },
  { name: 'General Handyman & Emergency Fixes', desc: 'On-demand rapid response maintenance for broken fixtures & utilities' }
];

const WORKFORCE_CATEGORIES = [
  {
    title: 'Skilled Technical Crew',
    desc: 'Electricians, maintenance technicians, welders, machine operators, and facility supervisors.',
    image: '/images/handyman-expert.jpg',
    icon: Wrench,
    count: 'On-Demand Deployment',
    tags: ['Machine Operations', 'Electrical', 'HVAC Support']
  },
  {
    title: 'Industrial & Plant Staff',
    desc: 'Factory floor workers, line assembly helpers, material handlers, loaders, and packaging crew.',
    image: '/images/workers-group.jpg',
    icon: HardHat,
    count: 'Bulk Shift Rosters',
    tags: ['Assembly Line', 'Loading/Unloading', 'Shift Backups']
  },
  {
    title: 'Commercial Housekeeping',
    desc: 'Daily floor cleaners, washroom sanitization crew, mechanized deep scrubbers, and pantry attendants.',
    image: '/images/housekeeping.jpg',
    icon: Sparkles,
    count: 'Supervised Hygiene',
    tags: ['Checklist Audited', 'Hospital-Grade', 'Eco Products']
  },
  {
    title: 'Office Support & Helpdesk',
    desc: 'Front desk receptionists, office assistants, courier messengers, tea/pantry operators, and runners.',
    image: '/images/office-staff.jpg',
    icon: Users,
    count: 'Groomed & Trained',
    tags: ['Corporate Decorum', 'Punctual Shifts', 'Pantry Care']
  }
];

export default function HomePage() {
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedService = SERVICES_DATA[activeServiceTab];

  return (
    <>
      {/* =========================================================================
          HERO SECTION (Clean White Background + Professional Workforce Photography)
      ========================================================================= */}
      <section
        style={{
          position: 'relative',
          backgroundColor: '#FFFFFF',
          padding: '4rem 0 5rem 0',
          borderBottom: '1px solid #E0EBE3',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 0.95fr',
              gap: '3.5rem',
              alignItems: 'center'
            }}
            className="hero-grid"
          >
            {/* Left Content Column */}
            <div>
              {/* Trust Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#E6F3EB',
                  border: '1px solid #C4DEC9',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '9999px',
                  marginBottom: '1.4rem'
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#176B43',
                    boxShadow: '0 0 8px rgba(23, 107, 67, 0.4)'
                  }}
                />
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#176B43', letterSpacing: '0.04em' }}>
                  Indore’s Benchmark Manpower & Facility Partner
                </span>
              </div>

              {/* Poster Subheadline */}
              <div style={{ marginBottom: '0.35rem' }}>
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#176B43'
                  }}
                >
                  YOUR ONE STOP SOLUTION FOR
                </span>
              </div>

              {/* Main Bold Headline */}
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.035em',
                  marginBottom: '1.25rem',
                  color: '#0D1E15',
                  textTransform: 'uppercase'
                }}
              >
                ALL MANPOWER <br />
                <span style={{ color: '#176B43' }}>
                  REQUIREMENTS
                </span>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.6vw, 1.18rem)',
                  lineHeight: 1.68,
                  color: '#4A5B51',
                  marginBottom: '2.25rem',
                  maxWidth: '580px'
                }}
              >
                Deploying verified security guards, corporate office assistants, commercial housekeeping staff, and skilled industrial technical crews for factories, tech campuses, and commercial plazas across Indore.
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginBottom: '2.75rem'
                }}
              >
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{
                    padding: '0.95rem 2rem',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    fontWeight: 700
                  }}
                >
                  <span>Deploy Manpower Now</span>
                  <ArrowRight size={18} />
                </Link>

                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="btn btn-secondary"
                  style={{
                    padding: '0.95rem 1.8rem',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    fontWeight: 600
                  }}
                >
                  <Phone size={18} />
                  <span>Call {COMPANY_DETAILS.displayPhone}</span>
                </a>
              </div>

              {/* Trust Indicators Strip */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  flexWrap: 'wrap',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid #E0EBE3'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <ShieldCheck size={24} color="#176B43" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0D1E15' }}>100% Screened</div>
                    <div style={{ fontSize: '0.78rem', color: '#5C7064' }}>Govt ID & address checked</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Clock size={24} color="#176B43" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0D1E15' }}>Shift Continuity</div>
                    <div style={{ fontSize: '0.78rem', color: '#5C7064' }}>Prompt roster backups</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <MapPin size={24} color="#176B43" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#0D1E15' }}>Indore Base</div>
                    <div style={{ fontSize: '0.78rem', color: '#5C7064' }}>Rapid local deployment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Column: Professional Real Workforce Image */}
            <div style={{ position: 'relative' }} className="hero-visual-col">
              <div
                style={{
                  position: 'relative',
                  height: '480px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 50px rgba(15, 31, 23, 0.12)',
                  border: '2px solid #E0EBE3',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <Image
                  src="/images/workers-group.jpg"
                  alt="SOM Supply and Manpower Services professional workforce team in Indore"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    backgroundColor: '#176B43',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '6px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 12px rgba(23, 107, 67, 0.3)'
                  }}
                >
                  ✓ Complete Verified Staffing
                </div>

                {/* Elegant subtle bottom badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #E0EBE3',
                    borderRadius: '8px',
                    padding: '0.5rem 0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)'
                  }}
                >
                  <MapPin size={15} color="#176B43" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#176B43' }}>Indore, Madhya Pradesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            :global(.hero-grid) {
              grid-template-columns: 1fr !important; gap: 2rem !important;
            }
            :global(.handyman-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.handyman-content) {
              padding: 2rem 1.5rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            :global(.section) {
              padding: 2rem 1rem !important;
            }
            :global(.section-title) {
              font-size: 1.75rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.hero-grid) {
              gap: 1.5rem !important;
            }
          }
          `
          @media (max-width: 992px) {
            :global(.hero-grid) {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          ALL-IN-ONE HANDYMAN & FACILITY REPAIR (Direct Translation of Reference)
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#F8FAF9' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '2px solid #E0EBE3',
              boxShadow: '0 20px 48px rgba(15, 31, 23, 0.08)',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.1fr',
                alignItems: 'center'
              }}
              className="handyman-grid"
            >
              {/* Left Column: Authentic High-Res Technician Photo */}
              <div style={{ position: 'relative', height: '560px', width: '100%', backgroundColor: '#E0EBE3' }}>
                <Image
                  src="/images/handyman-expert.jpg"
                  alt="SOM All-In-One Handyman & Facility Repair Technician"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    backgroundColor: '#176B43',
                    color: '#FFFFFF',
                    padding: '0.45rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em'
                  }}
                >
                  ⚡ All-In-One Technical Support
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    backgroundColor: 'rgba(13, 30, 21, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#4E9A67', fontWeight: 800 }}>
                    SOM On-Demand Maintenance
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, marginTop: '2px' }}>
                    We Can Do It All! Single Window Repairs
                  </div>
                </div>
              </div>

              {/* Right Column: Handyman Service Checklist Grid */}
              <div style={{ padding: '3rem 2.75rem' }} className="handyman-content">
                <div className="section-badge">
                  <span className="section-badge-dot" />
                  <span>Comprehensive Facility Maintenance</span>
                </div>

                <h2 style={{ fontSize: '2.3rem', color: '#0D1E15', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                  ALL IN ONE <span style={{ color: '#176B43' }}>HANDYMAN</span> & REPAIRS
                </h2>

                <p style={{ fontSize: '1.02rem', color: '#4A5B51', lineHeight: 1.65, marginBottom: '2rem' }}>
                  Eliminate multiple individual contractors. SOM provides skilled electricians, plumbers, painters, carpenters, and facility technicians ready for scheduled contracts or emergency callouts.
                </p>

                {/* 8-Point Checklist from Reference Creative */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.1rem 1.5rem',
                    marginBottom: '2.5rem'
                  }}
                  className="handyman-check-grid"
                >
                  {HANDYMAN_CAPABILITIES.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                      <span
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: '#E6F3EB',
                          color: '#176B43',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                          fontWeight: 800,
                          fontSize: '0.8rem'
                        }}
                      >
                        ✓
                      </span>
                      <div>
                        <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#12281D' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#5C7064', marginTop: '2px' }}>
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Action Bottom Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    flexWrap: 'wrap',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid #E0EBE3'
                  }}
                >
                  <Link href="/contact" className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                    <span>Book Handyman Team</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#176B43'
                    }}
                  >
                    <Phone size={18} />
                    <span>Call: {COMPANY_DETAILS.displayPhone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            :global(.hero-grid) {
              grid-template-columns: 1fr !important; gap: 2rem !important;
            }
            :global(.handyman-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.handyman-content) {
              padding: 2rem 1.5rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            :global(.section) {
              padding: 2rem 1rem !important;
            }
            :global(.section-title) {
              font-size: 1.75rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.hero-grid) {
              gap: 1.5rem !important;
            }
          }
          `
          @media (max-width: 992px) {
            :global(.handyman-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.handyman-content) {
              padding: 2rem 1.5rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          WORKFORCE SUPPLY BREAKDOWN WITH DIRECT IMAGERY
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Tailored Staffing Categories</span>
            </div>
            <h2 className="section-title">Scalable Workforce for Every Sector</h2>
            <p className="section-description">
              From heavy manufacturing plants to corporate boardrooms, we supply verified, disciplined, and reliable personnel tailored to your shift demands.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {WORKFORCE_CATEGORIES.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={idx}
                  className="corp-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E0EBE3',
                    overflow: 'hidden'
                  }}
                >
                  {/* Category Image Header */}
                  <div style={{ position: 'relative', height: '170px', width: '100%' }}>
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(9, 28, 19, 0.75) 0%, transparent 60%)'
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.75rem',
                        right: '0.75rem',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '0.4rem',
                        color: '#176B43',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <IconComp size={20} />
                    </div>
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        left: '1rem',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        backgroundColor: '#176B43',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px'
                      }}
                    >
                      {cat.count}
                    </span>
                  </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.2rem', color: '#12281D', fontWeight: 800, marginBottom: '0.5rem' }}>
                      {cat.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: '#5C7064', lineHeight: 1.6, flexGrow: 1, marginBottom: '1rem' }}>
                      {cat.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.75rem', borderTop: '1px solid #EEF4F0', marginBottom: '1rem' }}>
                      {cat.tags.map((t, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.76rem',
                            backgroundColor: '#F3F8F4',
                            color: '#26382E',
                            padding: '0.2rem 0.55rem',
                            borderRadius: '4px'
                          }}
                        >
                          ✓ {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(cat.title)}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: '#176B43'
                      }}
                    >
                      <span>Request Personnel</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LOCAL TRUST TICKER / SERVING INDORE CLUSTERS
      ========================================================================= */}
      <section
        style={{
          backgroundColor: '#F8FAF9',
          borderTop: '1px solid #E0EBE3',
          borderBottom: '1px solid #E0EBE3',
          padding: '1.25rem 0',
          overflow: 'hidden'
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#176B43', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Active Operations In:
            </span>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {TRUST_TAGS.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.82rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0EBE3',
                    padding: '0.28rem 0.75rem',
                    borderRadius: '6px',
                    color: '#26382E',
                    fontWeight: 500
                  }}
                >
                  📍 {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS STRIP
      ========================================================================= */}
      <section
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E0EBE3',
          padding: '2.75rem 0'
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}
          >
            {STATS_DATA.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '0.75rem',
                  borderRight: idx < STATS_DATA.length - 1 ? '1px solid #E0EBE3' : 'none'
                }}
                className="stat-box"
              >
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: '#176B43',
                    lineHeight: 1.1,
                    marginBottom: '0.35rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {item.value}
                </div>
                <div style={{ fontSize: '0.92rem', color: '#4E9A67', fontWeight: 600 }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            :global(.hero-grid) {
              grid-template-columns: 1fr !important; gap: 2rem !important;
            }
            :global(.handyman-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.handyman-content) {
              padding: 2rem 1.5rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            :global(.section) {
              padding: 2rem 1rem !important;
            }
            :global(.section-title) {
              font-size: 1.75rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.hero-grid) {
              gap: 1.5rem !important;
            }
          }
          `
          @media (max-width: 768px) {
            :global(.stat-box) {
              border-right: none !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          STRATEGIC PLANNING & ON-GROUND MANAGEMENT (Engineers Roundtable Image)
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#F8FAF9' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4.5rem',
              alignItems: 'center'
            }}
            className="planning-grid"
          >
            {/* Visual Column: Engineers Roundtable Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  height: '520px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 50px rgba(15, 31, 23, 0.12)',
                  border: '2px solid #E0EBE3',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <Image
                  src="/images/roundtable-engineers.jpg"
                  alt="SOM Supply and Manpower Services engineering & facility planning team"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    backgroundColor: 'rgba(23, 107, 67, 0.92)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '0.45rem 1rem',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  ⚙️ Structured Facility Engineering & Planning
                </div>
              </div>

              {/* Decorative Trust Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '1.5rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '1.2rem 1.6rem',
                  boxShadow: '0 16px 36px rgba(15, 31, 23, 0.14)',
                  border: '1px solid #E0EBE3',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: '320px'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: '#E6F3EB',
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
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', color: '#12281D' }}>Site Audits & Blueprints</div>
                  <div style={{ fontSize: '0.8rem', color: '#5C7064', marginTop: '2px' }}>
                    Precision manpower allocation for complex plants.
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" />
                <span>Operational Planning & Execution</span>
              </div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Engineered Manpower Allocation For Industrial & Commercial Projects
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#37473E', marginBottom: '1.25rem' }}>
                At <strong>SOM Supply and Manpower Services</strong>, we don’t just deploy personnel—we analyze your facility layout, blueprint workflows, shift requirements, and compliance standards before a single staff member steps on-site.
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: '#5C7064', marginBottom: '2rem' }}>
                Whether coordinating heavy machinery maintenance across Pithampur plants or organizing daily sanitization rosters for corporate towers in Vijay Nagar, our operations team ensures full accountability at every step.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <CheckCircle2 size={20} color="#176B43" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#12281D' }}>Blueprint & Floor Area Analysis:</strong>{' '}
                    <span style={{ color: '#5C7064', fontSize: '0.92rem' }}>Accurate headcount forecasting based on square footage and shift intensity.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <CheckCircle2 size={20} color="#176B43" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#12281D' }}>Safety & PPE Compliance:</strong>{' '}
                    <span style={{ color: '#5C7064', fontSize: '0.92rem' }}>Hard hats, reflective vests, and safety training mandatory for industrial sites.</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <CheckCircle2 size={20} color="#176B43" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#12281D' }}>Daily Supervisory Checklists:</strong>{' '}
                    <span style={{ color: '#5C7064', fontSize: '0.92rem' }}>Dedicated on-ground supervisors ensuring adherence to quality standards.</span>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn btn-primary">
                  <span>Schedule Site Survey</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  <span>About Our Standards</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            :global(.hero-grid) {
              grid-template-columns: 1fr !important; gap: 2rem !important;
            }
            :global(.handyman-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.handyman-content) {
              padding: 2rem 1.5rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            :global(.section) {
              padding: 2rem 1rem !important;
            }
            :global(.section-title) {
              font-size: 1.75rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.hero-grid) {
              gap: 1.5rem !important;
            }
          }
          `
          @media (max-width: 992px) {
            :global(.planning-grid) {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          INTERACTIVE SERVICE EXPLORER (Feature Spotlight)
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Interactive Service Scope</span>
            </div>
            <h2 className="section-title">Explore Our Facility Capabilities</h2>
            <p className="section-description">
              Select a core service below to review full specifications, operational scope, and deployment deliverables.
            </p>

            {/* Service Pills Navigation */}
            <div
              style={{
                display: 'flex',
                gap: '0.65rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '2rem'
              }}
            >
              {SERVICES_DATA.map((service, idx) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceTab(idx)}
                  className={`service-pill-btn ${activeServiceTab === idx ? 'active' : ''}`}
                >
                  <span>{service.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Showcase Card */}
          <div
            style={{
              backgroundColor: '#F8FAF9',
              border: '1px solid #E0EBE3',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}
            className="showcase-grid"
          >
            {/* Visual Column */}
            <div style={{ position: 'relative', height: '420px', width: '100%', overflow: 'hidden' }}>
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(9, 28, 19, 0.7) 0%, transparent 50%)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  color: '#FFFFFF'
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    backgroundColor: '#176B43',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginBottom: '0.5rem'
                  }}
                >
                  Featured Solution
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Details Column */}
            <div style={{ padding: '2.5rem 2.5rem 2.5rem 0' }} className="showcase-content">
              <h3 style={{ fontSize: '1.65rem', color: '#12281D', fontWeight: 800, marginBottom: '0.85rem' }}>
                {selectedService.title}
              </h3>
              <p style={{ fontSize: '1rem', color: '#4A5B51', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {selectedService.fullDesc}
              </p>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#176B43', textTransform: 'uppercase', marginBottom: '0.65rem', letterSpacing: '0.04em' }}>
                  Standard Scope Deliverables:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }} className="feature-grid">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle size={15} color="#176B43" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.86rem', color: '#26382E' }}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  backgroundColor: '#E6F3EB',
                  padding: '0.85rem 1.15rem',
                  borderRadius: '8px',
                  marginBottom: '1.75rem',
                  fontSize: '0.88rem',
                  color: '#14281E'
                }}
              >
                <strong>Ideal Applications:</strong> {selectedService.scope}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  href={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                  className="btn btn-primary"
                >
                  <span>Request Quote For This Service</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/services#${selectedService.id}`}
                  className="btn btn-secondary"
                >
                  <span>View Full Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            :global(.hero-grid) {
              grid-template-columns: 1fr !important; gap: 2rem !important;
            }
            :global(.handyman-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.handyman-content) {
              padding: 2rem 1.5rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            :global(.section) {
              padding: 2rem 1rem !important;
            }
            :global(.section-title) {
              font-size: 1.75rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.hero-grid) {
              gap: 1.5rem !important;
            }
          }
          `
          @media (max-width: 900px) {
            :global(.showcase-grid) {
              grid-template-columns: 1fr !important;
              gap: 1.5rem !important;
            }
            :global(.showcase-content) {
              padding: 0 1.5rem 2rem 1.5rem !important;
            }
            :global(.feature-grid) {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          ALL SERVICES GRID (Comprehensive 8-Card Corporate Grid)
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#F8FAF9' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Full Portfolio</span>
            </div>
            <h2 className="section-title">All 8 Core Services</h2>
            <p className="section-description">
              Reliable manpower supply, specialized housekeeping, and facility management services structured to keep your operations immaculate.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))',
              gap: '2rem'
            }}
          >
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.75rem' }}>
            <Link
              href="/services"
              className="btn btn-primary"
              style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}
            >
              <span>Explore All 8 Core Services in Detail</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPANY INTRODUCTION & THE SOM ASSURANCE
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4.5rem',
              alignItems: 'center'
            }}
            className="intro-grid"
          >
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" />
                <span>The Indore Facility Standard</span>
              </div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Delivering Disciplined Staffing & Meticulous Facility Care
              </h2>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#37473E', marginBottom: '1.25rem' }}>
                At <strong>SOM Supply and Manpower Services</strong>, we bridge the gap between corporate expectations and everyday ground execution. We recognize that high employee productivity begins with pristine, healthy, and seamlessly operating workspaces.
              </p>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.65, color: '#5C7064', marginBottom: '2rem' }}>
                From high-density corporate floors and technology centers to rugged industrial production lines, our team eliminates the friction of staffing shortfalls, daily janitorial neglect, and compliance headaches.
              </p>

              {/* 3 Pillars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#E6F3EB',
                      color: '#176B43',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.02rem', color: '#12281D', marginBottom: '0.2rem' }}>Local Indore Ground Management</h4>
                    <p style={{ fontSize: '0.88rem', color: '#5C7064', margin: 0 }}>
                      Quick site rounds, immediate attendance resolution, and leadership reachable without call center bottlenecks.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#E6F3EB',
                      color: '#176B43',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.02rem', color: '#12281D', marginBottom: '0.2rem' }}>Groomed, Trained & Verified Crew</h4>
                    <p style={{ fontSize: '0.88rem', color: '#5C7064', margin: 0 }}>
                      Uniformed personnel instructed in workplace decorum, personal hygiene, and safety protocols before placement.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#E6F3EB',
                      color: '#176B43',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <FileCheck2 size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.02rem', color: '#12281D', marginBottom: '0.2rem' }}>Systematic Quality Logs</h4>
                    <p style={{ fontSize: '0.88rem', color: '#5C7064', margin: 0 }}>
                      Periodic deep cleans and daily washroom sanitation tracked against verified physical and digital inspection checklists.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn btn-secondary">
                  <span>Read Corporate Profile</span>
                  <ChevronRight size={16} />
                </Link>
                <Link href="/services" className="btn btn-primary">
                  <span>Explore All Services</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Visual presentation */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  height: '500px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid #E0EBE3'
                }}
              >
                <Image
                  src="/images/about-office.jpg"
                  alt="SOM Supply and Manpower Services corporate facility"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Floating Top Pill */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '-1rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1rem 1.4rem',
                  borderRadius: '10px',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid #E0EBE3',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: '#E6F3EB',
                    color: '#176B43',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: '#176B43' }}>100% Focused</div>
                  <div style={{ fontSize: '0.78rem', color: '#5C7064' }}>Client satisfaction & uptime</div>
                </div>
              </div>

              {/* Floating Bottom Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  left: '1.5rem',
                  backgroundColor: '#FFFFFF',
                  padding: '1.35rem 1.75rem',
                  borderRadius: '12px',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid #E0EBE3',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.1rem',
                  maxWidth: '340px'
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    backgroundColor: '#F3F8F4',
                    color: '#176B43',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Award size={26} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.98rem', color: '#12281D' }}>Verified Contract Terms</div>
                  <div style={{ fontSize: '0.8rem', color: '#5C7064', marginTop: '2px' }}>
                    Transparent rates with no hidden escalation clauses.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            :global(.hero-grid) {
              grid-template-columns: 1fr !important; gap: 2rem !important;
            }
            :global(.handyman-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.handyman-content) {
              padding: 2rem 1.5rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            :global(.section) {
              padding: 2rem 1rem !important;
            }
            :global(.section-title) {
              font-size: 1.75rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.hero-grid) {
              gap: 1.5rem !important;
            }
          }
          `
          @media (max-width: 992px) {
            :global(.intro-grid) {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          WHY CHOOSE SOM
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#F8FAF9' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>The SOM Distinction</span>
            </div>
            <h2 className="section-title">Why Organizations Rely On SOM</h2>
            <p className="section-description">
              We stand apart through local accessibility, disciplined team screening, and transparent operational coordination.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E0EBE3',
                  borderRadius: '12px',
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: 'var(--shadow-xs)',
                  transition: 'all 0.25s ease'
                }}
                className="corp-card"
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '10px',
                    backgroundColor: '#E6F3EB',
                    color: '#176B43',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.2rem',
                    letterSpacing: '-0.02em'
                  }}
                >
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: '1.22rem', color: '#12281D', fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#4A5B51', lineHeight: 1.65, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES SERVED
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Tailored For Your Sector</span>
            </div>
            <h2 className="section-title">Industries We Support Across Indore</h2>
            <p className="section-description">
              Every facility environment operates under specific cleanliness benchmarks and shifts. Discover how we tailor our workforce to your sector.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '2.25rem'
            }}
          >
            {INDUSTRIES_DATA.slice(0, 3).map((ind) => (
              <div
                key={ind.id}
                className="corp-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px'
                }}
              >
                <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                  <Image
                    src={ind.image}
                    alt={ind.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(12, 28, 19, 0.85) 0%, transparent 60%)'
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '1.1rem',
                      left: '1.4rem',
                      right: '1.4rem',
                      color: '#FFFFFF',
                      fontWeight: 700,
                      fontSize: '1.22rem',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {ind.title}
                  </span>
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p style={{ fontSize: '0.92rem', color: '#4A5B51', lineHeight: 1.62, marginBottom: '1.35rem' }}>
                    {ind.description}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '1.1rem', borderTop: '1px solid #EEF4F0' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#176B43', textTransform: 'uppercase', marginBottom: '0.55rem', letterSpacing: '0.04em' }}>
                      Key Services Supplied:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {ind.servicesSupplied.map((svc, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '0.78rem',
                            backgroundColor: '#E6F3EB',
                            color: '#12281D',
                            padding: '0.22rem 0.65rem',
                            borderRadius: '4px',
                            fontWeight: 500
                          }}
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link href="/industries" className="btn btn-secondary" style={{ padding: '0.9rem 2rem' }}>
              <span>View All 6 Industry Verticals</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR WORKING PROCESS
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#F8FAF9' }}>
        <div className="container">
          <div className="section-title-wrap">
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Step-By-Step Reliability</span>
            </div>
            <h2 className="section-title">Transparent 4-Step Onboarding</h2>
            <p className="section-description">
              From your initial inquiry in Indore to full shift deployment, our transition framework is structured and friction-free.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}
          >
            {WORKING_PROCESS.map((step, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  padding: '2.4rem 1.85rem',
                  borderRadius: '12px',
                  border: '1px solid #E0EBE3',
                  boxShadow: 'var(--shadow-xs)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
                className="corp-card"
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span
                    style={{
                      fontSize: '2.2rem',
                      fontWeight: 800,
                      color: '#176B43',
                      lineHeight: 1,
                      letterSpacing: '-0.03em'
                    }}
                  >
                    {step.step}
                  </span>
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: '#E6F3EB',
                      color: '#176B43',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '0.85rem'
                    }}
                  >
                    ✓
                  </span>
                </div>
                <h3 style={{ fontSize: '1.22rem', color: '#12281D', fontWeight: 700, marginTop: '0.25rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#5C7064', lineHeight: 1.62, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE FAQ ACCORDION
      ========================================================================= */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-title-wrap" style={{ marginBottom: '3rem' }}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              <span>Clarifications & Policies</span>
            </div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find quick answers regarding our staffing procedures, operational contracts, and deployment timelines in Indore.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0EBE3',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: isOpen ? '#176B43' : '#12281D'
                    }}
                  >
                    <span>{item.q}</span>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? '#E6F3EB' : '#F3F8F4',
                        color: '#176B43',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginLeft: '1rem'
                      }}
                    >
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.6rem 1.4rem 1.6rem',
                        color: '#4A5B51',
                        fontSize: '0.94rem',
                        lineHeight: 1.65,
                        borderTop: '1px solid #EEF4F0',
                        paddingTop: '1rem'
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENQUIRY SECTION WITH INTEGRATED FORM
      ========================================================================= */}
      <section className="section" id="quick-enquiry" style={{ backgroundColor: '#F8FAF9' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.05fr 1fr',
              gap: '4.5rem',
              alignItems: 'center'
            }}
            className="enquiry-grid"
          >
            <div>
              <div className="section-badge">
                <span className="section-badge-dot" />
                <span>Direct Operations Desk</span>
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
                Consult With Our Indore Operations Team
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#4A5B51', lineHeight: 1.68, marginBottom: '2.25rem' }}>
                Whether you need urgent shift coverage, routine housekeeping staff, or long-term facility contracts in Indore, our managers are available for direct discussion and swift survey scheduling.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.25rem' }}>
                {/* Direct Phone Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0EBE3',
                    borderRadius: '10px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: '#E6F3EB',
                      color: '#176B43',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#5C7064', fontWeight: 600 }}>Direct Contact Line</div>
                    <a
                      href={`tel:${COMPANY_DETAILS.phone}`}
                      style={{ fontSize: '1.22rem', fontWeight: 800, color: '#176B43' }}
                    >
                      {COMPANY_DETAILS.displayPhone}
                    </a>
                  </div>
                </div>

                {/* Response SLA Card */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E0EBE3',
                    borderRadius: '10px',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    boxShadow: 'var(--shadow-xs)'
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      backgroundColor: '#E6F3EB',
                      color: '#10B981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: '#5C7064', fontWeight: 600 }}>Quotation Guarantee</div>
                    <span style={{ fontSize: '0.98rem', fontWeight: 700, color: '#12281D' }}>
                      Detailed commercial scope within 24 business hours
                    </span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: '#E6F3EB',
                  borderRadius: '10px',
                  border: '1px solid rgba(23, 107, 67, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#176B43', fontWeight: 700, marginBottom: '0.25rem' }}>
                  <MapPin size={18} />
                  <span>Serving Indore & Adjoining Industrial Clusters</span>
                </div>
                <p style={{ fontSize: '0.86rem', color: '#26382E', margin: 0, lineHeight: 1.55 }}>
                  Active coverage across Pithampur, Sanwer Road, Vijay Nagar, Super Corridor, AB Road, and greater Indore commercial areas.
                </p>
              </div>
            </div>

            {/* Interactive Form Component */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 992px) {
            :global(.hero-grid) {
              grid-template-columns: 1fr !important; gap: 2rem !important;
            }
            :global(.handyman-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.handyman-content) {
              padding: 2rem 1.5rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            :global(.section) {
              padding: 2rem 1rem !important;
            }
            :global(.section-title) {
              font-size: 1.75rem !important;
            }
            :global(.handyman-check-grid) {
              grid-template-columns: 1fr !important;
            }
            :global(.hero-grid) {
              gap: 1.5rem !important;
            }
          }
          `
          @media (max-width: 992px) {
            :global(.enquiry-grid) {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
        `}</style>
      </section>

      {/* =========================================================================
          BOTTOM CTA BANNER
      ========================================================================= */}
      <CtaBanner />
    </>
  );
}
