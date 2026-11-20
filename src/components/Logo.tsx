import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Logo: React.FC<{ variant?: 'light' | 'dark'; size?: 'normal' | 'large' }> = ({
  variant = 'dark',
  size = 'normal'
}) => {
  const isLight = variant === 'light';
  const isLarge = size === 'large';

  // Specific sizing for navbar vs footer
  const imgWidth = isLarge ? 240 : 190;
  const imgHeight = isLarge ? 72 : 58;

  return (
    <Link
      href="/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        padding: isLight ? '0.35rem 0.65rem' : '0',
        backgroundColor: isLight ? '#FFFFFF' : 'transparent',
        borderRadius: isLight ? '8px' : '0'
      }}
      aria-label="SOM Supply and Manpower Services Home"
    >
      <div style={{ position: 'relative', width: `${imgWidth}px`, height: `${imgHeight}px` }}>
        <Image
          src="/images/som-logo.png"
          alt="SOM Supply and Manpower Services - Housekeeping Services"
          fill
          priority
          sizes="(max-width: 768px) 160px, 240px"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </Link>
  );
};
