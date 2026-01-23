
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import MyWork from './components/MyWork';
import Stats from './components/Stats';
import About from './components/About';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>

      <Navbar />
      
      <main>
        <Hero onCtaClick={() => setIsChatOpen(true)} />
        <Stats />
        <Services />
        <MyWork />
        <About />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Kavinkumar V<span className="text-blue-500">_</span></h2>
            <p className="text-slate-400 text-sm">Full-Stack Web Developer</p>
          </div>
          <div className="flex gap-8 text-slate-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Resume</a>
          </div>
          <p className="text-slate-500 text-xs">© 2024 Kavinkumar V. Hand-coded with precision.</p>
        </div>
      </footer>

      {/* Floating Action Button for AI Assistant */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full accent-gradient flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform glow-hover"
      >
        {isChatOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {isChatOpen && <AIAssistant onClose={() => setIsChatOpen(false)} />}
    </div>
  );
};

export default App;
