"use client"

import type React from "react"

import { useState } from "react"
import { Check, Star, Award, Crown } from "lucide-react"

interface PlanFeature {
  text: string
  included: boolean
}

interface Plan {
  id: string
  name: string
  price: number
  icon: React.ReactNode
  color: string
  features: PlanFeature[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic",
    price: 1000,
    icon: <Star className="h-6 w-6" />,
    color: "#4CD964",
    features: [
      { text: "Limited tasks", included: true },
      { text: "1x Earning Rate", included: true },
      { text: "Weekly rewards", included: true },
      { text: "Special tasks", included: false },
      { text: "Priority support", included: false },
    ],
  },
  {
    id: "gold",
    name: "Gold",
    price: 5000,
    icon: <Award className="h-6 w-6" />,
    color: "#FFD700",
    popular: true,
    features: [
      { text: "Unlimited tasks", included: true },
      { text: "2x Earning Rate", included: true },
      { text: "Weekly rewards", included: true },
      { text: "15% referral bonus", included: true },
      { text: "No minimum Withdrawal", included: true },
    ],
  },
  {
    id: "diamond",
    name: "Diamond",
    price: 10000,
    icon: <Crown className="h-6 w-6" />,
    color: "#00BFFF",
    features: [
      { text: "Unlimited tasks", included: true },
      { text: "3x earning Rate", included: true },
      { text: "Weekly rewards", included: true },
      { text: "Premium features", included: true },
      { text: "Priority support", included: true },
    ],
  },
]

export function MembershipPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  return (
    <div className="mb-8">
      <h2 className="text-white text-lg font-medium mb-4">Membership Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-[#1C1C1E] rounded-xl p-5 relative overflow-hidden transition-all duration-300 ${
              selectedPlan === plan.id ? "ring-2" : ""
            }`}
            style={{
              boxShadow: selectedPlan === plan.id ? `0 0 0 2px ${plan.color}` : "none",
            }}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div
                  className="text-xs font-bold px-3 py-1 rounded-bl-lg"
                  style={{ backgroundColor: plan.color, color: "#000" }}
                >
                  POPULAR
                </div>
              </div>
            )}

            {/* Plan header */}
            <div className="flex items-center mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
              >
                {plan.icon}
              </div>
              <div>
                <h3 className="text-white font-medium">{plan.name}</h3>
                <div className="text-lg font-bold" style={{ color: plan.color }}>
                  ₦{plan.price.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-2 mb-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-0.5 mr-2">
                    {feature.included ? (
                      <Check className="h-4 w-4" style={{ color: plan.color }} />
                    ) : (
                      <div className="h-4 w-4 rounded-full border border-gray-600" />
                    )}
                  </div>
                  <span className={feature.included ? "text-white" : "text-gray-500"}>{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Action button */}
            <button
              className="w-full py-2 rounded-lg font-medium transition-colors"
              style={{
                backgroundColor: selectedPlan === plan.id ? plan.color : `${plan.color}20`,
                color: selectedPlan === plan.id ? "#000" : plan.color,
              }}
            >
              {selectedPlan === plan.id ? "Purchase Plan" : "Select Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

