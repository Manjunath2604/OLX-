import React from "react";
import { Search, Bell, ChevronDown, ExternalLink } from "lucide-react";

export default function VendorHeader({ setCurrentScreen, currentUser }) {
  const user = currentUser || {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    badge: "Verified Merchant"
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between gap-4">
      {/* Search Input */}
      <div className="relative max-w-md w-full">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-[#f95721]"
        />
      </div>

      {/* Right User Actions */}
      <div className="flex items-center space-x-4">
        {/* Return to Marketplace link */}
        <button
          onClick={() => setCurrentScreen("home")}
          className="text-xs font-semibold text-slate-600 hover:text-[#f95721] flex items-center space-x-1 cursor-pointer"
        >
          <span>Storefront</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>

        {/* Demo Switch User link */}
        <button
          onClick={() => setCurrentScreen("login")}
          className="text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200 cursor-pointer hidden sm:block"
        >
          Switch Demo User
        </button>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 relative cursor-pointer">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#f95721] border-2 border-white"></span>
          </button>
        </div>

        {/* Profile Pill */}
        <div
          onClick={() => setCurrentScreen("login")}
          className="flex items-center space-x-3 pl-3 border-l border-slate-200 cursor-pointer hover:opacity-80"
          title="Click to switch or view account"
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-9 h-9 rounded-full object-cover border border-slate-200"
          />
          <div className="hidden sm:block text-left">
            <h5 className="text-xs font-bold text-slate-900 leading-tight">{user.name}</h5>
            <span className="text-[10px] text-[#f95721] font-semibold">{user.badge || "Verified Merchant"}</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
        </div>
      </div>
    </header>
  );
}
