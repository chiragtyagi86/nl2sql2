import React from 'react';
import { Sparkles, ArrowRight, Star, Plus, Utensils, Send } from 'lucide-react';
import { MENU_ITEMS } from '../constants';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 pb-20">
      {/* Hero Section */}
      <section className="py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            AI-Powered Culinary Experience
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Taste the <span className="text-primary">Future</span> of Gastronomy.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-md">
            Experience a fusion of traditional flavors and modern culinary techniques, curated by our AI-enhanced kitchen.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
              Explore Menu
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="glass-panel px-8 py-4 rounded-xl font-bold border-slate-200 hover:bg-white transition-colors">
              Book a Table
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              alt="Gourmet plated dish" 
              className="w-full h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0U4b5tl-nwpE2Lzmb8VEr_lOY00IkhyFAehcZtG3MvxAcCPu2Nw6ol6QiFj8bPxrB9cIT_xNmjMArh_k4-Vnl3togt1VpamAEI_2FBd971E67egOfgBU01IPkAIf6H3hAYZE-Aqfp60z6rDlaC0RAtS1sd_nSIdoOdrhEKM_izJQMQC46XcLE-oFqlBPO4ohSxKsC_LyfdgX23631FQmkC2i11JW_yP5iO2vgcV1Z8gD2sa9FrnUm3mdrFj8TssBsZ2e89jCPYJRP" 
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="glass-panel rounded-3xl p-8 grid md:grid-cols-4 gap-8">
          <div className="text-center md:border-r border-slate-200/50">
            <p className="text-slate-500 text-sm font-medium mb-1">Active Orders</p>
            <p className="text-3xl font-black text-slate-900">42</p>
          </div>
          <div className="text-center md:border-r border-slate-200/50">
            <p className="text-slate-500 text-sm font-medium mb-1">Kitchen Efficiency</p>
            <p className="text-3xl font-black text-secondary">98%</p>
          </div>
          <div className="text-center md:border-r border-slate-200/50">
            <p className="text-slate-500 text-sm font-medium mb-1">Avg. Delivery</p>
            <p className="text-3xl font-black text-slate-900">18m</p>
          </div>
          <div className="text-center">
            <p className="text-slate-500 text-sm font-medium mb-1">Customer Rating</p>
            <p className="text-3xl font-black text-primary">4.9/5</p>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-10" id="menu">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Curated Menu</h2>
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              {['All Dishes', 'Starters', 'Main Course', 'Desserts', 'Vegan'].map((cat, i) => (
                <button 
                  key={cat}
                  className={`px-6 py-2 rounded-full text-sm font-bold shrink-0 transition-colors ${
                    i === 0 ? 'bg-primary text-white' : 'glass-panel text-slate-600 hover:bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary font-bold cursor-pointer">
            Full Menu <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.slice(0, 3).map((item) => (
            <div key={item.id} className="glass-panel rounded-3xl p-4 hover:shadow-xl transition-all group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <img 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={item.image} 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-slate-900 shadow-sm">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                  <Star className="w-5 h-5 text-primary fill-primary" />
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {item.tags?.map(tag => (
                      <div key={tag} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold">
                        {tag}
                      </div>
                    ))}
                  </div>
                  <button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-primary transition-colors">
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
