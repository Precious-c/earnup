import { CancelButton } from "@/components/CancelButton"
import { WithdrawOption } from "@/types"
import { AlertCircle, ExternalLink } from "lucide-react"

interface Props {
    selectedOption : WithdrawOption
    amount : string
    address : string
    memo?: string
    setStep : (step : "details" | "confirm" | "select") => void
    handleWithdraw: () => void
}

const WithdrawConfirmation = ({amount, address, memo, selectedOption, setStep, handleWithdraw}: Props) => {
  return (
    <>
          <div className="z-10 ">
            <div className="flex items-center pt-3 pb-1 justify-between">
              <h1 className="text-xl font-medium ml-2">Confirm Withdrawal</h1>
              <CancelButton step="details" setStep={setStep}/>
            </div>
          </div>

          <div className=" pt-4 pb-20">
            <div className="bg-[#1C1C1E] rounded-xl p-6 mb-6">
              <div className="flex justify-center mb-6">
                <img
                  src={selectedOption.icon || "/placeholder.svg"}
                  alt={selectedOption.symbol}
                  className="w-16 h-16 rounded-full"
                />
              </div>

              <div className="text-center mb-6">
                <div className="text-3xl font-bold mb-1">
                  {amount} {selectedOption.symbol}
                </div>
                <div className="text-gray-400">≈ ${(Number.parseFloat(amount) * 2.5).toFixed(2)} USD</div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">To</span>
                  <span className="text-right max-w-[200px] truncate">{address}</span>
                </div>
                {memo && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">MEMO</span>
                    <span>{memo}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Fee</span>
                  <span>{selectedOption.fee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">You will receive</span>
                  <span>
                    {(Number.parseFloat(amount) - Number.parseFloat(selectedOption.fee.split(" ")[0])).toFixed(2)}{" "}
                    {selectedOption.symbol}
                  </span>
                </div>
              </div>
            </div>

            {/* Warning */}
            <div className="flex items-start p-4 bg-[#FF3B30]/10 rounded-xl mb-6">
              <AlertCircle className="w-5 h-5 text-[#FF3B30] mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-300">
                This transaction cannot be reversed once submitted. Please verify all details are correct.
              </div>
            </div>

            {/* Withdraw Button */}
            <button
              onClick={handleWithdraw}
              className="w-full py-4 rounded-xl font-medium bg-[#4CD964] text-black transition-colors"
            >
              Withdraw {amount} {selectedOption.symbol}
            </button>

            {/* Explorer Link */}
            <div className="mt-4 text-center">
              <a
                href="#"
                className="text-[#4CD964] text-sm flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault()
                  // In a real app, this would open the blockchain explorer
                }}
              >
                View transaction status <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </>
  )
}

export default WithdrawConfirmation
