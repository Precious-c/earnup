import { Toaster } from "react-hot-toast";
import { ItemDrawer } from "./components/ItemDrawer";
import { menuItems } from "@/data";

const ProfilePage = () => {
  const userEmail = "preshbryno@gmail.com";

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
          {menuItems.map((item) => (
            <ItemDrawer
              key={item.id}
              id={item.id}
              icon={item.icon}
              label={item.label}
              endIcon={item.endIcon}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
