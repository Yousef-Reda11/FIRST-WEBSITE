import React from 'react';

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <section id="home" className="bg-brand-blue text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
            Empowering Brands with Digital Power
          </h1>
          <p className="text-lg md:text-xl text-brand-gray mb-8 animate-fade-in-up">
            We are BlueVision, a full-service digital marketing agency dedicated to helping your business thrive in the online world. From strategy to execution, we've got you covered.
          </p>
          <button
            onClick={onGetStartedClick}
            className="bg-white text-brand-blue font-bold py-3 px-8 rounded-full hover:bg-brand-gray hover:text-brand-blue transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Started
          </button>
        </div>
      </div>
       <style>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;