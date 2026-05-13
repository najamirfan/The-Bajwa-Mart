"use client";

import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { products } from '@/data/products';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { cartCount } = useCart();
  const featuredGrid = products.slice(0, 4);
const spotlightProduct = products.find(p => p.id === "B08BZ35L7T");

  return (
    <main className="min-h-screen bg-brand-black text-brand-cream">
      
      {/* 1. HERO SECTION */}
      {/* Reduced padding on mobile (py-12) and adjusted grid for better vertical flow */}
      <section className="relative py-12 md:py-20 px-6 md:px-20 overflow-hidden pt-32 md:pt-40">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <div className="z-10 text-center md:text-left order-2 md:order-1">
            <h2 className="text-brand-gold uppercase tracking-[0.4em] text-[10px] md:text-sm mb-3 md:mb-4 italic">
              Est. 2026
            </h2>
            <h1 className="font-serif text-3xl md:text-7xl leading-tight mb-4 md:mb-6">
              Premium Fragrances <br /> 
              <span className="italic text-brand-gold/80 font-light text-2xl md:text-6xl">
                for Everyday Luxury
              </span>
            </h1>
            <p className="text-brand-cream/60 max-w-md mx-auto md:mx-0 text-sm md:text-lg mb-8 md:mb-10 leading-relaxed">
              Discover signature scents crafted with passion, designed to leave a lasting impression on every occasion.
            </p>
            <Link href="/products">
              <button className="px-8 py-3 md:py-4 bg-brand-gold text-brand-black font-semibold tracking-widest uppercase text-[10px] md:text-xs hover:bg-brand-cream transition-all w-full md:w-auto">
                Explore Collection
              </button>
            </Link>
          </div>

          {/* Hero Image - Scaled down for mobile */}
          <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center order-1 md:order-2">
            <div className="absolute w-48 h-48 md:w-72 md:h-72 bg-brand-gold/10 rounded-full blur-[80px] md:blur-[120px]"></div>
            <div className="relative h-full w-full">
              <Image 
                src="/hero-bottle.jpg"
                alt="Signature Fragrance"
                fill 
                className="object-contain z-10 drop-shadow-2xl p-4 md:p-0"
                priority 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT GRID Section */}
      {/* Changed to grid-cols-2 on mobile for a tighter, cleaner look */}
      <section className="py-16 md:py-24 px-4 md:px-20 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-16 text-center">
            <p className="uppercase tracking-[0.5em] text-[9px] md:text-[10px] text-brand-gold mb-2">The Collection</p>
            <h2 className="font-serif text-2xl md:text-4xl">Our Signature Scents</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {featuredGrid.map((product) => (
              <ProductCard 
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. SPOTLIGHT Section */}
      {/* Adjusted spacing and image height for phone screens */}
      <section className="py-16 md:py-24 bg-brand-gold/5 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative h-[300px] md:h-[400px] w-full border border-brand-gold/20 rounded-sm overflow-hidden">
            <Image 
              src={spotlightProduct?.image || "/products/oud-royale.jpg"} 
              alt="Oud Royale"
              fill
              className="object-cover opacity-90"
            />
          </div>

          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <p className="text-brand-gold uppercase tracking-[0.4em] text-[10px] md:text-xs">The Masterpiece</p>
            <h2 className="font-serif text-2xl md:text-5xl leading-tight">
              {spotlightProduct?.name}: <br className="hidden md:block" /> A Timeless Legacy
            </h2>
            <p className="text-brand-cream/60 leading-relaxed text-sm md:text-lg">
              {spotlightProduct?.description}
            </p>
            <p className="text-brand-gold font-serif text-xl md:text-2xl">${spotlightProduct?.price}.00</p>
            <Link href={`/products/${spotlightProduct?.id}`} className="block">
              <button className="w-full md:w-auto px-10 py-4 border border-brand-gold text-brand-gold uppercase tracking-widest text-[10px] hover:bg-brand-gold hover:text-brand-black transition-all">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}