import React, { useState } from "react";
import { Star, MapPin, Heart, ShieldCheck, ArrowRight } from "lucide-react";
import { VerifiedBadge, FeaturedBadge } from "../common/Badge";

export default function ProductGrid({ products, onSelectProduct }) {
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (e, id) => {
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
        <div className="w-16 h-16 bg-orange-50 text-[#f95721] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
        <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
          Try expanding your price range, choosing "All Categories", or resetting your active filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((item) => {
        const isFavorited = wishlist[item.id];
        return (
          <div
            key={item.id}
            onClick={() => onSelectProduct(item)}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-orange-200 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Featured Badge */}
              {item.isFeatured && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#f95721] text-white text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-sm">
                    Featured
                  </span>
                </div>
              )}

              {/* Heart / Wishlist Toggle */}
              <button
                onClick={(e) => toggleWishlist(e, item.id)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-600 hover:text-rose-500 transition-colors shadow-sm z-10"
              >
                <Heart
                  className={`w-4 h-4 transition-all ${
                    isFavorited ? "fill-rose-500 text-rose-500 scale-110" : "text-slate-500"
                  }`}
                />
              </button>

              {/* Condition Badge */}
              <span className="absolute bottom-3 left-3 bg-slate-900/75 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                {item.condition}
              </span>
            </div>

            {/* Body */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 text-base line-clamp-1 group-hover:text-[#f95721] transition-colors">
                  {item.title}
                </h4>

                {/* Price */}
                <div className="mt-1.5 flex items-baseline space-x-2">
                  <span className="text-xl font-extrabold text-slate-900">
                    ${item.price.toLocaleString()}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      ${item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Location */}
                <div className="mt-2 flex items-center space-x-1 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{item.location}</span>
                </div>

                {/* Rating & Reviews */}
                <div className="mt-2 flex items-center space-x-1.5 text-xs">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-800 ml-1">{item.rating}</span>
                  </div>
                  <span className="text-slate-400">({item.reviewsCount})</span>
                </div>
              </div>

              {/* Verified Seller Badge */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                <VerifiedBadge />
                <span className="text-[11px] font-medium text-slate-400 group-hover:text-[#f95721] flex items-center space-x-0.5">
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
