
import React from 'react';

const projects = [
  { 
    title: "Memorial Estates", 
    category: "Custom Residential", 
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
  },
  { 
    title: "Downtown Tech Hub", 
    category: "Commercial Office", 
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
  },
  { 
    title: "River Oaks Modern", 
    category: "Smart Home Integration", 
    img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Industrial Heights", 
    category: "System Maintenance", 
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Luxury Condo Tower", 
    category: "New Construction", 
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
  },
  { 
    title: "Tanglewood Remodel", 
    category: "Historic Modernization", 
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Featured Projects</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
              A Showcase of Our <span className="text-gold">Brightest Works</span>
            </h3>
          </div>
          <button className="text-white border-b-2 border-gold pb-1 font-bold uppercase tracking-widest text-sm hover:text-gold transition-colors">
            View Full Gallery
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold mb-4">{project.title}</h4>
                <div className="flex items-center space-x-2 text-white/60 font-medium text-sm">
                  <span>View Details</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
