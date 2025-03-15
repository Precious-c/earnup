import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { OptionSelection } from "./components/OptionSelection";
import { PaymentMethodSelection } from "./components/PaymentMethodSelection";
import { AmountForm } from "./components/AmountForm";
import { WithdrawalConfirmation } from "./components/WithdrawalConfirmation";
import { SavedPaymentMethod, WithdrawFormData, WithdrawOption } from "@/types";
import { savedPaymentMethods } from "@/data";

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
    // We'll just navigate back to the wallet
    navigate("/wallet");
  };

  const handleAddNewPaymentMethod = () => {
    // This would navigate to a page to add a new payment page
    console.log("Add new payment method");
  };

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
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {step === "confirm" && (
        <WithdrawalConfirmation
          formData={formData}
          handleConfirm={handleConfirm}
          selectedOption={selectedOption}
          setStep={setStep}
          selectedPaymentMethod={selectedPaymentMethod}
        />
      )}
    </div>
  );
}
