
import React, { useState } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex flex-col group active:scale-95 transition-transform duration-200">
          <span className="text-xl md:text-2xl font-extrabold text-white tracking-tighter uppercase leading-none">
            Houston Empire
          </span>
          <span className="text-sm md:text-base font-semibold text-gold tracking-widest uppercase">
            Electric
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-gold transition-all duration-200 font-medium text-sm uppercase tracking-wide active:scale-90"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-gold hover:bg-yellow-400 text-slate-900 px-6 py-2.5 rounded font-bold text-sm uppercase transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Schedule Appointment
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 active:scale-90 transition-transform duration-200 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 animate-slideDown overflow-hidden">
          <div className="px-6 py-8 space-y-6 flex flex-col">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg font-medium hover:text-gold transition-colors active:translate-x-2 duration-200"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-gold text-slate-900 px-6 py-4 rounded font-bold text-center uppercase active:scale-95 transition-transform duration-200 shadow-xl"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
