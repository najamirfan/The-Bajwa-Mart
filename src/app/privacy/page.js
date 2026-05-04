"use client";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-brand-cream mb-10 border-b border-brand-gold/20 pb-6">Privacy Policy</h1>
        <div className="space-y-8 text-brand-cream/70 leading-relaxed">
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">Information Collection</h2>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact our support team.</p>
          </section>
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">How We Use Your Data</h2>
            <p>Your data is used to process transactions, improve our website, and communicate with you about promotions or updates related to Bajwa Mart.</p>
          </section>
          <section>
            <h2 className="text-brand-gold uppercase tracking-widest text-sm mb-4">Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order.</p>
          </section>
        </div>
      </div>
    </main>
  );
}