
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
            <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase text-blue-400">Open for New Engineering Partnerships</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight text-white">
            Code <span className="text-gradient">Architected.</span> <br className="hidden md:block" />
            Scalability <span className="text-gradient">Defined.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0">
            Building enterprise-grade applications with modern stacks. Specializing in high-performance React frontends and distributed cloud architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onCtaClick}
              className="px-8 py-4 rounded-xl accent-gradient text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-blue-500/25"
            >
              Consult AI Assistant
            </button>
            <a href="#work" className="px-8 py-4 rounded-xl glass-effect text-white font-bold text-lg hover:bg-white/10 transition-colors inline-block text-center">
              View Projects
            </a>
          </div>

          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/dev${i + 10}/100/100`}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0a0a0a]"
                  alt="Tech Lead"
                />
              ))}
            </div>
            <div className="text-sm text-center sm:text-left">
              <p className="text-white font-bold">Endorsed by 50+ Tech Leaders</p>
              <p className="text-slate-400">Shipped code to 1M+ active users</p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-3xl transform -rotate-6"></div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-effect border border-white/10 group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Alex Thompson"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 p-4 md:p-6 glass-effect rounded-2xl">
              <p className="text-blue-400 font-bold mb-1 text-sm md:text-base">Alex Thompson</p>
              <p className="text-slate-300 text-xs md:text-sm">"Software isn't just code; it's a bridge between a problem and its solution."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
