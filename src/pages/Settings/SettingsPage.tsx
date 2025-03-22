"use client";

import type React from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Lock,
  Wallet,
  Bell,
  Globe,
  FileText,
  MessageCircle,
} from "lucide-react";
import { SettingCard } from "./components/SettingCard";
import SettingsHeader from "./components/SettingsHeader";

export interface SettingItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  description?: string;
  route?: string;
  action?: () => void;
}

export function SettingsPage() {
  const navigate = useNavigate();

  const settingItems: SettingItem[] = [
    {
      id: "profile",
      icon: <User className="w-5 h-5" />,
      label: "Update Profile",
      description: "Edit your personal information",
      route: "/settings/profile",
    },
    {
      id: "security",
      icon: <Lock className="w-5 h-5" />,
      label: "Transaction Security",
      description: "Set password/PIN for transactions",
      route: "/settings/security",
    },
    {
      id: "wallet",
      icon: <Wallet className="w-5 h-5" />,
      label: "Connect Wallet",
      description: "Link external wallets",
      route: "/settings/connect-wallet",
    },
    {
      id: "notifications",
      icon: <Bell className="w-5 h-5" />,
      label: "Notification Preferences",
      description: "Manage your notification settings",
      route: "/settings/notifications",
    },
    {
      id: "language",
      icon: <Globe className="w-5 h-5" />,
      label: "Language",
      description: "Change app language",
      route: "/settings/language",
    },
    {
      id: "privacy",
      icon: <FileText className="w-5 h-5" />,
      label: "Privacy Policy",
      description: "Read our privacy policy",
      route: "/settings/privacy",
    },
    {
      id: "support",
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Support",
      description: "Get help with any issues",
      route: "/settings/support",
    },
  ];

  const handleItemClick = (item: SettingItem) => {
    if (item.action) {
      item.action();
    } else if (item.route) {
      navigate(item.route);
    }
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <SettingsHeader title="Settings" route={-1} />

      <main className="py-4 pb-20">
        <div className="space-y-4">
          {settingItems.map((item) => (
            <SettingCard
              key={item.id}
              item={item}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Muna Wallet v1.0.0</p>
        </div>
      </main>
    </div>
  );
}
