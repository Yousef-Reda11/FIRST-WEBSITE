
import React from 'react';

const Footer: React.FC = () => {
  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-2">BlueVision Agency</h3>
            <p className="text-brand-gray">Empowering Brands with Digital Power</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-gray hover:text-white transition-colors duration-300">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <a href="mailto:contact@bluevision.agency" className="text-brand-gray hover:text-white transition-colors duration-300">contact@bluevision.agency</a>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-brand-gray text-sm">
          <p>&copy; {new Date().getFullYear()} BlueVision Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
