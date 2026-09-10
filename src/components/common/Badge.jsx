import React from "react";
import { CheckCircle2, ShieldCheck, Star, Lock } from "lucide-react";

export function VerifiedBadge({ className = "" }) {
  return (
    <span className={`inline-flex items-center space-x-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 ${className}`}>
      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
      <span>Verified Seller</span>
    </span>
  );
}

export function FeaturedBadge({ className = "" }) {
  return (
    <span className={`inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100 px-2 py-0.5 rounded-md border border-orange-200 ${className}`}>
      Featured
    </span>
  );
}

export function TopRatedBadge({ className = "" }) {
  return (
    <span className={`inline-flex items-center space-x-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200 ${className}`}>
      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
      <span>Top Rated</span>
    </span>
  );
}

export function InStockBadge({ inStock = true, count, className = "" }) {
  return (
    <span className={`inline-flex items-center space-x-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
      inStock ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-rose-50 text-rose-700 border border-rose-200"
    } ${className}`}>
      <span className={`w-2 h-2 rounded-full ${inStock ? "bg-emerald-500 animate-pulse" : "bg-rose-500"}`}></span>
      <span>{inStock ? (count ? `In Stock (${count})` : "In Stock") : "Out of Stock"}</span>
    </span>
  );
}

export function EscrowBadge({ className = "" }) {
  return (
    <span className={`inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200 ${className}`}>
      <Lock className="w-3.5 h-3.5 text-[#f95721]" />
      <span>Escrow Protected</span>
    </span>
  );
}
