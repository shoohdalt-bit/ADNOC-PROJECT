
import React from 'react';
import SparkleButton from './SparkleButton';
import { Leaf, Recycle, Zap, BarChart3, Heart, Utensils, Sparkles, PieChart, UserCheck, Trophy, Box } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-[2rem] tray-border hover:border-[#005c57]/30 transition-all hover:-translate-y-2 group">
    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-[#005c57] mb-6 group-hover:bg-[#005c57] group-hover:text-white transition-colors duration-500">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-bold text-[#003537] mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed font-medium">{desc}</p>
  </div>
);

const Home: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-24 pb-32 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-6 py-2 bg-teal-100 text-[#005c57] rounded-full font-bold text-sm mb-8 animate-pulse border border-[#005c57]/20">
            🥗 SERVING SUSTAINABILITY DAILY 🍎
          </div>
          <h1 className="font-glam text-6xl md:text-8xl font-bold mb-10 leading-[1.1] text-[#003537]">
            Clean Plates, <span className="gold-shimmer">Green Planet.</span>
          </h1>
          <p className="text-2xl text-gray-500 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
            EcoBite is the cool, fun way to manage your school's food impact. Reduce waste, track energy, and level up student health.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <SparkleButton onClick={onStart} className="text-lg px-10 py-4">
              Explore the Menu 🥦
            </SparkleButton>
            <button className="px-10 py-4 rounded-2xl font-bold text-[#005c57] border-2 border-teal-100 hover:bg-teal-50 transition-all shadow-md">
              Start a Challenge 🏆
            </button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-28 bg-[#003537] rounded-[4rem] text-white mx-4 my-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=800&auto=format&fit=crop" 
                alt="Sustainable School Kitchen" 
                className="rounded-[3rem] shadow-2xl relative z-10 border-8 border-white/5"
              />
              <div className="absolute -bottom-10 -right-4 p-8 bg-[#005c57] rounded-3xl shadow-2xl z-20 border-4 border-white/10">
                <p className="text-white font-black text-2xl flex items-center gap-3">
                  <Heart size={28} fill="currentColor" className="text-teal-300" /> Eco-Certified
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-glam text-5xl font-bold mb-8 text-teal-300">Our Cool Mission 🚀</h2>
              <p className="text-xl text-teal-100 mb-10 leading-relaxed font-medium">
                We're not just a platform; we're a revolution. We're turning every school tray into a statement for the environment. By combining smart IoT and student-first design, we make sustainability the coolest thing in school.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Waste Audit PRO",
                  "Smart Tray Tech",
                  "Nutri-Glow Menus",
                  "AI Health Matching"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300">
                      <Utensils size={20} />
                    </div>
                    <span className="font-bold text-teal-50">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="font-glam text-5xl font-bold mb-6 text-[#003537]">Next-Gen Cafeteria Tech ⚡</h2>
          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">Smarter operations. Better nutrition. Zero compromise on fun.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          <FeatureCard 
            icon={BarChart3} 
            title="Demand Predictor" 
            desc="Our AI learns exactly what students love, ensuring zero waste from over-ordering."
          />
          <FeatureCard 
            icon={Utensils} 
            title="Digital Tray" 
            desc="Students customize meals via the app, reducing prep time and increasing satisfaction."
          />
          <FeatureCard 
            icon={Recycle} 
            title="Eco-Ledger" 
            desc="Track every gram of waste and every plastic fork avoided in a live dashboard."
          />
          <FeatureCard 
            icon={Trophy} 
            title="Gamified Health" 
            desc="Participate in weekly quests, earn points, and climb the leaderboard for rewards."
          />
          <FeatureCard 
            icon={Box} 
            title="Lunchbox Tracker" 
            desc="Measure the sustainability of your packed lunch and earn Zero-Waste Champion badges."
          />
          <FeatureCard 
            icon={Zap} 
            title="Kitchen Pulse" 
            desc="Monitor freezers and ovens in real-time. Optimize energy, save costs."
          />
          <FeatureCard 
            icon={PieChart} 
            title="Impact Snap" 
            desc="Beautiful, automated reports that prove your school is an environmental leader."
          />
          <FeatureCard 
            icon={UserCheck} 
            title="AI Health Sync" 
            desc="Personalized meal recommendations based on student age, height, and weight profile."
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#005c57] text-white text-center rounded-t-[5rem] mx-2">
        <h2 className="font-glam text-5xl font-bold mb-8">Make your cafeteria awesome. ✨</h2>
        <p className="mb-14 text-teal-100 max-w-2xl mx-auto text-xl font-medium">Be the school everyone talks about. Lead with sustainability and style.</p>
        <SparkleButton variant="secondary" onClick={onStart} className="text-lg px-12 py-5 shadow-2xl">
          Get Started Today 💎
        </SparkleButton>
      </section>
    </div>
  );
};

export default Home;
