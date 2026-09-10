import React, { useState } from "react";
import { ChevronDown, TrendingUp } from "lucide-react";
import { vendorStats } from "../../data/vendorStats";

export default function RevenueChart() {
  const [timeframe, setTimeframe] = useState("Last 6 Months");
  const data = vendorStats.revenueTrends[timeframe] || vendorStats.revenueTrends["Last 6 Months"];

  const [hoveredPoint, setHoveredPoint] = useState(
    data.find((d) => d.activePoint) || data[4]
  );

  const maxVal = 9000;
  const minVal = 0;
  const chartHeight = 180;
  const chartWidth = 540;

  // Generate SVG path points
  const points = data.map((d, index) => {
    const x = (index / (data.length - 1)) * (chartWidth - 40) + 20;
    const y = chartHeight - ((d.amount - minVal) / (maxVal - minVal)) * (chartHeight - 30) - 15;
    return { x, y, ...d };
  });

  // SVG curved path (Catmull-Rom or cubic Bezier)
  const pathData = points.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = arr[i - 1];
    const cp1x = prev.x + (point.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (point.x - prev.x) / 2;
    const cp2y = point.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${point.x} ${point.y}`;
  }, "");

  // Area under curve
  const areaData = `${pathData} L ${points[points.length - 1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`;

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Revenue Overview</h3>
          <p className="text-[11px] text-slate-400">Monthly cross-border transaction volume</p>
        </div>

        {/* Timeframe Dropdown */}
        <div className="relative">
          <select
            value={timeframe}
            onChange={(e) => {
              setTimeframe(e.target.value);
              const newData = vendorStats.revenueTrends[e.target.value];
              if (newData && newData.length > 0) {
                setHoveredPoint(newData[Math.floor(newData.length / 2)]);
              }
            }}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 outline-none cursor-pointer pr-7 appearance-none hover:bg-slate-100"
          >
            <option value="Last 6 Months">Last 6 Months</option>
            <option value="Last 30 Days">Last 30 Days</option>
            <option value="This Year">This Year</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
        </div>
      </div>

      {/* SVG Line Chart */}
      <div className="relative pt-4">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`} className="w-full h-48 overflow-visible">
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines & Y Axis */}
          {[8000, 6000, 4000, 2000, 0].map((val) => {
            const y = chartHeight - (val / maxVal) * (chartHeight - 30) - 15;
            return (
              <g key={val}>
                <line x1="20" y1={y} x2={chartWidth - 20} y2={y} stroke="#f1f5f9" strokeDasharray="3 3" />
                <text x="12" y={y + 3} textAnchor="end" className="text-[9px] fill-slate-400 font-mono">
                  {val === 0 ? "0" : `${val / 1000}k`}
                </text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={areaData} fill="url(#revenueGradient)" />

          {/* Line Stroke */}
          <path d={pathData} fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />

          {/* Interactive Dots and Labels */}
          {points.map((p, idx) => {
            const isHovered = hoveredPoint?.month === p.month;
            return (
              <g key={idx} className="cursor-pointer" onMouseEnter={() => setHoveredPoint(p)}>
                {/* Vertical hover indicator line */}
                {isHovered && (
                  <line
                    x1={p.x}
                    y1={10}
                    x2={p.x}
                    y2={chartHeight}
                    stroke="#3B82F6"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                )}

                {/* Point circle */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isHovered ? 6 : 4}
                  className={`transition-all ${
                    isHovered
                      ? "fill-white stroke-[#3B82F6] stroke-3 drop-shadow-md"
                      : "fill-[#3B82F6] stroke-white stroke-2"
                  }`}
                />

                {/* X Axis Month text */}
                <text
                  x={p.x}
                  y={chartHeight + 20}
                  textAnchor="middle"
                  className={`text-[10px] font-medium transition-colors ${
                    isHovered ? "fill-[#3B82F6] font-bold" : "fill-slate-400"
                  }`}
                >
                  {p.month}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Dynamic Floating Tooltip */}
        {hoveredPoint && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-xl shadow-lg text-xs flex items-center space-x-2 border border-slate-700 animate-fade-in pointer-events-none">
            <span className="font-bold text-blue-400">${hoveredPoint.amount.toLocaleString()}</span>
            <span className="text-slate-400 text-[10px]">({hoveredPoint.month} 2026)</span>
          </div>
        )}
      </div>
    </div>
  );
}
