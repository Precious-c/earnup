import { ArrowDown, ArrowLeftRight, ArrowUp, ArrowUpToLine, RefreshCw } from "lucide-react"

interface BalanceProps {
  amount: number
  currency?: string
}

export function Balance({ amount, currency = "₦" }: BalanceProps) {
  return (
    <div className="text-center mb-8 pt-4">
      {/* Balance Display */}
      <div className="text-5xl font-bold mb-8 flex justify-center">
        <p className="mr-2">{amount}</p> 
        {currency}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-8 max-w-xs mx-auto">
        <button className="group flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#1C1C1E] flex items-center justify-center mb-2 group-hover:bg-[#2C2C2E] transition-colors">
            <ArrowDown className="w-6 h-6 text-[#fff] transform transition-transform group-hover:scale-110" />
          </div>
          <span className="text-sm font-medium text-gray-400">Top Up</span>
        </button>

        <button className="group flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#1C1C1E] flex items-center justify-center mb-2 group-hover:bg-[#2C2C2E] transition-colors">
            <ArrowLeftRight className="w-6 h-6 text-[#fff] transform transition-transform group-hover:scale-110" />
          </div>
          <span className="text-sm font-medium text-gray-400">Withdraw</span>
        </button>

        <button className="group flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#1C1C1E] flex items-center justify-center mb-2 group-hover:bg-[#2C2C2E] transition-colors">
            <ArrowUp className="w-6 h-6 text-[#fff] transform transition-transform group-hover:scale-110" />
          </div>
          <span className="text-sm font-medium text-gray-400">Send</span>
        </button>
      </div>
    </div>
  )
}

