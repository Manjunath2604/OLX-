import React, { useState } from "react";
import {
  Search,
  Globe,
  User,
  ShoppingBag,
  PlusCircle,
  Menu,
  X,
  ChevronDown,
  Layers,
  ShieldCheck,
  LogIn,
  LogOut
} from "lucide-react";

export default function Header({
  currentScreen,
  setCurrentScreen,
  searchQuery,
  setSearchQuery,
  cartCount = 2,
  selectedCategory,
  setSelectedCategory,
  currentUser,
  setCurrentUser
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("EN • USD ($)");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentScreen("listing");
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-10 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentScreen("home")}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f95721] to-[#ff7e40] flex items-center justify-center text-white shadow-md shadow-orange-500/20">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 flex items-center">
                Bazaar<span className="text-[#f95721]">Go</span>
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold -mt-1">
                Global Marketplace
              </span>
            </div>
          </div>

          {/* Search bar (visible when not on home screen hero or on desktop) */}
          {currentScreen !== "home" && (
            <form
              onSubmit={handleSearchSubmit}
              className="hidden md:flex flex-1 max-w-xl mx-4 items-center bg-slate-50 border border-slate-300 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#f95721] focus-within:border-transparent transition-all shadow-inner"
            >
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  if (currentScreen !== "listing") setCurrentScreen("listing");
                }}
                className="bg-slate-100 text-slate-700 text-xs font-semibold py-2.5 px-3 border-r border-slate-300 outline-none cursor-pointer hover:bg-slate-200/70"
              >
                <option value="all">All Categories</option>
                <option value="vehicles">Vehicles</option>
                <option value="mobiles">Mobiles</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="fashion">Fashion</option>
                <option value="realestate">Real Estate</option>
              </select>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search products, brands, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2.5 pl-3 pr-10 text-sm text-slate-900 bg-transparent outline-none placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="bg-[#f95721] hover:bg-[#e04612] text-white px-5 py-2.5 flex items-center justify-center transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          )}

          {/* Nav links (on Home or general) */}
          {currentScreen === "home" && (
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-700">
              <button
                onClick={() => setCurrentScreen("listing")}
                className="hover:text-[#f95721] transition-colors cursor-pointer flex items-center space-x-1"
              >
                <span>Categories</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              <button
                onClick={() => setCurrentScreen("home")}
                className="hover:text-[#f95721] transition-colors cursor-pointer"
              >
                How It Works
              </button>
              <button
                onClick={() => setCurrentScreen("dashboard")}
                className="hover:text-[#f95721] transition-colors cursor-pointer flex items-center space-x-1"
              >
                <span>For Sellers</span>
                <span className="px-1.5 py-0.5 text-[10px] bg-orange-100 text-[#f95721] font-bold rounded-full">
                  Portal
                </span>
              </button>
              <button
                onClick={() => setCurrentScreen("mobile")}
                className="hover:text-[#f95721] transition-colors cursor-pointer"
              >
                Mobile App
              </button>
              <a
                href="#help"
                className="hover:text-[#f95721] transition-colors cursor-pointer"
              >
                Help
              </a>
            </nav>
          )}

          {/* Right Action Icons & Sell CTA */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Currency/Language Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="flex items-center space-x-1 text-xs font-semibold text-slate-700 hover:text-[#f95721] p-1.5 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <Globe className="w-4 h-4 text-slate-500" />
                <span className="hidden sm:inline">{selectedCurrency}</span>
                <span className="sm:hidden">EN</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 text-xs text-slate-700">
                  <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase">Select Region</div>
                  {["EN • USD ($)", "EN • EUR (€)", "EN • INR (₹)", "EN • AED (AED)", "EN • GBP (£)"].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        setSelectedCurrency(curr);
                        setCurrencyDropdown(false);
                      }}
                      className={`w-full text-left px-3 py-2 hover:bg-orange-50 hover:text-[#f95721] flex items-center justify-between ${
                        selectedCurrency === curr ? "font-bold text-[#f95721] bg-orange-50/50" : ""
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* User Profile / Login Link */}
            {currentUser ? (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (currentUser.role === "seller") {
                      setCurrentScreen("dashboard");
                    } else {
                      setCurrentScreen("login");
                    }
                  }}
                  title={`Signed in as ${currentUser.name} (${currentUser.role})`}
                  className="flex items-center space-x-1.5 p-1.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#f95721] transition-colors cursor-pointer"
                >
                  {currentUser.avatar ? (
                    <img
                      src={currentUser.avatar}
                      alt={currentUser.name}
                      className="w-7 h-7 rounded-full object-cover border border-slate-200"
                    />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                  <span className="text-xs font-bold text-slate-800 hidden md:inline truncate max-w-[100px]">
                    {currentUser.name}
                  </span>
                </button>
                <button
                  onClick={() => {
                    setCurrentUser(null);
                    setCurrentScreen("login");
                  }}
                  title="Sign Out"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 transition-colors hidden sm:inline-flex cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setCurrentScreen("login")}
                title="Sign In / Register"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#f95721] transition-colors cursor-pointer border border-slate-200"
              >
                <LogIn className="w-4 h-4 text-[#f95721]" />
                <span className="text-xs font-bold">Sign In</span>
              </button>
            )}

            {/* Cart / Saved Items (Number removed) */}
            <button
              onClick={() => setCurrentScreen("checkout")}
              title="View Cart & Checkout"
              className="relative p-2 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#f95721] transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#f95721] ring-2 ring-white"></span>
            </button>

            {/* Sell Button CTA */}
            <button
              onClick={() => setCurrentScreen("dashboard")}
              className="bg-[#f95721] hover:bg-[#e04612] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold text-sm shadow-md shadow-orange-500/25 flex items-center space-x-1.5 transition-all transform active:scale-95 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Sell</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            <button
              onClick={() => {
                setCurrentScreen("home");
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              🏠 Home
            </button>
            <button
              onClick={() => {
                setCurrentScreen("listing");
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              🛍️ All Products
            </button>
            <button
              onClick={() => {
                setCurrentScreen("dashboard");
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              📊 Vendor Portal
            </button>
            <button
              onClick={() => {
                setCurrentScreen("checkout");
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              💳 Escrow Checkout
            </button>
            <button
              onClick={() => {
                setCurrentScreen("mobile");
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-100"
            >
              📱 Mobile App
            </button>
            <button
              onClick={() => {
                setCurrentScreen("login");
                setMobileMenuOpen(false);
              }}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-100 font-bold text-[#f95721]"
            >
              🔐 Demo Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
