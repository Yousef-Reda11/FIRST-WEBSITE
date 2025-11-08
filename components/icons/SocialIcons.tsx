
import React from 'react';

const iconClass = "w-6 h-6";

export const FacebookIcon: React.FC = () => (
  <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

export const InstagramIcon: React.FC = () => (
    <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm-3.5-6a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm10.5-5a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
    </svg>
);

export const LinkedInIcon: React.FC = () => (
    <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H8.25V12h2.188V9.797c0-2.166 1.29-3.477 3.37-3.477.98 0 1.98.174 1.98.174v2.17h-1.02c-1.05 0-1.38.62-1.38 1.32V12h2.4l-.38 2.89h-2.02v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
);
