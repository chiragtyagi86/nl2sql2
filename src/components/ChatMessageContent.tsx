import React from 'react';
import { BarChart2, TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const CHART_COLORS = ['#F27D26', '#141414', '#E4E3E0', '#8E9299', '#5A5A40'];

export const ChatMessageContent = ({ text }: { text: string }) => {
  const parts = text.split(/(\[CHART:.*?\]|\[IMAGE:.*?\])/g);

  return (
    <div className="space-y-4">
      {parts.map((part, index) => {
        if (part.startsWith('[CHART:')) {
          try {
            const chartData = JSON.parse(part.slice(7, -1));
            return (
              <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-100 my-2">
                <h5 className="text-xs font-bold text-slate-900 mb-4 flex items-center gap-2">
                  {chartData.type === 'bar' && <BarChart2 className="w-4 h-4 text-primary" />}
                  {chartData.type === 'line' && <TrendingUp className="w-4 h-4 text-primary" />}
                  {chartData.type === 'pie' && <PieChartIcon className="w-4 h-4 text-primary" />}
                  {chartData.title}
                </h5>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    {chartData.type === 'bar' ? (
                      <BarChart data={chartData.data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          labelStyle={{ fontWeight: 'bold', fontSize: '10px' }}
                        />
                        <Bar dataKey="value" fill="#F27D26" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    ) : chartData.type === 'line' ? (
                      <LineChart data={chartData.data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          labelStyle={{ fontWeight: 'bold', fontSize: '10px' }}
                        />
                        <Line type="monotone" dataKey="value" stroke="#F27D26" strokeWidth={2} dot={{ r: 4, fill: '#F27D26' }} />
                      </LineChart>
                    ) : (
                      <PieChart>
                        <Pie
                          data={chartData.data}
                          innerRadius={40}
                          outerRadius={60}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {chartData.data.map((_: any, i: number) => (
                            <Cell key={`cell-${i}`} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            );
          } catch (e) {
            return <p key={index} className="text-red-500 text-xs italic">Error rendering chart</p>;
          }
        } else if (part.startsWith('[IMAGE:')) {
          try {
            const imageData = JSON.parse(part.slice(7, -1));
            return (
              <div key={index} className="my-4 group relative overflow-hidden rounded-2xl shadow-md border border-slate-100">
                <img 
                  src={imageData.url} 
                  alt={imageData.alt} 
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-[10px] font-bold">{imageData.caption || imageData.alt}</p>
                </div>
              </div>
            );
          } catch (e) {
            return <p key={index} className="text-red-500 text-xs italic">Error rendering image</p>;
          }
        }
        return <p key={index} className="text-sm leading-relaxed whitespace-pre-wrap">{part}</p>;
      })}
    </div>
  );
};
