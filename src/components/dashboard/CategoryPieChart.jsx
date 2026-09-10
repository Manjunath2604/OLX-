import React, { useState } from "react";
import { vendorStats } from "../../data/vendorStats";

export default function CategoryPieChart() {
  const [hoveredCat, setHoveredCat] = useState(null);
  const categories = vendorStats.topCategories;

  // Compute SVG Donut Chart parameters
  const size = 160;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
      <div>
        <h3 className="font-bold text-slate-900 text-sm">Top Selling Categories</h3>
        <p className="text-[11px] text-slate-400 mt-0.5">Share of total GMV</p>

        {/* Donut Chart and Legend */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          {/* SVG Donut */}
          <div className="relative w-40 h-40 shrink-0 flex items-center justify-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
              {categories.map((cat) => {
                const strokeDasharray = `${(cat.percentage / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -((cumulativePercent / 100) * circumference);
                cumulativePercent += cat.percentage;

                const isHovered = hoveredCat?.name === cat.name;

                return (
                  <circle
                    key={cat.name}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={cat.color}
                    strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredCat(cat)}
                    onMouseLeave={() => setHoveredCat(null)}
                  />
                );
              })}
            </svg>

            {/* Inner Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
              <span className="text-xl font-black text-slate-900">
                {hoveredCat ? `${hoveredCat.percentage}%` : "100%"}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                {hoveredCat ? hoveredCat.name : "Categories"}
              </span>
            </div>
          </div>

          {/* Legend */}
          <div className="flex-1 w-full space-y-1.5 text-xs">
            {categories.map((cat) => (
              <div
                key={cat.name}
                onMouseEnter={() => setHoveredCat(cat)}
                onMouseLeave={() => setHoveredCat(null)}
                className={`flex items-center justify-between p-1 rounded-lg transition-colors cursor-pointer ${
                  hoveredCat?.name === cat.name ? "bg-slate-100 font-bold" : "hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: cat.color }}></span>
                  <span className="text-slate-700 text-[11px] truncate max-w-[100px]">{cat.name}</span>
                </div>
                <span className="font-bold text-slate-900 text-xs">{cat.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
        <span>Highest Margin:</span>
        <span className="font-bold text-blue-600">Electronics (35%)</span>
      </div>
    </div>
  );
}
