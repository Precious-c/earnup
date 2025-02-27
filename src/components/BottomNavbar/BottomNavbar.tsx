import type React from "react";
import { Link } from "react-router-dom";
import { Wallet, Sparkles, Users, User } from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  to: string;
  notification?: boolean;
}

export function BottomNavbar() {
  const navItems: NavItem[] = [
    {
      icon: <Wallet className="h-6 w-6" />,
      label: "Wallet",
      to: "/wallet",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      label: "Earn",
      to: "/earn",
      notification: true,
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: "Frens",
      to: "/frens",
    },
    {
      icon: <User className="h-6 w-6" />,
      label: "Profile",
      to: "/profile",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black border-t border-gray-800">
      <div className="grid h-full grid-cols-4 mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="inline-flex flex-col items-center justify-center px-5 group"
          >
            <div className="relative">
              {item.icon}
              {item.notification && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full -mt-1 -mr-1"></span>
              )}
            </div>
            <span className="text-xs text-white mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
