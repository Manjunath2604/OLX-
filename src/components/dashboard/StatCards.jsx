import React from "react";
import { Tag, Eye, ShoppingBag, DollarSign, ArrowUpRight, Calendar } from "lucide-react";
import { vendorStats } from "../../data/vendorStats";

export default function StatCards() {
  const iconMap = {
    Tag: Tag,
    Eye: Eye,
    ShoppingBag: ShoppingBag,
    DollarSign: DollarSign
  };

  return (
    <div>
      {/* Greeting Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            Welcome back, John! <span>👋</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">Here's what's happening with your store today.</p>
        </div>

        {/* Date Filter Pill */}
        <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 shadow-xs">
          <Calendar className="w-3.5 h-3.5 text-slate-400" />
          <span>Sep 1, 2026 – Sep 30, 2026</span>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {vendorStats.kpis.map((kpi) => {
          const Icon = iconMap[kpi.icon] || Tag;
          return (
            <div
              key={kpi.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">{kpi.label}</span>
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#f95721] flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-3 flex items-baseline justify-between">
                <span className="text-2xl sm:text-3xl font-black text-slate-900">{kpi.value}</span>
                <div className="flex items-center space-x-0.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>{kpi.growth}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
