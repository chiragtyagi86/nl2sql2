import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import { Search, Bell, Calendar } from 'lucide-react';

export default function AdminLayout() {
  return (
    <div className="flex h-screen overflow-hidden font-sans bg-background-light">
      <AdminSidebar />
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Nav */}
        <header className="h-16 flex items-center justify-between px-8 bg-white/30 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200">
          <div className="flex items-center gap-4 flex-1">
            <div className="max-w-md w-full relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                className="w-full pl-10 pr-4 py-2 bg-white/50 border-slate-200 rounded-lg text-sm focus:ring-primary focus:border-primary" 
                placeholder="Search orders, menus, customers..." 
                type="text" 
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:text-primary transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-slate-600">Mon, 24 Oct</span>
              <Calendar className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </header>
        <Outlet />
      </main>
    </div>
  );
}
