import React from "react";
import { ShieldCheck, Truck, Lock, DollarSign } from "lucide-react";

export default function ValueProps() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Verified Sellers",
      subtitle: "Trusted & safe",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      icon: Truck,
      title: "Global Shipping",
      subtitle: "Worldwide delivery",
      color: "text-blue-500",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      icon: Lock,
      title: "Secure Payments",
      subtitle: "Escrow protection",
      color: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-100"
    },
    {
      icon: DollarSign,
      title: "Multi-Currency",
      subtitle: "Buy in your currency",
      color: "text-purple-500",
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`flex items-center space-x-3.5 p-4 rounded-2xl bg-white border ${item.border} shadow-xs hover:shadow-md transition-shadow`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
