
import React from 'react';

const Services: React.FC = () => {
  const items = [
    {
      title: "Frontend Engineering",
      desc: "Architecting pixel-perfect, accessible, and high-performance interfaces using React, Next.js, and advanced TypeScript patterns.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      title: "System Design & Backend",
      desc: "Building resilient microservices and distributed systems with Node.js, Go, and Python. Specialized in low-latency API design.",
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    },
    {
      title: "Cloud & AI Integration",
      desc: "Automating deployments with Docker and AWS. Expert in integrating LLMs (Gemini, GPT) to create intelligent user experiences.",
      icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Core Stack</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineering Excellence <br />End-to-End</h3>
          <p className="text-slate-400 max-w-2xl text-lg">
            I specialize in full-cycle product development. From initial system architecture and database design to deploying high-converting user interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group p-10 rounded-[2.5rem] glass-effect border border-white/5 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-8">{item.desc}</p>
              <a href="#work" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                View Tech Stack
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
