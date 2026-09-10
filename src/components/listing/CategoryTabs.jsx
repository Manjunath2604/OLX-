import React from "react";
import {
  LayoutGrid,
  Car,
  Smartphone,
  Tv,
  Sofa,
  Shirt,
  Home
} from "lucide-react";

export default function CategoryTabs({ selectedCategory, setSelectedCategory }) {
  const tabs = [
    { id: "all", label: "All", icon: LayoutGrid },
    { id: "vehicles", label: "Vehicles", icon: Car },
    { id: "mobiles", label: "Mobiles", icon: Smartphone },
    { id: "electronics", label: "Electronics", icon: Tv },
    { id: "furniture", label: "Furniture", icon: Sofa },
    { id: "fashion", label: "Fashion", icon: Shirt },
    { id: "realestate", label: "Real Estate", icon: Home },
  ];

  return (
    <div className="flex items-center space-x-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = selectedCategory === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
              isActive
                ? "bg-[#f95721] text-white shadow-md shadow-orange-500/25 scale-[1.02]"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-500"}`} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
