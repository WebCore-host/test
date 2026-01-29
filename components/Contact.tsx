import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as any).toString(),
    })
      .then(() => {
        alert("Thank you for reaching out. We'll be in touch shortly.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error("Netlify Form Error:", error);
        alert("There was an error sending your message. Please try again or call us directly.");
      });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Get in Touch</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-8">Ready to Start Your Project?</h3>
            
            <div className="space-y-10">
              <div className="flex items-start space-x-5 group">
                <div className="bg-slate-50 p-4 rounded-xl text-gold border border-slate-100 transition-colors duration-300 group-hover:bg-gold group-hover:text-slate-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Call Us Anytime</h4>
                  <p className="text-slate-600 text-xl font-semibold">713-468-9606</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="bg-slate-50 p-4 rounded-xl text-gold border border-slate-100 transition-colors duration-300 group-hover:bg-gold group-hover:text-slate-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Email Inquiries</h4>
                  <p className="text-slate-600 font-semibold break-all">HoustonEmpireElectric@yahoo.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="bg-slate-50 p-4 rounded-xl text-gold border border-slate-100 transition-colors duration-300 group-hover:bg-gold group-hover:text-slate-900">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg uppercase tracking-tight">Visit Our Office</h4>
                  <p className="text-slate-600 font-semibold">2202 Bingle Rd, Houston, TX 77055</p>
                </div>
              </div>

              {/* Map Integration */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-xl border border-slate-100 group transition-all duration-500 hover:shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.747675949946!2d-95.50276552445854!3d29.81383322946029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d800e6cbdb06737%3A0x5c2cfe545a9e6330!2sHouston%20Empire%20Electric!5e0!3m2!1sen!2sus!4v1769657265647!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Houston Empire Electric Location"
                  className="filter grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 bg-slate-950 p-10 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Hidden input for Netlify bot detection in React */}
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all duration-200"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all duration-200"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="(713) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all duration-200"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Project Details</label>
                  <textarea 
                    name="message"
                    rows={5}
                    placeholder="Tell us about your electrical needs..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-all resize-none duration-200"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gold hover:bg-yellow-400 text-slate-900 font-extrabold uppercase py-5 rounded-xl transition-all duration-200 shadow-xl hover:shadow-gold/20 transform hover:-translate-y-1 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
