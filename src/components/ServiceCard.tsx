import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '@/types';

export const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  return (
    <div
      className="corp-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid #E2ECE5',
        position: 'relative'
      }}
    >
      {/* Image with gradient overlay and badge */}
      <div style={{ position: 'relative', height: '210px', width: '100%', backgroundColor: '#E0ECE3', overflow: 'hidden' }}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
          className="service-card-img"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 31, 23, 0.75) 0%, rgba(15, 31, 23, 0.1) 60%)'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '1rem',
            right: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              backgroundColor: 'rgba(23, 107, 67, 0.85)',
              backdropFilter: 'blur(4px)',
              padding: '0.2rem 0.6rem',
              borderRadius: '4px'
            }}
          >
            Verified Deployment
          </span>
        </div>
      </div>

      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3
          style={{
            fontSize: '1.28rem',
            color: '#14281E',
            marginBottom: '0.65rem',
            fontWeight: 700,
            letterSpacing: '-0.015em'
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: '0.92rem',
            color: '#4A5B51',
            lineHeight: 1.6,
            marginBottom: '1.25rem'
          }}
        >
          {service.shortDesc}
        </p>

        {/* Feature Highlights */}
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 1.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.55rem',
            flexGrow: 1
          }}
        >
          {service.features.slice(0, 3).map((feat, idx) => (
            <li
              key={idx}
              style={{
                fontSize: '0.86rem',
                color: '#26382E',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.55rem'
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  backgroundColor: '#E6F3EB',
                  color: '#176B43',
                  flexShrink: 0,
                  marginTop: '2px'
                }}
              >
                <Check size={11} strokeWidth={3} />
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Card Footer Link */}
        <div style={{ paddingTop: '1.1rem', borderTop: '1px solid #EEF5F0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            href={`/services#${service.id}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#176B43',
              transition: 'gap 0.2s ease'
            }}
            className="service-link"
          >
            <span>Explore Scope</span>
            <ArrowRight size={15} />
          </Link>
          <span style={{ fontSize: '0.78rem', color: '#6A7D71' }}>Indore Operations</span>
        </div>
      </div>

      <style jsx>{`
        :global(.corp-card:hover .service-card-img) {
          transform: scale(1.05);
        }
        :global(.corp-card:hover .service-link) {
          color: #0F5232;
        }
      `}</style>
    </div>
  );
};
