"use client";

import Link from 'next/link';

export default function ShippingPolicy() {
  const lastUpdated = "October 20, 2023";

  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-32 px-6 md:px-20 selection:bg-brand-gold/30">
      <div className="max-w-2xl mx-auto">
        
        {/* Branding Header */}
        <header className="mb-16 border-b border-brand-gold/10 pb-10">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] block mb-4">
            Logistics & Delivery
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-cream mb-4 tracking-tight leading-none">
            Shipping Policy
          </h1>
          <p className="text-brand-cream/30 text-[10px] uppercase tracking-widest font-sans">
            Revised — {lastUpdated}
          </p>
        </header>

        {/* Content Section */}
        <div className="flex flex-col space-y-12">
          
          {/* Section 01 - Order Fulfillment */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              01. Order Fulfillment
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light space-y-4">
              <p>
                Each order from Bajwa Mart is handled with meticulous care. Please allow 1-3 business days for our artisans to prepare your selection for shipment. We ensure that every package is secured to preserve the integrity of your purchase.
              </p>
              <p className="text-sm italic text-brand-cream/40 border-l border-brand-gold/20 pl-4">
                Note: Orders are not processed or dispatched during weekends or national holidays to ensure our logistics partners maintain peak service quality.
              </p>
            </div>
          </section>

          {/* Section 02 - Delivery Tiers */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              02. Delivery Tiers
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light space-y-4">
              <p>We provide multiple tiers of transit to suit your requirements:</p>
              <ul className="list-none space-y-3 pl-0">
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">/</span>
                  <div>
                    <span className="text-brand-cream font-medium">Standard Boutique Delivery:</span> 3-5 business days. Complimentary on orders exceeding $100.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-gold mt-1">/</span>
                  <div>
                    <span className="text-brand-cream font-medium">Priority Express:</span> 1-2 business days for urgent fulfillments.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 03 - Global Transit */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              03. Global Transit
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                Bajwa Mart is pleased to offer international shipping to a curated list of global destinations. Please be advised that any local customs fees, import duties, or taxes incurred during transit are the sole responsibility of the recipient.
              </p>
            </div>
          </section>

          {/* Section 04 - Parcel Tracking */}
          <section className="tight-layout flex flex-col space-y-3 brand-border">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              04. Parcel Tracking
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                Upon dispatch, you will receive a formal confirmation via email containing your unique tracking credentials. This allows you to monitor your package as it moves from our boutique to your residence.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="pt-10 flex flex-col items-start space-y-6">
             <p className="text-brand-cream/40 text-[11px] uppercase tracking-widest max-w-sm">
                If you require assistance regarding an active shipment, please consult our concierge team.
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