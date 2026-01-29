import React from 'react';

const ShowcaseSection: React.FC = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=2070&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-2xl">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Expertly Engineered</h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">Bringing Power to <br /><span className="text-gold italic">Houston's Legacy</span></h3>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Our commitment to quality is visible in every wire we pull and every panel we upgrade. Experience the gold standard of electrical service.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="h-1 w-24 bg-gold rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
