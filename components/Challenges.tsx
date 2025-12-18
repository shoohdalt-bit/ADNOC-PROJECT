
import React, { useState } from 'react';
import { CHALLENGES, LEADERBOARD, REWARDS } from '../constants';
import { Trophy, Star, TrendingUp, ShoppingBag, CheckCircle2 } from 'lucide-react';
import SparkleButton from './SparkleButton';

const Challenges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quests' | 'board' | 'shop'>('quests');
  const [joined, setJoined] = useState<string[]>([]);

  const handleJoin = (id: string) => {
    if (!joined.includes(id)) setJoined([...joined, id]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="font-glam text-5xl md:text-6xl font-bold mb-6 text-[#003537]">Gamer Mode: Activated 🎮</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">Earn rewards for saving the planet and choosing healthy fuel.</p>
      </div>

      <div className="flex justify-center gap-4 mb-16">
        {[
          { id: 'quests', label: 'Active Quests', icon: Trophy },
          { id: 'board', label: 'Leaderboard', icon: TrendingUp },
          { id: 'shop', label: 'Eco-Store', icon: ShoppingBag },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${
              activeTab === tab.id ? 'bg-[#005c57] text-white shadow-xl scale-105' : 'bg-white text-gray-400 hover:text-[#005c57] border border-teal-50'
            }`}
          >
            <tab.icon size={20} />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'quests' && (
        <div className="grid md:grid-cols-2 gap-8">
          {CHALLENGES.map(challenge => (
            <div key={challenge.id} className="bg-white rounded-[3rem] p-8 tray-border relative overflow-hidden group">
              <div className="flex justify-between items-start relative z-10">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm">
                  {challenge.icon}
                </div>
                <div className="text-right">
                  <p className="text-[#005c57] font-black text-2xl">+{challenge.points}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{challenge.category} XP</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#003537] mb-3">{challenge.title}</h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed">{challenge.description}</p>
              
              <div className="flex items-center justify-between pt-6 border-t border-teal-50">
                <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">{challenge.deadline}</span>
                {joined.includes(challenge.id) ? (
                  <div className="flex items-center gap-2 text-[#005c57] font-bold">
                    <CheckCircle2 size={20} /> Quest Joined
                  </div>
                ) : (
                  <SparkleButton onClick={() => handleJoin(challenge.id)}>Start Quest 🚀</SparkleButton>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'board' && (
        <div className="bg-white rounded-[3rem] tray-border overflow-hidden max-w-3xl mx-auto shadow-2xl">
          <div className="bg-[#003537] p-8 text-white flex justify-between items-center">
             <h3 className="text-2xl font-bold flex items-center gap-3"><Trophy className="text-teal-400" /> Top Eco-Champions</h3>
             <span className="text-teal-300 font-bold uppercase tracking-widest text-xs">Season 1 • Spring</span>
          </div>
          <div className="divide-y divide-teal-50">
            {LEADERBOARD.map((user) => (
              <div key={user.rank} className="flex items-center justify-between p-8 hover:bg-teal-50/30 transition-all group">
                <div className="flex items-center gap-8">
                  <span className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${
                    user.rank === 1 ? 'bg-teal-500 text-white shadow-lg' : 'text-gray-400'
                  }`}>
                    {user.rank}
                  </span>
                  <div>
                    <p className="font-bold text-[#003537] text-xl flex items-center gap-2">
                      {user.name} <span className="text-2xl">{user.badge}</span>
                    </p>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Certified Sustainability Expert</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[#005c57] font-black text-2xl">{user.points.toLocaleString()}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">Points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'shop' && (
        <div className="grid md:grid-cols-3 gap-10">
          {REWARDS.map(reward => (
            <div key={reward.id} className="bg-white rounded-[3rem] tray-border overflow-hidden p-8 text-center group transition-all hover:shadow-2xl">
               <div className="w-full h-48 bg-teal-50 rounded-[2rem] mb-6 overflow-hidden">
                 <img src={reward.image} alt={reward.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
               </div>
               <h3 className="text-xl font-bold text-[#003537] mb-2">{reward.name}</h3>
               <p className="text-[#005c57] font-black text-2xl mb-8">{reward.cost.toLocaleString()} pts</p>
               <SparkleButton variant="secondary" className="w-full">Redeem Now 💎</SparkleButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Challenges;
