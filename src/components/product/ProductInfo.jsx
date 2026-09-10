import React, { useState } from "react";
import {
  Star,
  ShieldCheck,
  Truck,
  Globe,
  Lock,
  MessageSquare,
  Share2,
  Heart,
  CheckCircle2,
  FileText,
  CreditCard
} from "lucide-react";
import { VerifiedBadge, TopRatedBadge, InStockBadge } from "../common/Badge";

export default function ProductInfo({ product, onBuyNow, onChatSeller }) {
  const [following, setFollowing] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Title & Ratings */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <VerifiedBadge />
          {product.isTopRated && <TopRatedBadge />}
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          {product.title}
        </h1>

        {/* Price & Stock */}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="text-3xl font-black text-slate-900">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-base text-slate-400 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
          {product.localPriceEstimate && (
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-md">
              ({product.localPriceEstimate})
            </span>
          )}
          <InStockBadge inStock={product.inStock} count={product.stockCount} />
        </div>

        {/* Rating and Sales Count */}
        <div className="mt-3 flex items-center space-x-3 text-xs text-slate-600">
          <div className="flex items-center text-amber-500">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-900 ml-1">{product.rating}</span>
            <span className="text-slate-500 ml-1">({product.reviewsCount} reviews)</span>
          </div>
          <span>•</span>
          <span className="font-semibold text-slate-700">{product.ordersCount || 120} sold</span>
        </div>
      </div>

      {/* Seller Mini Profile Card */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#f95721] font-black text-lg flex items-center justify-center border border-orange-200">
            {product.seller?.name?.[0] || "T"}
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h4 className="font-bold text-sm text-slate-900">{product.seller?.name || "TechWorld Store"}</h4>
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              📍 {product.seller?.location || "Singapore"} • Member since {product.seller?.memberSince || "2023"}
            </p>
          </div>
        </div>

        <button
          onClick={() => setFollowing(!following)}
          className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
            following
              ? "bg-slate-200 text-slate-700"
              : "border border-slate-300 text-slate-700 hover:bg-white hover:border-[#f95721] hover:text-[#f95721]"
          }`}
        >
          {following ? "Following" : "Follow"}
        </button>
      </div>

      {/* CTA Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => onBuyNow(product)}
          className="w-full bg-[#f95721] hover:bg-[#e04612] text-white py-3.5 px-6 rounded-xl font-bold text-base shadow-lg shadow-orange-500/25 flex items-center justify-center space-x-2 transition-transform active:scale-[0.99] cursor-pointer"
        >
          <Lock className="w-4 h-4" />
          <span>Buy Now (Escrow Protected)</span>
        </button>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onChatSeller(product.seller)}
            className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#f95721]" />
            <span>Chat with Seller</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-colors cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-slate-500" />
            <span>{copied ? "Link Copied!" : "Share Listing"}</span>
          </button>
        </div>
      </div>

      {/* Shipping Information Card */}
      <div className="bg-slate-50/70 border border-slate-200 rounded-2xl p-4.5 space-y-3.5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Shipping Information</h4>
        
        <div className="space-y-3 text-xs">
          <div className="flex items-start space-x-3">
            <Globe className="w-4 h-4 text-[#f95721] mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">Worldwide Shipping</span>
              <p className="text-slate-500 mt-0.5">Estimated delivery in 5-10 business days</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <FileText className="w-4 h-4 text-[#f95721] mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">Customs & Duties</span>
              <p className="text-slate-500 mt-0.5">Calculated and handled transparently at checkout</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Truck className="w-4 h-4 text-[#f95721] mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-slate-800">Tracking Available</span>
              <p className="text-slate-500 mt-0.5">Real-time milestones from seller dispatch to doorstep</p>
            </div>
          </div>
        </div>
      </div>

      {/* Secure Payment Escrow Card */}
      <div className="bg-orange-50/60 border border-orange-200 rounded-2xl p-4.5">
        <div className="flex items-center space-x-2 text-[#f95721] font-bold text-xs">
          <ShieldCheck className="w-4 h-4" />
          <span>Secure Escrow Payment</span>
        </div>
        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
          Your payment is held safely in escrow and released to the seller only after you inspect and confirm receipt of your item.
        </p>
        
        {/* Payment logos */}
        <div className="mt-3 pt-3 border-t border-orange-200/60 flex items-center justify-between text-[11px] text-slate-500">
          <span>Supported Methods:</span>
          <div className="flex items-center space-x-2 font-bold text-slate-700">
            <span className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-blue-700">VISA</span>
            <span className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-red-600">MC</span>
            <span className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-blue-800">PayPal</span>
            <span className="px-1.5 py-0.5 bg-white rounded border border-slate-200">Pay</span>
            <span className="px-1.5 py-0.5 bg-white rounded border border-slate-200 text-slate-600">GPay</span>
          </div>
        </div>
      </div>
    </div>
  );
}
