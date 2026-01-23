
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '15+', color: 'text-blue-500' },
    { label: 'Years Experience', value: '1.5+', color: 'text-teal-500' },
    { label: 'Technologies', value: '12+', color: 'text-purple-500' },
    { label: 'Happy Clients', value: '10+', color: 'text-amber-500' },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12 glass-effect rounded-[3rem] border border-white/5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 group">
              <h3 className={`text-4xl md:text-5xl font-black ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
                {stat.value}
              </h3>
              <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
