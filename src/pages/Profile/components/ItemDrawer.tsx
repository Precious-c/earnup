import { type LucideIcon } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import PaymentDetailsDrawer from "./PaymentDetailsDrawer";
import VerificationDrawer from "./VerificationDrawer";
import TwoFactorAuthDrawer from "./TwoFactorAuthDrawer";
import DocumentsDrawer from "./DocumentsDrawer";
import LanguageDrawer from "./LanguageDrawer";
import SupportDrawer from "./SupportDrawer";

interface ItemDrawerProps {
  id: string;
  icon: LucideIcon;
  label: string;
  endIcon?: LucideIcon;
  onClick?: () => void;
}

export function ItemDrawer({
  icon: Icon,
  label,
  endIcon: EndIcon,
  id,
}: ItemDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger>
        <button className="w-full flex items-center px-3 py-4 hover:bg-[#1C1C1E] transition-colors rounded-lg group">
          <Icon className="w-7 h-7 p-[5px] rounded-sm text-white mr-3 bg-[#33313185] " />
          <span className="flex-1 text-left text-white">{label}</span>
          {EndIcon && (
            <EndIcon className="w-5 h-5 text-white group-hover:text-gray-400 transition-colors" />
          )}
        </button>
      </DrawerTrigger>

      <DrawerContent className="bg-main border-stroke pt-2">
        <DrawerHeader>
          <DrawerTitle>{label}</DrawerTitle>
        </DrawerHeader>

        {id === "payment" ? (
          <PaymentDetailsDrawer />
        ) : id === "verification" ? (
          <VerificationDrawer />
        ) : id === "2fa" ? (
          <TwoFactorAuthDrawer />
        ) : id === " documents" ? (
          <DocumentsDrawer />
        ) : id === "language" ? (
          <LanguageDrawer />
        ) : (
          <SupportDrawer />
        )}
      </DrawerContent>
    </Drawer>
  );
}
