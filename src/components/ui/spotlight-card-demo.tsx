import React from 'react';
import { GlowCard } from "@/components/ui/spotlight-card";
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp, Building2, Award } from 'lucide-react';

export function SpotlightCardDemo() {
  const cards = [
    {
      id: 1,
      title: "PM Mudra Yojana",
      category: "Credit & Micro-Finance",
      amount: "₹10,00,000",
      glowColor: "orange" as const,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
      description: "Collateral-free institutional credit up to ₹10 Lakhs for small micro-enterprises.",
    },
    {
      id: 2,
      title: "PMEGP Subsidies",
      category: "Business & Entrepreneurship",
      amount: "₹50,00,000",
      glowColor: "blue" as const,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      description: "Credit-linked subsidy program for setting up new manufacturing or service units.",
    },
    {
      id: 3,
      title: "Stand-Up India",
      category: "Women & SC/ST",
      amount: "₹1,00,00,000",
      glowColor: "purple" as const,
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80",
      description: "Bank loans between ₹10 Lakhs and ₹1 Crore for greenfield enterprises.",
    }
  ];

  return (
    <div className="w-full min-h-screen py-16 px-6 flex flex-col items-center justify-center bg-[#070e1c] text-white">
      <div className="max-w-4xl text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FFA530] mb-2 block">
          Interactive Spotlight Cards
        </span>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
          Discover Verified Schemes With Dynamic Pointer Glow
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 max-w-6xl w-full">
        {cards.map((card) => (
          <GlowCard
            key={card.id}
            glowColor={card.glowColor}
            size="lg"
            className="text-white overflow-hidden"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="w-full h-36 rounded-xl overflow-hidden mb-4 relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#FFA530] border border-white/10">
                    {card.amount}
                  </span>
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-white/60 mb-1">
                  {card.category}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <button className="mt-4 w-full py-2 px-4 rounded-xl bg-white/10 hover:bg-[#FFA530] hover:text-black border border-white/15 transition-all text-xs font-bold flex items-center justify-center gap-2">
                <span>View Details</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}

export default SpotlightCardDemo;
