
import React from 'react';
import type { Service } from '../types';
import { MegaphoneIcon, MagnifyingGlassIcon, ChartBarIcon, LightBulbIcon } from './icons/ServiceIcons';

const services: Service[] = [
  {
    icon: <MegaphoneIcon />,
    title: 'Social Media Marketing',
    description: 'Amplify your brand\'s voice across social platforms with engaging content and targeted campaigns.',
  },
  {
    icon: <MagnifyingGlassIcon />,
    title: 'SEO Optimization',
    description: 'Climb the search rankings and drive organic traffic with our proven SEO strategies.',
  },
  {
    icon: <ChartBarIcon />,
    title: 'Paid Ads (Google & Meta)',
    description: 'Maximize your ROI with data-driven paid advertising campaigns on Google and Meta platforms.',
  },
  {
    icon: <LightBulbIcon />,
    title: 'Branding & Strategy',
    description: 'Build a memorable brand identity and a roadmap for digital success with our expert strategists.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center border-t-4 border-brand-blue">
    <div className="flex justify-center mb-4 text-brand-blue">{service.icon}</div>
    <h3 className="text-xl font-bold text-brand-blue mb-2">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Our Services</h2>
          <p className="text-lg text-gray-600 mt-2">What we do best to grow your business.</p>
          <div className="w-24 h-1 bg-brand-blue mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
