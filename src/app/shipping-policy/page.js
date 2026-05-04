"use client";

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-brand-cream mb-10 border-b border-brand-gold/20 pb-6">Shipping Policy</h1>
        <div className="space-y-8 text-brand-cream/70 leading-relaxed">
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">Processing Times</h2>
            <p>All orders are processed within 1-3 business days. Orders are not shipped or delivered on weekends or holidays.</p>
          </section>
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">Shipping Rates & Estimates</h2>
            <p>Standard Shipping (3-5 business days): $5.99 or Free on orders over $100. Express Shipping (1-2 business days): $15.00.</p>
          </section>
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">International Shipping</h2>
            <p>We currently offer international shipping to select countries. Please note that customs fees and import duties are the responsibility of the customer.</p>
          </section>
        </div>
      </div>
    </main>
  );
}