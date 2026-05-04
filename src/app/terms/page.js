"use client";

export default function Terms() {
  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-brand-cream mb-10 border-b border-brand-gold/20 pb-6">Terms of Service</h1>
        <div className="space-y-8 text-brand-cream/70 leading-relaxed">
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">General Conditions</h2>
            <p>By using Bajwa Mart, you agree to be bound by these terms. We reserve the right to refuse service to anyone for any reason at any time.</p>
          </section>
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">Product Accuracy</h2>
            <p>We attempt to be as accurate as possible with product descriptions and colors, but we cannot guarantee that your monitor's display will be 100% accurate.</p>
          </section>
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">Governing Law</h2>
            <p>These terms are governed by the laws of the jurisdiction in which Bajwa Mart operates.</p>
          </section>
        </div>
      </div>
    </main>
  );
}