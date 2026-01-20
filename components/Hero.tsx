
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621905231291-00741c7e63d5?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white mt-16 md:mt-0">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-12 h-0.5 bg-gold"></span>
            <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm">Premier Electrical Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Houston's Most Trusted Electricians <span className="text-gold italic">Since 1957</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Family-owned and operated for over six decades. We specialize in high-end residential systems, complex commercial projects, new construction, and masterful remodels.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#portfolio" 
              className="bg-gold hover:bg-yellow-400 text-slate-900 px-10 py-4 rounded-full font-bold text-base uppercase transition-all duration-200 shadow-xl hover:shadow-gold/20 text-center active:scale-95"
            >
              View Our Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white/30 hover:border-gold hover:text-gold text-white px-10 py-4 rounded-full font-bold text-base uppercase transition-all duration-200 backdrop-blur-sm text-center active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
