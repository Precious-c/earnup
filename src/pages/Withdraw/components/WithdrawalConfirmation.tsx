import { WithdrawFormData, WithdrawOption } from "@/types"
import { AlertCircle, Copy } from "lucide-react";

interface Props {
    selectedOption: WithdrawOption;
    formData: WithdrawFormData
    handleConfirm: () => void
    setStep: (step: "select" | "form" | "confirm") => void
}
export const WithdrawalConfirmation = ({selectedOption, formData, handleConfirm, setStep}: Props) => {
    
    return (
    
    <div className=" pt-4 pb-20">
      <div className="flex flex-col items-center justify-center mb-8">
        <div className="w-20 h-20 bg-[#1C1C1E] rounded-full flex items-center justify-center mb-4">
          <img src={selectedOption?.icon || "/placeholder.svg"} alt={selectedOption?.name} className="w-12 h-12" />
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
              {selectedOption?.id === "ton" ? "0.1 TON" : `${(Number(formData.amount) * 0.02).toFixed(2)} EUR`}
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

          {selectedOption?.id === "ton" ? (
            <div className="flex justify-between items-center">
              <span className="text-gray-400">To address</span>
              <div className="flex items-center">
                <span className="text-sm truncate max-w-[150px]">{formData.address}</span>
                <button
                  onClick={() => formData.address && navigator.clipboard.writeText(formData.address)}
                  className="ml-2 p-1 hover:bg-[#3C3C3E] rounded-lg transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Bank</span>
                <span>{formData.bankName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Account</span>
                <span className="text-sm truncate max-w-[200px]">{formData.accountNumber}</span>
              </div>
            </>
          )}

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Processing time</span>
            <span>{selectedOption?.processingTime}</span>
          </div>
        </div>
      </div>

      <div className="flex items-start p-4 bg-[#1C1C1E] rounded-xl mb-6">
        <AlertCircle className="w-5 h-5 text-[#FF9500] mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-400">
          By confirming this withdrawal, you agree to our terms and conditions. This action cannot be undone.
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
          onClick={() => setStep("form")}
          className="w-full py-4 bg-[#2C2C2E] text-white font-medium rounded-xl hover:bg-[#3C3C3E] transition-colors"
        >
          Edit Details
        </button>
      </div>
    </div>
  )
}