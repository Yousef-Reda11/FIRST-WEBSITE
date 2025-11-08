
import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "BlueVision transformed our online presence. Their SEO strategy doubled our organic traffic in just six months!",
    author: 'John Doe',
    company: 'CEO, TechCorp',
  },
  {
    quote: "The social media campaigns they ran were phenomenal. Our engagement rates have never been higher.",
    author: 'Jane Smith',
    company: 'Marketing Director, Innovate Co.',
  },
  {
    quote: "A truly professional and data-driven team. The results from our paid ad campaigns exceeded all expectations.",
    author: 'Emily White',
    company: 'Founder, Future Systems',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
        <div className="w-24 h-1 bg-white mx-auto mt-2 mb-10"></div>
        <div className="relative max-w-3xl mx-auto h-48">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <p className="text-xl italic text-brand-gray mb-4">"{testimonial.quote}"</p>
              <div className="font-bold text-lg">{testimonial.author}</div>
              <div className="text-sm text-brand-gray">{testimonial.company}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-brand-gray/50 hover:bg-brand-gray'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
