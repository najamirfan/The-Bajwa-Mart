import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default async function CollectionPage({ params }) {
  // Await params for Next.js 15+ compatibility
  const { slug } = await params;
  
  // FILTER: We only take products that match the slug AND have an image
  const filteredProducts = products.filter(p => 
    p.collection === slug && p.image && p.image !== ""
  );

  const titles = {
    heritage: "The Heritage Collection",
    luminous: "The Luminous Series",
    noir: "The Noir Edition",
  };

  const displayTitle = titles[slug] || `${slug.charAt(0).toUpperCase() + slug.slice(1)} Collection`;

  if (filteredProducts.length === 0) {
    return (
      <main className="min-h-screen bg-brand-black flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-3xl text-brand-cream mb-6 opacity-50 italic">Coming Soon</h1>
        <Link href="/products" className="btn-gold">Explore All Fragrances</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-black pt-32 pb-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-16 border-b border-brand-gold/10 pb-12 text-center">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] block mb-4">
            Curated Discovery
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-brand-cream mb-4 tracking-tight">
            {displayTitle}
          </h1>
          <p className="text-brand-cream/40 text-[11px] uppercase tracking-widest max-w-md mx-auto leading-relaxed">
            A selection of scents defined by their {slug === 'heritage' ? 'rich history and rare resins' : slug === 'noir' ? 'mysterious and sensual evening profiles' : 'crisp, clean, and radiant accords'}.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-in fade-in duration-700">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}