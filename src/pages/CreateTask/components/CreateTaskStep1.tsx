"use client";

import { useState } from "react";
import type { TaskFormData } from "@/types";
import { Send } from "lucide-react";

interface CreateTaskStep1Props {
  formData: TaskFormData;
  updateFormData: (data: Partial<TaskFormData>) => void;
  onContinue: () => void;
}

export function CreateTaskStep1({
  formData,
  updateFormData,
  onContinue,
}: CreateTaskStep1Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.description.trim()) {
      newErrors.description = "Task description is required";
    }

    if (!formData.link.trim()) {
      newErrors.link = "Link is required";
    } else if (!formData.link.startsWith("https://")) {
      newErrors.link = "Link must start with https://";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact information is required";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      onContinue();
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Customize your task</h1>

      {/* Demo Preview */}
      <div className="mb-6">
        <p className="text-gray-400 mb-2">Demo preview:</p>
        <div className="bg-white rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
              <Send className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p className="text-black font-medium">
                {formData.description || "Describe your task"}
              </p>
              <p className="text-[#4CD964]">+ ₦ 100,000</p>
            </div>
          </div>
          <button className="bg-[#FF5C00] text-white px-4 py-1 rounded-full">
            Start
          </button>
        </div>
      </div>

      {/* Task Description */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Describe your task <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
            placeholder="E.g. Invite users to follow us on Telegram"
            className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4945FF] ${
              errors.description ? "border border-red-500" : ""
            }`}
            maxLength={40}
          />
          <span className="absolute right-3 bottom-3 text-xs text-gray-500">
            {formData.description.length} / 40
          </span>
        </div>
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      {/* Link */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Enter the link <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.link}
          onChange={(e) => updateFormData({ link: e.target.value })}
          placeholder="Please insert the link here"
          className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4945FF] ${
            errors.link ? "border border-red-500" : ""
          }`}
        />
        {errors.link && (
          <p className="text-red-500 text-sm mt-1">{errors.link}</p>
        )}
      </div>

      {/* Available Platforms */}
      <div>
        <p className="text-sm text-gray-400 mb-2">
          Available platforms: Telegram
        </p>
      </div>

      {/* Geo Targeting */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Geo targeting
        </label>
        <div className="relative">
          <select
            className="w-full p-3 bg-[#1C1C1E] rounded-xl text-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#4945FF]"
            onChange={(e) =>
              updateFormData({
                geoTarget: { language: e.target.value },
              })
            }
          >
            <option value="">Select language or region</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="ru">Russian</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Limit task views by language or region. +30% to click cost.
        </p>
      </div>

      {/* Contact */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Contact <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.contact}
          onChange={(e) => updateFormData({ contact: e.target.value })}
          placeholder="@username"
          className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4945FF] ${
            errors.contact ? "border border-red-500" : ""
          }`}
        />
        {errors.contact && (
          <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
        )}
        <p className="text-xs text-gray-400 mt-1">So we can contact you</p>
      </div>

      {/* Project Description */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">
          Describe your project <span className="text-red-500">*</span>
        </label>
        <textarea
          value={formData.projectDescription}
          onChange={(e) =>
            updateFormData({ projectDescription: e.target.value })
          }
          placeholder="Tell us about your project and what you'd like to promote"
          rows={4}
          className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4945FF] ${
            errors.projectDescription ? "border border-red-500" : ""
          }`}
        />
        {errors.projectDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.projectDescription}
          </p>
        )}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        className="w-full py-4 bg-[#4945FF] text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors"
      >
        Continue
      </button>
    </div>
  );
}
