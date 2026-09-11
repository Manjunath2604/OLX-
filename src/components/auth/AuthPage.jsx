import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Store,
  Globe,
  Check
} from "lucide-react";

export default function AuthPage({
  currentUser,
  setCurrentUser,
  setCurrentScreen,
  initialMode = "login"
}) {
  const [isSignUp, setIsSignUp] = useState(initialMode === "signup");
  const [role, setRole] = useState("buyer"); // "buyer" or "seller"
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("United States");
  const [rememberMe, setRememberMe] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [successToast, setSuccessToast] = useState("");

  // Quick 1-Click Demo Logins
  const handleQuickDemo = (demoType) => {
    if (demoType === "seller") {
      const sellerUser = {
        name: "John Doe",
        email: "john.seller@bazaargo.com",
        role: "seller",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        badge: "Verified Merchant",
        storeName: "TechWorld Store"
      };
      setCurrentUser(sellerUser);
      setSuccessToast("Logged in as Demo Merchant (John Doe)!");
      setTimeout(() => {
        setCurrentScreen("dashboard");
      }, 1000);
    } else {
      const buyerUser = {
        name: "Emma Wilson",
        email: "emma.wilson@example.com",
        role: "buyer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        badge: "Verified Buyer",
        location: "New York, USA"
      };
      setCurrentUser(buyerUser);
      setSuccessToast("Logged in as Demo Shopper (Emma Wilson)!");
      setTimeout(() => {
        setCurrentScreen("home");
      }, 1000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    const newUser = {
      name: fullName || (email.split("@")[0]),
      email: email,
      role: role,
      avatar: role === "seller"
        ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
        : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      badge: role === "seller" ? "Merchant Tier 1" : "Verified Member",
      storeName: role === "seller" ? "My Global Store" : undefined
    };

    setCurrentUser(newUser);
    setSuccessToast(isSignUp ? "Account created successfully!" : "Signed in successfully!");
    
    setTimeout(() => {
      if (role === "seller") {
        setCurrentScreen("dashboard");
      } else {
        setCurrentScreen("home");
      }
    }, 1000);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-gradient-to-b from-slate-50 via-orange-50/20 to-slate-100">
      {/* Success Notification Banner */}
      {successToast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-3 border border-emerald-500/40 animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-bold">{successToast}</span>
        </div>
      )}

      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12">
        {/* Left Presentation Column (Desktop) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div>
            <div className="flex items-center space-x-2.5 mb-8">
              <div className="w-9 h-9 rounded-xl bg-[#f95721] flex items-center justify-center text-white shadow-md shadow-orange-500/30">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Bazaar<span className="text-[#f95721]">Go</span>
              </span>
            </div>

            <h3 className="text-2xl font-black text-white leading-snug">
              Access the World's Cross-Border Marketplace
            </h3>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
              Connect with 180,000+ verified merchants and buyers worldwide with instant escrow authorization.
            </p>

            <div className="mt-8 space-y-3 text-xs">
              <div className="flex items-center space-x-2.5 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>100% Escrow Protection on Every Transaction</span>
              </div>
              <div className="flex items-center space-x-2.5 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-orange-500/20 text-[#f95721] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Fast Dispatches across 120+ Countries</span>
              </div>
              <div className="flex items-center space-x-2.5 text-slate-200">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Direct In-App Chat with Live Translation</span>
              </div>
            </div>
          </div>

          {/* Escrow Guarantee Pill */}
          <div className="mt-8 pt-6 border-t border-slate-700/80 flex items-center space-x-3 text-xs text-slate-400">
            <ShieldCheck className="w-5 h-5 text-[#f95721] shrink-0" />
            <span>Bank-grade 256-bit encryption for all credentials & payouts.</span>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Quick 1-Click Demo Buttons Header */}
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-3.5 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold text-orange-900 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#f95721]" />
                  <span>One-Click Demo Access</span>
                </span>
                <span className="text-[10px] text-orange-700 font-semibold">No password needed</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickDemo("buyer")}
                  className="bg-white hover:bg-orange-100/60 border border-orange-300 text-slate-900 px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-2xs cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-[#f95721]" />
                  <span>Demo Buyer</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickDemo("seller")}
                  className="bg-[#f95721] hover:bg-[#e04612] text-white px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-orange-500/20 cursor-pointer"
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Demo Seller</span>
                </button>
              </div>
            </div>

            {/* Toggle Sign In / Sign Up */}
            <div className="flex border-b border-slate-200 mb-6">
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className={`flex-1 pb-3 text-sm font-bold transition-colors border-b-2 cursor-pointer ${
                  !isSignUp
                    ? "border-[#f95721] text-[#f95721]"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className={`flex-1 pb-3 text-sm font-bold transition-colors border-b-2 cursor-pointer ${
                  isSignUp
                    ? "border-[#f95721] text-[#f95721]"
                    : "border-transparent text-slate-400 hover:text-slate-600"
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Account Type Selector (Buyer vs Seller) */}
            {isSignUp && (
              <div className="mb-5">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">I want to:</label>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setRole("buyer")}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      role === "buyer"
                        ? "bg-orange-50/80 border-[#f95721] text-[#f95721] shadow-2xs font-bold"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Buy Globally</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("seller")}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      role === "seller"
                        ? "bg-orange-50/80 border-[#f95721] text-[#f95721] shadow-2xs font-bold"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>Sell Globally</span>
                  </button>
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {isSignUp && (
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Emma Wilson"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#f95721] focus:border-transparent font-medium"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#f95721] focus:border-transparent font-medium"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-semibold text-slate-700">Password</label>
                  {!isSignUp && (
                    <button
                      type="button"
                      onClick={() => alert("Password reset link sent to demo email!")}
                      className="text-[11px] text-[#f95721] hover:underline font-semibold"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#f95721] focus:border-transparent font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center space-x-2 text-slate-600 cursor-pointer select-none text-[11px]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-slate-300 accent-[#f95721] text-[#f95721]"
                  />
                  <span>Remember me</span>
                </label>

                {isSignUp && (
                  <label className="flex items-center space-x-2 text-slate-600 cursor-pointer select-none text-[11px]">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-3.5 h-3.5 rounded border-slate-300 accent-[#f95721] text-[#f95721]"
                    />
                    <span>Agree to Escrow Terms</span>
                  </label>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full bg-[#f95721] hover:bg-[#e04612] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 flex items-center justify-center space-x-2 transition-transform active:scale-98 cursor-pointer mt-2"
              >
                <span>{isSignUp ? "Create Free Account" : "Sign In to BazaarGo"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Social Sign In Alternatives */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400 block mb-3 font-medium">Or continue with</span>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => handleQuickDemo("buyer")}
                className="flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickDemo("seller")}
                className="flex items-center space-x-2 px-4 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.94 2.78 1.01.08 2.04-.53 2.66-1.28"/>
                </svg>
                <span>Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
