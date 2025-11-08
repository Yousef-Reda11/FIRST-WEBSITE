import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import HackingPage from './components/HackingPage';

const App: React.FC = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGetStartedClick = () => setLoginModalOpen(true);
  const handleCloseModal = () => setLoginModalOpen(false);
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setLoginModalOpen(false);
  };

  return (
    <div className="bg-brand-white text-gray-800 font-sans">
      {isLoggedIn ? (
        <HackingPage />
      ) : (
        <>
          <Header />
          <main>
            <Hero onGetStartedClick={handleGetStartedClick} />
            <Services />
            <About />
            <Clients />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleCloseModal} 
        onLoginSuccess={handleLoginSuccess} 
      />
    </div>
  );
};

export default App;