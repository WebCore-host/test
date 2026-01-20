
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-extrabold tracking-tighter uppercase leading-none">
              Houston Empire
            </span>
            <span className="text-sm font-semibold text-gold tracking-widest uppercase mb-4">
              Electric
            </span>
            <p className="text-white/40 text-sm max-w-xs text-center md:text-left">
              Professional excellence in electrical contracting since 1956. Serving the greater Houston area with pride.
            </p>
          </div>

          <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio</a>
          </div>

          <div className="flex space-x-6">
            {/* Simple Social Links */}
            {['FB', 'IG', 'LI'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-slate-900 transition-all font-bold text-xs"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs uppercase tracking-widest">
          <p>© 2024 Houston Empire Electric. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
