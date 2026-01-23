
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Marcus Thorne",
      role: "CTO, Thorne Ventures",
      content: "Alex is one of the few engineers who truly understands 'scale'. He refactored our legacy monolith into a microservices dream.",
      img: "https://picsum.photos/seed/tech1/200/200"
    },
    {
      name: "Elena Rodriguez",
      role: "Product Lead, Bloom Tech",
      content: "Alex's attention to detail on the frontend is unmatched. He consistently delivers interfaces that our users love to interact with.",
      img: "https://picsum.photos/seed/tech2/200/200"
    },
    {
      name: "David Chen",
      role: "Senior Architect, Global Systems",
      content: "The real-time collaboration engine Alex built for us is a masterpiece of engineering. Performance and stability are top-tier.",
      img: "https://picsum.photos/seed/tech3/200/200"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-teal-500 uppercase tracking-widest mb-4">Engineering Peers</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Trusted by the Industry</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-8 rounded-3xl glass-effect border border-white/5 relative">
              <div className="mb-6">
                <svg className="h-8 w-8 text-blue-500/50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-slate-300 text-lg italic leading-relaxed mb-8">"{r.content}"</p>
              <div className="flex items-center gap-4">
                <img src={r.img} className="w-12 h-12 rounded-full" alt={r.name} />
                <div>
                  <p className="text-white font-bold">{r.name}</p>
                  <p className="text-slate-500 text-sm">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
