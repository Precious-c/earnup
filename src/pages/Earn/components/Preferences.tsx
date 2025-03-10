import { Switch } from "@/components/ui/switch";
import { ChevronRight, UserPen, Vibrate } from "lucide-react";
import { useState } from "react";

const Preferences = () => {
  const [vibration, setVibration] = useState(true)

  const handleVibration = () => {
    setVibration(!vibration) 
    navigator.vibrate(300)
  }
 
  return (


    <div className="space-y-3 mb-8 w-full">
    <div className="bg-[#1C1C1E] rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center">
        <UserPen className="mr-4" />
        <span className="text-white">Change nickname</span>
      </div>
      <ChevronRight />
    </div>

    <div className="bg-[#1C1C1E] rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Vibrate className="mr-4" />
        <span className="text-white">Vibration</span>
      </div>
      <Switch onClick={handleVibration}/>
    </div>
  </div>
  );
};

export default Preferences;
