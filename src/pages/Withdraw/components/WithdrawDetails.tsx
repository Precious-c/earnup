import { WithdrawOption } from '@/types'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import React from 'react'

interface Props {
    selectedOption : WithdrawOption
    amount : string
    setAmount : (amount : string) => void
    address : string
    setAddress : (address : string) => void
    memo?: string
    setMemo : (memo : string) => void
    step : "details" | "confirm" | "select"
    setStep : (step : "details" | "confirm" | "select") => void
    
}

const WithdrawDetails = ({amount, address, memo, step, selectedOption, setAddress, setAmount, setMemo, setStep}: Props) => {
    
    const isValidAmount = () => {
        if (!amount || !selectedOption) return false
        const numAmount = Number.parseFloat(amount)
        const minAmount = Number.parseFloat(selectedOption.minAmount.split(" ")[0])
        return !isNaN(numAmount) && numAmount >= minAmount
    }

    const handleContinue = () => {
        if (step === "details") {
          setStep("confirm")
        }
      }
    
    const isValidAddress = () => {
        return address.length > 10 // Simple validation, would be more complex in reality
    }

    const canContinue = isValidAmount() && isValidAddress()


  return (
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
  )
}

export default WithdrawDetails
