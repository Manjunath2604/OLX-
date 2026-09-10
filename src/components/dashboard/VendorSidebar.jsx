import React from "react";
import {
  LayoutDashboard,
  Tag,
  ShoppingBag,
  MessageSquare,
  CreditCard,
  BarChart3,
  Wallet,
  Settings,
  User,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Store
} from "lucide-react";

export default function VendorSidebar({ activeTab = "dashboard", setActiveTab, setCurrentScreen }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "listings", label: "My Listings", icon: Tag },
    { id: "orders", label: "Orders", icon: ShoppingBag, badge: "12" },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: "3" },
    { id: "transactions", label: "Transactions", icon: CreditCard },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "payouts", label: "Payouts", icon: Wallet },
    { id: "settings", label: "Store Settings", icon: Settings },
    { id: "profile", label: "Profile", icon: User },
    { id: "help", label: "Help & Support", icon: HelpCircle }
  ];

  return (
    <aside className="w-64 bg-[#111827] text-slate-300 flex flex-col justify-between shrink-0 min-h-[850px] border-r border-slate-800">
      <div>
        {/* Logo */}
        <div
          onClick={() => setCurrentScreen("home")}
          className="p-5 flex items-center space-x-2.5 cursor-pointer border-b border-slate-800/80"
        >
          <div className="w-8 h-8 rounded-lg bg-[#f95721] flex items-center justify-center text-white font-black shadow-md shadow-orange-500/20">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black text-white leading-tight">
              Bazaar<span className="text-[#f95721]">Go</span>
            </span>
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
              Vendor Studio
            </span>
          </div>
        </div>

        {/* Navigation list */}
        <nav className="p-3 space-y-1 text-xs font-medium">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#f95721] text-white font-bold shadow-md shadow-orange-500/20"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-white text-[#f95721]" : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Upgrade to Pro Card */}
      <div className="p-4 m-3 bg-gradient-to-br from-slate-800/90 to-slate-900 border border-slate-700/80 rounded-2xl text-center">
        <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-[#f95721] flex items-center justify-center mx-auto mb-2">
          <Sparkles className="w-5 h-5" />
        </div>
        <h5 className="font-bold text-white text-xs">Upgrade to Pro</h5>
        <p className="text-[11px] text-slate-400 mt-1 leading-snug">
          Get more visibility, reduced escrow fees, and AI inventory forecasting.
        </p>
        <button
          onClick={() => alert("Upgrading to BazaarGo Pro Merchant Tier!")}
          className="mt-3 w-full bg-[#f95721] hover:bg-[#e04612] text-white py-2 px-3 rounded-xl text-xs font-bold shadow-sm transition-all cursor-pointer"
        >
          Upgrade
        </button>
      </div>
    </aside>
  );
}
