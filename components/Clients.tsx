
import React from 'react';

const clientLogos = [
  "TechCorp",
  "Innovate Co.",
  "Quantum Solutions",
  "Future Systems",
  "NextGen Inc.",
  "Apex Industries"
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold text-gray-500 mb-8">
          Trusted by Innovative Companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clientLogos.map((logo, index) => (
            <div key={index} className="text-gray-400 text-2xl font-medium opacity-70 hover:opacity-100 transition-opacity duration-300">
             {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
