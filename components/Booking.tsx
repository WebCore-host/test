import React from 'react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Book a Consultation</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Schedule Your Service</h3>
          <p className="text-slate-600">Select a time that works best for you to discuss your electrical project with our expert team.</p>
        </div>
        <div 
          className="calendly-inline-widget rounded-2xl overflow-hidden shadow-inner border border-slate-100" 
          data-url="https://calendly.com/webcore112/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=facbcb" 
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    </section>
  );
};

export default Booking;
