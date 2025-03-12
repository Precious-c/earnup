import { X } from 'lucide-react'

interface Props {
    step: "select" | "details" | "confirm"
    setStep: (step: "select" | "details" | "confirm") => void
    className?: string
}

export const CancelButton = ({step, setStep, className}:Props) => {
  return (
    <button 
        onClick={() => setStep(step)}
        className={`p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors ${className}`}>
        <X strokeWidth={3} className="w-5 h-5 text-gray-500" />
    </button>
  )
}
