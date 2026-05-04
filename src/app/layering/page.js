"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function LayeringGuide() {
  const combinations = [
    {
      title: "The Midnight Oud",
      base: "Oud Royale",
      top: "Citrus Bergamot",
      vibe: "Deep, mysterious, and sophisticated for evening gala events."
    },
    {
      title: "Fresh Professional",
      base: "Sandalwood Reserve",
      top: "Oceanic Mist",
      vibe: "Clean and authoritative, perfect for the modern boardroom."
    }
  ];

  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-brand-gold uppercase tracking-[0.5em] text-[10px] mb-4 italic">Master the Art</h2>
        <h1 className="font-serif text-4xl md:text-6xl text-brand-cream mb-6">Fragrance Layering</h1>
        <p className="text-brand-cream/60 text-lg leading-relaxed italic">
          "A gentleman never smells like anyone else. Create your unique signature by mastering the art of layering."
        </p>
      </div>

      {/* Layering Logic Section */}
      <section className="grid md:grid-cols-3 gap-10 mb-32 border-y border-brand-gold/10 py-16">
        <div className="text-center space-y-4">
          <div className="text-brand-gold text-2xl font-serif">01</div>
          <h3 className="text-brand-cream uppercase tracking-widest text-xs font-bold">Start Heavy</h3>
          <p className="text-brand-cream/50 text-sm">Spray the heavier, woodier scent first (like Oud or Sandalwood) as your foundation.</p>
        </div>
        <div className="text-center space-y-4">
          <div className="text-brand-gold text-2xl font-serif">02</div>
          <h3 className="text-brand-cream uppercase tracking-widest text-xs font-bold">Add Lightness</h3>
          <p className="text-brand-cream/50 text-sm">Mist the lighter, citrus or floral scent on top to provide the initial impression.</p>
        </div>
        <div className="text-center space-y-4">
          <div className="text-brand-gold text-2xl font-serif">03</div>
          <h3 className="text-brand-cream uppercase tracking-widest text-xs font-bold">Don't Rub</h3>
          <p className="text-brand-cream/50 text-sm">Let the scents settle naturally on your pulse points to preserve the molecular structure.</p>
        </div>
      </section>

      {/* Recommended Duos */}
      <div className="space-y-20">
        <h2 className="text-center font-serif text-3xl text-brand-cream">Curated Combinations</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {combinations.map((duo, index) => (
            <div key={index} className="bg-brand-gold/5 p-10 border border-brand-gold/10 rounded-sm">
              <h3 className="text-brand-gold font-serif text-2xl mb-4">{duo.title}</h3>
              <div className="flex items-center gap-4 mb-6 text-brand-cream uppercase tracking-widest text-[10px]">
                <span>{duo.base}</span>
                <span className="text-brand-gold">+</span>
                <span>{duo.top}</span>
              </div>
              <p className="text-brand-cream/70 text-sm italic mb-8">{duo.vibe}</p>
              <Link href="/products" className="text-brand-gold border-b border-brand-gold/30 pb-1 uppercase tracking-widest text-[10px] hover:text-brand-cream transition-colors">
                Shop the Duo
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}