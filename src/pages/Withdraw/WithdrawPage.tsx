import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {  ChevronRight } from "lucide-react"
import { WithdrawOption } from "@/types"
import { withdrawOptions } from "@/data"
import NavigateBackButton from "@/components/NavigateBackButton"
import { Toaster } from "react-hot-toast"
import WithdrawDetails from "./components/WithdrawDetails"
import WithdrawConfirmation from "./components/WithdrawConfirmation"

export function WithdrawPage() {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState<WithdrawOption | null>(null)
  const [amount, setAmount] = useState("")
  const [address, setAddress] = useState("")
  const [memo, setMemo] = useState("")
  const [step, setStep] = useState<"select" | "details" | "confirm">("select")

  const handleWithdraw = () => {
    // For now navigate back to the wallet
    navigate("/wallet")
  }

  return (
    <div className="min-h-scree text-white">
        <div className="sticky top-0 z-20 flex items-center mt-4 bg-main py-2">
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
          <div className="pb-20">
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
            <WithdrawDetails address={address} selectedOption={selectedOption} amount={amount} memo={memo} step={step} setStep={setStep} setAddress={setAddress} setAmount={setAmount} setMemo={setMemo} />       
        )}

        {/* Confirmation Screen */}
        {step === "confirm" && selectedOption && (
            <WithdrawConfirmation address={address} amount={amount} handleWithdraw={handleWithdraw} selectedOption={selectedOption} setStep={setStep}  />
        )} 
    </div>
  )
}

