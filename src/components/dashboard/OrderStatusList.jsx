import React from "react";
import { vendorStats } from "../../data/vendorStats";

export default function OrderStatusList() {
  const total = vendorStats.orderStatusCounts.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-900 text-sm">Order Status</h3>
        <p className="text-[11px] text-slate-400 mt-0.5">Real-time fulfillment pipeline</p>

        {/* Status Rows */}
        <div className="mt-5 space-y-3">
          {vendorStats.orderStatusCounts.map((item) => {
            const pct = Math.round((item.count / total) * 100);
            return (
              <div key={item.label} className="text-xs">
                <div className="flex items-center justify-between font-medium mb-1">
                  <div className="flex items-center space-x-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                    <span className="text-slate-700 font-semibold">{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900">{item.count}</span>
                    <span className="text-[10px] text-slate-400">({pct}%)</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
        <span>Total Active Orders:</span>
        <span className="font-bold text-slate-900">{total}</span>
      </div>
    </div>
  );
}
