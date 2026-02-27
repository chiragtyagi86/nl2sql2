import React from 'react';
import { Search, Bell, Calendar, Download, Plus, TrendingUp, ShoppingBag, Users, Star, MoreVertical } from 'lucide-react';
import { RECENT_ORDERS } from '../constants';
import { cn } from '../lib/utils';

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Welcome Section */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-500">Welcome back! Here's what's happening with your restaurant today.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Data
          </button>
          <button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" /> New Order
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Sales', value: '$24,850.00', change: '+12.5%', icon: TrendingUp, color: 'border-primary', iconColor: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Total Orders', value: '1,248', change: '+8.2%', icon: ShoppingBag, color: 'border-blue-500', iconColor: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Active Customers', value: '842', change: '-2.4%', icon: Users, color: 'border-amber-500', iconColor: 'text-amber-500', bg: 'bg-amber-50' },
          { label: 'Average Rating', value: '4.8/5.0', change: '+0.5%', icon: Star, color: 'border-emerald-500', iconColor: 'text-emerald-500', bg: 'bg-emerald-50' },
        ].map((stat) => (
          <div key={stat.label} className={`glass-card p-6 rounded-2xl bg-white border-l-4 ${stat.color}`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.iconColor}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'text-emerald-500 bg-emerald-50' : 'text-rose-500 bg-rose-50'}`}>
                {stat.change}
              </span>
            </div>
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-2xl bg-white flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h4 className="font-bold text-slate-900">Revenue Trends</h4>
            <select className="text-xs border-slate-200 rounded-lg py-1 focus:ring-primary">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="flex-1 flex flex-col justify-end gap-6 pt-4 min-h-[240px]">
            <svg className="w-full h-full max-h-48" fill="none" preserveAspectRatio="none" viewBox="0 0 400 150">
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f44725" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#f44725" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0 120 Q 50 110, 80 40 T 150 60 T 220 20 T 300 80 T 400 30 V 150 H 0 Z" fill="url(#chartGradient)"></path>
              <path d="M0 120 Q 50 110, 80 40 T 150 60 T 220 20 T 300 80 T 400 30" fill="none" stroke="#f44725" strokeLinecap="round" strokeWidth="3"></path>
            </svg>
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>
        
        <div className="glass-card p-6 rounded-2xl bg-white flex flex-col h-full">
          <h4 className="font-bold text-slate-900 mb-6">Favorite Dishes</h4>
          <div className="space-y-4 flex-1">
            {[
              { name: 'Truffle Tagliatelle', orders: 420, width: '85%', opacity: 'bg-primary' },
              { name: 'Wagyu Beef Burger', orders: 315, width: '65%', opacity: 'bg-primary/70' },
              { name: 'Crispy Duck Salad', orders: 280, width: '55%', opacity: 'bg-primary/50' },
              { name: 'Lobster Ravioli', orders: 195, width: '35%', opacity: 'bg-primary/30' },
            ].map((dish) => (
              <div key={dish.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{dish.name}</span>
                  <span className="font-bold text-slate-900">{dish.orders} orders</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div className={`${dish.opacity} h-full rounded-full`} style={{ width: dish.width }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="glass-card rounded-2xl bg-white overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-slate-100">
          <h4 className="font-bold text-slate-900">Recent Orders</h4>
          <button className="text-primary text-sm font-semibold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RECENT_ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-sm text-slate-900">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img src={order.customer.avatar} className="w-8 h-8 rounded-full object-cover" alt="" />
                      <span className="text-sm font-medium text-slate-700">{order.customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.items.length}x Items</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-bold uppercase rounded-full border",
                      order.status === 'Preparing' ? "bg-amber-50 text-amber-600 border-amber-200" :
                      order.status === 'Delivered' ? "bg-emerald-50 text-emerald-600 border-emerald-200" :
                      "bg-primary/10 text-primary border-primary/20"
                    )}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
