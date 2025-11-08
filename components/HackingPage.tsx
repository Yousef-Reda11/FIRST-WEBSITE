import React, { useState } from 'react';
import TargetInfoForm from './TargetInfoForm';
import StrategyPage from './StrategyPage';

const HackingPage: React.FC = () => {
  const [view, setView] = useState<'selection' | 'targetForm' | 'strategyView'>('selection');

  const ActionCard: React.FC<{ title: string; description: string; onClick: () => void; icon: string }> = ({ title, description, onClick, icon }) => (
    <div 
      onClick={onClick}
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center border-t-4 border-brand-blue w-full max-w-sm"
    >
      <div className="text-6xl mb-4 flex justify-center text-brand-blue">{icon}</div>
      <h3 className="text-2xl font-bold text-brand-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  if (view === 'targetForm') {
    return <TargetInfoForm onBack={() => setView('selection')} />;
  }
  
  if (view === 'strategyView') {
    return <StrategyPage onBack={() => setView('selection')} />;
  }

  return (
    <section className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-blue">Dashboard</h1>
        <p className="text-lg text-gray-600 mt-2">Choose your next action.</p>
        <div className="w-24 h-1 bg-brand-blue mx-auto mt-4"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <ActionCard 
          title="Who you want to hack" 
          description="Identify your target to begin the process."
          icon="🎯"
          onClick={() => setView('targetForm')}
        />
        <ActionCard 
          title="Best strategy for approach" 
          description="Analyze and formulate the perfect strategy."
          icon="💡"
          onClick={() => setView('strategyView')}
        />
      </div>
    </section>
  );
};

export default HackingPage;