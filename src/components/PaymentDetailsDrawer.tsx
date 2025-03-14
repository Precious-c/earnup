// "use client";

// import type React from "react";

// import { useState, useEffect } from "react";
// import { X, Plus, CreditCard, Trash2, Edit2, AlertCircle } from "lucide-react";
// import { PaymentMethod } from "@/types";

// interface PaymentDetailsModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   savedPaymentMethods: PaymentMethod[];
//   onSave: (methods: PaymentMethod[]) => void;
// }

// export function PaymentDetailsModal({
//   isOpen,
//   onClose,
//   savedPaymentMethods,
//   onSave,
// }: PaymentDetailsModalProps) {
//   const [paymentMethods, setPaymentMethods] =
//     useState<PaymentMethod[]>(savedPaymentMethods);
//   const [editingMethod, setEditingMethod] = useState<PaymentMethod | null>(
//     null
//   );
//   const [isAddingNew, setIsAddingNew] = useState(false);
//   const [formData, setFormData] = useState({
//     id: "",
//     type: "bank",
//     accountName: "",
//     accountNumber: "",
//     bankName: "",
//     isDefault: false,
//   });
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     setPaymentMethods(savedPaymentMethods);
//   }, [savedPaymentMethods]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target as HTMLInputElement;

//     setFormData({
//       ...formData,
//       [name]:
//         type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.accountName.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (formData.type === "bank") {
//       if (!formData.bankName.trim()) {
//         newErrors.bankName = "Bank name is required";
//       }

//       if (!formData.accountNumber.trim()) {
//         newErrors.accountNumber = "Account number is required";
//       }
//     } else if (formData.type === "crypto") {
//       if (!formData.accountNumber.trim()) {
//         newErrors.accountNumber = "Wallet address is required";
//       }
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleAddNew = () => {
//     setIsAddingNew(true);
//     setEditingMethod(null);
//     setFormData({
//       id: Date.now().toString(),
//       type: "bank",
//       accountName: "",
//       accountNumber: "",
//       bankName: "",
//       isDefault: paymentMethods.length === 0, // Make default if it's the first method
//     });
//     setErrors({});
//   };

//   const handleEdit = (method: PaymentMethod) => {
//     setIsAddingNew(false);
//     setEditingMethod(method);
//     setFormData({
//       ...method,
//       // Ensure all fields exist even if the original method doesn't have them
//       bankName: method.bankName || "",
//     });
//     setErrors({});
//   };

//   const handleDelete = (id: string) => {
//     const updatedMethods = paymentMethods.filter((method) => method.id !== id);

//     // If we deleted the default method, make the first remaining one default
//     if (
//       paymentMethods.find((m) => m.id === id)?.isDefault &&
//       updatedMethods.length > 0
//     ) {
//       updatedMethods[0].isDefault = true;
//     }

//     setPaymentMethods(updatedMethods);
//     onSave(updatedMethods);
//   };

//   const handleSaveMethod = () => {
//     if (!validateForm()) return;

//     let updatedMethods: PaymentMethod[];

//     if (isAddingNew) {
//       // If the new method is set as default, remove default from others
//       if (formData.isDefault) {
//         updatedMethods = paymentMethods.map((method) => ({
//           ...method,
//           isDefault: false,
//         }));
//       } else {
//         updatedMethods = [...paymentMethods];
//       }

//       updatedMethods.push(formData as PaymentMethod);
//     } else {
//       // If editing and setting as default, remove default from others
//       if (formData.isDefault) {
//         updatedMethods = paymentMethods.map((method) => ({
//           ...method,
//           isDefault: method.id === formData.id,
//         }));
//       } else {
//         // If trying to unset default on the only default method, prevent it
//         const currentDefault = paymentMethods.find((m) => m.isDefault);
//         if (currentDefault?.id === formData.id) {
//           setErrors({
//             isDefault: "At least one payment method must be set as default",
//           });
//           return;
//         }

//         updatedMethods = paymentMethods.map((method) =>
//           method.id === formData.id ? (formData as PaymentMethod) : method
//         );
//       }
//     }

//     setPaymentMethods(updatedMethods);
//     onSave(updatedMethods);
//     setIsAddingNew(false);
//     setEditingMethod(null);
//   };

//   const handleCancel = () => {
//     setIsAddingNew(false);
//     setEditingMethod(null);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
//       <div className="relative w-full max-w-md max-h-[90vh] overflow-auto bg-[#1C1C1E] rounded-xl">
//         {/* Header */}
//         <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-[#1C1C1E] border-b border-gray-800">
//           <h2 className="text-xl font-medium text-white">Payment Methods</h2>
//           <button
//             onClick={onClose}
//             className="p-2 text-gray-400 hover:bg-[#2C2C2E] rounded-full transition-colors"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Content */}
//         <div className="p-4">
//           {!isAddingNew && !editingMethod ? (
//             <>
//               {/* List of saved payment methods */}
//               {paymentMethods.length > 0 ? (
//                 <div className="space-y-4 mb-6">
//                   {paymentMethods.map((method) => (
//                     <div
//                       key={method.id}
//                       className="bg-[#2C2C2E] rounded-xl p-4 relative"
//                     >
//                       <div className="flex items-start justify-between">
//                         <div className="flex items-center">
//                           <div className="w-10 h-10 bg-[#3C3C3E] rounded-full flex items-center justify-center mr-3">
//                             <CreditCard className="w-5 h-5 text-white" />
//                           </div>
//                           <div>
//                             <div className="font-medium text-white">
//                               {method.accountName}
//                             </div>
//                             <div className="text-sm text-gray-400">
//                               {method.type === "bank"
//                                 ? `${method.bankName} • ${method.accountNumber.slice(-4).padStart(method.accountNumber.length, "•")}`
//                                 : `${method.accountNumber.slice(0, 6)}...${method.accountNumber.slice(-4)}`}
//                             </div>
//                             {method.isDefault && (
//                               <div className="text-xs text-[#4CD964] mt-1">
//                                 Default
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleEdit(method)}
//                             className="p-2 text-gray-400 hover:bg-[#3C3C3E] rounded-lg transition-colors"
//                           >
//                             <Edit2 className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(method.id)}
//                             className="p-2 text-gray-400 hover:bg-[#3C3C3E] rounded-lg transition-colors"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-8 text-gray-400 mb-6">
//                   No payment methods saved yet
//                 </div>
//               )}

//               {/* Add new button */}
//               <button
//                 onClick={handleAddNew}
//                 className="w-full flex items-center justify-center py-3 bg-[#2C2C2E] hover:bg-[#3C3C3E] rounded-xl transition-colors text-white"
//               >
//                 <Plus className="w-5 h-5 mr-2" />
//                 Add Payment Method
//               </button>
//             </>
//           ) : (
//             /* Add/Edit Form */
//             <div className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="type"
//                   className="block text-sm text-gray-400 mb-1"
//                 >
//                   Payment Method Type
//                 </label>
//                 <select
//                   id="type"
//                   name="type"
//                   value={formData.type}
//                   onChange={handleInputChange}
//                   className="w-full p-3 bg-[#2C2C2E] rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-[#4CD964]"
//                 >
//                   <option value="bank">Bank Account</option>
//                   <option value="crypto">Crypto Wallet</option>
//                 </select>
//               </div>

//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm text-gray-400 mb-1"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.accountName}
//                   onChange={handleInputChange}
//                   placeholder={
//                     formData.type === "bank"
//                       ? "e.g. My Bank Account"
//                       : "e.g. My TON Wallet"
//                   }
//                   className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
//                     errors.name ? "border border-red-500" : ""
//                   }`}
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                 )}
//               </div>

//               {formData.type === "bank" ? (
//                 <>
//                   <div>
//                     <label
//                       htmlFor="bankName"
//                       className="block text-sm text-gray-400 mb-1"
//                     >
//                       Bank Name
//                     </label>
//                     <input
//                       type="text"
//                       id="bankName"
//                       name="bankName"
//                       value={formData.bankName}
//                       onChange={handleInputChange}
//                       placeholder="e.g. Chase Bank"
//                       className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
//                         errors.bankName ? "border border-red-500" : ""
//                       }`}
//                     />
//                     {errors.bankName && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.bankName}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="accountNumber"
//                       className="block text-sm text-gray-400 mb-1"
//                     >
//                       Account Number / IBAN
//                     </label>
//                     <input
//                       type="text"
//                       id="accountNumber"
//                       name="accountNumber"
//                       value={formData.accountNumber}
//                       onChange={handleInputChange}
//                       placeholder="e.g. GB29NWBK60161331926819"
//                       className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
//                         errors.accountNumber ? "border border-red-500" : ""
//                       }`}
//                     />
//                     {errors.accountNumber && (
//                       <p className="text-red-500 text-sm mt-1">
//                         {errors.accountNumber}
//                       </p>
//                     )}
//                   </div>
//                 </>
//               ) : (
//                 <div>
//                   <label
//                     htmlFor="accountNumber"
//                     className="block text-sm text-gray-400 mb-1"
//                   >
//                     Wallet Address
//                   </label>
//                   <input
//                     type="text"
//                     id="accountNumber"
//                     name="accountNumber"
//                     value={formData.accountNumber}
//                     onChange={handleInputChange}
//                     placeholder="e.g. EQAigd8MjqsJejMuIB0UPhErOIGe22dezkpjvpWt9kOrtkG8"
//                     className={`w-full p-3 bg-[#2C2C2E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4CD964] ${
//                       errors.accountNumber ? "border border-red-500" : ""
//                     }`}
//                   />
//                   {errors.accountNumber && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.accountNumber}
//                     </p>
//                   )}
//                 </div>
//               )}

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="isDefault"
//                   name="isDefault"
//                   checked={formData.isDefault}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 bg-[#2C2C2E] rounded border-gray-600 focus:ring-[#4CD964] focus:ring-2"
//                 />
//                 <label htmlFor="isDefault" className="ml-2 text-sm text-white">
//                   Set as default payment method
//                 </label>
//               </div>
//               {errors.isDefault && (
//                 <p className="text-red-500 text-sm">{errors.isDefault}</p>
//               )}

//               <div className="flex items-start p-4 bg-[#2C2C2E] rounded-xl mt-4">
//                 <AlertCircle className="w-5 h-5 text-[#FF9500] mr-2 flex-shrink-0 mt-0.5" />
//                 <p className="text-sm text-gray-400">
//                   Make sure all details are correct. These details will be used
//                   for withdrawals.
//                 </p>
//               </div>

//               <div className="flex space-x-3 pt-4">
//                 <button
//                   onClick={handleCancel}
//                   className="flex-1 py-3 bg-[#2C2C2E] hover:bg-[#3C3C3E] rounded-xl transition-colors text-white"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSaveMethod}
//                   className="flex-1 py-3 bg-[#4CD964] hover:bg-opacity-90 rounded-xl transition-colors text-black font-medium"
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
