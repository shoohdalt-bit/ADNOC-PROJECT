
import React, { useState } from 'react';
import { MEALS } from '../constants';
import { ShoppingCart, Star, Utensils, Heart, Activity, BrainCircuit } from 'lucide-react';
import { geminiService } from '../services/gemini';
import SparkleButton from './SparkleButton';
import { UserHealthData } from '../types';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [cart, setCart] = useState<string[]>([]);
  const [healthFact, setHealthFact] = useState<string | null>(null);
  const [loadingFact, setLoadingFact] = useState(false);

  // Recommendation State
  const [healthData, setHealthData] = useState<UserHealthData>({ age: 15, height: 165, weight: 60 });
  const [aiRec, setAiRec] = useState<{ mealId: string, explanation: string } | null>(null);
  const [loadingRec, setLoadingRec] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const categories = ['All', 'Vegan', 'Vegetarian', 'High-Protein'];
  const filteredMeals = filter === 'All' ? MEALS : MEALS.filter(m => m.category === filter);

  const showFact = async (mealName: string) => {
    setLoadingFact(true);
    try {
      const fact = await geminiService.getHealthFact(mealName);
      setHealthFact(fact || null);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingFact(false);
    }
  };

  const getRecommendation = async () => {
    setLoadingRec(true);
    try {
      const rec = await geminiService.getPersonalizedRecommendation(healthData, MEALS);
      setAiRec(rec);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingRec(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h1 className="font-glam text-5xl font-bold mb-4 text-[#003537]">School Lunchroom 🍱</h1>
          <p className="text-xl text-gray-500 font-medium">Healthy salmon, lean chicken, and vibrant greens for peak student performance.</p>
        </div>
        
        <div className="flex flex-wrap gap-3 bg-white p-2 rounded-2xl border-2 border-teal-50 shadow-sm">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all ${
                filter === cat ? 'bg-[#005c57] text-white shadow-lg' : 'bg-transparent text-gray-500 hover:text-[#005c57]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* AI Personalization Section */}
      <div className="mb-16 bg-[#003537] rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/20 text-teal-300 rounded-full text-sm font-bold mb-6">
              <BrainCircuit size={16} /> NEW: AI Nutri-Scan
            </div>
            <h2 className="text-4xl font-bold mb-4">Personalized Recommendations 🌟</h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              Input your details and let our AI suggest the best meal for your growth, energy, and health goals.
            </p>
            {!showForm ? (
              <SparkleButton onClick={() => setShowForm(true)} className="!bg-teal-500 !text-white hover:!bg-teal-400">
                Unlock My Menu 🚀
              </SparkleButton>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-teal-300 mb-2">Age</label>
                  <input 
                    type="number" 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                    value={healthData.age}
                    onChange={(e) => setHealthData({...healthData, age: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-teal-300 mb-2">Height (cm)</label>
                  <input 
                    type="number" 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                    value={healthData.height}
                    onChange={(e) => setHealthData({...healthData, height: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-teal-300 mb-2">Weight (kg)</label>
                  <input 
                    type="number" 
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-400"
                    value={healthData.weight}
                    onChange={(e) => setHealthData({...healthData, weight: parseInt(e.target.value) || 0})}
                  />
                </div>
                <div className="col-span-3 mt-2">
                  <button 
                    onClick={getRecommendation}
                    disabled={loadingRec}
                    className="w-full py-4 bg-teal-500 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-teal-400 transition-colors disabled:opacity-50"
                  >
                    {loadingRec ? 'Analyzing Profile...' : 'Get AI Recommendation ✨'}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full">
            {aiRec ? (
              <div className="bg-white rounded-[2.5rem] p-8 text-[#003537] shadow-xl border-4 border-teal-400 animate-in fade-in zoom-in duration-500">
                <div className="flex items-center gap-3 mb-4 text-[#005c57]">
                  <Star className="fill-current" size={24} />
                  <span className="font-black uppercase tracking-wider text-sm">Perfect Match Found</span>
                </div>
                <h3 className="text-3xl font-black mb-3">
                  {MEALS.find(m => m.id === aiRec.mealId)?.name || 'Health Choice'}
                </h3>
                <p className="text-gray-600 font-medium italic mb-6 leading-relaxed">
                  "{aiRec.explanation}"
                </p>
                <div className="flex items-center justify-between p-4 bg-teal-50 rounded-2xl">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Health Score</p>
                      <p className="font-black text-[#005c57]">98/100</p>
                    </div>
                    <div className="text-center border-l border-teal-200 pl-4">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Growth Focus</p>
                      <p className="font-black text-[#005c57]">High</p>
                    </div>
                  </div>
                  <SparkleButton className="!py-2 !text-xs" onClick={() => {
                    const id = aiRec.mealId;
                    if (id) setCart([...cart, id]);
                  }}>Add to Tray</SparkleButton>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-[3rem]">
                <Activity className="text-teal-300/30 mb-4" size={48} />
                <p className="text-teal-100/50 font-bold italic">Enter data to see your AI-tailored menu</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {healthFact && (
        <div className="mb-12 p-8 bg-teal-50 border-2 border-[#005c57]/20 rounded-3xl relative animate-in fade-in zoom-in duration-500">
          <button onClick={() => setHealthFact(null)} className="absolute top-6 right-6 text-[#005c57] hover:bg-white p-2 rounded-full transition-all">✕</button>
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#005c57] shadow-sm">
              <Star className="animate-spin-slow" />
            </div>
            <p className="text-[#003537] text-lg font-bold leading-relaxed">{healthFact}</p>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {filteredMeals.map(meal => {
          const isRec = aiRec?.mealId === meal.id;
          return (
            <div 
              key={meal.id} 
              className={`bg-white rounded-[2.5rem] overflow-hidden tray-border transition-all hover:shadow-2xl flex flex-col group ${isRec ? 'ring-4 ring-teal-400 shadow-teal-100 scale-[1.02]' : ''}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img src={meal.image} alt={meal.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 bg-[#003537]/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-teal-300">
                  {meal.category}
                </div>
                {isRec && (
                   <div className="absolute top-6 right-20 bg-teal-500 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg animate-pulse">
                     AI Recommendation
                   </div>
                )}
                <button 
                  onClick={() => showFact(meal.name)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#005c57] shadow-lg hover:bg-[#005c57] hover:text-white transition-all transform hover:rotate-12"
                  title="Get Nutri-Fact"
                >
                  {loadingFact ? '...' : '✨'}
                </button>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-[#003537] leading-tight">{meal.name}</h3>
                  <span className="text-[#005c57] font-black text-xl">${meal.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 font-medium mb-4 line-clamp-2 leading-relaxed">{meal.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {meal.ingredients.slice(0, 3).map(ing => (
                    <span key={ing} className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-md">#{ing}</span>
                  ))}
                </div>
                
                <div className="mt-auto flex gap-3">
                  <SparkleButton 
                    className="flex-grow !py-3"
                    onClick={() => setCart([...cart, meal.id])}
                  >
                    <ShoppingCart size={20} /> Order Now
                  </SparkleButton>
                  <button className="w-12 h-12 border-2 border-teal-50 rounded-2xl flex items-center justify-center text-teal-100 hover:text-[#005c57] hover:border-[#005c57]/20 transition-all">
                    <Heart size={24} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#003537] px-10 py-5 rounded-3xl shadow-2xl flex items-center gap-8 z-50 animate-bounce text-white border-2 border-teal-500/20">
          <div className="flex items-center gap-3 font-bold">
            <div className="w-10 h-10 bg-[#005c57] rounded-xl flex items-center justify-center">
               <Utensils size={20} />
            </div>
            <span>{cart.length} Healthy selections on your tray</span>
          </div>
          <SparkleButton variant="primary" className="!py-2 !bg-teal-500 hover:!bg-teal-400">Checkout Now 🛒</SparkleButton>
        </div>
      )}
    </div>
  );
};

export default Menu;
