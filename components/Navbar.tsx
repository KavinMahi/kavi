
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      closeMenu();
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 glass-effect' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, 'home')} 
            className="text-2xl font-bold tracking-tighter text-white z-[110]"
          >
            KAVIN<span className="text-blue-500">KUMAR</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, 'about')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleLinkClick(e, 'skills')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#work" 
              onClick={(e) => handleLinkClick(e, 'work')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Contact
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
      <div className={`fixed inset-0 z-[90] bg-[#0a0a0a]/98 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
        >
          Home
        </a>
        <a 
          href="#about" 
          onClick={(e) => handleLinkClick(e, 'about')}
          className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
        >
          About
        </a>
        <a 
          href="#skills" 
          onClick={(e) => handleLinkClick(e, 'skills')}
          className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
        >
          Skills
        </a>
        <a 
          href="#work" 
          onClick={(e) => handleLinkClick(e, 'work')}
          className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
        >
          Work
        </a>
        <a 
          href="#contact" 
          onClick={(e) => handleLinkClick(e, 'contact')}
          className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
        >
          Work
        </a>
      </div>
    </>
  );
};

export default Navbar;