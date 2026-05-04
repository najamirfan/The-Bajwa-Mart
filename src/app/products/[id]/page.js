"use client";

import { products } from '@/data/products';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import ScentGuide from '@/components/ScentGuide';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-brand-black flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl text-brand-cream mb-4">Fragrance Not Found</h1>
        <p className="text-brand-gold/60 mb-8 uppercase tracking-widest text-xs">The requested scent is currently unavailable.</p>
        <Link href="/products" className="px-8 py-3 border border-brand-gold text-brand-gold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-gold hover:text-brand-black transition-all">
          Return to Collection
        </Link>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen bg-brand-black pt-24 md:pt-32 pb-20">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-8 lg:gap-20 items-start mb-20 md:mb-32">
        
        {/* Left Side: Product Image (Optimized for Mobile) */}
        <div className="relative h-[350px] md:h-[750px] w-full bg-brand-gold/5 border border-brand-gold/10 overflow-hidden rounded-sm">
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-contain p-6 md:p-0 md:object-cover hover:scale-105 transition-transform duration-1000" 
            priority 
          />
        </div>

        {/* Right Side: Product Content */}
        <div className="flex flex-col space-y-6 md:space-y-10 py-2 md:py-4">
          <header className="space-y-3 md:space-y-4">
            <nav className="flex items-center space-x-2 text-[9px] md:text-[10px] uppercase tracking-widest text-brand-gold/40 mb-4 md:mb-6">
              <Link href="/" className="hover:text-brand-gold">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-brand-gold">Collection</Link>
              <span>/</span>
              <span className="text-brand-gold">{product.name}</span>
            </nav>
            
            <p className="text-brand-gold uppercase tracking-[0.4em] text-[9px] md:text-[10px] font-bold">
              {product.category}
            </p>
            <h1 className="font-serif text-4xl md:text-7xl text-brand-cream leading-[1.1]">
              {product.name}
            </h1>
            <p className="text-brand-gold text-2xl md:text-3xl font-light tracking-wider">
              ${product.price}.00
            </p>
          </header>
          
          <div className="space-y-6 md:space-y-8 border-t border-brand-gold/10 pt-8 md:pt-10">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-brand-cream uppercase tracking-widest text-[10px] md:text-xs font-bold">The Experience</h3>
              <p className="text-brand-cream/70 leading-relaxed text-base md:text-lg italic font-light">
                "{product.description}"
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-brand-cream uppercase tracking-widest text-[10px] md:text-xs font-bold">Fragrance Notes</h3>
              <p className="text-brand-gold/80 text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
                {product.notes}
              </p>
            </div>
          </div>

          {/* Checkout Action */}
          <div className="pt-4 md:pt-6 w-full">
            <button 
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-5 md:py-6 uppercase tracking-[0.3em] text-[10px] md:text-[11px] font-bold transition-all duration-500 rounded-sm
                ${isAdded 
                  ? 'bg-green-700 text-white cursor-default' 
                  : 'bg-brand-gold text-brand-black hover:bg-brand-cream hover:shadow-[0_10px_40px_rgba(196,164,132,0.3)]'
                }`}
            >
              {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
            
            <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4 border-t border-brand-gold/10 pt-6 md:pt-8">
              <div className="text-left">
                <p className="text-brand-cream/40 text-[8px] md:text-[9px] uppercase tracking-widest mb-1">Shipping</p>
                <p className="text-brand-cream/80 text-[9px] md:text-[10px]">Worldwide Available</p>
              </div>
              <div className="text-left border-l border-brand-gold/10 pl-4">
                <p className="text-brand-cream/40 text-[8px] md:text-[9px] uppercase tracking-widest mb-1">Authenticity</p>
                <p className="text-brand-cream/80 text-[9px] md:text-[10px]">100% Original Scent</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScentGuide />
    </main>
  );
}