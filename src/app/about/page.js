"use client";

import Image from 'next/image';
import Link from 'next/link'; // <--- THIS WAS LIKELY MISSING ok

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 z-10">
            <header className="space-y-4">
              <p className="text-brand-gold uppercase tracking-[0.6em] text-[10px] font-bold">
                Our Heritage
              </p>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-brand-cream">
                Crafting the Essence <br /> 
                <span className="italic font-light text-brand-gold/90">of Elegance</span>
              </h1>
            </header>
            
            <div className="space-y-6 text-brand-cream/70 text-lg leading-relaxed font-light max-w-lg">
              <p>
                Founded in 2026, <span className="text-brand-gold italic">Bajwa Mart</span> was born out of a single, 
                unwavering philosophy: luxury should not be a rarity reserved for the few, but a daily ritual for the discerning.
              </p>
              <p>
                We believe that a fragrance is more than just a scent—it is a silent introduction, a sophisticated armor, and a lasting memory that lingers long after you leave the room.
              </p>
            </div>
          </div>

          {/* Heritage Image */}
          <div className="relative w-full border border-brand-gold/20 p-4 block">
            <div className="relative w-full overflow-hidden">
              <img 
                src="/images/heritage.jpg" 
                alt="Artisanal Fragrance Crafting"
                className="w-full h-[500px] md:h-[600px] object-cover opacity-80 transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-brand-gold/40 pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* --- CORE VALUES SECTION --- */}
      <section className="py-24 bg-brand-gold/[0.03] border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { title: "Purity", desc: "100% Authentic Essences" },
              { title: "Artistry", desc: "Hand-Selected Blends" },
              { title: "Elegance", desc: "Premium Presentation" }
            ].map((pillar, idx) => (
              <div key={idx} className="text-center space-y-6 group">
                <div className="w-px h-20 bg-brand-gold/30 mx-auto group-hover:h-28 transition-all duration-700"></div>
                <h3 className="font-serif text-2xl text-brand-gold uppercase tracking-widest">{pillar.title}</h3>
                <p className="text-brand-cream text-xs uppercase tracking-[0.3em] font-bold">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL STATEMENT --- */}
      <section className="py-32 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <p className="text-brand-cream/60 text-xl leading-relaxed italic font-light">
            "Our mission is to empower individuals to express their unique identity through the art of perfumery. We invite you to explore our collection and find the scent that speaks your language."
          </p>
          <div className="pt-8">
            <Link href="/products">
              <button className="px-12 py-5 border border-brand-gold text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-brand-gold hover:text-brand-black transition-all duration-500">
                Explore the Collection
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}