import youtubeIcon from "@/assets/icons/youtube.svg"
import telegramIcon from "@/assets/icons/telegram.svg"
import xIcon from "@/assets/icons/x.svg"


interface TaskIconProps {
    icon: "telegram" | "youtube" | string
    size?: "sm" | "md" | "lg"
    className?: string
  }
  
  export function TaskIcon({ icon, size = "md", className = "" }: TaskIconProps) {
    const sizeClasses = {
      sm: "w-10 h-10",
      md: "w-16 h-16",
      lg: "w-20 h-20",
    }
  
    return (
      <div className={`relative flex items-center justify-center rounded-full${className}`}>
        <div className={`${sizeClasses[size]} bg-[#2C2C2E] rounded-full flex items-center justify-center`}>
          <img src={icon === "telegram" ? telegramIcon : icon === "youtube"? youtubeIcon : icon === "x" ? xIcon : icon} alt="" className="" />
        </div>
      </div>
    )
  }
  
  