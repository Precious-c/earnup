import { ProfileMenuItem } from "./components/ProfileMenuItems"
import { menuItems } from "@/assets/icons/ProfileIcons"

const ProfilePage = () => {
  const userEmail = "preshbryno@gmail.com"

  const handleMenuItemClick = (item: (typeof menuItems)[0]) => {
    if (item.external) {
      window.open(item.href, "_blank")
    } else {
      
      console.log(`Navigating to: ${item.href}`)
    }
  }

  return (
    <div className="min-h-screen ">
      
      <main className="pt-8 pb-20">
        {/* User Email */}
        <div className="mb-3">
          <p className="text-gray-400">{userEmail}</p>
        </div>

        {/* Menu Items */}
        <div className="space-y-1">
          {menuItems.map((item) => (
            <ProfileMenuItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              endIcon={item.endIcon}
              onClick={() => handleMenuItemClick(item)}
            />
          ))}
        </div>
      </main>

  
    </div>
  )
}

export default ProfilePage