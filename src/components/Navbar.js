"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-brand-gold/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="font-serif text-2xl text-brand-gold tracking-tighter cursor-pointer">
            BAJWA <span className="text-brand-cream font-light">MART</span>
          </h1>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] text-brand-cream/70">
          <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
          <Link href="/products" className="hover:text-brand-gold transition-colors">Collection</Link>
          <Link href="/about" className="hover:text-brand-gold transition-colors">Our Story</Link>
          <Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
        </div>

        {/* Cart placeholder */}
        <div className="text-brand-gold text-xs tracking-widest uppercase">
          Cart (0)
        </div>
      </div>
    </nav>
  );
}