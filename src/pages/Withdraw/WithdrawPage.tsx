import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle, Copy } from "lucide-react";
import tonIcon from "@/assets/icons/toncoin-ton-logo.svg";
import bankIcon from "@/assets/icons/bank-48.png";
import { OptionSelection } from "./components/OptionSelection";
import { PaymentMethodSelection } from "./components/PaymentMethodSelection";
import { AmountForm } from "./components/AmountForm";

export interface SavedPaymentMethod {
  id: string;
  type: "crypto" | "bank";
  name: string;
  details: string;
  icon: string;
  isDefault?: boolean;
}

interface WithdrawOption {
  id: string;
  name: string;
  icon: string;
  fee: string;
  minAmount: string;
  processingTime: string;
}

export interface WithdrawFormData {
  amount: string;
  paymentMethodId: string;
}

// Sample saved payment methods
const savedPaymentMethods: SavedPaymentMethod[] = [
  {
    id: "ton-wallet-1",
    type: "crypto",
    name: "TON Wallet",
    details: "EQAigd85hSbs5dAosuh55d554nkompa52sdhbls22kOrtkG8",
    icon: tonIcon,
    // isDefault: true,
  },
  {
    id: "bank-account-1",
    type: "bank",
    name: "GT Bank",
    details: "****4567",
    icon: bankIcon,
  },
  {
    id: "bank-account-2",
    type: "bank",
    name: "Opay",
    details: "****7890",
    icon: bankIcon,
  },
];

// const withdrawOptions: WithdrawOption[] = [
//   {
//     id: "ton",
//     name: "TON",
//     icon: tonIcon,
//     fee: "0.1 TON",
//     minAmount: "1 TON",
//     processingTime: "~10 minutes",
//   },
//   {
//     id: "bank",
//     name: "Bank Account",
//     icon: bankIcon,
//     fee: "2%",
//     minAmount: "10 EUR",
//     processingTime: "1-3 business days",
//   },
// ];

export function WithdrawPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<WithdrawOption | null>(
    null
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<SavedPaymentMethod | null>(null);
  const [formData, setFormData] = useState<WithdrawFormData>({
    amount: "",
    paymentMethodId: "",
  });
  const [step, setStep] = useState<
    "select" | "payment-method" | "amount" | "confirm"
  >("select");

  const handleOptionSelect = (option: WithdrawOption) => {
    setSelectedOption(option);
    setStep("payment-method");
  };

  const handlePaymentMethodSelect = (method: SavedPaymentMethod) => {
    setSelectedPaymentMethod(method);
    setFormData({
      ...formData,
      paymentMethodId: method.id,
    });
    setStep("amount");
  };

  const handleConfirm = () => {
    // Here you would handle the actual withdrawal process
    // For now, we'll just navigate back to the wallet
    navigate("/wallet");
  };

  const handleAddNewPaymentMethod = () => {
    // This would navigate to a page to add a new payment method
    console.log("Add new payment method");
  };

  // const renderOptionSelection = () => (
  //   <>
  //     {/* <div className="sticky top-0 z-10 bg-black">
  //       <div className="flex items-center px-4 py-3">
  //         <button
  //           onClick={() => navigate(-1)}
  //           className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
  //         >
  //           <ArrowLeft className="w-6 h-6" />
  //         </button>
  //         <h1 className="text-xl font-medium ml-2">Withdraw</h1>
  //       </div>
  //     </div> */}

  //     <div className="px-4 pt-4 pb-20">
  //       <p className="text-gray-400 mb-6">Choose withdrawal method</p>

  //       {withdrawOptions.map((option) => (
  //         <button
  //           key={option.id}
  //           className="w-full flex items-center p-4 bg-[#1C1C1E] hover:bg-[#2C2C2E] rounded-xl transition-colors mb-4"
  //           onClick={() => handleOptionSelect(option)}
  //         >
  //           <img
  //             src={option.icon || "/placeholder.svg"}
  //             alt={option.name}
  //             className="w-10 h-10 rounded-full mr-3"
  //           />
  //           <div className="text-left flex-1">
  //             <div className="font-medium">{option.name}</div>
  //             <div className="text-sm text-gray-400">
  //               Fee: {option.fee} • Min: {option.minAmount}
  //             </div>
  //           </div>
  //           <div className="text-sm text-gray-400">{option.processingTime}</div>
  //         </button>
  //       ))}
  //     </div>
  //   </>
  // );

  // const renderPaymentMethodSelection = () => {
  //   const filteredMethods = savedPaymentMethods.filter(
  //     (method) =>
  //       (selectedOption?.id === "ton" && method.type === "crypto") ||
  //       (selectedOption?.id === "bank" && method.type === "bank")
  //   );

  //   return (
  //     <div className="px-4 pt-4 pb-20">
  //       <p className="text-gray-400 mb-6">
  //         Select your {selectedOption?.name} account
  //       </p>

  //       {filteredMethods.map((method) => (
  //         <button
  //           key={method.id}
  //           className="w-full flex items-center p-4 bg-[#1C1C1E] hover:bg-[#2C2C2E] rounded-xl transition-colors mb-4"
  //           onClick={() => handlePaymentMethodSelect(method)}
  //         >
  //           <img
  //             src={method.icon || "/placeholder.svg"}
  //             alt={method.name}
  //             className="w-10 h-10 rounded-full mr-3"
  //           />
  //           <div className="text-left flex-1">
  //             <div className="font-medium">{method.name}</div>
  //             <div className="text-sm text-gray-400">{method.details}</div>
  //           </div>
  //           {method.isDefault && (
  //             <div className="bg-[#4CD964] text-black text-xs px-2 py-1 rounded-full">
  //               Default
  //             </div>
  //           )}
  //         </button>
  //       ))}

  //       <button
  //         onClick={handleAddNewPaymentMethod}
  //         className="w-full flex items-center justify-center p-4 border border-dashed border-gray-600 hover:border-gray-400 rounded-xl transition-colors"
  //       >
  //         <Plus className="w-5 h-5 mr-2" />
  //         <span>
  //           Add new {selectedOption?.id === "ton" ? "wallet" : "bank account"}
  //         </span>
  //       </button>
  //     </div>
  //   );
  // };

  // const renderAmountForm = () => (
  //   <div className="px-4 pt-4 pb-20">
  //     <div className="bg-[#1C1C1E] rounded-xl p-4 mb-6">
  //       <div className="text-sm text-gray-400 mb-2">Withdraw to</div>
  //       <div className="flex items-center">
  //         <img
  //           src={selectedPaymentMethod?.icon || "/placeholder.svg"}
  //           alt={selectedPaymentMethod?.name}
  //           className="w-10 h-10 rounded-full mr-3"
  //         />
  //         <div className="flex-1">
  //           <div className="font-medium">{selectedPaymentMethod?.name}</div>
  //           <div className="text-sm text-gray-400">
  //             {selectedPaymentMethod?.details}
  //           </div>
  //         </div>
  //         <button
  //           onClick={() => setStep("payment-method")}
  //           className="text-[#4CD964] text-sm"
  //         >
  //           Change
  //         </button>
  //       </div>
  //     </div>

  //     <div className="space-y-4 mb-6">
  //       <div>
  //         <label htmlFor="amount" className="block text-sm text-gray-400 mb-1">
  //           Amount ({selectedOption?.id === "ton" ? "TON" : "EUR"})
  //         </label>
  //         <input
  //           type="text"
  //           id="amount"
  //           name="amount"
  //           value={formData.amount}
  //           onChange={handleInputChange}
  //           placeholder="0.00"
  //           className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
  //             errors.amount ? "border border-red-500" : ""
  //           }`}
  //         />
  //         {errors.amount && (
  //           <p className="text-red-500 text-sm mt-1">{errors.amount}</p>
  //         )}
  //       </div>
  //     </div>

  //     <div className="bg-[#1C1C1E] rounded-xl p-4 mb-6">
  //       <div className="flex justify-between items-center mb-2">
  //         <span className="text-gray-400">Fee</span>
  //         <span>
  //           {selectedOption?.id === "ton"
  //             ? "0.1 TON"
  //             : formData.amount && !isNaN(Number(formData.amount))
  //               ? `${(Number(formData.amount) * 0.02).toFixed(2)} EUR`
  //               : "0.00 EUR"}
  //         </span>
  //       </div>
  //       <div className="flex justify-between items-center mb-2">
  //         <span className="text-gray-400">You will receive</span>
  //         <span>
  //           {formData.amount && !isNaN(Number(formData.amount))
  //             ? selectedOption?.id === "ton"
  //               ? `${(Number(formData.amount) - 0.1).toFixed(2)} TON`
  //               : `${(Number(formData.amount) * 0.98).toFixed(2)} EUR`
  //             : selectedOption?.id === "ton"
  //               ? "0.00 TON"
  //               : "0.00 EUR"}
  //         </span>
  //       </div>
  //       <div className="flex justify-between items-center">
  //         <span className="text-gray-400">Processing time</span>
  //         <span>{selectedOption?.processingTime}</span>
  //       </div>
  //     </div>

  //     <div className="flex items-start p-4 bg-[#1C1C1E] rounded-xl mb-6">
  //       <AlertCircle className="w-5 h-5 text-[#FF9500] mr-2 flex-shrink-0 mt-0.5" />
  //       <p className="text-sm text-gray-400">
  //         Withdrawals cannot be reversed once processed. Please ensure the
  //         amount is correct.
  //       </p>
  //     </div>

  //     <button
  //       onClick={handleSubmit}
  //       className="w-full py-4 bg-[#4CD964] text-black font-medium rounded-xl hover:bg-opacity-90 transition-colors"
  //     >
  //       Continue
  //     </button>
  //   </div>
  // );

  const renderConfirmation = () => (
    <div className="px-4 pt-4 pb-20">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-20 h-20 bg-[#1C1C1E] rounded-full flex items-center justify-center mb-4">
          <img
            src={selectedOption?.icon || "/placeholder.svg"}
            alt={selectedOption?.name}
            className="w-12 h-12"
          />
        </div>
        <h2 className="text-2xl font-bold mb-1">Withdrawal Summary</h2>
        <p className="text-gray-400">Please review your withdrawal details</p>
      </div>

      <div className="bg-[#1C1C1E] rounded-xl p-4 mb-6">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Method</span>
            <span>{selectedOption?.name}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Amount</span>
            <span>
              {formData.amount} {selectedOption?.id === "ton" ? "TON" : "EUR"}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Fee</span>
            <span>
              {selectedOption?.id === "ton"
                ? "0.1 TON"
                : `${(Number(formData.amount) * 0.02).toFixed(2)} EUR`}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">You will receive</span>
            <span className="font-medium">
              {selectedOption?.id === "ton"
                ? `${(Number(formData.amount) - 0.1).toFixed(2)} TON`
                : `${(Number(formData.amount) * 0.98).toFixed(2)} EUR`}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">To</span>
            <div className="flex items-center">
              <span className="text-sm">{selectedPaymentMethod?.name}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Details</span>
            <div className="flex items-center">
              <span className="text-sm truncate max-w-[150px]">
                {selectedPaymentMethod?.details}
              </span>
              <button
                onClick={() =>
                  selectedPaymentMethod?.details &&
                  navigator.clipboard.writeText(selectedPaymentMethod.details)
                }
                className="ml-2 p-1 hover:bg-[#3C3C3E] rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Processing time</span>
            <span>{selectedOption?.processingTime}</span>
          </div>
        </div>
      </div>

      <div className="flex items-start p-4 bg-[#1C1C1E] rounded-xl mb-6">
        <AlertCircle className="w-5 h-5 text-[#FF9500] mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-400">
          By confirming this withdrawal, you agree to our terms and conditions.
          This action cannot be undone.
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleConfirm}
          className="w-full py-4 bg-[#4CD964] text-black font-medium rounded-xl hover:bg-opacity-90 transition-colors"
        >
          Confirm Withdrawal
        </button>

        <button
          onClick={() => setStep("amount")}
          className="w-full py-4 bg-[#2C2C2E] text-white font-medium rounded-xl hover:bg-[#3C3C3E] transition-colors"
        >
          Edit Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 ">
        <div className="flex items-center py-3">
          <button
            onClick={() => {
              if (step === "select") {
                navigate(-1);
              } else if (step === "payment-method") {
                setStep("select");
              } else if (step === "amount") {
                setStep("payment-method");
              } else {
                setStep("amount");
              }
            }}
            className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium ml-2">
            {step === "select"
              ? "Withdraw"
              : step === "payment-method"
                ? `Select ${selectedOption?.name} Account`
                : step === "amount"
                  ? `Withdraw ${selectedOption?.name}`
                  : "Confirm Withdrawal"}
          </h1>
        </div>
      </div>

      {/* Content */}
      {step === "select" && (
        <OptionSelection handleOptionSelect={handleOptionSelect} />
      )}
      {step === "payment-method" && (
        <PaymentMethodSelection
          handleAddNewPaymentMethod={handleAddNewPaymentMethod}
          handlePaymentMethodSelect={handlePaymentMethodSelect}
          savedPaymentMethods={savedPaymentMethods}
          selectedOption={selectedOption}
        />
      )}
      {step === "amount" && (
        <AmountForm
          handleAddNewPaymentMethod={handleAddNewPaymentMethod}
          handlePaymentMethodSelect={handleAddNewPaymentMethod}
          savedPaymentMethods={savedPaymentMethods}
          selectedOption={selectedOption}
          selectedPaymentMethod={selectedPaymentMethod}
          setStep={setStep}
        />
      )}
      {step === "confirm" && renderConfirmation()}
    </div>
  );
}
