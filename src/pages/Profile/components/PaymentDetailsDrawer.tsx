import { PaymentMethod } from "@/types";
import { useState } from "react";
import { paymentMethodsData } from "@/data";
import PaymentMethodsList from "./PaymentMethodsList";
import AddPaymentMethod from "./AddPaymentMethod";
import toast from "react-hot-toast";

const PaymentDetailsDrawer = () => {
  const [paymentMethods, setPaymentMethods] =
    useState<PaymentMethod[]>(paymentMethodsData);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleAddNew = () => {
    paymentMethods.length > 0
      ? toast.error("Payment details already added")
      : setIsAddingNew(true);

    setErrors({});
  };

  const handleDelete = (id: string) => {
    const updatedMethods = paymentMethods.filter((method) => method.id !== id);

    setPaymentMethods(updatedMethods);
    // onSave(updatedMethods);
  };

  const handleCancel = () => {
    setIsAddingNew(false);
  };

  return (
    <div className="pb-6 px-2">
      {/* List of saved payment methods */}
      {!isAddingNew ? (
        <PaymentMethodsList
          paymentMethods={paymentMethods}
          handleAddNew={handleAddNew}
          handleDelete={handleDelete}
        />
      ) : (
        /* Add/Edit Form */
        <AddPaymentMethod
          handleCancel={handleCancel}
          paymentMethods={paymentMethods}
          setIsAddingNew={setIsAddingNew}
          setPaymentMethods={setPaymentMethods}
          errors={errors}
          isAddingNew={isAddingNew}
          //   handleSaveMethod={handleSaveMethod}
        />
      )}
    </div>
  );
};

export default PaymentDetailsDrawer;
