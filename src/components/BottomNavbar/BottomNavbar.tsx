import { Link, useLocation } from "react-router-dom";
import { WalletIcon } from "@/assets/icons/WalletIcon";
import { SparkleIcon } from "@/assets/icons/SparkleIcon";
import { FriendsIcon } from "@/assets/icons/FriendsIcon";
import { ProfileIcon } from "@/assets/icons/ProfileIcon";

interface NavItem {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  label: string;
  to: string;
  notification?: boolean;
}

export function BottomNavbar() {
  const location = useLocation();
  const navItems: NavItem[] = [
    {
      icon: <WalletIcon className="h-6 w-6" />,
      activeIcon: <WalletIcon className="h-6 w-6" active />,
      label: "Wallet",
      to: "/wallet",
    },
    {
      icon: <SparkleIcon className="h-6 w-6" />,
      activeIcon: <SparkleIcon className="h-6 w-6" active />,
      label: "Earn",
      to: "/earn",
      notification: true,
    },
    {
      icon: <FriendsIcon className="h-6 w-6" />,
      activeIcon: <FriendsIcon className="h-6 w-6" active />,
      label: "Frens",
      to: "/frens",
    },
    {
      icon: <ProfileIcon className="h-6 w-6" />,
      activeIcon: <ProfileIcon className="h-6 w-6" active />,
      label: "Profile",
      to: "/profile",
    },
  ];

  console.log(location.pathname);

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-black border-t border-gray-800">
      <ul className="grid h-full grid-cols-4 mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`inline-flex flex-col items-center justify-center h-full w-full px-5 group ${
                  isActive ? "text-primary" : "text-[#868a86]"
                }`}
              >
                <div className="relative">
                  {isActive ? item.activeIcon : item.icon}
                  {item.notification && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full -mt-1 -mr-1"></span>
                  )}
                </div>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
