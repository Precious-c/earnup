import { ChevronRight } from "lucide-react";
import { SettingItem } from "../SettingsPage";

interface SettingCardProps {
  item: SettingItem;
  onClick: () => void;
}

export function SettingCard({ item, onClick }: SettingCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#1C1C1E] rounded-xl p-4 flex items-center justify-between hover:bg-[#2C2C2E] transition-colors text-left"
    >
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#2C2C2E] rounded-full flex items-center justify-center mr-3">
          {item.icon}
        </div>
        <div>
          <h3 className="text-white font-medium">{item.label}</h3>
          {item.description && (
            <p className="text-gray-400 text-sm">{item.description}</p>
          )}
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-500" />
    </button>
  );
}
