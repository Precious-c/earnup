import type React from "react"
interface TransactionMetric {
  label: string
  value: number
  icon: React.ReactNode
}

interface TransactionSummaryProps {
  metrics: TransactionMetric[]
}

export function TransactionSummary({ metrics }: TransactionSummaryProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-[#1C1C1E] rounded-xl p-4 px-3 text-center hover:bg-[#2C2C2E] transition-colors cursor-pointer "
        >
          <div className="text-gray-400 text-xs mb-2 items-center justify-center gap-1 flex flex-col">
            {metric.icon}
            {metric.label}
          </div>
          <div className="text-white font-medium">₦{metric.value.toFixed(2)}</div>
        </div>
      ))}
    </div>
  )
}

