"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 h-20 px-6 md:px-20 border-b border-brand-gold/10 flex items-center justify-between bg-brand-black/90 backdrop-blur-md">
      
      {/* 1. MOBILE LEFT: Hamburger */}
      <div className="flex-1 md:hidden flex items-center">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-brand-gold focus:outline-none"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-brand-gold transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-brand-gold ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-brand-gold transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* 2. LOGO */}
      <div className="flex-1 flex items-center justify-center md:justify-start">
        <Link 
          href="/" 
          className="md:static absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:top-0 md:translate-y-0 md:left-0 md:translate-x-0"
        >
          <h1 className="font-serif text-xl md:text-2xl text-brand-gold tracking-tighter uppercase whitespace-nowrap transition-transform hover:scale-105">
            BAJWA <span className="text-brand-cream font-light">MART</span>
          </h1>
        </Link>
      </div>

      {/* 3. CENTER: Desktop Navigation (Updated Font Sizes) */}
      <nav className="hidden md:flex flex-[2] justify-center gap-10 lg:gap-14 text-[10px] lg:text-[12px] font-medium uppercase tracking-[0.3em] text-brand-gold/80 items-center whitespace-nowrap">
        <Link href="/" className="hover:text-brand-gold hover:tracking-[0.35em] transition-all duration-300">Home</Link>
        <Link href="/products" className="hover:text-brand-gold hover:tracking-[0.35em] transition-all duration-300">Collection</Link>
        <Link href="/about" className="hover:text-brand-gold hover:tracking-[0.35em] transition-all duration-300">Our Story</Link>
        <Link href="/contact" className="hover:text-brand-gold hover:tracking-[0.35em] transition-all duration-300">Contact</Link>
      </nav>

      {/* 4. RIGHT: Cart (Updated font size) */}
      <div className="flex-1 flex justify-end items-center">
        <Link href="/cart" className="flex items-center gap-3 group">
          <span className="hidden sm:block group-hover:text-brand-gold transition-colors text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold/80">
            Cart
          </span>
          <div className="relative flex items-center">
            {/* Visual Cart Icon for Desktop (Hidden on mobile to keep your emoji) */}
            <span className="text-lg md:hidden mr-1">🛒</span>
            <span className="bg-brand-gold text-brand-black px-2.5 py-1 rounded-full text-[10px] font-black min-w-[22px] text-center shadow-lg group-hover:bg-brand-cream transition-colors">
              {cartCount}
            </span>
          </div>
        </Link>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div 
        className={`absolute top-full left-0 w-full bg-brand-black border-b border-brand-gold/10 transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center py-12 gap-8 text-[11px] uppercase tracking-[0.4em] text-brand-gold/90">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold">Home</Link>
          <Link href="/products" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold">Collection</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold">Our Story</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-brand-gold">Contact</Link>
        </nav>
      </div>
    </header>
  );
}