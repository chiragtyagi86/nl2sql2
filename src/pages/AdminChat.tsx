import React, { useState, useRef, useEffect } from 'react';
import { Search, Hand, MoreVertical, PlusCircle, Smile, Send, Bot, User, BarChart2, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import { CONVERSATIONS } from '../constants';
import { cn } from '../lib/utils';
import { getAdminChatResponse } from '../services/geminiService';
import { ChatMessageContent } from '../components/ChatMessageContent';

export default function AdminChat() {
  const [selectedChatId, setSelectedChatId] = useState<string | 'admin-assistant'>('1');
  const [adminInput, setAdminInput] = useState('');
  const [adminMessages, setAdminMessages] = useState<{ id: string, sender: 'admin' | 'ai', text: string, timestamp: string }[]>([
    { id: 'a1', sender: 'ai', text: "Hello Marco! I'm your RestoAdmin AI. How can I help you with the restaurant data today?", timestamp: '9:00 AM' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [adminMessages, selectedChatId, isTyping]);

  const activeChat = CONVERSATIONS.find(c => c.id === selectedChatId);

  const handleSendAdminMessage = async () => {
    if (!adminInput.trim()) return;

    const userMsg = adminInput;
    setAdminInput('');
    const newMsg = { id: Date.now().toString(), sender: 'admin' as const, text: userMsg, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setAdminMessages(prev => [...prev, newMsg]);
    setIsTyping(true);

    const history = adminMessages.map(m => ({
      role: m.sender === 'admin' ? 'user' as const : 'model' as const,
      parts: [{ text: m.text }]
    }));

    const response = await getAdminChatResponse(userMsg, history);
    
    setIsTyping(false);
    setAdminMessages(prev => [...prev, { 
      id: (Date.now() + 1).toString(), 
      sender: 'ai', 
      text: response || "I'm sorry, I couldn't process that.", 
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }]);
  };

  return (
    <div className="flex flex-1 overflow-hidden h-full">
      {/* Chat List Area */}
      <section className="w-80 lg:w-96 border-r border-slate-200 flex flex-col bg-white">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Conversations</h3>
          <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
            <button className="flex-1 py-1.5 text-xs font-bold rounded-lg bg-white shadow-sm text-slate-900">AI Active</button>
            <button className="flex-1 py-1.5 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-700 transition-colors">Manual</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Admin Assistant Special Item */}
          <div 
            onClick={() => setSelectedChatId('admin-assistant')}
            className={cn(
              "p-4 m-2 rounded-2xl relative group cursor-pointer transition-transform hover:scale-[1.02]",
              selectedChatId === 'admin-assistant' ? "bg-slate-900 text-white shadow-lg" : "bg-slate-50 border border-slate-100"
            )}
          >
            <div className="flex gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Bot className="w-7 h-7" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-0.5">
                  <h4 className="font-bold text-sm truncate">RestoAdmin AI</h4>
                  <span className="text-[10px] font-medium opacity-80">Online</span>
                </div>
                <p className={cn("text-xs truncate font-medium", selectedChatId === 'admin-assistant' ? "opacity-90" : "text-slate-500")}>
                  Business Insights Assistant
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 py-2">
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customer Chats</h5>
          </div>

          {CONVERSATIONS.map((chat) => (
            <div 
              key={chat.id} 
              onClick={() => setSelectedChatId(chat.id)}
              className={cn(
                "p-4 m-2 rounded-2xl relative group cursor-pointer transition-transform hover:scale-[1.02]",
                selectedChatId === chat.id 
                  ? "vibrant-gradient text-white shadow-lg shadow-primary/20" 
                  : "hover:bg-slate-50 border-b border-slate-100"
              )}
            >
              <div className="flex gap-3">
                <div className="relative">
                  <img src={chat.customer.avatar} className="w-12 h-12 rounded-xl object-cover border-2 border-white/20" alt="" />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-0.5">
                    <h4 className="font-bold text-sm truncate">{chat.customer.name}</h4>
                    <span className="text-[10px] font-medium opacity-80">{chat.timestamp}</span>
                  </div>
                  <p className={cn("text-xs truncate font-medium", selectedChatId === chat.id ? "opacity-90" : "text-slate-500")}>
                    {chat.lastMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Chat Window */}
      <section className="flex-1 flex flex-col bg-background-light">
        {selectedChatId === 'admin-assistant' ? (
          <>
            <div className="h-20 glass-panel border-b border-slate-200 px-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">RestoAdmin AI Assistant</h4>
                  <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Connected to Live Data
                  </p>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
              {adminMessages.map((msg) => (
                <div key={msg.id} className={cn("flex gap-3 max-w-xl", msg.sender === 'ai' ? "" : "ml-auto flex-row-reverse")}>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    msg.sender === 'ai' ? "bg-primary/10 text-primary border border-primary/20" : "bg-slate-900 text-white"
                  )}>
                    {msg.sender === 'ai' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                  </div>
                  <div className={msg.sender === 'admin' ? "text-right" : ""}>
                    <div className={cn(
                      "p-4 rounded-2xl shadow-sm",
                      msg.sender === 'ai' ? "bg-white border border-slate-100 rounded-tl-none" : "bg-slate-900 text-white rounded-tr-none"
                    )}>
                      <ChatMessageContent text={msg.text} />
                    </div>
                    <div className={cn("flex items-center gap-1.5 mt-1", msg.sender === 'admin' ? "justify-end" : "")}>
                      <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-4 text-sm flex gap-1">
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce" />
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-white border-t border-slate-200">
              <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-2xl border border-transparent focus-within:border-primary/20 focus-within:bg-white transition-all">
                <input 
                  className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 px-4" 
                  placeholder="Ask about sales, top dishes, or kitchen status..." 
                  type="text" 
                  value={adminInput}
                  onChange={(e) => setAdminInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendAdminMessage()}
                />
                <button 
                  onClick={handleSendAdminMessage}
                  className="h-10 px-6 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          </>
        ) : activeChat ? (
          <>
            <div className="h-20 glass-panel border-b border-slate-200 px-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={activeChat.customer.avatar} className="w-10 h-10 rounded-xl object-cover" alt="" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{activeChat.customer.name}</h4>
                  <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Online · Ordering {activeChat.customer.table}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
                  <Hand className="w-4 h-4" /> Manual Override
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-slate-400 border border-slate-200 hover:text-slate-900 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
              <div className="flex flex-col items-center">
                <span className="px-3 py-1 bg-slate-200 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">Today, 12:45 PM</span>
              </div>
              
              {activeChat.messages.map((msg) => (
                <div key={msg.id} className={cn("flex gap-3 max-w-xl", msg.sender === 'ai' ? "ml-auto flex-row-reverse" : "")}>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    msg.sender === 'ai' ? "bg-primary/10 text-primary border border-primary/20" : "bg-slate-100"
                  )}>
                    {msg.sender === 'ai' ? <Bot className="w-5 h-5" /> : <img src={activeChat.customer.avatar} className="w-full h-full rounded-lg object-cover" alt="" />}
                  </div>
                  <div className={msg.sender === 'ai' ? "text-right" : ""}>
                    <div className={cn(
                      "p-4 rounded-2xl shadow-sm",
                      msg.sender === 'ai' ? "bg-primary/10 border border-primary/20 rounded-tr-none" : "bg-white border border-slate-100 rounded-tl-none"
                    )}>
                      <p className="text-sm text-slate-700">{msg.text}</p>
                    </div>
                    <div className={cn("flex items-center gap-1.5 mt-1", msg.sender === 'ai' ? "justify-end" : "")}>
                      {msg.sender === 'ai' && <span className="text-[10px] text-primary font-bold uppercase tracking-wider">AI Response</span>}
                      <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-white border-t border-slate-200">
              <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-2xl border border-transparent focus-within:border-primary/20 focus-within:bg-white transition-all">
                <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-primary transition-colors">
                  <PlusCircle className="w-5 h-5" />
                </button>
                <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2" placeholder="Type a message or use '/' for quick replies..." type="text" />
                <div className="flex items-center gap-2 pr-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-primary transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                  <button className="h-10 px-6 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary/90 transition-all">
                    Send
                  </button>
                </div>
              </div>
              <div className="flex gap-4 mt-3 px-2">
                <span className="text-[10px] text-slate-400 font-medium">Suggestions:</span>
                <button className="text-[10px] font-bold text-primary hover:underline">/allergy-policy</button>
                <button className="text-[10px] font-bold text-primary hover:underline">/add-beverage</button>
                <button className="text-[10px] font-bold text-primary hover:underline">/table-status</button>
              </div>
            </div>
          </>
        ) : null}
      </section>

      {/* Right Sidebar - Info */}
      <aside className="hidden xl:flex w-80 border-l border-slate-200 bg-white flex-col overflow-y-auto">
        {selectedChatId === 'admin-assistant' ? (
          <div className="p-8 space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 rounded-3xl bg-primary flex items-center justify-center text-white mx-auto mb-4 shadow-xl shadow-primary/20">
                <Bot className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">RestoAdmin AI</h3>
              <p className="text-xs text-slate-500">Business Intelligence Partner</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Capabilities</h4>
                <ul className="space-y-3">
                  {['Sales Analysis', 'Inventory Tracking', 'Customer Sentiment', 'Kitchen Efficiency'].map(cap => (
                    <li key={cap} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 mb-2">Pro Tip</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  You can ask me things like "What was our highest selling dish this week?" or "How many orders are currently pending?"
                </p>
              </div>
            </div>
          </div>
        ) : activeChat ? (
          <>
            <div className="p-8 text-center border-b border-slate-100">
              <img src={activeChat.customer.avatar} className="w-24 h-24 rounded-3xl object-cover mx-auto mb-4 border-4 border-primary/10" alt="" />
              <h3 className="text-lg font-bold text-slate-900">{activeChat.customer.name}</h3>
              <p className="text-xs text-slate-500">{activeChat.customer.email}</p>
              <div className="mt-4 flex justify-center gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">VIP Guest</span>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full">{activeChat.customer.table}</span>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Current Order</h4>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-600">1x Truffle Pasta</span>
                    <span className="font-bold text-slate-900">$24.00</span>
                  </div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-600">1x Sparkling Water</span>
                    <span className="font-bold text-slate-900">$4.50</span>
                  </div>
                  <div className="border-t border-slate-200 my-2 pt-2 flex justify-between">
                    <span className="text-xs font-bold text-slate-900">Total</span>
                    <span className="text-xs font-bold text-primary">$28.50</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Order Status</h4>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span className="text-xs font-bold text-slate-700">Preparing in Kitchen</span>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Notes</h4>
                <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-100">
                  <p className="text-[11px] text-yellow-800 font-medium leading-relaxed">Guest has walnut allergy. Ensure clean workstation for Order #4029.</p>
                </div>
              </div>
              <button className="w-full py-3 bg-slate-900 text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all">
                View Full History
              </button>
            </div>
          </>
        ) : null}
      </aside>
    </div>
  );
}
