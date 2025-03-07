"use client"

import { motion } from "framer-motion"

interface BalanceProps {
  amount: number
  currency?: string
  isLoading?: boolean
}

export function Balance({ amount, currency = "₦", isLoading = false }: BalanceProps) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-gray-400 mb-2">My Balance</h2>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-4xl md:text-5xl font-bold mb-8"
      >
        {isLoading ? (
          <div className="h-12 w-32 bg-gray-800 rounded animate-pulse mx-auto" />
        ) : (
          <span>
            {currency}
            {amount.toFixed(2)}
          </span>
        )}
      </motion.div>

      <div className="flex gap-3 justify-center mb-5 border-b pb-7 border-stroke-secondary ">
        <button className="bg-[#1C1C1E] font-semibold text-sm text-white px-5 w-35 py-5 rounded-xl hover:bg-[#2C2C2E] transition-colors">
          TOP UP
        </button>
        <button className="bg-[#1C1C1E] font-semibold text-sm text-white px-5 w-35 py-5 rounded-xl hover:bg-[#2C2C2E] transition-colors">
          WITHDRAW
        </button>
        <button className="bg-[#1C1C1E] font-semibold text-sm text-white px-5 w-35 py-5 rounded-xl hover:bg-[#2C2C2E] transition-colors">
          SEND
        </button>
      </div>

      {/* <button className="text-[#4CD964] text-sm hover:underline">...</button> */}
    </div>
  )
}

