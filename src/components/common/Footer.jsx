import React from "react";
import { ShieldCheck, Globe, Truck, Lock, ArrowUpRight } from "lucide-react";

export default function Footer({ setCurrentScreen }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-slate-800">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#f95721] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Escrow Protection</h4>
              <p className="text-xs text-slate-400 mt-1">Payment released only after buyer confirms safe delivery.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#f95721] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Global Cross-Border Delivery</h4>
              <p className="text-xs text-slate-400 mt-1">Doorstep shipping across 120+ countries with live customs support.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#f95721] shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Verified Global Sellers</h4>
              <p className="text-xs text-slate-400 mt-1">Every merchant is KYC authenticated with strict quality standards.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-[#f95721] shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Multi-Currency Clearance</h4>
              <p className="text-xs text-slate-400 mt-1">Transparent conversion rates with no hidden foreign transaction fees.</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-slate-800 text-sm">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#f95721] to-[#ff7e40] flex items-center justify-center text-white">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="text-xl font-black text-white">
                Bazaar<span className="text-[#f95721]">Go</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              The premier cross-border marketplace empowering local entrepreneurs and providing global consumers access to authentic products worldwide.
            </p>
            <div className="flex items-center space-x-2 text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-400">Escrow Network: 100% Operational</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">Marketplace</h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => setCurrentScreen("home")} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentScreen("listing")} className="hover:text-white transition-colors">
                  Browse Products
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentScreen("mobile")} className="hover:text-white transition-colors">
                  Mobile Application
                </button>
              </li>
              <li>
                <a href="#featured" className="hover:text-white transition-colors">
                  Featured Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Sell on BazaarGo */}
          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">For Sellers</h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => setCurrentScreen("dashboard")} className="hover:text-[#f95721] font-semibold text-white flex items-center space-x-1">
                  <span>Vendor Portal</span>
                  <ArrowUpRight className="w-3 h-3 text-[#f95721]" />
                </button>
              </li>
              <li>
                <a href="#seller-guide" className="hover:text-white transition-colors">
                  Seller Guidelines
                </a>
              </li>
              <li>
                <a href="#fulfillment" className="hover:text-white transition-colors">
                  Global Fulfillment
                </a>
              </li>
              <li>
                <a href="#payouts" className="hover:text-white transition-colors">
                  Payout Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Support */}
          <div>
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider mb-4">Trust & Help</h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => setCurrentScreen("checkout")} className="hover:text-white transition-colors">
                  Escrow Protection
                </button>
              </li>
              <li>
                <a href="#customs" className="hover:text-white transition-colors">
                  Customs & Duties FAQ
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  24/7 Global Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 BazaarGo Inc. All international rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Security Center</span>
            <span>•</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
