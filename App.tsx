
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Dashboard from './components/Dashboard';
import FloatingElements from './components/FloatingElements';
import Challenges from './components/Challenges';
import LunchTracker from './components/LunchTracker';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onStart={() => setActivePage('menu')} />;
      case 'menu':
        return <Menu />;
      case 'challenges':
        return <Challenges />;
      case 'tracker':
        return <LunchTracker />;
      case 'dashboard':
        return <Dashboard />;
      case 'impact':
        return (
          <div className="max-w-7xl mx-auto px-4 py-32 text-center">
            <div className="inline-block p-4 bg-teal-50 rounded-3xl mb-8">
              <span className="text-5xl">🌍</span>
            </div>
            <h1 className="font-glam text-6xl font-bold mb-6 text-[#003537]">School Impact Ledger</h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-2xl font-medium leading-relaxed">
              Since deploying EcoBite, our campus has eliminated 450kg of prep waste and avoided 8,000 single-use plastics. ✨
            </p>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
               <div className="p-16 bg-white rounded-[4rem] tray-border hover:border-[#005c57]/30 transition-all">
                  <h3 className="text-6xl font-black text-[#005c57] mb-4">3.2t</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Carbon Offset</p>
               </div>
               <div className="p-16 bg-white rounded-[4rem] tray-border hover:border-[#005c57]/30 transition-all">
                  <h3 className="text-6xl font-black text-[#005c57] mb-4">12k</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Eco-Meals Served</p>
               </div>
               <div className="p-16 bg-white rounded-[4rem] tray-border hover:border-[#005c57]/30 transition-all">
                  <h3 className="text-6xl font-black text-[#005c57] mb-4">85%</h3>
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Waste Reduction</p>
               </div>
            </div>
          </div>
        );
      default:
        return <Home onStart={() => setActivePage('menu')} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f0fdfa] relative overflow-x-hidden selection:bg-teal-100 selection:text-[#005c57]">
      <FloatingElements />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header activePage={activePage} onNav={setActivePage} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        
        <footer className="bg-white border-t border-teal-50 py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex flex-col items-center justify-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#005c57] rounded-xl flex items-center justify-center text-white shadow-lg">
                <span className="text-xl">🥗</span>
              </div>
              <span className="font-glam text-3xl font-bold text-[#003537]">
                EcoBite
              </span>
            </div>
            <p className="text-gray-400 font-medium max-w-sm mx-auto mb-10">
              Empowering the next generation through sustainable cafeteria technology. Built with teal spirit.
            </p>
            <div className="flex justify-center gap-10">
              <a href="#" className="text-[#005c57] font-bold hover:underline">Guidelines</a>
              <a href="#" className="text-[#005c57] font-bold hover:underline">Sponsorship</a>
              <a href="#" className="text-[#005c57] font-bold hover:underline">Data Impact</a>
            </div>
            <p className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.3em] mt-16">
              © 2025 EcoBite Global • All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
