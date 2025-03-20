import { useState } from "react";
import type { TaskFormData } from "@/types";
import tonIcon from "@/assets/icons/toncoin-ton-logo.svg";
import { ChevronDown } from "lucide-react";
type PaymentMethod = "ton" | "muna";

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

  const Coin = (
    <svg
      viewBox="0 0 14 14"
      className="svg-icon svg-fill icon__up text-[#14d65a]"
      style={{ width: "14px", height: "14px" }}
    >
      <mask
        id="svgiconid_kolo-logo-color_a_5_Gn4Xm"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="8"
        y="3"
        width="5"
        height="8"
      >
        <path
          d="M8.62 8.622v1.4a4.653 4.653 0 0 0 3.893-2.055 5.623 5.623 0 0 0 .082-.962 5.578 5.578 0 0 0-1.59-3.909 3.241 3.241 0 0 1 .907 2.26c0 .872-.34 1.692-.957 2.31a3.245 3.245 0 0 1-2.31.956H8.62Z"
          fill="#fff"
        ></path>
      </mask>
      <g mask="url(#svgiconid_kolo-logo-color_a_5_Gn4Xm)">
        <mask
          id="svgiconid_kolo-logo-color_b_5_Gn4Xm"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="8"
          y="2"
          width="5"
          height="9"
        >
          <path d="M12.742 2.95H8.476v7.218h4.266V2.95Z" fill="#fff"></path>
        </mask>
        <g mask="url(#svgiconid_kolo-logo-color_b_5_Gn4Xm)">
          <path
            fill="url(#svgiconid_kolo-logo-color_c_5_Gn4Xm)"
            d="M8.47 2.943h4.284v7.238H8.47z"
          ></path>
        </g>
      </g>
      <mask
        id="svgiconid_kolo-logo-color_d_5_Gn4Xm"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="7"
      >
        <path
          // pid="3"
          d="M.008 6.64H1.41a5.558 5.558 0 0 1 1.629-3.6 5.573 5.573 0 0 1 2.998-1.558A4.646 4.646 0 0 1 9.754.816c.786.19 1.532.588 2.152 1.192A6.968 6.968 0 0 0 9.829.596 7.002 7.002 0 0 0 .008 6.639Z"
          fill="#fff"
        ></path>
      </mask>
      <g mask="url(#svgiconid_kolo-logo-color_d_5_Gn4Xm)">
        <mask
          id="svgiconid_kolo-logo-color_e_5_Gn4Xm"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="-1"
          y="-1"
          width="14"
          height="8"
        >
          <path d="M12.053-.146H-.137v6.931h12.19v-6.93Z" fill="#fff"></path>
        </mask>
        <g mask="url(#svgiconid_kolo-logo-color_e_5_Gn4Xm)">
          <path
            fill="url(#svgiconid_kolo-logo-color_f_5_Gn4Xm)"
            d="M-.15-.156h12.208v6.944H-.15z"
          ></path>
        </g>
      </g>
      <path
        d="M.115 8.264a7 7 0 1 0 11.877-6.171l-.042-.043-.043-.042A4.639 4.639 0 0 0 9.755.816a4.679 4.679 0 0 0-3.717.666 4.645 4.645 0 0 0-.688.568 4.667 4.667 0 0 0 3.275 7.967v-1.4A3.24 3.24 0 0 1 6.34 7.66a3.245 3.245 0 0 1-.957-2.31c0-.872.34-1.693.957-2.31a3.246 3.246 0 0 1 2.31-.956 3.24 3.24 0 0 1 2.36 1.007 5.578 5.578 0 0 1 1.578 4.299 5.652 5.652 0 0 1-.193 1.12 5.568 5.568 0 0 1-1.435 2.45A5.563 5.563 0 0 1 7 12.6a5.565 5.565 0 0 1-3.96-1.64 5.56 5.56 0 0 1-1.629-4.32H.01a7.03 7.03 0 0 0 .106 1.624Z"
        fill="currentColor"
      ></path>
      <defs>
        <linearGradient
          id="svgiconid_kolo-logo-color_c_5_Gn4Xm"
          x1="12.681"
          y1="3.557"
          x2="8.882"
          y2="9.434"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="currentColor" stop-opacity="0"></stop>
          <stop offset="1" stop-color="currentColor"></stop>
        </linearGradient>
        <linearGradient
          id="svgiconid_kolo-logo-color_f_5_Gn4Xm"
          x1="10.9"
          y1="1.493"
          x2=".978"
          y2="4.414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="currentColor" stop-opacity="0"></stop>
          <stop offset="1" stop-color="currentColor"></stop>
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mt-8">Choose the amount of clicks</h1>

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
          className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-green ${
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
            onClick={() => handlePaymentMethodChange("muna")}
            className={`p-3 rounded-xl text-center transition-colors ${
              formData.paymentMethod === "muna"
                ? "bg-[#14d65a] bg-opacity-20 text-white"
                : "bg-[#1C1C1E] text-gray-400"
            }`}
          >
            Muna Points
          </button>
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("ton")}
            className={`p-3 rounded-xl text-center transition-colors ${
              formData.paymentMethod === "ton"
                ? "bg-[#14d65a] bg-opacity-20 text-white"
                : "bg-[#1C1C1E] text-gray-400"
            }`}
          >
            Other tokens
          </button>
        </div>
      </div>

      {/* Token Selection (if Other tokens is selected) */}
      {formData.paymentMethod === "ton" && (
        <div>
          <label className="block text-sm font-medium text-white mb-1">
            Token <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <button
              type="button"
              className="w-full p-3 bg-[#1C1C1E] rounded-xl text-white flex items-center justify-between focus:outline-none focus:ring-1 focus:ring-accent-green"
              onClick={() => {
                updateFormData({ paymentMethod: "ton" });
              }}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 bg-[#0088CC] rounded-full flex items-center justify-center mr-2">
                  {formData.paymentMethod === "ton" ? (
                    <img src={tonIcon} alt="" />
                  ) : (
                    Coin
                  )}
                </div>
                <span>TON</span>
              </div>
              <ChevronDown className="text-gray-400" />
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
            className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-green pr-10 ${
              errors.pricePerClick ? "border border-red-500" : ""
            }`}
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              {formData.paymentMethod === "ton" ? (
                <img src={tonIcon} alt="" />
              ) : (
                Coin
              )}
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
            <div className="w-6 h-6 rounded-full flex items-center justify-center">
              {formData.paymentMethod === "ton" ? (
                <img src={tonIcon} alt="" />
              ) : (
                Coin
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col space-y-3">
        <button
          onClick={handleContinue}
          className="w-full py-4 bg-accent-green text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors"
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
