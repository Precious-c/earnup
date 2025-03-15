import { SavedPaymentMethod } from "@/types";
import { CreditCard, Plus, Trash2 } from "lucide-react";

interface Props {
  paymentMethods: SavedPaymentMethod[];
  handleDelete: (id: string) => void;
  handleAddNew: () => void;
}

const PaymentMethodsList = ({
  paymentMethods,
  handleDelete,
  handleAddNew,
}: Props) => {
  return (
    <div>
      {paymentMethods.length > 0 ? (
        <div className="space-y-4 mb-6 px-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="border-stroke border rounded-xl p-4 relative"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#3C3C3E] rounded-full flex items-center justify-center mr-3">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      {method.accountName ? method.accountName : method.name}
                    </p>
                    <div className="text-sm text-gray-400">
                      {method.type === "bank"
                        ? `${method.name} • ${method.details
                            .slice(-4)
                            .padStart(method.details.length, "•")}`
                        : `${method.details.slice(
                            0,
                            6
                          )}...${method.details.slice(-4)}`}
                    </div>
                    {method.isDefault && (
                      <div className="text-xs text-[#4CD964] mt-1">Default</div>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDelete(method.id)}
                    className="p-2 text-gray-400 hover:bg-[#3C3C3E] rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400 mb-6">
          No payment methods saved yet
        </div>
      )}

      {/* Add new button */}
      <button
        onClick={handleAddNew}
        className="w-full flex items-center justify-center py-3 bg-[#2C2C2E] hover:bg-[#3C3C3E] rounded-xl transition-colors text-white"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add Payment Method
      </button>
    </div>
  );
};

export default PaymentMethodsList;
