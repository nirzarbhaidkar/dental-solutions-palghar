import React from 'react';

interface ToothIconProps {
  className?: string;
}

// Tooth glyph matching the favicon; uses currentColor so it can sit on any brand background
export const ToothIcon: React.FC<ToothIconProps> = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="currentColor"
      d="M12 5.4C10.6 4.5 9.2 4 7.8 4 5.2 4 3.5 6 3.5 8.6c0 2 .6 3.5 1.2 5.1.6 1.6.9 3.5 1.2 5.3.2 1.3.9 2 1.8 2 1 0 1.5-.8 1.8-2l.6-2.6c.3-1.1 1-1.7 1.9-1.7s1.6.6 1.9 1.7l.6 2.6c.3 1.2.8 2 1.8 2 .9 0 1.6-.7 1.8-2 .3-1.8.6-3.7 1.2-5.3.6-1.6 1.2-3.1 1.2-5.1C20.5 6 18.8 4 16.2 4c-1.4 0-2.8.5-4.2 1.4z"
    />
  </svg>
);

export default ToothIcon;
