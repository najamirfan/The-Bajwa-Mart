"use client";

import Link from 'next/link';

export default function ReturnPolicy() {
  const lastUpdated = "October 20, 2023";

  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-32 px-6 md:px-20 selection:bg-brand-gold/30">
      <div className="max-w-2xl mx-auto">
        
        {/* Branding Header */}
        <header className="mb-16 border-b border-brand-gold/10 pb-10">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] block mb-4">
            Returns & Exchanges
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-cream mb-4 tracking-tight leading-none">
            Return Policy
          </h1>
          <p className="text-brand-cream/30 text-[10px] uppercase tracking-widest font-sans">
            Revised — {lastUpdated}
          </p>
        </header>

        {/* Content Section */}
        <div className="flex flex-col space-y-12">
          
          {/* Section 01 - The 14-Day Window */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              01. The Return Window
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light space-y-4">
              <p>
                We strive for your absolute satisfaction with every Bajwa Mart selection. If a product does not meet your expectations, we offer a 14-day return window from the date of delivery for most items in our collection.
              </p>
            </div>
          </section>

          {/* Section 02 - Eligibility & Condition */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              02. Condition of Return
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light space-y-4">
              <p>
                To maintain our high standards of hygiene and quality, returned items must be in their original, pristine condition. This includes:
              </p>
              <ul className="list-none space-y-3 pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">/</span>
                  <span>Unopened original packaging with all security seals intact.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">/</span>
                  <span>No visible signs of use, wear, or damage to the product bottle or box.</span>
                </li>
              </ul>
              <p className="text-sm italic text-brand-cream/40 border-l border-brand-gold/20 pl-4">
                Note: Fragrance samples and "Limited Reserve" collections are final sale and cannot be returned due to the nature of the product.
              </p>
            </div>
          </section>

          {/* Section 03 - The Refund Process */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              03. The Refund Process
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                Once your return is received and inspected by our quality assurance team, we will notify you of the approval or rejection of your refund. Approved refunds are processed back to the original method of payment within 7-10 business days.
              </p>
            </div>
          </section>

          {/* Section 04 - Exchanges */}
          <section className="tight-layout flex flex-col space-y-3 brand-border">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              04. Exchanges
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                If you wish to exchange an item for a different fragrance profile, we recommend returning the original item for a refund and placing a new order to ensure immediate fulfillment of your preferred selection.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="pt-10 flex flex-col items-start space-y-6">
             <p className="text-brand-cream/40 text-[11px] uppercase tracking-widest max-w-sm">
                To initiate a formal return request, please contact our digital concierge with your order credentials.
             </p>
            <Link href="/contact" className="btn-gold">
              Contact Concierge
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}