import React from 'react';
import { ShoppingCart, Truck, CreditCard, Edit3, ArrowRight, ShieldCheck, Bot, Plus, Minus } from 'lucide-react';

export default function Checkout() {
  const cartItems = [
    {
      id: '1',
      name: 'Classic Wagyu Burger',
      desc: 'Extra cheese, No onions',
      price: 18.00,
      qty: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUlBbat96arzEyjMvVQdAR9u1Lb_fxUISWa_pbWDyB-6__MOAMc2QbNDwGKo2bPR-_jraU57fy1uq5l-F9Fsv3g-5WLmak-zyESMPsPWriXW-kiE3U0K9edCEGhAxhxXGC-ZloHvcc7wkI4eNduI7EFERp486RGy3dWHlIoewIFVoCMCLREjqQgp5XJJpTLgrQ04Alnmi9kVO7Gc7DcwbEhm8IMDYABAwSQOtqa9c73zYE8tMBtPnDsYofBzgW0FSVIg5XoNozAZcr'
    },
    {
      id: '2',
      name: 'Fresh Salmon Poke Bowl',
      desc: 'Quinoa base, Spicy mayo',
      price: 28.00,
      qty: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSgOdV0iOAwiEpOeQuAQ4kbPxWhV9iGgQwIH-ohJoo1mzcU3Uh7dvTPyHc7ItXyOPHdPT9W4Mw3SM8RtXvSdxPFBOJIO8zTHAwdGtBPwtCTHuwHfJDxDwbyL5NdL9KQu6Y2BN2LSlQvdeh9RdeWLIpy817cWG6lNJXD3DZIS65mYPdjwCl1S1JUUQ7AF6fgyXFi-N5Mu025UTJakV26Dk_FSICji-BaSF1I5tjbigAMvwCq9WRXG1hSl_gy5UAoGcZuMiWMZ2R7mH1'
    }
  ];

  return (
    <main className="flex-1 flex justify-center py-10 px-4">
      <div className="max-w-[1100px] w-full flex flex-col gap-8">
        {/* Progress Stepper */}
        <div className="glass-card rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
              <p className="text-slate-500 text-sm">Review your order and select delivery options</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Current Step</span>
              <p className="text-lg font-bold text-slate-800">Cart & Review</p>
            </div>
          </div>
          <div className="relative flex items-center justify-between w-full">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 z-0"></div>
            <div className="absolute top-1/2 left-0 w-1/3 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-primary">Cart</span>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-slate-400">Delivery</span>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
                <CreditCard className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium text-slate-400">Payment</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass-card rounded-xl overflow-hidden shadow-sm">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-lg">Order Summary</h3>
                <span className="text-slate-400 text-sm">{cartItems.length} Items</span>
              </div>
              <div className="divide-y divide-slate-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6 flex items-center gap-4">
                    <div 
                      className="w-20 h-20 rounded-lg bg-cover bg-center border border-slate-100" 
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800">{item.name}</h4>
                      <p className="text-xs text-slate-500 mb-2">{item.desc}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-slate-200 rounded-lg">
                          <button className="px-2 py-1 text-slate-400 hover:text-primary"><Minus className="w-3 h-3" /></button>
                          <span className="px-3 text-sm font-bold">{item.qty}</span>
                          <button className="px-2 py-1 text-slate-400 hover:text-primary"><Plus className="w-3 h-3" /></button>
                        </div>
                        <button className="text-xs text-red-500 font-medium hover:underline">Remove</button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add Note Section */}
            <div className="glass-card rounded-xl p-6 shadow-sm">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-primary" />
                Add a Note to the Chef
              </h4>
              <textarea 
                className="w-full rounded-lg border-slate-200 bg-white/50 focus:border-primary focus:ring-primary text-sm p-4 h-24 placeholder:text-slate-400" 
                placeholder="E.g. No salt, allergies, etc."
              />
            </div>
          </div>

          {/* Checkout Sidebar */}
          <div className="flex flex-col gap-6">
            <div className="glass-card rounded-xl p-6 shadow-sm sticky top-28">
              <h3 className="font-bold text-lg mb-6">Payment Details</h3>
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Subtotal</span>
                  <span className="font-bold">$58.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Tax (8%)</span>
                  <span className="font-bold">$4.64</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 text-sm">Delivery Fee</span>
                  <span className="font-bold text-green-600">FREE</span>
                </div>
                <div className="h-px bg-slate-200 my-2"></div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-black text-primary">$62.64</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <input 
                    className="w-full rounded-lg border-slate-200 bg-white/50 focus:border-primary focus:ring-primary text-sm pr-20" 
                    placeholder="Promo code" 
                    type="text" 
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary font-bold text-xs uppercase hover:underline">Apply</button>
                </div>
                <button className="vibrant-gradient w-full py-4 rounded-xl text-white font-bold shadow-lg shadow-primary/30 hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  <span>Proceed to Delivery</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center gap-4 mt-4 text-slate-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">Secure Checkout Powered by Stripe</span>
                </div>
              </div>
            </div>

            {/* AI Recommendation */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">ModernEats AI</p>
                  <p className="text-xs text-slate-500 mt-1 italic">"You've selected the Poke Bowl. Most customers enjoy our organic Green Tea with this meal. Shall I add it for $3.50?"</p>
                  <button className="mt-3 text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                    Yes, add it <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
