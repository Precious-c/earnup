import { withdrawOptions } from "@/data";
import { WithdrawOption } from "@/types";

interface Props {
    handleOptionSelect: (option: WithdrawOption) => void;
}
export const OptionSelection = ({handleOptionSelect}:Props) => (
    <>
    <div className=" pt-4 pb-20">
        <p className="text-gray-400 mb-6">Choose withdrawal method</p>

        {withdrawOptions.map((option) => (
        <button
            key={option.id}
            className="w-full flex items-center p-4 bg-[#1C1C1E] hover:bg-[#2C2C2E] rounded-xl transition-colors mb-4"
            onClick={() => handleOptionSelect(option)}
        >
            <img src={option.icon || "/placeholder.svg"} alt={option.name} className="w-10 h-10 rounded-full mr-3" />
            <div className="text-left flex-1">
            <div className="font-medium">{option.name}</div>
            <div className="text-sm text-gray-400">
                Fee: {option.fee} • Min: {option.minAmount}
            </div>
            </div>
            <div className="text-sm text-gray-400">{option.processingTime}</div>
        </button>
        ))}
    </div>
    </>
)