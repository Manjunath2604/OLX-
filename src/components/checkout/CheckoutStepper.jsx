import React from "react";
import { Check } from "lucide-react";

export default function CheckoutStepper({ currentStep = 1, setStep }) {
  const steps = [
    { num: 1, label: "Shipping" },
    { num: 2, label: "Payment" },
    { num: 3, label: "Review" }
  ];

  return (
    <div className="flex items-center justify-center space-x-4 sm:space-x-8 py-6">
      {steps.map((step, idx) => {
        const isPassed = currentStep > step.num;
        const isCurrent = currentStep === step.num;

        return (
          <React.Fragment key={step.num}>
            <div
              onClick={() => setStep && setStep(step.num)}
              className="flex items-center space-x-2.5 cursor-pointer"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                  isCurrent
                    ? "bg-[#f95721] text-white ring-4 ring-orange-100 shadow-sm"
                    : isPassed
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {isPassed ? <Check className="w-4 h-4 stroke-[3]" /> : step.num}
              </div>
              <span
                className={`text-xs sm:text-sm font-semibold ${
                  isCurrent ? "text-slate-900 font-bold" : "text-slate-500"
                }`}
              >
                {step.label}
              </span>
            </div>

            {idx < steps.length - 1 && (
              <div
                className={`h-0.5 w-10 sm:w-16 ${
                  currentStep > step.num ? "bg-emerald-400" : "bg-slate-200"
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
