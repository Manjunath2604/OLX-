import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { vendorStats } from "../../data/vendorStats";

export default function RecentOrdersTable() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Recent Orders</h3>
          <p className="text-[11px] text-slate-400">Latest international purchase orders</p>
        </div>

        <button
          onClick={() => alert("Viewing all 126 international orders...")}
          className="text-xs font-semibold text-[#f95721] hover:text-[#e04612] flex items-center space-x-1 cursor-pointer"
        >
          <span>View All</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="text-slate-400 font-semibold border-b border-slate-100">
              <th className="pb-3 font-semibold">Product</th>
              <th className="pb-3 font-semibold">Buyer</th>
              <th className="pb-3 font-semibold">Amount</th>
              <th className="pb-3 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {vendorStats.recentOrders.map((ord) => (
              <tr key={ord.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 pr-3">
                  <span className="font-bold text-slate-900 block">{ord.product}</span>
                  <span className="text-[10px] text-slate-400 font-mono">{ord.id}</span>
                </td>
                <td className="py-3 pr-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src={ord.avatar}
                      alt={ord.buyer}
                      className="w-6 h-6 rounded-full object-cover border border-slate-200"
                    />
                    <span className="text-slate-700 font-medium">{ord.buyer}</span>
                  </div>
                </td>
                <td className="py-3 pr-3 font-extrabold text-slate-900">
                  {ord.amount}
                </td>
                <td className="py-3 text-right">
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold border ${ord.statusColor}`}
                  >
                    {ord.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
