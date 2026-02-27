import React from 'react';
import { Utensils, LayoutDashboard, Menu as MenuIcon, ShoppingCart, Bot, BarChart3, Settings, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function AdminSidebar() {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { name: 'Menu Management', icon: MenuIcon, path: '/admin/inventory' },
    { name: 'Orders', icon: ShoppingCart, path: '/admin/orders' },
    { name: 'AI Chatbot', icon: Bot, path: '/admin/chat' },
    { name: 'Detailed Analytics', icon: BarChart3, path: '#' },
    { name: 'Settings', icon: Settings, path: '#' },
  ];

  return (
    <aside className="w-64 glass-panel hidden lg:flex flex-col z-20 h-screen sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg text-white">
          <Utensils className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
          Resto<span className="text-primary">Admin</span>
        </h2>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
              location.pathname === item.path
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-slate-600 hover:bg-primary/10 hover:text-primary"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className={cn("text-sm", location.pathname === item.path ? "font-semibold" : "font-medium")}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="glass-card rounded-xl p-4 flex items-center gap-3 bg-white/50">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-primary/30">
            <img 
              alt="Admin profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwz8ZY0UCTEPmTvlxl8ogYe6VDHjlRlvVrlj9HjO6QznkxHMRZOdNUDJXAQQmhdLKIUrdKiELwO_Y02OHaei3RRLALk-0penYEv0djKbPDy1HIPmSRSynAt-OoFnx3uOg0v0iz6iec6TkbeGjFXJQ4n4P8Utnsrn_Eh0v4BOIITw4ZUkWeJdun67ebLr-JLy3IBLQ4-ICfiJzXm7h3RidUAz0j7KquaANJBvBHyt5BfUeiLUbEUC17BdzWkocOoeiO3kVtSLzo6HL0" 
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-900 truncate">Marco Vieri</p>
            <p className="text-[10px] text-slate-500 truncate">Owner / Manager</p>
          </div>
          <button className="text-slate-400 hover:text-primary">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
