
import React, { useState, useEffect } from 'react';
import { INVENTORY, WASTE_DATA, ENERGY_DATA } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { Package, Trash2, Zap, AlertTriangle, Lightbulb, RefreshCw, BarChart4 } from 'lucide-react';
import { geminiService } from '../services/gemini';
import SparkleButton from './SparkleButton';

const Dashboard: React.FC = () => {
  const [tips, setTips] = useState<string>('');
  const [loadingTips, setLoadingTips] = useState(false);

  const fetchTips = async () => {
    setLoadingTips(true);
    try {
      const result = await geminiService.getWasteReductionTips(WASTE_DATA);
      setTips(result || "EcoBite suggests keeping it fresh and portion-controlled!");
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingTips(false);
    }
  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="mb-16">
        <h1 className="font-glam text-5xl font-bold mb-4 text-[#003537]">Cafeteria Intel ⚡</h1>
        <p className="text-xl text-gray-500 font-medium">Real-time monitoring of your school's ecological footprint.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        {/* Left Column: Stats & Inventory */}
        <div className="lg:col-span-2 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] tray-border border-l-[10px] border-[#005c57]">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-teal-50 rounded-2xl text-[#005c57]"><Package size={28} /></div>
                <span className="text-xs font-black text-green-600 bg-green-50 px-2 py-1 rounded">+14% Growth</span>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-wider text-[10px] mb-1">Today's Orders</p>
              <h4 className="text-4xl font-black text-[#003537]">1,284</h4>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] tray-border border-l-[10px] border-orange-400">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-orange-50 rounded-2xl text-orange-500"><Trash2 size={28} /></div>
                <span className="text-xs font-black text-orange-600 bg-orange-50 px-2 py-1 rounded">-5% Waste</span>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-wider text-[10px] mb-1">Scrap Rate</p>
              <h4 className="text-4xl font-black text-[#003537]">15.2 kg</h4>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] tray-border border-l-[10px] border-blue-400">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-blue-50 rounded-2xl text-blue-500"><Zap size={28} /></div>
                <span className="text-xs font-black text-blue-600 bg-blue-50 px-2 py-1 rounded">Efficient</span>
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-wider text-[10px] mb-1">Energy Load</p>
              <h4 className="text-4xl font-black text-[#003537]">22.4 kWh</h4>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] tray-border shadow-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#003537]">
              <BarChart4 className="text-[#005c57]" /> Waste Trajectory (kg)
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={WASTE_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', padding: '1rem' }}
                    cursor={{ fill: '#f0fdfa' }}
                  />
                  <Bar dataKey="amount" radius={[12, 12, 0, 0]}>
                    {WASTE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === WASTE_DATA.length - 1 ? '#005c57' : '#00d2c5'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] tray-border shadow-sm">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#003537]">
              <Zap className="text-blue-500" /> Grid Performance
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ENERGY_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 700}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}
                  />
                  <Line type="monotone" dataKey="usage" stroke="#3b82f6" strokeWidth={5} dot={{ r: 8, fill: '#3b82f6', strokeWidth: 4, stroke: '#fff' }} activeDot={{ r: 10 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: AI Tips & Inventory List */}
        <div className="space-y-10">
          <div className="bg-gradient-to-br from-[#005c57] to-[#003537] p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden border-4 border-white/5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-300/10 rounded-full -translate-y-20 translate-x-20 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Lightbulb size={28} className="text-teal-300" /> Smart Bites ✨
                </h3>
                <button onClick={fetchTips} disabled={loadingTips} className="p-2 hover:bg-white/10 rounded-xl transition-all disabled:opacity-50">
                  <RefreshCw size={24} className={loadingTips ? 'animate-spin' : ''} />
                </button>
              </div>
              {loadingTips ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-white/20 rounded w-full"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  <div className="h-4 bg-white/20 rounded w-4/5"></div>
                </div>
              ) : (
                <div className="space-y-6">
                  {tips.split('\n').filter(t => t.trim()).slice(0, 3).map((tip, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl border border-white/10">
                      <span className="text-teal-300 font-black text-xl">0{i+1}</span>
                      <p className="text-teal-50 font-medium leading-relaxed italic text-sm">{tip.replace(/^[0-9.]+\s*/, '')}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] tray-border">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-[#003537]">
              <Package className="text-[#005c57]" /> Stock Levels
            </h3>
            <div className="space-y-4">
              {INVENTORY.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-teal-50/30 rounded-2xl border border-transparent hover:border-[#005c57]/10 transition-all group">
                  <div>
                    <p className="font-bold text-[#003537] text-lg">{item.name}</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.stock} {item.unit} Current</p>
                  </div>
                  <div className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ${
                    item.status === 'Critical' ? 'bg-red-500 text-white animate-pulse' :
                    item.status === 'Low' ? 'bg-orange-400 text-white' :
                    'bg-[#005c57] text-white'
                  }`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
            <SparkleButton className="w-full mt-10 !py-4 shadow-xl">Manage Logistics 🚚</SparkleButton>
          </div>
          
          <div className="bg-orange-50 p-8 rounded-[2rem] border-2 border-orange-100 flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm shrink-0">
              <AlertTriangle size={32} />
            </div>
            <div>
              <p className="font-bold text-[#003537] text-lg leading-tight">Safety Alert</p>
              <p className="text-sm font-medium text-orange-600/70 mt-1">Freezer #4 temp spike detected. Action required.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
