import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft, Search, AlertCircle, ChevronRight, ExternalLink } from "lucide-react"
import { WithdrawOption } from "@/types"
import { withdrawOptions } from "@/data"
import NavigateBackButton from "@/components/NavigateBackButton"
import { Toaster } from "react-hot-toast"
import WithdrawDetails from "./components/WithdrawDetails"

export function WithdrawPage() {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState<WithdrawOption | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [amount, setAmount] = useState("")
  const [address, setAddress] = useState("")
  const [memo, setMemo] = useState("")
  const [step, setStep] = useState<"select" | "details" | "confirm">("select")

  const filteredOptions = withdrawOptions.filter(
    (option) =>
      option.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      option.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleContinue = () => {
    if (step === "details") {
      setStep("confirm")
    }
  }

  const handleWithdraw = () => {
    // For now navigate back to the wallet
    navigate("/wallet")
  }

  const isValidAmount = () => {
    if (!amount || !selectedOption) return false
    const numAmount = Number.parseFloat(amount)
    const minAmount = Number.parseFloat(selectedOption.minAmount.split(" ")[0])
    return !isNaN(numAmount) && numAmount >= minAmount
  }

  const isValidAddress = () => {
    return address.length > 10 // Simple validation, would be more complex in reality
  }

  const canContinue = isValidAmount() && isValidAddress()

  return (
    <div className="min-h-scree text-white">
        <div className="sticky top-0 z-10 flex items-center my-4 bg-main py-2">
            <NavigateBackButton className="w-[10%]"/>
            <div className="flex items-center justify-center w-[80%]">
            <h1 className="text-xl font-medium ml-2 text-center">Withdraw</h1>
            </div>
        </div>
        <Toaster />

        {/* Option Selection Screen */}
      {step === "select" && (
        
        <>
            <span className="text-sm text-gray-400">Select withdraw option</span>
          <div className="pt-2 pb-20">
            {withdrawOptions.map((option) => (
              <button
                key={option.id}
                className="w-full flex items-center py-2 hover:bg-[#1C1C1E] rounded-xl transition-colors mb-2"
                onClick={() => {
                  setSelectedOption(option)
                  setStep("details")
                }}
              >
                <img
                  src={option.icon || "/placeholder.svg"}
                  alt={option.symbol}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="text-left flex-1">
                  <div className="font-medium">{option.symbol}</div>
                  <div className="text-sm text-gray-400">{option.name}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))}
          </div>
        </>
      )}

     {/* Withdrawal Details Screen */}
      {step === "details" && selectedOption && (
    //  <WithdrawDetails address={address} selectedOption={selectedOption} amount={amount} memo={memo} step={step} setStep={setStep} setAddress={setAddress} setAmount={setAmount} setMemo={setMemo} />

        <>
        <button
                onClick={() => setStep("select")}
                className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
          <div className="p-2 pt-4 pb-20">
            {/* Amount Input */}
            <div className="bg-[#1C1C1E] rounded-xl p-4 mb-4">
              <div className="text-sm text-gray-400 mb-2">Amount</div>
              <div className="flex items-center">
                <input
                  type="number"
                  placeholder={`Min ${selectedOption.minAmount}`}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent border-none w-full text-xl focus:outline-none"
                />
                <div className="flex items-center mr-2">
                  <img
                    src={selectedOption.icon || "/placeholder.svg"}
                    alt={selectedOption.symbol}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span>{selectedOption.symbol}</span>
                </div>
              </div>
              <div className="flex justify-between mt-2 ">
                <span className="text-xs text-gray-400">Min: {selectedOption.minAmount}</span>
                <button
                  className="text-xs text-[#4CD964]"
                  onClick={() => {
                    // Set to max available (in a real app, this would be dynamic)
                    setAmount(selectedOption.minAmount.split(" ")[0])
                  }}
                >
                  MAX
                </button>
              </div>
            </div>

            {/* Address Input */}
            <div className="bg-[#1C1C1E] rounded-xl p-4 mb-4">
              <div className="text-sm text-gray-400 mb-2">Recipient {selectedOption.symbol} Address</div>
              <input
                type="text"
                placeholder={`Enter ${selectedOption.symbol} address`}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-[#2C2C2E] border-none w-full p-3 rounded-lg text-sm focus:outline-none"
              />
              {selectedOption.network && (
                <div className="text-xs text-gray-400 mt-2">Network: {selectedOption.network}</div>
              )}
            </div>

            {/* MEMO Input (for certain cryptocurrencies) */}
            {selectedOption.id === "ton" && (
              <div className="bg-[#1C1C1E] rounded-xl p-4 mb-4">
                <div className="text-sm text-gray-400 mb-2">MEMO (Optional)</div>
                <input
                  type="text"
                  placeholder="Enter MEMO if required"
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  className="bg-[#2C2C2E] border-none w-full p-3 rounded-lg text-sm focus:outline-none"
                />
              </div>
            )}

            {/* Transaction Details */}
            <div className="bg-[#1C1C1E] rounded-xl p-4 mb-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Fee</span>
                  <span>{selectedOption.fee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Processing Time</span>
                  <span>{selectedOption.processingTime}</span>
                </div>
                {amount && isValidAmount() && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">You will receive</span>
                    <span>
                      {(Number.parseFloat(amount) - Number.parseFloat(selectedOption.fee.split(" ")[0])).toFixed(2)}{" "}
                      {selectedOption.symbol}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Warning */}
            <div className="flex items-start p-4 bg-[#FF3B30]/10 rounded-xl mb-6">
              <AlertCircle className="w-5 h-5 text-[#FF3B30] mr-2 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-[#FF3B30] font-medium mb-1">Important</p>
                <p className="text-gray-300">
                  Make sure the address is correct and on the {selectedOption.network || selectedOption.symbol} network.
                  Sending to the wrong address or network may result in permanent loss of funds.
                </p>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={!canContinue}
              className={`w-full py-4 rounded-xl font-medium transition-colors ${
                canContinue ? "bg-[#4CD964] text-black" : "bg-[#1C1C1E] text-gray-500"
              }`}
            >
              Continue
            </button>
          </div>
        </>
      )}

      {step === "confirm" && selectedOption && (
        // Confirmation Screen
        <>
          <div className="sticky top-0 z-10 ">
            <div className="flex items-center px-4 py-3">
              <button
                onClick={() => setStep("details")}
                className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-medium ml-2">Confirm Withdrawal</h1>
            </div>
          </div>

          <div className="px-4 pt-4 pb-20">
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
      )}
    </div>
  )
}

