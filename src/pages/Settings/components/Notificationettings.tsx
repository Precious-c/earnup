import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  DollarSign,
  Users,
  Star,
  MessageSquare,
} from "lucide-react";
import SettingsHeader from "./SettingsHeader";

interface NotificationSetting {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
}

export function NotificationSettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<NotificationSetting[]>([
    {
      id: "transactions",
      icon: <DollarSign className="w-5 h-5" />,
      title: "Transaction Alerts",
      description: "Get notified about deposits, withdrawals, and transfers",
      enabled: true,
    },
    {
      id: "social",
      icon: <Users className="w-5 h-5" />,
      title: "Social Notifications",
      description: "Get notified about friend activities and invites",
      enabled: true,
    },
    {
      id: "rewards",
      icon: <Star className="w-5 h-5" />,
      title: "Rewards & Tasks",
      description: "Get notified about new tasks and earned rewards",
      enabled: true,
    },
    {
      id: "marketing",
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Marketing & Promotions",
      description: "Get notified about special offers and promotions",
      enabled: false,
    },
  ]);

  const toggleSetting = (id: string) => {
    setSettings(
      settings.map((setting) =>
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  const handleSave = () => {
    // Save notification settings
    console.log("Notification settings saved:", settings);
    navigate("/settings");
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <SettingsHeader route={"settings"} title="Notification Preferences" />

      <main className="pt-4 pb-20">
        <div className="bg-[#1C1C1E] rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <h3 className="text-white font-medium">Push Notifications</h3>
                <p className="text-gray-400 text-sm">
                  Enable or disable all notifications
                </p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.some((s) => s.enabled)}
                onChange={() => {
                  const allEnabled = settings.every((s) => s.enabled);
                  setSettings(
                    settings.map((setting) => ({
                      ...setting,
                      enabled: !allEnabled,
                    }))
                  );
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-[#2C2C2E] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-green"></div>
            </label>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {settings.map((setting) => (
            <div
              key={setting.id}
              className="bg-[#1C1C1E] rounded-xl p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#2C2C2E] rounded-full flex items-center justify-center mr-3 text-gray-400">
                  {setting.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium">{setting.title}</h3>
                  <p className="text-gray-400 text-sm">{setting.description}</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={setting.enabled}
                  onChange={() => toggleSetting(setting.id)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#2C2C2E] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-green"></div>
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={handleSave}
          className="w-full py-4 bg-accent-green text-white font-medium rounded-xl hover:bg-opacity-90 transition-colors"
        >
          Save Preferences
        </button>
      </main>
    </div>
  );
}
