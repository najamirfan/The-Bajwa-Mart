"use client";

import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  
  const [paymentMethod, setPaymentMethod] = useState('whatsapp'); 
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    cardNumber: '',
    expDate: '',
    cvc: ''
  });

  const sendOrderEmail = async (orderId) => {
    try {
      await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerEmail: formData.email,
          customerName: formData.name,
          customerPhone: formData.phone,
          customerAddress: formData.address,
          customerNotes: formData.notes,
          orderId: orderId,
          items: cartItems,
          total: cartTotal,
          paymentMethod: paymentMethod
        }),
      });
    } catch (error) {
      console.error("Email notification failed:", error);
    }
  };

  const completeOrderFlow = (title, text) => {
    Swal.fire({
      title: title,
      text: text,
      icon: 'success',
      iconColor: '#c5a059',
      background: '#1a1a1a', 
      color: '#ffffff',      
      confirmButtonColor: '#c5a059', 
      confirmButtonText: 'BACK TO STORE',
      customClass: {
        popup: 'border border-brand-gold/20'
      }
    }).then(() => {
      clearCart();
      router.push('/'); 
    });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    
    // Safety check: Don't allow submission if card is selected during update
    if (paymentMethod === 'card') return;

    setIsProcessing(true);
    const generatedOrderId = `BM-${Math.floor(100000 + Math.random() * 900000)}`;

    if (paymentMethod === 'whatsapp') {
      await sendOrderEmail(`${generatedOrderId}-WA`);
      const itemsMessage = cartItems
        .map((item) => `• ${item.name} (x${item.quantity}) - $${item.price * item.quantity}`)
        .join('%0A');

      const message = `*New Order - Bajwa Mart*%0A%0A` +
        `*Order ID:* ${generatedOrderId}%0A` +
        `*Customer Details:*%0A` +
        `Name: ${formData.name}%0A` +
        `Phone: ${formData.phone}%0A` +
        `Address: ${formData.address}%0A%0A` +
        `*Order Summary:*%0A${itemsMessage}%0A%0A` +
        `*Total: $${cartTotal}*`;

      const myNumber = "96556574039"; 
      window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
      
      setIsProcessing(false);
      completeOrderFlow('ORDER SENT!', 'Your request has been sent to WhatsApp. Our team will contact you shortly.');
    } 
    else if (paymentMethod === 'cod') {
      await sendOrderEmail(`${generatedOrderId}-COD`);
      setIsProcessing(false);
      completeOrderFlow('ORDER PLACED!', `Your order #${generatedOrderId} is being prepared. Please keep $${cartTotal} ready for delivery.`);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="font-serif text-3xl mb-8 text-brand-cream uppercase tracking-tight">Shipping Details</h2>
        <form onSubmit={handleOrder} className="space-y-6">
          <input 
            type="text" name="name" placeholder="Full Name" required
            className="w-full bg-transparent border-b border-brand-gold/20 py-3 text-brand-cream focus:border-brand-gold outline-none transition-colors text-sm"
            onChange={handleChange}
          />
          <div className="grid grid-cols-2 gap-4">
            <input type="email" name="email" placeholder="Email" required className="w-full bg-transparent border-b border-brand-gold/20 py-3 text-brand-cream outline-none text-sm focus:border-brand-gold transition-colors" onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone" required className="w-full bg-transparent border-b border-brand-gold/20 py-3 text-brand-cream outline-none text-sm focus:border-brand-gold transition-colors" onChange={handleChange} />
          </div>
          <input type="text" name="address" placeholder="Shipping Address" required className="w-full bg-transparent border-b border-brand-gold/20 py-3 text-brand-cream outline-none text-sm focus:border-brand-gold transition-colors" onChange={handleChange} />
          
          <textarea 
            name="notes" placeholder="Order Notes (Optional)" 
            className="w-full bg-transparent border-b border-brand-gold/20 py-3 text-brand-cream outline-none text-sm focus:border-brand-gold transition-colors h-20 resize-none" 
            onChange={handleChange} 
          />

          <div className="pt-6 space-y-4">
            <p className="text-brand-gold uppercase tracking-widest text-[10px] mb-2 font-bold">Select Payment Method</p>
            <div className="grid grid-cols-3 gap-2">
              <button type="button" onClick={() => setPaymentMethod('whatsapp')} className={`py-4 border text-[9px] uppercase tracking-widest transition-all ${paymentMethod === 'whatsapp' ? 'border-brand-gold bg-brand-gold text-brand-black font-bold' : 'border-brand-gold/20 text-brand-gold hover:border-brand-gold'}`}>
                WhatsApp
              </button>
              <button type="button" onClick={() => setPaymentMethod('card')} className={`py-4 border text-[9px] uppercase tracking-widest transition-all ${paymentMethod === 'card' ? 'border-brand-gold bg-brand-gold text-brand-black font-bold' : 'border-brand-gold/20 text-brand-gold hover:border-brand-gold'}`}>
                Card
              </button>
              <button type="button" onClick={() => setPaymentMethod('cod')} className={`py-4 border text-[9px] uppercase tracking-widest transition-all ${paymentMethod === 'cod' ? 'border-brand-gold bg-brand-gold text-brand-black font-bold' : 'border-brand-gold/20 text-brand-gold hover:border-brand-gold'}`}>
                Cash (COD)
              </button>
            </div>
          </div>

          {/* UPDATED: Conditional Card Section with Maintenance Message */}
          {paymentMethod === 'card' && (
            <div className="p-6 bg-white/5 border border-brand-gold/40 rounded-sm space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
                <p className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">System Update in Progress</p>
              </div>
              
              <div className="opacity-30 pointer-events-none space-y-4">
                <input type="text" placeholder="Card Number" className="w-full bg-transparent border-b border-brand-gold/20 py-2 text-brand-cream outline-none text-sm" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="MM / YY" className="w-full bg-transparent border-b border-brand-gold/20 py-2 text-brand-cream outline-none text-sm" />
                  <input type="text" placeholder="CVC" className="w-full bg-transparent border-b border-brand-gold/20 py-2 text-brand-cream outline-none text-sm" />
                </div>
              </div>

              <p className="text-[11px] text-brand-cream/70 leading-relaxed italic border-t border-brand-gold/10 pt-4">
                "We are currently updating our secure card payment system. 
                <span className="text-brand-gold block mt-1 font-semibold text-[12px]">Kindly choose WhatsApp or Cash (COD) for now.</span> 
                Card payments will be re-activated soon."
              </p>
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={isProcessing || cartItems.length === 0 || paymentMethod === 'card'}
            className="w-full py-5 bg-brand-gold text-brand-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-brand-cream transition-all mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {paymentMethod === 'card' ? 'System Activated Shortly...' : 
             isProcessing ? 'Processing Order...' : 
             paymentMethod === 'whatsapp' ? 'Complete via WhatsApp' : 'Confirm COD Order'}
          </button>
        </form>
      </div>

      <div className="bg-brand-gold/5 p-8 border border-brand-gold/10 h-fit sticky top-32">
        <h2 className="font-serif text-2xl mb-6 text-brand-gold">Your Selection</h2>
        <div className="space-y-4 mb-8">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-[13px]">
              <span className="text-brand-cream/80">{item.name} <span className="text-brand-gold/50 ml-2">x{item.quantity}</span></span>
              <span className="text-brand-cream font-medium">${item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-brand-gold/20 pt-6 flex justify-between font-serif text-xl text-brand-cream">
          <span className="tracking-tighter">Total Amount</span>
          <span className="text-brand-gold font-bold">${cartTotal}</span>
        </div>
      </div>
    </div>
  );
}