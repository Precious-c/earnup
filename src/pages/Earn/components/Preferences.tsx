import { ChevronRight, UserPen, Vibrate } from "lucide-react";

const Preferences = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full  flex justify-between items-center bg-card1 p-3 rounded-2xl">
        <div className="flex items-center justify-center">
          <UserPen className="mr-2" />
          <p className="mt-1 font-poppins">Change nickname</p>
        </div>

        <ChevronRight />
      </div>

      <div className="w-full  flex justify-between items-center bg-card1 p-3 rounded-xl">
        <div className="flex items-center justify-center">
          <Vibrate className="mr-2" />
          <p className="mt-1 font-poppins">Vibration</p>
        </div>

        <ChevronRight />
      </div>
    </div>
  );
};

export default Preferences;
