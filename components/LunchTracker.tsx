
import React, { useState, useMemo } from 'react';
import { Box, Leaf, RefreshCcw, ShieldCheck, Zap } from 'lucide-react';
import SparkleButton from './SparkleButton';

const ECO_ITEMS = [
  { id: 'box', label: 'Reusable Lunchbox', score: 40, icon: '🍱' },
  { id: 'water', label: 'Refillable Bottle', score: 30, icon: '🥤' },
  { id: 'fork', label: 'Metal Utensils', score: 15, icon: '🍴' },
  { id: 'napkin', label: 'Cloth Napkin', score: 10, icon: '🧺' },
  { id: 'wrap', label: 'Bee’s Wax Wrap', score: 15, icon: '🐝' },
  { id: 'compost', label: 'Compostable Bag', score: 10, icon: '🍂' },
];

const LunchTracker: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [saved, setSaved] = useState(false);

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(i => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const totalScore = useMemo(() => {
    return selectedItems.reduce((acc, id) => {
      const item = ECO_ITEMS.find(i => i.id === id);
      return acc + (item?.score || 0);
    }, 0);
  }, [selectedItems]);

  const getRank = () => {
    if (totalScore >= 100) return { label: 'Eco-Champion 👑', color: 'text-[#005c57]' };
    if (totalScore >= 70) return { label: 'Sustainability Hero 🌟', color: 'text-teal-500' };
    if (totalScore >= 40) return { label: 'Green Guardian 🛡️', color: 'text-green-500' };
    return { label: 'Eco-Beginner 🌱', color: 'text-gray-400' };
  };

  const rank = getRank();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div>
            <h1 className="font-glam text-5xl font-bold mb-4 text-[#003537]">Lunchbox Audit 🍱</h1>
            <p className="text-xl text-gray-500 font-medium">Track your personal impact score for every meal you pack.</p>
          </div>

          <div className="bg-white rounded-[3rem] p-10 tray-border shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-[#003537] flex items-center gap-3">
              <Box className="text-[#005c57]" /> Today's Contents
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ECO_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-6 rounded-[2rem] border-2 transition-all flex items-center gap-4 text-left ${
                    selectedItems.includes(item.id) 
                      ? 'bg-teal-50 border-[#005c57] shadow-inner scale-[0.98]' 
                      : 'bg-white border-gray-100 hover:border-teal-200'
                  }`}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <p className={`font-bold text-sm ${selectedItems.includes(item.id) ? 'text-[#003537]' : 'text-gray-500'}`}>
                      {item.label}
                    </p>
                    <p className="text-[10px] font-black uppercase text-[#005c57]">+{item.score} Eco-Points</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-gradient-to-br from-[#005c57] to-[#003537] rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl -translate-y-20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold uppercase tracking-[0.2em] text-teal-300 mb-10">Daily Eco Score</h2>
              <div className="relative inline-flex items-center justify-center w-56 h-56 rounded-full border-8 border-teal-500/20 mb-8">
                 <div className="flex flex-col items-center">
                    <span className="text-7xl font-black">{totalScore}</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-teal-300">Impact XP</span>
                 </div>
                 {/* Progress Ring Simulation */}
                 <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-teal-400" strokeDasharray={`${totalScore * 2.89}, 1000`} />
                 </svg>
              </div>
              <p className={`text-2xl font-black mb-12 ${rank.color}`}>{rank.label}</p>
              
              <div className="grid grid-cols-2 gap-6 text-left">
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-teal-300 mb-1">Plastic Avoided</p>
                    <p className="font-bold text-lg">{selectedItems.length * 25}g</p>
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-teal-300 mb-1">Eco Rating</p>
                    <p className="font-bold text-lg">{selectedItems.length > 4 ? 'A+' : 'B-'}</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] tray-border">
             <h3 className="text-2xl font-bold mb-6 text-[#003537] flex items-center gap-3">
               <ShieldCheck className="text-teal-500" /> Unlockable Badges
             </h3>
             <div className="flex flex-wrap gap-4">
               {[
                 { label: 'Zero-Waste Champion', icon: '🏆', unlocked: totalScore >= 100 },
                 { label: 'Plastic Slayer', icon: '⚔️', unlocked: selectedItems.includes('fork') },
                 { label: 'Hydration Hero', icon: '💧', unlocked: selectedItems.includes('water') },
                 { label: 'Compost King', icon: '🍂', unlocked: selectedItems.includes('compost') },
               ].map((badge, i) => (
                 <div key={i} className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all ${
                   badge.unlocked ? 'bg-teal-50 border-teal-200' : 'bg-gray-50 border-gray-100 opacity-40 grayscale'
                 }`}>
                   <span className="text-2xl">{badge.icon}</span>
                   <span className="text-xs font-bold text-[#003537]">{badge.label}</span>
                 </div>
               ))}
             </div>
             <SparkleButton 
                className="w-full mt-10" 
                onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
             >
               {saved ? 'Progress Saved! ✨' : 'Log Daily Lunch Impact 🚀'}
             </SparkleButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunchTracker;
