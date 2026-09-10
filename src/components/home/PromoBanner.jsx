import React from "react";
import { ArrowRight, Globe, Store, Users } from "lucide-react";

export default function PromoBanner({ setCurrentScreen }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl">
        {/* Background graphic elements */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left image of merchant packing */}
          <div className="md:col-span-5 h-64 md:h-full min-h-[260px] relative">
            <img
              src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80"
              alt="Local seller packaging goods for global export"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-slate-900/90 md:to-slate-900"></div>
            
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center space-x-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>180,000+ Active Exporters</span>
            </div>
          </div>

          {/* Right text content */}
          <div className="md:col-span-7 p-6 sm:p-10 md:p-12 relative">
            <div className="inline-flex items-center space-x-2 text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Store className="w-4 h-4" />
              <span>Seller Empowerment Initiative</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
              From Local Businesses <br className="hidden sm:inline" />to Global Customers
            </h3>

            <p className="mt-3 text-slate-300 text-sm max-w-xl leading-relaxed">
              Empowering communities through seamless borderless trade. Sell your authentic crafts, electronics, or vehicles to buyers across 120+ countries with automated customs and instant escrow payouts.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setCurrentScreen("dashboard")}
                className="bg-[#f95721] hover:bg-[#e04612] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md shadow-orange-500/30 flex items-center space-x-2 transition-all cursor-pointer"
              >
                <span>Learn More & Sell</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setCurrentScreen("listing")}
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold text-sm border border-white/20 transition-all cursor-pointer"
              >
                Explore Marketplace
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
