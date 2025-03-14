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

export const BankForm = ({
  errors,
  formData,
  handleInputChange,
  handleSubmit,
  selectedOption,
}: Props) => (
  <div className="pt-4 pb-20">
    <div className="space-y-4 mb-6">
      <div>
        <label htmlFor="bankName" className="block text-sm text-gray-400 mb-1">
          Bank Name
        </label>
        <input
          type="text"
          id="bankName"
          name="bankName"
          value={formData.bankName}
          onChange={handleInputChange}
          placeholder="Enter bank name"
          className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
            errors.bankName ? "border border-red-500" : ""
          }`}
        />
        {errors.bankName && (
          <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="accountNumber"
          className="block text-sm text-gray-400 mb-1"
        >
          Account Number / IBAN
        </label>
        <input
          type="text"
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
          placeholder="Enter account number"
          className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
            errors.accountNumber ? "border border-red-500" : ""
          }`}
        />
        {errors.accountNumber && (
          <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="accountName"
          className="block text-sm text-gray-400 mb-1"
        >
          Account Holder Name
        </label>
        <input
          type="text"
          id="accountName"
          name="accountName"
          value={formData.accountName}
          onChange={handleInputChange}
          placeholder="Enter account holder name"
          className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
            errors.accountName ? "border border-red-500" : ""
          }`}
        />
        {errors.accountName && (
          <p className="text-red-500 text-sm mt-1">{errors.accountName}</p>
        )}
      </div>

      {/* <div>
          <label htmlFor="swiftCode" className="block text-sm text-gray-400 mb-1">
            SWIFT/BIC Code (Optional)
          </label>
          <input
            type="text"
            id="swiftCode"
            name="swiftCode"
            value={formData.swiftCode}
            onChange={handleInputChange}
            placeholder="Enter SWIFT/BIC code"
            className="w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964]"
          />
        </div> */}

      <div>
        <label htmlFor="amount" className="block text-sm text-gray-400 mb-1">
          Amount (NGN)
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
        <span className="text-gray-400">Fee (2%)</span>
        <span>
          {formData.amount && !isNaN(Number(formData.amount))
            ? `${(Number(formData.amount) * 0.02).toFixed(2)} NGN`
            : "0.00 NGN"}
        </span>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-400">You will receive</span>
        <span>
          {formData.amount && !isNaN(Number(formData.amount))
            ? `${(Number(formData.amount) * 0.98).toFixed(2)} NGN`
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
        Make sure all bank details are correct. Additional fees may be charged
        by your bank.
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
