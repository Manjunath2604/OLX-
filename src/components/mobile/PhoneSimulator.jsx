import React, { useState } from "react";
import {
  Home,
  MessageSquare,
  PlusCircle,
  ShoppingBag,
  User,
  Search,
  MapPin,
  Star,
  ChevronLeft,
  Heart,
  Share2,
  ShieldCheck,
  Globe
} from "lucide-react";
import { products } from "../../data/products";

export default function PhoneSimulator({ onSelectProduct }) {
  const [mobileTab, setMobileTab] = useState("home");
  const [selectedMobileProduct, setSelectedMobileProduct] = useState(null);

  const featured = products.slice(0, 4);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 py-6">
      {/* Phone 1: Mobile Marketplace Home Feed */}
      <div className="w-[300px] h-[610px] bg-slate-900 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800 relative flex flex-col">
        {/* Dynamic Island / Speaker Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 ml-auto mr-2"></div>
        </div>

        {/* Screen Bezel Content */}
        <div className="bg-slate-50 w-full h-full rounded-[34px] overflow-hidden flex flex-col relative text-slate-800 text-xs">
          {/* Status Bar */}
          <div className="h-9 pt-2 px-6 flex justify-between items-center text-[10px] font-bold text-slate-900 bg-white">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <span>5G</span>
              <span className="w-4 h-2 border border-slate-900 rounded-xs inline-block relative after:w-2 after:h-1.5 after:bg-slate-900 after:absolute after:top-0 after:left-0"></span>
            </div>
          </div>

          {/* App Header */}
          <div className="bg-white px-3.5 py-2.5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <div className="w-6 h-6 rounded-md bg-[#f95721] flex items-center justify-center text-white">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="font-black text-sm text-slate-900">
                Bazaar<span className="text-[#f95721]">Go</span>
              </span>
            </div>

            <div className="flex items-center space-x-2 text-slate-500">
              <Globe className="w-4 h-4" />
              <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Search Box */}
          <div className="p-3 bg-white border-b border-slate-100">
            <div className="bg-slate-100 rounded-xl px-3 py-1.5 flex items-center space-x-2 text-slate-400 text-xs">
              <Search className="w-3.5 h-3.5" />
              <span>Search products, cars, tech...</span>
            </div>
          </div>

          {/* Scrollable Feed */}
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {/* Category Quick Pills */}
            <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              {["Cars", "Mobiles", "Tech", "Living", "Fashion"].map((cat, i) => (
                <span
                  key={cat}
                  className={`px-2.5 py-1 rounded-full font-semibold whitespace-nowrap ${
                    i === 0 ? "bg-[#f95721] text-white" : "bg-white border border-slate-200 text-slate-700"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Featured for You */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-extrabold text-slate-900 text-xs">Featured for You</span>
                <span className="text-[10px] text-[#f95721] font-bold">See All</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {featured.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMobileProduct(item)}
                    className="bg-white rounded-xl border border-slate-200 p-2 shadow-2xs cursor-pointer hover:border-orange-300"
                  >
                    <div className="h-20 rounded-lg bg-slate-100 overflow-hidden mb-1.5">
                      <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <h6 className="font-bold text-[11px] text-slate-900 truncate">{item.title}</h6>
                    <span className="font-extrabold text-[#f95721] text-xs">${item.price}</span>
                    <div className="flex items-center text-[9px] text-slate-400 mt-0.5">
                      <MapPin className="w-2.5 h-2.5 mr-0.5" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Escrow banner on mobile */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-3 rounded-xl shadow-xs">
              <span className="text-[10px] font-black uppercase tracking-wider block">Global Protection</span>
              <p className="text-[10px] mt-0.5 font-medium leading-tight">Escrow holds your payment safe till delivery.</p>
            </div>
          </div>

          {/* Bottom Mobile Tab Bar */}
          <div className="h-14 bg-white border-t border-slate-200 flex items-center justify-around text-slate-400">
            <button
              onClick={() => setMobileTab("home")}
              className={`flex flex-col items-center cursor-pointer ${
                mobileTab === "home" ? "text-[#f95721]" : "hover:text-slate-600"
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="text-[9px] font-bold mt-0.5">Home</span>
            </button>

            <button
              onClick={() => setMobileTab("messages")}
              className={`flex flex-col items-center cursor-pointer ${
                mobileTab === "messages" ? "text-[#f95721]" : "hover:text-slate-600"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-[9px] font-bold mt-0.5">Messages</span>
            </button>

            <button
              onClick={() => alert("Mobile camera opening for listing instant photo capture...")}
              className="w-10 h-10 -mt-4 bg-[#f95721] text-white rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40 hover:scale-105 transition-transform cursor-pointer"
            >
              <PlusCircle className="w-6 h-6" />
            </button>

            <button
              onClick={() => setMobileTab("orders")}
              className={`flex flex-col items-center cursor-pointer ${
                mobileTab === "orders" ? "text-[#f95721]" : "hover:text-slate-600"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-[9px] font-bold mt-0.5">Orders</span>
            </button>

            <button
              onClick={() => setMobileTab("profile")}
              className={`flex flex-col items-center cursor-pointer ${
                mobileTab === "profile" ? "text-[#f95721]" : "hover:text-slate-600"
              }`}
            >
              <User className="w-4 h-4" />
              <span className="text-[9px] font-bold mt-0.5">Profile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Phone 2: Mobile Product Detail Screen */}
      <div className="w-[300px] h-[610px] bg-slate-900 rounded-[44px] p-3 shadow-2xl border-4 border-slate-800 relative hidden sm:flex flex-col">
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-800 ml-auto mr-2"></div>
        </div>

        {/* Screen Bezel Content */}
        <div className="bg-white w-full h-full rounded-[34px] overflow-hidden flex flex-col relative text-slate-800 text-xs">
          {/* Status Bar */}
          <div className="h-9 pt-2 px-6 flex justify-between items-center text-[10px] font-bold text-slate-900 bg-white">
            <span>9:41</span>
            <div className="flex items-center space-x-1">
              <span>5G</span>
              <span className="w-4 h-2 border border-slate-900 rounded-xs inline-block"></span>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="px-3.5 py-2 flex items-center justify-between border-b border-slate-100">
            <button className="p-1 text-slate-700 hover:text-[#f95721]">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-bold text-xs text-slate-900">Item Detail</span>
            <div className="flex items-center space-x-2 text-slate-700">
              <Share2 className="w-4 h-4" />
              <Heart className="w-4 h-4" />
            </div>
          </div>

          {/* Product Image */}
          <div className="h-48 bg-slate-100 relative">
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80"
              alt="iPhone 15 Pro"
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-2 right-2 bg-slate-900/75 text-white text-[10px] px-2 py-0.5 rounded-full">
              1/4
            </span>
          </div>

          {/* Content */}
          <div className="p-3.5 flex-1 overflow-y-auto space-y-2.5">
            <div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                Verified Seller
              </span>
              <h5 className="font-black text-sm text-slate-900 mt-1">iPhone 15 Pro 256GB</h5>
              <div className="flex items-baseline space-x-2 mt-0.5">
                <span className="text-base font-black text-slate-900">$780</span>
                <span className="text-[10px] text-slate-400 line-through">$999</span>
                <span className="text-[10px] text-slate-500 font-medium">(approx ₹64,800)</span>
              </div>
            </div>

            {/* Seller Pill */}
            <div className="bg-slate-50 p-2 rounded-xl flex items-center justify-between border border-slate-200">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#f95721] font-bold flex items-center justify-center text-xs">
                  T
                </div>
                <div>
                  <h6 className="font-bold text-[11px] text-slate-900">TechWorld Store</h6>
                  <span className="text-[9px] text-slate-500">Singapore • 4.9 Rating</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#f95721]">Follow</span>
            </div>

            {/* Escrow badge */}
            <div className="flex items-center space-x-1.5 text-[10px] text-slate-600 bg-orange-50/60 p-2 rounded-xl border border-orange-200">
              <ShieldCheck className="w-3.5 h-3.5 text-[#f95721] shrink-0" />
              <span>Escrow Protected: Money held until delivery confirmed</span>
            </div>
          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <button className="flex-1 bg-[#f95721] text-white font-bold py-2.5 rounded-xl text-xs shadow-md shadow-orange-500/25">
              Buy Now
            </button>
            <button className="p-2.5 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200">
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
