
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Client {
  name: string;
  logoUrl: string;
}
