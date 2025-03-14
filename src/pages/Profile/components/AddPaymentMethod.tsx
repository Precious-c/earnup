import { PaymentMethod } from "@/types";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

interface Props {
  setPaymentMethods: React.Dispatch<React.SetStateAction<PaymentMethod[]>>;
  paymentMethods: PaymentMethod[];
  errors: Record<string, string>;
  isAddingNew: boolean;
  setIsAddingNew: React.Dispatch<React.SetStateAction<boolean>>;
  handleCancel: () => void;
}

const AddPaymentMethod = ({
  handleCancel,
  isAddingNew,
  setIsAddingNew,
  setPaymentMethods,
  paymentMethods,
}: Props) => {
  const [formData, setFormData] = useState({
    id: "",
    type: "bank",
    accountName: "",
    accountNumber: "",
    bankName: "",
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
      if (!formData.bankName.trim()) {
        newErrors.bankName = "Bank name is required";
      }

      if (!formData.accountNumber.trim()) {
        newErrors.accountNumber = "Account number is required";
      }

      if (formData.accountNumber.trim().length !== 10) {
        newErrors.accountNumber = "Account should be 10 digits";
      }
    } else if (formData.type === "crypto") {
      if (!formData.accountNumber.trim()) {
        newErrors.accountNumber = "Wallet address is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveMethod = () => {
    if (!validateForm()) return;

    let updatedMethods: PaymentMethod[];

    if (isAddingNew) {
      if (formData.isDefault) {
        updatedMethods = paymentMethods.map((method) => ({
          ...method,
          isDefault: false,
        }));
      } else {
        updatedMethods = [...paymentMethods];
      }

      updatedMethods.push(formData as PaymentMethod);
    } else {
      // If editing and setting as default, remove default from others
      if (formData.isDefault) {
        updatedMethods = paymentMethods.map((method) => ({
          ...method,
          isDefault: method.id === formData.id,
        }));
      } else {
        // If trying to unset default on the only default method, prevent it
        const currentDefault = paymentMethods.find((m) => m.isDefault);
        if (currentDefault?.id === formData.id) {
          setErrors({
            isDefault: "At least one payment method must be set as default",
          });
          return;
        }

        updatedMethods = paymentMethods.map((method) =>
          method.id === formData.id ? (formData as PaymentMethod) : method
        );
      }
    }

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
          Name
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

      {formData.type === "bank" ? (
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
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              placeholder="e.g. Chase Bank"
              className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
                errors.bankName ? "border border-red-500" : ""
              }`}
            />
            {errors.bankName && (
              <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="accountNumber"
              className="block text-sm text-gray-400 mb-1"
            >
              Account Number
            </label>
            <input
              type="number"
              max={10}
              min={10}
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              placeholder="e.g. 5521238902"
              className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
                errors.accountNumber ? "border border-red-500" : ""
              }`}
            />
            {errors.accountNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.accountNumber}
              </p>
            )}
          </div>
        </>
      ) : (
        <div>
          <label
            htmlFor="accountNumber"
            className="block text-sm text-gray-400 mb-1"
          >
            Wallet Address
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleInputChange}
            placeholder="e.g. EQAigd8MjqsJejMuIB0UPhErOIGe22dezkpjvpWt9kOrtkG8"
            className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
              errors.accountNumber ? "border border-red-500" : ""
            }`}
          />
          {errors.accountNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>
          )}
        </div>
      )}

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
