"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function ProductCard({ id, name, price, category, image }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart({ id, name, price, image, category });
    
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="group block">
      <Link href={`/products/${id}`} className="cursor-pointer">
        {/* MOBILE OPTIMIZATION: Reduced height to h-60 (240px) on mobile, h-80 (320px) on desktop */}
        <div className="relative h-60 md:h-80 w-full mb-4 md:mb-6 overflow-hidden bg-brand-gold/5 border border-brand-gold/10">
          <Image
            src={image} 
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Action Overlay: Hidden on touch devices by default, visible on hover for desktop */}
          <div className="absolute inset-0 bg-brand-black/40 hidden md:flex flex-col items-center justify-center gap-3 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full py-3 bg-brand-cream text-brand-black text-center text-[10px] uppercase tracking-[0.2em] font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View Details
            </div>
            
            <button 
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-3 text-center text-[10px] uppercase tracking-[0.2em] font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75 
                ${isAdded 
                  ? 'bg-green-600 text-white translate-y-0' 
                  : 'bg-brand-gold text-brand-black hover:bg-brand-cream' 
                }`}
            >
              {isAdded ? '✓ Added' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </Link>
      
      {/* MOBILE OPTIMIZATION: Scaled down text for 2-column grid */}
      <div className="text-center px-2">
        <p className="text-brand-gold/60 text-[8px] md:text-[10px] uppercase tracking-[0.3em] mb-1 md:mb-2">
          {category}
        </p>
        <h3 className="font-serif text-brand-cream text-sm md:text-lg mb-1 md:mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-brand-gold font-light tracking-widest text-xs md:text-base">
          ${price}.00
        </p>
        
        {/* Mobile-only "Add to Cart" link (since hover overlay is desktop-only) */}
        <button 
          onClick={handleAddToCart}
          className="mt-3 md:hidden text-brand-gold uppercase tracking-[0.2em] text-[9px] font-bold border-b border-brand-gold/30 pb-1"
        >
          {isAdded ? '✓ Added' : 'Quick Add'}
        </button>
      </div>
    </div>
  );
}