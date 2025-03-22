import { Toaster } from "react-hot-toast";
import { ItemDrawer } from "./components/ItemDrawer";
import { menuItems } from "@/data";
import { ChevronRight, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const userEmail = "preshbryno@gmail.com";
  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      <div className="z-20">
        <Toaster />
      </div>

      <main className="pt-8 pb-20">
        {/* User Email */}
        <div className="mb-3">
          <p className="text-gray-400">{userEmail}</p>
        </div>

        {/* Menu Items */}
        <div className="space-y-1 flex flex-col">
          {menuItems.map((item) =>
            item.id === "settings" ? (
              <button
                onClick={() => navigate("/settings")}
                className="w-full flex items-center px-3 py-4 hover:bg-[#1C1C1E] transition-colors rounded-lg group"
              >
                <Settings className="w-7 h-7 p-[5px] rounded-sm text-white mr-3 bg-[#33313185] " />
                <span className="flex-1 text-left text-white">
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5 text-white group-hover:text-gray-400 transition-colors" />
              </button>
            ) : (
              <ItemDrawer
                key={item.id}
                id={item.id}
                icon={item.icon}
                label={item.label}
                endIcon={item.endIcon}
              />
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
