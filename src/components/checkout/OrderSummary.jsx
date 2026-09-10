import React from "react";
import { Lock, ShieldCheck, CheckCircle2, CreditCard } from "lucide-react";

export default function OrderSummary({
  product,
  shippingFee = 20,
  customsFee = 45,
  paymentMethod,
  setPaymentMethod,
  onPay
}) {
  const itemPrice = product?.price || 780;
  const total = itemPrice + shippingFee + customsFee;

  const paymentOptions = [
    {
      id: "card",
      label: "Credit / Debit Card",
      icons: ["VISA", "MC", "AMEX"]
    },
    {
      id: "paypal",
      label: "PayPal",
      icons: ["PayPal"]
    },
    {
      id: "applepay",
      label: "Apple Pay",
      icons: ["Pay"]
    },
    {
      id: "gpay",
      label: "Google Pay",
      icons: ["GPay"]
    },
    {
      id: "bank",
      label: "Bank Transfer",
      icons: ["SWIFT / Wire"]
    }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
      <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
        Order Summary
      </h3>

      {/* Product Card */}
      <div className="flex items-start space-x-3.5 pb-4 border-b border-slate-100">
        <img
          src={product?.images?.[0] || "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=300&q=80"}
          alt={product?.title || "iPhone 15 Pro"}
          className="w-16 h-16 rounded-xl object-cover border border-slate-200 shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
            {product?.title || "iPhone 15 Pro 256GB"}
          </h4>
          <p className="text-[11px] text-slate-500 mt-0.5">
            Seller: <span className="font-semibold text-slate-700">{product?.seller?.name || "TechWorld Store"}</span>
          </p>
          <span className="text-sm font-extrabold text-slate-900 mt-1 block">
            ${itemPrice.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Price breakdown */}
      <div className="space-y-2.5 text-xs">
        <div className="flex justify-between text-slate-600">
          <span>Item Price</span>
          <span className="font-semibold text-slate-900">${itemPrice.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Shipping Fee</span>
          <span className="font-semibold text-slate-900">${shippingFee}</span>
        </div>
        <div className="flex justify-between text-slate-600">
          <span>Customs (Estimated)</span>
          <span className="font-semibold text-slate-900">${customsFee}</span>
        </div>
        <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
          <div>
            <span className="text-sm font-extrabold text-slate-900 block">Total</span>
            <span className="text-[11px] text-slate-400">approx ₹{(total * 83).toLocaleString()}</span>
          </div>
          <span className="text-2xl font-black text-[#f95721]">${total.toLocaleString()}</span>
        </div>
      </div>

      {/* Payment Method Selector */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Payment Method
        </h4>

        <div className="space-y-2">
          {paymentOptions.map((opt) => {
            const isSelected = paymentMethod === opt.id;
            return (
              <label
                key={opt.id}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "border-[#f95721] bg-orange-50/40 text-slate-900 font-bold"
                    : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={opt.id}
                    checked={isSelected}
                    onChange={() => setPaymentMethod(opt.id)}
                    className="w-4 h-4 text-[#f95721] focus:ring-[#f95721] accent-[#f95721] cursor-pointer"
                  />
                  <span className="text-xs">{opt.label}</span>
                </div>

                <div className="flex items-center space-x-1.5 text-[10px] font-bold text-slate-600">
                  {opt.icons.map((ic, i) => (
                    <span key={i} className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200">
                      {ic}
                    </span>
                  ))}
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Big Pay Securely CTA */}
      <button
        onClick={onPay}
        className="w-full bg-[#f95721] hover:bg-[#e04612] text-white py-3.5 px-6 rounded-xl font-black text-sm sm:text-base shadow-lg shadow-orange-500/30 flex items-center justify-center space-x-2 transition-transform active:scale-98 cursor-pointer"
      >
        <Lock className="w-4 h-4" />
        <span>Pay Securely (Escrow)</span>
      </button>

      {/* Escrow Reassurance */}
      <div className="flex items-start space-x-2.5 text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
        <ShieldCheck className="w-4 h-4 text-[#f95721] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          Your payment is protected with escrow. The seller receives payment only after you confirm delivery.
        </p>
      </div>
    </div>
  );
}
