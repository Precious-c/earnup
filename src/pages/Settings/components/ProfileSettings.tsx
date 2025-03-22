import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Mail, User, Phone } from "lucide-react";
import SettingsHeader from "./SettingsHeader";

export function ProfileSettingsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "Aminu Waziru",
    email: "preshbryno@gmail.com",
    phone: "+2349124500321",
    bio: "Crypto enthusiast and Muna Wallet user",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors: Record<string, string> = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Save profile data
      console.log("Profile updated:", formData);
      navigate("/settings");
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <SettingsHeader route="settings" title="Update Profile" />

      <main className="pt-4 pb-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-[#2C2C2E] rounded-full flex items-center justify-center">
                <span className="text-4xl text-white">
                  {formData.username[0].toUpperCase()}
                </span>
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 w-8 h-8 bg-accent-green rounded-full flex items-center justify-center"
              >
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Tap to change profile picture
            </p>
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 bg-[#1C1C1E] border-none rounded-xl focus:ring-1 focus:ring-accent-green focus:outline-none text-white ${
                  errors.username ? "border border-red-500" : ""
                }`}
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full pl-10 pr-3 py-3 bg-[#1C1C1E] border-none rounded-xl focus:ring-1 focus:ring-accent-green focus:outline-none text-white ${
                  errors.email ? "border border-red-500" : ""
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 bg-[#1C1C1E] border-none rounded-xl focus:ring-1 focus:ring-accent-green focus:outline-none text-white"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              className="block w-full p-3 bg-[#1C1C1E] border-none rounded-xl focus:ring-1 focus:ring-accent-green focus:outline-none text-white"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-accent-green text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </main>
    </div>
  );
}
