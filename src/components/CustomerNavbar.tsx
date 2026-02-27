import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, Search, ShoppingBag, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CustomerNavbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Reservations', path: '#' },
    { name: 'Dashboard', path: '/admin' },
  ];

  return (
    <header className="sticky top-0 z-50 px-6 py-4 lg:px-20">
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center justify-between max-w-7xl mx-auto shadow-sm">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <Utensils className="w-6 h-6 font-bold" />
            <h2 className="text-slate-900 text-xl font-extrabold tracking-tight">Gusto Moderno</h2>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  location.pathname === link.path ? "text-primary" : "text-slate-600 hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-white/50 rounded-full px-4 py-1.5 border border-slate-200">
            <Search className="text-slate-400 w-4 h-4" />
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-32 ml-2"
              placeholder="Search dishes..."
              type="text"
            />
          </div>
          <Link to="/checkout" className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            Order Now
          </Link>
          <div 
            className="w-10 h-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYSwd4yKl-pecqh_RWtA9uRBYOIpNkciJAD5GegXk5anAWeREHqZzlgEmkeLiNa22cA_O8HFdc1dUmV5-qViAB8dD3WRUfOgdWMyuEjELYojQ5LzmrWDVRSgVvPIjW7ctC61GRv6LGWXSb8BjHZWQKZLP61dYv25DC-01Jk3XfxzZn9MvPn16Lw0uTE0xszSD8J4c-9iKgemRf2wZ8fStvmvMXcd-vJXI5lQQDfua6myaeMCdrh1CEYyE1hD0snaOKdOAfotOainF9')" }}
          />
        </div>
      </nav>
    </header>
  );
}
