"use client";

import Link from 'next/link';

export default function Terms() {
  const effectiveDate = "October 20, 2023";

  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-32 px-6 md:px-20 selection:bg-brand-gold/30">
      <div className="max-w-2xl mx-auto">
        
        {/* Branding Header */}
        <header className="mb-16 border-b border-brand-gold/10 pb-10">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] block mb-4">
            Legal Framework
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-brand-cream mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-brand-cream/30 text-[10px] uppercase tracking-widest font-sans">
            Effective Date — {effectiveDate}
          </p>
        </header>

        {/* Content Section */}
        <div className="flex flex-col space-y-12">
          
          {/* Section 01 - General Protocol */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              01. General Protocol
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                By accessing the digital boutique of Bajwa Mart, you agree to be bound by these refined terms of service. We maintain the sovereign right to refuse service, curate our clientele, or modify these conditions at our discretion to maintain the integrity of our brand.
              </p>
            </div>
          </section>

          {/* Section 02 - Artistic Accuracy */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              02. Artistic Accuracy
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                While we strive for absolute precision in our product depictions—including olfactory notes and visual aesthetics—the digital representation may vary based on your hardware. We do not warrant that the quality of any products, services, or information purchased will meet every subjective expectation.
              </p>
            </div>
          </section>

          {/* Section 03 - Intellectual Property */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              03. Intellectual Property
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                All content, including imagery, logos, and fragrance descriptions, remains the exclusive property of Bajwa Mart. Any reproduction or unauthorized use of our brand assets is strictly prohibited under international copyright laws.
              </p>
            </div>
          </section>

          {/* Section 04 - Commerce & Transactions */}
          <section className="tight-layout flex flex-col space-y-3 brand-border">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              04. Commerce & Transactions
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light space-y-4">
              <p>
                Prices for our collections are subject to change without notice. We reserve the right to limit the sales of our products to any person, geographic region, or jurisdiction on a case-by-case basis.
              </p>
              <p className="text-sm italic text-brand-cream/40 border-l border-brand-gold/20 pl-4">
                Note: Orders are processed in the order they are received. Limited edition releases may have specific purchase caps per client.
              </p>
            </div>
          </section>

          {/* Section 05 - Governing Law */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              05. Governing Law
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of the jurisdiction in which Bajwa Mart operates.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="pt-10 flex flex-col items-start space-y-6">
             <p className="text-brand-cream/40 text-[11px] uppercase tracking-widest max-w-sm">
                For clarification on our service protocols, please reach out to our concierge.
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