import React from "react";
import { Star, RotateCcw, ChevronDown, Check, SlidersHorizontal } from "lucide-react";
import { categories, filterOptions } from "../../data/categories";

export default function FilterSidebar({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  selectedConditions,
  toggleCondition,
  selectedShipping,
  setSelectedShipping,
  selectedRating,
  setSelectedRating,
  selectedRegion,
  setSelectedRegion,
  resetFilters
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-4 h-4 text-slate-700" />
          <h3 className="font-bold text-slate-900 text-base">Filters</h3>
        </div>
        <button
          onClick={resetFilters}
          className="text-xs font-semibold text-[#f95721] hover:text-[#e04612] flex items-center space-x-1 cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Clear All</span>
        </button>
      </div>

      {/* Category List */}
      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Category</h4>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-orange-50 text-[#f95721] font-bold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[11px] text-slate-400">({cat.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="pt-2 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Price Range</h4>
          <span className="text-xs font-bold text-slate-900">
            $0 - ${maxPrice >= 5000 ? "5,000+" : maxPrice.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min="100"
          max="5000"
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-[#f95721] cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
          <span>$0</span>
          <span>$2,500</span>
          <span>$5,000+</span>
        </div>
      </div>

      {/* Condition */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Condition</h4>
        <div className="space-y-2">
          {filterOptions.conditions.map((cond) => {
            const isChecked = selectedConditions.includes(cond);
            return (
              <label
                key={cond}
                className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer select-none hover:text-slate-900"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleCondition(cond)}
                  className="rounded border-slate-300 text-[#f95721] focus:ring-[#f95721] accent-[#f95721] w-4 h-4 cursor-pointer"
                />
                <span>{cond}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Shipping Options */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Shipping</h4>
        <div className="space-y-2">
          {filterOptions.shippingTypes.map((ship) => (
            <label
              key={ship.id}
              className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer select-none hover:text-slate-900"
            >
              <input
                type="radio"
                name="shipping"
                value={ship.id}
                checked={selectedShipping === ship.id}
                onChange={(e) => setSelectedShipping(e.target.value)}
                className="text-[#f95721] focus:ring-[#f95721] accent-[#f95721] cursor-pointer"
              />
              <span>{ship.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Seller Rating */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Seller Rating</h4>
        <div className="space-y-1.5">
          {filterOptions.ratings.map((rate) => (
            <button
              key={rate.stars}
              onClick={() => setSelectedRating(selectedRating === rate.stars ? null : rate.stars)}
              className={`w-full flex items-center space-x-2 px-2 py-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                selectedRating === rate.stars ? "bg-amber-50 text-amber-900 font-bold" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center text-amber-400">
                {[...Array(rate.stars)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                {[...Array(5 - rate.stars)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-slate-200" />
                ))}
              </div>
              <span className="text-[11px] text-slate-600">{rate.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Region Dropdown */}
      <div className="pt-2 border-t border-slate-100">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Region</h4>
        <div className="relative">
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-700 outline-none appearance-none focus:ring-1 focus:ring-[#f95721] cursor-pointer"
          >
            {filterOptions.regions.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-3 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
