"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  // We no longer need to slice products here since we are linking to Collections
  
  return (
    <footer className="bg-brand-black border-t border-brand-gold/10 pt-8 md:pt-12 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logoBMUSNB.png" 
                alt="Bajwa Mart Logo" 
                width={150} 
                height={50} 
                className="h-auto w-auto object-contain"
                priority
                unoptimized={true}
              />
            </Link>
            <p className="text-brand-cream/50 text-[13px] md:text-sm leading-relaxed max-w-xs font-light">
              Redefining everyday luxury through the art of fine perfumery. Crafted for those who leave a lasting impression.
            </p>
          </div>

          {/* Updated Collection Column */}
          <div>
            <h3 className="text-brand-gold uppercase tracking-widest text-[10px] md:text-xs mb-6 font-bold">
              The Collection
            </h3>
            <ul className="space-y-4 text-brand-cream/70 text-[11px] md:text-sm uppercase tracking-widest font-light">
              <li>
                <Link href="/products" className="hover:text-brand-gold transition-colors">Shop All</Link>
              </li>
              <li>
                <Link href="/collections/heritage" className="hover:text-brand-gold transition-colors">Heritage Collection</Link>
              </li>
              <li>
                <Link href="/collections/luminous" className="hover:text-brand-gold transition-colors">Luminous Series</Link>
              </li>
              <li>
                <Link href="/collections/noir" className="hover:text-brand-gold transition-colors">Noir Edition</Link>
              </li>
              <li>
                <Link href="/collections/discovery" className="hover:text-brand-gold transition-colors text-brand-gold/40">The Discovery Set</Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal Expertise */}
          <div>
            <h3 className="text-brand-gold uppercase tracking-widest text-[10px] md:text-xs mb-6 font-bold">
              Expertise
            </h3>
            <ul className="space-y-4 text-brand-cream/70 text-[11px] md:text-sm uppercase tracking-widest font-light">
              <li><Link href="/layering" className="hover:text-brand-gold transition-colors">Scent Layering</Link></li>
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-brand-gold transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-brand-gold transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-brand-gold uppercase tracking-widest text-[10px] md:text-xs mb-6 font-bold">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-8 h-8 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
                <span className="text-[10px]">IG</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all">
                <span className="text-[10px]">FB</span>
              </a>
            </div>
            <p className="text-brand-cream/40 text-[9px] md:text-[10px] uppercase tracking-widest leading-relaxed">
              Subscribe to receive updates on <br className="hidden md:block" /> new collections and exclusive offers.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-gold/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-brand-cream/30 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
            © 2026 BAJWA MART. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-brand-cream/30 text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}