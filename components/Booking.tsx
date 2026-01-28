import React from 'react';

const Booking: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Book a Consultation</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Schedule Your Service</h3>
          <p className="text-slate-600">
            Choose a convenient time slot below to discuss your project with one of our master electricians. 
            We offer professional consultations for high-end residential and commercial projects.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white p-2">
          {/* Google Calendar Appointment Scheduling begin */}
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0ErqUL4FLs9pih-h-Ob_vwdA91-juEsdleVR2dHS-R0xNVR1J7WMDxc3c5TBoPX0_2ZFccR-wD?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="700" 
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
          ></iframe>
          {/* end Google Calendar Appointment Scheduling */}
        </div>
      </div>
    </section>
  );
};

export default Booking;
