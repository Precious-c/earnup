import { WithdrawForm, WithdrawOption } from "@/types";
import { AlertCircle } from "lucide-react";

interface Props {
  selectedOption: WithdrawOption;
  formData: WithdrawForm;
  handleConfirm: () => void;
  setStep: (step: "select" | "form" | "confirm") => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: any;
  handleSubmit: () => void;
}

export const TonForm = ({
  formData,
  errors,
  selectedOption,
  handleInputChange,
  handleSubmit,
}: Props) => {
  return (
    <div className="pt-4 pb-20">
      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="address" className="block text-sm text-gray-400 mb-1">
            TON Wallet Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter TON wallet address"
            className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
              errors.address ? "border border-red-500" : ""
            }`}
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm text-gray-400 mb-1">
            Amount (TON)
          </label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            placeholder="0.00"
            className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
              errors.amount ? "border border-red-500" : ""
            }`}
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
          )}
        </div>
      </div>

      <div className="bg-[#1C1C1E] rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">Fee</span>
          <span>{selectedOption?.fee}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">You will receive</span>
          <span>
            {formData.amount && !isNaN(Number(formData.amount))
              ? `${(Number(formData.amount) - 0.1).toFixed(2)} TON`
              : "0.00 TON"}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Processing time</span>
          <span>{selectedOption?.processingTime}</span>
        </div>
      </div>

      <div className="flex items-start p-4 bg-[#1C1C1E] rounded-xl mb-6">
        <AlertCircle className="w-5 h-5 text-[#FF9500] mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-400">
          Make sure the address is correct. Transactions cannot be reversed once
          processed.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-4 bg-[#4CD964] text-black font-medium rounded-xl hover:bg-opacity-90 transition-colors"
      >
        Continue
      </button>
    </div>
  );
};
