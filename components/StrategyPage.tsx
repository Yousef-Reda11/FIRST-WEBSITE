import React from 'react';

interface StrategyPageProps {
  onBack: () => void;
}

const strategies = [
  {
    icon: '🚀',
    title: 'Direct Approach',
    description: 'Confident and straightforward. Initiate contact directly with a clear purpose.',
  },
  {
    icon: '🎭',
    title: 'Social Circle Infiltration',
    description: 'Subtle and indirect. Build connections within the target\'s social circle first.',
  },
  {
    icon: '🧩',
    title: 'Mutual Interest Connection',
    description: 'Organic and natural. Find a shared hobby or interest to build a genuine connection.',
  },
];

const StrategyCard: React.FC<{ strategy: typeof strategies[0] }> = ({ strategy }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border-t-4 border-brand-blue">
    <div className="text-5xl mb-4 flex justify-center">{strategy.icon}</div>
    <h3 className="text-xl font-bold text-brand-blue mb-2">{strategy.title}</h3>
    <p className="text-gray-600">{strategy.description}</p>
  </div>
);


const StrategyPage: React.FC<StrategyPageProps> = ({ onBack }) => {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-4xl relative">
        <button 
          onClick={onBack} 
          className="absolute top-4 left-4 text-gray-500 hover:text-brand-blue transition-colors"
          aria-label="Go back"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </button>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-brand-blue">Choose a Strategy</h2>
          <p className="text-gray-600 mt-2">Select the best method for your approach.</p>
           <div className="w-24 h-1 bg-brand-blue mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
                <StrategyCard key={index} strategy={strategy} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default StrategyPage;