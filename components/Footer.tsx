
import React from 'react';

const Footer: React.FC = () => {
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/kavinkumar-v', // Updated with a plausible username
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kavinkumar-v', // Updated with a plausible username
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <footer className="py-16 border-t border-white/10 bg-[#050505] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          {/* Logo/Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              KAVIN<span className="text-blue-500">KUMAR</span>
            </h2>
            
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-effect border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
                aria-label={social.name}
              >
                <div className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Kavinkumar V.
            </p>
            <p className="text-slate-600 text-[10px] mt-1 uppercase tracking-widest font-bold">
              Built with precision & passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
