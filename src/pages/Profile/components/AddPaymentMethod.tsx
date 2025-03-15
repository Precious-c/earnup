import { SavedPaymentMethod } from "@/types";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

interface Props {
  setPaymentMethods: React.Dispatch<React.SetStateAction<SavedPaymentMethod[]>>;
  paymentMethods: SavedPaymentMethod[];
  errors: Record<string, string>;
  isAddingNew: boolean;
  setIsAddingNew: React.Dispatch<React.SetStateAction<boolean>>;
  handleCancel: () => void;
}

const AddPaymentMethod = ({
  handleCancel,
  setIsAddingNew,
  setPaymentMethods,
  paymentMethods,
}: Props) => {
  const [formData, setFormData] = useState({
    id: "",
    type: "bank",
    name: "",
    accountName: "",
    details: "",
    isDefault: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.accountName.trim()) {
      newErrors.name = "Name is required";
    }

    if (formData.type === "bank") {
      if (!formData.name.trim()) {
        newErrors.name = "Bank name is required";
      }

      if (!formData.details.trim()) {
        newErrors.details = "Account number is required";
      }

      if (formData.type === "bank") {
        if (formData.details.trim().length !== 10) {
          newErrors.details = "Account should be 10 digits";
        }
      }
    } else if (formData.type === "crypto") {
      if (!formData.details.trim()) {
        newErrors.details = "Wallet address is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveMethod = () => {
    if (!validateForm()) return;

    let updatedMethods: SavedPaymentMethod[];
    updatedMethods = [...paymentMethods];
    updatedMethods.push(formData as SavedPaymentMethod);

    setPaymentMethods(updatedMethods);
    // onSave(updatedMethods);
    setIsAddingNew(false);
  };

  return (
    <div className="space-y-4 px-4">
      <div>
        <label htmlFor="type" className="block text-sm text-gray-400 mb-1">
          Payment Method Type
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          className="w-full p-3  bg-[#2C2C2E] rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#4CD964] "
        >
          <option className="text-sm h-3" value="bank">
            Bank Account
          </option>
          <option className="text-sm h-3" value="crypto">
            Crypto Wallet
          </option>
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
          Account Name
        </label>
        <input
          type="text"
          id="accountName"
          name="accountName"
          value={formData.accountName}
          onChange={handleInputChange}
          placeholder={
            formData.type === "bank"
              ? "Account holder's name"
              : "e.g. TON Wallet Addrress"
          }
          className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
            errors.name ? "border border-red-500" : ""
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {formData.type === "bank" && (
        <>
          <div>
            <label
              htmlFor="bankName"
              className="block text-sm text-gray-400 mb-1"
            >
              Bank Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g. Access Bank"
              className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
                errors.bankName ? "border border-red-500" : ""
              }`}
            />
            {errors.bankName && (
              <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
            )}
          </div>
        </>
      )}

      <div>
        <label htmlFor="details" className="block text-sm text-gray-400 mb-1">
          {formData.type === "bank" ? "Account Number" : "Wallet Address"}
        </label>
        <input
          type={formData.type === "bank" ? "number" : "text"}
          max={formData.type === "bank" ? 10 : ""}
          min={formData.type === "bank" ? 10 : ""}
          id="details"
          name="details"
          value={formData.details}
          onChange={handleInputChange}
          placeholder={
            formData.type === "bank"
              ? "e.g. 5521238902"
              : "e.g. EQAigd8MjqsJejMuIB0UPhErOIGe22dezkpjvpWt9kOrtkG8"
          }
          className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
            errors.details ? "border border-red-500" : ""
          }`}
        />
        {errors.details && (
          <p className="text-red-500 text-sm mt-1">{errors.details}</p>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="isDefault"
          name="isDefault"
          checked={formData.isDefault}
          onChange={handleInputChange}
          className="w-4 h-4 bg-[#2C2C2E] rounded border-gray-600 focus:ring-[#4CD964] focus:ring-2"
        />
        <label htmlFor="isDefault" className="ml-2 text-sm text-white">
          Set as default payment method
        </label>
      </div>
      {errors.isDefault && (
        <p className="text-red-500 text-sm">{errors.isDefault}</p>
      )}

      <div className="flex items-start p-4 bg-[#2C2C2E] rounded-xl mt-4">
        <AlertCircle className="w-5 h-5 text-[#FF9500] mr-2 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-400">
          Make sure all details are correct. These details will be used for
          withdrawals.
        </p>
      </div>

      <div className="flex space-x-3 pt-4">
        <button
          onClick={handleCancel}
          className="flex-1 py-3 bg-[#2C2C2E] hover:bg-[#3C3C3E] rounded-xl transition-colors text-white"
        >
          Cancel
        </button>
        <button
          onClick={handleSaveMethod}
          className="flex-1 py-3 bg-[#4CD964] hover:bg-opacity-90 rounded-xl transition-colors text-black font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddPaymentMethod;
