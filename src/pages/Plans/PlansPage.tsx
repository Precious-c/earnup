"use client"

import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Shield, Wallet, CreditCard, ArrowUpCircle } from "lucide-react"
import { plansData } from "@/data"


const paymentMethods = [
  {
    id: "crypto",
    icon: <Wallet className="w-6 h-6" />,
    title: "Pay with Crypto",
    description: "Use your favorite cryptocurrency",
  },
  {
    id: "card",
    icon: <CreditCard className="w-6 h-6" />,
    title: "Credit/Debit Card",
    description: "Instant payment via card",
  },
  {
    id: "bank",
    icon: <ArrowUpCircle className="w-6 h-6" />,
    title: "Bank Transfer",
    description: "Direct bank transfer",
  },
]

const plansPage =()=> {
  const { planId } = useParams<{ planId: string }>()
  const navigate = useNavigate()

  const plan = plansData[planId as keyof typeof plansData]

  if (!plan) {
    return null
  }

  return (
    <div className="min-h-screen  text-white px-2">
      <button onClick={() => navigate(-1)} className="p-2 mr-3 hover:bg-[#1C1C1E] rounded-full transition-colors">
        <ArrowLeft className="w-6 h-6" />
      </button>

      <main className=" pt-4 pb-20">
        <div className=" top-0 z-10 mb-8">
          <div className="flex flex-col pl-8 px-4 py-3 bg-stroke-secondary rounded-3xl">
            <h1 className="text-2xl font-medium mb-2">{plan.name}</h1>
            <p className="text-[16px] text-gray-400 font-poppins tracking-wide mb-4">{plan.description}</p>
            <div className="flex justify-center w-full">
              <img src={plan.image} alt={plan.name} className="relative -bottom-2 w-full" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center bg-[#1C1C1E] rounded-lg p-4">
              <Shield className="w-5 h-5 mr-3 text-gray-400" />
              <span className="text-gray-200">{feature}</span>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="space-y-4 mb-8">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              className="w-full flex items-center bg-[#1C1C1E] rounded-lg p-4 hover:bg-[#2C2C2E] transition-colors"
            >
              <div className="mr-4">{method.icon}</div>
              <div className="text-left">
                <div className="font-medium">{method.title}</div>
                <div className="text-sm text-gray-400">{method.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Price and Action */}
        <div className="fixed bottom-0 left-0 right-0 bg-black p-4 border-t border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="text-gray-400">Total amount</div>
            <div className="text-xl font-bold">₦{plan.price.toLocaleString()}</div>
          </div>
          <button
            className="w-full py-4 rounded-lg font-medium text-black transition-colors"
            style={{ backgroundColor: plan.color }}
          >
            Continue
          </button>
        </div>
      </main>
    </div>
  )
}

export default plansPage