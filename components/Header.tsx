
import React from 'react';
import { Sparkles, Leaf, Utensils, ClipboardList, Activity, Trophy, Box } from 'lucide-react';

interface HeaderProps {
  onNav: (page: string) => void;
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ onNav, activePage }) => {
  const navItems = [
    { id: 'home', label: 'Lobby', icon: Sparkles },
    { id: 'menu', label: 'Lunch Menu', icon: Utensils },
    { id: 'challenges', label: 'Quests', icon: Trophy },
    { id: 'tracker', label: 'LunchBox', icon: Box },
    { id: 'dashboard', label: 'Stats Hub', icon: Activity },
    { id: 'impact', label: 'Eco Impact', icon: ClipboardList },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNav('home')}
          >
            <div className="w-12 h-12 bg-[#005c57] rounded-xl flex items-center justify-center text-white mr-3 shadow-teal-900/20 shadow-xl group-hover:rotate-6 transition-transform">
              <Leaf size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-glam text-2xl font-bold text-[#003537] leading-none">
                EcoBite
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#005c57]">Sustainable School</span>
            </div>
          </div>
          
          <nav className="hidden xl:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNav(item.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all ${
                  activePage === item.id 
                    ? 'text-[#005c57] bg-teal-50 font-bold shadow-inner' 
                    : 'text-gray-500 hover:text-[#005c57] hover:bg-gray-50'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
             <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Balance</span>
                <span className="text-[#005c57] font-black">2,450 pts ✨</span>
             </div>
            <button className="bg-[#003537] text-white px-5 py-2.5 rounded-xl font-bold hover:shadow-lg transition-all flex items-center gap-2 text-sm">
              Cafeteria Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
