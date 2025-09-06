
import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';

interface WhatsAppIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ 
  className = '', 
  size = 24
}) => (
  <OptimizedImage 
    src="/lovable-uploads/b6079457-2714-4d35-9f2b-10acffdd0871.png" 
    alt="WhatsApp"
    width={size}
    height={size} 
    className={className}
    style={{ objectFit: 'contain' }}
    loading="lazy"
    sizes={`${size}px`}
  />
);

export default WhatsAppIcon;
