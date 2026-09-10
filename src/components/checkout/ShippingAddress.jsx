import React from "react";
import { Truck, Info, ChevronDown } from "lucide-react";

export default function ShippingAddress({
  formData,
  setFormData,
  selectedShippingTier,
  setSelectedShippingTier
}) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const shippingTiers = [
    {
      id: "standard",
      title: "Standard International (7-14 days)",
      price: 20,
      badge: "Economical"
    },
    {
      id: "express",
      title: "Express (3-7 days)",
      price: 45,
      badge: "Popular"
    },
    {
      id: "priority",
      title: "Priority (2-4 days)",
      price: 65,
      badge: "Fastest"
    }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
      {/* Section 1: Address */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center justify-between">
          <span>Shipping Address</span>
          <span className="text-xs font-normal text-slate-500">Step 1 of 3</span>
        </h3>

        <div className="space-y-4 text-xs">
          {/* Country */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">Country / Destination</label>
            <div className="relative">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 outline-none appearance-none focus:ring-2 focus:ring-[#f95721] focus:border-transparent cursor-pointer font-medium"
              >
                <option value="United States">🇺🇸 United States</option>
                <option value="Singapore">🇸🇬 Singapore</option>
                <option value="United Kingdom">🇬🇧 United Kingdom</option>
                <option value="Germany">🇩🇪 Germany</option>
                <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                <option value="Australia">🇦🇺 Australia</option>
                <option value="India">🇮🇳 India</option>
                <option value="Canada">🇨🇦 Canada</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Emma Wilson"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-[#f95721] focus:border-transparent font-medium"
            />
          </div>

          {/* Street Address */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1.5">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Market Street, Apt 4B"
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-[#f95721] focus:border-transparent font-medium"
            />
          </div>

          {/* City / State / ZIP */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="New York"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-[#f95721]"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="NY"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-[#f95721]"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                placeholder="10001"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none focus:ring-2 focus:ring-[#f95721]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Shipping Options */}
      <div className="pt-4 border-t border-slate-200">
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center space-x-2">
          <Truck className="w-4 h-4 text-[#f95721]" />
          <span>Shipping Options</span>
        </h3>

        <div className="space-y-2.5">
          {shippingTiers.map((tier) => {
            const isSelected = selectedShippingTier === tier.id;
            return (
              <label
                key={tier.id}
                className={`flex items-center justify-between p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                  isSelected
                    ? "border-[#f95721] bg-orange-50/40 shadow-xs"
                    : "border-slate-200 hover:border-slate-300 bg-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="shippingTier"
                    value={tier.id}
                    checked={isSelected}
                    onChange={() => setSelectedShippingTier(tier.id)}
                    className="w-4 h-4 text-[#f95721] focus:ring-[#f95721] accent-[#f95721] cursor-pointer"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">{tier.title}</span>
                    <span className="text-[11px] text-slate-500">{tier.badge}</span>
                  </div>
                </div>
                <span className="text-sm font-extrabold text-slate-900">${tier.price}</span>
              </label>
            );
          })}
        </div>

        {/* Customs Callout */}
        <div className="mt-4 p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-start space-x-2.5 text-xs text-blue-900">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Customs & duties may apply based on your country's regulations. BazaarGo provides automated commercial invoices and international customs clearance documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
