import React from 'react';
import { Search, Filter, ArrowUpDown, ShoppingCart, Bot, Utensils, Star } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export default function Menu() {
  const categories = ['All Dishes', 'Appetizers', 'Main Course', 'Desserts', 'Drinks'];

  return (
    <div className="flex flex-1">
      {/* Sidebar Categories */}
      <aside className="hidden md:flex w-72 flex-col border-r border-primary/5 p-8 gap-8 sticky top-[73px] h-[calc(100vh-73px)]">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Menu Categories</h3>
          <div className="flex flex-col gap-2">
            {categories.map((cat, i) => {
              const Icon = i === 0 ? Utensils : i === 1 ? Search : i === 2 ? ShoppingCart : i === 3 ? Star : Bot;
              return (
                <button
                  key={cat}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'hover:bg-primary/5 group'
                  }`}
                >
                  <Icon className={cn("w-5 h-5", i === 0 ? 'text-white' : 'text-slate-500 group-hover:text-primary')} />
                  <span className={`text-sm ${i === 0 ? 'font-semibold' : 'font-medium'}`}>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-auto p-6 rounded-2xl bg-gradient-to-br from-primary to-orange-600 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-xs font-medium opacity-80 mb-1">Feeling undecided?</p>
            <h4 className="text-lg font-bold mb-3">Ask our AI Chef</h4>
            <button className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold hover:shadow-lg transition-all">Chat Now</button>
          </div>
          <Bot className="absolute -right-4 -bottom-4 w-24 h-24 opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform" />
        </div>
      </aside>

      {/* Main Menu Grid */}
      <div className="flex-1 bg-gradient-to-tr from-white to-primary/5 p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl font-black tracking-tight mb-2">Full Menu</h1>
              <p className="text-slate-500 max-w-lg">Discover our curated selection of fresh, seasonal ingredients prepared by our expert chefs.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white border border-primary/10 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:border-primary transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="flex items-center gap-2 bg-white border border-primary/10 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:border-primary transition-colors">
                <ArrowUpDown className="w-4 h-4" />
                <span>Sort By</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="glass-card rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                      Popular
                    </div>
                  )}
                  {item.chefSpecial && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                      Chef's Special
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <span className="text-xl font-extrabold text-primary">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{item.description}</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold transition-all transform active:scale-95">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-primary/10 text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all">
              Load More Dishes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
