"use client";

import type { TaskFormData } from "@/types";
import { Copy } from "lucide-react";

interface CreateTaskStep3Props {
  formData: TaskFormData;
  onPublish: () => void;
  onBack: () => void;
}

export function CreateTaskStep3({
  formData,
  onPublish,
  onBack,
}: CreateTaskStep3Props) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-4">Details</h1>

      {/* Task Details */}
      <div className="bg-[#1C1C1E] rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium">{formData.description}</p>
              <p className="text-[#4CD964]">+ ₦ 100,000</p>
            </div>
          </div>
          <button className="bg-[#FF5C00] text-white px-4 py-1 rounded-full">
            Start
          </button>
        </div>

        {/* Link */}
        <div className="border-t border-gray-800 pt-4 pb-2">
          <div className="flex justify-between items-start mb-4">
            <span className="text-gray-400">Link</span>
            <div className="flex-1 max-w-[70%] ml-4 text-right">
              <div className="flex items-center justify-end">
                <p className="text-white text-sm break-all">{formData.link}</p>
                <button
                  onClick={() => handleCopy(formData.link)}
                  className="ml-2 p-1 hover:bg-[#2C2C2E] rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Geo Targeting */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">Geo targeting</span>
            <span className="text-white">
              {formData.geoTarget?.language
                ? formData.geoTarget.language.toUpperCase()
                : "English"}
            </span>
          </div>

          {/* Number of Clicks */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">Number of clicks</span>
            <span className="text-white">
              {formData.numberOfClicks.toLocaleString()}
            </span>
          </div>

          {/* Price */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Price</span>
            <span className="text-white">
              {formData.totalPrice} {formData.paymentMethod.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col space-y-3">
        <button
          onClick={onPublish}
          className="w-full py-4 bg-[#4945FF] text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors"
        >
          Publish for {formData.totalPrice}{" "}
          {formData.paymentMethod.toUpperCase()}
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
