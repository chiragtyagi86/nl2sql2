import React from 'react';
import { Search, Download, Plus, MoreHorizontal, ChevronLeft, ChevronRight, CheckCircle, Truck, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AdminOrders() {
  const orders = [
    { id: '#ORD-9021', customer: 'Alex Thompson', time: '2 mins ago', items: '2x Wagyu Burger, 1x Truffle Fries', price: 48.50, status: 'Pending' },
    { id: '#ORD-9020', customer: 'Sarah Jenkins', time: '12 mins ago', items: '1x Margherita Pizza (L)', price: 22.00, status: 'Preparing' },
    { id: '#ORD-9019', customer: 'Michael Chen', time: '25 mins ago', items: '3x Chicken Tacos, 1x Cola', price: 18.75, status: 'Out for Delivery' },
    { id: '#ORD-9018', customer: 'Emma Rodriguez', time: '45 mins ago', items: '1x Caesar Salad, 1x Lemonade', price: 14.50, status: 'Completed' },
    { id: '#ORD-9017', customer: 'David Wilson', time: '58 mins ago', items: '2x Pepperoni Pizza, 2x Garlic Bread', price: 54.00, status: 'Completed' },
  ];

  return (
    <div className="max-w-[1280px] mx-auto w-full px-6 py-8">
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-slate-900 text-4xl font-extrabold tracking-tight">Order Management</h1>
          <p className="text-slate-500 text-base">Monitor and manage kitchen workflow in real-time.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <Plus className="w-4 h-4" /> Manual Order
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Orders Today', value: '128', change: '+12%', color: 'border-slate-100' },
          { label: 'Pending', value: '12', change: '+2%', color: 'border-slate-100' },
          { label: 'Preparing', value: '8', change: '-5%', color: 'border-l-primary' },
          { label: 'Completed', value: '108', change: '+15%', color: 'border-slate-100' },
        ].map((stat) => (
          <div key={stat.label} className={cn("flex flex-col gap-2 rounded-xl p-6 bg-white border shadow-sm", stat.color)}>
            <div className="flex justify-between items-start">
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <span className={cn("text-xs font-bold px-2 py-1 rounded-full", stat.change.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700')}>
                {stat.change}
              </span>
            </div>
            <p className="text-slate-900 text-3xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 mb-6 border border-white shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex gap-2 flex-wrap">
            {['All Orders', 'Pending', 'Preparing', 'Out for Delivery', 'Completed'].map((filter, i) => (
              <button
                key={filter}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm transition-all",
                  i === 0 
                    ? "bg-primary text-white font-bold shadow-md shadow-primary/20" 
                    : "bg-white text-slate-600 font-semibold border border-slate-100 hover:bg-slate-50"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative min-w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm transition-all shadow-inner" 
              placeholder="Search by ID, customer or item..." 
              type="text" 
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4 text-center">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-primary">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900">{order.customer}</span>
                      <span className="text-xs text-slate-400">{order.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.items}</td>
                  <td className="px-6 py-4 text-center font-bold text-slate-900">${order.price.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold gap-1.5",
                      order.status === 'Pending' ? "bg-amber-100 text-amber-700" :
                      order.status === 'Preparing' ? "bg-blue-100 text-blue-700" :
                      order.status === 'Out for Delivery' ? "bg-primary/10 text-primary" :
                      "bg-emerald-100 text-emerald-700"
                    )}>
                      {order.status === 'Pending' && <Clock className="w-3 h-3" />}
                      {order.status === 'Preparing' && <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />}
                      {order.status === 'Out for Delivery' && <Truck className="w-3 h-3" />}
                      {order.status === 'Completed' && <CheckCircle className="w-3 h-3" />}
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing 1 to 5 of 128 orders</p>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-primary disabled:opacity-50" disabled>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-bold">1</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-primary">2</button>
            <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-semibold hover:border-primary">3</button>
            <button className="p-2 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-primary">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
