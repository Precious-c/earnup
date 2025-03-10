import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface Props {
    className?: string
}
const NavigateBackButton = ({className}: Props) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(-1)} className={`${className} p-2 -ml-2 hover:bg-[#1C1C1E] rounded-full transition-colors`}>
            <ArrowLeft className="w-6 h-6" />
        </button>
  )
}

export default NavigateBackButton
