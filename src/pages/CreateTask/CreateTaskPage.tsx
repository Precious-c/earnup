"use client";

import { useState } from "react";
// import { TaskHeader } from "./components
import { CreateTaskStep1 } from "./components/CreateTaskStep1";
import { CreateTaskStep2 } from "./components/CreateTaskStep2";
import { CreateTaskStep3 } from "./components/CreateTaskStep3";
import { ProgressSteps } from "./components/ProgressSteps";
import type { TaskFormData } from "@/types";
// import { TaskHeader } from "./components/TaskHeader";
import TaskCard from "../Earn/components/TaskCard";
import tgIcon from "@/assets/icons/telegram.svg";
import { ArrowRight, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CreateTaskPage() {
  const [currentStep, setCurrentStep] = useState(0);
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
      {/* <TaskHeader title="Create Task" /> */}

      <main className=" pt-4">
        {currentStep > 0 && (
          <ProgressSteps currentStep={currentStep} totalSteps={3} />
        )}

        {currentStep === 0 && (
          <div className="font-arial">
            <h2 className="font-semibold text-xl text-center mb-8">
              Introducing Muna Wallet Partners Program
            </h2>
            <p className="text-center mb-6">
              Select the number of impressions or clicks you need, create your
              task, pay with Muna Points, USDT or TON
            </p>

            <div className="mt-4 mb-8">
              <TaskCard
                icon={tgIcon}
                id="muna"
                points={100000}
                status="pending"
                title="Subscribe to Muna Wallet"
                index={0}
              />
            </div>

            <ul className="flex flex-col mb-4 list-disc">
              <li className="flex items-center ">
                <div className="w-[10%]">
                  <Dot className="text-accent-green w-10 h-10 m-0 p-0" />
                </div>
                <p>27M Muna Wallet Users, 5M Daily Active Users</p>
              </li>
              <li className="flex items-center">
                <div className="w-[10%]">
                  <Dot className="text-accent-green w-10 h-10 m-0 p-0" />
                </div>
                <p>Pay with Muna Points, USDT or TONs</p>
              </li>
              <li className="flex items-start ">
                <div className="w-[10%]">
                  <Dot className="text-accent-green w-10 h-10 m-0 p-0" />
                </div>
                <p>
                  Geo-Targeting: Target your tasks by location in over 150
                  countries(Coming soon)
                </p>
              </li>
            </ul>

            <a href="#" className="my-6 mb-8 w-full flex text-accent-green">
              Read full rules here <ArrowRight />
            </a>

            <Button
              onClick={handleContinue}
              size="lg"
              className="w-full my-6 h-14 font-medium text-lg"
            >
              Publish own task
            </Button>
          </div>
        )}

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
