
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
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
              className="px-8 py-4 rounded-xl accent-gradient text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-blue-500/25 inline-block text-center"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl glass-effect text-white font-bold text-lg hover:bg-white/10 transition-colors inline-block text-center"
            >
              Contact Me
            </a>
          </div>

          
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl transform -rotate-6"></div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-effect border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Kavinkumar V"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
