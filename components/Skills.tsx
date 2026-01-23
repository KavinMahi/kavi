
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js","JavaScript" , "TypeScript", "Tailwind CSS", "Html5","Css3","Wordpress"],
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB",],
      icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
      color: "from-teal-500 to-emerald-400"
    },
    {
      title: "Tools & DevOps",
      skills: ["Git & GitHub", "Vercel", "Figma", "Postman"],
      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
      color: "from-purple-500 to-indigo-400"
    },
    {
      title: "AI & Innovation",
      skills: ["Gemini AI", "Cursor AI", "Loveble AI", ],
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "from-amber-500 to-orange-400"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Technical Proficiency</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Expertise & <span className="text-gradient">Tooling</span></h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of the technologies and frameworks I use to bring complex ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="group p-8 rounded-[2rem] glass-effect border border-white/5 hover:border-white/10 transition-all duration-500">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-6 tracking-tight">{cat.title}</h4>
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-slate-400 group/item">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/item:bg-blue-500 transition-colors" />
                    <span className="text-sm font-medium group-hover/item:text-slate-200 transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
