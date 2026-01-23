
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'Lines of Code', value: '2M+', color: 'text-blue-500' },
    { label: 'Apps Shipped', value: '45+', color: 'text-teal-500' },
    { label: 'Coffee / Year', value: '1.2k', color: 'text-purple-500' },
    { label: 'Uptime Record', value: '99.9%', color: 'text-amber-500' },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto py-12 px-12 glass-effect rounded-[3rem] border border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className={`text-4xl md:text-5xl font-black ${stat.color}`}>{stat.value}</h3>
              <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
