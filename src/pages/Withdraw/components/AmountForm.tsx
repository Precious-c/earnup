import { SavedPaymentMethod, WithdrawFormData, WithdrawOption } from "@/types";
import { AlertCircle } from "lucide-react";
// import { SavedPaymentMethod, WithdrawFormData } from "../WithdrawPage";
import { useState } from "react";

interface Props {
  formData: WithdrawFormData;
  setFormData: React.Dispatch<React.SetStateAction<WithdrawFormData>>;
  selectedPaymentMethod: SavedPaymentMethod | null;
  savedPaymentMethods: SavedPaymentMethod[];
  selectedOption: WithdrawOption | null;
  handleAddNewPaymentMethod: () => void;
  handlePaymentMethodSelect: (method: SavedPaymentMethod) => void;
  setStep: (step: "select" | "payment-method" | "amount" | "confirm") => void;
}

export const AmountForm = ({
  setFormData,
  selectedOption,
  setStep,
  selectedPaymentMethod,
  formData,
}: Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (
      !formData.amount ||
      isNaN(Number(formData.amount)) ||
      Number(formData.amount) <= 0
    ) {
      newErrors.amount = "Please enter a valid amount";
    }

    if (selectedOption?.id === "ton" && Number(formData.amount) < 1) {
      newErrors.amount = "Minimum withdrawal amount is 1 TON";
    } else if (selectedOption?.id === "bank" && Number(formData.amount) < 10) {
      newErrors.amount = "Minimum withdrawal amount is 10 NGN";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setStep("confirm");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="pt-4 pb-20">
      <div className="bg-[#1C1C1E] rounded-xl p-4 mb-6">
        <div className="text-sm text-gray-400 mb-2">Withdraw to</div>
        <div className="flex items-center">
          <img
            src={selectedPaymentMethod?.icon || "/placeholder.svg"}
            alt={selectedPaymentMethod?.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex-1">
            <div className="font-medium">{selectedPaymentMethod?.name}</div>
            <div className="text-sm text-gray-400 truncate max-w-[280px]">
              {selectedPaymentMethod?.details}
            </div>
          </div>
          <button
            onClick={() => setStep("payment-method")}
            className="text-[#4CD964] text-sm"
          >
            Change
          </button>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="amount" className="block text-sm text-gray-400 mb-1">
            Amount ({selectedOption?.id === "ton" ? "TON" : "NGN"})
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
          <span>
            {selectedOption?.id === "ton"
              ? "0.1 TON"
              : formData.amount && !isNaN(Number(formData.amount))
                ? `${(Number(formData.amount) * 0.02).toFixed(2)} NGN`
                : "0.00 NGN"}
          </span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400">You will receive</span>
          <span>
            {formData.amount && !isNaN(Number(formData.amount))
              ? selectedOption?.id === "ton"
                ? `${(Number(formData.amount) - 0.1).toFixed(2)} TON`
                : `${(Number(formData.amount) * 0.98).toFixed(2)} NGN`
              : selectedOption?.id === "ton"
                ? "0.00 TON"
                : "0.00 NGN"}
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
          Withdrawals cannot be reversed once processed. Please ensure the
          amount is correct.
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
