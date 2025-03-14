import { WithdrawOption } from "@/types";
import { SavedPaymentMethod } from "../WithdrawPage";
import { Plus } from "lucide-react";

interface Props {
  savedPaymentMethods: SavedPaymentMethod[];
  selectedOption: WithdrawOption | null;
  handleAddNewPaymentMethod: () => void;
  handlePaymentMethodSelect: (method: SavedPaymentMethod) => void;
}
export const PaymentMethodSelection = ({
  savedPaymentMethods,
  selectedOption,
  handleAddNewPaymentMethod,
  handlePaymentMethodSelect,
}: Props) => {
  const filteredMethods = savedPaymentMethods.filter(
    (method) =>
      (selectedOption?.id === "ton" && method.type === "crypto") ||
      (selectedOption?.id === "bank" && method.type === "bank")
  );

  return (
    <div className="pt-4 pb-20">
      <p className="text-gray-400 mb-4">
        Select your {selectedOption?.name} account
      </p>

      {filteredMethods.map((method) => (
        <button
          key={method.id}
          className="w-full flex items-center p-4 bg-[#1C1C1E] hover:bg-[#2C2C2E] rounded-xl transition-colors mb-4"
          onClick={() => handlePaymentMethodSelect(method)}
        >
          <img
            src={method.icon || "/placeholder.svg"}
            alt={method.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="text-left flex-1">
            <div className="font-medium">{method.name}</div>
            <p className="text-sm  text-gray-400 truncate max-w-[250px]">
              {method.details}
            </p>
          </div>
          {method.isDefault && (
            <div className="bg-[#4CD964] text-black text-xs px-2 py-1 rounded-full">
              Default
            </div>
          )}
        </button>
      ))}

      <button
        onClick={handleAddNewPaymentMethod}
        className="w-full flex items-center justify-center p-4 border border-dashed border-gray-600 hover:border-gray-400 rounded-xl transition-colors"
      >
        <Plus className="w-5 h-5 mr-2" />
        <span>
          Add new {selectedOption?.id === "ton" ? "wallet" : "bank account"}
        </span>
      </button>
    </div>
  );
};
