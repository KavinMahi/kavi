
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass-effect rounded-[3rem] overflow-hidden border border-white/10">
        <div className="p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Build Something <span className="text-gradient">Exceptional.</span></h2>
          <p className="text-slate-400 text-lg mb-12">
            Currently available for select contract roles and technical consulting. 
            Drop a message to discuss your next project.
          </p>
          
          <form className="grid md:grid-cols-2 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-2">Name</label>
              <input 
                type="text" 
                placeholder="Ada Lovelace" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-2">Email</label>
              <input 
                type="email" 
                placeholder="ada@tech.com" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase ml-2">Interested In</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                <option>Full Stack Product Development</option>
                <option>System Architecture Design</option>
                <option>Cloud Migration & DevOps</option>
                <option>AI / LLM Integration</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button className="w-full py-5 rounded-2xl accent-gradient text-white font-bold text-xl hover:scale-[1.02] transition-transform shadow-xl shadow-blue-500/20">
                Send Project Brief
              </button>
            </div>
          </form>
          
          <p className="mt-8 text-slate-500 text-sm italic">
            Encrypted & Secure communication channel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
