import React from "react";
import {
  Car,
  Smartphone,
  Tv,
  Sofa,
  Home,
  Shirt,
  Briefcase,
  MoreHorizontal
} from "lucide-react";

export default function CategoryPills({ onSelectCategory }) {
  const categoryItems = [
    { id: "vehicles", label: "Cars & Vehicles", icon: Car, color: "text-blue-500 bg-blue-50 hover:bg-blue-100" },
    { id: "mobiles", label: "Mobiles & Tablets", icon: Smartphone, color: "text-indigo-500 bg-indigo-50 hover:bg-indigo-100" },
    { id: "electronics", label: "Electronics", icon: Tv, color: "text-cyan-500 bg-cyan-50 hover:bg-cyan-100" },
    { id: "furniture", label: "Home & Furniture", icon: Sofa, color: "text-amber-500 bg-amber-50 hover:bg-amber-100" },
    { id: "realestate", label: "Real Estate", icon: Home, color: "text-emerald-500 bg-emerald-50 hover:bg-emerald-100" },
    { id: "fashion", label: "Fashion", icon: Shirt, color: "text-rose-500 bg-rose-50 hover:bg-rose-100" },
    { id: "jobs", label: "Jobs", icon: Briefcase, color: "text-purple-500 bg-purple-50 hover:bg-purple-100" },
    { id: "more", label: "More", icon: MoreHorizontal, color: "text-slate-600 bg-slate-100 hover:bg-slate-200" }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Explore Top Categories</h2>
            <p className="text-sm text-slate-500 mt-1">Browse through millions of cross-border listings</p>
          </div>
          <button
            onClick={() => onSelectCategory("all")}
            className="text-sm font-semibold text-[#f95721] hover:text-[#e04612] flex items-center space-x-1 cursor-pointer"
          >
            <span>View All</span>
            <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4">
          {categoryItems.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className="flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                <div
                  className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg ${cat.color}`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-110" />
                </div>
                <span className="mt-3 text-xs font-semibold text-slate-700 text-center line-clamp-1 group-hover:text-[#f95721] transition-colors">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
