
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 lg:order-1 flex justify-center">
          <div className="relative inline-block w-full max-w-md">
             <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
              alt="Kavin Kumar Portrait"
              className="rounded-[2rem] md:rounded-[3rem] w-full aspect-square object-cover grayscale"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2 text-center lg:text-left">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">The Developer</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8">Engineering Experience <br /><span className="text-gradient">With Empathy</span></h3>
          <div className="space-y-4 md:space-y-6 text-slate-400 text-base md:text-lg leading-relaxed">
            <p>
              I am a results-oriented Web Developer specializing in front-end and full-stack development. I have hands-on experience in building fast, responsive, and scalable applications using React.js, Next.js, JavaScript, and modern UI frameworks.
            </p>
            <p>
              I focus on writing clean, maintainable code, optimizing performance, and delivering intuitive user experiences. I actively leverage AI-assisted development tools like ChatGPT, Claude, Gemini, Cursor, and Lovable AI to accelerate development, improve debugging efficiency, and enhance code quality.
            </p>
            <p>
              I am continuously learning and adapting to new technologies to stay aligned with modern web standards and best practices.
            </p>
          </div>
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <div className="p-4 md:p-6 glass-effect rounded-2xl border border-white/10">
              <p className="text-white font-bold text-lg md:text-xl mb-1">IDM Techpark</p>
              <p className="text-slate-400 text-xs md:text-sm font-medium">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
