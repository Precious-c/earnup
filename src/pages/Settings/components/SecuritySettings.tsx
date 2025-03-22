import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Fingerprint, Eye, EyeOff } from "lucide-react";
import SettingsHeader from "./SettingsHeader";

export function SecuritySettingsPage() {
  const navigate = useNavigate();
  const [showPin, setShowPin] = useState(false);
  const [formData, setFormData] = useState({
    currentPin: "",
    newPin: "",
    confirmPin: "",
    useBiometrics: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePinVisibility = () => {
    setShowPin(!showPin);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors: Record<string, string> = {};

    if (!formData.currentPin) {
      newErrors.currentPin = "Current PIN is required";
    } else if (formData.currentPin.length !== 6) {
      newErrors.currentPin = "PIN must be 6 digits";
    }

    if (formData.newPin && formData.newPin.length !== 6) {
      newErrors.newPin = "PIN must be 6 digits";
    }

    if (formData.newPin && formData.newPin !== formData.confirmPin) {
      newErrors.confirmPin = "PINs do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Save security settings
      console.log("Security settings updated:", formData);
      navigate("/settings");
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <SettingsHeader route={"settings"} title="Transaction Security" />

      <main className="pt-4 pb-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-[#1C1C1E] rounded-xl p-4 mb-6">
            <p className="text-gray-400 text-sm">
              Set a 6-digit PIN to secure your transactions. You'll be asked to
              enter this PIN when sending crypto or making withdrawals.
            </p>
          </div>

          {/* Current PIN */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Current PIN
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type={showPin ? "text" : "password"}
                name="currentPin"
                value={formData.currentPin}
                onChange={handleChange}
                maxLength={6}
                pattern="[0-9]*"
                inputMode="numeric"
                className={`block w-full pl-10 pr-10 py-3 bg-[#1C1C1E] border-none rounded-xl focus:ring-1 focus:ring-accent-green focus:outline-none text-white ${
                  errors.currentPin ? "border border-red-500" : ""
                }`}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePinVisibility}
              >
                {showPin ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.currentPin && (
              <p className="text-red-500 text-sm mt-1">{errors.currentPin}</p>
            )}
          </div>

          {/* New PIN */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              New PIN (optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type={showPin ? "text" : "password"}
                name="newPin"
                value={formData.newPin}
                onChange={handleChange}
                maxLength={6}
                pattern="[0-9]*"
                inputMode="numeric"
                className={`block w-full pl-10 pr-10 py-3 bg-[#1C1C1E] border-none rounded-xl focus:ring-1 focus:ring-accent-green focus:outline-none text-white ${
                  errors.newPin ? "border border-red-500" : ""
                }`}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePinVisibility}
              >
                {showPin ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.newPin && (
              <p className="text-red-500 text-sm mt-1">{errors.newPin}</p>
            )}
          </div>

          {/* Confirm New PIN */}
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Confirm New PIN
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type={showPin ? "text" : "password"}
                name="confirmPin"
                value={formData.confirmPin}
                onChange={handleChange}
                maxLength={6}
                pattern="[0-9]*"
                inputMode="numeric"
                className={`block w-full pl-10 pr-10 py-3 bg-[#1C1C1E] border-none rounded-xl focus:ring-1 focus:ring-accent-green focus:outline-none text-white ${
                  errors.confirmPin ? "border border-red-500" : ""
                }`}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={togglePinVisibility}
              >
                {showPin ? (
                  <EyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
            {errors.confirmPin && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPin}</p>
            )}
          </div>

          {/* Biometric Authentication */}
          <div className="flex items-center justify-between bg-[#1C1C1E] rounded-xl p-4">
            <div className="flex items-center">
              <Fingerprint className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <h3 className="text-white font-medium">Use Biometrics</h3>
                <p className="text-gray-400 text-sm">
                  Use fingerprint or Face ID for transactions
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="useBiometrics"
                checked={formData.useBiometrics}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[#2C2C2E] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accering-accent-green"></div>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-accent-green text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors"
          >
            Save Security Settings
          </button>
        </form>
      </main>
    </div>
  );
}
