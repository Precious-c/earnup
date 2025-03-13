import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { WithdrawFormData, WithdrawOption } from "@/types"
import { validateAddress } from "@/utils/validateAddress"
import toast, { Toaster } from "react-hot-toast"
import { WithdrawalConfirmation } from "./components/WithdrawalConfirmation"
import { TonForm } from "./components/TonForm"
import { BankForm } from "./components/BankForm"
import { OptionSelection } from "./components/OptionSelection"

export function WithdrawPage() {
  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState<WithdrawOption | null>(null)
  const [formData, setFormData] = useState<WithdrawFormData>({
    amount: "",
    address: "",
    bankName: "",
    accountNumber: "",
    accountName: "",
    swiftCode: "",
  })
  const [step, setStep] = useState<"select" | "form" | "confirm">("select")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleOptionSelect = (option: WithdrawOption) => {
    setSelectedOption(option)
    setStep("form")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.amount || isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      newErrors.amount = "Please enter a valid amount"
    }

    if (selectedOption?.id === "ton") {
      if (!formData.address || formData.address.trim() === "") {
        newErrors.address = "Please enter a valid TON address"
      } else validateAddress(formData.address) === false && (newErrors.address = "Please enter a valid TON address")
      
    } else if (selectedOption?.id === "bank") {
      if (!formData.bankName || formData.bankName.trim() === "") {
        newErrors.bankName = "Bank name is required"
      }
      if (!formData.accountNumber || formData.accountNumber.trim() === "") {
        newErrors.accountNumber = "Account number is required"
      }
      if (!formData.accountName || formData.accountName.trim() === "") {
        newErrors.accountName = "Account name is required"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setStep("confirm")
    }
  }

  const handleConfirm = () => {
    // For now, we'll just navigate back to the wallet
    toast.success("Withdrawal successful")
    navigate("/wallet")
    
  }





  return (
    <div className="min-h-screen text-white">
      <Toaster/>
      {/* Header */}
      <div className="sticky top-0 z-10 bg-main">
        <div className="flex items-center py-2">
          <button
            onClick={() => {
              if (step === "select") {
                navigate(-1)
              } else if (step === "form") {
                setStep("select")
              } else {
                setStep("form")
              }
            }}
            className="p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium ml-2">
            {step === "select"
              ? "Withdraw"
              : step === "form"
                ? `Withdraw ${selectedOption?.name}`
                : "Confirm Withdrawal"}
          </h1>
        </div>
      </div>

      

      {/* Content */}
      {step === "select" && <OptionSelection handleOptionSelect={handleOptionSelect}/>}

      {step === "form" && selectedOption && (selectedOption.id === "ton" 
        ? <TonForm errors={errors} formData={formData} handleConfirm={handleConfirm} handleInputChange={handleInputChange} handleSubmit={handleSubmit} selectedOption={selectedOption} setStep={setStep}/> 
        : <BankForm errors={errors} formData={formData} handleConfirm={handleConfirm} handleInputChange={handleInputChange} handleSubmit={handleSubmit} selectedOption={selectedOption} setStep={setStep}/>)}

      {step === "confirm" && selectedOption && <WithdrawalConfirmation formData={formData} handleConfirm={handleConfirm} selectedOption={selectedOption} setStep={setStep} />}
    </div>
  )
}

