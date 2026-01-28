import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const handleScrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('work');
    if (element) {
      const offset = 100; // Account for the fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-white/10 mb-6 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-blue-400">Open for New Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight text-white">
            Full-Stack <br className="hidden md:block" />
            <span className="text-gradient">Web Developer</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-slate-200 mb-6 leading-relaxed">
            Building modern, scalable, and high-performance web applications using React, Next.js, and Node.js.
          </h2>
          
          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
            I’m Kavinkumar V, a professional web developer with 1.5+ years of experience creating responsive user interfaces, integrating APIs, and delivering clean, production-ready code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#work"
              onClick={handleScrollToWork}
              className="px-8 py-4 rounded-xl accent-gradient text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-blue-500/25 inline-block text-center glow-hover"
            >
              View Projects
            </a>
            <button 
              onClick={onCtaClick}
              className="px-8 py-4 rounded-xl glass-effect border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all text-center"
            >
              Consult AI Assistant
            </button>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl transform scale-75 animate-pulse"></div>
          <div className="relative w-full max-w-[500px] aspect-square animate-float">
            <img 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop" 
              alt="Kavinkumar V Avatar"
              className="w-full h-full object-cover rounded-full border-4 border-white/10 drop-shadow-[0_20px_50px_rgba(59,130,246,0.3)]"
            />
            {/* Ambient light effects around the avatar */}
            <div className="absolute top-1/4 -right-10 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-1/4 -left-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;