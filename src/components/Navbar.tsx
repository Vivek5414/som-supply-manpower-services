'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, Menu, X, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries We Serve', href: '/industries' },
    { label: 'Contact Us', href: '/contact' }
  ];

  return (
    <>
      {/* Main sticky navigation */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 900,
          backgroundColor: '#FFFFFF',
          boxShadow: isScrolled
            ? '0 4px 20px rgba(0, 0, 0, 0.08)'
            : '0 1px 0 rgba(0, 0, 0, 0.06)',
          transition: 'all 0.25s ease'
        }}
      >
        <div
          className="container"
          style={{
            height: '84px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Logo />

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2rem'
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#176B43' : '#3E4B43',
                    position: 'relative',
                    padding: '0.5rem 0',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2.5px',
                        backgroundColor: '#176B43',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.85rem'
            }}
            className="desktop-actions"
          >
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                padding: '0.65rem 1.1rem',
                fontSize: '0.88rem',
                gap: '0.4rem'
              }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: '0.65rem 1.25rem',
                fontSize: '0.88rem'
              }}
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="mobile-toggle"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '6px',
              border: '1px solid #E0ECE3',
              color: '#176B43'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              borderTop: '1px solid #E0ECE3',
              backgroundColor: '#FFFFFF',
              padding: '1.25rem 1.5rem 2rem 1.5rem',
              boxShadow: '0 12px 24px rgba(0,0,0,0.08)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      backgroundColor: isActive ? '#F1F8F1' : 'transparent',
                      color: isActive ? '#176B43' : '#1E2922',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '1rem'
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={18} color={isActive ? '#176B43' : '#6B7B70'} />
                  </Link>
                );
              })}

              <div
                style={{
                  marginTop: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #EDF3EE',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <a
                  href={COMPANY_DETAILS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', backgroundColor: '#25D366', borderColor: '#25D366' }}
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @media (min-width: 901px) {
          :global(.desktop-nav),
          :global(.desktop-actions) {
            display: flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
