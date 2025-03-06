import { CloudLightningIcon as Lightning, Smartphone, CreditCard, Send } from "lucide-react"

const actions = [
  { icon: <Lightning className="w-5 h-5" />, label: "Quick Top-up" },
  { icon: <Smartphone className="w-5 h-5" />, label: "Airtime" },
  { icon: <CreditCard className="w-5 h-5" />, label: "Cards" },
  { icon: <Send className="w-5 h-5" />, label: "Send Money" },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {actions.map((action, index) => (
        <button
          key={index}
          className="flex flex-col items-center p-4 bg-[#1C1C1E] rounded-xl hover:bg-[#2C2C2E] transition-colors"
        >
          <div className="mb-2 text-[#4CD964]">{action.icon}</div>
          <span className="text-white text-xs">{action.label}</span>
        </button>
      ))}
    </div>
  )
}

