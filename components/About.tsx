
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=2070&auto=format&fit=crop" 
                alt="Electrician working" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Design elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 -z-0 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-slate-900/5 -z-0 rounded-full blur-2xl"></div>
            
            <div className="absolute bottom-6 left-6 bg-slate-900 p-8 rounded-xl shadow-xl text-white z-20 max-w-[280px]">
              <p className="text-4xl font-extrabold text-gold mb-1">65+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">Years of Houston Excellence</p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-slate-100 rounded-full">
              <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">A Trusted Name Since 1956</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Our Legacy of <br /><span className="text-gold italic">Quality Craftsmanship</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Houston Empire Electric has been a family-owned and operated institution since 1956. For over six decades, we have powered the growth of our city, building a reputation founded on unwavering integrity, technical precision, and a commitment to white-glove service.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether wiring a contemporary custom estate or managing large-scale industrial electrical infrastructure, we approach every project with the same level of mastery. Our clients choose us not just for our expertise, but for the peace of mind that comes with hiring Houston’s most established electrical legacy.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Licensed & Bonded Professionals",
                "Advanced Diagnostic Tools",
                "Family-First Customer Service",
                "Custom Electrical Design"
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <div className="bg-gold rounded-full p-1">
                    <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
