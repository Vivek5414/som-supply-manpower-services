import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '@/data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={COMPANY_DETAILS.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Direct WhatsApp Enquiry with SOM Services"
    >
      <MessageCircle size={28} />
    </a>
  );
};
