import React, { useState } from "react";
import { Check, Star, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";

export default function TabbedDetails({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: `Reviews (${product.reviewsCount || 98})` },
    { id: "shipping", label: "Shipping" },
    { id: "returns", label: "Return Policy" }
  ];

  return (
    <div className="mt-12 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Tabs Header */}
      <div className="flex border-b border-slate-200 overflow-x-auto bg-slate-50/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3.5 text-xs sm:text-sm font-bold transition-colors whitespace-nowrap cursor-pointer border-b-2 ${
              activeTab === tab.id
                ? "border-[#f95721] text-[#f95721] bg-white"
                : "border-transparent text-slate-600 hover:text-slate-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 sm:p-8">
        {activeTab === "description" && (
          <div className="space-y-6">
            <p className="text-slate-700 text-sm leading-relaxed">
              {product.description ||
                "iPhone 15 Pro with 256GB storage. Excellent condition, barely used. Comes with original box, charger, and warranty."}
            </p>

            {product.features && (
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-3">Key Highlights:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center space-x-2.5 text-xs text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-orange-100 text-[#f95721] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="divide-y divide-slate-100 text-xs">
            <div className="py-2.5 flex justify-between">
              <span className="text-slate-500 font-medium">Model / Version</span>
              <span className="text-slate-900 font-semibold">{product.title}</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-slate-500 font-medium">Condition</span>
              <span className="text-slate-900 font-semibold">{product.condition}</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-slate-500 font-medium">Origin Country</span>
              <span className="text-slate-900 font-semibold">{product.location}</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-slate-500 font-medium">Escrow Security</span>
              <span className="text-emerald-600 font-bold">100% Guaranteed</span>
            </div>
            <div className="py-2.5 flex justify-between">
              <span className="text-slate-500 font-medium">International Warranty</span>
              <span className="text-slate-900 font-semibold">Valid (AppleCare+ eligible)</span>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4 pb-4 border-b border-slate-100">
              <div className="text-center">
                <span className="text-3xl font-black text-slate-900">{product.rating}</span>
                <div className="flex items-center text-amber-400 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">Based on {product.reviewsCount} verified buyers</span>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div className="bg-slate-50 p-3.5 rounded-xl">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Marcus Vance • Verified Buyer</span>
                  <span className="text-slate-400">2 days ago</span>
                </div>
                <div className="flex text-amber-400 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600">
                  Arrived safely in Frankfurt within 6 days. Phone condition is pristine 10/10, battery health 100%. Escrow gave me total peace of mind.
                </p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">Aisha Patel • Verified Buyer</span>
                  <span className="text-slate-400">1 week ago</span>
                </div>
                <div className="flex text-amber-400 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600">
                  Fast dispatch by TechWorld Store. Packaging was super secure with bubble wrap and DHL tracking updated every step.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
            <h4 className="font-bold text-slate-900 text-sm">International Shipping Policies</h4>
            <p>
              Orders are packaged and dispatched within 24 hours of escrow authorization. All cross-border shipments include end-to-end tracking and transit insurance.
            </p>
            <p>
              Estimated transit times: Standard (7-14 business days), Express (3-7 business days), Priority (2-4 business days).
            </p>
          </div>
        )}

        {activeTab === "returns" && (
          <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
            <h4 className="font-bold text-slate-900 text-sm">BazaarGo 14-Day Buyer Protection</h4>
            <p>
              If the delivered product does not match the description or arrives damaged, do not release the escrow payment. You have a full 72-hour inspection window upon receipt to file a claim for a complete refund.
            </p>
          </div>
        )}

        {/* Report Listing Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <button
            onClick={() => alert("Thank you. Our Trust & Safety team will review this listing.")}
            className="hover:text-rose-600 flex items-center space-x-1 cursor-pointer"
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Report this listing</span>
          </button>
          <span>Listing ID: #BZ-{product.id}</span>
        </div>
      </div>
    </div>
  );
}
