
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 glass-effect' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white z-[110]">
            ALEX<span className="text-blue-500">THOMPSON</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Expertise</a>
            <a href="#work" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Work</a>
            <a href="#" className="px-6 py-2.5 rounded-full glass-effect text-sm font-semibold hover:bg-white hover:text-black transition-all">
              Get in Touch
            </a>
          </div>

          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white z-[110] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <a 
          href="#about" 
          onClick={() => setIsMenuOpen(false)}
          className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
        >
          About
        </a>
        <a 
          href="#services" 
          onClick={() => setIsMenuOpen(false)}
          className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
        >
          Expertise
        </a>
        <a 
          href="#work" 
          onClick={() => setIsMenuOpen(false)}
          className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
        >
          Work
        </a>
        <a 
          href="#" 
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 px-10 py-4 rounded-full accent-gradient text-xl font-bold text-white shadow-xl shadow-blue-500/20"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
};

export default Navbar;
