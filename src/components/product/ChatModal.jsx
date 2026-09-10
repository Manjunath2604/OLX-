import React, { useState } from "react";
import { X, Send, ShieldCheck, CheckCheck, Globe } from "lucide-react";

export default function ChatModal({ isOpen, onClose, seller, product }) {
  const [messages, setMessages] = useState([
    {
      sender: "seller",
      text: `Hello! Thanks for your interest in the ${product?.title || "listing"}. How can I assist you today? We offer fast international dispatch with full tracking.`,
      time: "10:14 AM"
    }
  ]);
  const [input, setInput] = useState("");

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      sender: "user",
      text: input,
      time: "Just now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated quick response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "seller",
          text: "Yes, this item is 100% genuine and covered by BazaarGo Escrow Guarantee. We can ship it out first thing tomorrow!",
          time: "Just now"
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col h-[520px]">
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white font-bold flex items-center justify-center">
              {seller?.name?.[0] || "T"}
            </div>
            <div>
              <h4 className="font-bold text-sm leading-tight">{seller?.name || "TechWorld Store"}</h4>
              <div className="flex items-center space-x-1 text-[11px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Online • Verified Seller</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Translation Banner */}
        <div className="bg-orange-50 border-b border-orange-100 px-4 py-2 flex items-center space-x-2 text-[11px] text-orange-900">
          <Globe className="w-3.5 h-3.5 text-[#f95721] shrink-0" />
          <span>Real-time cross-border translation enabled.</span>
        </div>

        {/* Messages List */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-slate-50/50">
          {messages.map((m, i) => {
            const isUser = m.sender === "user";
            return (
              <div
                key={i}
                className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 shadow-2xs leading-relaxed ${
                    isUser
                      ? "bg-[#f95721] text-white rounded-br-none"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-none"
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">{m.time}</span>
              </div>
            );
          })}
        </div>

        {/* Escrow Caution Note */}
        <div className="px-4 py-1.5 bg-slate-100 border-t border-slate-200 text-[10px] text-slate-500 flex items-center space-x-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Keep payments inside BazaarGo Escrow to stay protected.</span>
        </div>

        {/* Input Footer */}
        <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message to the seller..."
            className="flex-1 bg-slate-100 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:ring-2 focus:ring-[#f95721]"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-xl bg-[#f95721] hover:bg-[#e04612] text-white flex items-center justify-center shrink-0 cursor-pointer shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
