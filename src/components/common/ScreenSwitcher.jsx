import React from "react";
import {
  Home,
  Grid,
  LayoutDashboard,
  Smartphone,
  CreditCard,
  PackageCheck,
  ChevronRight
} from "lucide-react";

export default function ScreenSwitcher({ currentScreen, setCurrentScreen }) {
  const screens = [
    { id: "home", num: 1, label: "Homepage", subtitle: "Global Marketplace", icon: Home },
    { id: "listing", num: 2, label: "Product Listing", subtitle: "Browse & Discover", icon: Grid },
    { id: "dashboard", num: 3, label: "Vendor Dashboard", subtitle: "Manage & Grow", icon: LayoutDashboard },
    { id: "product", num: 4, label: "Product Details", subtitle: "Buy with Confidence", icon: PackageCheck },
    { id: "checkout", num: 5, label: "Checkout", subtitle: "Secure Escrow", icon: CreditCard },
    { id: "mobile", num: 6, label: "Mobile App", subtitle: "On the Go, Anywhere", icon: Smartphone },
  ];

  return (
    <div className="bg-slate-900 border-b border-slate-800 text-white text-xs sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="font-semibold text-slate-200 tracking-wide">BazaarGo Prototype:</span>
          <span className="text-slate-400 hidden sm:inline">6 Screen UI Mockup Views</span>
        </div>

        {/* Screen Tabs */}
        <div className="flex items-center overflow-x-auto space-x-1 sm:space-x-1.5 py-1">
          {screens.map((s) => {
            const Icon = s.icon;
            const isActive = currentScreen === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentScreen(s.id)}
                className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#f95721] text-white shadow-sm ring-1 ring-orange-400"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span
                  className={`flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-bold ${
                    isActive ? "bg-white text-[#f95721]" : "bg-slate-700 text-slate-300"
                  }`}
                >
                  {s.num}
                </span>
                <Icon className="w-3.5 h-3.5" />
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
