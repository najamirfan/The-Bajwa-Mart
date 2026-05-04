"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="font-serif text-3xl">Your cart is empty</h2>
        <Link href="/products" className="text-brand-gold hover:underline uppercase tracking-widest text-xs">
          Return to Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="font-serif text-4xl mb-12 text-center">Your Selection</h1>
      
      <div className="space-y-8 mb-12">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-6 border-b border-brand-gold/10 pb-8">
            <div className="relative h-24 w-20 bg-brand-gold/5">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-serif text-lg">{item.name}</h3>
              <p className="text-brand-gold/60 text-xs uppercase tracking-widest">{item.category}</p>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-brand-gold px-2">-</button>
              <span className="font-mono">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-brand-gold px-2">+</button>
            </div>

            <div className="text-right min-w-[80px]">
              <p className="text-brand-cream">${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-[10px] text-red-500/60 uppercase hover:text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-brand-gold/20 pt-8 flex flex-col items-end">
        <div className="flex justify-between w-full max-w-xs mb-8">
          <span className="uppercase tracking-[0.2em] text-sm text-brand-gold/60">Subtotal</span>
          <span className="text-2xl font-serif">${cartTotal}</span>
        </div>
        <Link href="/checkout" className="w-full md:w-auto px-12 py-4 bg-brand-gold text-brand-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-cream transition-all text-center">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}