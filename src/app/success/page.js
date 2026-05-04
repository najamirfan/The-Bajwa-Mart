export default function SuccessPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mb-8">
        <span className="text-brand-gold text-4xl">✓</span>
      </div>
      <h1 className="font-serif text-4xl mb-4 text-brand-cream uppercase tracking-tight">Payment Successful</h1>
      <p className="text-brand-gold/60 max-w-md mb-10 leading-relaxed">
        Thank you for choosing Bajwa Mart. Your order is being processed and a confirmation email will be sent shortly.
      </p>
      <a href="/" className="px-10 py-4 bg-brand-gold text-brand-black uppercase tracking-widest text-[10px] font-bold hover:bg-brand-cream transition-all">
        Return to Home
      </a>
    </div>
  );
}