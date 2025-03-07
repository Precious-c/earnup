import type { LucideIcon } from "lucide-react"

interface ProfileMenuItemProps {
  icon: LucideIcon
  label: string
  endIcon?: LucideIcon
  onClick?: () => void
}

export function ProfileMenuItem({ icon: Icon, label, endIcon: EndIcon, onClick }: ProfileMenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center px-3 py-4 hover:bg-[#1C1C1E] transition-colors rounded-lg group"
    >
      <Icon className="w-7 h-7 p-[5px] rounded-sm text-white mr-3 bg-[#33313185] " />
      <span className="flex-1 text-left text-white">{label}</span>
      {EndIcon && <EndIcon className="w-5 h-5 text-white group-hover:text-gray-400 transition-colors" />}
    </button>
  )
}

