"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-brand-black pt-32 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.5em] text-brand-gold text-[10px] md:text-xs mb-4">Get in Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-cream">Contact Us</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <h3 className="text-brand-gold uppercase tracking-widest text-[10px] md:text-sm mb-2">Inquiries</h3>
              <p className="text-brand-cream/70 text-sm md:text-base">support@bajwamart.com</p>
            </div>
            <div>
              <h3 className="text-brand-gold uppercase tracking-widest text-[10px] md:text-sm mb-2">Office</h3>
              <p className="text-brand-cream/70 text-sm md:text-base leading-relaxed">
                123 Luxury Lane, <br />
                New York, NY 10001
              </p>
            </div>
            <div className="pt-8 border-t border-brand-gold/10">
              <p className="text-brand-cream/50 text-[11px] md:text-sm italic">
                Our team typically responds within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 md:order-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Name" 
                  className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:border-brand-gold outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:border-brand-gold outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Message" 
                  rows="4" 
                  className="w-full bg-transparent border-b border-brand-gold/30 py-3 text-brand-cream focus:border-brand-gold outline-none transition-colors text-sm"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-brand-gold text-brand-black uppercase tracking-widest text-[10px] md:text-xs font-bold hover:bg-brand-cream transition-all disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Feedback */}
              {status === 'success' && (
                <p className="text-green-500 text-[10px] uppercase tracking-widest text-center mt-4">
                  ✓ Message sent successfully to Bajwa Mart
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-[10px] uppercase tracking-widest text-center mt-4">
                  ✕ Error sending message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}