
import React from 'react';
import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    name: 'Jessica Miller',
    role: 'Founder & CEO',
    imageUrl: 'https://picsum.photos/seed/jessica/400/400',
  },
  {
    name: 'David Chen',
    role: 'Head of SEO',
    imageUrl: 'https://picsum.photos/seed/david/400/400',
  },
  {
    name: 'Maria Garcia',
    role: 'Social Media Director',
    imageUrl: 'https://picsum.photos/seed/maria/400/400',
  },
  {
    name: 'Samuel Jones',
    role: 'Lead Ads Strategist',
    imageUrl: 'https://picsum.photos/seed/samuel/400/400',
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center group">
    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300">
      <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-bold text-brand-blue mt-4">{member.name}</h3>
    <p className="text-gray-500">{member.role}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">About Our Agency</h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600">
            At BlueVision, our mission is to merge creativity with technology to deliver unparalleled digital marketing results. We believe in building partnerships, not just client lists. Our team of passionate experts is committed to transparency, innovation, and your success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
