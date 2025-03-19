import createtaskIcon from "@/assets/images/seal.Ct9Xs28w.gif";
import { ArrowRight } from "lucide-react";
const CreateTaskCard = () => {
  return (
    <div className="flex items-center gap-2 rounded-lg w-full bg-[#1C1C1E] text-gray-100 hover:bg-[#2C2C2E] px-4 py-1 my-4 mt-2 cursor-pointer ">
      <div>
        <img src={createtaskIcon} alt="" className="w-20 h-20" />
      </div>
      <div>
        <p className="font-semibold text-lg">I want my task here</p>
        <p className="text-accent-green flex gap-2 text-sm">
          Create your own task here <ArrowRight />
        </p>
      </div>
    </div>
  );
};

export default CreateTaskCard;
