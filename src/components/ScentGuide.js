"use client";

export default function ScentGuide() {
  const tips = [
    {
      title: "Pulse Points",
      desc: "Apply to areas where blood vessels are closest to the skin—wrists, neck, and behind the ears. The heat helps radiate the scent."
    },
    {
      title: "The Hydration Secret",
      desc: "Fragrance lasts longer on moisturized skin. Apply an unscented lotion before spraying to 'lock in' the molecules."
    },
    {
      title: "Never Rub",
      desc: "Rubbing your wrists together crushes the delicate top notes. Let the fragrance air-dry naturally on your skin."
    },
    {
      title: "Optimal Storage",
      desc: "Keep your bottles in a cool, dark place away from sunlight and humidity (avoid the bathroom) to preserve the oil's integrity."
    }
  ];

  return (
    <section className="py-20 bg-brand-gold/[0.02] border-y border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold">Expertise</p>
          <h2 className="font-serif text-4xl text-brand-cream">The Art of Application</h2>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {tips.map((tip, index) => (
            <div key={index} className="space-y-4 group">
              <span className="font-serif text-brand-gold/30 text-4xl group-hover:text-brand-gold transition-colors duration-500">
                0{index + 1}
              </span>
              <h3 className="text-brand-cream uppercase tracking-widest text-sm font-bold">{tip.title}</h3>
              <p className="text-brand-cream/60 text-sm leading-relaxed font-light">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}