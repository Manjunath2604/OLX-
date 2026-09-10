import React from "react";
import { CheckCircle2, ShieldCheck, ArrowRight, Package, Copy } from "lucide-react";

export default function SuccessModal({ isOpen, onClose, onViewDashboard, total = 845 }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 text-center relative">
        {/* Animated Check Icon */}
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          Escrow Payment Authorized!
        </h3>

        <p className="text-xs text-slate-500 mt-2 leading-relaxed">
          Your funds of <span className="font-bold text-slate-900">${total}</span> are securely locked in BazaarGo Global Escrow Vault. The seller has been notified to dispatch your package.
        </p>

        {/* Transaction Reference Box */}
        <div className="my-6 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">Escrow Contract:</span>
            <span className="font-mono font-bold text-slate-800">ESC-984029-US</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">DHL Global Airway Bill:</span>
            <span className="font-mono font-bold text-[#f95721]">DHL-EXP-40192</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-slate-200 text-[11px]">
            <span className="text-slate-500">Inspection Window:</span>
            <span className="font-semibold text-emerald-600">72 hours after doorstep arrival</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            onClick={onViewDashboard}
            className="w-full bg-[#f95721] hover:bg-[#e04612] text-white py-3 px-5 rounded-xl font-bold text-sm shadow-md shadow-orange-500/25 flex items-center justify-center space-x-2 transition-transform active:scale-98 cursor-pointer"
          >
            <span>View Vendor / Orders Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onClose}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-5 rounded-xl font-semibold text-xs transition-colors cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
