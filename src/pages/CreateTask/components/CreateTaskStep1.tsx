import { useState } from "react";
import type { TaskFormData } from "@/types";
import { ChevronDown, ChevronRight } from "lucide-react";
import { TaskIcon } from "@/pages/Task/components/TaskIcon";

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

  // variables
  const taskPoints = 100000;
  const availablePlatforms = ["telegram", "twitter", "discord"];
  const geoTargetingData = [
    { code: "en", language: "English" },
    { code: "es", language: "Spanish" },
    { code: "fr", language: "French" },
    { code: "de", language: "German" },
    { code: "ru", language: "Russian" },
  ];
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
      <h1 className="text-2xl font-bold mt-8">Customize your task</h1>

      {/* Demo Preview */}
      <div className="mb-6">
        <p className="text-gray-400 mb-2">Demo preview:</p>
        <div className="bg-[#1C1C1E] rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center">
            <TaskIcon
              icon="telegram"
              size="sm"
              className=" w-10 h-10 rounded-full mr-3"
            />

            <div>
              <p className="text-white font-medium">
                {formData.description || "Describe your task"}
              </p>
              <div className="text-[#4CD964] flex gap-2 items-center">
                <p className="mt-1">{taskPoints.toLocaleString()}</p>
                <svg
                  viewBox="0 0 14 14"
                  className="svg-icon svg-fill icon__up text-[#14d65a]"
                  style={{ width: "14px", height: "14px" }}
                >
                  <mask
                    id="svgiconid_kolo-logo-color_a_5_Gn4Xm"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="8"
                    y="3"
                    width="5"
                    height="8"
                  >
                    <path
                      d="M8.62 8.622v1.4a4.653 4.653 0 0 0 3.893-2.055 5.623 5.623 0 0 0 .082-.962 5.578 5.578 0 0 0-1.59-3.909 3.241 3.241 0 0 1 .907 2.26c0 .872-.34 1.692-.957 2.31a3.245 3.245 0 0 1-2.31.956H8.62Z"
                      fill="#fff"
                    ></path>
                  </mask>
                  <g mask="url(#svgiconid_kolo-logo-color_a_5_Gn4Xm)">
                    <mask
                      id="svgiconid_kolo-logo-color_b_5_Gn4Xm"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="8"
                      y="2"
                      width="5"
                      height="9"
                    >
                      <path
                        d="M12.742 2.95H8.476v7.218h4.266V2.95Z"
                        fill="#fff"
                      ></path>
                    </mask>
                    <g mask="url(#svgiconid_kolo-logo-color_b_5_Gn4Xm)">
                      <path
                        fill="url(#svgiconid_kolo-logo-color_c_5_Gn4Xm)"
                        d="M8.47 2.943h4.284v7.238H8.47z"
                      ></path>
                    </g>
                  </g>
                  <mask
                    id="svgiconid_kolo-logo-color_d_5_Gn4Xm"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="7"
                  >
                    <path
                      // pid="3"
                      d="M.008 6.64H1.41a5.558 5.558 0 0 1 1.629-3.6 5.573 5.573 0 0 1 2.998-1.558A4.646 4.646 0 0 1 9.754.816c.786.19 1.532.588 2.152 1.192A6.968 6.968 0 0 0 9.829.596 7.002 7.002 0 0 0 .008 6.639Z"
                      fill="#fff"
                    ></path>
                  </mask>
                  <g mask="url(#svgiconid_kolo-logo-color_d_5_Gn4Xm)">
                    <mask
                      id="svgiconid_kolo-logo-color_e_5_Gn4Xm"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="-1"
                      y="-1"
                      width="14"
                      height="8"
                    >
                      <path
                        d="M12.053-.146H-.137v6.931h12.19v-6.93Z"
                        fill="#fff"
                      ></path>
                    </mask>
                    <g mask="url(#svgiconid_kolo-logo-color_e_5_Gn4Xm)">
                      <path
                        fill="url(#svgiconid_kolo-logo-color_f_5_Gn4Xm)"
                        d="M-.15-.156h12.208v6.944H-.15z"
                      ></path>
                    </g>
                  </g>
                  <path
                    d="M.115 8.264a7 7 0 1 0 11.877-6.171l-.042-.043-.043-.042A4.639 4.639 0 0 0 9.755.816a4.679 4.679 0 0 0-3.717.666 4.645 4.645 0 0 0-.688.568 4.667 4.667 0 0 0 3.275 7.967v-1.4A3.24 3.24 0 0 1 6.34 7.66a3.245 3.245 0 0 1-.957-2.31c0-.872.34-1.693.957-2.31a3.246 3.246 0 0 1 2.31-.956 3.24 3.24 0 0 1 2.36 1.007 5.578 5.578 0 0 1 1.578 4.299 5.652 5.652 0 0 1-.193 1.12 5.568 5.568 0 0 1-1.435 2.45A5.563 5.563 0 0 1 7 12.6a5.565 5.565 0 0 1-3.96-1.64 5.56 5.56 0 0 1-1.629-4.32H.01a7.03 7.03 0 0 0 .106 1.624Z"
                    fill="currentColor"
                  ></path>
                  <defs>
                    <linearGradient
                      id="svgiconid_kolo-logo-color_c_5_Gn4Xm"
                      x1="12.681"
                      y1="3.557"
                      x2="8.882"
                      y2="9.434"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="currentColor" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="currentColor"></stop>
                    </linearGradient>
                    <linearGradient
                      id="svgiconid_kolo-logo-color_f_5_Gn4Xm"
                      x1="10.9"
                      y1="1.493"
                      x2=".978"
                      y2="4.414"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="currentColor" stop-opacity="0"></stop>
                      <stop offset="1" stop-color="currentColor"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          {/* <button className="bg-[#FF5C00] text-white px-4 py-1 rounded-full">
            Start
          </button> */}
          <ChevronRight className="text-gray-400" />
        </div>
      </div>

      {/* Task Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-white mb-1"
        >
          Describe your task <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            id="description"
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
            placeholder="E.g. Invite users to follow us on Telegram"
            className={`w-full p-3 bg-[#1C1C1E] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-accent-green ${
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
        <label
          htmlFor="link"
          className="block text-sm font-medium text-white mb-1"
        >
          Enter the link <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="link"
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
          Available platforms:
          {availablePlatforms.map(
            (availablePlatform, index) =>
              ` ${availablePlatform}${availablePlatforms.length > 0 && index !== availablePlatforms.length - 1 ? "," : ""}`
          )}
        </p>
      </div>

      {/* Geo Targeting */}
      <div>
        <label
          htmlFor="languageRegion"
          className="block text-sm font-medium text-white mb-1"
        >
          Geo targeting
        </label>
        <div className="relative">
          <select
            id="languageRegion"
            className="w-full p-3 bg-[#1C1C1E] rounded-xl text-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#4945FF]"
            onChange={(e) =>
              updateFormData({
                geoTarget: { language: e.target.value },
              })
            }
          >
            <option value="">Select language or region</option>
            {geoTargetingData.map((option) => (
              <option value={option.code}>{option.language}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <ChevronDown className="text-gray-400" />
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Limit task views by language or region. +30% to click cost.
        </p>
      </div>

      {/* Contact */}
      <div>
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-white mb-1"
        >
          Contact <span className="text-red-500">*</span>
        </label>
        <input
          id="contact"
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
        <label
          htmlFor="description"
          className="block text-sm font-medium text-white mb-1"
        >
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
