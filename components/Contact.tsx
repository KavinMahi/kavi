
import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      label: "Email Me",
      value: "kavinmahi.cs@gmail.com",
      link: "mailto:kavinmahi.cs@gmail.com",
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      color: "from-blue-500 to-indigo-500"
    },
    {
      label: "Call Me",
      value: "+91 7339451207",
      link: "tel:+917339451207",
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      color: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto glass-effect rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
        <div className="p-12 md:p-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Start a <span className="text-gradient">Conversation.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-16 max-w-xl mx-auto">
            I'm currently available for full-time opportunities and interesting projects. Reach out via email or phone.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, idx) => (
              <a 
                key={idx}
                href={info.link}
                className="group relative p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 block overflow-hidden"
              >
                {/* Decorative background glow */}
                <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${info.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                
                <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={info.icon} />
                  </svg>
                </div>
                
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">
                  {info.label}
                </p>
                <p className="text-lg md:text-xl font-bold text-white break-all">
                  {info.value}
                </p>
                
                <div className="mt-4 flex justify-center items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold">
                  <span>Connect Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
