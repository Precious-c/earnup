"use client";

import { useState } from "react";
// import { TaskHeader } from "./components
import { CreateTaskStep1 } from "./components/CreateTaskStep1";
import { CreateTaskStep2 } from "./components/CreateTaskStep2";
import { CreateTaskStep3 } from "./components/CreateTaskStep3";
import { ProgressSteps } from "./components/ProgressSteps";
import type { TaskFormData } from "@/types";
import { TaskHeader } from "./components/TaskHeader";

export default function CreateTaskPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<TaskFormData>({
    description: "",
    link: "",
    contact: "",
    projectDescription: "",
    platform: "telegram",
    numberOfClicks: 10000,
    paymentMethod: "ton",
    pricePerClick: 0.01,
    totalPrice: 100,
  });

  const updateFormData = (data: Partial<TaskFormData>) => {
    setFormData((prev) => {
      const updated = { ...prev, ...data };

      // Recalculate total price when relevant fields change
      if (
        data.numberOfClicks !== undefined ||
        data.pricePerClick !== undefined
      ) {
        updated.totalPrice = updated.numberOfClicks * updated.pricePerClick;
      }

      return updated;
    });
  };

  const handleContinue = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePublish = () => {
    console.log("Publishing task:", formData);
    // Here you would submit the task to your backend
    // Then navigate to a success page or back to tasks list
  };

  return (
    <div className="min-h-screen text-white pb-20">
      <TaskHeader title="Create Task" />

      <main className="px-4 pt-4">
        <ProgressSteps currentStep={currentStep} totalSteps={3} />

        {currentStep === 1 && (
          <CreateTaskStep1
            formData={formData}
            updateFormData={updateFormData}
            onContinue={handleContinue}
          />
        )}

        {currentStep === 2 && (
          <CreateTaskStep2
            formData={formData}
            updateFormData={updateFormData}
            onContinue={handleContinue}
            onBack={handleBack}
          />
        )}

        {currentStep === 3 && (
          <CreateTaskStep3
            formData={formData}
            onPublish={handlePublish}
            onBack={handleBack}
          />
        )}
      </main>
    </div>
  );
}
