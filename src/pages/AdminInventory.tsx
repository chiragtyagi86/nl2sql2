import React from 'react';
import { Search, Plus, Edit, Trash2, AlertTriangle, AlertCircle, Utensils } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { cn } from '../lib/utils';

export default function AdminInventory() {
  return (
    <div className="p-8 space-y-8">
      {/* Header Section */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-900">Inventory & Menu Management</h1>
          <p className="text-sm text-slate-500">Real-time control over items, pricing, and stock levels.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary w-64 text-sm" 
              placeholder="Search menu items..." 
              type="text" 
            />
          </div>
          <button className="bg-gradient-to-r from-primary to-[#ff6b4a] text-white px-6 py-2.5 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
            <Plus className="w-4 h-4" /> Add New Item
          </button>
        </div>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Items', value: '124', change: '+12%', icon: Utensils, bg: 'bg-primary/10', color: 'text-primary' },
          { label: 'Low Stock', value: '8', change: '-2%', icon: AlertTriangle, bg: 'bg-orange-100', color: 'text-orange-600' },
          { label: 'Out of Stock', value: '3', change: '-5%', icon: AlertCircle, bg: 'bg-red-100', color: 'text-red-600' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-6 flex items-center gap-5">
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", stat.bg, stat.color)}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className={cn("text-xs font-bold", stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500')}>{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="border-b border-primary/10 flex gap-8">
        {['All Items', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'].map((tab, i) => (
          <button 
            key={tab}
            className={cn(
              "pb-4 font-bold text-sm transition-colors",
              i === 0 ? "border-b-2 border-primary text-primary" : "text-slate-500 hover:text-slate-900"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MENU_ITEMS.map((item) => (
          <div key={item.id} className="glass-card rounded-xl overflow-hidden group">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}></div>
            <div className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className="text-xs text-slate-500">Category: {item.category}</p>
                </div>
                <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-y border-slate-100">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Inventory</p>
                  <p className="text-sm font-bold">{item.inventory} portions</p>
                </div>
                <div className="h-8 w-[1px] bg-slate-200"></div>
                <div className="space-y-1 text-right">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Status</p>
                  <span className={cn(
                    "px-2 py-0.5 text-[10px] rounded-full font-bold",
                    (item.inventory || 0) > 10 ? "bg-green-100 text-green-700" :
                    (item.inventory || 0) > 0 ? "bg-orange-100 text-orange-700" :
                    "bg-red-100 text-red-700"
                  )}>
                    {(item.inventory || 0) > 10 ? "IN STOCK" : (item.inventory || 0) > 0 ? "LOW STOCK" : "OUT OF STOCK"}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-slate-100 rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:bg-slate-200 transition-colors">
                  <Edit className="w-3 h-3" /> Edit
                </button>
                <button className="w-9 h-9 bg-red-50 text-red-600 rounded-lg flex items-center justify-center hover:bg-red-100 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        <button className="border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center p-8 space-y-4 hover:bg-primary/5 transition-colors group">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8" />
          </div>
          <div className="text-center">
            <h4 className="font-bold">Add New Dish</h4>
            <p className="text-xs text-slate-500 mt-1">Easily populate your menu</p>
          </div>
        </button>
      </div>
    </div>
  );
}
