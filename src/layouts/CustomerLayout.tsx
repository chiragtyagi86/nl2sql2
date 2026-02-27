import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomerNavbar from '../components/CustomerNavbar';
import ChatBot from '../components/ChatBot';
import { Utensils, Send } from 'lucide-react';

export default function CustomerLayout() {
  return (
    <div className="relative min-h-screen gradient-bg font-sans">
      <CustomerNavbar />
      <Outlet />
      <footer className="bg-white/50 border-t border-slate-200 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Utensils className="w-6 h-6 font-bold" />
              <h2 className="text-slate-900 text-lg font-extrabold tracking-tight">Gusto Moderno</h2>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Redefining the dining experience with artificial intelligence and passion for flavor.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-primary" href="#">About Us</a></li>
              <li><a className="hover:text-primary" href="#">Our Chef</a></li>
              <li><a className="hover:text-primary" href="#">Locations</a></li>
              <li><a className="hover:text-primary" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary" href="#">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input className="bg-white border-slate-200 rounded-lg text-sm w-full" placeholder="Your email" type="email" />
              <button className="bg-primary text-white px-4 rounded-lg flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </footer>
      <ChatBot />
    </div>
  );
}
