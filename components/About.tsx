
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative inline-block w-full max-w-md">
             <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
              alt="Alex Thompson Portrait"
              className="rounded-[2rem] md:rounded-[3rem] w-full aspect-square object-cover grayscale"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-blue-600 rounded-full flex items-center justify-center border-[8px] md:border-[12px] border-[#0a0a0a] text-center p-2 md:p-4 shadow-2xl">
              <p className="text-white font-bold leading-tight text-xs md:text-base">Github Star<br/><span className="text-lg md:text-2xl">2024</span><br/>Nominee</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">The Developer</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Engineering Experience <br /><span className="text-gradient">With Empathy</span></h3>
          <div className="space-y-4 md:space-y-6 text-slate-400 text-base md:text-lg leading-relaxed">
            <p>
              My journey began when I hacked my first video game console at 14. That curiosity evolved into a decade-long career building production software for Silicon Valley startups and Fortune 500 companies.
            </p>
            <p>
              Today, I specialize in bridging the gap between technical complexity and business requirements. I believe great software is invisible—it just works, scaling silently.
            </p>
          </div>
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <div className="p-4 md:p-6 glass-effect rounded-2xl">
              <p className="text-white font-bold text-lg md:text-xl mb-1">AWS Certified</p>
              <p className="text-slate-400 text-xs md:text-sm">Solutions Architect Associate</p>
            </div>
            <div className="p-4 md:p-6 glass-effect rounded-2xl">
              <p className="text-white font-bold text-lg md:text-xl mb-1">Google GenAI</p>
              <p className="text-slate-400 text-xs md:text-sm">Certified AI Integration Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
