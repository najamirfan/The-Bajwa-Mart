"use client";

import { products } from '@/data/products'; 
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-brand-black pt-24 md:pt-32 pb-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 md:mb-16 border-b border-brand-gold/10 pb-8 md:pb-10 text-center md:text-left">
          <p className="text-brand-gold uppercase tracking-[0.5em] text-[9px] md:text-xs mb-3 md:mb-4">
            Explore All
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-brand-cream uppercase tracking-tight">
            The Collection
          </h1>
        </header>

        {/* 
            MOBILE OPTIMIZATION: 
            - grid-cols-2: Two items per row on mobile
            - gap-x-4: Narrower gaps for smaller screens
            - md:gap-x-8: Restores wider spacing for desktop
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id} 
              name={product.name} 
              price={product.price} 
              category={product.category} 
              image={product.image} 
            />
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-gold/40 uppercase tracking-widest text-xs md:text-sm">
              New arrivals coming soon.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}