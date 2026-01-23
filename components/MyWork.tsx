
import React, { useRef } from 'react';

const projects = [
  {
    title: "AI-Powered SaaS Analytics",
    category: "Full Stack Development",
    description: "Built a real-time analytics dashboard for marketing teams, featuring predictive modeling using Gemini API and a responsive React frontend.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda546697a?q=80&w=2070&auto=format&fit=crop",
    result: "Next.js, FastAPI, PostgreSQL"
  },
  {
    title: "Decentralized Exchange Interface",
    category: "Web3 / Frontend",
    description: "Developed a high-frequency trading UI with sub-100ms updates, optimized for Web3 wallet interactions and complex data visualizations.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop",
    result: "React, Ethers.js, Tailwind"
  },
  {
    title: "E-commerce Engine (Headless)",
    category: "Backend Architecture",
    description: "Designed a globally distributed commerce engine supporting 50k+ requests per second during peak sales events.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2032&auto=format&fit=crop",
    result: "Go, Redis, AWS Lambda"
  },
  {
    title: "Collaborative Design Tool",
    category: "Frontend Engineering",
    description: "Implemented a multi-user canvas using CRDTs for real-time state synchronization, enabling seamless remote collaboration.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    result: "Canvas API, WebSockets, Node"
  },
  {
    title: "Enterprise Inventory System",
    category: "Full Stack",
    description: "A robust inventory management solution with real-time tracking and automated restock triggers for large-scale warehouses.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    result: "Node.js, GraphQL, React"
  }
];

const MyWork: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = window.innerWidth > 768 ? 600 : window.innerWidth * 0.85;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="work" className="py-16 md:py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Selected Projects</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Innovative Solutions <br className="hidden md:block" />Scroll to Explore</h3>
          <p className="text-slate-400 text-base md:text-lg">
            A gallery of production-ready applications that merge performance with modern aesthetics.
          </p>
        </div>
        <div className="flex gap-4 justify-center md:justify-end">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar gap-6 md:gap-8 px-6 pb-12 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="flex-none w-[85vw] md:w-[600px] snap-center group"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl md:rounded-[2.5rem] border border-white/5 mb-6 md:mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                 <p className="text-blue-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
              </div>

              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h4>
                <div className="flex items-center gap-3">
                   <div className="px-3 py-1 glass-effect rounded-full text-[9px] md:text-[10px] font-bold text-slate-300 border border-white/10">
                    {project.result}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2 md:px-4">
               <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4 md:mb-6 line-clamp-2">{project.description}</p>
               <button className="text-white font-bold text-sm md:text-base flex items-center gap-2 group-hover:gap-4 transition-all">
                  View Repository 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
               </button>
            </div>
          </div>
        ))}
        <div className="flex-none w-1"></div>
      </div>
      
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
    </section>
  );
};

export default MyWork;
