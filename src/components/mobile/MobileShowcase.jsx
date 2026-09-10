import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  ShoppingBag,
  MessageSquare,
  Globe,
  Truck,
  Download,
  Sparkles
} from "lucide-react";
import PhoneSimulator from "./PhoneSimulator";

export default function MobileShowcase({ onSelectProduct }) {
  const features = [
    { label: "Buy & Sell Easily", desc: "List items in 30 seconds with camera auto-tagging" },
    { label: "Secure Payments", desc: "Escrow funds released only after your approval" },
    { label: "Track Your Orders", desc: "Live cross-border carrier tracking notifications" },
    { label: "Chat with Sellers", desc: "Instant translation across 40+ world languages" },
    { label: "Multi-Currency Support", desc: "Pay in your home currency with zero hidden fees" },
    { label: "Available in Multiple Languages", desc: "Full localization for global accessibility" }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-[#111827] text-white py-14 sm:py-20 overflow-hidden relative">
      {/* Glow shapes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Badges */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Screen 6: Mobile App Experience</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              The Global Marketplace <br />
              <span className="text-[#f95721]">in Your Pocket</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Buy, sell and discover unique items from around the world. Connect with local artisans, automotive dealers, and gadget traders directly from your smartphone.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#f95721] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">{item.label}</span>
                    <span className="text-[11px] text-slate-400 leading-tight block mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Store Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* App Store Button */}
              <button
                onClick={() => alert("Redirecting to Apple App Store...")}
                className="bg-black hover:bg-slate-800 text-white border border-white/20 px-5 py-3 rounded-2xl flex items-center space-x-3 transition-transform active:scale-95 cursor-pointer shadow-lg"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.94 2.78 1.01.08 2.04-.53 2.66-1.28"/>
                </svg>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">Download on the</span>
                  <span className="text-sm font-bold text-white leading-none">App Store</span>
                </div>
              </button>

              {/* Google Play Button */}
              <button
                onClick={() => alert("Redirecting to Google Play Store...")}
                className="bg-black hover:bg-slate-800 text-white border border-white/20 px-5 py-3 rounded-2xl flex items-center space-x-3 transition-transform active:scale-95 cursor-pointer shadow-lg"
              >
                <svg className="w-7 h-7 fill-current text-[#f95721]" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.86.97-1.35 1.66-.86l14.47 8.5c.67.39.67 1.33 0 1.72L4.66 21.36c-.69.49-1.66 0-1.66-.86z"/>
                </svg>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 block uppercase font-medium">GET IT ON</span>
                  <span className="text-sm font-bold text-white leading-none">Google Play</span>
                </div>
              </button>
            </div>

            {/* Tagline */}
            <p className="text-xs text-[#f95721] font-bold tracking-wide italic pt-2">
              "Same Marketplace, More Possibilities"
            </p>
          </div>

          {/* Right Smartphone Simulator Display */}
          <div className="lg:col-span-6 flex justify-center">
            <PhoneSimulator onSelectProduct={onSelectProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}
