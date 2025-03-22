import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import SettingsHeader from "./SettingsHeader";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export function LanguageSettingsPage() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages: Language[] = [
    { code: "en", name: "English", nativeName: "English" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "fr", name: "French", nativeName: "Français" },
    { code: "de", name: "German", nativeName: "Deutsch" },
    { code: "ru", name: "Russian", nativeName: "Русский" },
    { code: "zh", name: "Chinese", nativeName: "中文" },
    { code: "ja", name: "Japanese", nativeName: "日本語" },
    { code: "ko", name: "Korean", nativeName: "한국어" },
    { code: "ar", name: "Arabic", nativeName: "العربية" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  ];

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
  };

  const handleSave = () => {
    // Save language setting
    console.log("Language set to:", selectedLanguage);
    navigate("/settings");
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <SettingsHeader route={"settings"} title="Language" />

      <main className="pt-4 pb-20">
        <div className="bg-[#1C1C1E] rounded-xl overflow-hidden mb-6">
          {languages.map((language, index) => (
            <button
              key={language.code}
              className={`w-full flex items-center justify-between p-4 text-left ${
                index !== languages.length - 1
                  ? "border-b border-[#2C2C2E]"
                  : ""
              } ${selectedLanguage === language.code ? "bg-[#2C2C2E]" : "hover:bg-[#2C2C2E]"}`}
              onClick={() => handleLanguageSelect(language.code)}
            >
              <div className="flex items-center">
                <span className="text-white">{language.name}</span>
                <span className="text-gray-400 ml-2">
                  ({language.nativeName})
                </span>
              </div>
              {selectedLanguage === language.code && (
                <Check className="w-5 h-5 text-accent-green" />
              )}
            </button>
          ))}
        </div>

        <button
          onClick={handleSave}
          className="w-full py-4 bg-accent-green text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors"
        >
          Save Language
        </button>
      </main>
    </div>
  );
}
