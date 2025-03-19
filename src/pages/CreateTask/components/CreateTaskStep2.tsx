"use client";

import { useState } from "react";
import type { TaskFormData } from "@/types";

type PaymentMethod = "ton" | "usdt" | "seconds";

interface CreateTaskStep2Props {
  formData: TaskFormData;
  updateFormData: (data: Partial<TaskFormData>) => void;
  onContinue: () => void;
  onBack: () => void;
}

export function CreateTaskStep2({
  formData,
  updateFormData,
  onContinue,
  onBack,
}: CreateTaskStep2Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.numberOfClicks || formData.numberOfClicks < 500) {
      newErrors.numberOfClicks = "Minimum clicks: 500";
    }

    if (formData.pricePerClick <= 0) {
      newErrors.pricePerClick = "Price per click must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      onContinue();
    }
  };

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    updateFormData({ paymentMethod: method });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Choose the amount of clicks</h1>

      {/* Number of Clicks */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Number of clicks <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          value={formData.numberOfClicks}
          onChange={(e) =>
            updateFormData({
              numberOfClicks: Number.parseInt(e.target.value) || 0,
            })
          }
          min={500}
          className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4945FF] ${
            errors.numberOfClicks ? "border border-red-500" : ""
          }`}
        />
        {errors.numberOfClicks ? (
          <p className="text-red-500 text-sm mt-1">{errors.numberOfClicks}</p>
        ) : (
          <p className="text-gray-400 text-sm mt-1">Minimum clicks: 500</p>
        )}
      </div>

      {/* Payment Method */}
      <div>
        <label className="block text-sm font-medium text-white mb-3">
          Payment method
        </label>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("seconds")}
            className={`p-3 rounded-xl text-center transition-colors ${
              formData.paymentMethod === "seconds"
                ? "bg-[#4945FF] bg-opacity-20 text-white"
                : "bg-[#1C1C1E] text-gray-400"
            }`}
          >
            SECONDS
          </button>
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("ton")}
            className={`p-3 rounded-xl text-center transition-colors ${
              formData.paymentMethod === "ton" ||
              formData.paymentMethod === "usdt"
                ? "bg-[#4945FF] bg-opacity-20 text-white"
                : "bg-[#1C1C1E] text-gray-400"
            }`}
          >
            Other tokens
          </button>
        </div>
      </div>

      {/* Token Selection (if Other tokens is selected) */}
      {(formData.paymentMethod === "ton" ||
        formData.paymentMethod === "usdt") && (
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Token <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full p-3 bg-[#1C1C1E] rounded-xl text-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-[#4945FF]"
              onClick={() => {
                // This would open a token selection modal in a real app
                updateFormData({ paymentMethod: "ton" });
              }}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0088CC] rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">₮</span>
                </div>
                <span>TON</span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Price Per Click */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Price per click
        </label>
        <div className="relative">
          <input
            type="number"
            value={formData.pricePerClick}
            onChange={(e) =>
              updateFormData({
                pricePerClick: Number.parseFloat(e.target.value) || 0,
              })
            }
            step="0.01"
            min="0"
            className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4945FF] pr-10 ${
              errors.pricePerClick ? "border border-red-500" : ""
            }`}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="w-6 h-6 bg-[#0088CC] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">₮</span>
            </div>
          </div>
        </div>
        {errors.pricePerClick && (
          <p className="text-red-500 text-sm mt-1">{errors.pricePerClick}</p>
        )}
      </div>

      {/* Total Price */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Price
        </label>
        <div className="relative">
          <input
            type="number"
            value={formData.totalPrice}
            readOnly
            className="w-full p-3 bg-[#1C1C1E] rounded-xl text-white focus:outline-none pr-10"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="w-6 h-6 bg-[#0088CC] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">₮</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col space-y-3">
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-[#4945FF] text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors"
        >
          Continue with {formData.paymentMethod.toUpperCase()}
        </button>

        <button
          onClick={onBack}
          className="w-full py-4 bg-[#1C1C1E] text-white font-medium rounded-xl hover:bg-[#2C2C2E] transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
}
