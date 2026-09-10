import React from "react";
import { Search, MapPin, Truck, Plane, Globe, Shield, Sparkles, ArrowRight } from "lucide-react";

export default function HeroBanner({
  searchQuery,
  setSearchQuery,
  onSearch,
  setCurrentScreen,
  setSelectedCategory
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-slate-50 pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-100/80 border border-orange-200 text-[#f95721] px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-xs animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cross-Border Commerce Reimagined</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Buy. Sell. Connect{" "}
            <span className="text-[#f95721] relative inline-block">
              Across Borders.
              <svg className="absolute -bottom-2 left-0 w-full text-orange-400 opacity-60" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C40 2 160 2 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A global marketplace for local sellers and worldwide buyers. Escrow protected, zero-border trade with verified quality.
          </p>

          {/* Hero Search Box */}
          <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
            >
              <div className="relative flex-1 flex items-center pl-3">
                <Search className="w-5 h-5 text-slate-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, cars, electronics, real estate..."
                  className="w-full py-3 px-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none"
                />
              </div>

              {/* Quick Filters inside Search */}
              <div className="flex items-center space-x-1.5 px-2 border-t sm:border-t-0 sm:border-l border-slate-200 pt-2 sm:pt-0">
                <div className="flex items-center space-x-1 text-xs text-slate-600 bg-slate-100 py-2 px-2.5 rounded-lg font-medium whitespace-nowrap">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>All Regions</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-slate-600 bg-slate-100 py-2 px-2.5 rounded-lg font-medium whitespace-nowrap">
                  <Truck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Worldwide</span>
                </div>
              </div>

              {/* Search CTA */}
              <button
                type="submit"
                className="bg-[#f95721] hover:bg-[#e04612] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md shadow-orange-500/30 flex items-center justify-center space-x-2 transition-transform active:scale-95 cursor-pointer"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Visual Cards Row matching the mockup illustrations */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Card 1: Logistics / Global Shipping */}
          <div
            onClick={() => {
              setSelectedCategory("vehicles");
              setCurrentScreen("listing");
            }}
            className="group relative h-44 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-white/60 hover:shadow-xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80"
              alt="Global Shipping & Logistics"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider flex items-center space-x-1">
                <Plane className="w-3 h-3" />
                <span>Air & Ocean</span>
              </span>
              <h4 className="text-white font-bold text-sm mt-0.5">Cross-Border Freight</h4>
              <p className="text-[11px] text-slate-300">Fast tracking to 120+ ports</p>
            </div>
          </div>

          {/* Card 2: Consumer Tech */}
          <div
            onClick={() => {
              setSelectedCategory("mobiles");
              setCurrentScreen("listing");
            }}
            className="group relative h-44 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-white/60 hover:shadow-xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"
              alt="Flagship Mobiles"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Top Verified</span>
              <h4 className="text-white font-bold text-sm mt-0.5">Flagship Mobiles</h4>
              <p className="text-[11px] text-slate-300">Up to 35% below retail</p>
            </div>
          </div>

          {/* Card 3: Home & Modern Living */}
          <div
            onClick={() => {
              setSelectedCategory("furniture");
              setCurrentScreen("listing");
            }}
            className="group relative h-44 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-white/60 hover:shadow-xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80"
              alt="Designer Furniture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Artisan Decor</span>
              <h4 className="text-white font-bold text-sm mt-0.5">Modern Furniture</h4>
              <p className="text-[11px] text-slate-300">Direct from workshops</p>
            </div>
          </div>

          {/* Card 4: Audio & Gadgets */}
          <div
            onClick={() => {
              setSelectedCategory("electronics");
              setCurrentScreen("listing");
            }}
            className="group relative h-44 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-white/60 hover:shadow-xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"
              alt="Premium Headphones"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-4 flex flex-col justify-end">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider">Escrow Locked</span>
              <h4 className="text-white font-bold text-sm mt-0.5">Hi-Fi Audio & Laptops</h4>
              <p className="text-[11px] text-slate-300">Global warranty valid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
