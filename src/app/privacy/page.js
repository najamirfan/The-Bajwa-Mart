import Link from 'next/link';

export default function PrivacyPolicy() {
  const lastUpdated = "October 20, 2023";

  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-32 px-6 md:px-20">
      <div className="max-w-2xl mx-auto">
        
        {/* Branding Header */}
        <header className="mb-16 border-b border-brand-gold/10 pb-10">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] block mb-4">
            Legal & Confidentiality
          </span>
          <h1 className="text-brand-cream mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-cream/30 text-[10px] uppercase tracking-widest font-sans">
            Last Updated — {lastUpdated}
          </p>
        </header>

        <div className="flex flex-col space-y-12">
          
          {/* Section 01 - Information Curation */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              01. Information Curation
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light space-y-4">
              <p>
                At Bajwa Mart, we respect the privacy of our distinguished clientele. In the pursuit of providing a bespoke shopping journey, we collect information you provide directly—including your identity, billing details, and olfactory preferences.
              </p>
              <p className="text-sm italic text-brand-cream/40 border-l border-brand-gold/20 pl-4">
                We do not store raw credit card data; all financial transactions are handled via encrypted, Tier-1 luxury payment gateways.
              </p>
            </div>
          </section>

          {/* Section 02 - The Bespoke Experience */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              02. The Bespoke Experience
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                Your data is curated strictly to enhance your engagement with our brand. This includes the fulfillment of luxury fragrance orders, the refinement of our digital boutique interface, and the delivery of exclusive invitations to private collection launches.
              </p>
            </div>
          </section>

          {/* Section 03 - Digital Integrity */}
          <section className="tight-layout flex flex-col space-y-3">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              03. Digital Integrity
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                We employ sophisticated administrative and technical safeguards to protect your personal history. Our servers utilize industry-standard SSL encryption and private tunneling to ensure your transactions remain strictly confidential.
              </p>
            </div>
          </section>

          {/* Section 04 - Client Rights (New Branding Content) */}
          <section className="tight-layout flex flex-col space-y-3 brand-border">
            <h2 className="text-brand-gold uppercase tracking-[0.3em] text-xs font-bold">
              04. Client Rights
            </h2>
            <div className="text-brand-cream/70 text-base leading-relaxed font-light">
              <p>
                As a member of the Bajwa Mart community, you retain full sovereignty over your data. You may request access to, correction of, or the permanent removal of your profile from our archives at any time through our concierge.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="pt-10 flex flex-col items-start space-y-6">
             <p className="text-brand-cream/40 text-[11px] uppercase tracking-widest max-w-sm">
                For further inquiries regarding our data protocols, please reach out to our digital concierge.
             </p>
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}